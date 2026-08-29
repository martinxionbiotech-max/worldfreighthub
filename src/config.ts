// WorldFreightHub — site-wide configuration
// Single source of truth for domain, branding, and site metadata.

export const site = {
  name: "World Freight Hub",
  legalName: "World Freight Hub",
  tagline: "Global Freight Intelligence & Shipping Information Network",
  domain: "worldfreighthub.net",
  url: "https://worldfreighthub.net",
  defaultLocale: "en",
  description:
    "Data-driven freight intelligence, shipping routes, port information, and cost guidance for global trade — with verified sources and clear methodology.",
  email: "info@worldfreighthub.net",
} as const;

export const subsites = {
  middleEast: {
    slug: "middleeast",
    name: "Middle East Freight Intelligence",
    domain: "middleeast.worldfreighthub.net",
    url: "https://middleeast.worldfreighthub.net",
    description:
      "China to Middle East freight intelligence: shipping routes, ports, customs, DDP, FCL/LCL costs, and transit times for the GCC region.",
  },
} as const;

export const lastUpdated = "2026-08-29";

// Data confidence labels (Master Prompt §12)
export type Confidence = "HIGH" | "MEDIUM" | "LOW";

export const confidenceLabels: Record<Confidence, string> = {
  HIGH: "Verified",
  MEDIUM: "Indicative",
  LOW: "Reported",
};
