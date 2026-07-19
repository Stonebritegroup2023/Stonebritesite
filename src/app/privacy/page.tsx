import type { Metadata } from "next";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Stonebrite Construction Group",
  description:
    "How Stonebrite Construction Group collects, uses, and protects the information you share with us through our website and estimate requests.",
};

export default function PrivacyPage() {
  return (
    <>
      <Nav activeHref="/privacy" />

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
            Privacy Policy
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
            Your privacy matters to us. This policy explains what information we
            collect and how we use it.
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

          <Section title="Introduction">
            <P>
              Stonebrite Construction Group (&ldquo;Stonebrite,&rdquo;
              &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is a
              family-owned residential remodeling company serving homeowners
              throughout Greater Sacramento and the East Bay. We respect your
              privacy and are committed to protecting the personal information
              you share with us.
            </P>
            <P>
              This Privacy Policy describes how we collect, use, and safeguard
              information when you visit our website, request an estimate, or
              otherwise communicate with us. By using our website, you agree to
              the practices described in this policy.
            </P>
          </Section>

          <Section title="Information We Collect">
            <P>
              <strong>Information you provide.</strong> When you fill out an
              estimate request or contact form, or otherwise reach out to us, we
              may collect:
            </P>
            <UL
              items={[
                "Your name",
                "Your email address",
                "Your phone number",
                "Details about your project, such as the type of remodel, location, timeline, and budget",
                "Optional photos of your space that you choose to upload",
                "Any other information you include in your message",
              ]}
            />
            <P>
              <strong>Information collected automatically.</strong> When you
              visit our website, certain information is collected automatically
              through standard web technologies, including:
            </P>
            <UL
              items={[
                "Basic website analytics, such as the pages you view and how you arrived at our site",
                "Cookies and similar technologies",
                "Your IP address",
                "Device and browser information, such as browser type and operating system",
              ]}
            />
          </Section>

          <Section title="How We Use Information">
            <P>We use the information we collect to:</P>
            <UL
              items={[
                "Respond to your inquiries and messages",
                "Schedule and conduct estimate visits",
                "Prepare and provide proposals for your project",
                "Operate, maintain, and improve our website",
                "Send occasional updates or promotional messages, but only if you have opted in to receive them",
              ]}
            />
          </Section>

          <Section title="How We Share Information">
            <P>
              We do not sell your personal information. We may share information
              in the following limited circumstances:
            </P>
            <UL
              items={[
                "With service providers who help us operate our business — for example, website hosting, email delivery, appointment scheduling, and customer relationship management (CRM) tools — and who are permitted to use your information only to perform services on our behalf",
                "When required to comply with applicable law, legal process, or a valid government request, or to protect our rights, safety, or property",
              ]}
            />
          </Section>

          <Section title="Cookies and Analytics">
            <P>
              Cookies are small text files stored on your device that help
              websites function and help us understand how visitors use our
              site. We use cookies and similar analytics tools to remember
              preferences, measure site performance, and improve your
              experience.
            </P>
            <P>
              You can control or disable cookies through your browser settings.
              Most browsers let you refuse cookies or alert you when cookies are
              being sent. Please note that disabling cookies may affect how
              certain parts of our website function.
            </P>
          </Section>

          <Section title="Data Retention and Security">
            <P>
              We retain personal information for as long as needed to fulfill the
              purposes described in this policy, to provide the services you
              request, and to comply with our legal obligations. We take
              reasonable administrative, technical, and physical measures to
              protect your information against loss, misuse, and unauthorized
              access.
            </P>
            <P>
              However, no method of transmission over the internet or method of
              electronic storage is completely secure, and we cannot guarantee
              absolute security.
            </P>
          </Section>

          <Section title="Your Choices">
            <P>You have choices about how your information is used:</P>
            <UL
              items={[
                "You can opt out of marketing emails at any time by using the unsubscribe link in those emails or by contacting us directly.",
                "You may request access to, correction of, or deletion of the personal information we hold about you by contacting us using the details below.",
              ]}
            />
          </Section>

          <Section title="Children's Privacy">
            <P>
              Our website is intended for a general audience and is not directed
              to children under the age of 13. We do not knowingly collect
              personal information from children under 13. If you believe a child
              has provided us with personal information, please contact us and we
              will take appropriate steps to delete it.
            </P>
          </Section>

          <Section title="Changes to This Policy">
            <P>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or for legal, operational, or regulatory
              reasons. When we do, we will revise the &ldquo;Last updated&rdquo;
              date at the top of this page. We encourage you to review this
              policy periodically.
            </P>
          </Section>

          <Section title="Contact Us">
            <P>
              If you have questions about this Privacy Policy or how we handle
              your information, please contact us:
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
