import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Project Gallery",
  description:
    "A curated look at recent Stonebrite bathroom, tub-to-shower, and kitchen remodels across Greater Sacramento and the East Bay.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
