import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import ContactClient from "./ContactClient";

export const metadata: Metadata = pageMetadata({
  title: "Get Your Free Estimate",
  description:
    "Tell us about your bathroom or kitchen remodel. We'll review your project, reach out to discuss next steps, and schedule a free in-home estimate across Greater Sacramento and the Bay Area.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactClient />;
}
