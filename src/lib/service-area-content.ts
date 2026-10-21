/**
 * Bodies for the service-area (city) pages, in the owner's plain first-person
 * voice — same conventions as blog-content.ts. Long-form and encyclopedic on
 * purpose: these pages exist to be the most complete answer on the web for
 * "bathroom remodeling in <city>", not a thin landing page.
 *
 * Every local fact (permits, water, housing eras, code, climate, market) was
 * researched and independently fact-checked before it went in; see
 * docs/service-areas/<slug>-facts.md for the verified fact sheet + sources.
 * If you can't trace a local claim to that sheet, don't add it.
 */

export interface AreaTable {
  caption?: string;
  columns: string[];
  rows: string[][];
}

export interface AreaSubsection {
  heading: string;
  paras: string[];
  list?: string[];
}

export interface AreaSection {
  id: string;
  heading: string;
  paras: string[];
  list?: string[];
  afterList?: string[];
  table?: AreaTable;
  callout?: { label: string; text: string };
  subsections?: AreaSubsection[];
  /** Contextual internal links shown under the section. */
  links?: { label: string; href: string }[];
}

export interface AreaContent {
  quickAnswer: string;
  /** Key facts strip under the quick answer (4–8 items). */
  glance: { label: string; value: string }[];
  sections: AreaSection[];
  faqs: { q: string; a: string }[];
  /** Public sources cited on the page (city, state, utility, data publishers). */
  sources: { label: string; href: string }[];
}

export const SERVICE_AREA_CONTENT: Record<string, AreaContent> = {
  /* ────────────────────────────────────────────────────────────────────── */
  davis: {
    quickAnswer: "PLACEHOLDER — replaced by the verified draft.",
    glance: [],
    sections: [],
    faqs: [],
    sources: [],
  },
};
