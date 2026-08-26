import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Script from "next/script";
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
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Stonebrite Construction Group",
    title: "Stonebrite Construction Group | Bathroom & Kitchen Remodeling",
    description:
      "Family-owned bathroom, tub-to-shower, and kitchen remodeling for Greater Sacramento and the Bay Area.",
    url: SITE_URL,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(BUSINESS_JSON_LD) }}
        />
        {children}
        <StickyCallBar />
        <Analytics />
        {/* Google tag (gtag.js) — Google Ads account AW-16715892283 */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-16715892283" />
        <Script id="google-tag">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-16715892283');`}
        </Script>
      </body>
    </html>
  );
}
