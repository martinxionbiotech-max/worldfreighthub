// Routes — China → GCC. Rates and transit times are INDICATIVE placeholders.
// ⚠️ DO NOT treat these as live prices. They must be replaced by
// secondary-verified estimates (Master Prompt §11/§13) before any page
// presents them as "typical" or "estimated" figures.
// Values here are deliberately left at 0 to force verification before publish.

import type { Route } from "./types";

export const routes: Route[] = [
  {
    slug: "shanghai-jeddah",
    origin: "shanghai",
    destination: "jeddah",
    country: "saudi-arabia",
    transitDaysMin: 0,
    transitDaysTypical: 0,
    rate20gpMin: 0,
    rate20gpMax: 0,
    rate40hqMin: 0,
    rate40hqMax: 0,
    confidence: "LOW",
    notes: "Indicative data pending secondary verification (Firecrawl + carrier/forwarder cross-check).",
    sourceSlugs: [],
    lastUpdated: "2026-08-29",
  },
  {
    slug: "shanghai-dammam",
    origin: "shanghai",
    destination: "dammam",
    country: "saudi-arabia",
    transitDaysMin: 0,
    transitDaysTypical: 0,
    rate20gpMin: 0,
    rate20gpMax: 0,
    rate40hqMin: 0,
    rate40hqMax: 0,
    confidence: "LOW",
    notes: "Indicative data pending secondary verification.",
    sourceSlugs: [],
    lastUpdated: "2026-08-29",
  },
  {
    slug: "shenzhen-jebel-ali",
    origin: "shenzhen",
    destination: "jebel-ali",
    country: "united-arab-emirates",
    transitDaysMin: 0,
    transitDaysTypical: 0,
    rate20gpMin: 0,
    rate20gpMax: 0,
    rate40hqMin: 0,
    rate40hqMax: 0,
    confidence: "LOW",
    notes: "Indicative data pending secondary verification.",
    sourceSlugs: [],
    lastUpdated: "2026-08-29",
  },
];
