export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: "Cost & Budgeting" | "Planning & Process" | "Materials & Design" | "Conversions" | "Local Guides" | "Contractor Tips";
  readTime: string;
  publishedAt: string;
  featured?: boolean;
  /** Only published posts (with a body in blog-content.ts) appear on the site.
      The rest stay here as the editorial backlog — write, then flip to true. */
  published?: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "bathroom-remodel-cost-sacramento",
    title: "How Much Does a Bathroom Remodel Cost in Sacramento?",
    description: "A clear breakdown of what affects bathroom remodel pricing in the Greater Sacramento area — materials, scope, layout changes, and how to evaluate estimates.",
    category: "Cost & Budgeting",
    readTime: "7 min",
    publishedAt: "2026-05-01",
    featured: true,
    published: true,
  },
  {
    slug: "tub-to-shower-conversion-what-homeowners-should-know",
    title: "Tub-to-Shower Conversion: What Homeowners Should Know",
    description: "What's actually involved in a tub-to-shower conversion — timeline, plumbing, waterproofing, wall options, and what affects the cost.",
    category: "Conversions",
    readTime: "6 min",
    publishedAt: "2026-04-22",
    published: true,
  },
  {
    slug: "tile-shower-vs-manufactured-stone-walls",
    title: "Tile Shower vs. Manufactured Stone Shower Walls",
    description: "An honest comparison of full tile versus manufactured stone or panel wall systems for shower remodels — appearance, durability, maintenance, and cost.",
    category: "Materials & Design",
    readTime: "5 min",
    publishedAt: "2026-04-15",
    published: true,
  },
  {
    slug: "what-is-included-in-full-bathroom-remodel",
    title: "What Is Included in a Full Bathroom Remodel?",
    description: "A detailed breakdown of everything a full bathroom remodel typically covers — from demolition through final walkthrough, so you know exactly what to expect.",
    category: "Planning & Process",
    readTime: "7 min",
    publishedAt: "2026-04-10",
  },
  {
    slug: "how-long-does-bathroom-remodel-take",
    title: "How Long Does a Bathroom Remodel Usually Take?",
    description: "Honest timelines for bathroom remodels in Sacramento — what affects the schedule, what can cause delays, and how to plan around the disruption.",
    category: "Planning & Process",
    readTime: "6 min",
    publishedAt: "2026-04-03",
    published: true,
  },
  {
    slug: "what-makes-bathroom-remodel-more-expensive",
    title: "What Makes a Bathroom Remodel More Expensive?",
    description: "The hidden cost drivers behind bathroom remodels — layout changes, plumbing relocations, waterproofing choices, and material upgrades that add up fast.",
    category: "Cost & Budgeting",
    readTime: "5 min",
    publishedAt: "2026-03-26",
  },
  {
    slug: "bathroom-remodel-checklist-before-hiring-contractor",
    title: "Bathroom Remodel Checklist Before You Hire a Contractor",
    description: "What to prepare, gather, and think through before you start talking to contractors — so your first meeting is productive and your estimate is accurate.",
    category: "Contractor Tips",
    readTime: "5 min",
    publishedAt: "2026-03-19",
  },
  {
    slug: "what-to-ask-before-hiring-bathroom-remodeling-contractor",
    title: "What to Ask Before Hiring a Bathroom Remodeling Contractor",
    description: "The questions that separate experienced, accountable contractors from the ones who will cost you more in the long run.",
    category: "Contractor Tips",
    readTime: "7 min",
    publishedAt: "2026-03-12",
    published: true,
  },
  {
    slug: "how-to-plan-finish-selections-bathroom-remodel",
    title: "How to Plan Finish Selections for a Bathroom Remodel",
    description: "A practical guide to choosing tile, fixtures, vanity, lighting, and hardware for your bathroom remodel — in the right order, without decision fatigue.",
    category: "Materials & Design",
    readTime: "6 min",
    publishedAt: "2026-03-05",
  },
  {
    slug: "waterproofing-basics-shower-remodels",
    title: "Waterproofing Basics for Shower Remodels",
    description: "Why waterproofing is the most important part of a shower remodel, what systems work, and what to ask your contractor before work begins.",
    category: "Materials & Design",
    readTime: "5 min",
    publishedAt: "2026-02-26",
  },
  {
    slug: "curbless-showers-pros-cons-cost",
    title: "Curbless Showers: Pros, Cons, and Cost Factors",
    description: "Everything to know about curbless (zero-threshold) shower design — waterproofing requirements, drain options, aging-in-place benefits, and what they cost.",
    category: "Conversions",
    readTime: "5 min",
    publishedAt: "2026-02-19",
  },
  {
    slug: "aging-in-place-bathroom-remodel-ideas",
    title: "Aging-in-Place Bathroom Remodel Ideas",
    description: "Practical bathroom modifications that improve safety and accessibility without sacrificing style — grab bars, curbless showers, wider clearances, and more.",
    category: "Local Guides",
    readTime: "6 min",
    publishedAt: "2026-02-12",
  },
  {
    slug: "walk-in-shower-ideas-sacramento-homes",
    title: "Walk-In Shower Ideas for Sacramento Homes",
    description: "Design ideas and practical considerations for walk-in showers in Sacramento-area homes — tile choices, glass options, niche placement, and layout ideas.",
    category: "Local Guides",
    readTime: "5 min",
    publishedAt: "2026-02-05",
  },
  {
    slug: "vanity-lighting-mirror-planning-bathroom-remodel",
    title: "Vanity, Lighting, and Mirror Planning for Bathroom Remodels",
    description: "How to get the vanity, lighting, and mirror combination right — sizing, placement, electrical requirements, and style coordination.",
    category: "Materials & Design",
    readTime: "5 min",
    publishedAt: "2026-01-29",
  },
  {
    slug: "what-causes-bathroom-remodel-change-orders",
    title: "What Causes Bathroom Remodel Change Orders?",
    description: "The most common reasons change orders happen — and how a clear scope, thorough estimate, and honest contractor can minimize surprises.",
    category: "Planning & Process",
    readTime: "5 min",
    publishedAt: "2026-01-22",
  },
  {
    slug: "how-to-compare-bathroom-remodel-estimates",
    title: "How to Compare Bathroom Remodel Estimates",
    description: "What to look for when you have multiple estimates — scope differences, exclusions, allowances, and the red flags that signal a problem before work starts.",
    category: "Cost & Budgeting",
    readTime: "6 min",
    publishedAt: "2026-01-15",
    published: true,
  },
  {
    slug: "shower-glass-options-framed-semi-frameless-frameless",
    title: "Shower Glass Options: Framed, Semi-Frameless, and Frameless",
    description: "A practical comparison of shower glass enclosure types — cost differences, cleaning requirements, visual impact, and which fits your budget and style.",
    category: "Materials & Design",
    readTime: "4 min",
    publishedAt: "2026-01-08",
  },
  {
    slug: "kitchen-remodel-planning-for-homeowners",
    title: "Kitchen Remodel Planning for Homeowners",
    description: "A step-by-step overview of how to plan a kitchen remodel — scope definition, budget ranges, timeline expectations, and what to clarify with your contractor.",
    category: "Planning & Process",
    readTime: "6 min",
    publishedAt: "2025-12-18",
  },
  {
    slug: "how-clear-scope-protects-remodel-budget",
    title: "How a Clear Scope Protects Your Remodel Budget",
    description: "Why the written scope of work is the most important document in any remodel — and what a good scope includes versus what to watch out for.",
    category: "Contractor Tips",
    readTime: "5 min",
    publishedAt: "2025-12-11",
  },
  {
    slug: "why-workmanship-warranty-matters-bathroom-remodeling",
    title: "Why Workmanship Warranty Matters in Bathroom Remodeling",
    description: "What a workmanship warranty covers (and doesn't), how to evaluate warranty offers, and why it matters more in bathrooms than in most other remodels.",
    category: "Contractor Tips",
    readTime: "4 min",
    publishedAt: "2025-12-04",
  },
];

export const PUBLISHED_POSTS: BlogPost[] = BLOG_POSTS.filter((p) => p.published);

export const BLOG_CATEGORIES = [
  "All",
  "Cost & Budgeting",
  "Planning & Process",
  "Materials & Design",
  "Conversions",
  "Local Guides",
  "Contractor Tips",
] as const;
