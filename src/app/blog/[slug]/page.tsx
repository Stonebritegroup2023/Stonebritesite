import Link from "next/link";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { BLOG_POSTS, PUBLISHED_POSTS } from "@/lib/blog-data";
import { BLOG_CONTENT } from "@/lib/blog-content";

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const content = post?.published ? BLOG_CONTENT[slug] : undefined;
  const related = PUBLISHED_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  if (!post || !content) {
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
                A
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "var(--color-ink-900)" }}>Abel Vaniyev</div>
                <div style={{ fontSize: 12, color: "var(--color-ink-300)" }}>Owner, Stonebrite</div>
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
              {content.quickAnswer}
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
                  {content.sections.map((sec) => (
                    <li key={sec.id}>
                      <a
                        href={`#${sec.id}`}
                        style={{ fontSize: 14, fontWeight: 500, color: "var(--color-navy-800)", textDecoration: "none", borderBottom: "1px solid var(--color-gold-300)", paddingBottom: 1 }}
                      >
                        {sec.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Article Body */}
              <div style={{ fontSize: 16, color: "var(--color-ink-700)", lineHeight: 1.8 }}>
                {content.sections.map((sec) => (
                  <div key={sec.id}>
                    <h2 id={sec.id} style={{ fontSize: 28, marginBottom: 16, marginTop: 48, color: "var(--color-navy-900)", scrollMarginTop: 96 }}>
                      {sec.heading}
                    </h2>
                    {sec.paras.map((para, i) => (
                      <p key={i} style={{ marginBottom: 20 }}>{para}</p>
                    ))}
                    {sec.list && (
                      <ul style={{ margin: "0 0 20px", paddingLeft: 24, display: "flex", flexDirection: "column", gap: 12 }}>
                        {sec.list.map((item, i) => (
                          <li key={i} style={{ lineHeight: 1.7 }}>{item}</li>
                        ))}
                      </ul>
                    )}
                    {sec.afterList?.map((para, i) => (
                      <p key={i} style={{ marginBottom: 20 }}>{para}</p>
                    ))}
                  </div>
                ))}
              </div>

              {/* FAQ Section */}
              <div style={{ marginTop: 64 }}>
                <h2 style={{ fontSize: 28, color: "var(--color-navy-900)", marginBottom: 28 }}>
                  Frequently Asked Questions
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                  {content.faqs.map((faq, i) => (
                    <div
                      key={i}
                      style={{
                        borderTop: "1px solid rgba(20,17,13,0.10)",
                        padding: "24px 0",
                        ...(i === content.faqs.length - 1 ? { borderBottom: "1px solid rgba(20,17,13,0.10)" } : {}),
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
                  <img
                    src="/photos/abel-vaniyev-stonebrite-owner-sacramento.jpg"
                    alt="Abel Vaniyev, owner of Stonebrite Construction Group"
                    style={{ width: 56, height: 56, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
                  />
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "var(--color-navy-900)" }}>Abel Vaniyev</div>
                    <div style={{ fontSize: 13, color: "var(--color-ink-400)", marginTop: 2 }}>Owner · Davis, CA</div>
                  </div>
                </div>
                <p style={{ fontSize: 13, color: "var(--color-ink-500)", lineHeight: 1.65, margin: 0 }}>
                  Abel owns and leads Stonebrite Construction Group, a family-owned remodeling company serving Greater Sacramento and the Bay Area. He writes the way he explains things at your kitchen table — CSLB #1113488.
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
                  <a href="tel:5307716025" style={{ color: "var(--color-stone-300)", fontWeight: 600 }}>(530) 771-6025</a>
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
