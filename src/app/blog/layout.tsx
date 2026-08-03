import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Remodeling Learning Center",
  description:
    "Plain-English guides to bathroom remodeling in Sacramento — real costs, timelines, tile vs. panel walls, and how to hire the right contractor. Written by the owner.",
  alternates: { canonical: "https://stonebritecg.com/blog" },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
