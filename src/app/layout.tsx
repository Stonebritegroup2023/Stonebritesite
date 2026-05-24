import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Stonebrite Construction Group | Bathroom & Kitchen Remodeling",
  description:
    "Family-owned bathroom, tub-to-shower, and kitchen remodeling for Greater Sacramento and the Bay Area. Clear scope, thoughtful design support, 5-year workmanship warranty.",
  keywords:
    "bathroom remodeling Sacramento, tub to shower conversion, kitchen remodel, aging in place bathroom",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
