import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import EstimateBand from "@/components/sections/EstimateBand";
import TrustStrip from "@/components/sections/TrustStrip";
import Process from "@/components/sections/Process";
import FaqAccordion from "@/components/sections/FaqAccordion";
import { PUBLISHED_AREAS, getServiceArea } from "@/lib/service-areas";
import { SERVICE_AREA_CONTENT, type AreaSection } from "@/lib/service-area-content";
import { PUBLISHED_POSTS } from "@/lib/blog-data";
import { serviceAreaJsonLd } from "@/lib/schema";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export function generateStaticParams() {
  return PUBLISHED_AREAS.filter((a) => SERVICE_AREA_CONTENT[a.slug]).map((a) => ({ city: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const area = getServiceArea(city);
  if (!area?.published || !SERVICE_AREA_CONTENT[city]) {
    return { title: "Service Area | Stonebrite", robots: { index: false } };
  }
  const url = `https://stonebritecg.com/service-areas/${area.slug}`;
  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: area.title,
      description: area.metaDescription,
      url,
      publishedTime: area.publishedAt,
      modifiedTime: area.updatedAt,
      authors: ["Abel Vaniyev"],
      images: [{ url: `https://stonebritecg.com${area.heroPhoto.src}`, alt: area.heroPhoto.alt }],
    },
    twitter: { card: "summary_large_image", title: area.title, description: area.metaDescription },
  };
}

export default async function ServiceAreaPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const area = getServiceArea(city);
  const content = area?.published ? SERVICE_AREA_CONTENT[city] : undefined;
  if (!area || !content) notFound();

  const path = `/service-areas/${area.slug}`;
  const jsonLd = serviceAreaJsonLd({
    path,
    city: area.city,
    county: area.county,
    title: area.title,
    description: area.metaDescription,
    datePublished: area.publishedAt,
    dateModified: area.updatedAt,
    image: area.heroPhoto.src,
    faqs: content.faqs,
  });
  const related = PUBLISHED_POSTS.slice(0, 4);
  const otherAreas = PUBLISHED_AREAS.filter((a) => a.slug !== area.slug && SERVICE_AREA_CONTENT[a.slug]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav activeHref="/bathrooms" />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section style={{ background: "var(--color-navy-900)", color: "var(--color-cream-50)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 80% 30%, rgba(229,181,58,0.14), transparent 50%)" }} />
        <div className="sb-container" style={{ padding: "40px 56px 80px", position: "relative" }}>
          <nav style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--color-stone-300)", marginBottom: 28, flexWrap: "wrap" }} aria-label="Breadcrumb">
            <Link href="/" style={{ color: "var(--color-stone-300)" }}>Home</Link>
            <span style={{ color: "var(--color-stone-500)" }}>›</span>
            <Link href="/service-areas" style={{ color: "var(--color-stone-300)" }}>Service Areas</Link>
            <span style={{ color: "var(--color-stone-500)" }}>›</span>
            <span style={{ color: "var(--color-gold-300)", fontWeight: 600 }}>{area.city}, CA</span>
          </nav>

          <div className="area-hero-grid" style={{ display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: 56, alignItems: "center" }}>
            <div>
              <span className="sb-eyebrow" style={{ color: "var(--color-gold-300)" }}>Service Area · {area.county}</span>
              <h1 style={{ fontSize: "clamp(38px, 4.5vw, 60px)", marginTop: 18, lineHeight: 1.03, letterSpacing: "-0.015em", color: "var(--color-cream-50)" }}>
                {area.title}
              </h1>
              <p style={{ marginTop: 22, fontSize: 17, color: "var(--color-stone-300)", lineHeight: 1.65, maxWidth: 560 }}>
                {area.intro}
              </p>
              <div style={{ marginTop: 28, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", fontSize: 13, color: "var(--color-stone-300)" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <img
                    src="/photos/abel-vaniyev-stonebrite-owner-sacramento.jpg"
                    alt="Abel Vaniyev, owner of Stonebrite Construction Group"
                    style={{ width: 32, height: 32, borderRadius: "50%", objectFit: "cover" }}
                  />
                  By Abel Vaniyev, Owner
                </span>
                <span aria-hidden="true" style={{ width: 1, height: 18, background: "rgba(255,255,255,0.18)" }} />
                <span>{area.readTime} read</span>
                <span aria-hidden="true" style={{ width: 1, height: 18, background: "rgba(255,255,255,0.18)" }} />
                <span>Updated {formatDate(area.updatedAt)}</span>
              </div>
              <div style={{ marginTop: 30, display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
                <Link href="/contact" className="sb-btn sb-btn-primary sb-btn-lg">
                  Get My Free Estimate <ArrowIcon />
                </Link>
                {area.project && (
                  <a href="#our-work" className="sb-btn sb-btn-ghost-cream sb-btn-lg">
                    See Our {area.city} Work
                  </a>
                )}
              </div>
            </div>
            <img
              src={area.heroPhoto.src}
              alt={area.heroPhoto.alt}
              className="area-hero-photo"
              style={{ height: 440, width: "100%", objectFit: "cover", borderRadius: 14, display: "block" }}
            />
          </div>
        </div>
      </section>

      <EstimateBand defaultService="bath" source={`${area.city} service-area page`} />
      <TrustStrip />

      {/* ── QUICK ANSWER + AT A GLANCE ───────────────────────────────── */}
      <section style={{ background: "var(--color-cream-50)", padding: "48px 0 0" }}>
        <div className="sb-container">
          <div style={{ background: "var(--color-cream-200)", borderLeft: "4px solid var(--color-gold-500)", borderRadius: "0 10px 10px 0", padding: "24px 28px" }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-gold-600)", marginBottom: 10 }}>
              Quick Answer
            </div>
            <p style={{ fontSize: 15.5, color: "var(--color-ink-700)", lineHeight: 1.7, margin: 0 }}>{content.quickAnswer}</p>
          </div>

          {content.glance.length > 0 && (
            <dl className="area-glance" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, margin: "20px 0 0" }}>
              {content.glance.map((g) => (
                <div key={g.label} style={{ background: "#fff", border: "1px solid rgba(20,17,13,0.08)", borderRadius: 12, padding: "16px 18px", boxShadow: "var(--shadow-sm)" }}>
                  <dt style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-ink-300)" }}>{g.label}</dt>
                  <dd style={{ margin: "6px 0 0", fontSize: 15, fontWeight: 600, color: "var(--color-navy-900)", lineHeight: 1.4 }}>{g.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </section>

      {/* ── MAIN CONTENT + SIDEBAR ───────────────────────────────────── */}
      <section style={{ background: "var(--color-cream-50)", padding: "48px 0 80px" }}>
        <div className="sb-container">
          <div className="blogpost-layout" style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 56, alignItems: "start" }}>
            <div style={{ minWidth: 0 }}>
              {/* Table of contents */}
              <div style={{ background: "#fff", border: "1px solid rgba(20,17,13,0.08)", borderRadius: 12, padding: "24px 28px", marginBottom: 40, boxShadow: "var(--shadow-sm)" }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-ink-500)", marginBottom: 16 }}>
                  In This Guide
                </div>
                <ol className="area-toc" style={{ margin: 0, paddingLeft: 20, display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: 28, rowGap: 10 }}>
                  {content.sections.map((sec) => (
                    <li key={sec.id}>
                      <a href={`#${sec.id}`} style={{ fontSize: 14, fontWeight: 500, color: "var(--color-navy-800)", textDecoration: "none", borderBottom: "1px solid var(--color-gold-300)", paddingBottom: 1 }}>
                        {sec.heading}
                      </a>
                    </li>
                  ))}
                  {area.project && (
                    <li><a href="#our-work" style={{ fontSize: 14, fontWeight: 500, color: "var(--color-navy-800)", textDecoration: "none", borderBottom: "1px solid var(--color-gold-300)", paddingBottom: 1 }}>Our work in {area.city}</a></li>
                  )}
                  <li><a href="#faq" style={{ fontSize: 14, fontWeight: 500, color: "var(--color-navy-800)", textDecoration: "none", borderBottom: "1px solid var(--color-gold-300)", paddingBottom: 1 }}>Frequently asked questions</a></li>
                  <li><a href="#sources" style={{ fontSize: 14, fontWeight: 500, color: "var(--color-navy-800)", textDecoration: "none", borderBottom: "1px solid var(--color-gold-300)", paddingBottom: 1 }}>Sources</a></li>
                </ol>
              </div>

              {/* Body */}
              <div className="area-body" style={{ fontSize: 16, color: "var(--color-ink-700)", lineHeight: 1.8 }}>
                {content.sections.map((sec) => (
                  <Section key={sec.id} sec={sec} />
                ))}
              </div>

              {/* Real project in this city */}
              {area.project && (
                <div id="our-work" style={{ marginTop: 64, scrollMarginTop: 96 }}>
                  <span className="sb-eyebrow">Our Work in {area.city}</span>
                  <h2 style={{ fontSize: 30, color: "var(--color-navy-900)", marginTop: 12, marginBottom: 10 }}>{area.project.title}</h2>
                  <p style={{ fontSize: 15.5, color: "var(--color-ink-500)", lineHeight: 1.7, marginBottom: 22, maxWidth: 640 }}>{area.project.scope}</p>
                  <div className="area-ba" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, background: "rgba(20,17,13,0.08)", borderRadius: 14, overflow: "hidden", border: "1px solid rgba(20,17,13,0.08)" }}>
                    <figure style={{ margin: 0, position: "relative", background: "var(--color-cream-100)" }}>
                      <span style={{ position: "absolute", top: 14, left: 14, zIndex: 2, fontFamily: "monospace", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", padding: "5px 10px", background: "rgba(11,31,51,0.92)", color: "var(--color-cream-50)", borderRadius: 4 }}>BEFORE</span>
                      <img src={area.project.before} alt={area.project.beforeAlt} className="area-ba-img" style={{ width: "100%", height: 420, objectFit: "cover", display: "block" }} />
                    </figure>
                    <figure style={{ margin: 0, position: "relative", background: "var(--color-cream-100)" }}>
                      <span style={{ position: "absolute", top: 14, left: 14, zIndex: 2, fontFamily: "monospace", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", padding: "5px 10px", background: "var(--color-gold-500)", color: "var(--color-navy-900)", borderRadius: 4 }}>AFTER</span>
                      <img src={area.project.after} alt={area.project.afterAlt} className="area-ba-img" style={{ width: "100%", height: 420, objectFit: "cover", display: "block" }} />
                    </figure>
                  </div>
                  <p style={{ marginTop: 12, fontSize: 13, color: "var(--color-ink-300)" }}>
                    Real Stonebrite project — our own photos, start to finish. <Link href="/#featured-projects" style={{ color: "var(--color-navy-800)", fontWeight: 600, borderBottom: "1px solid var(--color-gold-500)" }}>See more featured projects</Link>
                  </p>
                </div>
              )}

              {/* FAQ */}
              <div id="faq" style={{ marginTop: 64, scrollMarginTop: 96 }}>
                <span className="sb-eyebrow">FAQ</span>
                <h2 style={{ fontSize: 30, color: "var(--color-navy-900)", marginTop: 12, marginBottom: 24 }}>
                  {area.city} bathroom remodeling questions, answered
                </h2>
                <FaqAccordion faqs={content.faqs.map((f, i) => ({ ...f, open: i === 0 }))} />
              </div>

              {/* In-article CTA */}
              <div style={{ marginTop: 56, background: "var(--color-navy-900)", borderRadius: 16, padding: "40px 44px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(229,181,58,0.2), transparent 65%)" }} />
                <span className="sb-eyebrow" style={{ color: "var(--color-gold-300)" }}>Free In-Home Estimate</span>
                <h3 style={{ fontSize: 30, marginTop: 12, color: "var(--color-cream-50)", lineHeight: 1.08 }}>
                  Planning a bathroom remodel in {area.city}?
                </h3>
                <p style={{ marginTop: 14, color: "var(--color-stone-300)", fontSize: 15, lineHeight: 1.65, maxWidth: 520 }}>
                  We&apos;re local. We&apos;ll walk through your bathroom, talk through what you want, and put a clear written estimate in your hands — no pressure, no sales script.
                </p>
                <div style={{ marginTop: 28, display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
                  <Link href="/contact" className="sb-btn sb-btn-primary sb-btn-lg">
                    Get My Free Estimate <ArrowIcon />
                  </Link>
                  <a href="tel:5307716025" className="sb-btn sb-btn-ghost-cream sb-btn-lg">Call (530) 771-6025</a>
                </div>
              </div>

              {/* Sources */}
              <div id="sources" style={{ marginTop: 56, scrollMarginTop: 96 }}>
                <h2 style={{ fontSize: 22, color: "var(--color-navy-900)", marginBottom: 12 }}>Sources</h2>
                <p style={{ fontSize: 14, color: "var(--color-ink-500)", lineHeight: 1.6, marginBottom: 14 }}>
                  The local facts on this page come from public sources. Rules and fees change — confirm anything that affects your project with the City before you rely on it.
                </p>
                <ol style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8, fontSize: 14, color: "var(--color-ink-500)" }}>
                  {content.sources.map((s) => (
                    <li key={s.href} style={{ overflowWrap: "anywhere" }}>
                      <a href={s.href} target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-navy-800)", borderBottom: "1px solid var(--color-gold-300)" }}>{s.label}</a>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* ── SIDEBAR ─────────────────────────────────────────────── */}
            <aside style={{ position: "sticky", top: 88, display: "flex", flexDirection: "column", gap: 24 }}>
              <div style={{ background: "var(--color-navy-900)", borderRadius: 12, padding: "24px", color: "var(--color-cream-50)" }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-gold-300)", marginBottom: 12 }}>Free Estimate</div>
                <div style={{ fontSize: 18, fontFamily: "var(--font-serif)", lineHeight: 1.2, marginBottom: 12 }}>Remodeling a bathroom in {area.city}?</div>
                <p style={{ fontSize: 13, color: "var(--color-stone-300)", lineHeight: 1.65, marginBottom: 20 }}>
                  Free in-home estimates for bathroom and tub-to-shower remodels in {area.city} and throughout Greater Sacramento and the Bay Area.
                </p>
                <Link href="/contact" className="sb-btn sb-btn-primary" style={{ width: "100%", justifyContent: "center" }}>Get My Free Estimate</Link>
                <div style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "var(--color-stone-500)" }}>
                  <PhoneIcon />
                  <a href="tel:5307716025" style={{ color: "var(--color-stone-300)", fontWeight: 600 }}>(530) 771-6025</a>
                </div>
              </div>

              <div style={{ background: "#fff", border: "1px solid rgba(20,17,13,0.08)", borderRadius: 12, padding: "24px", boxShadow: "var(--shadow-sm)" }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-ink-500)", marginBottom: 16 }}>Written By</div>
                <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 14 }}>
                  <img src="/photos/abel-vaniyev-stonebrite-owner-sacramento.jpg" alt="Abel Vaniyev, owner of Stonebrite Construction Group" style={{ width: 56, height: 56, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "var(--color-navy-900)" }}>Abel Vaniyev</div>
                    <div style={{ fontSize: 13, color: "var(--color-ink-400)", marginTop: 2 }}>Owner · Davis, CA</div>
                  </div>
                </div>
                <p style={{ fontSize: 13, color: "var(--color-ink-500)", lineHeight: 1.65, margin: 0 }}>
                  Abel owns and leads Stonebrite Construction Group, a family-owned remodeling company based in Davis and serving Greater Sacramento and the Bay Area. CSLB #1113488 · 5-year workmanship warranty.
                </p>
              </div>

              <div style={{ background: "#fff", border: "1px solid rgba(20,17,13,0.08)", borderRadius: 12, padding: "24px", boxShadow: "var(--shadow-sm)" }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-ink-500)", marginBottom: 16 }}>Services in {area.city}</div>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10, fontSize: 14 }}>
                  {[
                    { href: "/bathrooms", label: "Full Bathroom Remodeling" },
                    { href: "/tub-to-shower", label: "Tub-to-Shower Conversion" },
                    { href: "/bathrooms#aging-in-place", label: "Aging-in-Place Bathrooms" },
                    { href: "/kitchens", label: "Kitchen Remodeling" },
                  ].map((l) => (
                    <li key={l.href}><Link href={l.href} style={{ color: "var(--color-navy-800)", fontWeight: 600, borderBottom: "1px solid var(--color-gold-300)" }}>{l.label}</Link></li>
                  ))}
                </ul>
              </div>

              <div style={{ background: "#fff", border: "1px solid rgba(20,17,13,0.08)", borderRadius: 12, padding: "24px", boxShadow: "var(--shadow-sm)" }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-ink-500)", marginBottom: 16 }}>Keep Reading</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {related.map((rp) => (
                    <Link key={rp.slug} href={`/blog/${rp.slug}`} style={{ fontSize: 14, lineHeight: 1.35, color: "var(--color-navy-900)", fontWeight: 600, textDecoration: "none" }}>
                      {rp.title}
                    </Link>
                  ))}
                </div>
              </div>

              {otherAreas.length > 0 && (
                <div style={{ background: "#fff", border: "1px solid rgba(20,17,13,0.08)", borderRadius: 12, padding: "24px", boxShadow: "var(--shadow-sm)" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-ink-500)", marginBottom: 16 }}>Other Service Areas</div>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10, fontSize: 14 }}>
                    {otherAreas.map((a) => (
                      <li key={a.slug}><Link href={`/service-areas/${a.slug}`} style={{ color: "var(--color-navy-800)", fontWeight: 600 }}>{a.city}, CA</Link></li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────── */}
      <section style={{ padding: "80px 0", background: "var(--color-cream-100)", borderTop: "1px solid rgba(20,17,13,0.08)" }}>
        <div className="sb-container">
          <div style={{ maxWidth: 640, marginBottom: 40 }}>
            <span className="sb-eyebrow">How We Work</span>
            <h2 style={{ fontSize: "clamp(30px, 3.5vw, 44px)", marginTop: 14, lineHeight: 1.05 }}>
              The same process on every {area.city} project.
            </h2>
          </div>
          <Process />
        </div>
      </section>

      <Footer />
    </>
  );
}

/* ── Section renderer ──────────────────────────────────────────────────── */
function Section({ sec }: { sec: AreaSection }) {
  return (
    <div>
      <h2 id={sec.id} style={{ fontSize: 28, marginBottom: 16, marginTop: 48, color: "var(--color-navy-900)", scrollMarginTop: 96 }}>
        {sec.heading}
      </h2>
      {sec.paras.map((p, i) => (
        <p key={i} style={{ marginBottom: 20 }}>{p}</p>
      ))}
      {sec.list && (
        <ul style={{ margin: "0 0 20px", paddingLeft: 24, display: "flex", flexDirection: "column", gap: 12 }}>
          {sec.list.map((item, i) => (
            <li key={i} style={{ lineHeight: 1.7 }}>{item}</li>
          ))}
        </ul>
      )}
      {sec.afterList?.map((p, i) => (
        <p key={i} style={{ marginBottom: 20 }}>{p}</p>
      ))}
      {sec.table && (
        <div className="area-table-wrap" style={{ overflowX: "auto", margin: "4px 0 24px", border: "1px solid rgba(20,17,13,0.1)", borderRadius: 12, background: "#fff", boxShadow: "var(--shadow-sm)" }}>
          <table className="area-table" style={{ width: "100%", borderCollapse: "collapse", fontSize: 14.5, minWidth: 480 }}>
            {sec.table.caption && (
              <caption style={{ textAlign: "left", padding: "14px 18px 6px", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-ink-300)", captionSide: "top" }}>
                {sec.table.caption}
              </caption>
            )}
            <thead>
              <tr>
                {sec.table.columns.map((c) => (
                  <th key={c} scope="col" style={{ textAlign: "left", padding: "12px 18px", fontSize: 12.5, fontWeight: 700, color: "var(--color-navy-900)", background: "var(--color-cream-100)", borderBottom: "1px solid rgba(20,17,13,0.1)" }}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sec.table.rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci} style={{ padding: "12px 18px", verticalAlign: "top", lineHeight: 1.55, borderBottom: ri === sec.table!.rows.length - 1 ? "none" : "1px solid rgba(20,17,13,0.06)", fontWeight: ci === 0 ? 600 : 400, color: ci === 0 ? "var(--color-navy-900)" : "var(--color-ink-700)" }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {sec.subsections?.map((sub) => (
        <div key={sub.heading}>
          <h3 style={{ fontSize: 20, marginTop: 28, marginBottom: 12, color: "var(--color-navy-900)" }}>{sub.heading}</h3>
          {sub.paras.map((p, i) => (
            <p key={i} style={{ marginBottom: 18 }}>{p}</p>
          ))}
          {sub.list && (
            <ul style={{ margin: "0 0 18px", paddingLeft: 24, display: "flex", flexDirection: "column", gap: 10 }}>
              {sub.list.map((item, i) => (
                <li key={i} style={{ lineHeight: 1.7 }}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
      {sec.callout && (
        <div style={{ background: "var(--color-cream-200)", borderLeft: "4px solid var(--color-gold-500)", borderRadius: "0 10px 10px 0", padding: "18px 22px", margin: "4px 0 24px" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-gold-600)", marginBottom: 8 }}>{sec.callout.label}</div>
          <p style={{ fontSize: 15, color: "var(--color-ink-700)", lineHeight: 1.7, margin: 0 }}>{sec.callout.text}</p>
        </div>
      )}
      {sec.links && (
        <div style={{ margin: "4px 0 8px", display: "flex", flexWrap: "wrap", gap: "8px 14px", alignItems: "center" }}>
          <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-ink-300)" }}>Related</span>
          {sec.links.map((l) => (
            <Link key={l.href} href={l.href} style={{ fontSize: 13.5, fontWeight: 600, color: "var(--color-navy-800)", borderBottom: "1px solid var(--color-gold-500)", paddingBottom: 1 }}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}
function PhoneIcon() {
  return <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></svg>;
}
