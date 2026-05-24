"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

const FILTER_CHIPS = [
  { label: "All", value: "all" },
  { label: "Bathrooms", value: "bathrooms" },
  { label: "Tub-to-Shower", value: "tub-to-shower" },
  { label: "Kitchens", value: "kitchens" },
  { label: "Details", value: "details" },
];

const PROJECTS = [
  {
    title: "Hall Bathroom Remodel",
    city: "Roseville",
    scope: "Full bath remodel — new shower, vanity, tile, exhaust fan, and lighting",
    type: "bathrooms",
    typeLabel: "Bathroom",
    photo: "HALL BATHROOM · ROSEVILLE · DROP IN REAL PHOTO",
  },
  {
    title: "Tub-to-Shower Conversion",
    city: "Folsom",
    scope: "Removed tub, curbless walk-in shower, panel walls, frameless glass door",
    type: "tub-to-shower",
    typeLabel: "Tub-to-Shower",
    photo: "TUB → SHOWER · FOLSOM · DROP IN REAL PHOTO",
  },
  {
    title: "Primary Bath Remodel",
    city: "Granite Bay",
    scope: "Primary suite — new shower, double vanity, soaking tub, tile throughout",
    type: "bathrooms",
    typeLabel: "Bathroom",
    photo: "PRIMARY BATH · GRANITE BAY · DROP IN REAL PHOTO",
  },
  {
    title: "Vanity & Flooring Update",
    city: "Sacramento",
    scope: "New vanity, LVP flooring, mirror, lighting, GFCI outlets, paint",
    type: "details",
    typeLabel: "Detail Update",
    photo: "VANITY UPDATE · SACRAMENTO · DROP IN REAL PHOTO",
  },
  {
    title: "Walk-In Shower Remodel",
    city: "Rocklin",
    scope: "Custom tile shower, linear drain, built-in niche, frameless glass",
    type: "bathrooms",
    typeLabel: "Bathroom",
    photo: "WALK-IN SHOWER · ROCKLIN · DROP IN REAL PHOTO",
  },
  {
    title: "Kitchen Remodel",
    city: "El Dorado Hills",
    scope: "New cabinets, quartz counters, tile backsplash, lighting, appliances",
    type: "kitchens",
    typeLabel: "Kitchen",
    photo: "KITCHEN REMODEL · EL DORADO HILLS · DROP IN REAL PHOTO",
  },
  {
    title: "Aging-in-Place Bath",
    city: "Citrus Heights",
    scope: "Curbless shower, grab bars, blocking, bench seat, hand-held showerhead",
    type: "tub-to-shower",
    typeLabel: "Tub-to-Shower",
    photo: "AGING-IN-PLACE · CITRUS HEIGHTS · DROP IN REAL PHOTO",
  },
  {
    title: "Guest Bath Refresh",
    city: "Lincoln",
    scope: "New tub surround tile, vanity, mirror, paint — guest bathroom update",
    type: "bathrooms",
    typeLabel: "Bathroom",
    photo: "GUEST BATH · LINCOLN · DROP IN REAL PHOTO",
  },
  {
    title: "Kitchen Update",
    city: "Fair Oaks",
    scope: "Cabinet resurfacing, new countertops, backsplash tile, under-cabinet lighting",
    type: "kitchens",
    typeLabel: "Kitchen",
    photo: "KITCHEN UPDATE · FAIR OAKS · DROP IN REAL PHOTO",
  },
];

const BEFORE_AFTER_PAIRS = [
  {
    type: "Hall Bathroom · Roseville",
    before: "BEFORE · HALL BATHROOM · ROSEVILLE",
    after: "AFTER · HALL BATHROOM · ROSEVILLE",
  },
  {
    type: "Tub-to-Shower · Folsom",
    before: "BEFORE · TUB AREA · FOLSOM",
    after: "AFTER · WALK-IN SHOWER · FOLSOM",
  },
  {
    type: "Primary Bath · Granite Bay",
    before: "BEFORE · PRIMARY BATH · GRANITE BAY",
    after: "AFTER · PRIMARY BATH · GRANITE BAY",
  },
];

