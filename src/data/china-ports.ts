import type { Port } from './types';

export const chinaPorts: Port[] = [
  {
    slug: 'shanghai',
    name: 'Shanghai',
    country: 'China',
    countrySlug: 'china',
    type: 'seaport',
    unlocode: 'CNSHA',
    tldr:
      "The world's busiest container port — the default China loading hub for the Gulf corridor. Yangshan deep-water terminals handle the largest vessels; SIPG's automated Phase IV terminal is the biggest of its kind.",
    operator: 'Shanghai International Port Group (SIPG)',
    specs: [
      { label: 'Container throughput', value: '≈ 47m TEU (2023)' },
      { label: 'Key terminals', value: 'Yangshan deep-water, Waigaoqiao' },
      { label: 'Max draft', value: '≈ 15.5 m (Yangshan)' },
      { label: 'UN/LOCODE', value: 'CNSHA' },
    ],
    hinterland:
      'Yangtze River Delta — the manufacturing heartland of electronics, machinery, textiles and consumer goods that dominate China-to-GCC exports.',
    insight:
      "Shanghai is where most Gulf-bound cargo consolidates, but 'Shanghai' hides a real routing choice: Yangshan (deep water, ultra-large vessels, slightly further from factories) versus Waigaoqiao (closer to the city, smaller berths). For GCC buyers with time-sensitive projects, the terminal — not just the port — changes lead time and transshipment risk.",
    keyTakeaways: [
      "World's busiest container port; the natural consolidation point for Gulf freight.",
      'Yangshan handles the largest vessels; Waigaoqiao sits closer to the Yangtze Delta factories.',
      "SIPG's Yangshan Phase IV is the world's largest automated terminal.",
      'Confirm the specific terminal on the bill of lading — it affects transit and feeder connections.',
    ],
    faqs: [
      {
        q: 'Why is Shanghai the default origin for GCC shipments?',
        a: 'It combines the deepest water (Yangshan), the largest container throughput, and direct access to the Yangtze River Delta manufacturing cluster — so vessels, space and sailings are more frequent than almost anywhere else in China.',
      },
      {
        q: 'What is the difference between Yangshan and Waigaoqiao?',
        a: 'Yangshan is a deep-water offshore terminal built for ultra-large container vessels. Waigaoqiao sits closer to the city and the Yangtze factories but takes smaller ships. Your bill of lading will name the specific terminal, which affects cut-off times and feeder connections.',
      },
      {
        q: 'Does Shanghai offer direct sailings to the Gulf?',
        a: 'Yes. All major carriers operating the China-to-Middle East trade offer direct Shanghai–Jebel Ali sailings, and several call Dammam, Hamad and Jeddah directly. Direct sailings cut transit time versus transshipping via Singapore or Port Klang.',
      },
    ],
    updated: '2026-09-01',
  },
  {
    slug: 'ningbo-zhoushan',
    name: 'Ningbo-Zhoushan',
    country: 'China',
    countrySlug: 'china',
    type: 'seaport',
    unlocode: 'CNNGB',
    tldr:
      "The world's largest port by total cargo tonnage — a bulk and container powerhouse that shares the Yangtze Delta with Shanghai and is a strong second origin for Gulf freight.",
    operator: 'Ningbo-Zhoushan Port Group',
    specs: [
      { label: 'Container throughput', value: '≈ 35m TEU (2023)' },
      { label: 'Total cargo', value: 'World #1 by tonnage' },
      { label: 'Max draft', value: '≈ 18 m' },
      { label: 'UN/LOCODE', value: 'CNNGB' },
    ],
    hinterland:
      'Zhejiang province and the southern Yangtze Delta — a heavy exporter of small commodities, hardware, textiles and consumer goods.',
    insight:
      "Ningbo-Zhoushan is under-used by first-time GCC importers who default to Shanghai. Because it handles so much bulk, it often has container space when Shanghai is congested, and its draft accepts the very largest bulk and container vessels. If your cargo originates in Zhejiang, loading Ningbo can save inland trucking without sacrificing sailings.",
    keyTakeaways: [
      "World's #1 port by total cargo tonnage; #2–3 in China by container volume.",
      'Strong alternative to Shanghai when the latter is congested.',
      'Deep draft (≈18 m) accepts ultra-large vessels.',
      'Ideal origin for Zhejiang-manufactured goods heading to the Gulf.',
    ],
    faqs: [
      {
        q: 'Is Ningbo-Zhoushan a good alternative to Shanghai?',
        a: 'Yes. It sits in the same Delta, offers comparable deep-water access and frequently has container availability when Shanghai is congested. For Zhejiang-origin cargo it can reduce inland trucking cost.',
      },
      {
        q: 'What kind of cargo moves through Ningbo-Zhoushan?',
        a: 'A mix — it is the world leader in total tonnage largely because of bulk (ore, coal, crude), but it also moves roughly 35m TEU of containers, dominated by Zhejiang small commodities, hardware and consumer goods.',
      },
    ],
    updated: '2026-09-01',
  },
  {
    slug: 'shenzhen',
    name: 'Shenzhen (Yantian / Shekou)',
    country: 'China',
    countrySlug: 'china',
    type: 'seaport',
    unlocode: 'CNSZX',
    tldr:
      "The Pearl River Delta's deep-water gateway — Yantian handles the region's largest container vessels, while Shekou serves electronics and cross-border flows into Hong Kong.",
    operator: 'Shenzhen Port Group / Yantian International Container Terminals',
    specs: [
      { label: 'Container throughput', value: '≈ 30m TEU (2023)' },
      { label: 'Key terminals', value: 'Yantian, Shekou, Chiwan' },
      { label: 'Max draft', value: '≈ 16 m (Yantian)' },
      { label: 'UN/LOCODE', value: 'CNSZX' },
    ],
    hinterland:
      'Pearl River Delta — electronics, appliances, furniture and the fastest-turnaround consumer-goods supply chain in China.',
    insight:
      "Shenzhen is really three ports under one name. Yantian is the deep-water workhorse for Gulf-bound FCL; Shekou is the electronics and cross-border hub next to Hong Kong. Importers who only specify 'Shenzhen' on the PO can be routed to the wrong terminal and miss a sailing — always pin down Yantian vs Shekou vs Chiwan.",
    keyTakeaways: [
      'Yantian is the deep-water terminal for large Gulf-bound vessels.',
      'Shekou serves electronics and cross-border traffic to/from Hong Kong.',
      '≈30m TEU throughput makes it the busiest single gateway in the Pearl River Delta.',
      'Specify the exact terminal (Yantian / Shekou / Chiwan) to avoid routing surprises.',
    ],
    faqs: [
      {
        q: 'Which Shenzhen terminal should I use for Gulf freight?',
        a: 'Yantian is the standard choice for full-container loads — it has the deepest draft and the most direct ocean services. Shekou is better for electronics and cargo needing fast cross-border moves with Hong Kong.',
      },
      {
        q: 'Is Shenzhen faster to the Gulf than Shanghai?',
        a: 'Roughly comparable. Shenzhen is further south, which can shave a day or two versus a Shanghai loading on the same route, but the bigger variable is the specific carrier service and whether it transships.',
      },
    ],
    updated: '2026-09-01',
  },
  {
    slug: 'guangzhou',
    name: 'Guangzhou',
    country: 'China',
    countrySlug: 'china',
    type: 'seaport',
    unlocode: 'CNCAN',
    tldr:
      'A Pearl River Delta gateway centred on the Nansha deep-water terminal — strong for southern-China manufacturing with direct river access into Guangdong.',
    operator: 'Guangzhou Port Group',
    specs: [
      { label: 'Container throughput', value: '≈ 24m TEU (2023)' },
      { label: 'Key terminal', value: 'Nansha' },
      { label: 'River-sea', value: 'Deep river access into Guangdong' },
      { label: 'UN/LOCODE', value: 'CNCAN' },
    ],
    hinterland:
      'Guangdong province and the western Pearl River Delta — textiles, ceramics, machinery and building materials.',
    insight:
      "Guangzhou's Nansha terminal is the port to consider when cargo originates in western Guangdong or the Pearl River's inland network, where river barges can feed the terminal without road congestion. It competes with Shenzhen for the same hinterland, so for Gulf buyers the choice is often a price-and-sailing trade-off between the two.",
    keyTakeaways: [
      'Nansha is the modern deep-water terminal for the western Pearl River Delta.',
      'River-barge feeder network avoids inland road congestion.',
      '≈24m TEU throughput; a strong second gateway behind Shenzhen in the Delta.',
      'Compare Nansha vs Yantian sailings before locking the origin.',
    ],
    faqs: [
      {
        q: 'When should I choose Guangzhou over Shenzhen?',
        a: 'When your goods originate in western Guangdong or reach the terminal by river barge, Nansha can be cheaper and less congested. For most Gulf FCL, however, Shenzhen-Yantian still offers more direct ocean services.',
      },
      {
        q: 'Does Guangzhou handle ocean-going vessels?',
        a: 'Yes — the Nansha terminal takes large ocean-going container vessels. The port combines deep-water sea access with an extensive Pearl River barge network.',
      },
    ],
    updated: '2026-09-01',
  },
  {
    slug: 'qingdao',
    name: 'Qingdao',
    country: 'China',
    countrySlug: 'china',
    type: 'seaport',
    unlocode: 'CNTAO',
    tldr:
      "North China's flagship gateway and home to Asia's first fully automated terminal — a key origin for Shandong and northern-China exports to the Gulf.",
    operator: 'Shandong Port Group (Qingdao Port)',
    specs: [
      { label: 'Container throughput', value: '≈ 26m TEU (2023)' },
      { label: 'Automation', value: "Asia's first fully automated terminal" },
      { label: 'Region', value: 'Shandong / North China' },
      { label: 'UN/LOCODE', value: 'CNTAO' },
    ],
    hinterland:
      'Shandong province and the broader Bohai region — machinery, tires, steel, chemicals and agricultural products.',
    insight:
      "Qingdao matters for Gulf importers of heavy or industrial cargo. Its automated terminal sets a high bar on crane productivity and cut-off reliability, and it is the natural origin for Shandong-made tires, machinery and chemicals. For north-China goods, Qingdao usually beats trucking everything down to Shanghai.",
    keyTakeaways: [
      "Asia's first fully automated container terminal sets the productivity benchmark.",
      '≈26m TEU throughput; the leading gateway for Shandong and Bohai cargo.',
      'Preferred origin for heavy/industrial Gulf imports — machinery, tires, chemicals.',
      'Automation improves cut-off reliability versus manual terminals.',
    ],
    faqs: [
      {
        q: 'Why choose Qingdao for Gulf freight?',
        a: 'It is the natural origin for Shandong and Bohai manufacturing (machinery, tires, steel, chemicals) and its automated terminal offers reliable, high-productivity handling, reducing the inland trucking distance versus Shanghai.',
      },
      {
        q: 'Does Qingdao have direct Gulf sailings?',
        a: 'Yes. Multiple carriers run direct Qingdao–Jebel Ali and Qingdao–Dammam services, though frequency is typically lower than from Shanghai or Shenzhen.',
      },
    ],
    updated: '2026-09-01',
  },
  {
    slug: 'tianjin',
    name: 'Tianjin',
    country: 'China',
    countrySlug: 'china',
    type: 'seaport',
    unlocode: 'CNTSN',
    tldr:
      "The Beijing-Tianjin-Hebei region's maritime gateway — the standard origin for capital-region exports to the Gulf.",
    operator: 'Tianjin Port Group',
    specs: [
      { label: 'Container throughput', value: '≈ 21m TEU (2023)' },
      { label: 'Region', value: 'Beijing-Tianjin-Hebei' },
      { label: 'Type', value: 'Multi-purpose (container + bulk + RoRo)' },
      { label: 'UN/LOCODE', value: 'CNTSN' },
    ],
    hinterland:
      'Beijing-Tianjin-Hebei and northern China — steel, machinery, vehicles, chemicals and construction materials.',
    insight:
      "Tianjin is the northernmost major container gateway and the obvious origin for Beijing-Tianjin-Hebei cargo — but it is also winter-affected and can be constrained by weather and ice versus southern ports. For Gulf buyers of steel, machinery or vehicles, Tianjin keeps inland haulage short; just build a weather buffer into your schedule in winter months.",
    keyTakeaways: [
      '≈21m TEU throughput; the gateway for Beijing-Tianjin-Hebei manufacturing.',
      'Strong for steel, machinery, vehicles and construction materials.',
      'Northernmost major gateway — factor winter weather into scheduling.',
      'Shorter inland haul for capital-region suppliers.',
    ],
    faqs: [
      {
        q: 'When should I ship from Tianjin?',
        a: 'When your supplier is in the Beijing-Tianjin-Hebei region and produces heavy or bulky goods (steel, machinery, vehicles). It minimises inland trucking versus a Shanghai loading, but allow a weather buffer in winter.',
      },
      {
        q: 'Does Tianjin handle vehicle exports?',
        a: 'Yes. Tianjin is a major RoRo (roll-on/roll-off) hub and moves significant vehicle and machinery volumes to the Middle East and other markets.',
      },
    ],
    updated: '2026-09-01',
  },
  {
    slug: 'xiamen',
    name: 'Xiamen',
    country: 'China',
    countrySlug: 'china',
    type: 'seaport',
    unlocode: 'CNXMN',
    tldr:
      "Fujian province's gateway — the closest major Chinese port to Taiwan and a solid niche origin for southern-China light industry.",
    operator: 'Xiamen Port (Xiamen Port Authority)',
    specs: [
      { label: 'Container throughput', value: '≈ 12m TEU (2023)' },
      { label: 'Region', value: 'Fujian province' },
      { label: 'Position', value: 'Closest major port to Taiwan' },
      { label: 'UN/LOCODE', value: 'CNXMN' },
    ],
    hinterland:
      'Fujian province — footwear, textiles, ceramics, electronics and light manufacturing.',
    insight:
      "Xiamen is a niche origin for Gulf freight: smaller than Shanghai or Shenzhen but strategically placed for Fujian's footwear, textile and ceramic exporters, and it is the closest major mainland port to Taiwan. If your supplier is Fujian-based, Xiamen can cut inland logistics cost meaningfully versus routing through Shenzhen.",
    keyTakeaways: [
      '≈12m TEU throughput; the gateway for Fujian province.',
      'Closest major mainland port to Taiwan.',
      'Strong for footwear, textiles, ceramics and light manufacturing.',
      'Niche but cost-effective origin for Fujian-based suppliers.',
    ],
    faqs: [
      {
        q: 'Is Xiamen a viable origin for Gulf freight?',
        a: 'Yes, for Fujian-based suppliers. It is smaller than Shanghai/Shenzhen with fewer direct Gulf sailings, but it cuts inland trucking for Fujian light-industry goods and offers regular transshipment options.',
      },
      {
        q: 'What does Xiamen specialise in?',
        a: 'Footwear, textiles, ceramics, electronics and other Fujian light manufacturing, plus a growing role in cross-strait trade with Taiwan.',
      },
    ],
    updated: '2026-09-01',
  },
];
