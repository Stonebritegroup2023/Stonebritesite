import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-ink-900)", color: "var(--color-cream-200)", paddingTop: 72 }}>
      <div className="sb-container" style={{ padding: "0 56px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1.2fr", gap: 48, paddingBottom: 56 }}
          className="grid-cols-1 md:grid-cols-5">

          {/* Brand col */}
          <div>
            {/* Inverted lockup for dark footer: cream wordmark + gold house */}
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <svg viewBox="0 0 200 100" width={88} height={44} aria-hidden="true" style={{ flexShrink: 0 }}>
                <path d="M20 95 L20 35 L100 8 L180 35 L180 95"
                      fill="none" stroke="#E5B53A" strokeWidth="7"
                      strokeLinejoin="round" strokeLinecap="round"/>
              </svg>
              <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
                <span style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  fontSize: 22,
                  letterSpacing: "0.10em",
                  color: "var(--color-cream-50)",
                }}>
                  STONEBRITE
                </span>
                <span style={{
                  marginTop: 5,
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  color: "var(--color-stone-300)",
                  textTransform: "uppercase",
                }}>
                  Construction Group
                </span>
              </div>
            </div>
            <p style={{ marginTop: 18, color: "var(--color-stone-300)", fontSize: 14, maxWidth: 300, lineHeight: 1.6 }}>
              Family-owned, owner-led, local crew. Bathroom, tub-to-shower, and kitchen remodeling for Greater Sacramento and the East Bay.
            </p>
            <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 10, fontSize: 13 }}>
              <a href="tel:9165550188" style={{ display: "inline-flex", gap: 8, alignItems: "center", color: "var(--color-cream-100)" }}>
                <PhoneIcon /> (916) 555-0188
              </a>
              <a href="mailto:hello@stonebritecg.com" style={{ display: "inline-flex", gap: 8, alignItems: "center", color: "var(--color-cream-100)" }}>
                <MailIcon /> hello@stonebritecg.com
              </a>
              <span style={{ display: "inline-flex", gap: 8, alignItems: "center", color: "var(--color-stone-300)" }}>
                <PinIcon /> Roseville, CA · CSLB Lic. #[placeholder]
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "0.18em", color: "var(--color-gold-300)", textTransform: "uppercase", fontWeight: 600 }}>Services</h4>
            <ul style={{ marginTop: 18, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10, fontSize: 13, color: "var(--color-cream-200)" }}>
              {[
                { href: "/bathrooms", label: "Bathroom Remodeling" },
                { href: "/tub-to-shower", label: "Tub-to-Shower" },
                { href: "/kitchens", label: "Kitchen Remodeling" },
                { href: "/bathrooms#aging-in-place", label: "Aging-in-Place" },
              ].map(({ href, label }) => (
                <li key={href}><Link href={href} style={{ transition: "color 0.15s" }}>{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "0.18em", color: "var(--color-gold-300)", textTransform: "uppercase", fontWeight: 600 }}>Explore</h4>
            <ul style={{ marginTop: 18, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10, fontSize: 13, color: "var(--color-cream-200)" }}>
              {[
                { href: "/gallery", label: "Gallery" },
                { href: "/blog", label: "Blog" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Get My Free Estimate" },
              ].map(({ href, label }) => (
                <li key={href}><Link href={href}>{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Client */}
          <div>
            <h4 style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "0.18em", color: "var(--color-gold-300)", textTransform: "uppercase", fontWeight: 600 }}>Client</h4>
            <ul style={{ marginTop: 18, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10, fontSize: 13, color: "var(--color-cream-200)" }}>
              <li><Link href="/login">Client Login</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "0.18em", color: "var(--color-gold-300)", textTransform: "uppercase", fontWeight: 600 }}>Notes from the field</h4>
            <p style={{ marginTop: 18, fontSize: 13, color: "var(--color-stone-300)", lineHeight: 1.6 }}>One short remodel-planning email a month. No spam, ever.</p>
            <div style={{ marginTop: 14, display: "flex", gap: 8 }}>
              <input
                type="email"
                placeholder="you@email.com"
                className="sb-input"
                style={{ background: "rgba(255,255,255,0.05)", color: "var(--color-cream-100)", borderColor: "rgba(255,255,255,0.16)", flex: 1 }}
              />
              <button className="sb-btn sb-btn-primary sb-btn-sm">
                <ArrowIcon />
              </button>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "20px 0 40px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, fontSize: 12, color: "var(--color-stone-500)" }}>
          <span>© 2026 Stonebrite Construction Group. CSLB Lic. #[placeholder] · Licensed & Insured.</span>
          <span>Privacy · Terms · Accessibility</span>
        </div>
      </div>
    </footer>
  );
}

function PhoneIcon() {
  return <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>;
}
function MailIcon() {
  return <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="m3 7 9 6 9-6"/></svg>;
}
function PinIcon() {
  return <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13z"/><circle cx="12" cy="9" r="2.5"/></svg>;
}
function ArrowIcon() {
  return <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>;
}
