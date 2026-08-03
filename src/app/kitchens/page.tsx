import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import TrustStrip from "@/components/sections/TrustStrip";

export const metadata: Metadata = {
  title: "Kitchen Remodeling | Stonebrite Construction Group",
  description:
    "Kitchen remodeling in Greater Sacramento — cabinet, countertop, appliance, and lighting upgrades done right. Family-owned, owner-led. Get a free estimate.",
};

const SCOPE_ITEMS = [
  "Cabinet replacement or refacing",
  "Countertop installation (quartz, granite, laminate)",
  "Tile backsplash",
  "Appliance connections",
  "Lighting (under-cabinet, recessed, pendants)",
  "Electrical & GFCI updates",
  "Plumbing (sink, faucet, disposal)",
  "Flooring (tile or LVP)",
  "Paint & drywall",
  "Final cleanup & walkthrough",
];

const FAQS = [
  {
    q: "How long does a kitchen remodel take?",
    a: "Most kitchen remodels take 2–4 weeks depending on scope, cabinet lead times, and the extent of electrical or plumbing changes. We'll provide a specific timeline in your proposal.",
    open: true,
  },
  {
    q: "Do you handle both layout changes and in-place remodels?",
    a: "Yes — we can update your kitchen within the existing layout, or handle more significant changes like removing a wall, relocating the sink, or changing the island configuration. Bigger layout changes affect both cost and timeline.",
    open: false,
  },
  {
    q: "What selections will I need to make?",
    a: "Cabinets, countertops, backsplash tile, hardware, sink, faucet, lighting, and paint are the primary choices. We guide you through selections in a logical order and provide supplier recommendations.",
    open: false,
  },
  {
    q: "Will I be able to use my kitchen during the remodel?",
    a: "The kitchen will be partially or fully out of service during active demo and installation phases. We'll plan the schedule to minimize disruption and let you know exactly when key systems will be unavailable.",
    open: false,
  },
  {
    q: "What does the 5-year warranty cover?",
    a: "Our limited workmanship warranty covers the electrical, plumbing, and installation work performed by our team. Manufacturer warranties apply separately to cabinets, appliances, and materials.",
    open: false,
  },
];

