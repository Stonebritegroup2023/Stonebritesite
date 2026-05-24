import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import TrustStrip from "@/components/sections/TrustStrip";
import Process from "@/components/sections/Process";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Bathroom Remodeling | Stonebrite Construction Group",
  description:
    "Full bathroom remodels in Greater Sacramento — clear scope, waterproofing, tile, vanity, fixtures, and a 5-year workmanship warranty. Family-owned, owner-led.",
  keywords:
    "bathroom remodeling Sacramento, bathroom renovation Roseville, full bathroom remodel Folsom, tile shower installation, bathroom contractor",
};

const SCOPE_ITEMS = [
  "Demolition & hauling",
  "Shower / tub area rebuild",
  "Waterproofing system (membrane + seams sealed)",
  "Plumbing fixtures & valve",
  "Electrical (GFCI outlets, exhaust fan, lighting)",
  "Vanity & mirror",
  "Flooring (tile or LVP)",
  "Paint & drywall",
  "Final cleanup & walkthrough",
  "5-year workmanship warranty",
];

const COST_FACTORS = [
  "Scope of demolition",
  "Plumbing relocations",
  "Shower size & waterproofing system",
  "Tile vs. panel wall systems",
  "Vanity & fixture grade",
  "Electrical changes (lighting, fan, GFCI)",
  "Layout changes vs. in-place replacements",
];

const FAQS = [
  {
    q: "How long does a bathroom remodel take?",
    a: "Most full bathroom remodels take 7–14 business days once work begins, depending on scope, layout changes, and material lead times. We provide a specific timeline in your proposal so you know exactly what to expect week by week.",
    open: true,
  },
  {
    q: "What is included in the 5-year warranty?",
    a: "Our limited workmanship warranty covers waterproofing, plumbing connections, and electrical installations performed by our crew. If something we did causes a defect within the warranty period, we come back and make it right. Manufacturer warranties apply separately to fixtures, tile, and materials.",
    open: false,
  },
  {
    q: "Do I need to vacate the bathroom during work?",
    a: "Yes — the bathroom will be out of service during the remodel. For a single-bathroom home, we do our best to sequence work efficiently to minimize disruption, and we'll discuss a plan during the estimate visit.",
    open: false,
  },
  {
    q: "How do you handle project communication?",
    a: "You'll receive daily project updates covering what was done, what's happening tomorrow, and any decisions needed. You also get access to a client portal for approvals, selections, and schedule visibility.",
    open: false,
  },
  {
    q: "What selections will I need to make?",
    a: "Tile (floor and wall), vanity, mirror, lighting fixtures, faucet, showerhead, exhaust fan, and paint color. We guide you through each selection with a clear deadline so material lead times don't delay your project.",
    open: false,
  },
  {
    q: "How do you handle project-specific requirements?",
    a: "Every project starts with an in-home estimate where we assess your specific layout, plumbing, and electrical. Special requirements — like aging-in-place features, radiant heat, or custom niches — are scoped and priced in writing before any work begins.",
    open: false,
  },
];

