import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "About Stonebrite Construction Group | Sacramento Remodeling",
  description:
    "Family-owned remodeling company serving Greater Sacramento and the Bay Area. We built Stonebrite around clarity, care, and craftsmanship — because remodeling shouldn't feel confusing.",
};

const VALUES = [
  {
    icon: <LightIcon />,
    title: "Clarity",
    desc: "A clear written scope, transparent pricing, and no surprises — before work begins.",
  },
  {
    icon: <HammerIcon />,
    title: "Craftsmanship",
    desc: "Waterproofing, plumbing, tile, and finishes done right the first time, backed by our 5-year warranty.",
  },
  {
    icon: <ChatIcon />,
    title: "Communication",
    desc: "Daily project updates, a client portal, and an owner who answers the phone.",
  },
  {
    icon: <CheckCircleIcon />,
    title: "Accountability",
    desc: "We own our work. If something isn't right, we make it right — no excuses, no runaround.",
  },
  {
    icon: <HomeIcon />,
    title: "Respect for the Home",
    desc: "Daily cleanup, protective coverings, and a crew that treats your home like it's their own.",
  },
  {
    icon: <ShieldIcon />,
    title: "Long-Term Workmanship",
    desc: "We build for how the home will be used for the next 10–15 years, not just how it looks on move-in day.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav activeHref="/about" />

      {/* ── STORY (page opener) ──────────────────────────────────────── */}
      <section style={{ background: "var(--color-cream-100)", padding: "72px 0 96px" }}>
        <div className="sb-container">
          <div style={{ maxWidth: 760 }}>
              <span className="sb-eyebrow">Our Story</span>
              <h1 style={{ fontSize: "clamp(34px, 4vw, 54px)", marginTop: 16, lineHeight: 1.05, letterSpacing: "-0.01em" }}>
                A bathroom you&apos;ll love — without the runaround.
              </h1>

              <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 20 }}>
                <p style={{ fontSize: 16.5, color: "var(--color-ink-700)", lineHeight: 1.75 }}>
                  Stonebrite is a bathroom remodeling company in Sacramento. That&apos;s our focus — bathrooms — for homeowners across Greater Sacramento and the Bay Area. We&apos;re family-owned, and we&apos;re small on purpose.
                </p>
                <p style={{ fontSize: 16.5, color: "var(--color-ink-700)", lineHeight: 1.75 }}>
                  We&apos;re a low-volume, custom contractor. We only take on a handful of projects at a time, so the owner is on every job and nothing gets rushed, subbed out to a stranger, or handed off halfway through.
                </p>
                <p style={{ fontSize: 16.5, color: "var(--color-ink-700)", lineHeight: 1.75 }}>
                  Our goal is simple: a custom bathroom you actually love, at a price that makes sense in today&apos;s economy. Affordable luxury — real materials and real craftsmanship — without the things that quietly drive up the cost and drive down the quality. No unvetted subcontractors. No giant, sales-driven remodel companies. No cheap products dressed up with a &ldquo;lifetime warranty.&rdquo;
                </p>
                <p style={{ fontSize: 16.5, color: "var(--color-ink-700)", lineHeight: 1.75 }}>
                  Just a clear scope, a fair price, and a bathroom built to last — from the people who&apos;ll actually be doing the work.
                </p>
              </div>

              <div style={{ marginTop: 36 }}>
                <Link href="/contact" className="sb-btn sb-btn-dark">
                  Work With Us <ArrowIcon />
                </Link>
              </div>
          </div>
        </div>
      </section>

      {/* ── MISSION ───────────────────────────────────────────────────── */}
      <section style={{ background: "var(--color-navy-900)", padding: "104px 0", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle at 80% 40%, rgba(229,181,58,0.12), transparent 50%), radial-gradient(circle at 10% 80%, rgba(229,181,58,0.06), transparent 50%)",
        }} />
        <div className="sb-container" style={{ textAlign: "center", position: "relative" }}>
          <span className="sb-eyebrow" style={{ color: "var(--color-gold-300)" }}>Our Mission</span>
          <blockquote style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(24px, 3vw, 38px)",
            color: "var(--color-cream-50)",
            lineHeight: 1.5,
            maxWidth: 820,
            margin: "24px auto 0",
            fontStyle: "italic",
            fontWeight: 400,
          }}>
            "To make remodeling feel clear, guided, and built to last — combining thoughtful design support, careful workmanship, and organized communication from the first estimate to the final walkthrough."
          </blockquote>
          <div style={{ marginTop: 40 }}>
            <Link href="/contact" className="sb-btn sb-btn-primary sb-btn-lg">
              Start the Conversation <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────────────────────── */}
      <section style={{ background: "var(--color-cream-50)", padding: "96px 0" }}>
        <div className="sb-container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="sb-eyebrow">What We Stand For</span>
            <h2 style={{ fontSize: "clamp(32px, 3.5vw, 48px)", marginTop: 16, lineHeight: 1.05 }}>
              The values behind every project.
            </h2>
          </div>
          <div className="about-values-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {VALUES.map((v) => (
              <div
                key={v.title}
                style={{
                  background: "#fff",
                  borderRadius: 14,
                  padding: "32px",
                  border: "1px solid rgba(20,17,13,0.08)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: "50%",
                  background: "linear-gradient(135deg, var(--color-gold-500), var(--color-gold-600))",
                  color: "var(--color-navy-900)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 20,
                }}>
                  {v.icon}
                </div>
                <h3 style={{ fontSize: 20, color: "var(--color-navy-900)", marginBottom: 10 }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: 14, color: "var(--color-ink-500)", lineHeight: 1.65, margin: 0 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ─────────────────────────────────────────────────────── */}
      <section style={{ background: "var(--color-cream-100)", padding: "96px 0" }}>
        <div className="sb-container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="sb-eyebrow">Our Team</span>
            <h2 style={{ fontSize: "clamp(32px, 3.5vw, 48px)", marginTop: 16, lineHeight: 1.05 }}>
              People who take the work seriously.
            </h2>
            <p style={{ marginTop: 16, fontSize: 16, color: "var(--color-ink-500)", maxWidth: 520, margin: "16px auto 0", lineHeight: 1.65 }}>
              Every Stonebrite project is staffed by our own crew — never subcontractors we haven't personally vetted. The same people start your project and finish it.
            </p>
          </div>

          {/* Founder card */}
          <div style={{
            background: "#fff",
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid rgba(20,17,13,0.08)",
            boxShadow: "var(--shadow-md)",
            display: "grid",
            gridTemplateColumns: "340px 1fr",
            marginBottom: 32,
          }} className="about-founder-grid">
            <img
              src="/photos/owner.jpg"
              alt="Founder and owner of Stonebrite Construction Group"
              style={{
                minHeight: 320,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 22%",
                display: "block",
              }}
            />
            <div style={{ padding: "48px 48px 48px 44px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-gold-600)", marginBottom: 12, display: "block" }}>
                Founder &amp; Owner
              </span>
              <h3 style={{ fontSize: 30, color: "var(--color-navy-900)" }}>Abel Vaniyev</h3>
              <p style={{ marginTop: 16, fontSize: 15, color: "var(--color-ink-500)", lineHeight: 1.75 }}>
                Abel started in construction at 15, sweeping job sites — and worked his way up to lead carpenter within a year. He went on to lead large residential projects in San Francisco and helped build modular homes for Sonoma County families rebuilding after the wildfires. Along the way, his skill in finish carpentry and tile set him apart, and those trades became his obsession. Today he&apos;s present on every Stonebrite project, from the estimate visit to the final walkthrough.
              </p>
              <div style={{ marginTop: 24, display: "flex", gap: 20, fontSize: 13, color: "var(--color-ink-300)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <PinIcon /> Davis, CA
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <ShieldIcon /> Licensed &amp; Insured
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </>
  );
}

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}
function LightIcon() {
  return <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14a5 5 0 1 0-6 0v1h6v-1z" /><path d="M9 18h6M10 21h4" /></svg>;
}
function HammerIcon() {
  return <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="m15 12-8.5 8.5a2.12 2.12 0 1 1-3-3L12 9" /><path d="M17.64 15 22 10.64" /><path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91" /></svg>;
}
function ChatIcon() {
  return <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>;
}
function CheckCircleIcon() {
  return <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>;
}
function HomeIcon() {
  return <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>;
}
function ShieldIcon() {
  return <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3z" /></svg>;
}
function PinIcon() {
  return <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13z" /><circle cx="12" cy="9" r="2.5" /></svg>;
}
