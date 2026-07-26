"use client";

import { useState } from "react";
import Link from "next/link";

const PROJECTS = [
  {
    title: "Primary Bath Remodel",
    city: "Sacramento",
    type: "Bathroom",
    scope: "Dated tub and framed shower removed — new walk-in shower, pebble floor, double floating vanity.",
    before: "/photos/primary-bathroom-remodel-sacramento-before.jpg",
    after: "/photos/primary-bathroom-remodel-sacramento-after.jpg",
    beforeAlt: "Primary bathroom in Sacramento before remodeling — dated gold-framed shower, garden tub, and brown tile floor",
    afterAlt: "Primary bathroom remodeling in Sacramento after — walk-in tile shower, pebble floor, and double floating wood vanity",
  },
  {
    title: "Senior-Friendly Full Bath Remodel",
    city: "Sacramento Area",
    type: "Aging-in-Place",
    scope: "We removed a closet and expanded into the hallway to make this bathroom senior-friendly — curbless walk-in shower with grab bar, plus a new fluted vanity, LED mirror, and tile flooring.",
    before: "/photos/full-bathroom-remodel-sacramento-before.jpg",
    after: "/photos/full-bathroom-remodel-sacramento-after.jpg",
    after2: "/photos/tile-shower-conversion-sacramento.jpg",
    beforeAlt: "Full bathroom remodeling in Sacramento during demolition — wallpaper removed and dated cherry vanity torn out",
    afterAlt: "Senior-friendly bathroom remodel in Sacramento after — fluted wood vanity, quartz top, LED mirror, and floating shelves",
    after2Alt: "Senior-friendly curbless walk-in shower in Sacramento with grab bar, matte black rainfall fixtures, and marble hex floor",
  },
  {
    title: "Walk-In Shower Remodel",
    city: "Sacramento Area",
    type: "Shower",
    scope: "Dated tile shower replaced — large-format marble-look porcelain, built-in bench, niche, and rainfall fixtures.",
    before: "/photos/walk-in-shower-remodel-sacramento-before.jpg",
    after: "/photos/walk-in-shower-remodel-sacramento-after.jpg",
    beforeAlt: "Walk-in shower in Sacramento before remodeling — dated beige tile with decorative accent border",
    afterAlt: "Walk-in shower remodeling in Sacramento after — marble-look porcelain tile, built-in bench, niche, and rainfall shower",
  },
  {
    title: "Tub-to-Shower Conversion",
    city: "Sacramento Area",
    type: "Tub-to-Shower",
    scope: "Old alcove tub removed — full-height tile walls, marble hex floor, and black sliding glass enclosure.",
    before: "/photos/tub-to-shower-conversion-sacramento-before.jpg",
    after: "/photos/tub-to-shower-conversion-sacramento-after.jpg",
    beforeAlt: "Tub-to-shower conversion in Sacramento before — old alcove bathtub with white square tile surround",
    afterAlt: "Tub-to-shower conversion in Sacramento after — walk-in shower with marble hex floor and black sliding glass door",
  },
];

