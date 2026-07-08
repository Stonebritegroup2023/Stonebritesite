"use client";

import { useState } from "react";
import Link from "next/link";

const PROJECTS = [
  {
    title: "Hall Bathroom Remodel",
    city: "Roseville",
    type: "Bathroom",
    scope: "Full bath remodel — new shower, vanity, tile, lighting.",
    photoLabel: "BEFORE / AFTER · DROP IN PHOTO",
  },
  {
    title: "Tub-to-Shower Conversion",
    city: "Folsom",
    type: "Tub-to-Shower",
    scope: "Removed tub, curbless walk-in shower, frameless glass.",
    photoLabel: "BEFORE / AFTER · DROP IN PHOTO",
  },
  {
    title: "Primary Bath Remodel",
    city: "Granite Bay",
    type: "Primary Bath",
    scope: "Heated floor, freestanding tub, dual vanity, brass fixtures.",
    photoLabel: "BEFORE / AFTER · DROP IN PHOTO",
  },
  {
    title: "Vanity & Flooring Update",
    city: "Sacramento",
    type: "Bathroom",
    scope: "New vanity, LVP flooring, mirror, lighting, paint.",
    photoLabel: "BEFORE / AFTER · DROP IN PHOTO",
  },
  {
    title: "Walk-In Shower Remodel",
    city: "Rocklin",
    type: "Shower",
    scope: "Tile shower, niche, linear drain, frameless glass door.",
    photoLabel: "BEFORE / AFTER · DROP IN PHOTO",
  },
];

const VISIBLE = 3;

export default function FeaturedRemodels() {
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, PROJECTS.length - VISIBLE);

  const goPrev = () => setIndex((i) => Math.max(0, i - 1));
  const goNext = () => setIndex((i) => Math.min(maxIndex, i + 1));

  const visible = PROJECTS.slice(index, index + VISIBLE);

  return (
    <div>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40, flexWrap: "wrap", gap: 16 }}>
        <div>
          <span className="sb-eyebrow">Featured Remodels</span>
          <h2 style={{ fontSize: "clamp(32px, 3.5vw, 48px)", marginTop: 14, lineHeight: 1.05 }}>
            See the difference a clear<br />remodel plan can make.
          </h2>
          <p style={{ marginTop: 12, fontSize: 14, color: "var(--color-ink-500)", maxWidth: 560 }}>
            A curated look at recent bathroom, shower, and kitchen conversions — each with a written scope and a 5-year workmanship warranty.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="featured-grid">
        {visible.map((project, i) => (
          <article
            key={`${index}-${i}`}
            style={{
              background: "#fff",
              borderRadius: 14,
              overflow: "hidden",
              border: "1px solid rgba(20,17,13,0.08)",
              boxShadow: "var(--shadow-sm)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Before/After split photo */}
            <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
              <div className="sb-photo" style={{ height: 130, borderRadius: 0, position: "relative" }}>
                <span style={{
                  position: "absolute",
                  top: 10,
                  left: 10,
                  fontFamily: "monospace",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  padding: "4px 8px",
                  background: "rgba(11,31,51,0.92)",
                  color: "var(--color-cream-50)",
                  borderRadius: 3,
                  zIndex: 2,
                }}>
                  BEFORE
                </span>
                <span className="sb-photo-label">{project.photoLabel}</span>
              </div>
              <div className="sb-photo" style={{ height: 130, borderRadius: 0, position: "relative", borderTop: "2px solid var(--color-gold-500)" }}>
                <span style={{
                  position: "absolute",
                  top: 10,
                  left: 10,
                  fontFamily: "monospace",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  padding: "4px 8px",
                  background: "var(--color-gold-500)",
                  color: "var(--color-navy-900)",
                  borderRadius: 3,
                  zIndex: 2,
                }}>
                  AFTER
                </span>
                <span className="sb-photo-label">{project.photoLabel}</span>
              </div>
            </div>

            {/* Card content */}
            <div style={{ padding: 22, flex: 1, display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <span style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--color-navy-800)",
                  background: "var(--color-cream-100)",
                  padding: "4px 10px",
                  borderRadius: 999,
                }}>
                  {project.type}
                </span>
                <span style={{ fontSize: 11, color: "var(--color-stone-500)", letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 600 }}>
                  {project.city}
                </span>
              </div>
              <h3 style={{ fontSize: 20, color: "var(--color-navy-900)" }}>{project.title}</h3>
              <p style={{ marginTop: 8, fontSize: 13, color: "var(--color-ink-500)", lineHeight: 1.5, flex: 1 }}>{project.scope}</p>
              <div style={{ marginTop: 18 }}>
                <Link href="/contact" style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-navy-800)", borderBottom: "1px solid var(--color-gold-500)", paddingBottom: 1 }}>
                  Start a Similar Project →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div style={{ marginTop: 36, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Page ${i + 1}`}
              style={{
                width: i === index ? 24 : 8,
                height: 8,
                border: 0,
                borderRadius: 4,
                background: i === index ? "var(--color-gold-500)" : "rgba(20,17,13,0.15)",
                cursor: "pointer",
                transition: "all 0.2s",
                padding: 0,
              }}
            />
          ))}
          <span style={{ marginLeft: 14, fontSize: 12, color: "var(--color-ink-500)", fontWeight: 500 }}>
            {index + 1} / {maxIndex + 1}
          </span>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button
            onClick={goPrev}
            disabled={index === 0}
            aria-label="Previous"
            style={{
              width: 42,
              height: 42,
              borderRadius: "50%",
              border: "1px solid rgba(20,17,13,0.16)",
              background: "#fff",
              cursor: index === 0 ? "not-allowed" : "pointer",
              opacity: index === 0 ? 0.4 : 1,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--color-navy-800)",
              transition: "all 0.15s",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>
          </button>
          <button
            onClick={goNext}
            disabled={index === maxIndex}
            aria-label="Next"
            style={{
              width: 42,
              height: 42,
              borderRadius: "50%",
              border: "1px solid rgba(20,17,13,0.16)",
              background: index === maxIndex ? "#fff" : "var(--color-navy-900)",
              cursor: index === maxIndex ? "not-allowed" : "pointer",
              opacity: index === maxIndex ? 0.4 : 1,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              color: index === maxIndex ? "var(--color-navy-800)" : "var(--color-cream-50)",
              transition: "all 0.15s",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>;
}
