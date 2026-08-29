import type { GlossaryTerm } from './types';

export const glossary: GlossaryTerm[] = [
  {
    slug: 'fcl',
    term: 'FCL',
    definition:
      'Full Container Load — a shipping mode where a single shipper uses an entire container, priced per container rather than per unit.',
  },
  {
    slug: 'lcl',
    term: 'LCL',
    definition:
      'Less than Container Load — cargo from multiple shippers consolidated into one container, priced by volume (CBM).',
  },
  {
    slug: 'ddp',
    term: 'DDP',
    definition:
      'Delivered Duty Paid — the seller delivers goods cleared for import and pays all duties and taxes up to the destination.',
  },
  {
    slug: 'dap',
    term: 'DAP',
    definition:
      'Delivered At Place — the seller delivers goods ready for unloading at the destination, but the buyer handles import clearance.',
  },
  {
    slug: 'incoterms',
    term: 'Incoterms',
    definition:
      'International Commercial Terms — a standardized set of trade terms defining buyer and seller responsibilities, published by the ICC.',
  },
  {
    slug: 'cbm',
    term: 'CBM',
    definition:
      'Cubic Meter — the unit of volume used to calculate cargo space, calculated as length × width × height in meters.',
  },
  {
    slug: 'teu',
    term: 'TEU',
    definition:
      'Twenty-foot Equivalent Unit — the standard measure of container capacity, based on a 20ft container.',
  },
  {
    slug: 'demurrage',
    term: 'Demurrage',
    definition:
      'A fee charged when a container is held at a terminal beyond the allotted free time after discharge.',
  },
  {
    slug: 'detention',
    term: 'Detention',
    definition:
      'A fee charged when a container is held outside the terminal beyond the allotted free time before return to the carrier.',
  },
  {
    slug: 'bill-of-lading',
    term: 'B/L',
    definition:
      'Bill of Lading — a document issued by a carrier acknowledging receipt of cargo and serving as a contract and title document.',
  },
  {
    slug: 'hs-code',
    term: 'HS Code',
    definition:
      'Harmonized System Code — an internationally standardized numeric code used to classify traded products for customs and duties.',
  },
  {
    slug: 'saso',
    term: 'SASO',
    definition:
      'Saudi Standards, Metrology and Quality Organization — the body setting product standards and conformity requirements for imports into Saudi Arabia.',
  },
  {
    slug: 'saber',
    term: 'SABER',
    definition:
      'An online platform used to register products and obtain conformity certificates for imports into Saudi Arabia.',
  },
  {
    slug: 'customs-broker',
    term: 'Customs Broker',
    definition:
      'A licensed intermediary that prepares documentation and clears goods through customs on behalf of importers and exporters.',
  },
  {
    slug: 'volumetric-weight',
    term: 'Volumetric Weight',
    definition:
      'A weight derived from a shipment’s volume, used by air carriers to charge for low-density cargo.',
  },
  {
    slug: 'chargeable-weight',
    term: 'Chargeable Weight',
    definition:
      'The greater of actual weight and volumetric weight, used as the basis for air freight billing.',
  },
];

export function getTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossary.find((term) => term.slug === slug);
}