export default function FeaturedRemodels() {
  const [index, setIndex] = useState(0);
  const maxIndex = PROJECTS.length - 1;
  const project = PROJECTS[index];

  const goPrev = () => setIndex((i) => Math.max(0, i - 1));
  const goNext = () => setIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: 36 }}>
        <span className="sb-eyebrow">Featured Remodels</span>
        <h2 style={{ fontSize: "clamp(32px, 3.5vw, 48px)", marginTop: 14, lineHeight: 1.05 }}>
          See the difference a clear<br />remodel plan can make.
        </h2>
        <p style={{ marginTop: 12, fontSize: 14, color: "var(--color-ink-500)", maxWidth: 560 }}>
          Real Stonebrite projects — every photo below is our own work, shown start to finish.
        </p>
      </div>

      {/* Slide */}
      <div
        style={{
          background: "#fff",
          borderRadius: 16,
          border: "1px solid rgba(20,17,13,0.08)",
          boxShadow: "var(--shadow-md)",
          overflow: "hidden",
        }}
      >
        <div className="fr-photos" style={{ display: "grid", gridTemplateColumns: project.after2 ? "1fr 1fr 1fr" : "1fr 1fr", gap: 2, background: "rgba(20,17,13,0.08)" }}>
          <figure style={{ margin: 0, position: "relative", background: "var(--color-cream-100)" }}>
            <span
              style={{
                position: "absolute", top: 14, left: 14, zIndex: 2,
                fontFamily: "monospace", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em",
                padding: "5px 10px", background: "rgba(11,31,51,0.92)",
                color: "var(--color-cream-50)", borderRadius: 4,
              }}
            >
              BEFORE
            </span>
            <img
              src={project.before}
              alt={project.beforeAlt}
              className="fr-img"
              style={{ width: "100%", height: 460, objectFit: "contain", display: "block" }}
            />
          </figure>
          <figure style={{ margin: 0, position: "relative", background: "var(--color-cream-100)" }}>
            <span
              style={{
                position: "absolute", top: 14, left: 14, zIndex: 2,
                fontFamily: "monospace", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em",
                padding: "5px 10px", background: "var(--color-gold-500)",
                color: "var(--color-navy-900)", borderRadius: 4,
              }}
            >
              AFTER
            </span>
            <img
              src={project.after}
              alt={project.afterAlt}
              className="fr-img"
              style={{ width: "100%", height: 460, objectFit: "contain", display: "block" }}
            />
          </figure>
          {project.after2 && (
            <figure style={{ margin: 0, position: "relative", background: "var(--color-cream-100)" }}>
              <span
                style={{
                  position: "absolute", top: 14, left: 14, zIndex: 2,
                  fontFamily: "monospace", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em",
                  padding: "5px 10px", background: "var(--color-gold-500)",
                  color: "var(--color-navy-900)", borderRadius: 4,
                }}
              >
                AFTER
              </span>
              <img
                src={project.after2}
                alt={project.after2Alt}
                className="fr-img"
                style={{ width: "100%", height: 460, objectFit: "contain", display: "block" }}
              />
            </figure>
          )}
        </div>

        {/* Caption */}
        <div style={{ padding: "26px 32px 30px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 12 }}>
            <span style={{
              fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
              color: "var(--color-navy-800)", background: "var(--color-cream-100)",
              padding: "5px 12px", borderRadius: 999,
            }}>
              {project.type}
            </span>
            <span style={{ fontSize: 11, color: "var(--color-stone-500)", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600 }}>
              {project.city}
            </span>
          </div>
          <h3 style={{ fontSize: 26, color: "var(--color-navy-900)", lineHeight: 1.15 }}>{project.title}</h3>
          <p style={{ marginTop: 10, fontSize: 15, color: "var(--color-ink-500)", lineHeight: 1.6, maxWidth: 720 }}>
            {project.scope}
          </p>
          <div style={{ marginTop: 20 }}>
            <Link href="/contact" style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", color: "var(--color-navy-800)", borderBottom: "1px solid var(--color-gold-500)", paddingBottom: 2 }}>
              START A SIMILAR PROJECT →
            </Link>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div style={{ marginTop: 24, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {PROJECTS.map((p, i) => (
            <button
              key={p.title}
              onClick={() => setIndex(i)}
              aria-label={`Show ${p.title}`}
              aria-current={i === index}
              style={{
                width: i === index ? 26 : 8, height: 8, borderRadius: 999,
                background: i === index ? "var(--color-gold-500)" : "rgba(20,17,13,0.18)",
                border: 0, cursor: "pointer", padding: 0, transition: "all .2s",
              }}
            />
          ))}
          <span style={{ marginLeft: 8, fontSize: 12, color: "var(--color-ink-500)", fontWeight: 600 }}>
            {index + 1} / {PROJECTS.length}
          </span>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <button
            onClick={goPrev}
            disabled={index === 0}
            aria-label="Previous project"
            style={{
              width: 44, height: 44, borderRadius: "50%", cursor: index === 0 ? "default" : "pointer",
              border: "1px solid rgba(20,17,13,0.16)", background: "#fff",
              color: "var(--color-navy-900)", opacity: index === 0 ? 0.35 : 1,
              display: "inline-flex", alignItems: "center", justifyContent: "center",
            }}
          >
            ←
          </button>
          <button
            onClick={goNext}
            disabled={index === maxIndex}
            aria-label="Next project"
            style={{
              width: 44, height: 44, borderRadius: "50%", cursor: index === maxIndex ? "default" : "pointer",
              border: "1px solid var(--color-navy-900)",
              background: index === maxIndex ? "#fff" : "var(--color-navy-900)",
              color: index === maxIndex ? "var(--color-navy-900)" : "var(--color-cream-50)",
              opacity: index === maxIndex ? 0.35 : 1,
              display: "inline-flex", alignItems: "center", justifyContent: "center",
            }}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
