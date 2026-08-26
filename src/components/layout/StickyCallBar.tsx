"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

/** Mobile-only sticky tap-to-call bar, mounted site-wide in the root layout.
    Appears once the hero (each page's first <section>) has scrolled out of
    view, so it never covers the homepage estimate form while that's on screen. */
export default function StickyCallBar() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const hero = document.querySelector("section");
      setVisible(
        hero
          ? hero.getBoundingClientRect().bottom < 0
          : window.scrollY > window.innerHeight * 0.75,
      );
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  // Internal tools — no customer CTA there.
  if (
    pathname.startsWith("/admin") ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/proposal")
  ) {
    return null;
  }

  return (
    <>
      <div className="sticky-call-spacer" aria-hidden="true" />
      <a href="tel:5307716025" className={`sticky-call-bar${visible ? " is-visible" : ""}`}>
        <PhoneIcon />
        Talk to the Owner
      </a>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  );
}
