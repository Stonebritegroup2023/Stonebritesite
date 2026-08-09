import Link from "next/link";

/**
 * Full-bleed photo CTA band — real project photo behind a dark navy scrim,
 * one headline, one button, one reassurance line.
 */
export default function FinalCTA() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundImage: "url(/photos/primary-bathroom-remodel-freestanding-tub-sacramento.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center 55%",
      }}
    >
      {/* Navy scrim so the type always reads */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(rgba(11,31,51,0.82), rgba(11,31,51,0.86))",
        }}
      />
      <div
        className="sb-container"
        style={{
          position: "relative",
          padding: "110px 56px 104px",
          textAlign: "center",
          color: "var(--color-cream-50)",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(34px, 5vw, 58px)",
            color: "var(--color-cream-50)",
            lineHeight: 1.06,
            maxWidth: 760,
            margin: "0 auto",
          }}
        >
          Stonebrite does bathrooms right.
        </h2>
        <p
          style={{
            marginTop: 18,
            fontSize: "clamp(17px, 2.2vw, 22px)",
            color: "var(--color-cream-200)",
            lineHeight: 1.5,
            maxWidth: 620,
            margin: "18px auto 0",
          }}
        >
          The last remodeling company you&apos;ll ever need to find.
        </p>
        <div style={{ marginTop: 36 }}>
          <Link href="/contact" className="sb-btn sb-btn-primary sb-btn-lg">
            Get My Free Estimate <ArrowIcon />
          </Link>
        </div>
        <p
          style={{
            marginTop: 18,
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: "0.04em",
            color: "var(--color-stone-300)",
          }}
        >
          No pressure · No sales script · No obligation
        </p>
        <p style={{ marginTop: 26, fontSize: 13, color: "var(--color-stone-300)" }}>
          Or call{" "}
          <a href="tel:5307716025" style={{ color: "var(--color-gold-300)", fontWeight: 700 }}>
            (530) 771-6025
          </a>{" "}
          · Typically reply within ~1 hour during business hours
        </p>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>;
}
