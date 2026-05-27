import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import TrustStrip from "@/components/sections/TrustStrip";
import Process from "@/components/sections/Process";

export const metadata: Metadata = {
  title: "Tub-to-Shower Conversions | Stonebrite Construction Group",
  description:
    "Tub-to-shower conversions in Greater Sacramento — safer access, better use of space. Tile or panel walls, framed or frameless glass, grab bars. Family-owned, owner-led, 5-year warranty.",
  keywords:
    "tub to shower conversion Sacramento, tub removal shower installation, walk-in shower conversion Roseville, aging in place shower Folsom, shower conversion contractor",
};

const BENEFITS = [
  "More usable daily space — showers are used far more than tubs",
  "Safer access, especially for aging-in-place",
  "Easier to clean — no tub surround to scrub",
  "Modernizes an outdated or worn bathroom",
  "Ideal for smaller bathrooms where a tub wastes space",
];

const SCOPE_ITEMS = [
  "Demo existing tub & surround, hauling included",
  "Shower pan or liner (mortar bed or prefab)",
  "Full wall waterproofing system (membrane + sealed seams)",
  "Tile or panel walls — your choice of system",
  "Shower door (framed, semi-frameless, or frameless glass)",
  "Plumbing fixtures & valve",
  "Grab bars or blocking if needed",
  "Flooring updates in shower area",
  "Final cleanup & walkthrough",
  "5-year workmanship warranty",
];

const COST_FACTORS = [
  "Shower size & pan configuration",
  "Tile vs. manufactured panel wall system",
  "Shower door style (framed, semi-frameless, or frameless)",
  "Plumbing valve & fixture grade",
  "Waterproofing system specification",
  "Grab bar blocking or accessibility features",
  "Flooring scope (shower area only vs. full floor)",
];

const FAQS = [
  {
    q: "How long does a tub-to-shower conversion take?",
    a: "Most tub-to-shower conversions take 5–10 business days from start to finish, depending on scope and tile work. Panel systems can go faster. We give you a specific timeline in the written proposal so you know exactly what to expect day by day.",
    open: true,
  },
  {
    q: "Can I choose between tile and panel walls?",
    a: "Yes — and we'll help you decide. Tile gives you full custom flexibility (any size, pattern, or color), while manufactured stone or panel systems offer a seamless, grout-free look that's easier to clean and slightly faster to install. We carry samples and can show you both at the estimate visit.",
    open: false,
  },
  {
    q: "Will I need a permit for a tub-to-shower conversion?",
    a: "Permit requirements vary by jurisdiction and scope of work. If we're moving plumbing or making structural changes, a permit may be required. We evaluate permit requirements during your estimate and handle any required permits on your behalf.",
    open: false,
  },
  {
    q: "Can you add grab bars during the conversion?",
    a: "Absolutely — and we recommend at least adding blocking even if you don't want visible grab bars today. Blocking lets you install bars later without opening walls. Full grab bar installation (with proper backing) is included in the scope when requested.",
    open: false,
  },
  {
    q: "What shower door options are available?",
    a: "We install framed, semi-frameless, and frameless glass doors. Frameless doors are the premium look — clean lines, easy cleaning, and a spa-like feel. Semi-frameless is a great middle ground. We'll discuss what fits the space and budget during your estimate.",
    open: false,
  },
  {
    q: "Is a tub-to-shower conversion a good investment?",
    a: "For most households — especially those where the tub rarely gets used — yes. A well-executed walk-in shower adds daily usability, improves the look of the bathroom, and is a positive when it comes time to sell. We'll help you scope it in a way that makes financial sense for your goals.",
    open: false,
  },
];

