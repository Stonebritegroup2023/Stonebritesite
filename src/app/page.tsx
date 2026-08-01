import Link from "next/link";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import TrustStrip from "@/components/sections/TrustStrip";
import Process from "@/components/sections/Process";
import FinalCTA from "@/components/sections/FinalCTA";
import QuickEstimateForm from "@/components/sections/QuickEstimateForm";
import FeaturedRemodels from "@/components/sections/FeaturedRemodels";

const SERVICES = [
  {
    title: "Bathroom Remodeling",
    desc: "Full bath remodels — layout, vanity, lighting, fixtures, tile, paint, waterproofing.",
    href: "/bathrooms",
    img: "/photos/bathroom-remodeling-contractor-sacramento.jpg",
    alt: "Full bathroom remodel with green tile tub-shower, wood vanity, and arched gold mirror",
  },
  {
    title: "Tub-to-Shower Conversion",
    desc: "Safer, easier access. Tile or panel walls, framed or frameless glass, grab bars.",
    href: "/tub-to-shower",
    img: "/photos/tub-to-shower-conversion-remodel-sacramento.jpg",
    alt: "Walk-in curbless shower with brass fixtures and marble hex floor",
  },
  {
    title: "Kitchen Remodeling",
    desc: "Cabinet, counter, appliance, and lighting upgrades — done right.",
    href: "/kitchens",
    img: "/photos/kitchen-remodeling-sacramento.jpg",
    alt: "Remodeled kitchen with white cabinets, wood island, marble counters, and range hood",
  },
  {
    title: "Aging-in-Place",
    desc: "Curbless showers, grab-bar blocking, safer layouts that still look beautiful.",
    href: "/bathrooms#aging-in-place",
    img: "/photos/aging-in-place-bathroom-remodel-sacramento.jpg",
    alt: "Accessible bathroom with roll-in shower, grab bars, fold-down seat, and floating vanity",
  },
];

const WHY_ITEMS = [
  "Family-owned, owner-led — you'll always meet the owner",
  "Local owner-led crew on every project",
  "Clear written scope before work begins",
  "Design guidance through every selection",
  "Dedicated client portal for selections, schedule & approvals",
  "Daily project communication",
  "Waterproofing & workmanship focus",
  "Clean jobsite, respectful crew, daily cleanup",
];

const REVIEWS = [
  {
    name: "Tom Clapp",
    text: "Stonebrite remodeled two bathrooms for us and it was a great experience start to finish! Communication was great — they let me know every day what time they would arrive and were always on time. They finished the project two weeks ahead of the promised time frame… Quoted a very competitive and fair price and there were zero change orders.",
    stars: 5,
    source: "Google",
  },
  {
    name: "Drew Nicholson",
    text: "I recently had my bathroom remodeled by Abel and I couldn't be happier with the results. From start to finish, the professionalism, communication, and quality of work were outstanding… The craftsmanship really shows, and the finished bathroom turned out even better than I imagined.",
    stars: 5,
    source: "Google",
  },
  {
    name: "Gretchen Gaither",
    text: "We are very happy with our new bathroom. They pay attention to all the details and don't cut any corners. In fact, we were so happy with the job they did on our first bathroom that we hired them again when it was time to remodel a different bathroom. They are the best!",
    stars: 5,
    source: "Google",
  },
  {
    name: "Brenden Lowe",
    text: "He was always on time, communicated clearly throughout the project, and treated my home with the utmost respect. What really stood out was his honesty and integrity. He went above and beyond by taking care of several extra items without charging me… His craftsmanship is exceptional, and the finished shower looks absolutely amazing.",
    stars: 5,
    source: "Google",
  },
  {
    name: "Anetta Scomaroha",
    text: "He was able to get us in the same week for an appointment and thoroughly walked us through every step of the process, keeping our expectations and wants in mind. He stuck to the timeline that he provided us with… We couldn't have chosen a better contractor for the job!",
    stars: 5,
    source: "Google",
  },
  {
    name: "Adin Miller",
    text: "Abel did a fantastic job remodeling our master bathroom shower! He provided a lot of helpful guidance on what materials we needed to purchase and was very flexible regarding any changes to the design! We would highly recommend him for any remodeling work!",
    stars: 5,
    source: "Google",
  },
];

