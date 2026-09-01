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
  {
    slug: 'dtfu-logistics',
    name: 'DTFU Logistics',
    website: 'https://www.dtfulogistics.com/',
    hqCountry: 'China',
    serviceCountries: ['saudi-arabia', 'united-arab-emirates'],
    methods: ['Sea freight', 'Air freight', 'Warehouse & distribution', 'Customs clearance', 'Amazon FBA'],
    platformFocus: ['Amazon FBA'],
    verification: 'unverified',
    source: 'https://www.dtfulogistics.com/',
    sourceName: 'DTFU Logistics official site (Firecrawl scrape 2026-09-01)',
    lastVerified: '2026-09-01',
    contactNote: 'Company identity, HQ and contact details not yet independently verified.',
    description:
      'China-based freight forwarder offering sea and air freight, warehousing, customs clearance and Amazon FBA shipping from China to worldwide destinations, with a published China-to-Saudi DDP guide.',
    selfReportedClaims: [
      'China to worldwide door-to-door coverage — self-reported',
      'Amazon FBA and customs clearance services — self-reported',
    ],
  },
  {
    slug: 'gcc-freight',
    name: 'GCC Freight',
    website: 'https://gcc-freight.com/',
    hqCountry: 'China',
    serviceCountries: ['saudi-arabia', 'united-arab-emirates', 'kuwait', 'qatar', 'oman', 'bahrain'],
    methods: ['Sea freight (FCL/LCL)', 'Air freight', 'DDP customs clearance', 'SABER/ESMA certification support'],
    verification: 'unverified',
    source: 'https://gcc-freight.com/',
    sourceName: 'GCC Freight official site (Firecrawl scrape 2026-09-01)',
    lastVerified: '2026-09-01',
    contactNote: 'Contact details not independently verified; site lists a WhatsApp number (+86 18825057036).',
    description:
      'Freight forwarder with a Chinese-language/Arabic site claiming 10+ years shipping from China to Gulf states, with a Jebel Ali (Dubai) free-zone warehouse and multi-currency settlement (AED/SAR/CNY).',
    selfReportedClaims: [
      '"10+ years experience shipping to the Gulf" — self-reported',
      '"100,000+ containers shipped" — self-reported',
      'Jebel Ali free-zone warehouse in Dubai — self-reported',
      'SABER and ESMA certification support — self-reported',
    ],
  },
  {
    slug: 'tonlexing',
    name: 'Tonlexing',
    website: 'https://www.tonlexing.com/',
    hqCountry: 'China',
    serviceCountries: ['saudi-arabia', 'united-arab-emirates'],
    methods: ['Air freight', 'Sea freight (FCL/LCL)', 'Rail freight', 'DDP door-to-door', 'Amazon FBA'],
    platformFocus: ['Amazon FBA'],
    verification: 'unverified',
    source: 'https://www.tonlexing.com/',
    sourceName: 'Tonlexing official site (Firecrawl scrape 2026-09-01)',
    lastVerified: '2026-09-01',
    contactNote: 'Company identity and contact details not yet independently verified.',
    description:
      'China-based freight forwarder marketing air, sea (FCL/LCL), rail and DDP shipping to 150+ countries, with a published China-to-Saudi DDP guide.',
    selfReportedClaims: [
      '"FMC Compliant" and "Licensed NVOCC" — self-reported',
      'China to 150+ countries — self-reported',
    ],
  },
  {
    slug: 'chinaddpshipping',
    name: 'ChinaDdpShipping',
    website: 'https://www.chinaddpshipping.com/',
    hqCountry: 'China',
    serviceCountries: ['saudi-arabia', 'united-arab-emirates'],
    methods: ['DDP shipping', 'Sea freight (LCL)', 'Air freight'],
    verification: 'unverified',
    source: 'https://www.chinaddpshipping.com/',
    sourceName: 'ChinaDdpShipping official site (Firecrawl scrape 2026-09-01)',
    lastVerified: '2026-09-01',
    contactNote: 'Company identity and contact details not yet independently verified.',
    description:
      'DDP-focused Chinese freight forwarder with route pages for China to North America, Europe and the Gulf, advertising tax-inclusive door-to-door LCL sea and air freight.',
    selfReportedClaims: [
      'DDP door-to-door with duties and taxes included — self-reported',
    ],
  },
  {
    slug: 'movff',
    name: 'MOVFF',
    website: 'https://movff.com/',
    hqCountry: 'China',
    serviceCountries: ['saudi-arabia', 'united-arab-emirates'],
    methods: ['Sea freight (FCL/LCL)', 'Air freight', 'DDP/DAP door-to-door', 'Inspection & certification', 'Amazon FBA'],
    platformFocus: ['Amazon FBA'],
    verification: 'unverified',
    source: 'https://movff.com/',
    sourceName: 'MOVFF official site (Firecrawl scrape 2026-09-01)',
    lastVerified: '2026-09-01',
    contactNote: 'Company identity and contact details not yet independently verified.',
    description:
      'China-based full-service freight forwarder describing itself as an Amazon-certified service provider with carrier agreements (Maersk/MSC/COSCO/UPS/DHL/FedEx) and 15+ consolidation warehouses across China.',
    selfReportedClaims: [
      'Amazon-certified SPN/ShipTrack/TSPN service provider — self-reported',
      'ISO9001, ISO27001, CNAS17020, AQSIQ certifications — self-reported',
      '15+ consolidation warehouses in Guangdong/Zhejiang/Qingdao — self-reported',
    ],
  },
  {
    slug: 'ddpchain',
    name: 'DDPCHAIN',
    website: 'https://ddpchain.com/',
    hqCountry: 'China',
    serviceCountries: ['saudi-arabia', 'united-arab-emirates'],
    methods: ['Air freight', 'Sea freight', 'Rail freight', 'Road freight', 'DDP door-to-door', 'Express courier'],
    verification: 'unverified',
    source: 'https://ddpchain.com/',
    sourceName: 'DDPCHAIN official site (Firecrawl scrape 2026-09-01)',
    lastVerified: '2026-09-01',
    contactNote: 'Site lists a WhatsApp/phone number (+86 180 2548 7644); identity not independently verified.',
    description:
      'China shipping agent and freight forwarder advertising air, sea, rail, road and DDP shipping with a China-to-Saudi cost guide (DDP air ~33-48 RMB/kg, DDP sea from ~1,600 RMB/CBM).',
    selfReportedClaims: [
      '"12,500+ customers", "180+ countries", "8+ years experience" — self-reported',
      'China-to-Saudi DDP air ~33-48 RMB/kg, DDP sea from ~1,600 RMB/CBM — self-reported rate guide',
    ],
  },
  {
    slug: 'cargo-from-china-cfc',
    name: 'Cargo From China (CFC)',
    website: 'https://cargofromchina.com/',
    hqCountry: 'China',
    serviceCountries: ['saudi-arabia', 'united-arab-emirates'],
    methods: ['Sea freight (FCL/LCL)', 'Air freight', 'Rail freight', 'Courier services'],
    verification: 'unverified',
    source: 'https://cargofromchina.com/',
    sourceName: 'Cargo From China official site (Firecrawl scrape 2026-09-01)',
    lastVerified: '2026-09-01',
    contactNote: 'Company identity and contact details not yet independently verified.',
    description:
      'China-based shipping agent, freight forwarder and 3PL ("Cargo From China Limited / CFC") with a China-to-Saudi route page covering sea, air, rail and courier.',
    selfReportedClaims: [
      'China to Saudi sea freight Shenzhen→Jeddah ~$2,500/40HC (indicative, not a live quote) — self-reported',
    ],
  },
  {
    slug: 'jms-logistics-suzhou',
    name: 'JMS Supply Chain Management (Suzhou)',
    nameZh: '苏州 JMS 供应链管理',
    website: 'https://en.jmslogistics.com.cn/',
    hqCountry: 'China',
    serviceCountries: ['saudi-arabia'],
    methods: ['Freight forwarding', 'Road transportation (GCC)', 'Customs clearance'],
    verification: 'unverified',
    source: 'https://en.jmslogistics.com.cn/region/china-to-saudi-arabia',
    sourceName: 'JMS Logistics official site (Firecrawl scrape 2026-09-01)',
    lastVerified: '2026-09-01',
    contactNote: 'Company identity and contact details not yet independently verified.',
    description:
      'Suzhou-based supply chain management company offering China-to-Saudi freight forwarding plus road transportation across Saudi Arabia and other GCC countries.',
    selfReportedClaims: [
      'Road transportation across Saudi Arabia and GCC — self-reported',
    ],
  },
  {
    slug: 'shenzhen-junqing-basenton',
    name: 'Shenzhen Junqing (Basenton)',
    nameZh: '深圳俊清 / Basenton',
    website: 'https://www.sz-junqing.com/',
    hqCountry: 'China',
    serviceCountries: ['saudi-arabia'],
    methods: ['Air freight', 'Ocean freight', 'DDP door-to-door'],
    verification: 'unverified',
    source: 'https://www.sz-junqing.com/news/ddp-shipping-from-china-to-saudi-arabia.html',
    sourceName: 'Shenzhen Junqing official site (Firecrawl scrape 2026-09-01)',
    lastVerified: '2026-09-01',
    contactNote: 'Company identity and contact details not yet independently verified.',
    description:
      'Shenzhen-based international freight forwarder (also referenced as Basenton Ocean Freight) with multilingual route pages including a China-to-Saudi DDP cost guide.',
    selfReportedClaims: [
      'Shanghai/Shenzhen → Yanbu (Red Sea) transit ~25-35 days — self-reported guide',
    ],
  },
  {
    slug: 'gcc-freights',
    name: 'GCC Freights',
    website: 'https://gccfreights.com/',
    hqCountry: 'Saudi Arabia',
    serviceCountries: ['saudi-arabia', 'bahrain'],
    methods: ['Cross-border trucking', 'Customs clearance', 'Air & sea freight', 'SABER/ZATCA compliance'],
    verification: 'unverified',
    source: 'https://gccfreights.com/',
    sourceName: 'GCC Freights official site (Firecrawl scrape 2026-09-01)',
    lastVerified: '2026-09-01',
    contactNote: 'Contact details not independently verified; site claims offices in Al Khobar (KSA) and Manama (Bahrain).',
    description:
      'Destination-side freight forwarder with stated physical offices in Al Khobar (Saudi Arabia) and Manama (Bahrain), specialising in the King Fahd Causeway land lane and Saudi import compliance.',
    selfReportedClaims: [
      'Physical offices in Al Khobar, KSA and Manama, Bahrain — self-reported',
      'SABER & ZATCA compliance and King Fahd Causeway land freight — self-reported',
    ],
  },
  {
    slug: 'bafco-international-shipping',
    name: 'BAFCO International Shipping and Logistics',
    website: '',
    hqCountry: 'Saudi Arabia',
    serviceCountries: ['saudi-arabia'],
    methods: ['Sea freight', 'Air freight', 'Customs clearance', 'Warehousing'],
    verification: 'unverified',
    source: 'https://en.jmslogistics.com.cn/region/china-to-saudi-arabia',
    sourceName: 'Referenced in JMS China-to-Saudi route page (research pass 2026-09-01)',
    lastVerified: '2026-09-01',
    contactNote: 'Website and contact details not yet located or verified.',
    description:
      'Saudi Arabia-based freight forwarder (founded 1990) with head office in Jeddah and branches in Riyadh, Dammam, Rabigh and Jubail, plus a Dubai branch.',
    selfReportedClaims: [
      'Founded 1990, ~20 locations, 1,300+ employees, Jeddah HQ — as stated in a third-party route page, unverified',
    ],
  },
  {
    slug: 'arabco',
    name: 'ARABCO',
    website: '',
    hqCountry: 'Saudi Arabia',
    serviceCountries: ['saudi-arabia'],
    methods: ['Warehousing & distribution', 'Customs clearance', 'Freight forwarding', 'Project cargo'],
    verification: 'unverified',
    source: 'https://en.jmslogistics.com.cn/region/china-to-saudi-arabia',
    sourceName: 'Referenced in JMS China-to-Saudi route page (research pass 2026-09-01)',
    lastVerified: '2026-09-01',
    contactNote: 'Website and contact details not yet located or verified.',
    description:
      'Saudi Arabia-based shipping and logistics company offering warehousing, distribution, insurance brokerage, documentation, customs clearance and project cargo handling.',
    selfReportedClaims: [
      'One of the top shipping companies in Saudi Arabia — as stated in a third-party route page, unverified',
    ],
  },
  {
    slug: 'oriental-commercial-shipping',
    name: 'Oriental Commercial and Shipping Company',
    website: '',
    hqCountry: 'Saudi Arabia',
    serviceCountries: ['saudi-arabia'],
    methods: ['Sea freight', 'Shipping agency', 'Customs clearance'],
    verification: 'unverified',
    source: 'https://en.jmslogistics.com.cn/region/china-to-saudi-arabia',
    sourceName: 'Referenced in JMS China-to-Saudi route page (research pass 2026-09-01)',
    lastVerified: '2026-09-01',
    contactNote: 'Website and contact details not yet located or verified.',
    description:
      'Long-established Saudi shipping service provider (formed 1956) described as one of the largest in the kingdom.',
    selfReportedClaims: [
      'Formed 1956, one of the largest Saudi shipping providers — as stated in a third-party route page, unverified',
    ],
  },
  {
    slug: 'honor-ocean',
    name: 'Honour Ocean International Logistics (Shenzhen)',
    website: 'https://honourocean.en.made-in-china.com/',
    hqCountry: 'China',
    serviceCountries: ['saudi-arabia', 'united-arab-emirates'],
    methods: ['Sea freight', 'Air freight', 'DDP door-to-door'],
    verification: 'unverified',
    source: 'https://honourocean.en.made-in-china.com/',
    sourceName: 'Made-in-China supplier storefront (research pass 2026-09-01)',
    lastVerified: '2026-09-01',
    contactNote: 'Contact details not independently verified; listed via a Made-in-China storefront.',
    description:
      'China freight agent marketing cheap air and sea DDP door-to-door shipping from China to Saudi Arabia and the UAE via a Made-in-China storefront.',
    selfReportedClaims: [
      'China to Saudi/UAE DDP door-to-door — self-reported storefront listing',
      'NVOCC approved by China Ministry of Transport; SGS-audited supplier — self-reported',
    ],
  },
  {
    slug: 'zmc-express-cargo',
    name: 'ZMC Express Cargo',
    website: 'https://zmcexpress.com/',
    hqCountry: 'China',
    serviceCountries: ['united-arab-emirates', 'saudi-arabia', 'qatar', 'kuwait', 'oman', 'bahrain'],
    methods: ['Air freight', 'Sea freight', 'Land freight', 'DDP door-to-door'],
    verification: 'unverified',
    source: 'https://zmcexpress.com/',
    sourceName: 'ZMC Express Cargo official site (Firecrawl scrape 2026-09-01)',
    lastVerified: '2026-09-01',
    contactNote: 'Contact details not independently verified; site lists Lebanon and Jebel Ali (Dubai) branch addresses.',
    description:
      'Freight forwarder focused on the Middle East with stated branches in Jebel Ali (Dubai) and Lebanon, offering air, sea and land freight plus DDP door-to-door.',
    selfReportedClaims: [
      'Jebel Ali (Dubai) and Lebanon branches — self-reported',
      'Middle East and Iraq coverage — self-reported',
    ],
  },
  {
    slug: 'senghor-logistics',
    name: 'Senghor Logistics',
    website: 'https://www.senghorshipping.com/',
    hqCountry: 'China',
    serviceCountries: ['united-arab-emirates'],
    methods: ['Sea freight', 'Air freight', 'DDU/DDP/DAP door-to-door'],
    verification: 'unverified',
    source: 'https://www.senghorshipping.com/',
    sourceName: 'Senghor Logistics official site (Firecrawl scrape 2026-09-01)',
    lastVerified: '2026-09-01',
    contactNote: 'Company identity and contact details not yet independently verified.',
    description:
      'China-based freight forwarder offering sea and air door-to-door (DDU/DDP/DAP) from China to Dubai/UAE, loading from Shenzhen, Guangzhou, Ningbo, Shanghai and other major ports.',
    selfReportedClaims: [
      '11+ years sea/air door-to-door (DDU/DDP/DAP) — self-reported',
    ],
  },
  {
    slug: 'al-fares-cargo-service',
    name: 'Al Fares Cargo Service',
    website: 'https://www.alfarescargo.com/',
    hqCountry: 'United Arab Emirates',
    serviceCountries: ['united-arab-emirates'],
    methods: ['Air freight', 'Sea freight', 'Customs clearance', 'Packaging', 'Cargo insurance'],
    verification: 'unverified',
    source: 'https://www.alfarescargo.com/',
    sourceName: 'Al Fares Cargo Service official site (Firecrawl scrape 2026-09-01)',
    lastVerified: '2026-09-01',
    contactNote: 'Company identity and contact details not yet independently verified.',
    description:
      'UAE-based cargo service specialising in China-to-UAE/GCC air and sea freight, with packaging, customs clearance and cargo insurance.',
    selfReportedClaims: [
      'China to UAE/GCC air and sea freight coverage — self-reported',
    ],
  },
  {
    slug: 'docshipper',
    name: 'DocShipper',
    website: 'https://china.docshipper.com/',
    hqCountry: 'France',
    serviceCountries: ['united-arab-emirates', 'saudi-arabia'],
    methods: ['Door-to-door', 'Procurement', 'Sea / air / rail / road freight', 'Customs clearance'],
    verification: 'unverified',
    source: 'https://china.docshipper.com/',
    sourceName: 'DocShipper China site (Firecrawl scrape 2026-09-01)',
    lastVerified: '2026-09-01',
    contactNote: 'Company identity and contact details not yet independently verified.',
    description:
      'Global logistics and procurement group with a dedicated China desk, offering door-to-door shipping from China to the UAE and other GCC destinations across all modes.',
    selfReportedClaims: [
      '9,200+ operations for 6,000+ clients — self-reported',
    ],
  },
  {
    slug: 'sino-shipping',
    name: 'SINO Shipping',
    website: 'https://www.sino-shipping.com/',
    hqCountry: 'China',
    serviceCountries: ['united-arab-emirates', 'saudi-arabia', 'qatar', 'kuwait', 'oman', 'bahrain'],
    methods: ['Sea freight', 'Air freight', 'Express courier', 'DDP door-to-door'],
    verification: 'unverified',
    source: 'https://www.sino-shipping.com/',
    sourceName: 'SINO Shipping official site (research pass 2026-09-01)',
    lastVerified: '2026-09-01',
    contactNote: 'Contact (info@sino-shipping.com) listed on site; identity not independently verified.',
    description:
      'China-based international freight forwarder and customs broker with 35+ years of experience, serving GCC lanes including the UAE and Qatar.',
    selfReportedClaims: [
      '35+ years experience — self-reported',
    ],
  },
  {
    slug: 'china-global-freight',
    name: 'China Global Freight',
    website: 'https://chinaglobalfreight.com/',
    hqCountry: 'China',
    serviceCountries: ['saudi-arabia', 'oman', 'qatar', 'bahrain', 'kuwait', 'united-arab-emirates'],
    methods: ['Sea freight', 'Air freight', 'DDP'],
    verification: 'unverified',
    source: 'https://chinaglobalfreight.com/',
    sourceName: 'China Global Freight official site (Firecrawl scrape 2026-09-01)',
    lastVerified: '2026-09-01',
    contactNote: 'Company identity and contact details not yet independently verified.',
    description:
      'China freight forwarder with stated connections in Saudi Arabia, Oman, Qatar, Bahrain and Kuwait, offering sea and air freight plus DDP.',
    selfReportedClaims: [
      '10 years experience; connections in Saudi/Oman/Qatar/Bahrain/Kuwait — self-reported',
      '30% shipping cost reduction, 98% repeat shippers — self-reported marketing figures',
    ],
  },
  {
    slug: 'hinda-international-logistic',
    name: 'HINDA International Logistic (Guangzhou)',
    nameZh: 'HINDA 国际物流（广州）',
    website: 'https://www.hindacargo.com/',
    hqCountry: 'China',
    serviceCountries: ['qatar', 'saudi-arabia', 'united-arab-emirates'],
    methods: ['Air freight', 'Sea freight'],
    verification: 'unverified',
    source: 'https://www.hindacargo.com/',
    sourceName: 'HINDA official site (Firecrawl scrape 2026-09-01)',
    lastVerified: '2026-09-01',
    contactNote: 'Contact details not independently verified; site lists a WhatsApp number (+86 13533420644).',
    description:
      'Guangzhou-based logistics company offering air freight to Doha (Qatar) and sea freight, with contracted rates from Hong Kong, Guangzhou, Shanghai, Beijing and Shenzhen.',
    selfReportedClaims: [
      'Air freight to Doha, Qatar with contracted rates — self-reported',
    ],
  },
];

export function getProviderBySlug(slug: string): DirectoryProvider | undefined {
  return directoryProviders.find((provider) => provider.slug === slug);
}
