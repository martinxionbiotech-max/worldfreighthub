// Glossary — freight & shipping defined terms (DefinedTerm schema-ready).

import type { GlossaryTerm } from "./types";

export const glossary: GlossaryTerm[] = [
  {
    slug: "cbm",
    term: "Cubic Meter (CBM)",
    abbreviation: "CBM",
    definition:
      "The standard unit of volume for LCL (less-than-container-load) freight. 1 CBM = 1 cubic meter = 1,000,000 cubic centimeters.",
    relatedTerms: ["lcl", "chargeable-weight"],
  },
  {
    slug: "demurrage",
    term: "Demurrage",
    definition:
      "A charge applied by the shipping line when a full container is not picked up from the port/terminal within the allowed free time after discharge.",
    relatedTerms: ["detention"],
  },
  {
    slug: "detention",
    term: "Detention",
    definition:
      "A charge applied by the shipping line when a container is not returned empty to the carrier's depot within the allowed free time after pickup.",
    relatedTerms: ["demurrage"],
  },
  {
    slug: "chargeable-weight",
    term: "Chargeable Weight",
    definition:
      "For air freight, the weight used for billing — the higher of actual gross weight or volumetric weight (CBM × 167 kg for air).",
    relatedTerms: ["cbm", "air-freight"],
  },
  {
    slug: "teu",
    term: "Twenty-foot Equivalent Unit",
    abbreviation: "TEU",
    definition:
      "The standard unit of container capacity, based on one 20-foot container (20GP). A 40-foot container equals 2 TEU.",
    relatedTerms: ["fcl"],
  },
  {
    slug: "incoterms",
    term: "Incoterms",
    definition:
      "Internationally recognized trade terms (published by the ICC) that define the responsibilities, costs, and risk transfer between buyer and seller (e.g., FOB, CIF, DDP, DAP).",
    relatedTerms: ["ddp", "dap", "fob"],
  },
  {
    slug: "hs-code",
    term: "Harmonized System Code",
    abbreviation: "HS Code",
    definition:
      "A standardized international numerical code that classifies traded products, used to determine import duties and customs requirements.",
    relatedTerms: ["customs"],
  },
  {
    slug: "bill-of-lading",
    term: "Bill of Lading",
    abbreviation: "B/L",
    definition:
      "The key shipping document issued by a carrier: a receipt for cargo, evidence of the contract of carriage, and a document of title.",
    relatedTerms: ["customs"],
  },
];
