import type { Metadata } from "next";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Accessibility Statement | Stonebrite Construction Group",
  description:
    "Stonebrite Construction Group is committed to making its website accessible to everyone. Learn about our efforts and how to request help.",
};

export default function AccessibilityPage() {
  return (
    <>
      <Nav activeHref="/accessibility" />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--color-cream-50)",
          padding: "96px 0 72px",
          borderBottom: "1px solid rgba(20,17,13,0.08)",
        }}
      >
        <div className="sb-container-narrow" style={{ textAlign: "center" }}>
          <span className="sb-eyebrow">Legal</span>
          <h1
            style={{
              fontSize: "clamp(36px, 4.5vw, 60px)",
              marginTop: 18,
              lineHeight: 1.04,
              letterSpacing: "-0.015em",
            }}
          >
            Accessibility Statement
          </h1>
          <p
            style={{
              marginTop: 22,
              fontSize: 18,
              color: "var(--color-ink-500)",
              maxWidth: 600,
              margin: "22px auto 0",
              lineHeight: 1.7,
            }}
          >
            We want everyone to be able to use our website with ease.
          </p>
        </div>
      </section>

      {/* ── BODY ─────────────────────────────────────────────────────── */}
      <section style={{ background: "#fff", padding: "72px 0 96px" }}>
        <div className="sb-container-narrow">
          <p
            style={{
              fontStyle: "italic",
              color: "var(--color-ink-500)",
              fontSize: 15,
              lineHeight: 1.7,
              marginBottom: 12,
            }}
          >
            This is a general template provided for convenience. Please have it
            reviewed by your attorney before relying on it.
          </p>
          <p
            style={{
              fontSize: 14,
              color: "var(--color-ink-300)",
              fontWeight: 600,
              letterSpacing: "0.04em",
              marginBottom: 48,
            }}
          >
            Last updated: June 2026
          </p>

          <Section title="Our Commitment to Accessibility">
            <P>
              Stonebrite Construction Group (&ldquo;Stonebrite,&rdquo;
              &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is
              committed to ensuring that our website is accessible to as many
              people as possible, including those who use assistive technologies.
              We believe everyone should be able to learn about our remodeling
              services and reach out to us without barriers.
            </P>
          </Section>

          <Section title="Standards We Aim For">
            <P>
              We strive to conform to the Web Content Accessibility Guidelines
              (WCAG) 2.1 Level AA as a goal. These internationally recognized
              guidelines help make web content more accessible to people with a
              wide range of disabilities, including visual, auditory, motor, and
              cognitive disabilities.
            </P>
          </Section>

          <Section title="Measures We Take">
            <P>
              We work to incorporate accessibility into the design and
              development of our website. Measures we take include:
            </P>
            <UL
              items={[
                "Using semantic HTML to give content clear structure and meaning",
                "Maintaining sufficient color contrast between text and background",
                "Supporting keyboard navigation so the site can be used without a mouse",
                "Building a responsive design that adapts to different screen sizes and devices",
                "Providing descriptive alternative text for meaningful images",
              ]}
            />
          </Section>

          <Section title="An Ongoing Effort">
            <P>
              Accessibility is a continuous process rather than a one-time task.
              We regularly review our website and work to improve the experience
              for all visitors. We welcome your feedback, as it helps us identify
              areas where we can do better.
            </P>
          </Section>

          <Section title="Known Limitations">
            <P>
              Despite our efforts, some areas of our website may not yet fully
              conform to our accessibility goals. In particular, certain
              third-party content, embedded tools, or external links may not be
              fully accessible and are outside of our direct control. We are
              committed to addressing issues within our control as we become
              aware of them.
            </P>
          </Section>

          <Section title="How to Request Help or Report a Problem">
            <P>
              If you encounter any difficulty using our website, or if you need
              information in an alternative format, please let us know. Contact
              us using the details below and we will do our best to assist you.
              We aim to respond to accessibility requests within a few business
              days.
            </P>
          </Section>

          <Section title="Contact Us">
            <P>
              To request help or report an accessibility concern, please contact
              us:
            </P>
            <P>
              Email:{" "}
              <a href="mailto:info@stonebritecg.com" style={LINK_STYLE}>
                info@stonebritecg.com
              </a>
              <br />
              Phone:{" "}
              <a href="tel:+19163476549" style={LINK_STYLE}>
                (916) 347-6549
              </a>
            </P>
          </Section>
        </div>
      </section>

      <Footer />
    </>
  );
}

/* ── Shared prose helpers ───────────────────────────────────────────── */

const LINK_STYLE: React.CSSProperties = {
  color: "var(--color-gold-600)",
  fontWeight: 600,
  textDecoration: "underline",
  textUnderlineOffset: "2px",
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginBottom: 44 }}>
      <h2
        style={{
          fontSize: "clamp(24px, 3vw, 28px)",
          color: "var(--color-navy-900)",
          marginBottom: 16,
          lineHeight: 1.15,
        }}
      >
        {title}
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        {children}
      </div>
    </div>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: 16, color: "var(--color-ink-700)", lineHeight: 1.7 }}>
      {children}
    </p>
  );
}

function UL({ items }: { items: string[] }) {
  return (
    <ul
      style={{
        margin: 0,
        paddingLeft: 22,
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      {items.map((item, i) => (
        <li
          key={i}
          style={{
            fontSize: 16,
            color: "var(--color-ink-700)",
            lineHeight: 1.7,
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
