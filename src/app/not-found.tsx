import Link from "next/link";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Nav />
      <section
        style={{
          background: "var(--color-cream-50)",
          padding: "120px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 90% 0%, rgba(229,181,58,0.08), transparent 40%)",
          }}
        />
        <div
          className="sb-container-narrow"
          style={{ position: "relative", textAlign: "center" }}
        >
          <span className="sb-eyebrow">Error 404</span>
          <h1
            style={{
              fontSize: "clamp(44px, 6vw, 84px)",
              marginTop: 16,
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              color: "var(--color-navy-900)",
            }}
          >
            This page took a wrong turn.
          </h1>
          <p
            style={{
              marginTop: 20,
              fontSize: 18,
              color: "var(--color-ink-500)",
              lineHeight: 1.65,
              maxWidth: 520,
              margin: "20px auto 0",
            }}
          >
            We couldn&apos;t find the page you were looking for. It may have moved,
            or the link may be out of date. Let&apos;s get you back on track.
          </p>
          <div
            style={{
              marginTop: 36,
              display: "flex",
              gap: 14,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/" className="sb-btn sb-btn-primary sb-btn-lg">
              Back to Home <ArrowIcon />
            </Link>
            <Link href="/contact" className="sb-btn sb-btn-ghost sb-btn-lg">
              Get My Free Estimate
            </Link>
          </div>

          {/* Helpful links */}
          <div
            style={{
              marginTop: 56,
              paddingTop: 36,
              borderTop: "1px solid rgba(20,17,13,0.08)",
            }}
          >
            <p
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--color-ink-500)",
                marginBottom: 18,
              }}
            >
              Popular Pages
            </p>
            <div
              style={{
                display: "flex",
                gap: 24,
                justifyContent: "center",
                flexWrap: "wrap",
                fontSize: 15,
              }}
            >
              {[
                { href: "/bathrooms", label: "Bathrooms" },
                { href: "/tub-to-shower", label: "Tub-to-Shower" },
                { href: "/kitchens", label: "Kitchens" },
                { href: "/gallery", label: "Gallery" },
                { href: "/blog", label: "Learning Center" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    color: "var(--color-navy-800)",
                    fontWeight: 600,
                    borderBottom: "1px solid var(--color-gold-500)",
                    paddingBottom: 2,
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
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
