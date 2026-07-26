import Link from "next/link";

export default function FinalCTA() {
  return (
    <section style={{ background: "var(--color-navy-900)", color: "var(--color-cream-50)", position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle at 80% 50%, rgba(229,181,58,0.18), transparent 50%), radial-gradient(circle at 10% 100%, rgba(229,181,58,0.08), transparent 50%)",
      }} />
      <div className="sb-container" style={{ padding: "96px 56px", position: "relative", display: "flex", alignItems: "center", gap: 64, flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 280 }}>
          <span className="sb-eyebrow" style={{ color: "var(--color-gold-300)" }}>The Next Step</span>
          <h2 style={{ fontSize: "clamp(32px, 6vw, 56px)", marginTop: 16, color: "var(--color-cream-50)", lineHeight: 1.05 }}>
            Ready to talk through<br />your remodel?
          </h2>
          <p style={{ marginTop: 18, color: "var(--color-stone-300)", fontSize: 17, maxWidth: 520, lineHeight: 1.65 }}>
            Tell us what you're planning, and we'll help you understand your options, scope, and the next step. No pressure, no sales script.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/contact" className="sb-btn sb-btn-primary sb-btn-lg">
              Get My Free Estimate <ArrowIcon />
            </Link>
            <Link href="/#featured-projects" className="sb-btn sb-btn-ghost-cream sb-btn-lg">
              View Our Work
            </Link>
          </div>
        </div>
        <div className="finalcta-photo" style={{ flexShrink: 0, width: 340, maxWidth: "100%" }}>
          <img
            src="/photos/curbless-walk-in-shower-sacramento.jpg"
            alt="Completed curbless walk-in shower with frameless glass panel and large-format tile"
            style={{ height: 280, width: "100%", objectFit: "cover", objectPosition: "center 55%", borderRadius: 14, display: "block" }}
          />
          <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "var(--color-stone-300)" }}>
            <span style={{ color: "var(--color-gold-300)" }}><PhoneIcon /></span>
            (916) 347-6549 · Typically reply within ~1 hour during business hours
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>;
}
function PhoneIcon() {
  return <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>;
}
