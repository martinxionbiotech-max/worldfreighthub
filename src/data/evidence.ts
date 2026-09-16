import type { Confidence } from './types';

/**
 * WorldFreightHub Evidence Graph — claim-level provenance registry.
 *
 * Every claim published on the site that carries a concrete figure is
 * recorded here as a node: the claim text, the entity it describes, the
 * extracted value, the region it applies to, the source it was taken from
 * (name + URL), the as-of date, the confidence label, the reviewing desk
 * and the date the claim must be re-verified (expiry of the record).
 *
 * Discipline (matches docs/research-notes-*.md):
 *   - Extracted values are taken verbatim from the cited source or from the
 *     existing structured data files (src/data/*.ts). Nothing is invented.
 *   - `asOf` is the source publication date, or the access date where the
 *     source prints no date (marked "accessed").
 *   - `reviewDue` encodes expiry: weekly indices re-verify before the next
 *     print; monthly/forwarder sheets within one month; regulatory rates
 *     within one quarter; annual port figures within one year.
 *   - Confidence follows the site methodology: HIGH = primary/official
 *     index or authority; MEDIUM = corroborated secondary / dated snapshot;
 *     LOW = single undated source or unconfirmed estimate.
 */

export type EvidenceRegion =
  | 'saudi-arabia'
  | 'united-arab-emirates'
  | 'qatar'
  | 'kuwait'
  | 'oman'
  | 'bahrain'
  | 'china-gcc'
  | 'china-europe'
  | 'global';

export type EvidenceCategory = 'regulatory' | 'index' | 'market-structure' | 'port' | 'rail';

export interface EvidenceClaim {
  id: string;
  claim: string;
  entity: string;
  extractedValue: string;
  region: EvidenceRegion;
  category: EvidenceCategory;
  asOf: string;
  confidence: Confidence;
  sourceName: string;
  sourceUrl: string;
  reviewer: string;
  reviewDue: string;
  note?: string;
}

export const EVIDENCE_REVIEWER = 'WorldFreightHub Research Desk';

