// Data layer types — the canonical schema for WorldFreightHub.
// Adding a new country/port/route must NOT require changing core code.

import type { Confidence } from "../config";

/** A sovereign country / market. */
export interface Country {
  slug: string;
  name: string;
  region: string; // "Middle East"
  iso2: string; // e.g. "SA"
  iso3: string; // e.g. "SAU"
  capital: string;
  currency: string; // ISO 4217
  languages: string[];
  /** Main sea ports for freight. */
  ports: string[]; // port slugs
  /** China→country guidance summary. */
  summary: string;
  status: "active" | "planned";
}

/** A seaport or dry port. */
export interface Port {
  slug: string;
  name: string;
  country: string; // country slug
  code: string; // UN/LOCODE, e.g. "SAJED"
  city: string;
  type: "sea" | "air" | "dry";
  /** Whether this is a China origin port or a destination port. */
  role: "origin" | "destination";
  summary: string;
  confidence: Confidence;
  sourceSlugs: string[];
}

/** A shipping route (origin → destination). */
export interface Route {
  slug: string;
  origin: string; // port slug (China)
  destination: string; // port slug (GCC)
  country: string; // destination country slug
  /** Indicative transit time in days (min/typical). */
  transitDaysMin: number;
  transitDaysTypical: number;
  /** Indicative rate range per container, USD. */
  rate20gpMin: number;
  rate20gpMax: number;
  rate40hqMin: number;
  rate40hqMax: number;
  /** Rate + transit are indicative unless verified. */
  confidence: Confidence;
  notes: string;
  sourceSlugs: string[];
  lastUpdated: string;
}

/** A shipping method / mode. */
export interface ShippingMethod {
  slug: string;
  name: string; // "FCL", "LCL", "DDP", "Air Freight", "Rail"
  category: "sea" | "air" | "rail" | "service";
  shortDefinition: string;
  /** When to use, in one line. */
  useCase: string;
  confidence: Confidence;
}

/** A source record for citation / trust (EEAT). */
export interface Source {
  slug: string;
  title: string;
  url: string;
  publisher: string;
  publisherType: "government" | "port-authority" | "carrier" | "industry" | "research" | "company" | "other";
  confidence: Confidence;
  accessedAt: string;
  notes?: string;
}

/** A glossary / defined term. */
export interface GlossaryTerm {
  slug: string;
  term: string;
  abbreviation?: string;
  definition: string;
  relatedTerms?: string[];
}
