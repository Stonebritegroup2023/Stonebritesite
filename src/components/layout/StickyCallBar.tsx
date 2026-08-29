"use client";

import { usePathname } from "next/navigation";

/** Mobile-only sticky text/call bar, mounted site-wide in the root layout.
    Visible from page load. */
export default function StickyCallBar() {
  const pathname = usePathname();

  // Internal tools — no customer CTA there.
  if (
    pathname.startsWith("/admin") ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/proposal")
  ) {
    return null;
  }

  // Pre-filled text matches the page the visitor is on.
  const smsBody = pathname.startsWith("/tub-to-shower")
    ? "Hi, I'm interested in a tub-to-shower conversion"
    : pathname.startsWith("/kitchens")
      ? "Hi, I'm interested in a kitchen remodel"
      : "Hi, I'm interested in a bathroom remodel";
  // `?&body=` is the one separator both iOS and Android honor in sms: links.
  const smsHref = `sms:+15307716025?&body=${encodeURIComponent(smsBody)}`;

  return (
    <>
      <div className="sticky-call-spacer" aria-hidden="true" />
      <div className="sticky-call-bar">
        <div className="sticky-call-note">
          <span className="sticky-call-note-dot" aria-hidden="true" />
          We respond immediately — even after hours
        </div>
        <div className="sticky-call-buttons">
          <a href={smsHref} className="sticky-call-text">
            <MessageIcon />
            Text Us
          </a>
          <a href="tel:5307716025" className="sticky-call-phone">
            <PhoneIcon />
            Call
          </a>
        </div>
      </div>
    </>
  );
}

function MessageIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12a8 8 0 0 1-8 8H5l-2 2V12a8 8 0 0 1 8-8h2a8 8 0 0 1 8 8z" />
      <path d="M8 11h8M8 14h5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  );
}
