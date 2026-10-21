import type { NextRequest } from "next/server";
import { z } from "zod";
import { createRateLimiter, clientIp } from "@/lib/rate-limit";
import { SITE_URL } from "@/lib/seo";

// Run on Node.js runtime (not edge) for maximum compatibility.
export const runtime = "nodejs";

// Where leads are delivered.
const TO_EMAIL = "info@stonebritecg.com";
// Until the sending domain (stonebritecg.com) is verified in Resend, we send
// from Resend's shared onboarding address. Once verified, set LEAD_FROM_EMAIL
// to something like "Stonebrite Website <leads@stonebritecg.com>".
const FROM_EMAIL = process.env.LEAD_FROM_EMAIL || "Stonebrite Website <onboarding@resend.dev>";

// Largest JSON body we will read. Every field is capped by the schema below,
// and the sum of those caps is well under this.
const MAX_BODY_BYTES = 16 * 1024;

// Abuse limits. A real household sends one or two requests; a bot script
// sends hundreds. Per-IP: 5 per 10 minutes. Per-instance global: 60 per
// minute, so a distributed flood cannot burn through the Resend quota.
const perIpLimit = createRateLimiter({ limit: 5, windowMs: 10 * 60 * 1000 });
const globalLimit = createRateLimiter({ limit: 60, windowMs: 60 * 1000 });

/**
 * Only accept submissions from our own pages. Browsers send `Origin` on
 * cross-site POSTs and `Sec-Fetch-Site` on every fetch, so a form on another
 * domain (or a hotlinked script) is refused. Requests from the same host
 * (production, Vercel previews, localhost) and from the apex/www site pass.
 */
function isAllowedOrigin(req: NextRequest): boolean {
  const origin = req.headers.get("origin");
  const secFetchSite = req.headers.get("sec-fetch-site");
  const host = req.headers.get("host");

  if (origin) {
    let originHost: string;
    try {
      originHost = new URL(origin).host;
    } catch {
      return false;
    }
    if (host && originHost === host) return true;
    const siteHost = new URL(SITE_URL).host;
    return originHost === siteHost || originHost === `www.${siteHost}`;
  }

  // No Origin header: non-browser client, or an old browser. Sec-Fetch-Site
  // (when present) still tells us whether a browser made a cross-site call.
  if (secFetchSite && secFetchSite !== "same-origin" && secFetchSite !== "none") {
    return false;
  }
  return true;
}

// Loose but safe: one "@", no whitespace, something after the dot. Used only
// to decide whether the address can be a Reply-To — never to reject a lead.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** One line, no control characters — for the email subject. */
function oneLine(s: string): string {
  return s.replace(/[\u0000-\u001F\u007F]+/g, " ").replace(/\s+/g, " ").trim();
}

const LeadSchema = z.object({
  source: z.string().max(60).optional(),
  service: z.string().max(80).optional(),
  name: z.string().max(120).optional(),
  phone: z.string().max(40).optional(),
  email: z.string().max(160).optional(),
  city: z.string().max(120).optional(),
  zip: z.string().max(20).optional(),
  description: z.string().max(4000).optional(),
  timeline: z.string().max(120).optional(),
  budget: z.string().max(120).optional(),
  contactTime: z.string().max(120).optional(),
  // Honeypot — real users never fill this; bots often do. Non-autofill name:
  // browsers autofill recognized hidden fields (like "company") from saved
  // contact info, which would trip the trap for real customers.
  topic: z.string().max(200).optional(),
});

type Lead = z.infer<typeof LeadSchema>;

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const FIELD_LABELS: [keyof Lead, string][] = [
  ["service", "Service"],
  ["name", "Name"],
  ["phone", "Phone"],
  ["email", "Email"],
  ["city", "City"],
  ["zip", "ZIP"],
  ["timeline", "Timeline"],
  ["budget", "Budget"],
  ["contactTime", "Best time to contact"],
  ["description", "Project details"],
  ["source", "Submitted from"],
];

function rows(data: Lead) {
  return FIELD_LABELS.filter(([k]) => (data[k] ?? "").toString().trim() !== "").map(
    ([k, label]) => ({ label, value: (data[k] ?? "").toString().trim() }),
  );
}

