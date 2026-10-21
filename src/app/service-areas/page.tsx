import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { PUBLISHED_AREAS } from "@/lib/service-areas";
import { SERVICE_AREA_CONTENT } from "@/lib/service-area-content";

export const metadata: Metadata = {
  title: "Service Areas — Bathroom Remodeling Near You | Stonebrite Construction Group",
  description:
    "City-by-city guides to bathroom remodeling from Stonebrite, a Davis-based, family-owned remodeler serving Greater Sacramento and the Bay Area. Local costs, permits, water, and what we find in homes of every era.",
  alternates: { canonical: "https://stonebritecg.com/service-areas" },
};

export default function ServiceAreasPage() {
  const areas = PUBLISHED_AREAS.filter((a) => SERVICE_AREA_CONTENT[a.slug]);

  return (
    <>
      <Nav activeHref="/bathrooms" />

      <section style={{ background: "var(--color-cream-100)", padding: "72px 0 56px", borderBottom: "1px solid rgba(20,17,13,0.08)" }}>
        <div className="sb-container">
          <span className="sb-eyebrow">Service Areas</span>
          <h1 style={{ fontSize: "clamp(36px, 4.5vw, 56px)", marginTop: 16, lineHeight: 1.04, letterSpacing: "-0.015em", maxWidth: 760 }}>
            Bathroom remodeling guides for the cities we work in.
          </h1>
          <p style={{ marginTop: 18, fontSize: 17, color: "var(--color-ink-500)", lineHeight: 1.65, maxWidth: 640 }}>
            We&apos;re based in Davis and work across Greater Sacramento and the Bay Area. Each guide below covers one city in depth — real local costs, the permit process, water, housing eras, and what to plan for — written by our owner.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--color-cream-50)", padding: "56px 0 96px" }}>
        <div className="sb-container">
          <div className="area-index-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {areas.map((a) => (
              <Link
                key={a.slug}
                href={`/service-areas/${a.slug}`}
                style={{ display: "block", background: "#fff", border: "1px solid rgba(20,17,13,0.08)", borderRadius: 14, overflow: "hidden", boxShadow: "var(--shadow-sm)", textDecoration: "none", color: "inherit" }}
              >
                <img src={a.heroPhoto.src} alt={a.heroPhoto.alt} style={{ width: "100%", height: 220, objectFit: "cover", display: "block" }} />
                <div style={{ padding: "20px 22px 24px" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-gold-600)" }}>{a.county}</div>
                  <h2 style={{ fontSize: 22, marginTop: 8, color: "var(--color-navy-900)", lineHeight: 1.2 }}>{a.title}</h2>
                  <p style={{ marginTop: 10, fontSize: 14, color: "var(--color-ink-500)", lineHeight: 1.6 }}>{a.metaDescription.split(":")[0]}: the complete local guide.</p>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 14, fontSize: 13, fontWeight: 600, color: "var(--color-navy-800)", borderBottom: "1px solid var(--color-gold-500)", paddingBottom: 1 }}>
                    Read the {a.city} guide
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: 48, background: "var(--color-cream-200)", borderLeft: "4px solid var(--color-gold-500)", borderRadius: "0 10px 10px 0", padding: "22px 26px", maxWidth: 760 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-gold-600)", marginBottom: 8 }}>Don&apos;t see your city?</div>
            <p style={{ fontSize: 15, color: "var(--color-ink-700)", lineHeight: 1.7, margin: 0 }}>
              We travel throughout Greater Sacramento — Woodland, West Sacramento, Vacaville, Sacramento, Elk Grove, Folsom, Roseville — and into the Bay Area. More city guides are on the way. <Link href="/contact" style={{ color: "var(--color-navy-800)", fontWeight: 600, borderBottom: "1px solid var(--color-gold-500)" }}>Ask for a free estimate</Link> and we&apos;ll tell you right away whether we can take your project on.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