const TYPE_BADGE_COLORS: Record<string, { bg: string; color: string }> = {
  bathrooms: { bg: "rgba(11,31,51,0.9)", color: "#F3D78A" },
  "tub-to-shower": { bg: "rgba(26,58,86,0.9)", color: "#F3D78A" },
  kitchens: { bg: "rgba(201,155,34,0.9)", color: "#0B1F33" },
  details: { bg: "rgba(92,84,71,0.9)", color: "#FBF7EE" },
};

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.type === activeFilter);

  return (
    <>
      <Nav activeHref="/gallery" />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--color-cream-50)",
          padding: "80px 0 72px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 85% 20%, rgba(229,181,58,0.07), transparent 45%)",
          }}
        />
        <div className="sb-container" style={{ padding: "0 56px", position: "relative" }}>
          <div style={{ maxWidth: 720 }}>
            <span className="sb-eyebrow">Project Gallery</span>
            <h1
              style={{
                fontSize: "clamp(44px, 5vw, 72px)",
                marginTop: 18,
                lineHeight: 1.02,
                letterSpacing: "-0.015em",
              }}
            >
              Project Gallery
            </h1>
            <p
              style={{
                marginTop: 20,
                fontSize: 20,
                color: "var(--color-ink-500)",
                lineHeight: 1.6,
                maxWidth: 560,
              }}
            >
              A curated look at recent bathroom and kitchen remodels across Greater Sacramento — each one scoped, built, and warranted by Stonebrite.
            </p>
          </div>
        </div>
      </section>

      {/* ── FILTER BAR ────────────────────────────────────────────────── */}
      <div
        style={{
          background: "#fff",
          borderBottom: "1px solid rgba(20,17,13,0.08)",
          position: "sticky",
          top: 72,
          zIndex: 40,
        }}
      >
        <div
          className="sb-container"
          style={{
            padding: "0 56px",
            display: "flex",
            gap: 8,
            alignItems: "center",
            height: 64,
            overflowX: "auto",
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--color-ink-300)",
              marginRight: 8,
              flexShrink: 0,
            }}
          >
            Filter:
          </span>
          {FILTER_CHIPS.map((chip) => {
            const isActive = activeFilter === chip.value;
            return (
              <button
                key={chip.value}
                onClick={() => setActiveFilter(chip.value)}
                style={{
                  padding: "8px 18px",
                  borderRadius: 999,
                  border: isActive
                    ? "1.5px solid var(--color-navy-900)"
                    : "1.5px solid rgba(20,17,13,0.14)",
                  background: isActive ? "var(--color-navy-900)" : "transparent",
                  color: isActive ? "var(--color-cream-50)" : "var(--color-ink-700)",
                  fontSize: 13,
                  fontWeight: 600,
                  fontFamily: "var(--font-sans)",
                  cursor: "pointer",
                  transition: "all 0.15s",
                  flexShrink: 0,
                  letterSpacing: "0.01em",
                }}
              >
                {chip.label}
                {chip.value !== "all" && (
                  <span
                    style={{
                      marginLeft: 7,
                      fontSize: 11,
                      opacity: 0.65,
                      fontWeight: 500,
                    }}
                  >
                    ({PROJECTS.filter((p) => p.type === chip.value).length})
                  </span>
                )}
              </button>
            );
          })}

          {activeFilter !== "all" && (
            <div
              style={{
                marginLeft: "auto",
                fontSize: 13,
                color: "var(--color-ink-300)",
                flexShrink: 0,
              }}
            >
              {filtered.length} project{filtered.length !== 1 ? "s" : ""}
            </div>
          )}
        </div>
      </div>

      {/* ── PROJECT GRID ──────────────────────────────────────────────── */}
      <section style={{ padding: "64px 0 96px", background: "var(--color-cream-50)" }}>
        <div className="sb-container" style={{ padding: "0 56px" }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 0", color: "var(--color-ink-300)" }}>
              <p style={{ fontSize: 18 }}>No projects in this category yet — check back soon.</p>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 24,
              }}
            >
              {filtered.map((project) => {
                const badge = TYPE_BADGE_COLORS[project.type] ?? TYPE_BADGE_COLORS["details"];
                return (
                  <div
                    key={`${project.title}-${project.city}`}
                    style={{
                      background: "#fff",
                      borderRadius: 14,
                      overflow: "hidden",
                      border: "1px solid rgba(20,17,13,0.08)",
                      boxShadow: "var(--shadow-sm)",
                      display: "flex",
                      flexDirection: "column",
                      transition: "box-shadow 0.15s, transform 0.15s",
                    }}
                  >
                    <div
                      className="sb-photo"
                      style={{ height: 240, borderRadius: 0, position: "relative" }}
                    >
                      <span className="sb-photo-label">{project.photo}</span>
                      <span
                        style={{
                          position: "absolute",
                          top: 12,
                          left: 12,
                          padding: "5px 10px",
                          borderRadius: 999,
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          background: badge.bg,
                          color: badge.color,
                          backdropFilter: "blur(4px)",
                        }}
                      >
                        {project.typeLabel}
                      </span>
                    </div>
                    <div
                      style={{
                        padding: "20px 22px 22px",
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <div
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: "0.12em",
                          color: "var(--color-stone-500)",
                          textTransform: "uppercase",
                          marginBottom: 8,
                        }}
                      >
                        {project.city}, CA
                      </div>
                      <h3
                        style={{
                          fontSize: 20,
                          color: "var(--color-navy-900)",
                          lineHeight: 1.15,
                        }}
                      >
                        {project.title}
                      </h3>
                      <p
                        style={{
                          marginTop: 8,
                          fontSize: 13,
                          color: "var(--color-ink-500)",
                          lineHeight: 1.55,
                          flex: 1,
                        }}
                      >
                        {project.scope}
                      </p>
                      <div style={{ marginTop: 18 }}>
                        <span
                          style={{
                            fontSize: 13,
                            color: "var(--color-navy-800)",
                            fontWeight: 600,
                            borderBottom: "1px solid var(--color-gold-500)",
                            paddingBottom: 1,
                            cursor: "default",
                          }}
                        >
                          View More →
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ── BEFORE / AFTER ────────────────────────────────────────────── */}
      <section style={{ padding: "96px 0", background: "var(--color-cream-100)" }}>
        <div className="sb-container" style={{ padding: "0 56px" }}>
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 56px" }}>
            <span className="sb-eyebrow">Before & After</span>
            <h2
              style={{
                fontSize: "clamp(32px, 3.5vw, 48px)",
                marginTop: 16,
                lineHeight: 1.05,
              }}
            >
              See the transformation
            </h2>
            <p
              style={{
                marginTop: 16,
                color: "var(--color-ink-500)",
                fontSize: 16,
                lineHeight: 1.6,
              }}
            >
              Same space, completely different outcome. These before-and-afters show what a clear scope, proper waterproofing, and careful finish work can do.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
            {BEFORE_AFTER_PAIRS.map((pair) => (
              <div key={pair.type}>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {/* Before */}
                  <div style={{ position: "relative" }}>
                    <div className="sb-photo" style={{ height: 220, borderRadius: "10px 10px 0 0" }}>
                      <span className="sb-photo-label">{pair.before}</span>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        top: 12,
                        left: 12,
                        padding: "5px 12px",
                        background: "rgba(20,17,13,0.75)",
                        color: "#fff",
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        borderRadius: 4,
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      Before
                    </div>
                  </div>

                  {/* Divider */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "0 4px",
                    }}
                  >
                    <span style={{ flex: 1, height: 1, background: "rgba(20,17,13,0.12)" }} />
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "var(--color-gold-600)",
                      }}
                    >
                      ↓ Stonebrite
                    </span>
                    <span style={{ flex: 1, height: 1, background: "rgba(20,17,13,0.12)" }} />
                  </div>

                  {/* After */}
                  <div style={{ position: "relative" }}>
                    <div className="sb-photo" style={{ height: 220, borderRadius: "0 0 10px 10px" }}>
                      <span className="sb-photo-label">{pair.after}</span>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        top: 12,
                        left: 12,
                        padding: "5px 12px",
                        background: "rgba(11,31,51,0.88)",
                        color: "var(--color-gold-300)",
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        borderRadius: 4,
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      After
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: 14,
                    textAlign: "center",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--color-ink-500)",
                  }}
                >
                  {pair.type}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ──────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--color-navy-900)",
          padding: "80px 0",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(229,181,58,0.12), transparent 60%)",
          }}
        />
        <div className="sb-container" style={{ padding: "0 56px", position: "relative" }}>
          <span className="sb-eyebrow" style={{ color: "var(--color-gold-300)" }}>
            Next Step
          </span>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              marginTop: 16,
              color: "var(--color-cream-50)",
              lineHeight: 1.05,
            }}
          >
            Ready to plan your remodel?
          </h2>
          <p
            style={{
              marginTop: 18,
              color: "var(--color-stone-300)",
              fontSize: 17,
              maxWidth: 520,
              margin: "18px auto 0",
              lineHeight: 1.65,
            }}
          >
            Tell us about your space and goals. We'll schedule an in-home estimate and help you understand your options — no pressure, no sales pitch.
          </p>
          <div
            style={{
              marginTop: 36,
              display: "flex",
              justifyContent: "center",
              gap: 14,
              flexWrap: "wrap",
            }}
          >
            <Link href="/contact" className="sb-btn sb-btn-primary sb-btn-lg">
              Get My Free Estimate <ArrowIcon />
            </Link>
            <Link href="/bathrooms" className="sb-btn sb-btn-ghost-cream sb-btn-lg">
              See Our Services
            </Link>
          </div>
          <div
            style={{
              marginTop: 36,
              display: "flex",
              justifyContent: "center",
              gap: 32,
              flexWrap: "wrap",
            }}
          >
            {[
              { stars: "★★★★★", text: "4.9 · Google Reviews" },
              { stars: "★★★★★", text: "5.0 · Thumbtack" },
            ].map((r) => (
              <div
                key={r.text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 20px",
                  background: "rgba(255,255,255,0.06)",
                  borderRadius: 8,
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <span style={{ color: "var(--color-gold-500)" }}>{r.stars}</span>
                <span style={{ fontSize: 13, color: "var(--color-cream-200)" }}>{r.text}</span>
              </div>
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
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
