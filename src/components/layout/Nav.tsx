"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_ITEMS = [
  { href: "/bathrooms", label: "Bathrooms" },
  { href: "/tub-to-shower", label: "Tub-to-Shower" },
  { href: "/kitchens", label: "Kitchens" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

interface NavProps {
  activeHref?: string;
  dark?: boolean;
}

export default function Nav({ activeHref, dark = false }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const bg = dark ? "var(--color-navy-900)" : "rgba(251, 247, 238, 0.92)";
  const fg = dark ? "var(--color-cream-100)" : "var(--color-ink-700)";
  const border = dark ? "rgba(255,255,255,0.06)" : "rgba(20,17,13,0.08)";

  return (
    <>
      <header
        style={{
          background: bg,
          borderBottom: `1px solid ${border}`,
          backdropFilter: "blur(8px)",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <div className="sb-container" style={{ display: "flex", alignItems: "center", gap: 32, padding: "0 56px", height: 72 }}>
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0 }}>
            <svg viewBox="0 0 40 40" width={34} height={34} aria-hidden="true">
              <path d="M6 33 L6 12 L20 6 L34 12 L34 33" fill="none" stroke="#E5B53A" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round"/>
              <line x1="3" y1="33" x2="37" y2="33" stroke="#E5B53A" strokeWidth="2"/>
            </svg>
            <span style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: dark ? "var(--color-cream-50)" : "var(--color-navy-900)",
            }}>
              Stonebrite
              <span style={{ display: "block", fontSize: 9, fontWeight: 400, letterSpacing: "0.22em", color: dark ? "var(--color-stone-300)" : "var(--color-stone-500)", marginTop: 2 }}>
                Construction Group
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: "flex", gap: 28, marginLeft: 24 }} className="hidden md:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                  color: activeHref === item.href
                    ? (dark ? "var(--color-gold-300)" : "var(--color-navy-900)")
                    : fg,
                  borderBottom: activeHref === item.href
                    ? "1.5px solid var(--color-gold-500)"
                    : "1.5px solid transparent",
                  paddingBottom: 2,
                  transition: "color 0.15s",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 18 }}>
            <a
              href="tel:9165550188"
              className="hidden lg:flex"
              style={{ alignItems: "center", gap: 8, fontSize: 13, fontWeight: 600, color: dark ? "var(--color-cream-100)" : "var(--color-navy-900)" }}
            >
              <PhoneIcon />
              (916) 555-0188
            </a>
            <Link
              href="/login"
              className="hidden md:block"
              style={{ fontSize: 12, color: dark ? "var(--color-cream-200)" : "var(--color-ink-500)", letterSpacing: "0.05em" }}
            >
              Client Login
            </Link>
            <Link href="/contact" className="sb-btn sb-btn-primary sb-btn-sm">
              Get My Free Estimate
            </Link>
            {/* Mobile hamburger */}
            <button
              className="flex md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "var(--color-navy-900)",
                color: "var(--color-cream-50)",
                border: 0,
                width: 38,
                height: 38,
                borderRadius: 6,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ background: "var(--color-cream-50)", borderTop: "1px solid rgba(20,17,13,0.08)", padding: "20px 20px 24px" }}>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{ display: "block", padding: "12px 0", fontSize: 16, fontWeight: 500, color: "var(--color-ink-700)", borderBottom: "1px solid rgba(20,17,13,0.06)" }}
              >
                {item.label}
              </Link>
            ))}
            <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
              <Link href="/contact" onClick={() => setMenuOpen(false)} className="sb-btn sb-btn-primary" style={{ justifyContent: "center" }}>
                Get My Free Estimate
              </Link>
              <Link href="/login" onClick={() => setMenuOpen(false)} style={{ textAlign: "center", fontSize: 13, color: "var(--color-ink-500)", padding: "10px 0" }}>
                Client Login
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>
    </svg>
  );
}