export default function TubToShowerPage() {
  return (
    <>
      <Nav activeHref="/tub-to-shower" dark />

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
              "radial-gradient(circle at 80% 30%, rgba(229,181,58,0.14), transparent 50%)",
          }}
        />
        <div
          className="sb-container"
          style={{ padding: "40px 56px 96px", position: "relative" }}
        >
          {/* Breadcrumb */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 13,
              color: "var(--color-stone-300)",
              marginBottom: 28,
            }}
            aria-label="Breadcrumb"
          >
            <Link href="/" style={{ color: "var(--color-stone-300)" }}>Home</Link>
            <span style={{ color: "var(--color-stone-500)" }}>›</span>
            <span style={{ color: "var(--color-stone-300)" }}>Services</span>
            <span style={{ color: "var(--color-stone-500)" }}>›</span>
            <span style={{ color: "var(--color-gold-300)", fontWeight: 600 }}>Tub-to-Shower Conversion</span>
          </nav>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "center",
            }}
            className="t2s-hero-grid"
          >
            <div>
              <span className="sb-eyebrow" style={{ color: "var(--color-gold-300)" }}>Service · Tub-to-Shower Conversion</span>
              <h1
                style={{
                  fontSize: "clamp(38px, 4.5vw, 60px)",
                  marginTop: 18,
                  lineHeight: 1.04,
                  letterSpacing: "-0.015em",
                  color: "var(--color-cream-50)",
                }}
              >
                Safer, easier shower access — done in days, built to last.
              </h1>
              <p
                style={{
                  marginTop: 22,
                  fontSize: 17,
                  color: "var(--color-stone-300)",
                  lineHeight: 1.65,
                  maxWidth: 520,
                }}
              >
                Family-owned, owner-led, local crew. Remove an outdated tub. Add a walk-in shower with tile or panel walls, frameless or framed glass, and grab-bar blocking ready for the future.
              </p>
              <div
                style={{
                  marginTop: 32,
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
                  View Our Work
                </Link>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div
                className="sb-photo"
                style={{ height: 420, gridRow: "1 / span 2", borderRadius: 14 }}
              >
                <span className="sb-photo-label">COMPLETED CONVERSION · DROP IN REAL PROJECT PHOTO</span>
              </div>
              <div className="sb-photo" style={{ height: 200, borderRadius: 14 }}>
                <span className="sb-photo-label">FRAMELESS GLASS DOOR</span>
              </div>
              <div className="sb-photo" style={{ height: 200, borderRadius: 14 }}>
                <span className="sb-photo-label">TILE WALL DETAIL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ───────────────────────────────────────────────── */}
      <TrustStrip />

      {/* ── WHY CONVERT ───────────────────────────────────────────────── */}
      <section style={{ padding: "96px 0", background: "var(--color-cream-50)" }}>
        <div
          className="sb-container"
          style={{
            padding: "0 56px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 72,
            alignItems: "center",
          }}
        >
          <div>
            <span className="sb-eyebrow">Why Convert</span>
            <h2
              style={{
                fontSize: "clamp(32px, 3.5vw, 48px)",
                marginTop: 16,
                lineHeight: 1.05,
              }}
            >
              Why homeowners choose a tub-to-shower conversion
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
              Most homeowners use their tub a handful of times per year — if ever. A walk-in shower uses the same footprint more effectively and makes the bathroom feel more current and livable.
            </p>
            <ul
              style={{
                marginTop: 32,
                listStyle: "none",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {BENEFITS.map((benefit) => (
                <li key={benefit} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
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
                      marginTop: 1,
                    }}
                  >
                    <CheckIcon />
                  </span>
                  <span style={{ fontSize: 15, color: "var(--color-ink-900)", fontWeight: 500, lineHeight: 1.5 }}>
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 36 }}>
              <Link href="/contact" className="sb-btn sb-btn-dark">
                Talk Through Your Options <ArrowIcon />
              </Link>
            </div>
          </div>
          <div>
            <div className="sb-photo" style={{ height: 500, borderRadius: 14 }}>
              <span className="sb-photo-label">TUB-TO-SHOWER BEFORE / AFTER · DROP IN REAL PROJECT PHOTO</span>
            </div>
            <div
              style={{
                marginTop: 16,
                padding: "16px 20px",
                background: "var(--color-cream-100)",
                borderRadius: 10,
                border: "1px solid rgba(20,17,13,0.08)",
                display: "flex",
                gap: 14,
                alignItems: "center",
              }}
            >
              <span style={{ color: "var(--color-gold-500)", fontSize: 22, lineHeight: 1 }}>★★★★★</span>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "var(--color-navy-900)" }}>
                  "The new shower is something we use every single day. We should have done this years ago."
                </div>
                <div style={{ fontSize: 12, color: "var(--color-ink-500)", marginTop: 4 }}>
                  — Folsom, CA · Tub-to-Shower Conversion
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY START — Tile vs Wall-Panel ────────────────────────── */}
      <section style={{ padding: "96px 0", background: "var(--color-cream-100)" }}>
        <div className="sb-container" style={{ padding: "0 56px" }}>
          <div style={{ maxWidth: 720, marginBottom: 40 }}>
            <span className="sb-eyebrow">Why Start</span>
            <h2
              style={{
                fontSize: "clamp(30px, 3.2vw, 42px)",
                marginTop: 14,
                lineHeight: 1.05,
              }}
            >
              Tile shower or wall-panel shower<br />— we build both, honestly.
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
            }}
            className="t2s-choice-grid"
          >
            {/* Tile Shower card */}
            <div
              style={{
                background: "#fff",
                border: "1px solid rgba(20,17,13,0.08)",
                borderRadius: 14,
                overflow: "hidden",
                boxShadow: "var(--shadow-sm)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className="sb-photo" style={{ height: 220, borderRadius: 0 }}>
                <span className="sb-photo-label">TILE SHOWER · DROP IN PHOTO</span>
              </div>
              <div style={{ padding: "26px 28px 28px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 8,
                  }}
                >
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--color-gold-600)",
                    }}
                  >
                    Tile Shower
                  </span>
                  <span style={{ fontSize: 11, color: "var(--color-ink-300)", fontFamily: "monospace" }}>
                    1 / 2
                  </span>
                </div>
                <h3 style={{ fontSize: 24, color: "var(--color-navy-900)", lineHeight: 1.2 }}>
                  Tile Shower
                </h3>
                <p style={{ marginTop: 10, fontSize: 14, color: "var(--color-ink-500)", lineHeight: 1.6 }}>
                  Waterproofing membrane, custom layout, custom niches, and trim — designed for your space and styled to your taste.
                </p>
                <ul
                  style={{
                    marginTop: 18,
                    padding: 0,
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  {[
                    "Custom tile & insert layout",
                    "Niches, accents, and trim work",
                    "Curbless options (zero-step entry)",
                    "Frameless glass available",
                  ].map((b) => (
                    <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13.5, color: "var(--color-ink-700)" }}>
                      <span style={{ color: "var(--color-gold-500)", marginTop: 4, flexShrink: 0 }}>
                        <DotIcon />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Wall Panel card */}
            <div
              style={{
                background: "#fff",
                border: "1px solid rgba(20,17,13,0.08)",
                borderRadius: 14,
                overflow: "hidden",
                boxShadow: "var(--shadow-sm)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className="sb-photo" style={{ height: 220, borderRadius: 0 }}>
                <span className="sb-photo-label">WALL PANEL SHOWER · DROP IN PHOTO</span>
              </div>
              <div style={{ padding: "26px 28px 28px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 8,
                  }}
                >
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--color-gold-600)",
                    }}
                  >
                    Wall Panel
                  </span>
                  <span style={{ fontSize: 11, color: "var(--color-ink-300)", fontFamily: "monospace" }}>
                    2 / 2
                  </span>
                </div>
                <h3 style={{ fontSize: 24, color: "var(--color-navy-900)", lineHeight: 1.2 }}>
                  Manufactured Stone / Panel
                </h3>
                <p style={{ marginTop: 10, fontSize: 14, color: "var(--color-ink-500)", lineHeight: 1.6 }}>
                  Engineered solid-surface or stone panel walls — a seamless, grout-free look that installs faster.
                </p>
                <ul
                  style={{
                    marginTop: 18,
                    padding: 0,
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  {[
                    "3–5 large-format panel walls",
                    "Engineered stone or solid surface",
                    "Fewer maintenance points",
                    "Faster install than full tile builds",
                  ].map((b) => (
                    <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13.5, color: "var(--color-ink-700)" }}>
                      <span style={{ color: "var(--color-gold-500)", marginTop: 4, flexShrink: 0 }}>
                        <DotIcon />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BUILT FOR NOW — READY FOR WHAT'S NEXT ─────────────────── */}
      <section style={{ padding: "96px 0", background: "var(--color-cream-50)" }}>
        <div className="sb-container" style={{ padding: "0 56px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "center",
            }}
            className="t2s-future-grid"
          >
            <div className="sb-photo" style={{ height: 380, borderRadius: 14 }}>
              <span className="sb-photo-label">FUTURE-READY SHOWER · DROP IN PHOTO</span>
            </div>
            <div>
              <span className="sb-eyebrow">Good At Every Stage</span>
              <h2
                style={{
                  fontSize: "clamp(30px, 3vw, 40px)",
                  marginTop: 14,
                  lineHeight: 1.05,
                }}
              >
                Built for now —<br />ready for what's next.
              </h2>
              <p
                style={{
                  marginTop: 18,
                  fontSize: 16,
                  color: "var(--color-ink-700)",
                  lineHeight: 1.65,
                  maxWidth: 460,
                }}
              >
                Whether for yourself, a parent, or a future resale, we install blocking and plan layouts so a daily-use shower today is grab-bar ready later.
              </p>
              <ul
                style={{
                  marginTop: 24,
                  padding: 0,
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 11,
                }}
              >
                {[
                  "Wall blocking behind future grab-bar locations",
                  "Curbless entry option (zero-step base)",
                  "Slip-resistant pan textures and tile guidance",
                  "Comfort-height fixtures and ADA-aware clearances",
                  "Bench seating, handheld diverter on slide bar",
                ].map((b) => (
                  <li
                    key={b}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      fontSize: 15,
                      color: "var(--color-ink-700)",
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: "var(--color-gold-500)", marginTop: 5, flexShrink: 0 }}>
                      <DotIcon />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

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
            <span className="sb-eyebrow">Scope of Work</span>
            <h2
              style={{
                fontSize: "clamp(32px, 3.5vw, 48px)",
                marginTop: 16,
                lineHeight: 1.05,
              }}
            >
              What's included in a tub-to-shower conversion
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
              We handle the full conversion from start to finish — demo, waterproofing, plumbing, walls, glass, and final cleanup. One team, one written scope, no surprises.
            </p>
            <ul
              style={{
                marginTop: 32,
                listStyle: "none",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
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
            <div className="sb-photo" style={{ height: 440, borderRadius: 14 }}>
              <span className="sb-photo-label">TUB-TO-SHOWER CONVERSION · DROP IN REAL PROJECT PHOTO</span>
            </div>
            <div
              style={{
                marginTop: 16,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
              }}
            >
              <div
                style={{
                  padding: "18px 20px",
                  background: "var(--color-navy-900)",
                  borderRadius: 10,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: 36,
                    fontWeight: 600,
                    color: "var(--color-gold-300)",
                    lineHeight: 1,
                  }}
                >
                  5
                </div>
                <div style={{ fontSize: 11, color: "var(--color-stone-300)", marginTop: 6, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
                  Year Warranty
                </div>
              </div>
              <div
                style={{
                  padding: "18px 20px",
                  background: "var(--color-navy-900)",
                  borderRadius: 10,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: 36,
                    fontWeight: 600,
                    color: "var(--color-gold-300)",
                    lineHeight: 1,
                  }}
                >
                  1
                </div>
                <div style={{ fontSize: 11, color: "var(--color-stone-300)", marginTop: 6, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
                  Team, Full Scope
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────────────── */}
      <section style={{ background: "var(--color-navy-900)", paddingTop: 96, paddingBottom: 0 }}>
        <div className="sb-container" style={{ padding: "0 56px", marginBottom: 48 }}>
          <span className="sb-eyebrow" style={{ color: "var(--color-gold-300)" }}>A Simple, Focused Timeline</span>
          <h2
            style={{
              fontSize: "clamp(32px, 3.5vw, 48px)",
              marginTop: 16,
              lineHeight: 1.05,
              maxWidth: 640,
              color: "var(--color-cream-50)",
            }}
          >
            The tub-to-shower timeline.
          </h2>
          <p
            style={{
              marginTop: 16,
              color: "var(--color-stone-300)",
              fontSize: 16,
              lineHeight: 1.6,
              maxWidth: 520,
            }}
          >
            Most tub-to-shower projects wrap in 5–7 business days, depending on glass and finish complexity.
          </p>
        </div>
        <Process dark />
        <div style={{ padding: "56px 0 96px", textAlign: "center" }}>
          <Link href="/contact" className="sb-btn sb-btn-primary sb-btn-lg">
            See Our Tub-to-Shower Process <ArrowIcon />
          </Link>
        </div>
      </section>

      {/* ── PRICING — What affects the cost? (6 numbered cards) ───── */}
      <section style={{ padding: "96px 0", background: "var(--color-cream-100)" }}>
        <div className="sb-container" style={{ padding: "0 56px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.4fr",
              gap: 56,
              alignItems: "start",
            }}
            className="t2s-cost-grid"
          >
            <div>
              <span className="sb-eyebrow">Pricing & Timeline</span>
              <h2
                style={{
                  fontSize: "clamp(32px, 3.5vw, 44px)",
                  marginTop: 14,
                  lineHeight: 1.05,
                }}
              >
                What affects<br />the cost?
              </h2>
              <p
                style={{
                  marginTop: 18,
                  fontSize: 15,
                  color: "var(--color-ink-700)",
                  lineHeight: 1.65,
                  maxWidth: 420,
                }}
              >
                Every conversion is different. We don\'t publish flat prices because the price hinges on glass type, plumbing changes, and whether the wall finish is tile or panel.
              </p>
              <div style={{ marginTop: 24, display: "flex", gap: 8 }}>
                <input
                  type="text"
                  placeholder="Your ZIP code (e.g. 95661)"
                  className="sb-input"
                  style={{ flex: 1, maxWidth: 240 }}
                />
                <Link href="/contact" className="sb-btn sb-btn-primary sb-btn-sm">
                  Get Estimate <ArrowIcon />
                </Link>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 12,
              }}
              className="t2s-cost-cards"
            >
              {[
                { t: "Shower Style", d: "Tile vs. panel, framed vs. frameless glass, walls and curb height all shift the price." },
                { t: "Glass Style", d: "Framed, semi-frameless, and frameless options — each at a different price band." },
                { t: "Glass Type", d: "Clear, low-iron, textured, or showerguard-coated change material cost." },
                { t: "Plumbing Changes", d: "Moving drain or modifying the valve adds rough-in time and cost." },
                { t: "Grab Bar Prep", d: "Blocking in walls now is inexpensive; later it means opening tile." },
                { t: "Surrounding Updates", d: "New floor, vanity, or paint affects scope and timeline together." },
              ].map((card, i) => (
                <div
                  key={card.t}
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(20,17,13,0.08)",
                    borderRadius: 10,
                    padding: "20px 22px 22px",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: 14,
                      fontWeight: 600,
                      color: "var(--color-gold-600)",
                      letterSpacing: "0.12em",
                      marginBottom: 8,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3
                    style={{
                      fontSize: 17,
                      color: "var(--color-navy-900)",
                      lineHeight: 1.2,
                    }}
                  >
                    {card.t}
                  </h3>
                  <p
                    style={{
                      marginTop: 8,
                      fontSize: 13,
                      color: "var(--color-ink-500)",
                      lineHeight: 1.55,
                    }}
                  >
                    {card.d}
                  </p>
                </div>
              ))}
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
            <span className="sb-eyebrow">Common Questions</span>
            <h2
              style={{
                fontSize: "clamp(32px, 3.5vw, 48px)",
                marginTop: 16,
                lineHeight: 1.05,
              }}
            >
              Tub-to-shower FAQ.
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
                      paddingTop: 18,
                      fontSize: 15,
                      color: "var(--color-ink-700)",
                      lineHeight: 1.7,
                      borderTop: "1px solid rgba(20,17,13,0.06)",
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
            Have a question we didn't cover?{" "}
            <Link
              href="/contact"
              style={{
                color: "var(--color-navy-800)",
                fontWeight: 600,
                borderBottom: "1px solid var(--color-gold-500)",
                paddingBottom: 1,
              }}
            >
              We're happy to answer it.
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
            Ready to convert your tub to a shower?
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
            Tell us about your bathroom and we'll schedule an in-home estimate. We'll discuss wall systems, door options, and what the project will look like from start to finish.
          </p>
          <div style={{ marginTop: 36, display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <Link href="/contact" className="sb-btn sb-btn-primary sb-btn-lg">
              Get My Free Estimate <ArrowIcon />
            </Link>
            <Link href="/gallery" className="sb-btn sb-btn-ghost-cream sb-btn-lg">
              View Conversions Gallery
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function DotIcon() {
  return (
    <svg viewBox="0 0 24 24" width="8" height="8" fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 13 9 18 20 6" />
    </svg>
  );
}

function SmallCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 13 9 18 20 6" />
    </svg>
  );
}

function DashIcon() {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
    </svg>
  );
}

function TileIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="8" height="8" rx="1" />
      <rect x="13" y="3" width="8" height="8" rx="1" />
      <rect x="3" y="13" width="8" height="8" rx="1" />
      <rect x="13" y="13" width="8" height="8" rx="1" />
    </svg>
  );
}

function PanelIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M3 15h18" />
    </svg>
  );
}
