export type IntelligenceConfidence = 'HIGH' | 'MEDIUM' | 'LOW';

export interface IntelligenceItem {
  slug: string;
  title: string;
  whatChanged: string;
  whyItMatters: string;
  affectedRoutes: string[];
  affectedCountries: string[];
  evidence: string;
  sourceName?: string;
  date: string;
  confidence: IntelligenceConfidence;
  commercialImpact: string;
  updated: string;
}

export const intelligenceItems: IntelligenceItem[] = [
  {
    slug: 'red-sea-rerouting',
    title: 'Red Sea disruption persists — carriers still split between Red Sea and Cape routings',
    whatChanged:
      'The Red Sea security crisis (Houthi attacks on shipping) since late 2023 continues to force some carriers around the Cape of Good Hope, making Jeddah-lane transit times and spot rates volatile.',
    whyItMatters:
      'On the same China→Jeddah lane, Red Sea direct sailings and Cape reroutings can differ by several days, so the quote range widens materially.',
    affectedRoutes: ['shanghai-jeddah', 'ningbo-zhoushan-jeddah'],
    affectedCountries: ['saudi-arabia'],
    evidence:
      'The Jeddah and Dammam port profiles in src/data/gcc-ports.ts record the Houthi attacks on Red Sea shipping since late 2023, the resulting Cape of Good Hope rerouting, and the impact on transit times and spot rates.',
    sourceName: 'Mawani — Saudi Ports Authority',
    date: '2026-09',
    confidence: 'HIGH',
    commercialImpact:
      'When quoting Jeddah, confirm with the carrier whether the sailing transits the Red Sea or the Cape; eastern-province or Riyadh cargo can also be priced via Dammam, whose Arabian-Gulf routing is unaffected.',
    updated: '2026-09-12',
  },
  {
    slug: 'qatar-vat-coming',
    title: 'Qatar e-invoicing law (May 2026) signals VAT is coming',
    whatChanged:
      'Qatar passed an e-invoicing law in May 2026, which is recorded as a signal that VAT is coming and is widely expected at about 5%.',
    whyItMatters:
      "Qatar's current 0% VAT makes it the GCC's lowest-tax import market; that window is closing.",
    affectedRoutes: ['shanghai-hamad', 'ningbo-zhoushan-hamad', 'shenzhen-hamad'],
    affectedCountries: ['qatar'],
    evidence:
      'The Qatar country profile in src/data/gcc-countries.ts records in vatNote: "No VAT yet — expected to implement ~5% (e-invoicing law passed May 2026)."',
    sourceName: 'Qatar Customs (General Authority of Customs)',
    date: '2026-09',
    confidence: 'MEDIUM',
    commercialImpact:
      'Long-term landed-cost models should assume 5% VAT; near-term shipments can still use the 0% VAT advantage, but confirm the implementation timetable with a local agent.',
    updated: '2026-09-12',
  },
  {
    slug: 'saudi-agricultural-tariffs',
    title: 'Saudi agricultural tariffs raised to 5–15% across 51 lines (June 2026)',
    whatChanged:
      'From June 2026, Saudi Arabia raised tariffs on 51 agricultural and food lines to 5–15%.',
    whyItMatters:
      'Agricultural and food importers face higher CIF-based duty costs.',
    affectedRoutes: [
      'shanghai-jeddah',
      'ningbo-zhoushan-jeddah',
      'shenzhen-jeddah',
      'shanghai-dammam',
      'ningbo-zhoushan-dammam',
      'shenzhen-dammam',
    ],
    affectedCountries: ['saudi-arabia'],
    evidence:
      'The Saudi Arabia country profile in src/data/gcc-countries.ts records in dutyNote: "Agricultural and food tariffs were raised to 5–15% across 51 lines in June 2026."',
    sourceName: 'ZATCA — Saudi Customs / Tax Authority',
    date: '2026-09',
    confidence: 'HIGH',
    commercialImpact:
      'Agricultural and food importers should recalculate landed cost and confirm the HS-code-specific duty rate before SABER filing.',
    updated: '2026-09-12',
  },
  {
    slug: 'saudi-vat-15',
    title: 'Saudi VAT at 15% — the highest landed-cost multiplier in the GCC',
    whatChanged:
      'Saudi Arabia has charged 15% VAT since July 2020, up from 5%.',
    whyItMatters:
      'The 15% VAT plus 5% duty takes landed cost 20%+ above the invoice value.',
    affectedRoutes: [
      'shanghai-jeddah',
      'ningbo-zhoushan-jeddah',
      'shenzhen-jeddah',
      'shanghai-dammam',
      'ningbo-zhoushan-dammam',
      'shenzhen-dammam',
    ],
    affectedCountries: ['saudi-arabia'],
    evidence:
      'The Saudi Arabia country profile in src/data/gcc-countries.ts records in vatNote: "15% since July 2020 (raised from 5%)."',
    sourceName: 'ZATCA — Saudi Customs / Tax Authority',
    date: '2026-09',
    confidence: 'HIGH',
    commercialImpact:
      'Model Saudi landed cost as CIF value × 1.2075 (5% duty + 15% VAT); do not quote from invoice value alone.',
    updated: '2026-09-12',
  },
];
