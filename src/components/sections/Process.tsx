const STEPS = [
  { n: "01", t: "Start the Conversation", d: "Tell us about your space and goals. We'll respond within about an hour during business hours." },
  { n: "02", t: "In-Home Estimate", d: "We visit, take measurements, and discuss layout, finishes, and feasibility." },
  { n: "03", t: "Clear Proposal", d: "A written scope, timeline, and investment — line by line, no surprises." },
  { n: "04", t: "Agreement & Selections", d: "We draft and sign the project agreement, then guide your selections for tile, fixtures, lighting, and finishes." },
  { n: "05", t: "Build Phase", d: "Owner-led oversight, clean jobsite, daily project updates." },
  { n: "06", t: "Final Walkthrough", d: "A thorough review, your warranty, and a punch list closed before sign-off." },
];

export default function Process({ dark = false }: { dark?: boolean }) {
  return (
    <div className="process-grid" style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 1,
      background: dark ? "rgba(255,255,255,0.08)" : "rgba(20,17,13,0.08)",
    }}>
      {STEPS.map((step) => (
        <div
          key={step.n}
          style={{
            padding: "36px 32px",
            background: dark ? "var(--color-navy-900)" : "var(--color-cream-50)",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{
              fontFamily: "var(--font-serif)",
              fontSize: 14,
              fontWeight: 600,
              color: dark ? "var(--color-gold-300)" : "var(--color-gold-600)",
              letterSpacing: "0.15em",
            }}>
              {step.n}
            </span>
            <span style={{ flex: 1, height: 1, background: dark ? "rgba(229,181,58,0.3)" : "rgba(229,181,58,0.4)" }} />
          </div>
          <h3 style={{ fontSize: 22, color: dark ? "var(--color-cream-50)" : "var(--color-navy-900)" }}>
            {step.t}
          </h3>
          <p style={{ fontSize: 14, color: dark ? "var(--color-stone-300)" : "var(--color-ink-500)", lineHeight: 1.55 }}>
            {step.d}
          </p>
        </div>
      ))}
    </div>
  );
}