export const evidenceClaims: EvidenceClaim[] = [
  // ── Regulatory: GCC VAT / duty / de minimis ──────────────────
  {
    id: 'c-reg-sa-vat',
    claim: 'Saudi Arabia charges 15% VAT on imports.',
    entity: 'Saudi Arabia — VAT rate',
    extractedValue: '15% (since July 2020, raised from 5%)',
    region: 'saudi-arabia',
    category: 'regulatory',
    asOf: '2026-09-06',
    confidence: 'HIGH',
    sourceName: 'ZATCA — Saudi Customs / Tax Authority',
    sourceUrl: 'https://zatca.gov.sa',
    reviewer: EVIDENCE_REVIEWER,
    reviewDue: '2026-12-06',
    note: 'Primary source: national tax authority. Recorded in src/data/gcc-countries.ts (vatNote).',
  },
  {
    id: 'c-reg-ae-vat',
    claim: 'The UAE charges 5% VAT on imports.',
    entity: 'United Arab Emirates — VAT rate',
    extractedValue: '5% (since 1 January 2018)',
    region: 'united-arab-emirates',
    category: 'regulatory',
    asOf: '2026-09-06',
    confidence: 'HIGH',
    sourceName: 'Dubai Customs',
    sourceUrl: 'https://www.dubaicustoms.gov.ae',
    reviewer: EVIDENCE_REVIEWER,
    reviewDue: '2026-12-06',
    note: 'Primary source: customs authority. Recorded in src/data/gcc-countries.ts (vatNote).',
  },
  {
    id: 'c-reg-qa-vat',
    claim: 'Qatar has no VAT yet; an e-invoicing law passed in May 2026 signals implementation at ~5%.',
    entity: 'Qatar — VAT status',
    extractedValue: '0% now (≈5% expected)',
    region: 'qatar',
    category: 'regulatory',
    asOf: '2026-09-06',
    confidence: 'MEDIUM',
    sourceName: 'Qatar Customs (General Authority of Customs)',
    sourceUrl: 'https://www.customs.gov.qa',
    reviewer: EVIDENCE_REVIEWER,
    reviewDue: '2026-12-06',
    note: 'The ~5% level is an expectation signalled by the May-2026 e-invoicing law, not a published rate. Recorded in src/data/gcc-countries.ts (vatNote).',
  },
  {
    id: 'c-reg-kw-vat',
    claim: 'Kuwait has no VAT implemented.',
    entity: 'Kuwait — VAT status',
    extractedValue: '0% (GCC agreement signed, not implemented)',
    region: 'kuwait',
    category: 'regulatory',
    asOf: '2026-09-06',
    confidence: 'MEDIUM',
    sourceName: 'Kuwait General Administration of Customs',
    sourceUrl: 'https://www.customs.gov.kw',
    reviewer: EVIDENCE_REVIEWER,
    reviewDue: '2026-12-06',
    note: 'No confirmed implementation timeline published. Recorded in src/data/gcc-countries.ts (vatNote).',
  },
  {
    id: 'c-reg-om-vat',
    claim: 'Oman charges 5% VAT on imports.',
    entity: 'Oman — VAT rate',
    extractedValue: '5% (since 16 April 2021)',
    region: 'oman',
    category: 'regulatory',
    asOf: '2026-09-06',
    confidence: 'HIGH',
    sourceName: 'Oman Customs',
    sourceUrl: 'https://www.customs.gov.om',
    reviewer: EVIDENCE_REVIEWER,
    reviewDue: '2026-12-06',
    note: 'Primary source: customs authority. Recorded in src/data/gcc-countries.ts (vatNote).',
  },
  {
    id: 'c-reg-bh-vat',
    claim: 'Bahrain charges 10% VAT on imports.',
    entity: 'Bahrain — VAT rate',
    extractedValue: '10% (since 2022, raised from 5%)',
    region: 'bahrain',
    category: 'regulatory',
    asOf: '2026-09-06',
    confidence: 'HIGH',
    sourceName: 'Bahrain Customs',
    sourceUrl: 'https://www.bahraincustoms.gov.bh',
    reviewer: EVIDENCE_REVIEWER,
    reviewDue: '2026-12-06',
    note: 'Primary source: customs authority. Recorded in src/data/gcc-countries.ts (vatNote).',
  },
  {
    id: 'c-reg-sa-duty',
    claim: 'Saudi Arabia applies a 5% base import duty calculated on CIF value.',
    entity: 'Saudi Arabia — base duty rate',
    extractedValue: '5% on CIF value',
    region: 'saudi-arabia',
    category: 'regulatory',
    asOf: '2026-09-06',
    confidence: 'HIGH',
    sourceName: 'ZATCA — Saudi Customs / Tax Authority',
    sourceUrl: 'https://zatca.gov.sa',
    reviewer: EVIDENCE_REVIEWER,
    reviewDue: '2026-12-06',
    note: 'Higher rates apply to specific lines: alcohol 100%, tobacco 100%, carbonated drinks 50%. Recorded in src/data/gcc-countries.ts (dutyRate/dutyNote).',
  },
  {
    id: 'c-reg-sa-agri',
    claim: 'Saudi Arabia raised tariffs on 51 agricultural and food lines to 5–15% from June 2026.',
    entity: 'Saudi Arabia — agricultural tariffs',
    extractedValue: '5–15% across 51 lines (from June 2026)',
    region: 'saudi-arabia',
    category: 'regulatory',
    asOf: '2026-09-06',
    confidence: 'HIGH',
    sourceName: 'ZATCA — Saudi Customs / Tax Authority',
    sourceUrl: 'https://zatca.gov.sa',
    reviewer: EVIDENCE_REVIEWER,
    reviewDue: '2026-12-06',
    note: 'HS-code-specific duty should be confirmed before SABER filing. Recorded in src/data/gcc-countries.ts (dutyNote) and src/data/intelligence.ts.',
  },
  {
    id: 'c-reg-sa-deminimis',
    claim: 'Saudi Arabia applies a SAR 1,000 de minimis threshold to personal parcels.',
    entity: 'Saudi Arabia — de minimis threshold',
    extractedValue: 'SAR 1,000 (personal parcels only)',
    region: 'saudi-arabia',
    category: 'regulatory',
    asOf: '2026-09-06',
    confidence: 'LOW',
    sourceName: 'ZATCA — Saudi Customs / Tax Authority',
    sourceUrl: 'https://zatca.gov.sa',
    reviewer: EVIDENCE_REVIEWER,
    reviewDue: '2026-12-06',
    note: 'Awaiting ZATCA first-hand confirmation; VAT still applies with no exemption. Recorded in src/data/gcc-countries.ts (deMinimis/deMinimisNote).',
  },
  {
    id: 'c-reg-ae-deminimis',
    claim: 'The UAE applies an AED 1,000 de minimis threshold to personal parcels.',
    entity: 'United Arab Emirates — de minimis threshold',
    extractedValue: 'AED 1,000 (personal parcels only)',
    region: 'united-arab-emirates',
    category: 'regulatory',
    asOf: '2026-09-06',
    confidence: 'LOW',
    sourceName: 'Dubai Customs',
    sourceUrl: 'https://www.dubaicustoms.gov.ae',
    reviewer: EVIDENCE_REVIEWER,
    reviewDue: '2026-12-06',
    note: 'Confirm current threshold with the FTA; 5% VAT may still apply. Recorded in src/data/gcc-countries.ts (deMinimis/deMinimisNote).',
  },

  // ── Freight indices (SCFI / CCFI / WCI / FBX / Xeneta) ───────
  {
    id: 'c-idx-scfi-gulf',
    claim: 'The SCFI Persian Gulf line (Shanghai→Dubai) stood at $6,311/TEU on 2026-09-11.',
    entity: 'SCFI — Persian Gulf route (Shanghai→Dubai)',
    extractedValue: '$6,311/TEU (+$176, +2.9% w/w)',
    region: 'china-gcc',
    category: 'index',
    asOf: '2026-09-11',
    confidence: 'HIGH',
    sourceName: 'Shanghai Shipping Exchange (SCFI) via CCCME',
    sourceUrl: 'https://www.cccme.org.cn/news/details.aspx?id=45B2AF7028B85EBFBDDFE7D8D98FDB58&classid=8C92359A9456952E&xgid=F868932F64EB7AAF',
    reviewer: EVIDENCE_REVIEWER,
    reviewDue: '2026-09-18',
    note: 'Official weekly index, spot incl. surcharges. Source: docs/research-notes-2026-09-16-europe-rail-and-indices.md S1/S3; also bound in src/data/rates.ts r-201.',
  },
  {
    id: 'c-idx-scfi-composite',
    claim: 'The SCFI composite index stood at 3,662.18 on 2026-09-11.',
    entity: 'SCFI — composite index',
    extractedValue: '3,662.18 (+72.13, +2.0% w/w; 7th weekly rise)',
    region: 'global',
    category: 'index',
    asOf: '2026-09-11',
    confidence: 'HIGH',
    sourceName: 'Shanghai Shipping Exchange (SSE)',
    sourceUrl: 'https://www.sse.net.cn/index/singleIndex?indexType=scfi',
    reviewer: EVIDENCE_REVIEWER,
    reviewDue: '2026-09-18',
    note: 'Official weekly print. Source: docs/research-notes-2026-09-16-europe-rail-and-indices.md S1.',
  },
  {
    id: 'c-idx-ccfi-composite',
    claim: 'The CCFI composite index stood at 1,862.18 on 2026-09-11.',
    entity: 'CCFI — composite index',
    extractedValue: '1,862.18 (+1.4% w/w)',
    region: 'global',
    category: 'index',
    asOf: '2026-09-11',
    confidence: 'HIGH',
    sourceName: 'Shanghai Shipping Exchange (SSE)',
    sourceUrl: 'https://www.sse.net.cn/index/singleIndex?indexType=ccfi',
    reviewer: EVIDENCE_REVIEWER,
    reviewDue: '2026-09-18',
    note: 'Official weekly print. Source: docs/research-notes-2026-09-16-europe-rail-and-indices.md S2.',
  },
  {
    id: 'c-idx-ccfi-gulf',
    claim: 'The CCFI Persian Gulf / Red Sea line stood at 3,669.37 on 2026-09-11.',
    entity: 'CCFI — Persian Gulf / Red Sea route',
    extractedValue: '3,669.37 (+3.0% w/w)',
    region: 'china-gcc',
    category: 'index',
    asOf: '2026-09-11',
    confidence: 'HIGH',
    sourceName: 'Shanghai Shipping Exchange (SSE)',
    sourceUrl: 'https://www.sse.net.cn/index/singleIndex?indexType=ccfi',
    reviewer: EVIDENCE_REVIEWER,
    reviewDue: '2026-09-18',
    note: 'Official weekly route table. Source: docs/research-notes-2026-09-16-europe-rail-and-indices.md S2.',
  },
  {
    id: 'c-idx-scfi-gulf-aug',
    claim: 'The SCFI Persian Gulf line averaged $5,637/TEU in August 2026.',
    entity: 'SCFI — Persian Gulf route, monthly average',
    extractedValue: '$5,637/TEU (+26.2% MoM)',
    region: 'china-gcc',
    category: 'index',
    asOf: '2026-09-03',
    confidence: 'HIGH',
    sourceName: 'SSE monthly report via MOFCOM',
    sourceUrl: 'https://fec.mofcom.gov.cn/article/ggfw/tjsj/zsff/ckjzxjgzscx/202609/7869.html',
    reviewer: EVIDENCE_REVIEWER,
    reviewDue: '2026-10-03',
    note: 'Official monthly average. Source: docs/research-notes-2026-09-16-europe-rail-and-indices.md S13.',
  },
  {
    id: 'c-idx-scfi-gulf-apr',
    claim: 'The SCFI Persian Gulf line stood at $3,977/TEU on 2026-04-03.',
    entity: 'SCFI — Persian Gulf route, pre-surge baseline',
    extractedValue: '$3,977/TEU (2026-04-03; ~+200% vs pre-war)',
    region: 'china-gcc',
    category: 'index',
    asOf: '2026-04-09',
    confidence: 'HIGH',
    sourceName: 'Shipping Digest (Taiwan) weekly SCFI report',
    sourceUrl: 'https://shippingdigest.tw/news/20260409n2',
    reviewer: EVIDENCE_REVIEWER,
    reviewDue: '2026-10-09',
    note: 'Historical weekly print used as pre-surge baseline. Source: docs/research-notes-2026-09-16-china-gcc-rates.md S19.',
  },
  {
    id: 'c-idx-wci-composite',
    claim: 'The Drewry World Container Index composite stood at $4,476 per 40ft on 2026-09-10.',
    entity: 'Drewry WCI — composite',
    extractedValue: '$4,476/40ft (unchanged, 2nd stable week)',
    region: 'global',
    category: 'index',
    asOf: '2026-09-10',
    confidence: 'HIGH',
    sourceName: 'Drewry World Container Index',
    sourceUrl: 'https://www.drewry.co.uk/supply-chain-advisors/supply-chain-expertise/world-container-index-assessed-by-drewry',
    reviewer: EVIDENCE_REVIEWER,
    reviewDue: '2026-09-17',
    note: 'Weekly assessment. Source: docs/research-notes-2026-09-16-europe-rail-and-indices.md S7.',
  },
  {
    id: 'c-idx-wci-sh-rtm',
    claim: 'Drewry WCI Shanghai→Rotterdam stood at $3,997 per 40ft on 2026-09-10.',
    entity: 'Drewry WCI — Shanghai→Rotterdam',
    extractedValue: '$3,997/40ft (−2% w/w)',
    region: 'china-europe',
    category: 'index',
    asOf: '2026-09-10',
    confidence: 'HIGH',
    sourceName: 'Drewry World Container Index',
    sourceUrl: 'https://www.drewry.co.uk/supply-chain-advisors/supply-chain-expertise/world-container-index-assessed-by-drewry',
    reviewer: EVIDENCE_REVIEWER,
    reviewDue: '2026-09-17',
    note: 'Weekly assessment. Source: docs/research-notes-2026-09-16-europe-rail-and-indices.md S7.',
  },
  {
    id: 'c-idx-fbx11',
    claim: 'The Freightos Baltic Index FBX11 (China→Northern Europe) stood at $4,499/FEU on 2026-09-16.',
    entity: 'FBX — FBX11 China→Northern Europe',
    extractedValue: '$4,499.00/FEU',
    region: 'china-europe',
    category: 'index',
    asOf: 'accessed 2026-09-16',
    confidence: 'HIGH',
    sourceName: 'Freightos Baltic Index (FBX) terminal',
    sourceUrl: 'https://www.freightos.com/enterprise/terminal/fbx-11-china-to-northern-europe',
    reviewer: EVIDENCE_REVIEWER,
    reviewDue: '2026-09-23',
    note: 'Live terminal value; the page prints no as-of date, so the access date is recorded as the snapshot. Source: docs/research-notes-2026-09-16-europe-rail-and-indices.md S8.',
  },
  {
    id: 'c-idx-xeneta-jeddah',
    claim: 'Xeneta put the China→Jeddah market-average spot rate at $10,870/FEU on 2026-09-10.',
    entity: 'Xeneta — China→Jeddah spot (40ft)',
    extractedValue: '$10,870/FEU (+256% vs 2026-02-28; above Covid-era peak)',
    region: 'china-gcc',
    category: 'index',
    asOf: '2026-09-10',
    confidence: 'HIGH',
    sourceName: 'Xeneta Weekly Ocean Update',
    sourceUrl: 'https://www.xeneta.com/news/xeneta-weekly-ocean-container-shipping-market-update-10.09.26',
    reviewer: EVIDENCE_REVIEWER,
    reviewDue: '2026-09-17',
    note: 'Weekly market-average. Source: docs/research-notes-2026-09-16-china-gcc-rates.md S1; also bound in src/data/rates.ts r-102.',
  },
  {
    id: 'c-idx-xeneta-kf',
    claim: 'Xeneta put the China→Khor al Fakkan spot rate at $10,626/FEU on 2026-09-10.',
    entity: 'Xeneta — China→Khor al Fakkan spot (40ft)',
    extractedValue: '$10,626/FEU (+479% vs 2026-02-28)',
    region: 'china-gcc',
    category: 'index',
    asOf: '2026-09-10',
    confidence: 'HIGH',
    sourceName: 'Xeneta Weekly Ocean Update',
    sourceUrl: 'https://www.xeneta.com/news/xeneta-weekly-ocean-container-shipping-market-update-10.09.26',
    reviewer: EVIDENCE_REVIEWER,
    reviewDue: '2026-09-17',
    note: 'Weekly market-average; used as upside signal for UAE lanes in src/data/rates.ts r-202.',
  },

  // ── Market structure ─────────────────────────────────────────
  {
    id: 'c-mkt-hormuz',
    claim: 'The Strait of Hormuz has been effectively closed to container vessels for 6+ months.',
    entity: 'Strait of Hormuz — container-vessel status',
    extractedValue: 'Closed 6+ months; Gulf volume re-routed via Jeddah / Khor al Fakkan land bridges',
    region: 'china-gcc',
    category: 'market-structure',
    asOf: '2026-09-10',
    confidence: 'HIGH',
    sourceName: 'Xeneta Weekly Ocean Update',
    sourceUrl: 'https://www.xeneta.com/news/xeneta-weekly-ocean-container-shipping-market-update-10.09.26',
    reviewer: EVIDENCE_REVIEWER,
    reviewDue: '2026-09-17',
    note: 'Source: docs/research-notes-2026-09-16-china-gcc-rates.md §1.',
  },
  {
    id: 'c-mkt-bab-el-mandeb',
    claim: 'Bab el-Mandeb weekly capacity was 212,636 TEU in August 2026.',
    entity: 'Bab el-Mandeb — weekly container capacity',
    extractedValue: '212,636 TEU (Aug 2026) vs 930,679 (Aug 2023) = 23% of pre-crisis',
    region: 'china-gcc',
    category: 'market-structure',
    asOf: '2026-09-10',
    confidence: 'HIGH',
    sourceName: 'Xeneta Weekly Ocean Update',
    sourceUrl: 'https://www.xeneta.com/news/xeneta-weekly-ocean-container-shipping-market-update-10.09.26',
    reviewer: EVIDENCE_REVIEWER,
    reviewDue: '2026-09-17',
    note: 'Source: docs/research-notes-2026-09-16-china-gcc-rates.md §1.',
  },
  {
    id: 'c-mkt-redsea-delta',
    claim: 'Red Sea vs Cape-of-Good-Hope routing differs by about 11 days.',
    entity: 'Red Sea vs Cape routing — transit delta',
    extractedValue: '≈ 11 days longer via Cape (China→Genoa example)',
    region: 'china-gcc',
    category: 'market-structure',
    asOf: '2026-09-10',
    confidence: 'MEDIUM',
    sourceName: 'Xeneta Weekly Ocean Update',
    sourceUrl: 'https://www.xeneta.com/news/xeneta-weekly-ocean-container-shipping-market-update-10.09.26',
    reviewer: EVIDENCE_REVIEWER,
    reviewDue: '2026-09-17',
    note: 'Indicative delta, route-dependent. Source: docs/research-notes-2026-09-16-china-gcc-rates.md §1.',
  },

  // ── Port throughput ──────────────────────────────────────────
  {
    id: 'c-port-jeddah-teu',
    claim: 'Jeddah Islamic Port handled about 4.9m TEU in 2023.',
    entity: 'Jeddah Islamic Port — container throughput',
    extractedValue: '≈ 4.9m TEU (2023)',
    region: 'saudi-arabia',
    category: 'port',
    asOf: '2023',
    confidence: 'MEDIUM',
    sourceName: 'Mawani — Saudi Ports Authority',
    sourceUrl: 'https://mawani.gov.sa',
    reviewer: EVIDENCE_REVIEWER,
    reviewDue: '2026-12-16',
    note: 'Annual figure; re-verify when 2024/2025 throughput is published. Recorded in src/data/gcc-ports.ts (jeddah specs).',
  },
  {
    id: 'c-port-jebel-ali-teu',
    claim: 'Jebel Ali handled about 14.5m TEU in 2023.',
    entity: 'Jebel Ali — container throughput',
    extractedValue: '≈ 14.5m TEU (2023)',
    region: 'united-arab-emirates',
    category: 'port',
    asOf: '2023',
    confidence: 'MEDIUM',
    sourceName: 'DP World',
    sourceUrl: 'https://www.dpworld.com',
    reviewer: EVIDENCE_REVIEWER,
    reviewDue: '2026-12-16',
    note: 'Annual figure; re-verify when newer throughput is published. Recorded in src/data/gcc-ports.ts (jebel-ali specs).',
  },

  // ── China→Europe rail ────────────────────────────────────────
  {
    id: 'c-rail-xian-de',
    claim: 'Xi\u2019an → Duisburg/Hamburg 40HQ station-to-station rail base was $4,000–4,800.',
    entity: 'China→Europe rail — Xi\u2019an→Duisburg/Hamburg rate',
    extractedValue: '$4,000–4,800 (40HQ, station-to-station base)',
    region: 'china-europe',
    category: 'rail',
    asOf: '2026-08 / H2 2026',
    confidence: 'MEDIUM',
    sourceName: 'goodhope86 price lists; caexp.net (Xi\u2019an platform)',
    sourceUrl: 'https://goodhope86.com/railway/price-fcl.html',
    reviewer: EVIDENCE_REVIEWER,
    reviewDue: '2026-10-16',
    note: 'Range spans the pre-August and H2-2026 price lists. Xi\u2019an platform reference index ¥32,272.80 ≈ $4,770 (CNY 6.7670, 2026-09-15). Source: docs/research-notes-2026-09-16-europe-rail-and-indices.md S10/S11.',
  },
  {
    id: 'c-rail-cq-de',
    claim: 'Chongqing → Duisburg 40HQ rail was $5,300 and → Hamburg $5,500.',
    entity: 'China→Europe rail — Chongqing→Duisburg/Hamburg rate',
    extractedValue: '$5,300–5,500 (40HQ, station-to-station base)',
    region: 'china-europe',
    category: 'rail',
    asOf: '2026-08',
    confidence: 'MEDIUM',
    sourceName: 'goodhope86 price lists',
    sourceUrl: 'https://goodhope86.com/railway/germany-price.html',
    reviewer: EVIDENCE_REVIEWER,
    reviewDue: '2026-10-16',
    note: 'Monthly-updated forwarder price sheets; no official rail index exists. Source: docs/research-notes-2026-09-16-europe-rail-and-indices.md S10.',
  },
  {
    id: 'c-rail-xian-transit',
    claim: 'Xi\u2019an → Duisburg terminal-to-terminal transit is about 12 days on the timetabled train.',
    entity: 'China→Europe rail — Xi\u2019an→Duisburg transit',
    extractedValue: '≈ 12 days (timetabled, 4 departures/wk); standard 15–20 days',
    region: 'china-europe',
    category: 'rail',
    asOf: 'accessed 2026-09-16',
    confidence: 'MEDIUM',
    sourceName: 'caexp.net (Xi\u2019an platform); cnr.cn report',
    sourceUrl: 'https://www.caexp.net/',
    reviewer: EVIDENCE_REVIEWER,
    reviewDue: '2026-10-16',
    note: 'Source: docs/research-notes-2026-09-16-europe-rail-and-indices.md S11/S14.',
  },
];

export const evidenceClaimCount = evidenceClaims.length;

export function claimsByCategory(category: EvidenceCategory): EvidenceClaim[] {
  return evidenceClaims.filter((claim) => claim.category === category);
}

export function claimsByRegion(region: EvidenceRegion): EvidenceClaim[] {
  return evidenceClaims.filter((claim) => claim.region === region);
}

export function claimById(id: string): EvidenceClaim | undefined {
  return evidenceClaims.find((claim) => claim.id === id);
}