export default function KitchensPage() {
  return (
    <>
      <Nav activeHref="/kitchens" />

      {/* HERO */}
      <section style={{
        background: "var(--color-navy-900)",
        color: "var(--color-cream-50)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle at 80% 30%, rgba(229,181,58,0.14), transparent 50%)",
        }} />
        <div className="sb-container" style={{ padding: "40px 56px 96px", position: "relative" }}>
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
            <span style={{ color: "var(--color-gold-300)", fontWeight: 600 }}>Kitchens</span>
          </nav>

          <div className="kitchens-hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <span className="sb-eyebrow" style={{ color: "var(--color-gold-300)" }}>Kitchen Remodeling</span>
            <h1 style={{ fontSize: "clamp(40px, 4.5vw, 64px)", marginTop: 16, color: "var(--color-cream-50)", lineHeight: 1.05 }}>
              Kitchen Remodels<br />
              <span style={{ color: "var(--color-gold-500)" }}>Done Right.</span>
            </h1>
            <p style={{ marginTop: 24, fontSize: 18, color: "var(--color-stone-300)", lineHeight: 1.65, maxWidth: 500 }}>
              Cabinet, countertop, appliance, and lighting upgrades — with the same clear process, owner-led oversight, and workmanship focus we bring to every project.
            </p>
            <div style={{ marginTop: 32, display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/contact" className="sb-btn sb-btn-primary sb-btn-lg">
                Get My Free Estimate <ArrowIcon />
              </Link>
              <Link href="/#featured-projects" className="sb-btn sb-btn-ghost-cream sb-btn-lg">
                View Gallery
              </Link>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <img
              src="/photos/white-kitchen-remodel-marble-backsplash-sacramento.jpg"
              alt="White kitchen remodel in Sacramento — shaker cabinets, marble subway backsplash, granite counters, and dark wood island"
              style={{ height: 300, gridRow: "1 / span 2", width: "100%", objectFit: "cover", borderRadius: 14, display: "block" }}
            />
            <img
              src="/photos/kitchen-brass-faucet-marble-herringbone-sacramento.jpg"
              alt="Brass pull-down kitchen faucet with marble herringbone backsplash and quartz countertop"
              style={{ height: 143, width: "100%", objectFit: "cover", borderRadius: 14, display: "block" }}
            />
            <img
              src="/photos/kitchen-range-marble-backsplash-detail-sacramento.jpg"
              alt="Arched marble herringbone backsplash over the range with white hood corbels in a Sacramento kitchen remodel"
              style={{ height: 143, width: "100%", objectFit: "cover", borderRadius: 14, display: "block" }}
            />
          </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* WHAT'S INCLUDED */}
      <section style={{ padding: "96px 0", background: "var(--color-cream-50)" }}>
        <div className="sb-container" style={{ padding: "0 56px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          <div>
            <span className="sb-eyebrow">Scope of Work</span>
            <h2 style={{ fontSize: "clamp(32px, 3vw, 48px)", marginTop: 14, lineHeight: 1.05 }}>
              Everything covered<br />in a kitchen remodel.
            </h2>
            <p style={{ marginTop: 16, fontSize: 15, color: "var(--color-ink-500)", lineHeight: 1.65 }}>
              A Stonebrite kitchen remodel covers all the trades — carpentry, electrical, plumbing, and tile — with a single written scope and a single point of accountability.
            </p>
            <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 12 }}>
              {SCOPE_ITEMS.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <span style={{ width: 26, height: 26, borderRadius: "50%", background: "var(--color-navy-900)", color: "var(--color-gold-300)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <CheckIcon />
                  </span>
                  <span style={{ fontSize: 15, color: "var(--color-ink-700)" }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 32 }}>
              <Link href="/contact" className="sb-btn sb-btn-primary sb-btn-lg">
                Get My Free Estimate <ArrowIcon />
              </Link>
            </div>
          </div>
          <img
            src="/photos/green-kitchen-remodel-marble-brass-sacramento.jpg"
            alt="Green shaker kitchen remodel in Sacramento — marble backsplash, brass faucet, island with seating, and wood-look floor"
            style={{ height: 540, width: "100%", objectFit: "cover", borderRadius: 14, display: "block" }}
          />
        </div>
      </section>

      {/* PRICING GUIDANCE */}
      <section style={{ padding: "96px 0", background: "var(--color-cream-100)" }}>
        <div className="sb-container" style={{ padding: "0 56px", maxWidth: 860, margin: "0 auto" }}>
          <span className="sb-eyebrow">Pricing</span>
          <h2 style={{ fontSize: "clamp(32px, 3vw, 44px)", marginTop: 14, lineHeight: 1.05 }}>
            What affects the cost<br />of a kitchen remodel?
          </h2>
          <p style={{ marginTop: 18, fontSize: 16, color: "var(--color-ink-500)", lineHeight: 1.7 }}>
            Kitchen remodel costs vary widely based on layout changes, cabinet quality, countertop material, appliance selections, and the extent of electrical and plumbing work. During your estimate, we'll help you understand exactly what affects your project cost and what options fit your goals.
          </p>
          <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {[
              "Cabinet grade (stock vs. semi-custom vs. custom)",
              "Countertop material (laminate, quartz, granite, marble)",
              "Layout changes vs. in-place replacement",
              "Plumbing relocations (sink, dishwasher)",
              "Electrical changes (lighting, appliance circuits)",
              "Backsplash complexity (tile size, pattern, installation)",
              "Appliance quality and connection requirements",
              "Flooring type and square footage",
            ].map((factor) => (
              <div key={factor} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 18px", background: "#fff", borderRadius: 10, border: "1px solid rgba(20,17,13,0.08)" }}>
                <span style={{ color: "var(--color-gold-500)", flexShrink: 0 }}><DotIcon /></span>
                <span style={{ fontSize: 14, color: "var(--color-ink-700)" }}>{factor}</span>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 24, fontSize: 14, color: "var(--color-ink-300)", lineHeight: 1.6 }}>
            We don't price work we haven't seen. Every estimate starts with a visit to your kitchen.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "96px 0", background: "var(--color-cream-50)" }}>
        <div className="sb-container" style={{ padding: "0 56px", maxWidth: 860, margin: "0 auto" }}>
          <span className="sb-eyebrow">Common Questions</span>
          <h2 style={{ fontSize: "clamp(32px, 3vw, 44px)", marginTop: 14, lineHeight: 1.05, marginBottom: 40 }}>
            Kitchen remodel FAQ.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {FAQS.map((faq) => (
              <div key={faq.q} style={{ background: "#fff", border: "1px solid rgba(20,17,13,0.08)", borderRadius: 10, padding: "20px 24px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
                  <h3 style={{ fontSize: 18, color: "var(--color-navy-900)" }}>{faq.q}</h3>
                  <span style={{
                    width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                    background: faq.open ? "var(--color-navy-800)" : "var(--color-cream-100)",
                    color: faq.open ? "var(--color-gold-300)" : "var(--color-navy-800)",
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                  }}>
                    {faq.open ? <MinusIcon /> : <PlusIcon />}
                  </span>
                </div>
                {faq.open && <p style={{ marginTop: 12, color: "var(--color-ink-500)", lineHeight: 1.65, fontSize: 15 }}>{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section style={{ padding: "64px 0", background: "var(--color-navy-900)", textAlign: "center" }}>
        <div className="sb-container" style={{ padding: "0 56px" }}>
          <span className="sb-eyebrow" style={{ color: "var(--color-gold-300)" }}>Start Here</span>
          <h2 style={{ fontSize: "clamp(32px, 3.5vw, 48px)", marginTop: 16, color: "var(--color-cream-50)" }}>
            Ready to plan your kitchen remodel?
          </h2>
          <p style={{ marginTop: 16, color: "var(--color-stone-300)", fontSize: 16, maxWidth: 480, margin: "16px auto 0" }}>
            Tell us about your kitchen. We'll visit, walk through the options, and put together a clear written proposal.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
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
  return <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>;
}
function CheckIcon() {
  return <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 13 9 18 20 6"/></svg>;
}
function DotIcon() {
  return <svg viewBox="0 0 24 24" width="8" height="8" fill="currentColor"><circle cx="12" cy="12" r="4"/></svg>;
}
function PlusIcon() {
  return <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>;
}
function MinusIcon() {
  return <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/></svg>;
}
