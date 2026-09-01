import type { Port } from './types';

export const gccPorts: Port[] = [
  {
    slug: 'jeddah',
    name: 'Jeddah Islamic Port',
    country: 'Saudi Arabia',
    countrySlug: 'saudi-arabia',
    type: 'seaport',
    unlocode: 'SAJED',
    tldr:
      "Saudi Arabia's largest port and the Red Sea gateway — the natural entry point for western-region cargo, though Red Sea security disruptions since 2023 have added schedule and cost volatility.",
    operator: 'Mawani (Saudi Ports Authority); Red Sea Gateway Terminal by DP World',
    specs: [
      { label: 'Container throughput', value: '≈ 4.9m TEU (2023)' },
      { label: 'Max draft', value: '≈ 14 m' },
      { label: 'Key terminals', value: 'Red Sea Gateway Terminal, Northern Container Terminal' },
      { label: 'UN/LOCODE', value: 'SAJED' },
    ],
    hinterland:
      'Western Saudi Arabia — Jeddah city, the Makkah and Madinah regions, and the western consumer market.',
    insight:
      "Jeddah's location on the Red Sea made it the historic China-to-Saudi gateway, but the Houthi attacks on Red Sea shipping since late 2023 forced many carriers to reroute around the Cape of Good Hope — inflating transit times and spot rates, and pushing some Gulf volume toward Dammam on the Arabian Gulf side. When quoting Jeddah, ask the carrier whether the sailing transits the Red Sea or the Cape.",
    keyTakeaways: [
      "Saudi Arabia's largest port and the Red Sea entry for western-region cargo.",
      'Red Sea security disruptions since 2023 add transit-time and rate volatility.',
      '≈4.9m TEU throughput; the benchmark for Saudi container imports.',
      'Confirm Red Sea vs Cape routing before committing to a schedule.',
    ],
    faqs: [
      {
        q: 'Is Jeddah still safe to ship to?',
        a: 'The port remains operational and is the standard Red Sea gateway, but carrier routing has been volatile since the 2023 Red Sea security crisis. Always confirm whether your sailing transits the Red Sea or the Cape of Good Hope, as that changes transit time and cost.',
      },
      {
        q: 'Should I ship to Jeddah or Dammam?',
        a: 'Choose by destination region: Jeddah serves western Saudi Arabia (Jeddah, Makkah, Madinah), while Dammam serves the eastern province and Riyadh (by rail). Some importers split volume between the two.',
      },
      {
        q: 'Who operates Jeddah Islamic Port?',
        a: 'The Saudi Ports Authority (Mawani) is the port authority, with the Red Sea Gateway Terminal operated by DP World and other terminals run by additional concessionaires.',
      },
      { q: 'How has the Red Sea crisis affected Jeddah?', a: 'The Houthi attacks on Red Sea shipping since 2023 forced many carriers to reroute around the Cape of Good Hope, inflating transit times and spot rates. Always confirm with the carrier whether your sailing transits the Red Sea or the Cape before committing to a schedule.' },
    ],
    updated: '2026-09-01',
  },
  {
    slug: 'dammam',
    name: 'King Abdulaziz Port Dammam',
    country: 'Saudi Arabia',
    countrySlug: 'saudi-arabia',
    type: 'seaport',
    unlocode: 'SADMM',
    tldr:
      "Saudi Arabia's Arabian-Gulf gateway on the east coast — the natural entry for eastern-province and Riyadh cargo, with direct rail to the Riyadh Dry Port.",
    operator: 'Saudi Global Ports (Mawani concession)',
    specs: [
      { label: 'Container throughput', value: '≈ 2m+ TEU' },
      { label: 'Rail link', value: 'Direct to Riyadh Dry Port' },
      { label: 'Position', value: 'Arabian Gulf, east coast' },
      { label: 'UN/LOCODE', value: 'SADMM' },
    ],
    hinterland:
      'Eastern Province (Dammam, Dhahran, Jubail industrial city) and Riyadh via the Saudi rail network.',
    insight:
      "Dammam has quietly become the more reliable Saudi option since the Red Sea crisis, because its Arabian-Gulf routing is unaffected by the Red Sea disruption. Its rail link to the Riyadh Dry Port means cargo destined for the capital can clear inland rather than at the coast — a route many importers overlook.",
    keyTakeaways: [
      "Saudi Arabia's east-coast Arabian-Gulf gateway.",
      'Unaffected by Red Sea disruption — a more stable option since 2023.',
      'Direct rail to the Riyadh Dry Port for capital-region cargo.',
      'Serves the Eastern Province and Jubail industrial city.',
    ],
    faqs: [
      {
        q: 'Why ship to Dammam instead of Jeddah?',
        a: 'For eastern-province or Riyadh cargo, Dammam is closer and its Arabian-Gulf routing is unaffected by the Red Sea security crisis. Its rail link lets Riyadh-bound cargo clear at the inland dry port.',
      },
      {
        q: 'Can I clear cargo destined for Riyadh at Dammam?',
        a: 'You can clear at Dammam or move it by rail to the Riyadh Dry Port and clear inland. Clearing inland often suits Riyadh-based consignees.',
      },
      { q: 'Should I ship to Jeddah or Dammam?', a: 'Choose by destination region: Jeddah serves western Saudi Arabia, while Dammam serves the Eastern Province and Riyadh via rail. Since the Red Sea crisis, Dammam\'s Arabian-Gulf routing is also the more stable option for many importers.' },
    ],
    updated: '2026-09-01',
  },
  {
    slug: 'riyadh-dry-port',
    name: 'Riyadh Dry Port',
    country: 'Saudi Arabia',
    countrySlug: 'saudi-arabia',
    type: 'dry-port',
    note: 'Inland dry port served by rail/road from coastal ports.',
    tldr:
      "Saudi Arabia's inland container hub — cargo moves by rail from Dammam and clears in the capital, avoiding coastal port congestion and bringing containers close to the Riyadh market.",
    operator: 'Saudi Railways (SAR) / Mawani',
    specs: [
      { label: 'Type', value: 'Inland dry port (no sea access)' },
      { label: 'Rail origin', value: 'Dammam (King Abdulaziz Port)' },
      { label: 'Serves', value: 'Riyadh capital region' },
      { label: 'UN/LOCODE', value: '— (inland)' },
    ],
    hinterland:
      'Riyadh and the central region — the largest single consumer market in Saudi Arabia.',
    insight:
      "The Riyadh Dry Port is the quiet workhorse of Saudi imports: rather than clearing at Dammam and trucking containers hundreds of kilometres inland, cargo is railed straight to the capital and cleared there. For Riyadh-based importers this saves road haulage and demurrage risk at the coast — but it only works if the carrier/forwarder quotes a 'to Riyadh Dry Port' through-service.",
    keyTakeaways: [
      'Inland container hub reached by rail from Dammam.',
      'Clearing inland avoids coastal congestion for Riyadh-bound cargo.',
      'Serves the largest consumer market in Saudi Arabia.',
      'Requires a through-service quoting the dry port as final destination.',
    ],
    faqs: [
      {
        q: 'How does cargo reach the Riyadh Dry Port?',
        a: 'By rail from Dammam (King Abdulaziz Port). The container is railed inland and cleared at the dry port, then trucked the short final distance within Riyadh.',
      },
      {
        q: 'Should I clear at Dammam or Riyadh Dry Port?',
        a: 'For Riyadh-based consignees, clearing at the dry port usually saves inland trucking and reduces demurrage exposure at the coast. Confirm your forwarder offers a through-service naming the dry port as the destination.',
      },
      { q: 'How does clearing at Riyadh Dry Port work?', a: 'Cargo rails inland from Dammam to the dry port and clears there, avoiding coastal congestion and demurrage. It requires a through-service quoting the dry port as final destination — confirm your forwarder offers this before booking.' },
    ],
    updated: '2026-09-01',
  },
  {
    slug: 'jebel-ali',
    name: 'Jebel Ali',
    country: 'United Arab Emirates',
    countrySlug: 'united-arab-emirates',
    type: 'seaport',
    unlocode: 'AEJEA',
    tldr:
      "The Middle East's flagship port and the world's largest man-made harbour — the hub through which most China-to-GCC cargo transits or re-exports, backed by the JAFZA free zone.",
    operator: 'DP World',
    specs: [
      { label: 'Container throughput', value: '≈ 14.5m TEU (2023)' },
      { label: 'Max draft', value: '≈ 17 m' },
      { label: 'Free zone', value: 'JAFZA (Jebel Ali Free Zone)' },
      { label: 'UN/LOCODE', value: 'AEJEA' },
    ],
    hinterland:
      'Dubai and the wider GCC — Jebel Ali is the re-export hub for the entire Gulf, feeding Saudi Arabia, Qatar, Kuwait, Bahrain and the Indian Ocean rim.',
    insight:
      "Jebel Ali is not just a destination — it is the region's distribution engine. A huge share of 'China-to-GCC' cargo actually lands at Jebel Ali and re-exports onward by feeder or truck. That makes it the lowest-friction entry point, but also means a Jebel Ali arrival is often only the first leg. If your final buyer is in Riyadh or Doha, price the onward leg, not just the ocean freight.",
    keyTakeaways: [
      "Middle East's largest container port and the world's biggest man-made harbour.",
      '≈14.5m TEU throughput; the re-export hub for the whole Gulf.',
      'JAFZA free zone offers duty deferral and re-export flexibility.',
      'Factor in the onward feeder/truck leg for non-UAE final destinations.',
    ],
    faqs: [
      {
        q: 'Why does most China-to-GCC cargo go through Jebel Ali?',
        a: 'Jebel Ali combines deep water, the region\u2019s largest container throughput and the JAFZA free zone, making it the natural consolidation and re-export point. Cargo often lands at Jebel Ali and is re-shipped onward to Saudi Arabia, Qatar, Kuwait and beyond.',
      },
      {
        q: 'What is JAFZA?',
        a: 'The Jebel Ali Free Zone — a bonded free zone adjoining the port. Goods can be stored, consolidated and re-exported without paying UAE duty, which is why so much regional distribution runs through it.',
      },
      { q: 'Can I re-export from Jebel Ali to other GCC countries?', a: 'Yes — Jebel Ali and its JAFZA free zone are the region\'s re-export engine. Goods can be held duty-deferred and re-shipped onward to Saudi Arabia, Qatar, Kuwait and beyond, paying duty only in the final destination market.' },
    ],
    updated: '2026-09-01',
  },
  {
    slug: 'khalifa-port-abu-dhabi',
    name: 'Khalifa Port Abu Dhabi',
    country: 'United Arab Emirates',
    countrySlug: 'united-arab-emirates',
    type: 'seaport',
    unlocode: 'AEKHL',
    tldr:
      "Abu Dhabi's deep-water, semi-automated flagship — one of the deepest ports in the Gulf and the anchor of the KIZAD industrial zone.",
    operator: 'AD Ports Group',
    specs: [
      { label: 'Design capacity', value: '≈ 9m+ TEU (post-expansion)' },
      { label: 'Max draft', value: '≈ 18 m (among the deepest in the Gulf)' },
      { label: 'Automation', value: 'Semi-automated terminal' },
      { label: 'UN/LOCODE', value: 'AEKHL' },
    ],
    hinterland:
      'Abu Dhabi emirate and the KIZAD (Khalifa Industrial Zone) free zone — energy, metals, logistics and light industry.',
    insight:
      "Khalifa Port is the capacity play in the UAE. It is newer, deeper and less congested than Jebel Ali, and it anchors the KIZAD industrial zone where many Chinese manufacturers set up regional assembly or distribution. For importers who find Jebel Ali expensive or congested, Khalifa Port plus KIZAD is a serious alternative — especially for project cargo and heavy industry.",
    keyTakeaways: [
      '≈18m draft makes it one of the deepest ports in the Gulf.',
      'Semi-automated, less congested alternative to Jebel Ali.',
      'Anchors the KIZAD industrial free zone.',
      'Strong for project cargo and heavy industry.',
    ],
    faqs: [
      {
        q: 'Is Khalifa Port a real alternative to Jebel Ali?',
        a: 'Yes. It is newer, deeper and generally less congested, and its KIZAD zone is attractive for importers doing assembly, storage or distribution in the UAE. For heavy or project cargo it often wins on draft and space.',
      },
      {
        q: 'Who operates Khalifa Port?',
        a: 'AD Ports Group, the Abu Dhabi ports and logistics operator. The terminal is semi-automated and has expanded capacity toward 9m+ TEU.',
      },
      { q: 'Is Khalifa Port a better choice than Jebel Ali?', a: 'Khalifa Port is newer, deeper (≈18 m) and generally less congested, anchored by the KIZAD industrial zone. For project cargo, heavy industry or importers who find Jebel Ali crowded, Khalifa Port plus KIZAD is a strong alternative.' },
    ],
    updated: '2026-09-01',
  },
  {
    slug: 'port-khalid',
    name: 'Sharjah / Port Khalid',
    country: 'United Arab Emirates',
    countrySlug: 'united-arab-emirates',
    type: 'seaport',
    unlocode: 'AESHJ',
    tldr:
      "Sharjah's commercial port — a smaller, lower-cost neighbour to Dubai that serves the northern emirates, with a deep-water feeder at Khor Fakkan on the east coast.",
    operator: 'Sharjah Ports / Gulftainer',
    specs: [
      { label: 'Type', value: 'Commercial seaport (feeder/regional)' },
      { label: 'Related', value: 'Khor Fakkan deep-water terminal (east coast)' },
      { label: 'Region', value: 'Northern emirates' },
      { label: 'UN/LOCODE', value: 'AESHJ' },
    ],
    hinterland:
      'Sharjah and the northern emirates — manufacturing, warehousing and lower-cost industrial zones.',
    insight:
      "Port Khalid is best understood as the cost-conscious neighbour of Dubai. It handles smaller vessels and regional feeders, while Sharjah's other terminal, Khor Fakkan on the Indian-Ocean east coast, is the deep-water transshipment point. For importers with Sharjah-based warehouses or factories, Port Khalid can cut last-mile cost versus a Jebel Ali discharge.",
    keyTakeaways: [
      "Sharjah's commercial port — a lower-cost northern-emirates gateway.",
      'Khor Fakkan on the east coast is Sharjah\u2019s deep-water transshipment terminal.',
      'Good for importers with Sharjah warehouses or factories.',
      'Handles smaller vessels and regional feeders.',
    ],
    faqs: [
      {
        q: 'Is Port Khalid the same as Khor Fakkan?',
        a: 'No. Port Khalid is the commercial port in Sharjah city. Khor Fakkan is a separate deep-water container terminal on Sharjah\u2019s east coast (Indian Ocean side), used mainly for transshipment.',
      },
      {
        q: 'When should I use Port Khalid?',
        a: 'When your consignee or warehouse is in Sharjah or the northern emirates. It can reduce last-mile trucking versus discharging at Jebel Ali.',
      },
      { q: 'What is the difference between Port Khalid and Khor Fakkan?', a: 'Port Khalid is Sharjah\'s commercial port in the city, handling smaller vessels and regional feeders. Khor Fakkan is a separate deep-water container terminal on Sharjah\'s east coast, used mainly for transshipment on the Indian Ocean side.' },
    ],
    updated: '2026-09-01',
  },
  {
    slug: 'hamad',
    name: 'Hamad Port',
    country: 'Qatar',
    countrySlug: 'qatar',
    type: 'seaport',
    unlocode: 'QAHMD',
    tldr:
      "Qatar's modern deep-water port south of Doha — opened in 2017 to replace the old Doha port and now the country's sole container gateway.",
    operator: 'Mwani Qatar',
    specs: [
      { label: 'Opened', value: '2017 (replaced Doha Port)' },
      { label: 'Design capacity', value: '≈ 7.5m TEU (design)' },
      { label: 'Position', value: 'South of Doha' },
      { label: 'UN/LOCODE', value: 'QAHMD' },
    ],
    hinterland:
      'Qatar — Doha and the national market, including the FIFA World Cup-era infrastructure build-out that drove its construction.',
    insight:
      "Hamad Port is Qatar's single modern gateway, and its importance grew after the 2017 Gulf blockade forced Qatar to rely more on direct deep-sea calls rather than transshipment through Jebel Ali. For importers, that means Qatar-bound cargo should be booked direct to Hamad rather than relying on UAE re-export, and clearance is handled by Qatar Customs at the port.",
    keyTakeaways: [
      "Qatar's sole container gateway, opened 2017.",
      'Built to end reliance on UAE transshipment.',
      '≈7.5m TEU design capacity — comfortably ahead of current demand.',
      'Book direct to Hamad rather than via Jebel Ali re-export.',
    ],
    faqs: [
      {
        q: 'Is Hamad Port Qatar\u2019s only container port?',
        a: 'For commercial container traffic, yes. It replaced the old Doha port in 2017 and is now Qatar\u2019s modern deep-water gateway.',
      },
      {
        q: 'Should I ship to Qatar via Jebel Ali or direct to Hamad?',
        a: 'Direct to Hamad. Since the 2017 blockade, Qatar has built direct deep-sea connectivity, and routing via UAE re-export adds cost and time versus a direct Hamad call.',
      },
      { q: 'Should I ship to Qatar direct or via Jebel Ali?', a: 'Direct to Hamad Port. Since the 2017 blockade Qatar built direct deep-sea connectivity, and routing via UAE re-export adds cost and time versus a direct Hamad call.' },
    ],
    updated: '2026-09-01',
  },
  {
    slug: 'shuwaikh',
    name: 'Shuwaikh',
    country: 'Kuwait',
    countrySlug: 'kuwait',
    type: 'seaport',
    unlocode: 'KWSWK',
    tldr:
      "Kuwait's older commercial port near Kuwait City — the main gateway for general cargo and containers serving the capital.",
    operator: 'Kuwait Ports Authority',
    specs: [
      { label: 'Type', value: 'Commercial seaport (general cargo + containers)' },
      { label: 'Position', value: 'Near Kuwait City' },
      { label: 'Region', value: 'Northern Kuwait' },
      { label: 'UN/LOCODE', value: 'KWSWK' },
    ],
    hinterland:
      'Kuwait City and northern Kuwait — the capital market and its consumer goods.',
    insight:
      "Shuwaikh is Kuwait's commercial port of convenience, close to the capital. But Kuwait's overall port capacity is constrained and congestion is a known issue, which is why Shuaiba (the southern industrial port) is being developed and Mubarak Al-Kabeer is planned. For importers, Shuwaikh suits general cargo and consumer goods destined for the capital; heavier industrial cargo often routes to Shuaiba.",
    keyTakeaways: [
      "Kuwait's older commercial port, near Kuwait City.",
      'Main gateway for general cargo and capital-market consumer goods.',
      'Congestion is a known constraint — build buffer into schedules.',
      'Shuaiba (south) handles the heavier industrial traffic.',
    ],
    faqs: [
      {
        q: 'Is Shuwaikh the best Kuwait port?',
        a: 'It depends on cargo. Shuwaikh is closest to Kuwait City and suits general cargo and consumer goods. Heavier industrial cargo often clears through Shuaiba in the south.',
      },
      {
        q: 'Does Kuwait have congestion problems?',
        a: 'Port capacity is a recurring constraint in Kuwait, so schedule buffers are advisable. The country is developing Shuaiba and the planned Mubarak Al-Kabeer port to add capacity.',
      },
      { q: 'Shuwaikh or Shuaiba — which Kuwait port?', a: 'Shuwaikh is closest to Kuwait City and suits general cargo and consumer goods. Shuaiba in the south handles heavier industrial, petrochemical and bulk traffic. Choose by cargo type and destination within Kuwait.' },
    ],
    updated: '2026-09-01',
  },
  {
    slug: 'shuaiba',
    name: 'Shuaiba',
    country: 'Kuwait',
    countrySlug: 'kuwait',
    type: 'seaport',
    unlocode: 'KWSHB',
    tldr:
      "Kuwait's southern industrial port — the gateway for refinery, petrochemical and bulk traffic, and the focus of Kuwait's port-expansion plans.",
    operator: 'Kuwait Ports Authority',
    specs: [
      { label: 'Type', value: 'Industrial seaport (bulk + project + containers)' },
      { label: 'Position', value: 'Southern Kuwait, near refineries' },
      { label: 'Role', value: 'Petrochemical & industrial gateway' },
      { label: 'UN/LOCODE', value: 'KWSHB' },
    ],
    hinterland:
      'Southern Kuwait — the refinery and petrochemical belt, plus industrial and project cargo.',
    insight:
      "Shuaiba is Kuwait's industrial artery: it sits beside the country's refining complex and handles the petrochemical, bulk and project cargo that Shuwaikh was never designed for. It is also where Kuwait is concentrating expansion investment. For importers of industrial equipment, chemicals or project cargo, Shuaiba is usually the correct port.",
    keyTakeaways: [
      "Kuwait's southern industrial port, beside the refinery belt.",
      'Handles petrochemical, bulk and project cargo.',
      'Focus of Kuwait\u2019s port-expansion investment.',
      'Correct choice for industrial equipment and chemicals.',
    ],
    faqs: [
      {
        q: 'Shuwaikh or Shuaiba — which do I use?',
        a: 'Shuaiba for industrial, petrochemical, bulk and project cargo; Shuwaikh for general cargo and consumer goods near the capital.',
      },
      {
        q: 'Is Shuaiba being expanded?',
        a: 'Yes. Kuwait is concentrating port-expansion investment in the south, with Shuaiba and the planned Mubarak Al-Kabeer port central to its capacity plans.',
      },
      { q: 'What cargo should route through Shuaiba?', a: 'Shuaiba is Kuwait\'s industrial port beside the refinery belt — the correct choice for petrochemicals, industrial equipment, bulk and project cargo that Shuwaikh was never designed to handle.' },
    ],
    updated: '2026-09-01',
  },
  {
    slug: 'sohar',
    name: 'Sohar',
    country: 'Oman',
    countrySlug: 'oman',
    type: 'seaport',
    unlocode: 'OMSOH',
    tldr:
      "Oman's northern industrial port and free zone — a deep-water gateway for petrochemicals, metals and the Gulf's wider industrial supply chain.",
    operator: 'Sohar Port & Freezone (Oman / Port of Rotterdam joint venture)',
    specs: [
      { label: 'Type', value: 'Industrial deep-water port + free zone' },
      { label: 'Sector', value: 'Petrochemicals, metals, logistics' },
      { label: 'Position', value: 'Northern Oman, Gulf of Oman' },
      { label: 'UN/LOCODE', value: 'OMSOH' },
    ],
    hinterland:
      'Northern Oman and the Gulf of Oman — petrochemicals, aluminium, steel and logistics serving both Oman and the wider region.',
    insight:
      "Sohar is Oman's bet on industrial diversification: it is co-developed with the Port of Rotterdam and pairs a deep-water port with a free zone housing refineries, smelters and logistics parks. It sits outside the Strait of Hormuz chokepoint, which gives it a resilience argument for importers wary of Hormuz disruption — cargo can discharge at Sohar without transiting the Strait.",
    keyTakeaways: [
      'Deep-water industrial port co-developed with the Port of Rotterdam.',
      'Petrochemicals, metals and logistics anchor the free zone.',
      'Outside the Strait of Hormuz — a resilience advantage.',
      'Serves Oman and the wider regional industrial chain.',
    ],
    faqs: [
      {
        q: 'Why is Sohar described as outside the Strait of Hormuz?',
        a: 'Sohar faces the Gulf of Oman (Arabian Sea side), so vessels can call there without transiting the Strait of Hormuz — useful for importers seeking a lower-chokepoint-risk discharge point.',
      },
      {
        q: 'What is Sohar Port & Freezone?',
        a: 'A deep-water industrial port paired with a free zone, co-developed by Oman and the Port of Rotterdam. It hosts petrochemical, metals and logistics operations.',
      },
      { q: 'Why is Sohar described as outside the Strait of Hormuz?', a: 'Sohar faces the Gulf of Oman on the Arabian Sea side, so vessels can call there without transiting the Strait of Hormuz — a resilience advantage for importers wanting a lower-chokepoint-risk discharge point.' },
    ],
    updated: '2026-09-01',
  },
  {
    slug: 'salalah',
    name: 'Salalah',
    country: 'Oman',
    countrySlug: 'oman',
    type: 'seaport',
    unlocode: 'OMSLL',
    tldr:
      "Oman's southern transshipment hub on the Indian Ocean — a major east-west relay point for the Gulf, East Africa and the Indian subcontinent.",
    operator: 'APM Terminals (Maersk)',
    specs: [
      { label: 'Type', value: 'Transshipment hub (Indian Ocean)' },
      { label: 'Throughput', value: '≈ 4–5m TEU' },
      { label: 'Position', value: 'Southern Oman, Arabian Sea' },
      { label: 'UN/LOCODE', value: 'OMSLL' },
    ],
    hinterland:
      'Southern Oman (Dhofar) plus transshipment to East Africa, the Indian subcontinent and the wider Gulf.',
    insight:
      "Salalah is less a destination and more a relay: it sits on the Indian Ocean mainline and feeds East Africa, the Red Sea and the northern Gulf by feeder. For importers into southern Oman or East Africa, Salalah can cut ocean distance versus Jebel Ali. Its APM Terminals operation gives it deep carrier connectivity — but for northern-Gulf destinations, Jebel Ali or Sohar is usually more direct.",
    keyTakeaways: [
      'Indian-Ocean transshipment hub operated by APM Terminals.',
      '≈4–5m TEU throughput; strong east-west relay connectivity.',
      'Serves southern Oman, East Africa and the subcontinent.',
      'Feeds the northern Gulf via Sohar/Jebel Ali rather than replacing them.',
    ],
    faqs: [
      {
        q: 'Is Salalah a destination or a transshipment port?',
        a: 'Primarily transshipment. It relays cargo on the Indian-Ocean mainline to East Africa, the Red Sea and the northern Gulf. For southern-Oman or East-Africa destinations it can be a direct, distance-saving call.',
      },
      {
        q: 'Who operates Salalah?',
        a: 'APM Terminals, part of the Maersk group, which gives the port deep carrier connectivity on east-west trades.',
      },
      { q: 'Is Salalah a destination or a transshipment port?', a: 'Primarily transshipment — it relays Indian-Ocean mainline cargo to East Africa, the Red Sea and the northern Gulf. For southern-Oman or East-Africa destinations it can be a direct, distance-saving call.' },
    ],
    updated: '2026-09-01',
  },
  {
    slug: 'khalifa-bin-salman',
    name: 'Khalifa bin Salman',
    country: 'Bahrain',
    countrySlug: 'bahrain',
    type: 'seaport',
    unlocode: 'BHKBS',
    tldr:
      "Bahrain's modern deep-water port — the island's main container gateway, connected to Saudi Arabia by the King Fahd Causeway.",
    operator: 'APM Terminals',
    specs: [
      { label: 'Type', value: 'Deep-water container port' },
      { label: 'Capacity', value: '≈ 1m TEU' },
      { label: 'Link', value: 'King Fahd Causeway to Saudi Arabia' },
      { label: 'UN/LOCODE', value: 'BHKBS' },
    ],
    hinterland:
      'Bahrain, plus onward trucking into Saudi Arabia\u2019s Eastern Province via the King Fahd Causeway.',
    insight:
      "Bahrain's Khalifa bin Salman port is small but strategically placed: it gives the island its own deep-water gateway, and the King Fahd Causeway lets containers truck directly into Saudi Arabia's Eastern Province. That makes Bahrain a legitimate — if niche — alternative discharge point for eastern-Saudi cargo, and its APM Terminals operation keeps it carrier-connected.",
    keyTakeaways: [
      "Bahrain's main deep-water container gateway.",
      '≈1m TEU capacity; operated by APM Terminals.',
      'King Fahd Causeway links it to Saudi Arabia by truck.',
      'Niche alternative for eastern-Saudi cargo.',
    ],
    faqs: [
      {
        q: 'Can I serve Saudi Arabia via Bahrain?',
        a: 'For Eastern-Province cargo, yes — the King Fahd Causeway allows trucking directly into Saudi Arabia. It is a niche option, but viable for certain consignees.',
      },
      {
        q: 'Who operates Khalifa bin Salman port?',
        a: 'APM Terminals, which also operates Salalah in Oman, giving the port strong carrier connectivity.',
      },
      { q: 'Can I serve Saudi Arabia via Bahrain\'s port?', a: 'For Eastern-Province cargo, yes — the King Fahd Causeway allows trucking directly into Saudi Arabia from Khalifa bin Salman Port. It is a niche but viable alternative when Jeddah is congested or direct routing is costly.' },
    ],
    updated: '2026-09-01',
  },
];
