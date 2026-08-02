import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import TrustStrip from "@/components/sections/TrustStrip";
import Process from "@/components/sections/Process";

export const metadata: Metadata = {
  title: "Bathroom Remodeling | Stonebrite Construction Group",
  description:
    "Full bathroom remodels in Greater Sacramento — clear scope, waterproofing, tile, vanity, fixtures, and a 5-year workmanship warranty. Family-owned, owner-led.",
  keywords:
    "bathroom remodeling Sacramento, bathroom renovation Roseville, full bathroom remodel Folsom, tile shower installation, bathroom contractor",
};

// ── What's Included — 9-card grid ──────────────────────────────────────────
const INCLUDED = [
  {
    title: "Shower & Tub Area",
    desc: "Full tile or panel walls, waterproofing membrane, valve, drain, and glass enclosure — sealed and water-tight.",
  },
  {
    title: "Vanity & Storage",
    desc: "Custom or stock vanity, top, hardware, mirror, and storage planned around how you use the space.",
  },
  {
    title: "Flooring",
    desc: "Tile, LVP, or stone — leveled, set, and grouted by our team. Heat mats and trim included where needed.",
  },
  {
    title: "Paint & Drywall",
    desc: "Repair, patch, and paint walls, ceiling, and trim to a clean, even finish.",
  },
  {
    title: "Electrical & Lighting",
    desc: "GFCI receptacles, exhaust fan, vanity and ceiling lighting, switches, and dedicated circuits.",
  },
  {
    title: "Plumbing Fixtures",
    desc: "Showerhead, valve, faucet, drain, and supply lines — installed to manufacturer spec.",
  },
  {
    title: "Tile Layout",
    desc: "We plan tile direction, niches, accents, and trim with you before any order is placed.",
  },
  {
    title: "Design Support",
    desc: "Selection guidance for tile, fixtures, finish, and color so you avoid decision fatigue.",
  },
  {
    title: "Final Touch",
    desc: "Punch list closed, deep clean, warranty packet, and a care guide for everything we installed.",
  },
];

// ── Design & Materials bullets ─────────────────────────────────────────────
const DESIGN_POINTS = [
  "Tile, stone, mosaic, and shower wall panel selection",
  "Vanity, knobs, mirror, and lighting fixture pairing",
  "Faucet, valve, drain, and shower system selection",
  "Lighting plans (general, task, vanity, accent)",
  "Paint, trim, and door hardware coordination",
];

// ── Cost factors — 6 numbered cards ────────────────────────────────────────
const COST_CARDS = [
  {
    title: "Bathroom Size",
    desc: "Sq ft and ceiling height drive demo, tile, paint, and material quantities.",
  },
  {
    title: "Layout Changes",
    desc: "Moving fixtures, opening or closing walls, and relocating drains.",
  },
  {
    title: "Waterproofing System",
    desc: "Schluter, membrane choice, niche count, and shower size.",
  },
  {
    title: "Shower Choice",
    desc: "Tile vs. panel, frameless vs. framed glass, curbless vs. standard.",
  },
  {
    title: "Finish Tier",
    desc: "Standard vs. premium tile, fixture grade, and vanity material.",
  },
  {
    title: "Electrical Work",
    desc: "Existing capacity, new circuits, fan upgrades, and lighting plan.",
  },
];

