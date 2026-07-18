import Link from "next/link";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { BLOG_POSTS } from "@/lib/blog-data";

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

const TOC_ITEMS = [
  { id: "introduction", label: "Introduction" },
  { id: "what-to-expect", label: "What to Expect" },
  { id: "cost-factors", label: "Cost Factors" },
  { id: "how-to-choose", label: "How to Choose" },
  { id: "next-steps", label: "Next Steps" },
];

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  if (!post) {
    return (
      <>
        <Nav activeHref="/blog" />
        <section style={{ background: "var(--color-cream-100)", padding: "120px 0", textAlign: "center" }}>
          <div className="sb-container">
            <span className="sb-eyebrow">Coming Soon</span>
            <h1 style={{ fontSize: "clamp(36px, 4vw, 56px)", marginTop: 18 }}>Post Coming Soon</h1>
            <p style={{ marginTop: 16, fontSize: 16, color: "var(--color-ink-500)" }}>
              This article is being written. Check back shortly.
            </p>
            <div style={{ marginTop: 32 }}>
              <Link href="/blog" className="sb-btn sb-btn-dark">
                ← Back to Blog
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  const faqs = [
    {
      q: `How much does a ${post.category === "Cost & Budgeting" ? "bathroom remodel" : "project like this"} typically cost in Sacramento?`,
      a: "Costs vary widely based on scope, materials, and layout complexity. A standard bathroom remodel in the Greater Sacramento area typically ranges from $15,000–$60,000+. We provide a detailed written estimate so you know exactly what's included before work starts.",
    },
    {
      q: "How long will my project take?",
      a: "Most full bathroom remodels take 7–14 business days once materials are on-site and work begins. We build a week-by-week schedule into your proposal so there are no surprises.",
    },
    {
      q: "Do I need to find my own materials and fixtures?",
      a: "No — we guide you through every selection. We have preferred suppliers and can source everything, or we can work with materials you've already chosen. We'll make sure your selections are confirmed before work begins.",
    },
    {
      q: "What is covered by your workmanship warranty?",
      a: "Our 5-year limited workmanship warranty covers the waterproofing system, plumbing connections, and electrical work performed by our crew. Manufacturer warranties apply separately to fixtures, tile, and materials.",
    },
    {
      q: "How do I get started?",
      a: "The first step is a free in-home estimate. We'll walk through your space, understand your goals, and put together a clear written scope and proposal — usually within a few days of the visit.",
    },
  ];

  return (
    <>
      <Nav activeHref="/blog" />

      {/* ── ARTICLE HERO ─────────────────────────────────────────────── */}
      <section style={{ background: "var(--color-cream-100)", padding: "80px 0 72px", borderBottom: "1px solid rgba(20,17,13,0.08)" }}>
        <div className="sb-container-narrow">
          <Link
            href="/blog"
            style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "var(--color-ink-500)", marginBottom: 28 }}
          >
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
            Back to Blog
          </Link>

          <CategoryBadge category={post.category} />

          <h1 style={{ fontSize: "clamp(36px, 5vw, 60px)", marginTop: 20, lineHeight: 1.04, letterSpacing: "-0.015em" }}>
            {post.title}
          </h1>

          <p style={{ marginTop: 20, fontSize: 18, color: "var(--color-ink-500)", lineHeight: 1.65, maxWidth: 640 }}>
            {post.description}
          </p>

          <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{
                width: 36, height: 36, borderRadius: "50%",
                background: "var(--color-navy-900)",
                color: "var(--color-gold-300)",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                fontSize: 14, fontFamily: "var(--font-serif)",
              }}>
                S
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "var(--color-ink-900)" }}>Stonebrite Team</div>
                <div style={{ fontSize: 12, color: "var(--color-ink-300)" }}>Remodeling Specialists</div>
              </div>
            </div>
            <span style={{ width: 1, height: 28, background: "rgba(20,17,13,0.12)" }} />
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "var(--color-ink-300)" }}>
              <ClockIcon /> {post.readTime} read
            </div>
            <div style={{ fontSize: 13, color: "var(--color-ink-300)" }}>
              {formatDate(post.publishedAt)}
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK ANSWER BOX ─────────────────────────────────────────── */}
      <section style={{ background: "var(--color-cream-50)", padding: "40px 0 0" }}>
        <div className="sb-container-narrow">
          <div style={{
            background: "var(--color-cream-200)",
            borderLeft: "4px solid var(--color-gold-500)",
            borderRadius: "0 10px 10px 0",
            padding: "24px 28px",
          }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-gold-600)", marginBottom: 10 }}>
              Quick Answer
            </div>
            <p style={{ fontSize: 15, color: "var(--color-ink-700)", lineHeight: 1.7 }}>
              {post.description} Understanding the key factors before you start will help you set a realistic budget, choose the right contractor, and avoid the most common pitfalls. This guide walks through everything you need to know in plain language — no jargon, no sales pitch.
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT + SIDEBAR ───────────────────────────────────── */}
      <section style={{ background: "var(--color-cream-50)", padding: "48px 0 96px" }}>
        <div className="sb-container">
          <div className="blogpost-layout" style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 56, alignItems: "start" }}>

            {/* ── MAIN CONTENT ─────────────────────────────────────── */}
            <div>
              {/* Table of Contents */}
              <div style={{
                background: "#fff",
                border: "1px solid rgba(20,17,13,0.08)",
                borderRadius: 12,
                padding: "24px 28px",
                marginBottom: 40,
                boxShadow: "var(--shadow-sm)",
              }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-ink-500)", marginBottom: 16 }}>
                  In This Article
                </div>
                <ol style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                  {TOC_ITEMS.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        style={{ fontSize: 14, fontWeight: 500, color: "var(--color-navy-800)", textDecoration: "none", borderBottom: "1px solid var(--color-gold-300)", paddingBottom: 1 }}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Article Body */}
              <div style={{ fontSize: 16, color: "var(--color-ink-700)", lineHeight: 1.8 }}>

                <h2 id="introduction" style={{ fontSize: 28, marginBottom: 16, marginTop: 48, color: "var(--color-navy-900)" }}>Introduction</h2>
                <p style={{ marginBottom: 20 }}>
                  For Sacramento homeowners, planning a remodel can feel like navigating unfamiliar territory. There are contractor quotes that vary wildly, finishes to choose, timelines to manage, and the underlying anxiety of having workers in your home. The good news: with the right information up front, the process becomes significantly less stressful.
                </p>
                <p style={{ marginBottom: 20 }}>
                  This guide is written for homeowners — not contractors. We've kept the language clear and skipped the industry jargon. By the end, you'll know what to expect, what questions to ask, and how to approach the process with confidence.
                </p>

                <h2 id="what-to-expect" style={{ fontSize: 28, marginBottom: 16, marginTop: 48, color: "var(--color-navy-900)" }}>What to Expect</h2>
                <p style={{ marginBottom: 20 }}>
                  Every remodel follows a general arc: planning and selections, demolition, rough work (plumbing, electrical, waterproofing), finish installation, and final walkthrough. How long each phase takes depends on the scope and complexity of your project.
                </p>
                <p style={{ marginBottom: 20 }}>
                  For most homeowners, the selection phase is where delays happen. Tile, fixtures, vanity, hardware — these all need to be confirmed before work begins. A good contractor will guide you through these decisions in the right order so nothing blocks the schedule.
                </p>
                <p style={{ marginBottom: 20 }}>
                  Communication is the other major factor. You should receive daily updates during active work — what was done, what's happening tomorrow, and any decisions needed from you. If a contractor isn't communicating, that's a red flag.
                </p>

                <h2 id="cost-factors" style={{ fontSize: 28, marginBottom: 16, marginTop: 48, color: "var(--color-navy-900)" }}>Cost Factors</h2>
                <p style={{ marginBottom: 20 }}>
                  The biggest cost drivers are usually scope changes (moving plumbing or walls), waterproofing system choice, tile vs. panel walls, and the grade of fixtures and finishes you select. Labor in the Greater Sacramento area reflects a skilled, licensed crew — and that's where you don't want to cut corners.
                </p>
                <p style={{ marginBottom: 20 }}>
                  Be cautious of estimates that seem unusually low. They often omit waterproofing, use allowances that won't cover your actual selections, or exclude items like demo disposal, permits, or the final finish details that make a remodel feel complete.
                </p>
                <p style={{ marginBottom: 20 }}>
                  A clear written scope — with specific line items, allowances identified, and exclusions listed — is the only reliable way to compare estimates. If a contractor gives you a single-line quote, that's not enough information to make a sound decision.
                </p>

                <h2 id="how-to-choose" style={{ fontSize: 28, marginBottom: 16, marginTop: 48, color: "var(--color-navy-900)" }}>How to Choose the Right Approach</h2>
                <p style={{ marginBottom: 20 }}>
                  Start by defining your goals clearly. Are you replacing like-for-like, or making layout changes? Do you want the lowest possible cost, or are you building something you'll live with for 15+ years? Your answers should guide both scope and contractor selection.
                </p>
                <p style={{ marginBottom: 20 }}>
                  When reviewing proposals, look at what's included versus what's an allowance. Allowances are estimates for items not yet specified — and they're often set too low. Ask the contractor to walk through each line item and confirm what's guaranteed versus what could shift.
                </p>
                <p style={{ marginBottom: 20 }}>
                  References matter. Ask for recent project references in Sacramento specifically — different markets have different labor costs, code requirements, and supplier availability. A contractor with local experience will navigate those nuances more smoothly.
                </p>

                <h2 id="next-steps" style={{ fontSize: 28, marginBottom: 16, marginTop: 48, color: "var(--color-navy-900)" }}>Next Steps</h2>
                <p style={{ marginBottom: 20 }}>
                  Once you've done your research, the best next step is usually an in-home consultation. This gives you a chance to see how the contractor communicates, ask specific questions about your space, and get a feel for whether it's a good fit — before any money changes hands.
                </p>
                <p style={{ marginBottom: 20 }}>
                  A well-run estimate visit should feel like a conversation, not a sales pitch. The contractor should listen more than they talk, ask about your goals, and follow up with a written proposal that you can read carefully at your own pace.
                </p>
                <p style={{ marginBottom: 20 }}>
                  If you're in the Greater Sacramento area, we'd be glad to do a free estimate visit. There's no obligation — just an honest conversation about your project and what it would take to do it well.
                </p>

              </div>

              {/* FAQ Section */}
              <div style={{ marginTop: 64 }}>
                <h2 style={{ fontSize: 28, color: "var(--color-navy-900)", marginBottom: 28 }}>
                  Frequently Asked Questions
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                  {faqs.map((faq, i) => (
                    <div
                      key={i}
                      style={{
                        borderTop: "1px solid rgba(20,17,13,0.10)",
                        padding: "24px 0",
                        ...(i === faqs.length - 1 ? { borderBottom: "1px solid rgba(20,17,13,0.10)" } : {}),
                      }}
                    >
                      <div style={{ fontSize: 16, fontWeight: 600, color: "var(--color-navy-900)", marginBottom: 10 }}>
                        {faq.q}
                      </div>
                      <p style={{ fontSize: 15, color: "var(--color-ink-500)", lineHeight: 1.7, margin: 0 }}>
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* In-article CTA */}
              <div style={{
                marginTop: 56,
                background: "var(--color-navy-900)",
                borderRadius: 16,
                padding: "40px 44px",
                position: "relative",
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", top: -40, right: -40,
                  width: 200, height: 200, borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(229,181,58,0.2), transparent 65%)",
                }} />
                <span className="sb-eyebrow" style={{ color: "var(--color-gold-300)" }}>Ready to Plan</span>
                <h3 style={{ fontSize: 30, marginTop: 12, color: "var(--color-cream-50)", lineHeight: 1.08 }}>
                  Ready to plan your remodel?
                </h3>
                <p style={{ marginTop: 14, color: "var(--color-stone-300)", fontSize: 15, lineHeight: 1.65, maxWidth: 500 }}>
                  Tell us about your project — we'll walk through your space, understand your goals, and put together a clear written estimate. No pressure, no sales script.
                </p>
                <div style={{ marginTop: 28 }}>
                  <Link href="/contact" className="sb-btn sb-btn-primary sb-btn-lg">
                    Get My Free Estimate <ArrowIcon />
                  </Link>
                </div>
              </div>
            </div>

            {/* ── SIDEBAR ──────────────────────────────────────────────── */}
            <aside style={{ position: "sticky", top: 88, display: "flex", flexDirection: "column", gap: 24 }}>

              {/* Author Card */}
              <div style={{
                background: "#fff",
                border: "1px solid rgba(20,17,13,0.08)",
                borderRadius: 12,
                padding: "24px",
                boxShadow: "var(--shadow-sm)",
              }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-ink-500)", marginBottom: 16 }}>
                  Written By
                </div>
                <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 14 }}>
                  <div className="sb-photo" style={{ width: 56, height: 56, borderRadius: "50%", flexShrink: 0 }}>
                    <span className="sb-photo-label" style={{ display: "none" }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "var(--color-navy-900)" }}>Stonebrite Team</div>
                    <div style={{ fontSize: 13, color: "var(--color-ink-400)", marginTop: 2 }}>Greater Sacramento, CA</div>
                  </div>
                </div>
                <p style={{ fontSize: 13, color: "var(--color-ink-500)", lineHeight: 1.65, margin: 0 }}>
                  Family-owned remodeling company serving Greater Sacramento and the Bay Area. Specialists in bathrooms, tub-to-shower conversions, and kitchens.
                </p>
              </div>

              {/* Estimate CTA Card */}
              <div style={{
                background: "var(--color-navy-900)",
                borderRadius: 12,
                padding: "24px",
                color: "var(--color-cream-50)",
              }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-gold-300)", marginBottom: 12 }}>
                  Free Estimate
                </div>
                <div style={{ fontSize: 18, fontFamily: "var(--font-serif)", lineHeight: 1.2, marginBottom: 12 }}>
                  Planning a remodel in Sacramento?
                </div>
                <p style={{ fontSize: 13, color: "var(--color-stone-300)", lineHeight: 1.65, marginBottom: 20 }}>
                  We offer free in-home estimates for bathroom and kitchen remodels throughout the Greater Sacramento area and Bay Area.
                </p>
                <Link href="/contact" className="sb-btn sb-btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  Get My Free Estimate
                </Link>
                <div style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "var(--color-stone-500)" }}>
                  <PhoneIcon />
                  <a href="tel:9165550188" style={{ color: "var(--color-stone-300)", fontWeight: 600 }}>(916) 555-0188</a>
                </div>
              </div>

              {/* Related Posts */}
              <div style={{
                background: "#fff",
                border: "1px solid rgba(20,17,13,0.08)",
                borderRadius: 12,
                padding: "24px",
                boxShadow: "var(--shadow-sm)",
              }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-ink-500)", marginBottom: 20 }}>
                  Related Articles
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {related.map((rp) => (
                    <div key={rp.slug} style={{ borderBottom: "1px solid rgba(20,17,13,0.08)", paddingBottom: 20 }}>
                      <CategoryBadge category={rp.category} small />
                      <h4 style={{ fontSize: 15, marginTop: 8, lineHeight: 1.3, color: "var(--color-navy-900)" }}>
                        <Link href={`/blog/${rp.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                          {rp.title}
                        </Link>
                      </h4>
                      <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "var(--color-ink-300)" }}>
                        <ClockIcon /> {rp.readTime}
                        <Link href={`/blog/${rp.slug}`} style={{ marginLeft: "auto", fontSize: 12, fontWeight: 600, color: "var(--color-navy-800)", display: "flex", alignItems: "center", gap: 3 }}>
                          Read <ArrowIcon />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function CategoryBadge({ category, small = false }: { category: string; small?: boolean }) {
  return (
    <span style={{
      display: "inline-block",
      padding: small ? "3px 10px" : "5px 13px",
      background: "var(--color-cream-200)",
      color: "var(--color-navy-800)",
      fontSize: small ? 11 : 12,
      fontWeight: 600,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      borderRadius: 999,
      border: "1px solid rgba(20,17,13,0.10)",
    }}>
      {category}
    </span>
  );
}

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}
function ClockIcon() {
  return <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>;
}
function PhoneIcon() {
  return <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></svg>;
}
