import type { Metadata } from "next";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Request Received",
  // Conversion-tracking page — reachable only from a form submit, never search.
  robots: { index: false, follow: false },
};

const NEXT_STEPS = [
  {
    num: "1",
    title: "A quick call",
    desc: "We confirm a few details about your project and answer any questions you have.",
  },
  {
    num: "2",
    title: "Free in-home estimate",
    desc: "We walk your space, talk through options, and take measurements — at a time that works for you.",
  },
  {
    num: "3",
    title: "A written quote — no pressure",
    desc: "You get a clear written scope and price. Take your time with it; there's no obligation.",
  },
];

export default function ThankYouPage() {
  return (
    <>
      <Nav />

      {/* ── CONFIRMATION HERO ────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--color-cream-50)",
          padding: "88px 0 72px",
          borderBottom: "1px solid rgba(20,17,13,0.08)",
        }}
      >
        <div className="sb-container-narrow" style={{ textAlign: "center" }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              background: "var(--color-success)",
              color: "#fff",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 24,
            }}
          >
            <CheckIcon />
          </div>
          <span className="sb-eyebrow" style={{ display: "block" }}>
            Request Received
          </span>
          <h1
            style={{
              fontSize: "clamp(36px, 4.5vw, 60px)",
              marginTop: 16,
              lineHeight: 1.04,
              letterSpacing: "-0.015em",
            }}
          >
            Your estimate request is in.
          </h1>
          <p
            style={{
              marginTop: 20,
              fontSize: 18,
              color: "var(--color-ink-500)",
              maxWidth: 560,
              margin: "20px auto 0",
              lineHeight: 1.7,
            }}
          >
            We&apos;ll call or text you within the hour during business hours —
            otherwise first thing next morning.
          </p>

          {/* Tap-to-call */}
          <div style={{ marginTop: 36 }}>
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--color-ink-500)",
                marginBottom: 14,
              }}
            >
              Want to talk now?
            </div>
            <a
              href="tel:5307716025"
              className="sb-btn sb-btn-primary sb-btn-lg"
              style={{ fontSize: 18, gap: 10 }}
            >
              <PhoneIcon />
              (530) 771-6025
            </a>
          </div>
        </div>
      </section>

      {/* ── WHAT HAPPENS NEXT ────────────────────────────────────────── */}
      <section style={{ background: "#fff", padding: "72px 0 80px" }}>
        <div className="sb-container">
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <span className="sb-eyebrow">What Happens Next</span>
            <h2
              style={{
                fontSize: "clamp(28px, 3vw, 40px)",
                marginTop: 14,
                lineHeight: 1.1,
              }}
            >
              Three simple steps from here.
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 24,
              maxWidth: 940,
              margin: "0 auto",
            }}
          >
            {NEXT_STEPS.map((step) => (
              <div
                key={step.num}
                style={{
                  background: "var(--color-cream-50)",
                  border: "1px solid rgba(20,17,13,0.08)",
                  borderRadius: 14,
                  padding: "28px 26px",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    background: "var(--color-navy-900)",
                    color: "var(--color-gold-300)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                    fontWeight: 700,
                    marginBottom: 16,
                  }}
                >
                  {step.num}
                </div>
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "var(--color-navy-900)",
                    marginBottom: 6,
                  }}
                >
                  {step.title}
                </div>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--color-ink-500)",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST ────────────────────────────────────────────────────── */}
      <section style={{ background: "var(--color-navy-900)", padding: "52px 0" }}>
        <div
          className="sb-container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 20px",
              background: "rgba(255,255,255,0.06)",
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <GoogleIcon size={18} />
            <span style={{ color: "var(--color-gold-500)", letterSpacing: 1 }}>
              ★★★★★
            </span>
            <span
              style={{
                fontSize: 13,
                color: "var(--color-cream-200)",
                fontWeight: 600,
              }}
            >
              5.0 · 19 Google reviews
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 20px",
              background: "rgba(255,255,255,0.06)",
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <span style={{ color: "var(--color-gold-500)", display: "inline-flex" }}>
              <ShieldIcon />
            </span>
            <span
              style={{
                fontSize: 13,
                color: "var(--color-cream-200)",
                fontWeight: 600,
              }}
            >
              CSLB Lic. #1113488 · Licensed &amp; Insured
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 20px",
              background: "rgba(255,255,255,0.06)",
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <span style={{ color: "var(--color-gold-500)", display: "inline-flex" }}>
              <DocIcon />
            </span>
            <span
              style={{
                fontSize: 13,
                color: "var(--color-cream-200)",
                fontWeight: 600,
              }}
            >
              5-Year Workmanship Warranty
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 13 9 18 20 6" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  );
}
function GoogleIcon({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.28-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3z" />
    </svg>
  );
}
function DocIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3h9l4 4v14H6z" />
      <path d="M14 3v5h5" />
      <path d="M9 12h7M9 16h5" />
    </svg>
  );
}
