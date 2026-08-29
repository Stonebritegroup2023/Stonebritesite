"use client";

import { useState } from "react";

const SERVICES = [
  { id: "t2s", label: "Tub-to-Shower", icon: <ShowerIcon /> },
  { id: "bath", label: "Bathroom", icon: <BathIcon /> },
  { id: "kitchen", label: "Kitchen", icon: <KitchenIcon /> },
  { id: "other", label: "Other", icon: <OtherIcon /> },
];

/** Slim quick-estimate band shown under each service-page hero, pre-selected
    to that page's service. Same lead pipeline as the other forms. */
export default function EstimateBand({
  defaultService,
  source,
}: {
  defaultService: "t2s" | "bath" | "kitchen";
  source: string;
}) {
  const [activeService, setActiveService] = useState<string>(defaultService);
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!phone.trim() || submitting) return;
    setSubmitting(true);
    setError(false);
    const service = SERVICES.find((s) => s.id === activeService)?.label ?? "Bathroom";
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source, service, phone }),
      });
      if (!res.ok) throw new Error("failed");
      // Full navigation (not router.push) so the Google tag fires a real page
      // load on /thank-you — the Ads conversion is a page-load trigger.
      window.location.assign("/thank-you");
    } catch {
      setError(true);
      setSubmitting(false);
    }
  }

  const active = SERVICES.find((s) => s.id === activeService);
  const wantLabel = activeService === "other" ? "custom" : (active?.label ?? "").toLowerCase();

  return (
    <div className="estimate-band-wrap sb-container">
      <form onSubmit={handleSubmit} className="estimate-band">
        <div className="estimate-band-row">
          <div className="estimate-band-want">
            <span className="estimate-band-lbl">I want a</span>
            <span className="estimate-band-val">{wantLabel} remodel</span>
          </div>
          <div className="estimate-band-chips">
            {SERVICES.map((s) => {
              const isActive = s.id === activeService;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveService(s.id)}
                  aria-pressed={isActive}
                  className={`estimate-band-chip${isActive ? " is-active" : ""}`}
                >
                  <span style={{ color: isActive ? "var(--color-gold-300)" : "var(--color-gold-600)", display: "inline-flex" }}>
                    {s.icon}
                  </span>
                  {s.label}
                </button>
              );
            })}
          </div>
          <label className="estimate-band-phone">
            <PhoneIcon />
            <span style={{ display: "flex", flexDirection: "column", gap: 1, flex: 1 }}>
              <span className="estimate-band-microlabel">Your Phone</span>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(916) 000-0000"
                aria-label="Your phone number"
              />
            </span>
          </label>
          <button
            type="submit"
            className="sb-btn sb-btn-primary estimate-band-submit"
            disabled={submitting}
            style={{ opacity: submitting ? 0.7 : 1, cursor: submitting ? "wait" : "pointer" }}
          >
            {submitting ? "Sending…" : "Get My Free Estimate"}
          </button>
        </div>
        {error && (
          <div style={{ fontSize: 12.5, color: "#B23A2E", lineHeight: 1.5 }}>
            Something went wrong sending your request. Please try again, or call us at{" "}
            <a href="tel:5307716025" style={{ color: "#B23A2E", fontWeight: 700 }}>(530) 771-6025</a>.
          </div>
        )}
        <div className="estimate-band-foot">
          <span className="estimate-band-fine">
            <span style={{ color: "var(--color-gold-600)", display: "inline-flex" }}><CheckIcon /></span>
            Fast
            <span className="estimate-band-dot">·</span>
            <span style={{ whiteSpace: "nowrap" }}>No obligation</span>
            <span className="estimate-band-dot">·</span>
            <span style={{ color: "var(--color-success)", fontWeight: 600 }}>Replies in ~1 hour during business hours</span>
          </span>
          <span className="estimate-band-consent">
            By submitting, you agree Stonebrite may call or text you about your project.
          </span>
        </div>
      </form>
    </div>
  );
}

function ShowerIcon() {
  return <svg viewBox="0 0 32 32" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4v6"/><circle cx="16" cy="13" r="3"/><path d="M11 18l-2 4M16 18v6M21 18l2 4M13 22l-1 3M19 22l1 3"/></svg>;
}
function BathIcon() {
  return <svg viewBox="0 0 32 32" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 16h26v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path d="M8 16v-7a3 3 0 0 1 6 0"/><circle cx="11" cy="11" r="1.3"/><path d="M7 25l-1.5 3M27 25l1.5 3"/></svg>;
}
function KitchenIcon() {
  return <svg viewBox="0 0 32 32" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="6" width="22" height="20" rx="1.5"/><path d="M5 14h22"/><circle cx="10" cy="10" r="0.8" fill="currentColor"/><circle cx="14" cy="10" r="0.8" fill="currentColor"/><path d="M11 19h10v5H11z"/></svg>;
}
function OtherIcon() {
  return <svg viewBox="0 0 32 32" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 26V14l10-8 10 8v12"/><path d="M13 26v-7h6v7"/></svg>;
}
function PhoneIcon() {
  return <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="var(--color-gold-600)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>;
}
function CheckIcon() {
  return <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 13 9 18 20 6"/></svg>;
}
