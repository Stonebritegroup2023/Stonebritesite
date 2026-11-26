import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import StickyCallBar from "@/components/layout/StickyCallBar";
import { BUSINESS_JSON_LD } from "@/lib/schema";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://stonebritecg.com";
const META_PIXEL_ID = "1140318112037629";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Stonebrite Construction Group | Bathroom & Kitchen Remodeling",
    template: "%s | Stonebrite Construction Group",
  },
  description:
    "Family-owned bathroom, tub-to-shower, and kitchen remodeling for Greater Sacramento and the Bay Area. Clear scope, thoughtful design support, 5-year workmanship warranty.",
  keywords:
    "bathroom remodeling Sacramento, tub to shower conversion, kitchen remodel, aging in place bathroom",
  // No `alternates.canonical` or `openGraph.url` here on purpose: nested
  // metadata is inherited by every page that doesn't override it, which made
  // every page claim the homepage as its canonical URL. Each page sets its
  // own via `pageMetadata()` in src/lib/seo.ts; the homepage does so in
  // src/app/page.tsx.
  openGraph: {
    type: "website",
    siteName: "Stonebrite Construction Group",
    title: "Stonebrite Construction Group | Bathroom & Kitchen Remodeling",
    description:
      "Family-owned bathroom, tub-to-shower, and kitchen remodeling for Greater Sacramento and the Bay Area.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stonebrite Construction Group | Bathroom & Kitchen Remodeling",
    description:
      "Family-owned bathroom, tub-to-shower, and kitchen remodeling for Greater Sacramento and the Bay Area.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="min-h-screen flex flex-col">
        {/* Google tag (gtag.js) — Google Ads account AW-16715892283. Plain
            script tags (not next/script) so the snippet is present in the
            initial HTML source, where Google's tag checker looks for it;
            React hoists the async loader into <head>. */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16715892283"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-16715892283');`,
          }}
        />
        {/* Meta Pixel — dataset 1140318112037629 (Meta Ads leads campaign).
            Same approach as the Google tag: plain inline script so Meta's
            pixel checker finds it in the page source. PageView fires on every
            page; the Lead event fires on /thank-you (see that page). Hosts
            connect.facebook.net and www.facebook.com are allowed in the CSP. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(BUSINESS_JSON_LD) }}
        />
        {children}
        <StickyCallBar />
        <Analytics />
      </body>
    </html>
  );
}