function buildHtml(data: Lead): string {
  const cells = rows(data)
    .map(
      (r) =>
        `<tr>
          <td style="padding:8px 16px 8px 0;color:#5C5447;font:600 13px/1.5 Arial,sans-serif;vertical-align:top;white-space:nowrap">${esc(r.label)}</td>
          <td style="padding:8px 0;color:#14110D;font:400 14px/1.6 Arial,sans-serif">${esc(r.value).replace(/\n/g, "<br>")}</td>
        </tr>`,
    )
    .join("");
  return `<div style="max-width:560px;margin:0 auto;font-family:Arial,sans-serif">
    <div style="background:#0B1F33;padding:20px 24px;border-radius:8px 8px 0 0">
      <div style="color:#E5B53A;font:700 12px/1 Arial,sans-serif;letter-spacing:2px;text-transform:uppercase">Stonebrite · New Lead</div>
      <div style="color:#FBF7EE;font:500 22px/1.2 Georgia,serif;margin-top:8px">New estimate request</div>
    </div>
    <div style="border:1px solid #EFE5D1;border-top:0;border-radius:0 0 8px 8px;padding:20px 24px">
      <table style="border-collapse:collapse;width:100%">${cells}</table>
    </div>
    <div style="color:#8A8073;font:400 12px/1.5 Arial,sans-serif;margin-top:14px;text-align:center">
      Reply directly to this email to reach the customer.
    </div>
  </div>`;
}

function buildText(data: Lead): string {
  return (
    "New estimate request\n\n" +
    rows(data)
      .map((r) => `${r.label}: ${r.value}`)
      .join("\n")
  );
}

export async function POST(req: NextRequest) {
  if (!isAllowedOrigin(req)) {
    return Response.json({ ok: false, error: "forbidden" }, { status: 403 });
  }

  const declaredLength = Number(req.headers.get("content-length") ?? 0);
  if (declaredLength > MAX_BODY_BYTES) {
    return Response.json({ ok: false, error: "too_large" }, { status: 413 });
  }

  const ip = clientIp(req.headers);
  const perIp = perIpLimit(ip);
  const overall = globalLimit("all");
  if (!perIp.ok || !overall.ok) {
    const retryAfter = Math.max(perIp.retryAfterSec, overall.retryAfterSec);
    return Response.json(
      { ok: false, error: "rate_limited" },
      { status: 429, headers: { "Retry-After": String(retryAfter) } },
    );
  }

  let data: Lead;
  try {
    const raw = await req.text();
    if (raw.length > MAX_BODY_BYTES) {
      return Response.json({ ok: false, error: "too_large" }, { status: 413 });
    }
    data = LeadSchema.parse(JSON.parse(raw));
  } catch {
    return Response.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  // Honeypot hits are flagged, never dropped: autofill can trip the trap for
  // a real customer, and a lost lead costs far more than a spam email.
  const suspectedSpam = Boolean(data.topic?.trim());

  // Require at least one way to reach the customer.
  if (!data.phone?.trim() && !data.email?.trim()) {
    return Response.json({ ok: false, error: "missing_contact" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Never show the user a fake success — surface a real error instead.
    console.error("[lead] RESEND_API_KEY is not set. Lead was NOT delivered:", buildText(data));
    return Response.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const subject =
    (suspectedSpam ? "[Possible spam] " : "") +
    "New estimate request" +
    (data.service ? ` — ${oneLine(data.service)}` : "") +
    (data.name ? ` — ${oneLine(data.name)}` : "");

  // Only a well-formed address becomes the Reply-To; a typo'd one still
  // reaches Abel in the email body, so no lead is lost over it.
  const replyTo = data.email?.trim() ?? "";
  const replyToValid = replyTo !== "" && EMAIL_RE.test(replyTo);

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        subject,
        html: buildHtml(data),
        text: buildText(data),
        ...(replyToValid ? { reply_to: replyTo } : {}),
      }),
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error("[lead] Resend responded", res.status, body);
      return Response.json({ ok: false, error: "send_failed" }, { status: 502 });
    }
  } catch (err) {
    console.error("[lead] Failed to reach Resend:", err);
    return Response.json({ ok: false, error: "send_failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
