export type Confidence = 'HIGH' | 'MEDIUM' | 'LOW' | 'UNKNOWN';

export interface Source {
  id: string;
  name: string;
  url: string;
  type: 'government' | 'carrier' | 'industry' | 'port-authority' | 'organization';
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface Country {
  slug: string;
  updated: string;
  name: string;
  iso2: string;
  capital: string;
  currency: string;
  vatRate: number | null;
  vatNote: string;
  ports: string[];
  tldr: string;
  dutyRate: string;
  dutyNote: string;
  deMinimis: string;
  deMinimisNote: string;
  compliance: string[];
  clearanceProcess: string[];
  insight: string;
  typicalCargo: string[];
  importRisks: string[];
  bestPort: string;
  inlandLogistics: string;
  decisionGuide: string;
  keyTakeaways: string[];
  faqs: FaqItem[];
}

export interface PortSpec {
  label: string;
  value: string;
}

export interface Port {
  slug: string;
  confidence: Confidence;
  name: string;
  country: string;
  countrySlug: string;
  type: 'seaport' | 'dry-port';
  unlocode?: string;
  note?: string;
  tldr: string;
  operator: string;
  specs: PortSpec[];
  hinterland: string;
  insight: string;
  keyTakeaways: string[];
  faqs: FaqItem[];
  decisionScore?: {
    score: number;
    factors: { label: string; value: number }[];
    note: string;
  };
  updated: string;
}

export interface RouteCostRow {
  label: string;
  range: string;
  confidence: Confidence;
}

export interface Route {
  slug: string;
  updated: string;
  originPort: string;
  destPort: string;
  country: string;
  volatility: 'HIGH' | 'MEDIUM' | 'LOW';
  transitDays: { typical: number; range: [number, number] };
  confidence: Confidence;
  note?: string;
  originNote: string;
  destNote: string;
  routingNote: string;
  transitNote: string;
  costRows: RouteCostRow[];
  insight: string;
  faqs: FaqItem[];
  keyTakeaways: string[];
  chokepoints: string[];
  risks: string[];
  cargoFit: string[];
  bestFit: string;
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
  whenNotToChoose: string[];
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
  category: string;
  inDetail: string;
  whyItMatters: string;
  example: string;
  related: string[];
  updated: string;
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

export type VerificationLevel =
  | 'LEVEL_1_LISTED'
  | 'LEVEL_2_SOURCE_VERIFIED'
  | 'LEVEL_3_INDEPENDENTLY_VERIFIED'
  | 'LEVEL_4_PROVIDER_CONFIRMED';

export function verificationLevelForSourceType(sourceType: 'own-website' | 'directory'): VerificationLevel {
  return sourceType === 'own-website' ? 'LEVEL_2_SOURCE_VERIFIED' : 'LEVEL_1_LISTED';
}

export const VERIFICATION_LEVEL_LABELS: Record<VerificationLevel, string> = {
  LEVEL_1_LISTED: 'LEVEL 1 · LISTED',
  LEVEL_2_SOURCE_VERIFIED: 'LEVEL 2 · SOURCE VERIFIED',
  LEVEL_3_INDEPENDENTLY_VERIFIED: 'LEVEL 3 · INDEPENDENTLY VERIFIED',
  LEVEL_4_PROVIDER_CONFIRMED: 'LEVEL 4 · PROVIDER CONFIRMED',
};
