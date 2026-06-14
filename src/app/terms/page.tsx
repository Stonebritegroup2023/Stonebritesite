import type { Metadata } from "next";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Stonebrite Construction Group",
  description:
    "The terms and conditions that govern your use of the Stonebrite Construction Group website and its content.",
};

export default function TermsPage() {
  return (
    <>
      <Nav activeHref="/terms" />

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
            Terms of Service
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
            Please read these terms carefully before using our website.
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

          <Section title="Acceptance of Terms">
            <P>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access to
              and use of the website of Stonebrite Construction Group
              (&ldquo;Stonebrite,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;). By accessing or using this website, you agree
              to be bound by these Terms. If you do not agree, please do not use
              the website.
            </P>
          </Section>

          <Section title="Use of the Website">
            <P>
              You may use this website for lawful, personal, and informational
              purposes only. You agree not to misuse the website, including by:
            </P>
            <UL
              items={[
                "Attempting to gain unauthorized access to any portion of the website or its systems",
                "Interfering with or disrupting the website's operation or security",
                "Using the website for any unlawful, fraudulent, or harmful purpose",
                "Copying, scraping, or redistributing website content without our permission",
              ]}
            />
          </Section>

          <Section title="Estimates and Proposals">
            <P>
              Any estimates, proposals, pricing, or project information presented
              on this website or provided during an initial consultation are for
              informational purposes only and are not binding contracts. They do
              not constitute an offer that can be accepted to form a binding
              agreement.
            </P>
            <P>
              Any remodeling project is governed exclusively by a separate
              written agreement signed by both you and Stonebrite. Pricing,
              scope, materials, and availability are subject to change and are
              confirmed only in that signed agreement. Content on this website is
              provided for general information and may not reflect current
              offerings.
            </P>
          </Section>

          <Section title="Intellectual Property">
            <P>
              All content on this website — including text, graphics, logos,
              photographs, designs, and layout — is owned by or licensed to
              Stonebrite and is protected by copyright, trademark, and other
              applicable laws. You may not reproduce, distribute, modify, or
              create derivative works from any part of this website without our
              prior written consent.
            </P>
          </Section>

          <Section title="Third-Party Links">
            <P>
              Our website may contain links to third-party websites or resources
              that we do not own or control. We provide these links for your
              convenience only. We are not responsible for the content,
              accuracy, or practices of any third-party site, and inclusion of a
              link does not imply endorsement. Accessing third-party sites is at
              your own risk.
            </P>
          </Section>

          <Section title="Disclaimers">
            <P>
              This website and its content are provided on an &ldquo;as
              is&rdquo; and &ldquo;as available&rdquo; basis, without warranties
              of any kind, whether express or implied, including but not limited
              to warranties of merchantability, fitness for a particular
              purpose, and non-infringement. We do not warrant that the website
              will be uninterrupted, error-free, or free of harmful components.
            </P>
          </Section>

          <Section title="Limitation of Liability">
            <P>
              To the fullest extent permitted by law, Stonebrite and its owners,
              employees, and affiliates will not be liable for any indirect,
              incidental, special, consequential, or punitive damages, or for
              any loss of data, profits, or goodwill, arising out of or related
              to your use of, or inability to use, this website, even if we have
              been advised of the possibility of such damages.
            </P>
          </Section>

          <Section title="Warranty Note">
            <P>
              Stonebrite&rsquo;s 5-year workmanship warranty applies only to
              completed remodeling projects and is governed by the terms of the
              signed project agreement for that work. Nothing on this website
              creates, extends, or modifies any warranty. The warranty does not
              apply to the website itself or to any information presented here.
            </P>
          </Section>

          <Section title="Governing Law">
            <P>
              These Terms are governed by and construed in accordance with the
              laws of the State of California, without regard to its conflict of
              laws principles. Any dispute arising from these Terms or your use
              of the website will be subject to the exclusive jurisdiction of
              the state and federal courts located in California.
            </P>
          </Section>

          <Section title="Changes to These Terms">
            <P>
              We may update these Terms from time to time. When we do, we will
              revise the &ldquo;Last updated&rdquo; date at the top of this page.
              Your continued use of the website after any changes take effect
              constitutes your acceptance of the revised Terms.
            </P>
          </Section>

          <Section title="Contact Us">
            <P>If you have questions about these Terms, please contact us:</P>
            <P>
              Email:{" "}
              <a href="mailto:hello@stonebritecg.com" style={LINK_STYLE}>
                hello@stonebritecg.com
              </a>
              <br />
              Phone:{" "}
              <a href="tel:+19165550188" style={LINK_STYLE}>
                (916) 555-0188
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
