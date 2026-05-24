"use client";

import { useState } from "react";
import Link from "next/link";

const SERVICES = [
  { id: "bath", label: "Bathroom", icon: <BathIcon /> },
  { id: "t2s", label: "Tub-to-Shower", icon: <ShowerIcon /> },
  { id: "kitchen", label: "Kitchen", icon: <KitchenIcon /> },
  { id: "aging", label: "Aging-in-Place", icon: <AccessibleIcon /> },
  { id: "other", label: "Other", icon: <OtherIcon /> },
];

export default function QuickEstimateForm() {
  const [activeService, setActiveService] = useState("bath");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!phone.trim()) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div style={{
        background: "var(--color-cream-50)",
        borderRadius: 14,
        boxShadow: "var(--shadow-lg)",
        border: "1px solid rgba(20,17,13,0.08)",
        padding: 48,
        textAlign: "center",
      }}>
        <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--color-success)", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
          <CheckIcon />
        </div>
        <h3 style={{ fontSize: 28, color: "var(--color-navy-900)" }}>We received your request.</h3>
        <p style={{ marginTop: 12, color: "var(--color-ink-500)", fontSize: 15, lineHeight: 1.6 }}>
          We'll review your project and reach out within about an hour. No obligation.
        </p>
        <p style={{ marginTop: 16, color: "var(--color-ink-300)", fontSize: 13 }}>
          Want to share more details? <Link href="/contact" style={{ color: "var(--color-gold-600)", fontWeight: 600 }}>Send full project info →</Link>
        </p>
      </div>
    );
  }

  const activeLabel = SERVICES.find(s => s.id === activeService)?.label?.toLowerCase() ?? "bathroom";

  return (
    <div style={{
      background: "var(--color-cream-50)",
      borderRadius: 14,
      boxShadow: "var(--shadow-lg)",
      border: "1px solid rgba(20,17,13,0.08)",
      overflow: "hidden",
    }}>
      {/* Header */}
      <div style={{
        padding: "20px 24px 18px",
        background: "#fff",
        borderBottom: "1px solid rgba(20,17,13,0.08)",
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
        gap: 12,
      }}>
        <div>
          <span className="sb-eyebrow">Free Estimate · 30-second start</span>
          <h3 style={{ fontSize: 22, marginTop: 6, lineHeight: 1.1 }}>What can we remodel for you?</h3>
        </div>
        <div style={{ fontSize: 11, color: "var(--color-success)", display: "flex", alignItems: "center", gap: 6, fontWeight: 600, letterSpacing: "0.05em", whiteSpace: "nowrap", flexShrink: 0 }}>
          <span style={{ width: 8, height: 8, borderRadius: 4, background: "var(--color-success)", display: "inline-block" }} />
          REPLIES IN ~1 HOUR
        </div>
      </div>

      {/* Service selector */}
      <div style={{ padding: "20px 24px 0", background: "var(--color-cream-50)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 14 }}>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "0.18em", color: "var(--color-ink-500)", textTransform: "uppercase", fontWeight: 600 }}>I want a</span>
          <span style={{ fontFamily: "var(--font-serif)", fontSize: 20, fontStyle: "italic", color: "var(--color-navy-800)" }}>
            {activeLabel} remodel
          </span>
        </div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {SERVICES.map((s) => {
            const isActive = s.id === activeService;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveService(s.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "9px 14px",
                  background: isActive ? "var(--color-navy-900)" : "#fff",
                  color: isActive ? "var(--color-cream-50)" : "var(--color-ink-700)",
                  border: `1px solid ${isActive ? "var(--color-navy-900)" : "rgba(20,17,13,0.16)"}`,
                  borderRadius: 999,
                  fontWeight: 600,
                  fontSize: 13,
                  cursor: "pointer",
                  transition: "all 0.12s",
                }}
              >
                <span style={{ color: isActive ? "var(--color-gold-300)" : "var(--color-gold-600)", display: "inline-flex" }}>
                  {s.icon}
                </span>
                {s.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Phone + CTA */}
      <form onSubmit={handleSubmit} style={{ padding: "20px 24px 8px" }}>
        <div style={{
          display: "flex",
          alignItems: "stretch",
          background: "#fff",
          border: "1px solid rgba(20,17,13,0.16)",
          borderRadius: 10,
          overflow: "hidden",
          boxShadow: "var(--shadow-sm)",
        }}>
          <div style={{ display: "flex", alignItems: "center", padding: "0 14px", color: "var(--color-gold-600)", borderRight: "1px solid rgba(20,17,13,0.08)" }}>
            <PhoneIcon />
          </div>
          <div style={{ flex: 1, padding: "11px 14px" }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", color: "var(--color-ink-500)", textTransform: "uppercase" }}>
              Your Phone
            </div>
            <input
              type="tel"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              placeholder="(916) 000-0000"
              style={{
                border: 0, outline: "none", padding: 0, marginTop: 2,
                fontSize: 16, fontWeight: 500, color: "var(--color-ink-900)", width: "100%",
                fontFamily: "var(--font-sans)", background: "transparent",
              }}
            />
          </div>
          <button
            type="submit"
            className="sb-btn sb-btn-primary"
            style={{ borderRadius: 0, padding: "0 20px", fontSize: 13, fontWeight: 700 }}
          >
            Get My Free Estimate
          </button>
        </div>
        <div style={{ marginTop: 10, fontSize: 12, color: "var(--color-ink-500)", display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}><span style={{ color: "var(--color-gold-600)" }}><CheckIcon /></span> Fast</span>
          <span style={{ color: "rgba(20,17,13,0.16)" }}>·</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}><span style={{ color: "var(--color-gold-600)" }}><CheckIcon /></span> No obligation</span>
          <span style={{ color: "rgba(20,17,13,0.16)" }}>·</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}><span style={{ color: "var(--color-gold-600)" }}><CheckIcon /></span> No pressure</span>
        </div>
      </form>

      {/* Footer */}
      <div style={{ padding: "12px 24px 18px", display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid rgba(20,17,13,0.08)", marginTop: 12, background: "#fff", gap: 12 }}>
        <div style={{ fontSize: 12, color: "var(--color-ink-500)" }}>
          Prefer to share more details?{" "}
          <Link href="/contact" style={{ color: "var(--color-navy-800)", fontWeight: 600, borderBottom: "1px solid var(--color-gold-500)", paddingBottom: 1 }}>
            Send full project info →
          </Link>
        </div>
        <div style={{ fontSize: 11, color: "var(--color-ink-300)", fontFamily: "monospace", whiteSpace: "nowrap", flexShrink: 0 }}>SSL · Private</div>
      </div>
    </div>
  );
}

function BathIcon() {
  return <svg viewBox="0 0 32 32" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 16h26v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path d="M8 16v-7a3 3 0 0 1 6 0"/><circle cx="11" cy="11" r="1.3"/><path d="M7 25l-1.5 3M27 25l1.5 3"/></svg>;
}
function ShowerIcon() {
  return <svg viewBox="0 0 32 32" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4v6"/><circle cx="16" cy="13" r="3"/><path d="M11 18l-2 4M16 18v6M21 18l2 4M13 22l-1 3M19 22l1 3"/></svg>;
}
function KitchenIcon() {
  return <svg viewBox="0 0 32 32" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="6" width="22" height="20" rx="1.5"/><path d="M5 14h22"/><circle cx="10" cy="10" r="0.8" fill="currentColor"/><circle cx="14" cy="10" r="0.8" fill="currentColor"/><path d="M11 19h10v5H11z"/></svg>;
}
function AccessibleIcon() {
  return <svg viewBox="0 0 32 32" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="14" cy="6" r="2"/><path d="M14 9v7l5 1 3 5"/><path d="M14 16a6 6 0 1 0 4 9"/></svg>;
}
function OtherIcon() {
  return <svg viewBox="0 0 32 32" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 26V14l10-8 10 8v12"/><path d="M13 26v-7h6v7"/></svg>;
}
function PhoneIcon() {
  return <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>;
}
function CheckIcon() {
  return <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 13 9 18 20 6"/></svg>;
}
