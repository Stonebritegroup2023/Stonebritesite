"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import TrustStrip from "@/components/sections/TrustStrip";

const SERVICE_TYPES = [
  "Bathroom Remodel",
  "Tub-to-Shower",
  "Kitchen Remodel",
  "Aging-in-Place",
  "Other",
];

const CITIES = [
  "Roseville", "Folsom", "Granite Bay", "Rocklin", "Lincoln",
  "Sacramento", "El Dorado Hills", "Citrus Heights", "Elk Grove",
  "Concord", "Walnut Creek", "Pleasanton",
];

const NEXT_STEPS = [
  {
    num: "1",
    title: "We review your request",
    desc: "We read your project details carefully before reaching out.",
  },
  {
    num: "2",
    title: "We'll reach out",
    desc: "Usually within ~1 hour during business hours to discuss your project.",
  },
  {
    num: "3",
    title: "In-home estimate visit",
    desc: "We walk through your space, understand your goals, and take measurements.",
  },
  {
    num: "4",
    title: "Written proposal",
    desc: "A detailed written scope and estimate — usually delivered within a few days.",
  },
];

export default function ContactClient() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    zip: "",
    description: "",
    timeline: "",
    budget: "",
    contactTime: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Nav activeHref="/contact" />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section style={{ background: "var(--color-cream-50)", padding: "72px 0 56px", borderBottom: "1px solid rgba(20,17,13,0.08)" }}>
        <div className="sb-container" style={{ textAlign: "center" }}>
          <span className="sb-eyebrow">Free Estimate</span>
          <h1 style={{ fontSize: "clamp(36px, 4.5vw, 60px)", marginTop: 18, lineHeight: 1.04, letterSpacing: "-0.015em" }}>
            Get Your Free Estimate
          </h1>
          <p style={{ marginTop: 18, fontSize: 17, color: "var(--color-ink-500)", maxWidth: 540, margin: "18px auto 0", lineHeight: 1.7 }}>
            Tell us about your project. We'll review your details, reach out to discuss the next step, and schedule a free in-home estimate at a time that works for you.
          </p>
        </div>
      </section>

      <TrustStrip />

      {/* ── MAIN CONTENT ─────────────────────────────────────────────── */}
      <section style={{ background: "var(--color-cream-50)", padding: "64px 0 96px" }}>
        <div className="sb-container">
          <div className="contact-layout" style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 40, alignItems: "start" }}>

            {/* ── FORM CARD ────────────────────────────────────────── */}
            <div style={{
              background: "#fff",
              borderRadius: 16,
              padding: "40px",
              boxShadow: "var(--shadow-lg)",
              border: "1px solid rgba(20,17,13,0.06)",
            }}>
              {submitted ? (
                /* Thank-you state */
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{
                    width: 64, height: 64, borderRadius: "50%",
                    background: "linear-gradient(135deg, #2E7D5B, #3a9e73)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 24px",
                  }}>
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 13 9 18 20 6" /></svg>
                  </div>
                  <h2 style={{ fontSize: 28, color: "var(--color-navy-900)", marginBottom: 14 }}>
                    Request Received
                  </h2>
                  <p style={{ fontSize: 16, color: "var(--color-ink-500)", lineHeight: 1.7, maxWidth: 420, margin: "0 auto" }}>
                    Thanks — we received your request. We'll review your project details and reach out to discuss the next step. Usually within ~1 hour during business hours.
                  </p>
                  <div style={{ marginTop: 32 }}>
                    <Link href="/" className="sb-btn sb-btn-ghost">
                      Back to Home
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h2 style={{ fontSize: 26, color: "var(--color-navy-900)", marginBottom: 6 }}>
                    Tell us about your remodel
                  </h2>
                  <p style={{ fontSize: 14, color: "var(--color-ink-400)", marginBottom: 32, lineHeight: 1.6 }}>
                    Fill out the form below and we'll follow up within ~1 hour during business hours.
                  </p>

                  {/* Service Type */}
                  <div style={{ marginBottom: 28 }}>
                    <label className="sb-label">Service Type</label>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 8 }}>
                      {SERVICE_TYPES.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setSelectedService(s === selectedService ? null : s)}
                          style={{
                            padding: "9px 18px",
                            borderRadius: 999,
                            fontSize: 13,
                            fontWeight: 600,
                            cursor: "pointer",
                            transition: "all 0.15s",
                            background: selectedService === s ? "var(--color-navy-900)" : "transparent",
                            color: selectedService === s ? "var(--color-cream-50)" : "var(--color-ink-700)",
                            border: selectedService === s ? "1px solid var(--color-navy-900)" : "1px solid rgba(20,17,13,0.18)",
                          }}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name + Phone */}
                  <div className="contact-fields" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                    <div>
                      <label className="sb-label" htmlFor="name">Full Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="sb-input"
                        placeholder="Jane Smith"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="sb-label" htmlFor="phone">Phone *</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="sb-input"
                        placeholder="(916) 555-0100"
                        value={form.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Email + City/ZIP */}
                  <div className="contact-fields" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                    <div>
                      <label className="sb-label" htmlFor="email">Email *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="sb-input"
                        placeholder="jane@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 10 }}>
                      <div>
                        <label className="sb-label" htmlFor="city">City</label>
                        <input
                          id="city"
                          name="city"
                          type="text"
                          className="sb-input"
                          placeholder="Roseville"
                          value={form.city}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label className="sb-label" htmlFor="zip">ZIP</label>
                        <input
                          id="zip"
                          name="zip"
                          type="text"
                          className="sb-input"
                          placeholder="95661"
                          value={form.zip}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div style={{ marginBottom: 16 }}>
                    <label className="sb-label" htmlFor="description">Project Description *</label>
                    <textarea
                      id="description"
                      name="description"
                      className="sb-input"
                      rows={4}
                      placeholder="Tell us what you're planning — which bathroom, rough scope, anything you'd like changed, and any specific concerns or must-haves."
                      value={form.description}
                      onChange={handleChange}
                      required
                      style={{ resize: "vertical" }}
                    />
                  </div>

                  {/* Timeline + Budget + Contact Time */}
                  <div className="contact-fields3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginBottom: 24 }}>
                    <div>
                      <label className="sb-label" htmlFor="timeline">Desired Timeline</label>
                      <select
                        id="timeline"
                        name="timeline"
                        className="sb-input"
                        value={form.timeline}
                        onChange={handleChange}
                      >
                        <option value="">Select...</option>
                        <option value="asap">ASAP</option>
                        <option value="1-3mo">1–3 months</option>
                        <option value="3-6mo">3–6 months</option>
                        <option value="6mo+">6+ months</option>
                      </select>
                    </div>
                    <div>
                      <label className="sb-label" htmlFor="budget">Budget Range <span style={{ fontWeight: 400, textTransform: "none", letterSpacing: 0 }}>(optional)</span></label>
                      <select
                        id="budget"
                        name="budget"
                        className="sb-input"
                        value={form.budget}
                        onChange={handleChange}
                      >
                        <option value="">Not sure</option>
                        <option value="under-20k">Under $20k</option>
                        <option value="20-30k">$20–30k</option>
                        <option value="30-60k">$30–60k</option>
                        <option value="60-100k">$60–100k</option>
                        <option value="100k+">$100k+</option>
                      </select>
                    </div>
                    <div>
                      <label className="sb-label" htmlFor="contactTime">Best Time to Contact</label>
                      <select
                        id="contactTime"
                        name="contactTime"
                        className="sb-input"
                        value={form.contactTime}
                        onChange={handleChange}
                      >
                        <option value="">Anytime</option>
                        <option value="morning">Morning</option>
                        <option value="midday">Midday</option>
                        <option value="evening">Evening</option>
                        <option value="anytime">Anytime</option>
                      </select>
                    </div>
                  </div>

                  {/* Photo Upload */}
                  <div style={{ marginBottom: 28 }}>
                    <label className="sb-label">Project Photos <span style={{ fontWeight: 400, textTransform: "none", letterSpacing: 0 }}>(optional)</span></label>
                    <div style={{
                      border: "1.5px dashed rgba(20,17,13,0.22)",
                      borderRadius: 10,
                      padding: "28px",
                      textAlign: "center",
                      cursor: "pointer",
                      transition: "border-color 0.15s, background 0.15s",
                      background: "var(--color-cream-50)",
                    }}
                      onClick={() => {}}
                    >
                      <div style={{ marginBottom: 8 }}>
                        <UploadIcon />
                      </div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "var(--color-ink-700)", marginBottom: 4 }}>
                        Click to browse photos
                      </div>
                      <div style={{ fontSize: 12, color: "var(--color-ink-300)" }}>
                        JPG, PNG up to 10MB · Helps us understand your space
                      </div>
                    </div>
                  </div>

                  {/* Privacy + Submit */}
                  <p style={{ fontSize: 12, color: "var(--color-ink-300)", lineHeight: 1.65, marginBottom: 18 }}>
                    Your information is used only to respond to your estimate request. We never sell or share your data. By submitting, you agree to be contacted by Stonebrite Construction Group regarding your project.
                  </p>
                  <button
                    type="submit"
                    className="sb-btn sb-btn-primary sb-btn-lg"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    Send Estimate Request <ArrowIcon />
                  </button>
                </form>
              )}
            </div>

            {/* ── RIGHT SIDEBAR ─────────────────────────────────────── */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

              {/* What happens next */}
              <div style={{
                background: "#fff",
                borderRadius: 14,
                padding: "28px",
                border: "1px solid rgba(20,17,13,0.08)",
                boxShadow: "var(--shadow-sm)",
              }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-ink-500)", marginBottom: 20 }}>
                  What Happens Next
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                  {NEXT_STEPS.map((step, i) => (
                    <div key={step.num} style={{ display: "flex", gap: 16, paddingBottom: i < NEXT_STEPS.length - 1 ? 20 : 0, position: "relative" }}>
                      {i < NEXT_STEPS.length - 1 && (
                        <div style={{
                          position: "absolute",
                          left: 16,
                          top: 34,
                          bottom: 0,
                          width: 1,
                          background: "rgba(20,17,13,0.10)",
                        }} />
                      )}
                      <div style={{
                        width: 34, height: 34, borderRadius: "50%", flexShrink: 0,
                        background: "var(--color-navy-900)",
                        color: "var(--color-gold-300)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 13, fontWeight: 700,
                        zIndex: 1,
                      }}>
                        {step.num}
                      </div>
                      <div style={{ paddingTop: 4 }}>
                        <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-navy-900)", marginBottom: 4 }}>
                          {step.title}
                        </div>
                        <p style={{ fontSize: 13, color: "var(--color-ink-500)", lineHeight: 1.6, margin: 0 }}>
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact info */}
              <div style={{
                background: "var(--color-navy-900)",
                borderRadius: 14,
                padding: "28px",
                color: "var(--color-cream-50)",
              }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-gold-300)", marginBottom: 20 }}>
                  Prefer to Call?
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <a
                    href="tel:9165550188"
                    style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--color-cream-50)", textDecoration: "none", fontSize: 18, fontWeight: 700 }}
                  >
                    <span style={{ color: "var(--color-gold-400)" }}><PhoneIcon /></span>
                    (916) 555-0188
                  </a>
                  <a
                    href="mailto:hello@stonebritecg.com"
                    style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--color-stone-300)", textDecoration: "none", fontSize: 14 }}
                  >
                    <MailIcon /> hello@stonebritecg.com
                  </a>
                </div>
                <div style={{
                  marginTop: 18,
                  padding: "10px 14px",
                  background: "rgba(46,125,91,0.2)",
                  borderRadius: 8,
                  border: "1px solid rgba(46,125,91,0.35)",
                  display: "flex", alignItems: "center", gap: 8,
                  fontSize: 12, color: "var(--color-cream-200)",
                }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#2E7D5B", flexShrink: 0 }} />
                  Typically reply within ~1 hour during business hours
                </div>
              </div>

              {/* Service area */}
              <div style={{
                background: "#fff",
                borderRadius: 14,
                padding: "28px",
                border: "1px solid rgba(20,17,13,0.08)",
                boxShadow: "var(--shadow-sm)",
              }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-ink-500)", marginBottom: 16 }}>
                  Service Area
                </div>
                <p style={{ fontSize: 13, color: "var(--color-ink-500)", lineHeight: 1.65, marginBottom: 16 }}>
                  We serve Greater Sacramento and select Bay Area projects.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {CITIES.map((city) => (
                    <span
                      key={city}
                      style={{
                        padding: "4px 10px",
                        background: "var(--color-cream-100)",
                        borderRadius: 999,
                        fontSize: 12,
                        fontWeight: 600,
                        color: "var(--color-ink-700)",
                        border: "1px solid rgba(20,17,13,0.10)",
                      }}
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}
function PhoneIcon() {
  return <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></svg>;
}
function MailIcon() {
  return <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>;
}
function UploadIcon() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--color-stone-500)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  );
}
