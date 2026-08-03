"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { PUBLISHED_POSTS, BLOG_CATEGORIES, type BlogPost } from "@/lib/blog-data";

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" }).toUpperCase();
}

function CtaBand() {
  return (
    <div
      style={{
        background: "var(--color-navy-900)",
        padding: "44px 48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 32,
        flexWrap: "wrap",
        borderRadius: 4,
      }}
      className="blog-ctaband"
    >
      <div style={{ maxWidth: 560 }}>
        <p style={{ color: "var(--color-gold-300)", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 10 }}>
          Ready to talk?
        </p>
        <h3 style={{
          fontFamily: "var(--font-serif)",
          fontSize: 30,
          color: "var(--color-cream-50)",
          margin: 0,
          fontWeight: 500,
          lineHeight: 1.1,
        }}>
          Got a remodel in mind?
        </h3>
        <p style={{ marginTop: 10, color: "var(--color-stone-300)", fontSize: 15, lineHeight: 1.55 }}>
          We&apos;ll review your project, answer questions, and walk you through next steps.
        </p>
      </div>
      <Link href="/contact" className="sb-btn sb-btn-primary sb-btn-lg" style={{ flexShrink: 0 }}>
        Get My Free Estimate <ArrowIcon />
      </Link>
    </div>
  );
}

function ArticleRow({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <Link href={`/blog/${post.slug}`} className="blog-row">
      <div>
        <div className="blog-row-eyebrow">
          {featured && <span className="blog-row-featured">Featured</span>}
          {post.category}
        </div>
        <h3 className="blog-row-title" style={{ fontSize: featured ? "clamp(24px, 3vw, 30px)" : "clamp(21px, 2.4vw, 24px)" }}>
          {post.title}
        </h3>
        <p className="blog-row-desc">{post.description}</p>
      </div>
      <div className="blog-row-meta">
        <span className="blog-row-rt">{post.readTime.toUpperCase()} READ</span>
        <span className="blog-row-date">{formatDate(post.publishedAt)}</span>
        <span className="blog-row-arrow" aria-hidden>
          <ArrowIcon />
        </span>
      </div>
    </Link>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return PUBLISHED_POSTS.filter((p) => {
      const catMatch = activeCategory === "All" || p.category === activeCategory;
      const q = search.trim().toLowerCase();
      const searchMatch = !q || p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
      return catMatch && searchMatch;
    });
  }, [activeCategory, search]);

  // Show the featured article first, then the rest in order.
  const featured = filtered.find((p) => p.featured) ?? filtered[0];
  const ordered = featured ? [featured, ...filtered.filter((p) => p !== featured)] : filtered;
  const splitAt = 9;
  const first = ordered.slice(0, splitAt);
  const second = ordered.slice(splitAt);

  return (
    <>
      <Nav activeHref="/blog" />

      {/* ── HERO (left-aligned) ─────────────────────────────────────── */}
      <section style={{ background: "var(--color-cream-50)", padding: "64px 0 48px" }}>
        <div className="sb-container">
          <span className="sb-eyebrow">The Stonebrite Journal</span>
          <h1 style={{
            fontSize: "clamp(40px, 4.5vw, 64px)",
            marginTop: 16,
            lineHeight: 1.02,
            letterSpacing: "-0.015em",
            maxWidth: 760,
          }}>
            Honest answers for<br />remodel planning.
          </h1>
          <p style={{
            marginTop: 18,
            fontSize: 17,
            color: "var(--color-ink-500)",
            lineHeight: 1.6,
            maxWidth: 560,
          }}>
            Plain-English guides on cost, materials, timelines, and workmanship — written by the people who&apos;d be doing the work.
          </p>
        </div>
      </section>

      {/* ── FILTER + SEARCH ───────────────────────────────────────────── */}
      <section style={{ background: "var(--color-cream-50)", padding: "0 0 32px", borderBottom: "1px solid rgba(20,17,13,0.06)" }}>
        <div className="sb-container">
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", justifyContent: "space-between" }}>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
              {BLOG_CATEGORIES.map((cat) => {
                const isActive = cat === activeCategory;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    style={{
                      display: "inline-block",
                      padding: "8px 16px",
                      borderRadius: 999,
                      fontSize: 13,
                      fontWeight: 600,
                      cursor: "pointer",
                      background: isActive ? "var(--color-navy-900)" : "transparent",
                      color: isActive ? "var(--color-cream-50)" : "var(--color-ink-700)",
                      border: isActive ? "1px solid var(--color-navy-900)" : "1px solid rgba(20,17,13,0.16)",
                      letterSpacing: "0.01em",
                      transition: "all 0.15s",
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 14px",
              background: "#fff",
              border: "1px solid rgba(20,17,13,0.16)",
              borderRadius: 999,
              minWidth: 220,
            }}>
              <SearchIcon />
              <input
                type="text"
                placeholder="Search articles…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  border: 0,
                  outline: 0,
                  background: "transparent",
                  fontSize: 13,
                  color: "var(--color-ink-700)",
                  fontFamily: "var(--font-sans)",
                  width: "100%",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTICLE INDEX (with full-width CTA after 9 articles) ──────── */}
      <section style={{ background: "var(--color-cream-50)", padding: "8px 0 96px" }}>
        <div className="sb-container">
          {ordered.length > 0 ? (
            <>
              <div className="blog-index">
                {first.map((post, i) => (
                  <ArticleRow key={post.slug} post={post} featured={i === 0 && !!post.featured} />
                ))}
              </div>
              {second.length > 0 && (
                <>
                  <div style={{ margin: "44px 0" }}>
                    <CtaBand />
                  </div>
                  <div className="blog-index">
                    {second.map((post) => (
                      <ArticleRow key={post.slug} post={post} />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div style={{ textAlign: "center", padding: "60px 20px", color: "var(--color-ink-500)" }}>
              <p style={{ fontSize: 16, marginBottom: 10 }}>No articles match your search.</p>
              <button
                onClick={() => { setActiveCategory("All"); setSearch(""); }}
                style={{ background: "none", border: 0, color: "var(--color-navy-800)", fontWeight: 600, fontSize: 14, cursor: "pointer", borderBottom: "1px solid var(--color-gold-500)" }}
              >
                Clear filters
              </button>
            </div>
          )}
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

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-ink-500)" }}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>
  );
}
