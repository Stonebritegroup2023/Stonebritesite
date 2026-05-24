import Link from "next/link";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/blog-data";

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
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

function CtaBand() {
  return (
    <div style={{
      background: "var(--color-navy-900)",
      borderRadius: 14,
      padding: "36px 40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24,
      flexWrap: "wrap",
      gridColumn: "1 / -1",
    }}>
      <div>
        <p style={{ color: "var(--color-gold-300)", fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 8 }}>
          Free Estimate
        </p>
        <p style={{ fontSize: 20, fontFamily: "var(--font-serif)", color: "var(--color-cream-50)", margin: 0 }}>
          Planning a bathroom remodel? Get a free estimate.
        </p>
      </div>
      <Link href="/contact" className="sb-btn sb-btn-primary" style={{ flexShrink: 0 }}>
        Get My Free Estimate <ArrowIcon />
      </Link>
    </div>
  );
}

export default function BlogPage() {
  const featured = BLOG_POSTS.find((p) => p.featured);
  const rest = BLOG_POSTS.filter((p) => !p.featured);

  return (
    <>
      <Nav activeHref="/blog" />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section style={{ background: "var(--color-cream-100)", padding: "80px 0 72px", borderBottom: "1px solid rgba(20,17,13,0.08)" }}>
        <div className="sb-container" style={{ textAlign: "center" }}>
          <span className="sb-eyebrow">Remodeling Education</span>
          <h1 style={{ fontSize: "clamp(44px, 5vw, 68px)", marginTop: 18, lineHeight: 1.02 }}>
            The Stonebrite Blog
          </h1>
          <p style={{ marginTop: 20, fontSize: 18, color: "var(--color-ink-500)", maxWidth: 540, margin: "20px auto 0", lineHeight: 1.65 }}>
            Practical guides for Sacramento homeowners planning bathroom and kitchen remodels.
          </p>
        </div>
      </section>

      {/* ── FEATURED ARTICLE ─────────────────────────────────────────── */}
      {featured && (
        <section style={{ background: "var(--color-cream-50)", padding: "72px 0 56px" }}>
          <div className="sb-container">
            <span className="sb-eyebrow" style={{ marginBottom: 20, display: "block" }}>Featured Article</span>
            <div style={{
              background: "#fff",
              borderRadius: 16,
              overflow: "hidden",
              border: "1px solid rgba(20,17,13,0.08)",
              boxShadow: "var(--shadow-md)",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
            }}>
              {/* Photo */}
              <div className="sb-photo" style={{ height: 300, borderRadius: 0, position: "relative" }}>
                <span className="sb-photo-label">FEATURED ARTICLE · DROP IN PHOTO</span>
              </div>
              {/* Content */}
              <div style={{ padding: "48px 48px 48px 44px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <CategoryBadge category={featured.category} />
                <h2 style={{ fontSize: "clamp(26px, 2.5vw, 36px)", marginTop: 18, lineHeight: 1.08, color: "var(--color-navy-900)" }}>
                  {featured.title}
                </h2>
                <p style={{ marginTop: 14, fontSize: 15, color: "var(--color-ink-500)", lineHeight: 1.65 }}>
                  {featured.description}
                </p>
                <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 16, fontSize: 13, color: "var(--color-ink-300)" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <ClockIcon /> {featured.readTime} read
                  </span>
                  <span style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--color-stone-300)" }} />
                  <span>{formatDate(featured.publishedAt)}</span>
                </div>
                <div style={{ marginTop: 28 }}>
                  <Link
                    href={`/blog/${featured.slug}`}
                    className="sb-btn sb-btn-dark"
                  >
                    Read Article <ArrowIcon />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── CATEGORY FILTER (static) ──────────────────────────────────── */}
      <section style={{ background: "var(--color-cream-50)", paddingBottom: 16 }}>
        <div className="sb-container">
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
            {BLOG_CATEGORIES.map((cat) => (
              <span
                key={cat}
                style={{
                  display: "inline-block",
                  padding: "8px 18px",
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "default",
                  background: cat === "All" ? "var(--color-navy-900)" : "transparent",
                  color: cat === "All" ? "var(--color-cream-50)" : "var(--color-ink-700)",
                  border: cat === "All" ? "1px solid var(--color-navy-900)" : "1px solid rgba(20,17,13,0.16)",
                  letterSpacing: "0.01em",
                }}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARTICLE GRID ─────────────────────────────────────────────── */}
      <section style={{ background: "var(--color-cream-50)", padding: "40px 0 96px" }}>
        <div className="sb-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {rest.map((post, idx) => (
              <>
                {/* CTA band after every 6th article */}
                {idx > 0 && idx % 6 === 0 && <CtaBand key={`cta-${idx}`} />}
                <article
                  key={post.slug}
                  style={{
                    background: "#fff",
                    borderRadius: 12,
                    overflow: "hidden",
                    border: "1px solid rgba(20,17,13,0.08)",
                    boxShadow: "var(--shadow-sm)",
                    display: "flex",
                    flexDirection: "column",
                    transition: "box-shadow 0.18s, transform 0.18s",
                  }}
                >
                  <div className="sb-photo" style={{ height: 180, borderRadius: 0 }}>
                    <span className="sb-photo-label">BLOG · DROP IN PHOTO</span>
                  </div>
                  <div style={{ padding: "22px 24px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <CategoryBadge category={post.category} small />
                    <h3 style={{ fontSize: 20, marginTop: 12, lineHeight: 1.2, color: "var(--color-navy-900)", fontFamily: "var(--font-serif)" }}>
                      {post.title}
                    </h3>
                    <p style={{ marginTop: 10, fontSize: 14, color: "var(--color-ink-500)", lineHeight: 1.6, flex: 1 }}>
                      {post.description}
                    </p>
                    <div style={{ marginTop: 16, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div style={{ display: "flex", gap: 12, fontSize: 12, color: "var(--color-ink-300)", alignItems: "center" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                          <ClockIcon /> {post.readTime}
                        </span>
                        <span>{formatDate(post.publishedAt)}</span>
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        style={{ fontSize: 13, fontWeight: 600, color: "var(--color-navy-800)", display: "flex", alignItems: "center", gap: 4, borderBottom: "1px solid var(--color-gold-500)", paddingBottom: 1 }}
                      >
                        Read <ArrowIcon />
                      </Link>
                    </div>
                  </div>
                </article>
              </>
            ))}
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

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}
