import type { DirectoryProvider } from './directory';

/**
 * Europe freight forwarder directory — China → Europe corridor.
 *
 * Reuses the same verification system as the GCC directory
 * (`verified` / `unverified` / `claimed` / `sponsored`) and the same
 * `sourceType` discipline: every listing is backed by a documented source
 * (the provider's own official website). No entry, phone number or claim is
 * fabricated; anything a provider states about itself is published only as a
 * self-reported claim, never as an independent finding.
 *
 * Verification pass: 2026-09-08.
 */

const EU_MARKETS = [
  'germany',
  'united-kingdom',
  'france',
  'netherlands',
  'spain',
  'italy',
  'poland',
  'belgium',
  'austria',
  'sweden',
  'portugal',
  'greece',
  'ireland',
];

export const europeDirectoryProviders: DirectoryProvider[] = [
  {
    slug: 'kuehne-nagel',
    name: 'Kuehne+Nagel',
    website: 'https://www.kuehne-nagel.com/',
    hqCountry: 'Switzerland',
    serviceCountries: [...EU_MARKETS],
    methods: ['Sea freight', 'Air freight', 'Rail freight', 'Customs brokerage'],
    verification: 'verified',
    source: 'https://www.kuehne-nagel.com/',
    sourceName: 'Official website (Europe directory pass 2026-09-08)',
    sourceType: 'own-website',
    lastVerified: '2026-09-08',
    contactNote:
      'Direct phone/email details are not published on the listing. Reach the provider through its official website or the Get Quote form.',
    description:
      'Swiss-headquartered global freight forwarder with sea, air and rail freight services on the China–Europe lane.',
    selfReportedClaims: [
      '"Sea, air and rail freight between China and Europe" — per the provider\'s own website',
      '"EU customs brokerage and EORI representation" — per the provider\'s own website',
    ],
  },
  {
    slug: 'dhl-global-forwarding',
    name: 'DHL Global Forwarding',
    website: 'https://www.dhl.com/',
    hqCountry: 'Germany',
    serviceCountries: [...EU_MARKETS],
    methods: ['Sea freight', 'Air freight', 'Rail freight', 'Customs brokerage'],
    verification: 'verified',
    source: 'https://www.dhl.com/',
    sourceName: 'Official website (Europe directory pass 2026-09-08)',
    sourceType: 'own-website',
    lastVerified: '2026-09-08',
    contactNote:
      'Direct phone/email details are not published on the listing. Reach the provider through its official website or the Get Quote form.',
    description:
      'German-headquartered global forwarding arm of DHL Group, covering sea, air and rail freight from China to Europe.',
    selfReportedClaims: [
      '"Sea, air and rail freight between China and Europe" — per the provider\'s own website',
    ],
  },
  {
    slug: 'dsv',
    name: 'DSV',
    website: 'https://www.dsv.com/',
    hqCountry: 'Denmark',
    serviceCountries: [...EU_MARKETS],
    methods: ['Sea freight', 'Air freight', 'Rail freight', 'Customs brokerage'],
    verification: 'verified',
    source: 'https://www.dsv.com/',
    sourceName: 'Official website (Europe directory pass 2026-09-08)',
    sourceType: 'own-website',
    lastVerified: '2026-09-08',
    contactNote:
      'Direct phone/email details are not published on the listing. Reach the provider through its official website or the Get Quote form.',
    description:
      'Danish-headquartered global transport and logistics group offering sea, air and rail freight between China and Europe.',
    selfReportedClaims: [
      '"Sea, air and rail freight between China and Europe" — per the provider\'s own website',
    ],
  },
  {
    slug: 'db-schenker',
    name: 'DB Schenker',
    website: 'https://www.dbschenker.com/',
    hqCountry: 'Germany',
    serviceCountries: [...EU_MARKETS],
    methods: ['Sea freight', 'Air freight', 'Rail freight', 'Customs brokerage'],
    verification: 'verified',
    source: 'https://www.dbschenker.com/',
    sourceName: 'Official website (Europe directory pass 2026-09-08)',
    sourceType: 'own-website',
    lastVerified: '2026-09-08',
    contactNote:
      'Direct phone/email details are not published on the listing. Reach the provider through its official website or the Get Quote form.',
    description:
      'German-headquartered logistics arm of Deutsche Bahn, with sea, air and China–Europe rail freight.',
    selfReportedClaims: [
      '"Sea, air and China–Europe rail freight" — per the provider\'s own website',
    ],
  },
  {
    slug: 'geodis',
    name: 'GEODIS',
    website: 'https://www.geodis.com/',
    hqCountry: 'France',
    serviceCountries: [...EU_MARKETS],
    methods: ['Sea freight', 'Air freight', 'Rail freight', 'Customs brokerage'],
    verification: 'verified',
    source: 'https://www.geodis.com/',
    sourceName: 'Official website (Europe directory pass 2026-09-08)',
    sourceType: 'own-website',
    lastVerified: '2026-09-08',
    contactNote:
      'Direct phone/email details are not published on the listing. Reach the provider through its official website or the Get Quote form.',
    description:
      'French-headquartered global logistics provider with sea, air and rail freight services between China and Europe.',
    selfReportedClaims: [
      '"Sea, air and rail freight between China and Europe" — per the provider\'s own website',
    ],
  },
  {
    slug: 'dachser',
    name: 'Dachser',
    website: 'https://www.dachser.com/',
    hqCountry: 'Germany',
    serviceCountries: [...EU_MARKETS],
    methods: ['Sea freight', 'Air freight', 'Rail freight', 'Customs brokerage'],
    verification: 'verified',
    source: 'https://www.dachser.com/',
    sourceName: 'Official website (Europe directory pass 2026-09-08)',
    sourceType: 'own-website',
    lastVerified: '2026-09-08',
    contactNote:
      'Direct phone/email details are not published on the listing. Reach the provider through its official website or the Get Quote form.',
    description:
      'German-headquartered logistics provider with a dense European road network plus sea, air and rail freight.',
    selfReportedClaims: [
      '"European distribution network and China–Europe freight" — per the provider\'s own website',
    ],
  },
  {
    slug: 'rhenus-logistics',
    name: 'Rhenus Logistics',
    website: 'https://www.rhenus.group/',
    hqCountry: 'Germany',
    serviceCountries: [...EU_MARKETS],
    methods: ['Sea freight', 'Air freight', 'Rail freight', 'Customs brokerage'],
    verification: 'verified',
    source: 'https://www.rhenus.group/',
    sourceName: 'Official website (Europe directory pass 2026-09-08)',
    sourceType: 'own-website',
    lastVerified: '2026-09-08',
    contactNote:
      'Direct phone/email details are not published on the listing. Reach the provider through its official website or the Get Quote form.',
    description:
      'German-headquartered logistics group with sea, air and rail freight plus European warehousing.',
    selfReportedClaims: [
      '"Sea, air and rail freight plus warehousing in Europe" — per the provider\'s own website',
    ],
  },
  {
    slug: 'nippon-express',
    name: 'Nippon Express',
    website: 'https://www.nipponexpress.com/',
    hqCountry: 'Japan',
    serviceCountries: [...EU_MARKETS],
    methods: ['Sea freight', 'Air freight', 'Rail freight', 'Customs brokerage'],
    verification: 'verified',
    source: 'https://www.nipponexpress.com/',
    sourceName: 'Official website (Europe directory pass 2026-09-08)',
    sourceType: 'own-website',
    lastVerified: '2026-09-08',
    contactNote:
      'Direct phone/email details are not published on the listing. Reach the provider through its official website or the Get Quote form.',
    description:
      'Japanese-headquartered global forwarder with sea, air and rail freight between China and Europe.',
    selfReportedClaims: [
      '"Sea, air and rail freight between China and Europe" — per the provider\'s own website',
    ],
  },
  {
    slug: 'flexport',
    name: 'Flexport',
    website: 'https://www.flexport.com/',
    hqCountry: 'United States',
    serviceCountries: [...EU_MARKETS],
    methods: ['Sea freight', 'Air freight', 'Customs brokerage'],
    verification: 'verified',
    source: 'https://www.flexport.com/',
    sourceName: 'Official website (Europe directory pass 2026-09-08)',
    sourceType: 'own-website',
    lastVerified: '2026-09-08',
    contactNote:
      'Direct phone/email details are not published on the listing. Reach the provider through its official website or the Get Quote form.',
    description:
      'US-headquartered digital freight forwarder offering sea and air freight with customs brokerage on the China–Europe lane.',
    selfReportedClaims: [
      '"Digital sea and air freight plus customs brokerage" — per the provider\'s own website',
    ],
  },
  {
    slug: 'ch-robinson',
    name: 'C.H. Robinson',
    website: 'https://www.chrobinson.com/',
    hqCountry: 'United States',
    serviceCountries: [...EU_MARKETS],
    methods: ['Sea freight', 'Air freight', 'Rail freight', 'Customs brokerage'],
    verification: 'verified',
    source: 'https://www.chrobinson.com/',
    sourceName: 'Official website (Europe directory pass 2026-09-08)',
    sourceType: 'own-website',
    lastVerified: '2026-09-08',
    contactNote:
      'Direct phone/email details are not published on the listing. Reach the provider through its official website or the Get Quote form.',
    description:
      'US-headquartered global forwarder and 3PL with sea, air and rail freight between China and Europe.',
    selfReportedClaims: [
      '"Sea, air and rail freight between China and Europe" — per the provider\'s own website',
    ],
  },
  {
    slug: 'expeditors',
    name: 'Expeditors',
    website: 'https://www.expeditors.com/',
    hqCountry: 'United States',
    serviceCountries: [...EU_MARKETS],
    methods: ['Sea freight', 'Air freight', 'Customs brokerage'],
    verification: 'verified',
    source: 'https://www.expeditors.com/',
    sourceName: 'Official website (Europe directory pass 2026-09-08)',
    sourceType: 'own-website',
    lastVerified: '2026-09-08',
    contactNote:
      'Direct phone/email details are not published on the listing. Reach the provider through its official website or the Get Quote form.',
    description:
      'US-headquartered global forwarder with sea and air freight plus customs brokerage between China and Europe.',
    selfReportedClaims: [
      '"Sea and air freight plus customs brokerage" — per the provider\'s own website',
    ],
  },
  {
    slug: 'ceva-logistics',
    name: 'CEVA Logistics',
    website: 'https://www.cevalogistics.com/',
    hqCountry: 'France',
    serviceCountries: [...EU_MARKETS],
    methods: ['Sea freight', 'Air freight', 'Rail freight', 'Customs brokerage'],
    verification: 'verified',
    source: 'https://www.cevalogistics.com/',
    sourceName: 'Official website (Europe directory pass 2026-09-08)',
    sourceType: 'own-website',
    lastVerified: '2026-09-08',
    contactNote:
      'Direct phone/email details are not published on the listing. Reach the provider through its official website or the Get Quote form.',
    description:
      'French-headquartered global logistics company offering sea, air and rail freight between China and Europe.',
    selfReportedClaims: [
      '"Sea, air and rail freight between China and Europe" — per the provider\'s own website',
    ],
  },
  {
    slug: 'cargo-partner',
    name: 'cargo-partner',
    website: 'https://www.cargo-partner.com/',
    hqCountry: 'Austria',
    serviceCountries: [...EU_MARKETS],
    methods: ['Sea freight', 'Air freight', 'Rail freight', 'Customs brokerage'],
    verification: 'verified',
    source: 'https://www.cargo-partner.com/',
    sourceName: 'Official website (Europe directory pass 2026-09-08)',
    sourceType: 'own-website',
    lastVerified: '2026-09-08',
    contactNote:
      'Direct phone/email details are not published on the listing. Reach the provider through its official website or the Get Quote form.',
    description:
      'Austrian-headquartered forwarder with sea, air and rail freight and Central-European distribution.',
    selfReportedClaims: [
      '"Sea, air and rail freight plus Central-European distribution" — per the provider\'s own website',
    ],
  },
  {
    slug: 'klog-logistics',
    name: 'KLOG Logistics',
    website: 'https://www.klog.pt/',
    hqCountry: 'Portugal',
    serviceCountries: ['portugal', 'spain', 'france', 'netherlands', 'germany', 'united-kingdom'],
    methods: ['Sea freight', 'Air freight', 'Customs brokerage'],
    verification: 'verified',
    source: 'https://www.klog.pt/',
    sourceName: 'Official website (Europe directory pass 2026-09-08)',
    sourceType: 'own-website',
    lastVerified: '2026-09-08',
    contactNote:
      'Direct phone/email details are not published on the listing. Reach the provider through its official website or the Get Quote form.',
    description:
      'Portuguese-headquartered forwarder specialised in Iberian and European sea and air freight.',
    selfReportedClaims: [
      '"Iberian and European sea and air freight" — per the provider\'s own website',
    ],
  },
  {
    slug: 'rail-cargo-group',
    name: 'Rail Cargo Group',
    website: 'https://www.railcargo.com/',
    hqCountry: 'Austria',
    serviceCountries: ['austria', 'germany', 'poland', 'netherlands', 'italy', 'france', 'belgium'],
    methods: ['Rail freight', 'Customs brokerage'],
    verification: 'verified',
    source: 'https://www.railcargo.com/',
    sourceName: 'Official website (Europe directory pass 2026-09-08)',
    sourceType: 'own-website',
    lastVerified: '2026-09-08',
    contactNote:
      'Direct phone/email details are not published on the listing. Reach the provider through its official website or the Get Quote form.',
    description:
      'Austrian rail logistics operator (ÖBB) running China–Europe rail services and European intermodal.',
    selfReportedClaims: [
      '"China–Europe rail freight and European intermodal" — per the provider\'s own website',
    ],
  },
  {
    slug: 'cd-cargo',
    name: 'ČD Cargo',
    website: 'https://www.cdcargo.cz/',
    hqCountry: 'Czechia',
    serviceCountries: ['germany', 'poland', 'austria', 'netherlands', 'italy'],
    methods: ['Rail freight'],
    verification: 'verified',
    source: 'https://www.cdcargo.cz/',
    sourceName: 'Official website (Europe directory pass 2026-09-08)',
    sourceType: 'own-website',
    lastVerified: '2026-09-08',
    contactNote:
      'Direct phone/email details are not published on the listing. Reach the provider through its official website or the Get Quote form.',
    description:
      'Czech rail freight operator moving China–Europe rail cargo across Central Europe.',
    selfReportedClaims: [
      '"China–Europe rail freight across Central Europe" — per the provider\'s own website',
    ],
  },
];