export default function HomePage() {
  return (
    <>
      <Nav activeHref="/" />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section style={{ position: "relative", background: "var(--color-cream-50)", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle at 90% 0%, rgba(229,181,58,0.08), transparent 40%)",
        }} />
        <div className="sb-container" style={{ padding: "72px 56px 120px", position: "relative" }}>
          <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
            {/* Left — copy */}
            <div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                padding: "7px 14px", background: "#fff", borderRadius: 999,
                border: "1px solid rgba(20,17,13,0.08)", fontSize: 12, color: "var(--color-ink-700)",
              }}>
                <span style={{ width: 8, height: 8, borderRadius: 4, background: "var(--color-success)", display: "inline-block" }} />
                <span style={{ fontWeight: 600 }}>Now booking — Spring/Summer 2026</span>
              </div>

              <h1 style={{ fontSize: "clamp(44px, 5vw, 72px)", marginTop: 22, lineHeight: 1.02, letterSpacing: "-0.015em" }}>
                Bathrooms &amp; Kitchens<br />
                <span style={{ color: "var(--color-gold-600)" }}>Built to Last.</span>
                <span style={{ display: "block", fontSize: "clamp(28px, 3vw, 44px)", marginTop: 16, fontStyle: "italic", color: "var(--color-navy-700)", lineHeight: 1.1, fontWeight: 400 }}>
                  Designed to feel like they<br />were always meant to be.
                </span>
              </h1>

              <p style={{ marginTop: 28, fontSize: 18, color: "var(--color-ink-700)", lineHeight: 1.65, maxWidth: 520 }}>
                Family-owned, owner-led, and locally crewed, Stonebrite helps homeowners remodel bathrooms, showers, and kitchens with a clear process, thoughtful design support, and a 5-year workmanship warranty.
              </p>

              <div style={{ marginTop: 32, display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
                <Link href="/contact" className="sb-btn sb-btn-primary sb-btn-lg">
                  Get My Free Estimate <ArrowIcon />
                </Link>
                <Link href="/#featured-projects" className="sb-btn sb-btn-ghost sb-btn-lg">
                  View Our Work
                </Link>
              </div>

              <div style={{ marginTop: 36, display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ color: "var(--color-gold-500)", letterSpacing: 1 }}>★★★★★</span>
                  <span style={{ fontSize: 13, color: "var(--color-ink-700)" }}><strong>Top Rated</strong> · Google &amp; Thumbtack</span>
                </div>
                <div style={{ height: 20, width: 1, background: "rgba(20,17,13,0.16)" }} />
                <div style={{ fontSize: 13, color: "var(--color-ink-700)" }}>
                  <strong>170+</strong> completed projects
                </div>
              </div>
            </div>

            {/* Right — photo with floating form */}
            <div className="hero-right" style={{ position: "relative", minHeight: 620 }}>
              <div className="hero-photos" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 14 }}>
                <img
                  src="/photos/bathroom-remodeling-sacramento.jpg"
                  alt="Modern bathroom remodel by Stonebrite — black-framed mirror, wood vanity, and tiled walk-in shower"
                  style={{ height: 540, gridRow: "1 / span 2", borderRadius: 14, width: "100%", objectFit: "cover", display: "block" }}
                />
                <img
                  src="/photos/walk-in-tile-shower-remodel-sacramento.jpg"
                  alt="Walk-in tile shower with black rainfall showerhead"
                  style={{ height: 263, borderRadius: 14, width: "100%", objectFit: "cover", objectPosition: "center 66%", display: "block" }}
                />
                <img
                  src="/photos/bathroom-vanity-quartz-countertop-sacramento.jpg"
                  alt="Quartz vanity countertop with black widespread faucet and fluted wood cabinet"
                  style={{ height: 263, borderRadius: 14, width: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              {/* Floating form — absolute on desktop, inline on mobile */}
              <div className="hero-form-float">
                <QuickEstimateForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ───────────────────────────────────────────────── */}
      <TrustStrip />

      {/* ── SERVICES OVERVIEW ─────────────────────────────────────────── */}
      <section style={{ padding: "96px 0", background: "var(--color-cream-50)" }}>
        <div className="sb-container" style={{ padding: "0 56px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, gap: 32, flexWrap: "wrap" }}>
            <div style={{ maxWidth: 580 }}>
              <span className="sb-eyebrow">What We Do</span>
              <h2 style={{ fontSize: "clamp(36px, 4vw, 52px)", marginTop: 14, lineHeight: 1.02 }}>
                Four kinds of remodel,<br />one careful approach.
              </h2>
            </div>
            <p style={{ maxWidth: 340, color: "var(--color-ink-500)", fontSize: 15, lineHeight: 1.6 }}>
              We focus where craftsmanship matters most: waterproofing, plumbing, electrical, and the finish details you'll see every day.
            </p>
          </div>
          <div className="home-services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {SERVICES.map((s) => (
              <div key={s.title} style={{
                background: "#fff", borderRadius: 14, overflow: "hidden",
                border: "1px solid rgba(20,17,13,0.08)",
                boxShadow: "var(--shadow-sm)",
                display: "flex", flexDirection: "column",
              }}>
                <img
                  src={s.img}
                  alt={s.alt}
                  style={{ height: 200, width: "100%", objectFit: "cover", display: "block" }}
                />
                <div style={{ padding: 24, flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3 style={{ fontSize: 22, color: "var(--color-navy-900)" }}>{s.title}</h3>
                  <p style={{ marginTop: 10, fontSize: 14, color: "var(--color-ink-500)", lineHeight: 1.55, flex: 1 }}>{s.desc}</p>
                  <div style={{ marginTop: 18, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Link href={s.href} style={{ color: "var(--color-navy-800)", fontWeight: 600, fontSize: 13, borderBottom: "1px solid var(--color-gold-500)", paddingBottom: 1 }}>
                      Learn more →
                    </Link>
                    <Link href="/contact" style={{ fontSize: 12, color: "var(--color-gold-600)", fontWeight: 600 }}>
                      Get estimate →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY STONEBRITE ────────────────────────────────────────────── */}
      <section style={{ padding: "96px 0", background: "var(--color-cream-100)" }}>
        <div className="sb-container home-why-grid" style={{ padding: "0 56px", display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 72, alignItems: "center" }}>
          <div>
            <span className="sb-eyebrow">The Stonebrite Difference</span>
            <h2 style={{ fontSize: "clamp(36px, 4vw, 52px)", marginTop: 14, lineHeight: 1.02 }}>
              Why homeowners<br />choose Stonebrite.
            </h2>
            <p style={{ marginTop: 18, color: "var(--color-ink-700)", fontSize: 16, lineHeight: 1.6, maxWidth: 480 }}>
              Most remodel headaches start with vague scopes, hidden cost creep, and contractors who don't answer. We built the company to fix all three.
            </p>
            <div style={{ marginTop: 32, display: "grid", gap: 14 }}>
              {WHY_ITEMS.map((t) => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <span style={{
                    width: 28, height: 28, borderRadius: "50%",
                    background: "var(--color-navy-900)", color: "var(--color-gold-300)",
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <CheckIcon />
                  </span>
                  <span style={{ fontSize: 15, fontWeight: 500, color: "var(--color-ink-900)" }}>{t}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 32 }}>
              <Link href="/about" className="sb-btn sb-btn-dark">
                Our Story &amp; Team <ArrowIcon />
              </Link>
            </div>
          </div>
          <div className="home-why-photos" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, height: 580 }}>
            <img
              src="/photos/stonebrite-owner-bathroom-remodel-sacramento.jpg"
              alt="Stonebrite owner Abel Vaniyev sealing a shower glass panel on a finished bathroom remodel"
              style={{ height: 283, width: "100%", objectFit: "cover", objectPosition: "center 28%", borderRadius: 14, display: "block" }}
            />
            <img
              src="/photos/tiled-shower-waterproofing-sacramento.jpg"
              alt="Tiled shower with brass fixtures, recessed niche, and linear drain"
              style={{ height: 580, gridRow: "1 / span 2", width: "100%", objectFit: "cover", borderRadius: 14, display: "block" }}
            />
            <img
              src="/photos/matte-black-shower-fixtures-sacramento.jpg"
              alt="Matte black rainfall showerhead, handheld sprayer, and corner shelves in a tiled shower"
              style={{ height: 283, width: "100%", objectFit: "cover", borderRadius: 14, display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────────────── */}
      <section style={{ background: "var(--color-navy-900)", color: "var(--color-cream-50)", paddingTop: 96, paddingBottom: 0 }}>
        <div className="sb-container" style={{ padding: "0 56px", marginBottom: 48 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 32 }}>
            <div style={{ maxWidth: 660 }}>
              <span className="sb-eyebrow" style={{ color: "var(--color-gold-300)" }}>Our Process</span>
              <h2 style={{ fontSize: "clamp(36px, 4vw, 52px)", marginTop: 14, color: "var(--color-cream-50)", lineHeight: 1.02 }}>
                A clear remodeling process,<br />from first visit to final walkthrough.
              </h2>
            </div>
            <p style={{ maxWidth: 300, color: "var(--color-stone-300)", fontSize: 15, lineHeight: 1.6 }}>
              You'll always know what's happening this week, what's happening next week, and what's left.
            </p>
          </div>
        </div>
        <Process dark />
        <div style={{ background: "var(--color-navy-900)", padding: "48px 0 96px", textAlign: "center" }}>
          <Link href="/contact" className="sb-btn sb-btn-primary sb-btn-lg">
            Start the Conversation <ArrowIcon />
          </Link>
        </div>
      </section>

      {/* ── WARRANTY ──────────────────────────────────────────────────── */}
      <section style={{ padding: "96px 0", background: "var(--color-cream-50)" }}>
        <div className="sb-container home-warranty-grid" style={{ padding: "0 56px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div className="home-warranty-card" style={{
            position: "relative",
            background: "linear-gradient(140deg, var(--color-navy-900), var(--color-navy-800))",
            borderRadius: 18, padding: 56,
            color: "var(--color-cream-50)",
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", top: -60, right: -60,
              width: 280, height: 280, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(229,181,58,0.25), transparent 65%)",
            }} />
            <div style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              width: 120, height: 120, borderRadius: "50%",
              background: "linear-gradient(135deg, var(--color-gold-500), var(--color-gold-600))",
              color: "var(--color-navy-900)",
              textAlign: "center",
              position: "relative",
            }}>
              <div>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: 48, fontWeight: 600, lineHeight: 1 }}>5</div>
                <div style={{ fontSize: 11, letterSpacing: "0.18em", fontWeight: 700 }}>YEAR</div>
              </div>
            </div>
            <div style={{ marginTop: 28, position: "relative" }}>
              <span className="sb-eyebrow" style={{ color: "var(--color-gold-300)" }}>Peace of Mind</span>
              <h2 style={{ fontSize: 34, marginTop: 12, color: "var(--color-cream-50)", lineHeight: 1.1 }}>
                5-Year Workmanship<br />Warranty.
              </h2>
              <p style={{ marginTop: 16, color: "var(--color-stone-300)", fontSize: 15, lineHeight: 1.65 }}>
                Our limited workmanship warranty covers the waterproofing, plumbing, and electrical work performed by our team. Manufacturer warranties apply separately to fixtures, tile, and materials.
              </p>
            </div>
          </div>

          <div>
            <span className="sb-eyebrow">What's Covered</span>
            <h2 style={{ fontSize: "clamp(32px, 3vw, 44px)", marginTop: 14, lineHeight: 1.05 }}>
              Workmanship you can<br />stand behind.
            </h2>
            <p style={{ marginTop: 16, color: "var(--color-ink-500)", fontSize: 15, lineHeight: 1.65 }}>
              We include a limited workmanship warranty on the work our team performs — waterproofing, plumbing, and electrical. If something we did causes a problem within the warranty period, we come back and make it right.
            </p>
            <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { t: "Waterproofing system", d: "Shower membrane, pan liner, seam sealing" },
                { t: "Plumbing connections", d: "Valve, drain, supply connections" },
                { t: "Electrical workmanship", d: "GFCI, exhaust fan, lighting installs" },
              ].map(item => (
                <div key={item.t} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <span style={{ color: "var(--color-gold-500)", marginTop: 2, flexShrink: 0 }}>
                    <ShieldIcon />
                  </span>
                  <div>
                    <div style={{ fontWeight: 600, color: "var(--color-navy-900)", fontSize: 15 }}>{item.t}</div>
                    <div style={{ color: "var(--color-ink-500)", fontSize: 13 }}>{item.d}</div>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ marginTop: 24, fontSize: 12, color: "var(--color-ink-300)", lineHeight: 1.6 }}>
              Manufacturer warranties apply separately to fixtures, tile, cabinets, and materials. Full warranty details are included in the project agreement.
            </p>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ─────────────────────────────────────────── */}
      <section
        id="featured-projects"
        style={{ padding: "96px 0", background: "var(--color-cream-100)", scrollMarginTop: 96 }}
      >
        <div className="sb-container" style={{ padding: "0 56px" }}>
          <FeaturedRemodels />
        </div>
      </section>

      {/* ── REVIEWS ───────────────────────────────────────────────────── */}
      <section style={{ padding: "96px 0", background: "var(--color-navy-900)" }}>
        <div className="sb-container" style={{ padding: "0 56px" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="sb-eyebrow" style={{ color: "var(--color-gold-300)" }}>Reviews · Verified</span>
            <h2 style={{ fontSize: "clamp(32px, 3.5vw, 48px)", marginTop: 14, color: "var(--color-cream-50)", lineHeight: 1.05 }}>
              Homeowners trust Stonebrite.
            </h2>
          </div>
          {/* Source badges — between title and cards (matching design) */}
          <div style={{ textAlign: "center", marginBottom: 48, display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 20px", background: "rgba(255,255,255,0.06)", borderRadius: 10, border: "1px solid rgba(255,255,255,0.1)" }}>
              <span style={{ color: "var(--color-gold-500)", letterSpacing: 1 }}>★★★★★</span>
              <span style={{ fontSize: 13, color: "var(--color-cream-200)", fontWeight: 600 }}>4.9</span>
              <span style={{ fontSize: 12, color: "var(--color-stone-300)" }}>Google</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 20px", background: "rgba(255,255,255,0.06)", borderRadius: 10, border: "1px solid rgba(255,255,255,0.1)" }}>
              <span style={{ color: "var(--color-gold-500)", letterSpacing: 1 }}>★★★★★</span>
              <span style={{ fontSize: 13, color: "var(--color-cream-200)", fontWeight: 600 }}>5.0</span>
              <span style={{ fontSize: 12, color: "var(--color-stone-300)" }}>Thumbtack</span>
            </div>
          </div>
          <div className="home-reviews-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {REVIEWS.map((r) => (
              <div key={r.name} style={{
                background: "rgba(255,255,255,0.04)", borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.08)",
                padding: 32,
              }}>
                <div style={{ color: "var(--color-gold-500)", letterSpacing: 1, fontSize: 16, marginBottom: 20 }}>★★★★★</div>
                <p style={{ fontSize: 15, color: "var(--color-cream-100)", lineHeight: 1.65, fontStyle: "italic", fontFamily: "var(--font-serif)" }}>
                  &ldquo;{r.text}&rdquo;
                </p>
                <div style={{ marginTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "var(--color-stone-300)" }}>{r.name}</span>
                  <span style={{ fontSize: 11, color: "var(--color-stone-500)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    {r.source}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRIDGE: Brand promise between Reviews and Final CTA ───────── */}
      <section style={{ background: "var(--color-cream-50)", padding: "104px 0", position: "relative", overflow: "hidden" }}>
        {/* Soft cream radial glow on the left */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "10%",
            left: "-10%",
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(229,181,58,0.05), transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div className="sb-container" style={{ padding: "0 56px", position: "relative" }}>
          <div
            className="promise-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr",
              columnGap: 64,
              alignItems: "start",
            }}
          >
            {/* Left — eyebrow + headline */}
            <div>
              <span
                style={{
                  display: "block",
                  fontFamily: "monospace",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--color-gold-600)",
                }}
              >
                Why This Matters
              </span>
              <hr
                style={{
                  width: 40,
                  height: 2,
                  background: "var(--color-gold-500)",
                  border: 0,
                  margin: "10px 0 36px",
                }}
              />
              <h2
                style={{
                  fontSize: "clamp(36px, 4vw, 56px)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.01em",
                  textWrap: "balance",
                  color: "var(--color-navy-900)",
                }}
              >
                We&apos;d rather over-explain than over-promise.
              </h2>
            </div>

            {/* Center — thin vertical gold rule */}
            <div
              className="promise-divider"
              aria-hidden="true"
              style={{
                width: 1,
                alignSelf: "stretch",
                background: "rgba(229,181,58,0.45)",
                minHeight: 240,
              }}
            />

            {/* Right — body paragraphs + footer line */}
            <div>
              <p
                style={{
                  fontSize: 17,
                  color: "var(--color-ink-700)",
                  lineHeight: 1.75,
                }}
              >
                The biggest source of remodel regret is the gap between what was discussed and what got delivered. We close that gap with a written scope, an open client portal, and the same crew you met on day one.
              </p>
              <p
                style={{
                  marginTop: 22,
                  fontSize: 17,
                  color: "var(--color-ink-700)",
                  lineHeight: 1.75,
                }}
              >
                If something is unclear at any point in the process, that&apos;s where we&apos;ll spend our time.
              </p>

              <hr
                style={{
                  marginTop: 40,
                  height: 1,
                  background: "rgba(20,17,13,0.12)",
                  border: 0,
                }}
              />

              <div
                style={{
                  marginTop: 18,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontFamily: "monospace",
                  fontSize: 11,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  flexWrap: "wrap",
                  gap: 14,
                }}
              >
                <span style={{ color: "var(--color-stone-500)", fontWeight: 600 }}>
                  Stonebrite · Sacramento &amp; Bay Area
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────── */}
      <FinalCTA />

      <Footer />
    </>
  );
}

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>;
}
function CheckIcon() {
  return <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 13 9 18 20 6"/></svg>;
}
function ShieldIcon() {
  return <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3z"/></svg>;
}
