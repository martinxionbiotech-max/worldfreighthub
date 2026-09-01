export type Confidence = 'HIGH' | 'MEDIUM' | 'LOW';

export interface Source {
  id: string;
  name: string;
  url: string;
  type: 'government' | 'carrier' | 'industry' | 'port-authority' | 'organization';
}

export interface Country {
  slug: string;
  name: string;
  iso2: string;
  capital: string;
  currency: string;
  vatRate: number | null;
  vatNote: string;
  ports: string[];
}

export interface Port {
  slug: string;
  name: string;
  country: string;
  countrySlug: string;
  type: 'seaport' | 'dry-port';
  unlocode?: string;
  note?: string;
}

export interface Route {
  slug: string;
  originPort: string;
  destPort: string;
  country: string;
  transitDays: { typical: number; range: [number, number] };
  confidence: Confidence;
  note?: string;
}

export interface MethodFaq {
  q: string;
  a: string;
}

export interface MethodCostRow {
  label: string;
  range: string;
  confidence: Confidence;
}

export interface Method {
  slug: string;
  name: string;
  summary: string;
  tldr: string;
  definition: string;
  bestFor: string[];
  pricingLogic: string;
  costRows: MethodCostRow[];
  transitTime: { range: string; note: string; confidence: Confidence };
  pros: string[];
  cons: string[];
  insight: string;
  process: string[];
  faqs: MethodFaq[];
  keyTakeaways: string[];
  compareWith?: { slug: string; label: string };
  updated: string;
  sources: Source[];
}

export interface GlossaryTerm {
  slug: string;
  term: string;
  definition: string;
}

export interface FreightRate {
  id: string;
  route: string;
  container: string;
  amount: number;
  currency: 'USD';
  confidence: Confidence;
  lastUpdated: string;
  note: string;
}
