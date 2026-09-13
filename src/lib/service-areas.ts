/**
 * Service-area (city) pages — one encyclopedic "Bathroom Remodeling in <City>, CA"
 * page per city we actually serve. A city renders only when it has an entry here
 * with `published: true` AND a body in service-area-content.ts (same gate as blog).
 *
 * Truth rule: every city-specific fact in a body must come from the verified
 * fact sheet kept in docs/service-areas/<slug>-facts.md. Never invent local
 * projects, counts, or claims — cities without real completed work should say so
 * plainly or link to the nearest real project.
 */

export interface AreaProject {
  title: string;
  scope: string;
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
}

export interface ServiceArea {
  slug: string;
  city: string;
  county: string;
  state: "CA";
  /** H1 */
  title: string;
  metaTitle: string;
  metaDescription: string;
  /** Hero paragraph under the H1 */
  intro: string;
  heroPhoto: { src: string; alt: string };
  /** A real, completed Stonebrite project in this city (optional but strongly preferred). */
  project?: AreaProject;
  readTime: string;
  publishedAt: string;
  updatedAt: string;
  published?: boolean;
}

export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: "davis",
    city: "Davis",
    county: "Yolo County",
    state: "CA",
    title: "Bathroom Remodeling in Davis, CA",
    metaTitle: "Bathroom Remodeling in Davis, CA — The Complete Homeowner's Guide | Stonebrite",
    metaDescription:
      "Everything about remodeling a bathroom in Davis, CA: real local costs, timelines, City of Davis permits and inspections, water hardness, older-home surprises, materials, and how we work. Written by a Davis-based remodeler, CSLB #1113488.",
    intro:
      "Stonebrite is based in Davis. This is the guide we wish every Davis homeowner had before calling anyone — what a remodel really costs here, how the City of Davis permit process works, what our water does to fixtures, what we find inside Davis houses of every era, and how to plan the whole thing without surprises.",
    heroPhoto: {
      src: "/photos/bathroom-remodel-davis-after.jpg",
      alt: "Bathroom remodeling in Davis, CA — frameless glass corner shower with pebble floor, black fixtures, and oak shaker vanity",
    },
    project: {
      title: "Bathroom Remodel — Davis",
      scope:
        "Dated framed corner shower and oak vanity replaced — frameless glass shower with pebble floor, new tile walls, oak shaker vanity, and wood-look tile flooring.",
      before: "/photos/bathroom-remodel-davis-before.jpg",
      after: "/photos/bathroom-remodel-davis-after.jpg",
      beforeAlt: "Bathroom remodeling in Davis before — dated framed corner shower with frosted glass and oak vanity",
      afterAlt: "Bathroom remodeling in Davis after — frameless glass corner shower with pebble floor, black fixtures, and oak shaker vanity",
    },
    readTime: "25 min",
    publishedAt: "2026-09-13",
    updatedAt: "2026-09-13",
    // Flipped to true once the verified body lands in service-area-content.ts.
    published: false,
  },
];

export const PUBLISHED_AREAS = SERVICE_AREAS.filter((a) => a.published);

export function getServiceArea(slug: string): ServiceArea | undefined {
  return SERVICE_AREAS.find((a) => a.slug === slug);
}
