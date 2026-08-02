const TRUST_ITEMS = [
  { icon: <ShieldIcon />, text: "Licensed & Insured" },
  { icon: <DocIcon />, text: "5-Yr Workmanship Warranty" },
  { icon: <RulerIcon />, text: "Family-Owned · Owner-Led" },
  { icon: <CheckIcon />, text: "Clear Written Scope" },
  { icon: <PinIcon />, text: "Greater Sacramento & Bay Area" },
];

export default function TrustStrip({ dark = false }: { dark?: boolean }) {
  return (
    <div style={{
      background: dark ? "var(--color-navy-900)" : "var(--color-cream-100)",
      borderTop: `1px solid ${dark ? "rgba(255,255,255,0.06)" : "rgba(20,17,13,0.08)"}`,
      borderBottom: `1px solid ${dark ? "rgba(255,255,255,0.06)" : "rgba(20,17,13,0.08)"}`,
    }}>
      <div className="sb-container trust-strip-row" style={{ padding: "20px 32px", display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "space-between", alignItems: "center" }}>
        {TRUST_ITEMS.map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 12.5, fontWeight: 500, whiteSpace: "nowrap", color: dark ? "var(--color-cream-200)" : "var(--color-ink-700)" }}>
            <span style={{
              width: 26, height: 26, borderRadius: "50%",
              background: dark ? "rgba(229,181,58,0.12)" : "var(--color-cream-200)",
              color: "var(--color-gold-500)",
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              {item.icon}
            </span>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}

function ShieldIcon() {
  return <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3z"/></svg>;
}
function DocIcon() {
  return <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5"/><path d="M9 12h7M9 16h5"/></svg>;
}
function RulerIcon() {
  return <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="9" width="20" height="6" rx="1"/><path d="M6 9v3M10 9v4M14 9v3M18 9v4"/></svg>;
}
function CheckIcon() {
  return <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 13 9 18 20 6"/></svg>;
}
function PinIcon() {
  return <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13z"/><circle cx="12" cy="9" r="2.5"/></svg>;
}
