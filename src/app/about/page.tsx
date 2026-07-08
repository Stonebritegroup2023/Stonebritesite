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

const CREW = [
  { name: "Team Member", role: "Lead Tile Installer", label: "CREW · DROP IN PHOTO" },
  { name: "Team Member", role: "Plumbing Specialist", label: "CREW · DROP IN PHOTO" },
  { name: "Team Member", role: "Project Coordinator", label: "CREW · DROP IN PHOTO" },
  { name: "Team Member", role: "Finish Carpenter", label: "CREW · DROP IN PHOTO" },
];

export default function AboutPage() {
  return (
    <>
      <Nav activeHref="/about" />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section style={{ background: "var(--color-cream-50)", padding: "96px 0 88px", borderBottom: "1px solid rgba(20,17,13,0.08)" }}>
        <div className="sb-container" style={{ textAlign: "center" }}>
          <span className="sb-eyebrow">About Stonebrite</span>
          <h1 style={{ fontSize: "clamp(38px, 5vw, 68px)", marginTop: 20, lineHeight: 1.02, maxWidth: 840, margin: "20px auto 0", letterSpacing: "-0.015em" }}>
            Remodeling Built Around Clarity,<br />Care, and Trust
          </h1>
          <p style={{ marginTop: 24, fontSize: 18, color: "var(--color-ink-500)", maxWidth: 580, margin: "24px auto 0", lineHeight: 1.7 }}>
            We're a family-owned remodeling company serving homeowners in Greater Sacramento and the Bay Area — built from the ground up to fix the things that frustrate people most about the remodeling experience.
          </p>
        </div>
      </section>

      {/* ── STORY ─────────────────────────────────────────────────────── */}
      <section style={{ background: "var(--color-cream-100)", padding: "96px 0" }}>
        <div className="sb-container">
          <div style={{ maxWidth: 760 }}>
              <span className="sb-eyebrow">Our Story</span>
              <h2 style={{ fontSize: "clamp(32px, 3.5vw, 48px)", marginTop: 16, lineHeight: 1.06 }}>
                We started Stonebrite because remodeling often feels more confusing than it should.
              </h2>

              <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 20 }}>
                <p style={{ fontSize: 16, color: "var(--color-ink-700)", lineHeight: 1.75 }}>
                  Before starting Stonebrite, our founder spent years working in the trades — tile setting, plumbing, general remodeling — across Sacramento and the surrounding area. The work was good. But the experience homeowners were having wasn't. Vague quotes. Contractors who disappeared mid-project. Scopes that ballooned. No one communicating.
                </p>
                <p style={{ fontSize: 16, color: "var(--color-ink-700)", lineHeight: 1.75 }}>
                  Stonebrite Construction Group was founded in 2018 to do it differently: a family-owned company where the owner is on the job, every project gets a clear written scope, and homeowners always know what's happening. We've grown steadily since — not by chasing volume, but by doing right by every client.
                </p>
                <p style={{ fontSize: 16, color: "var(--color-ink-700)", lineHeight: 1.75 }}>
                  Today we serve homeowners across Greater Sacramento — Roseville, Folsom, Granite Bay, Rocklin, Lincoln, El Dorado Hills, and more — along with select projects in the Bay Area. Every project is owner-led, every crew member is our own, and every estimate is detailed enough that you can make a real decision.
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
                Over 15 years of hands-on experience in tile installation, plumbing, and full remodel management. Founded Stonebrite in 2018 with the belief that homeowners deserve a remodel experience that's honest, organized, and worth the investment. Present on every project from the estimate visit to the final walkthrough.
              </p>
              <div style={{ marginTop: 24, display: "flex", gap: 20, fontSize: 13, color: "var(--color-ink-300)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <PinIcon /> Sacramento, CA
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <ShieldIcon /> Licensed &amp; Insured
                </div>
              </div>
            </div>
          </div>

          {/* Crew grid */}
          <div className="about-crew-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {CREW.map((member, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  overflow: "hidden",
                  border: "1px solid rgba(20,17,13,0.08)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div className="sb-photo" style={{ height: 200, borderRadius: 0 }}>
                  <span className="sb-photo-label">{member.label}</span>
                </div>
                <div style={{ padding: "18px 20px 20px" }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "var(--color-navy-900)" }}>{member.name}</div>
                  <div style={{ fontSize: 12, color: "var(--color-ink-400)", marginTop: 4, fontWeight: 500 }}>{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY WE DO THIS ───────────────────────────────────────────── */}
      <section style={{ background: "var(--color-cream-50)", padding: "96px 0" }}>
        <div className="sb-container" style={{ textAlign: "center" }}>
          <span className="sb-eyebrow">Why It Matters</span>
          <blockquote style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(26px, 3vw, 40px)",
            color: "var(--color-navy-900)",
            lineHeight: 1.45,
            maxWidth: 760,
            margin: "20px auto 0",
            fontStyle: "italic",
            fontWeight: 400,
          }}>
            "Homeowners deserve to feel confident, not anxious, about the people working in their home. That's not a high bar — it's the minimum. We just think more companies should actually clear it."
          </blockquote>
          <div style={{ marginTop: 16, fontSize: 13, color: "var(--color-ink-300)", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600 }}>
            — Stonebrite Founder
          </div>
          <div style={{ marginTop: 40, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="sb-btn sb-btn-primary sb-btn-lg">
              Get My Free Estimate <ArrowIcon />
            </Link>
            <Link href="/gallery" className="sb-btn sb-btn-ghost sb-btn-lg">
              View Our Work
            </Link>
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
