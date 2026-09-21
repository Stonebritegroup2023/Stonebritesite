import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

// Individual articles override this in blog/[slug]/generateMetadata.
export const metadata: Metadata = pageMetadata({
  title: "Remodeling Learning Center",
  description:
    "Plain-English guides to bathroom remodeling in Sacramento — real costs, timelines, tile vs. panel walls, and how to hire the right contractor. Written by the owner.",
  path: "/blog",
});

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
