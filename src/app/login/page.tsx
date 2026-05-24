import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Client Login | Stonebrite Construction Group",
  description: "Access your project portal — proposals, project updates, selections, and documents.",
};

export default function LoginPage() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>

      {/* ── LEFT PANEL — Navy ──────────────────────────────────────────── */}
      <div style={{
        width: "40%",
        background: "linear-gradient(160deg, var(--color-navy-900), var(--color-navy-800))",
        padding: "56px 48px",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
      }}>
        {/* Background glow */}
        <div style={{
          position: "absolute", top: -100, right: -80,
          width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(229,181,58,0.14), transparent 65%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: -60, left: -60,
          width: 280, height: 280, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(229,181,58,0.07), transparent 65%)",
          pointerEvents: "none",
        }} />

        {/* Logo */}
        <div style={{ position: "relative" }}>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
            <svg viewBox="0 0 40 40" width={38} height={38} aria-hidden="true">
              <path d="M6 33 L6 12 L20 6 L34 12 L34 33" fill="none" stroke="#E5B53A" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round"/>
              <line x1="3" y1="33" x2="37" y2="33" stroke="#E5B53A" strokeWidth="2"/>
            </svg>
            <span style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--color-cream-50)",
            }}>
              Stonebrite
              <span style={{ display: "block", fontSize: 9, fontWeight: 400, letterSpacing: "0.22em", color: "var(--color-stone-300)", marginTop: 2 }}>
                Construction Group
              </span>
            </span>
          </Link>
        </div>

        {/* Main copy */}
        <div style={{ marginTop: "auto", position: "relative" }}>
          <h1 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(34px, 3.5vw, 52px)",
            color: "var(--color-cream-50)",
            lineHeight: 1.1,
            fontWeight: 500,
            letterSpacing: "-0.01em",
          }}>
            Your project.<br />Your portal.
          </h1>
          <p style={{ marginTop: 20, fontSize: 15, color: "var(--color-stone-300)", lineHeight: 1.7, maxWidth: 340 }}>
            Access your proposal, project updates, and selections in one organized place — no chasing emails or digging through texts.
          </p>

          {/* Feature bullets */}
          <div style={{ marginTop: 36, display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              "View your proposal and project scope",
              "Approve or request revisions",
              "Track selections and project status",
              "Access documents and warranty info",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{
                  width: 20, height: 20, borderRadius: "50%", flexShrink: 0,
                  background: "rgba(229,181,58,0.15)",
                  border: "1px solid rgba(229,181,58,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginTop: 1,
                }}>
                  <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="#E5B53A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="4 13 9 18 20 6" />
                  </svg>
                </span>
                <span style={{ fontSize: 14, color: "var(--color-cream-200)", lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Not a client yet link */}
        <div style={{ marginTop: 56, position: "relative" }}>
          <div style={{ height: 1, background: "rgba(255,255,255,0.08)", marginBottom: 20 }} />
          <p style={{ fontSize: 13, color: "var(--color-stone-500)" }}>
            Not a client yet?{" "}
            <Link
              href="/contact"
              style={{ color: "var(--color-gold-300)", fontWeight: 600, textDecoration: "none", borderBottom: "1px solid rgba(243,215,138,0.35)" }}
            >
              Start here →
            </Link>
          </p>
        </div>
      </div>

      {/* ── RIGHT PANEL — Login Form ───────────────────────────────────── */}
      <div style={{
        flex: 1,
        background: "var(--color-cream-50)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "56px 40px",
      }}>
        <div style={{ width: "100%", maxWidth: 420 }}>

          {/* Card */}
          <div style={{
            background: "#fff",
            borderRadius: 16,
            padding: "44px 40px",
            boxShadow: "var(--shadow-lg)",
            border: "1px solid rgba(20,17,13,0.06)",
          }}>
            {/* Heading */}
            <div style={{ textAlign: "center", marginBottom: 32 }}>
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: "var(--color-navy-900)",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 16px",
              }}>
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="var(--color-gold-300)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <h2 style={{ fontSize: 24, color: "var(--color-navy-900)", marginBottom: 8 }}>
                Client &amp; Team Login
              </h2>
              <p style={{ fontSize: 13, color: "var(--color-ink-400)", lineHeight: 1.6 }}>
                Access proposals, project documents, selections, and updates.
              </p>
            </div>

            {/* Form */}
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div>
                <label className="sb-label" htmlFor="login-email">Email Address</label>
                <input
                  id="login-email"
                  type="email"
                  className="sb-input"
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
                  <label className="sb-label" htmlFor="login-password" style={{ marginBottom: 0 }}>Password</label>
                  <a
                    href="#"
                    style={{ fontSize: 12, color: "var(--color-navy-700)", fontWeight: 600, textDecoration: "none", borderBottom: "1px solid var(--color-gold-300)", paddingBottom: 1 }}
                  >
                    Forgot password?
                  </a>
                </div>
                <input
                  id="login-password"
                  type="password"
                  className="sb-input"
                  placeholder="••••••••"
                  autoComplete="current-password"
                />
              </div>

              <button
                type="submit"
                className="sb-btn sb-btn-dark sb-btn-lg"
                style={{ width: "100%", justifyContent: "center", marginTop: 4 }}
              >
                Login
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </div>

            {/* Role note */}
            <div style={{
              marginTop: 24,
              padding: "14px 16px",
              background: "var(--color-cream-100)",
              borderRadius: 8,
              border: "1px solid rgba(20,17,13,0.08)",
              fontSize: 12,
              color: "var(--color-ink-500)",
              lineHeight: 1.65,
            }}>
              After login, <strong style={{ color: "var(--color-ink-700)" }}>clients</strong> go to their project portal. <strong style={{ color: "var(--color-ink-700)" }}>Team members</strong> go to the admin workspace.
            </div>

            {/* Access note */}
            <div style={{ marginTop: 18, textAlign: "center", fontSize: 12, color: "var(--color-ink-300)", lineHeight: 1.65 }}>
              Need access?{" "}
              <a
                href="mailto:hello@stonebritecg.com"
                style={{ color: "var(--color-navy-700)", fontWeight: 600, textDecoration: "none" }}
              >
                Contact hello@stonebritecg.com
              </a>
            </div>
          </div>

          {/* Back to site */}
          <div style={{ textAlign: "center", marginTop: 24 }}>
            <Link
              href="/"
              style={{ fontSize: 13, color: "var(--color-ink-400)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}
            >
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
              Back to Stonebrite website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