export default function BathroomsPage() {
  return (
    <>
      <Nav activeHref="/bathrooms" dark />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--color-navy-900)",
          color: "var(--color-cream-50)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 75% 20%, rgba(229,181,58,0.14), transparent 45%), radial-gradient(circle at 10% 80%, rgba(229,181,58,0.06), transparent 40%)",
          }}
        />
        <div
          className="sb-container"
          style={{ padding: "96px 56px 104px", position: "relative" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 72,
              alignItems: "center",
            }}
          >
            <div>
              <span className="sb-eyebrow" style={{ color: "var(--color-gold-300)" }}>
                Bathroom Remodeling
              </span>
              <h1
                style={{
                  fontSize: "clamp(40px, 4.5vw, 64px)",
                  marginTop: 18,
                  lineHeight: 1.03,
                  color: "var(--color-cream-50)",
                  letterSpacing: "-0.015em",
                }}
              >
                Full Bathroom Remodels Built for Daily Life and Lasting Value
              </h1>
              <p
                style={{
                  marginTop: 24,
                  fontSize: 18,
                  color: "var(--color-stone-300)",
                  lineHeight: 1.65,
                  maxWidth: 520,
                }}
              >
                We handle every part of a full bathroom remodel — demolition, waterproofing, plumbing, electrical, tile, vanity, and finish work — with a clear written scope, daily communication, and a 5-year workmanship warranty.
              </p>
              <div
                style={{
                  marginTop: 36,
                  display: "flex",
                  gap: 14,
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <Link href="/contact" className="sb-btn sb-btn-primary sb-btn-lg">
                  Get My Free Estimate <ArrowIcon />
                </Link>
                <Link href="/gallery" className="sb-btn sb-btn-ghost-cream sb-btn-lg">
                  View Gallery
                </Link>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 12 }}>
              <div
                className="sb-photo"
                style={{ height: 440, gridRow: "1 / span 2", borderRadius: 14 }}
              >
                <span className="sb-photo-label">FULL BATH REMODEL · DROP IN REAL PROJECT PHOTO</span>
              </div>
              <div className="sb-photo" style={{ height: 210, borderRadius: 14 }}>
                <span className="sb-photo-label">SHOWER TILE DETAIL</span>
              </div>
              <div className="sb-photo" style={{ height: 210, borderRadius: 14 }}>
                <span className="sb-photo-label">VANITY & MIRROR</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ───────────────────────────────────────────────── */}
      <TrustStrip dark />

      {/* ── WHAT'S INCLUDED ───────────────────────────────────────────── */}
      <section style={{ padding: "96px 0", background: "var(--color-cream-50)" }}>
        <div
          className="sb-container"
          style={{
            padding: "0 56px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 72,
            alignItems: "start",
          }}
        >
          <div>
            <span className="sb-eyebrow">What's Included</span>
            <h2
              style={{
                fontSize: "clamp(32px, 3.5vw, 48px)",
                marginTop: 16,
                lineHeight: 1.05,
              }}
            >
              Everything covered in a full bathroom remodel
            </h2>
            <p
              style={{
                marginTop: 18,
                color: "var(--color-ink-500)",
                fontSize: 16,
                lineHeight: 1.65,
                maxWidth: 480,
              }}
            >
              A full bathroom remodel with Stonebrite is a single, coordinated project. We don't sub out the critical work — our team owns the waterproofing, plumbing, and electrical from demo to finish.
            </p>
            <ul style={{ marginTop: 32, listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {SCOPE_ITEMS.map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <span
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: "50%",
                      background: "var(--color-navy-900)",
                      color: "var(--color-gold-300)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <CheckIcon />
                  </span>
                  <span style={{ fontSize: 15, color: "var(--color-ink-900)", fontWeight: 500 }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 36 }}>
              <Link href="/contact" className="sb-btn sb-btn-dark">
                Start With a Free Estimate <ArrowIcon />
              </Link>
            </div>
          </div>
          <div>
            <div
              className="sb-photo"
              style={{ height: 500, borderRadius: 14 }}
            >
              <span className="sb-photo-label">BATHROOM REMODEL · DROP IN REAL PROJECT PHOTO</span>
            </div>
            <div
              style={{
                marginTop: 16,
                padding: "20px 24px",
                background: "var(--color-navy-900)",
                borderRadius: 10,
                display: "flex",
                gap: 16,
                alignItems: "center",
              }}
            >
              <span
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, var(--color-gold-500), var(--color-gold-600))",
                  color: "var(--color-navy-900)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontFamily: "var(--font-serif)",
                  fontWeight: 600,
                  fontSize: 18,
                }}
              >
                5
              </span>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "var(--color-cream-50)" }}>
                  5-Year Workmanship Warranty
                </div>
                <div style={{ fontSize: 13, color: "var(--color-stone-300)", marginTop: 3 }}>
                  Covers waterproofing, plumbing & electrical workmanship
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────────────── */}
      <section style={{ background: "var(--color-cream-100)", paddingTop: 96, paddingBottom: 0 }}>
        <div className="sb-container" style={{ padding: "0 56px", marginBottom: 48 }}>
          <span className="sb-eyebrow">How It Works</span>
          <h2
            style={{
              fontSize: "clamp(32px, 3.5vw, 48px)",
              marginTop: 16,
              lineHeight: 1.05,
              maxWidth: 640,
            }}
          >
            Our remodeling process — clear from start to finish
          </h2>
          <p
            style={{
              marginTop: 16,
              color: "var(--color-ink-500)",
              fontSize: 16,
              lineHeight: 1.6,
              maxWidth: 520,
            }}
          >
            We designed our process to remove the anxiety from remodeling. You'll know exactly what's happening, when, and what's next.
          </p>
        </div>
        <Process dark={false} />
        <div style={{ padding: "56px 0 96px", textAlign: "center" }}>
          <Link href="/contact" className="sb-btn sb-btn-dark sb-btn-lg">
            Schedule Your Estimate <ArrowIcon />
          </Link>
        </div>
      </section>

      {/* ── PRICING GUIDANCE ──────────────────────────────────────────── */}
      <section style={{ padding: "96px 0", background: "var(--color-cream-50)" }}>
        <div className="sb-container" style={{ padding: "0 56px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
              alignItems: "start",
            }}
          >
            <div>
              <span className="sb-eyebrow">Pricing</span>
              <h2
                style={{
                  fontSize: "clamp(32px, 3.5vw, 46px)",
                  marginTop: 16,
                  lineHeight: 1.05,
                }}
              >
                What affects the cost of a bathroom remodel?
              </h2>
              <p
                style={{
                  marginTop: 20,
                  fontSize: 16,
                  color: "var(--color-ink-700)",
                  lineHeight: 1.7,
                }}
              >
                Every bathroom is different. Pricing depends on layout, materials, plumbing and electrical changes, waterproofing system, shower size, tile or wall panel choices, and finish selections. During your estimate, we'll help you understand what affects cost and what options fit your goals.
              </p>
              <div style={{ marginTop: 32 }}>
                <Link href="/contact" className="sb-btn sb-btn-primary">
                  Get a Precise Estimate <ArrowIcon />
                </Link>
              </div>
            </div>
            <div>
              <h3
                style={{
                  fontSize: 20,
                  color: "var(--color-navy-900)",
                  marginBottom: 24,
                }}
              >
                Common cost factors we review with you:
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {COST_FACTORS.map((factor, i) => (
                  <div
                    key={factor}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                      padding: "16px 20px",
                      background: "#fff",
                      border: "1px solid rgba(20,17,13,0.08)",
                      borderRadius: 8,
                      boxShadow: "var(--shadow-sm)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: 22,
                        fontWeight: 600,
                        color: "var(--color-gold-500)",
                        minWidth: 28,
                        lineHeight: 1,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span style={{ fontSize: 14, fontWeight: 500, color: "var(--color-ink-900)" }}>
                      {factor}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section style={{ padding: "96px 0", background: "var(--color-cream-100)" }}>
        <div
          className="sb-container"
          style={{ padding: "0 56px", maxWidth: 900, margin: "0 auto" }}
        >
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="sb-eyebrow">FAQ</span>
            <h2
              style={{
                fontSize: "clamp(32px, 3.5vw, 48px)",
                marginTop: 16,
                lineHeight: 1.05,
              }}
            >
              Common questions about bathroom remodeling
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {FAQS.map((faq) => (
              <div
                key={faq.q}
                style={{
                  background: "#fff",
                  border: "1px solid rgba(20,17,13,0.08)",
                  borderRadius: 10,
                  overflow: "hidden",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "22px 28px",
                    gap: 20,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: 19,
                      fontWeight: 500,
                      color: "var(--color-navy-900)",
                      lineHeight: 1.25,
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: faq.open ? "var(--color-navy-900)" : "var(--color-cream-200)",
                      color: faq.open ? "var(--color-gold-300)" : "var(--color-ink-500)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontSize: 18,
                      fontWeight: 300,
                      lineHeight: 1,
                    }}
                  >
                    {faq.open ? "−" : "+"}
                  </span>
                </div>
                {faq.open && (
                  <div
                    style={{
                      padding: "0 28px 24px",
                      fontSize: 15,
                      color: "var(--color-ink-700)",
                      lineHeight: 1.7,
                      borderTop: "1px solid rgba(20,17,13,0.06)",
                      paddingTop: 18,
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
          <p
            style={{
              marginTop: 32,
              textAlign: "center",
              fontSize: 14,
              color: "var(--color-ink-500)",
            }}
          >
            More questions?{" "}
            <Link
              href="/contact"
              style={{
                color: "var(--color-navy-800)",
                fontWeight: 600,
                borderBottom: "1px solid var(--color-gold-500)",
                paddingBottom: 1,
              }}
            >
              Reach out — we're happy to help.
            </Link>
          </p>
        </div>
      </section>

      {/* ── FINAL CTA BAND ────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--color-navy-900)",
          padding: "80px 0",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(229,181,58,0.12), transparent 60%)",
          }}
        />
        <div className="sb-container" style={{ padding: "0 56px", position: "relative" }}>
          <span className="sb-eyebrow" style={{ color: "var(--color-gold-300)" }}>
            Next Step
          </span>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              marginTop: 16,
              color: "var(--color-cream-50)",
              lineHeight: 1.05,
            }}
          >
            Ready to start your bathroom remodel?
          </h2>
          <p
            style={{
              marginTop: 18,
              color: "var(--color-stone-300)",
              fontSize: 17,
              maxWidth: 520,
              margin: "18px auto 0",
              lineHeight: 1.65,
            }}
          >
            Tell us about your bathroom and goals. We'll schedule an in-home estimate at your convenience — no pressure, no sales pitch.
          </p>
          <div style={{ marginTop: 36, display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <Link href="/contact" className="sb-btn sb-btn-primary sb-btn-lg">
              Get My Free Estimate <ArrowIcon />
            </Link>
            <Link href="/gallery" className="sb-btn sb-btn-ghost-cream sb-btn-lg">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="12"
      height="12"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="4 13 9 18 20 6" />
    </svg>
  );
}
