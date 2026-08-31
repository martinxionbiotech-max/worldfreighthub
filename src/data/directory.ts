export type VerificationStatus = 'verified' | 'unverified' | 'claimed' | 'sponsored';

export interface DirectoryProvider {
  slug: string;
  name: string;
  nameZh?: string;
  website: string;
  hqCountry: string;
  serviceCountries: string[];
  methods: string[];
  platformFocus?: string[];
  verification: VerificationStatus;
  source: string;
  sourceName: string;
  lastVerified: string;
  contactNote: string;
  description: string;
  selfReportedClaims?: string[];
}

export const directoryProviders: DirectoryProvider[] = [
  {
    slug: 'guangzhou-anshida',
    name: 'Guangzhou Anshida',
    nameZh: '广州安时达',
    website: 'https://www.ontaskksa.com/',
    hqCountry: 'China',
    serviceCountries: ['saudi-arabia', 'united-arab-emirates', 'kuwait', 'qatar', 'oman', 'yemen'],
    methods: [
      'DDP double-clearance (tax-inclusive door-to-door)',
      'Sea freight',
      'Air freight',
      'Last-mile delivery',
    ],
    platformFocus: ['Amazon FBA', 'Noon'],
    verification: 'unverified',
    source: 'https://www.ontaskksa.com/',
    sourceName: 'Guangzhou Anshida official site (found in research pass 2026-08-30)',
    lastVerified: '2026-09-01',
    contactNote:
      'Contact details (phone / email / address) not yet independently verified — none are published until confirmed.',
    description:
      'Chinese freight forwarder advertising double-clearance, tax-inclusive (DDP) door-to-door services to the Gulf.',
    selfReportedClaims: [
      '"20 years Saudi double-clearance experience" — self-reported on their site, not independently verified',
      'Serves Saudi Arabia, UAE, Kuwait, Qatar, Oman, Yemen — self-reported',
      'Amazon and Noon platform warehouse delivery — self-reported',
    ],
  },
  {
    slug: 'guangzhou-sanqi-international-freight-forwarding',
    name: 'Guangzhou Sanqi International Freight Forwarding',
    nameZh: '广州三其国际货运代理',
    website: '',
    hqCountry: 'China',
    serviceCountries: ['saudi-arabia'],
    methods: ['DDP door-to-door'],
    verification: 'unverified',
    source: 'https://www.globalimporter.net/cdetail_753_8551690.html',
    sourceName: 'GlobalImporter marketplace listing (research pass 2026-08-30)',
    lastVerified: '2026-09-01',
    contactNote: 'Website and contact details not verified. Listing held pending confirmation.',
    description:
      'Chinese freight forwarder referenced in a marketplace listing with a Guangzhou/Shenzhen → Saudi DDP door-to-door benchmark of ~45 RMB/kg.',
    selfReportedClaims: [
      'Guangzhou/Shenzhen → Saudi DDP at ~45 RMB/kg — marketplace listing, unverified snapshot',
    ],
  },
];

export function getProviderBySlug(slug: string): DirectoryProvider | undefined {
  return directoryProviders.find((provider) => provider.slug === slug);
}
