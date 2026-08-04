/**
 * Shared structured-data (JSON-LD) builders for SEO/LLMO.
 * The LocalBusiness entity is emitted site-wide from the root layout;
 * service pages add Service + BreadcrumbList + FAQPage on top.
 */

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://stonebritecg.com";

/** The business entity — the machine-readable version of who we are. */
export const BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": `${SITE_URL}/#business`,
  name: "Stonebrite Construction Group",
  url: SITE_URL,
  logo: `${SITE_URL}/stonebrite-logo-trans.png`,
  image: `${SITE_URL}/photos/bathroom-remodeling-sacramento.jpg`,
  telephone: "+1-530-771-6025",
  email: "info@stonebritecg.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Davis",
    addressRegion: "CA",
    addressCountry: "US",
  },
  areaServed: [
    "Davis CA",
    "Sacramento CA",
    "West Sacramento CA",
    "Woodland CA",
    "Vacaville CA",
    "Elk Grove CA",
    "Roseville CA",
    "Folsom CA",
    "Citrus Heights CA",
    "Greater Sacramento",
    "San Francisco Bay Area",
  ],
  founder: { "@type": "Person", name: "Abel Vaniyev" },
  description:
    "Family-owned, owner-led bathroom, tub-to-shower, and kitchen remodeling company serving Greater Sacramento and the Bay Area. CSLB License #1113488. 5-year workmanship warranty.",
  slogan: "Bathrooms & Kitchens Built to Last",
  priceRange: "$$",
  sameAs: [
    "https://www.yelp.com/biz/stonebrite-construction-group-davis",
    "https://www.thumbtack.com/ca/davis/cabinet-installation/stonebrite-construction-group/service/503389202911158290",
  ],
};

interface ServiceSchemaInput {
  path: string;
  name: string;
  description: string;
  breadcrumbName: string;
  faqs: { q: string; a: string }[];
}

/** Service + BreadcrumbList + FAQPage graph for a service page. */
export function serviceJsonLd({ path, name, description, breadcrumbName, faqs }: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name,
        description,
        url: `${SITE_URL}${path}`,
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: "Greater Sacramento and the Bay Area",
        serviceType: name,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/#services` },
          { "@type": "ListItem", position: 3, name: breadcrumbName, item: `${SITE_URL}${path}` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}
