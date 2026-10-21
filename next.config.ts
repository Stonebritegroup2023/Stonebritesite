import type { NextConfig } from "next";

/**
 * Content Security Policy.
 *
 * Third parties the site actually loads:
 * - Google tag (gtag.js) + Google Ads conversion tracking
 * - Vercel Analytics (served same-origin under /_vercel/) and the Vercel
 *   preview toolbar (vercel.live, preview deployments only)
 * - Supabase (only once NEXT_PUBLIC_SUPABASE_URL is set)
 * - images.unsplash.com for a few atmosphere photos
 *
 * `'unsafe-inline'` for scripts is needed because the Google tag snippet and
 * the JSON-LD blocks are inline and pages are statically rendered (no
 * per-request nonce). The host allow-list still blocks injected scripts from
 * anywhere else. Styles are inline throughout the codebase.
 */
const GOOGLE_HOSTS = [
  "https://*.googletagmanager.com",
  "https://*.google-analytics.com",
  "https://*.analytics.google.com",
  "https://*.googleadservices.com",
  "https://*.googlesyndication.com",
  "https://*.doubleclick.net",
  "https://*.google.com",
].join(" ");

const CSP = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' ${GOOGLE_HOSTS} https://va.vercel-scripts.com https://vercel.live`,
  "style-src 'self' 'unsafe-inline'",
  `img-src 'self' data: blob: https://images.unsplash.com ${GOOGLE_HOSTS}`,
  "font-src 'self' data:",
  `connect-src 'self' ${GOOGLE_HOSTS} https://vitals.vercel-insights.com https://vercel.live wss://*.pusher.com https://*.supabase.co wss://*.supabase.co`,
  `frame-src ${GOOGLE_HOSTS} https://vercel.live`,
  "worker-src 'self' blob:",
  "manifest-src 'self'",
  "media-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

const SECURITY_HEADERS = [
  { key: "Content-Security-Policy", value: CSP },
  // Browsers remember to use HTTPS for two years. No `preload` until www resolves.
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
];

const nextConfig: NextConfig = {
  // Don't advertise the framework version to scanners.
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: SECURITY_HEADERS,
      },
    ];
  },
  async redirects() {
    return [
      {
        // The Gallery page was replaced by the homepage "Featured Projects" section.
        source: "/gallery",
        destination: "/#featured-projects",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