// ── Recent bathrooms gallery thumbnails ────────────────────────────────────
const RECENT = [
  { city: "Roseville", scope: "Hall Bath" },
  { city: "Folsom", scope: "Tub-to-Shower" },
  { city: "Granite Bay", scope: "Primary Bath" },
  { city: "Sacramento", scope: "Vanity & Floor" },
  { city: "Rocklin", scope: "Walk-In Shower" },
  { city: "Citrus Heights", scope: "Aging-in-Place" },
  { city: "Lincoln", scope: "Guest Bath" },
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
      <Nav activeHref="/bathrooms" />

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
            <span style={{ color: "var(--color-gold-300)", fontWeight: 600 }}>Bathrooms</span>
          </nav>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "center",
            }}
            className="bath-hero-grid"
          >
            <div>
              <span className="sb-eyebrow" style={{ color: "var(--color-gold-300)" }}>Service · Bathrooms</span>
              <h1
                style={{
                  fontSize: "clamp(40px, 4.5vw, 60px)",
                  marginTop: 18,
                  lineHeight: 1.03,
                  letterSpacing: "-0.015em",
                  color: "var(--color-cream-50)",
                }}
              >
                Full Bathroom Remodels Built for Daily Life and Lasting Value
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
                We handle every part of a full bathroom remodel — demolition, waterproofing, plumbing, electrical, tile, vanity, and finish work — with a clear written scope, daily communication, and a 5-year workmanship warranty.
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
                <Link href="/#featured-projects" className="sb-btn sb-btn-ghost-cream sb-btn-lg">
                  View Our Work
                </Link>
              </div>
            </div>
            <img
              src="/photos/primary-bathroom-remodel-freestanding-tub-sacramento.jpg"
              alt="Primary bathroom remodel in Sacramento — skylight, freestanding tub, glass shower with black fixtures, and white oak cabinetry"
              style={{ height: 460, width: "100%", objectFit: "cover", borderRadius: 14, display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ───────────────────────────────────────────────── */}
      <TrustStrip />

      {/* ── WHAT'S INCLUDED — 9 cards ─────────────────────────────────── */}
      <section style={{ padding: "96px 0", background: "var(--color-cream-50)" }}>
        <div className="sb-container" style={{ padding: "0 56px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 48,
              gap: 32,
              flexWrap: "wrap",
            }}
          >
            <div style={{ maxWidth: 620 }}>
              <span className="sb-eyebrow">What's Included</span>
              <h2
                style={{
                  fontSize: "clamp(32px, 3.5vw, 46px)",
                  marginTop: 14,
                  lineHeight: 1.05,
                }}
              >
                Every part of the bathroom<br />— handled together.
              </h2>
            </div>
            <p
              style={{
                maxWidth: 320,
                color: "var(--color-ink-500)",
                fontSize: 15,
                lineHeight: 1.6,
              }}
            >
              One scope, one team, one accountable owner — so the finish details land the way you imagined them.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 14,
            }}
            className="included-grid"
          >
            {INCLUDED.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#fff",
                  border: "1px solid rgba(20,17,13,0.08)",
                  borderRadius: 12,
                  padding: "24px 24px 26px",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <h3
                  style={{
                    fontSize: 19,
                    color: "var(--color-navy-900)",
                    lineHeight: 1.2,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    marginTop: 10,
                    fontSize: 13.5,
                    color: "var(--color-ink-500)",
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────────────── */}
      <section style={{ background: "var(--color-navy-900)", paddingTop: 96, paddingBottom: 0 }}>
        <div className="sb-container" style={{ padding: "0 56px", marginBottom: 48 }}>
          <span className="sb-eyebrow" style={{ color: "var(--color-gold-300)" }}>How It Works</span>
          <h2
            style={{
              fontSize: "clamp(32px, 3.5vw, 48px)",
              marginTop: 14,
              lineHeight: 1.05,
              color: "var(--color-cream-50)",
              maxWidth: 640,
            }}
          >
            From first visit to final walkthrough.
          </h2>
        </div>
        <Process dark />
        <div style={{ padding: "56px 0 96px", textAlign: "center" }}>
          <Link href="/contact" className="sb-btn sb-btn-primary sb-btn-lg">
            See Our Process <ArrowIcon />
          </Link>
        </div>
      </section>

      {/* ── DESIGN & MATERIALS ────────────────────────────────────────── */}
      <section style={{ padding: "96px 0", background: "var(--color-cream-50)" }}>
        <div className="sb-container" style={{ padding: "0 56px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "center",
            }}
            className="design-grid"
          >
            {/* Left: material & workmanship details */}
            <div className="design-photos" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
              <img
                src="/photos/marble-bathroom-remodel-navy-vanity-sacramento.jpg"
                alt="Marble bathroom remodel in Sacramento — navy vanity, brass fixtures, freestanding tub, and glass shower"
                style={{ height: 250, width: "100%", objectFit: "cover", borderRadius: 12, display: "block", gridColumn: "1 / -1" }}
              />
              <img
                src="/photos/shower-niche-tile-detail-sacramento.jpg"
                alt="Recessed shower niche with mosaic back and stacked tile surround in a Sacramento bathroom remodel"
                style={{ height: 190, width: "100%", objectFit: "cover", borderRadius: 12, display: "block" }}
              />
              <img
                src="/photos/brass-tub-filler-tile-detail-sacramento.jpg"
                alt="Brushed brass tub spout and valve trim on handmade-look tile in a Sacramento bathroom remodel"
                style={{ height: 190, width: "100%", objectFit: "cover", borderRadius: 12, display: "block" }}
              />
              <img
                src="/photos/marble-hex-shower-pan-drain-sacramento.jpg"
                alt="Marble hex mosaic shower pan with square drain in a Sacramento shower remodel"
                style={{ height: 190, width: "100%", objectFit: "cover", borderRadius: 12, display: "block" }}
              />
            </div>

            {/* Right: copy + bullets */}
            <div>
              <span className="sb-eyebrow">Design & Materials</span>
              <h2
                style={{
                  fontSize: "clamp(32px, 3.5vw, 46px)",
                  marginTop: 14,
                  lineHeight: 1.05,
                }}
              >
                Design guidance, not<br />a guessing game.
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
                We provide finish boards, sample pickups, and trade-day showroom support so you can choose tile, fixtures, lighting, and finishes with confidence.
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
                {DESIGN_POINTS.map((point) => (
                  <li
                    key={point}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      fontSize: 15,
                      color: "var(--color-ink-700)",
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: "var(--color-gold-500)", marginTop: 2, flexShrink: 0 }}>
                      <DotIcon />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING — What affects the cost? (6 numbered cards) ───────── */}
      <section style={{ padding: "96px 0", background: "var(--color-cream-100)" }}>
        <div className="sb-container" style={{ padding: "0 56px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.4fr",
              gap: 56,
              alignItems: "start",
            }}
            className="cost-grid"
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
                Every bathroom is different. We'd rather quote the actual project than print a vague range. Share a few details and we'll come measure.
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
              className="cost-cards"
            >
              {COST_CARDS.map((card, i) => (
                <div
                  key={card.title}
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
                    {card.title}
                  </h3>
                  <p
                    style={{
                      marginTop: 8,
                      fontSize: 13,
                      color: "var(--color-ink-500)",
                      lineHeight: 1.55,
                    }}
                  >
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── RECENT BATHROOMS GALLERY (horizontal scroll) ──────────────── */}
      <section style={{ padding: "96px 0 80px", background: "var(--color-cream-50)" }}>
        <div className="sb-container" style={{ padding: "0 56px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 32,
              gap: 24,
              flexWrap: "wrap",
            }}
          >
            <div>
              <span className="sb-eyebrow">Before & After</span>
              <h2
                style={{
                  fontSize: "clamp(28px, 3vw, 38px)",
                  marginTop: 12,
                  lineHeight: 1.05,
                }}
              >
                Recent bathroom remodels.
              </h2>
            </div>
            <Link href="/#featured-projects" className="sb-btn sb-btn-ghost sb-btn-sm">
              View Full Gallery <ArrowIcon />
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              gap: 14,
              overflowX: "auto",
              padding: "4px 0 16px",
              scrollSnapType: "x mandatory",
            }}
          >
            {RECENT.map((p, i) => (
              <Link
                key={i}
                href="/#featured-projects"
                style={{
                  flex: "0 0 auto",
                  width: 232,
                  scrollSnapAlign: "start",
                  display: "block",
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    height: 180,
                    background: "linear-gradient(135deg, var(--color-navy-800), var(--color-navy-900))",
                    borderRadius: 10,
                    border: "1px solid rgba(255,255,255,0.06)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage:
                        "repeating-linear-gradient(135deg, rgba(229,181,58,0.04) 0 10px, transparent 10px 20px)",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      bottom: 10,
                      left: 10,
                      fontFamily: "monospace",
                      fontSize: 9.5,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      padding: "3px 7px",
                      background: "rgba(11,31,51,0.65)",
                      color: "var(--color-gold-300)",
                      borderRadius: 3,
                    }}
                  >
                    BEFORE / AFTER
                  </span>
                </div>
                <div style={{ padding: "12px 4px 0" }}>
                  <div
                    style={{
                      fontSize: 10.5,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      fontWeight: 600,
                      color: "var(--color-stone-500)",
                    }}
                  >
                    {p.city}
                  </div>
                  <div style={{ fontSize: 15, color: "var(--color-navy-900)", marginTop: 4, fontWeight: 500 }}>
                    {p.scope}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ (unchanged) ───────────────────────────────────────────── */}
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

      {/* ── FINAL CTA BAND (single, not duplicated) ───────────────────── */}
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
          <span className="sb-eyebrow" style={{ color: "var(--color-gold-300)" }}>Next Step</span>
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
            <Link href="/#featured-projects" className="sb-btn sb-btn-ghost-cream sb-btn-lg">
              View Our Work
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

function DotIcon() {
  return (
    <svg viewBox="0 0 24 24" width="8" height="8" fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}
