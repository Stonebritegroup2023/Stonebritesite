import type { MetadataRoute } from "next";
import { PUBLISHED_POSTS } from "@/lib/blog-data";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://stonebritecg.com";

const img = (name: string) => `${BASE_URL}/photos/${name}`;

/** Key photos per page — emitted as image sitemap entries so Google Images
    indexes our project photography under the right landing pages. */
const PAGE_IMAGES: Record<string, string[]> = {
  "": [
    "bathroom-remodeling-sacramento.jpg",
    "walk-in-tile-shower-remodel-sacramento.jpg",
    "gray-bathroom-freestanding-tub-sacramento.jpg",
    "bathroom-remodeling-contractor-sacramento.jpg",
    "tub-to-shower-conversion-remodel-sacramento.jpg",
    "kitchen-remodeling-sacramento.jpg",
    "aging-in-place-bathroom-remodel-sacramento.jpg",
    "stonebrite-owner-bathroom-remodel-sacramento.jpg",
    "tiled-shower-waterproofing-sacramento.jpg",
    "teal-bathroom-remodel-black-fixtures-sacramento.jpg",
    "primary-bathroom-remodel-vacaville-before.jpg",
    "primary-bathroom-remodel-vacaville-after.jpg",
    "full-bathroom-remodel-sacramento-before.jpg",
    "full-bathroom-remodel-sacramento-after.jpg",
    "walk-in-shower-remodel-sacramento-before.jpg",
    "walk-in-shower-remodel-sacramento-after.jpg",
    "tub-to-shower-conversion-sacramento-before.jpg",
    "tub-to-shower-conversion-sacramento-after.jpg",
    "bathroom-remodel-davis-before.jpg",
    "bathroom-remodel-davis-after.jpg",
    "curbless-walk-in-shower-sacramento.jpg",
  ],
  "/bathrooms": [
    "primary-bathroom-remodel-freestanding-tub-sacramento.jpg",
    "marble-bathroom-remodel-navy-vanity-sacramento.jpg",
    "shower-niche-tile-detail-sacramento.jpg",
    "brass-tub-filler-tile-detail-sacramento.jpg",
    "marble-hex-shower-pan-drain-sacramento.jpg",
  ],
  "/tub-to-shower": [
    "marble-walk-in-shower-mosaic-niche-sacramento.jpg",
    "double-vanity-blue-zellige-bathroom-sacramento.jpg",
    "blue-herringbone-tile-shower-brass-sacramento.jpg",
    "tile-shower-conversion-sacramento.jpg",
    "solid-surface-shower-walls-sacramento.jpg",
    "aging-in-place-curbless-shower-sacramento.jpg",
    "freestanding-tub-walk-in-shower-remodel-sacramento.jpg",
  ],
  "/kitchens": [
    "white-kitchen-remodel-marble-backsplash-sacramento.jpg",
    "kitchen-brass-faucet-marble-herringbone-sacramento.jpg",
    "green-kitchen-remodel-marble-brass-sacramento.jpg",
    "kitchen-remodel-walnut-cabinets-granite-sacramento.jpg",
  ],
  "/about": ["abel-vaniyev-stonebrite-owner-sacramento.jpg"],
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: { path: string; priority: number; freq: "weekly" | "monthly" | "yearly" }[] = [
    { path: "", priority: 1.0, freq: "weekly" },
    { path: "/bathrooms", priority: 0.9, freq: "monthly" },
    { path: "/tub-to-shower", priority: 0.9, freq: "monthly" },
    { path: "/kitchens", priority: 0.9, freq: "monthly" },
    { path: "/blog", priority: 0.7, freq: "weekly" },
    { path: "/about", priority: 0.6, freq: "monthly" },
    { path: "/contact", priority: 0.8, freq: "monthly" },
    { path: "/privacy", priority: 0.2, freq: "yearly" },
    { path: "/terms", priority: 0.2, freq: "yearly" },
    { path: "/accessibility", priority: 0.2, freq: "yearly" },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${BASE_URL}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.freq,
    priority: r.priority,
    ...(PAGE_IMAGES[r.path] ? { images: PAGE_IMAGES[r.path].map(img) } : {}),
  }));

  // Only published articles — the unwritten backlog is noindexed and must
  // not be advertised to crawlers.
  const postEntries: MetadataRoute.Sitemap = PUBLISHED_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...postEntries];
}
