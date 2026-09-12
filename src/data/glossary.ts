import type { GlossaryTerm } from './types';

export const glossary: GlossaryTerm[] = [
  {
    slug: 'fcl',
    term: 'FCL',
    definition:
      'Full Container Load — a shipping mode where a single shipper uses an entire container, priced per container rather than per unit.',
    category: 'Freight mode',
    inDetail:
      'FCL (Full Container Load) means you book a whole container for your cargo alone, so no one else\u2019s goods share the box. It is priced as a flat rate per container — the cost is the same whether the box is half or fully packed — which is why FCL becomes the cheaper option once you have enough volume to justify a full 20ft or 40ft unit. FCL cargo is sealed at origin and opened at destination, which reduces handling and the risk of damage or pilferage compared to shared (LCL) shipments. On the China-to-GCC corridor, FCL is the default for most commercial importers: a 20ft container fits roughly 28 cubic metres of cargo and a 40ft around 58 cubic metres, so manufacturers and traders moving palletised or heavy goods almost always ship FCL. The trade-off is simply that you pay for space you may not fully use.',
    whyItMatters:
      'For China-to-GCC importers, FCL is usually the lowest cost-per-unit once you exceed roughly 12–15 CBM, and it keeps your cargo sealed and single-origin — important for goods that need clean origin and tamper-evident transport.',
    example:
      'A Saudi importer moving 22 CBM of LED fixtures from Guangzhou to Jeddah ships FCL in a 20ft container: one flat rate, one seal, direct to a single consignee.',
    whoPays: 'Shipper pays the ocean freight for the box.',
    whoBearsRisk: 'Risk passes per the agreed Incoterm — not automatically with the container.',
    commonMisunderstanding: 'FCL does not mean you must fill the box; it means you book the whole box.',
    related: ['lcl', 'teu', 'demurrage'],
    updated: '2026-09-01',
  },
  {
    slug: 'lcl',
    term: 'LCL',
    definition:
      'Less than Container Load — cargo from multiple shippers consolidated into one container, priced by volume (CBM).',
    category: 'Freight mode',
    inDetail:
      'LCL (Less than Container Load) lets you ship cargo too small to fill a container by sharing the box with other shippers. You pay only for the volume you use, priced per cubic metre (CBM), which makes LCL the economical choice for small shipments, samples, or early-stage buyers testing a market. The downside is handling and time: LCL cargo is consolidated at a warehouse at origin and deconsolidated at destination, adding days to transit and extra touches that can raise the risk of damage. You also lose the single-shipper seal integrity of FCL. On the China-to-GCC route, LCL typically suits shipments under roughly 12–15 CBM; above that, FCL is usually cheaper. When quoting LCL, always ask for the all-in rate — origin consolidation, destination deconsolidation and customs handling are often charged separately and can erode the apparent savings.',
    whyItMatters:
      'LCL keeps cash tied to actual volume, which is ideal for first orders and small buyers, but the all-in cost can surprise you if consolidation and deconsolidation fees are not quoted up front.',
    example:
      'A Kuwaiti boutique importing 4 CBM of home goods from Ningbo ships LCL and pays only for 4 cubic metres, sharing a 40ft container with three other consignees.',
    whoPays: 'Shipper pays per cubic metre (CBM) of cargo consolidated.',
    whoBearsRisk: 'Shipper bears more handling risk — cargo is loaded and unloaded more often.',
    commonMisunderstanding: 'LCL is not always cheaper than FCL; above roughly 12-15 CBM, FCL usually wins per unit.',
    related: ['fcl', 'cbm', 'chargeable-weight'],
    updated: '2026-09-01',
  },
  {
    slug: 'ddp',
    term: 'DDP',
    definition:
      'Delivered Duty Paid — the seller delivers goods cleared for import and pays all duties and taxes up to the destination.',
    category: 'Trade term',
    inDetail:
      'DDP (Delivered Duty Paid) is the Incoterm where the seller takes maximum responsibility: they arrange and pay for freight, insurance, import clearance, duties and taxes, and hand over goods at the buyer\u2019s named place. For the buyer, DDP is the simplest option — one landed price, no customs work — but it is also the most expensive because the seller builds every cost plus a margin into the price. On the China-to-GCC corridor, DDP is popular with first-time importers and smaller buyers who do not want to handle Saudi SABER, UAE VAT or Kuwait clearance themselves. Note that DDP in Saudi Arabia means the seller must have local clearance capability, and VAT/duty are calculated on the CIF value, so a DDP quote from a Chinese supplier is only as good as their local GCC clearance setup.',
    whyItMatters:
      'DDP turns a complex multi-party process into a single landed price, but it concentrates all cost and compliance risk on the seller — which the buyer ultimately pays for in the margin.',
    example:
      'A Bahraini retailer orders machinery DDP to their warehouse door, so the Chinese seller handles ocean freight, Saudi-side clearance if routed via causeway, and all duties in one price.',
    whoPays: 'Seller pays freight, duty, VAT and clearance to the buyer\'s door.',
    whoBearsRisk: 'Seller bears all risk and cost to the named destination.',
    commonMisunderstanding: 'DDP does not mean duty-free; the seller has simply priced the duty into the total.',
    related: ['dap', 'incoterms', 'hs-code'],
    updated: '2026-09-01',
  },
  {
    slug: 'dap',
    term: 'DAP',
    definition:
      'Delivered At Place — the seller delivers goods ready for unloading at the destination, but the buyer handles import clearance.',
    category: 'Trade term',
    inDetail:
      'DAP (Delivered At Place) sits one step below DDP in seller responsibility. The seller arranges and pays for transport to a named destination — typically the buyer\u2019s port, warehouse or premises — and delivers the goods ready for unloading. Import clearance, duties and taxes, however, fall on the buyer. This is the natural middle ground for many China-to-GCC transactions: the buyer controls their own customs relationship (important where compliance like SABER or VAT registration is involved), while the seller still manages the long ocean leg. DAP is often the sensible default because it avoids the seller having to hold foreign tax registrations, and it gives the buyer direct control over landed cost and clearance timing.',
    whyItMatters:
      'DAP balances responsibility: the seller runs the transport, the buyer runs customs. It suits importers who have their own GCC clearance setup and want control over duties.',
    example:
      'An Omani importer buys DAP Sohar Port: the Chinese seller ships and delivers to the port, while the Omani buyer clears through Oman Customs and pays 5% duty themselves.',
    whoPays: 'Seller pays freight to the named place; buyer pays import clearance and duty.',
    whoBearsRisk: 'Seller bears risk to the delivery point; buyer bears import-clearance risk.',
    commonMisunderstanding: 'DAP and DDP differ on one thing: who clears import and pays duty.',
    related: ['ddp', 'incoterms', 'customs-broker'],
    updated: '2026-09-01',
  },
  {
    slug: 'incoterms',
    term: 'Incoterms',
    definition:
      'International Commercial Terms — a standardized set of trade terms defining buyer and seller responsibilities, published by the ICC.',
    category: 'Trade term',
    inDetail:
      'Incoterms are the ICC\u2019s standardized rules that define who pays for and is responsible for transport, insurance, and clearance at each stage of a shipment. Terms like EXW, FOB, CIF, DAP and DDP tell both parties exactly where the seller\u2019s responsibility ends and the buyer\u2019s begins, so there is no ambiguity about who bears risk when goods are damaged in transit or who pays a port fee. Choosing the wrong Incoterm is one of the most common — and expensive — mistakes in China-to-GCC trade: an importer who agrees to EXW thinking they are getting a deal may find themselves arranging and paying for inland trucking in China, export clearance and the ocean leg without realising it. The current edition is Incoterms 2020, and every quote should state the version explicitly.',
    whyItMatters:
      'Incoterms are the single most important line on a quote — they define exactly where cost and risk transfer. Getting them wrong is how importers quietly overpay or absorb unplanned liability.',
    example:
      'A quote that says \u201cCIF Jebel Ali\u201d tells the Qatari buyer that the seller pays freight and insurance to Jebel Ali, but the buyer owns the cargo risk from that point onward.',
    whoPays: 'Incoterms split freight, insurance and clearance costs between buyer and seller.',
    whoBearsRisk: 'Incoterms define the point where risk transfers from seller to buyer.',
    commonMisunderstanding: 'Incoterms do not transfer ownership of the goods — only cost and risk obligations.',
    related: ['ddp', 'dap', 'bill-of-lading'],
    updated: '2026-09-01',
  },
  {
    slug: 'cbm',
    term: 'CBM',
    definition:
      'Cubic Meter — the unit of volume used to calculate cargo space, calculated as length × width × height in meters.',
    category: 'Measurement',
    inDetail:
      'CBM (cubic metre) is the standard unit of cargo volume, computed as length × width × height in metres. It is the pricing basis for LCL sea freight and the starting point for working out how much fits in a container. A 20ft container holds roughly 28 CBM and a 40ft container about 58 CBM of usable space, though the actual loadable volume depends on packaging and how well the cargo stacks. For China-to-GCC importers, accurate CBM is essential: understate it and your LCL quote will be wrong; overstate it and you pay for space you are not using. Freight forwarders compute CBM from the carton dimensions on the packing list, so keeping precise outer-carton measurements is the simplest way to keep freight bills accurate.',
    whyItMatters:
      'CBM is the currency of volume-based freight — an accurate packing list in cubic metres is what keeps LCL and container-planning costs correct.',
    example:
      'A shipment of 200 cartons, each 0.6m × 0.4m × 0.3m, is 200 × 0.072 = 14.4 CBM — just over the point where FCL starts to beat LCL.',
    whoPays: 'LCL ocean freight is quoted per CBM.',
    whoBearsRisk: 'Not a risk term — a volume measure.',
    commonMisunderstanding: 'CBM measures volume, not weight; air freight uses weight instead.',
    related: ['lcl', 'volumetric-weight', 'chargeable-weight'],
    updated: '2026-09-01',
  },
  {
    slug: 'teu',
    term: 'TEU',
    definition:
      'Twenty-foot Equivalent Unit — the standard measure of container capacity, based on a 20ft container.',
    category: 'Measurement',
    inDetail:
      'TEU (Twenty-foot Equivalent Unit) is the standard unit for measuring containerised capacity, where one 20ft container equals 1 TEU and one 40ft container equals 2 TEU. It is how ports, vessels and trade statistics are measured — a \u201c20,000 TEU vessel\u201d can carry the equivalent of 20,000 twenty-foot boxes. For importers, TEU matters less as a booking unit (you book by container size, not TEU) and more as a way to read port capacity and congestion figures: a port like Jebel Ali moving around 14.5 million TEU a year is a very different beast from a small regional gateway. TEU also underpins terminal handling charges and some surcharges, which are sometimes quoted per TEU.',
    whyItMatters:
      'TEU is the benchmark unit for comparing ports, vessels and capacity — understanding it lets you read congestion and capacity data on the China-to-GCC corridor.',
    example:
      'Two 40ft containers equal 4 TEU; a carrier surcharge quoted at USD 50 per TEU therefore costs USD 200 on those two boxes.',
    related: ['fcl', 'lcl', 'demurrage'],
    updated: '2026-09-01',
  },
  {
    slug: 'demurrage',
    term: 'Demurrage',
    definition:
      'A fee charged when a container is held at a terminal beyond the allotted free time after discharge.',
    category: 'Port & carrier fees',
    inDetail:
      'Demurrage is the penalty the terminal charges when a container sits on port property beyond its free time after discharge — typically 3 to 7 free days, after which a daily charge accrues. It is designed to keep cargo moving through congested ports, and it is where China-to-GCC importers most often bleed money, because demurrage is triggered by clearance delays: a missing SABER certificate in Saudi Arabia or a VAT dispute in the UAE can leave a box at Jeddah or Jebel Ali for weeks while fees rack up. Demurrage is charged by the terminal, is often uncapped, and is not covered by standard marine insurance. The practical defence is to complete compliance paperwork before the vessel arrives, not after.',
    whyItMatters:
      'Demurrage is one of the fastest ways to erase freight savings — a container stuck at Jeddah or Jebel Ali for two weeks of clearance delay can incur hundreds of dollars in fees.',
    example:
      'A container discharged at Jeddah with 5 free days sits for 12 days waiting on a SABER certificate, accruing 7 days of demurrage at a daily terminal rate.',
    whoPays: 'Consignee (or their forwarder) pays for overstaying free time inside the port.',
    whoBearsRisk: 'Consignee bears the charge if cargo is not picked up in time.',
    commonMisunderstanding: 'Demurrage (inside the terminal) is not the same as detention (outside with the container).',
    related: ['detention', 'teu', 'fcl'],
    updated: '2026-09-01',
  },
  {
    slug: 'detention',
    term: 'Detention',
    definition:
      'A fee charged when a container is held outside the terminal beyond the allotted free time before return to the carrier.',
    category: 'Port & carrier fees',
    inDetail:
      'Detention is the carrier\u2019s charge for keeping a container too long after it has been picked up from the terminal, before it is returned empty. Whereas demurrage covers time inside the port, detention covers time outside it — at your warehouse or at the consignee\u2019s yard. Carriers allow a set number of free days (often 5 to 10) to unload and return the empty box; beyond that, a daily detention fee applies. On the China-to-GCC corridor, detention is commonly triggered by slow unloading, weekend or holiday delays, or consignees who treat the container as temporary storage. Because demurrage and detention can both run at once, a shipment that clears customs but sits at the warehouse can still accumulate carrier charges.',
    whyItMatters:
      'Detention is the outside-the-port sibling of demurrage — slow unloading at your own warehouse is enough to trigger it, so plan empty-container return around free days.',
    example:
      'A Dammam consignee keeps a 40ft container at their yard for 18 days as overflow storage, exceeding the 10 free days and accruing 8 days of carrier detention.',
    whoPays: 'Consignee (or their forwarder) pays for keeping the container past free time outside the port.',
    whoBearsRisk: 'Consignee bears the charge for late empty return.',
    commonMisunderstanding: 'Detention is separate from demurrage; a shipment can incur both at once.',
    related: ['demurrage', 'teu'],
    updated: '2026-09-01',
  },
  {
    slug: 'bill-of-lading',
    term: 'B/L',
    definition:
      'Bill of Lading — a document issued by a carrier acknowledging receipt of cargo and serving as a contract and title document.',
    category: 'Documentation',
    inDetail:
      'The Bill of Lading (B/L) is the most important document in ocean freight: it serves three roles at once. It is a receipt confirming the carrier took the cargo; it is evidence of the contract of carriage; and, when issued \u201cto order\u201d or in negotiable form, it is a document of title — whoever holds the original B/L can claim the goods. This title function is why originals are so tightly controlled and why a \u201cTelex Release\u201d or \u201cSea Waybill\u201d (which has no negotiable original) is often used for China-to-GCC trade to avoid couriering originals. The B/L also carries the HS code, container and seal numbers, and the named consignee — errors here cause clearance delays. Always reconcile the B/L against the commercial invoice and packing list before release.',
    whyItMatters:
      'The B/L is both contract and title to your goods — getting the consignee, HS code and seal details right on it is what lets you actually clear and collect the cargo.',
    example:
      'A Shenzhen-to-Jebel-Ali shipment moves under a negotiable B/L; the importer presents the original to release the container from DP World\u2019s terminal.',
    related: ['hs-code', 'incoterms', 'customs-broker'],
    updated: '2026-09-01',
  },
  {
    slug: 'hs-code',
    term: 'HS Code',
    definition:
      'Harmonized System Code — an internationally standardized numeric code used to classify traded products for customs and duties.',
    category: 'Documentation',
    inDetail:
      'The HS (Harmonized System) Code is the six-digit international classification for traded goods, extended by most countries to eight or ten digits for local detail. It is the single most consequential piece of data on your paperwork because it drives the duty rate, any conformity requirements, and whether the goods are even permitted into the destination country. In GCC trade, the HS code is where compliance starts: the wrong code can mean paying 5% duty when you owed 15%, or flagging your shipment for inspection. GCC countries apply a unified six-digit tariff, but each adds national digits — Saudi Arabia and the UAE use eight to ten digits. Assigning the HS code is legally the importer\u2019s responsibility, and misclassification carries penalties, so it is worth confirming with a broker.',
    whyItMatters:
      'The HS code determines duty, permits and compliance — a wrong code in GCC trade can overpay duty, trigger inspections, or block entry entirely.',
    example:
      'A UAE importer classifying ceramic tiles under the correct HS heading pays 5% duty; a wrong code could pull a higher rate or a conformity flag.',
    whoPays: 'Importer pays the duty the HS code determines.',
    whoBearsRisk: 'Importer bears the penalty risk of misclassification.',
    commonMisunderstanding: 'The first 6 digits are globally harmonised; the remaining digits vary by country.',
    related: ['saso', 'saber', 'customs-broker'],
    updated: '2026-09-01',
  },
  {
    slug: 'saso',
    term: 'SASO',
    definition:
      'Saudi Standards, Metrology and Quality Organization — the body setting product standards and conformity requirements for imports into Saudi Arabia.',
    category: 'GCC compliance',
    inDetail:
      'SASO (the Saudi Standards, Metrology and Quality Organization) is Saudi Arabia\u2019s national standards body. It sets the technical regulations that many imported products must meet before they can enter the kingdom, and it issues the Certificate of Conformity that proves compliance. For regulated products — electrical goods, toys, building materials, cosmetics and many others — a SASO certificate is mandatory and is obtained through the SABER platform before shipment. Importing without it is the classic Saudi clearance failure: the goods arrive, are held at the port, and demurrage begins while conformity is sorted out retroactively. SASO requirements are product-specific, so the first question for any China-to-Saudi shipment should be whether the product is SASO-regulated.',
    whyItMatters:
      'SASO conformity is mandatory for most regulated goods into Saudi Arabia — shipping without it is the most common cause of port holds and demurrage.',
    example:
      'A Chinese electrical-appliance exporter must secure a SASO Certificate of Conformity via SABER before the goods can clear Jeddah or Dammam.',
    related: ['saber', 'hs-code', 'customs-broker'],
    updated: '2026-09-01',
  },
  {
    slug: 'saber',
    term: 'SABER',
    definition:
      'An online platform used to register products and obtain conformity certificates for imports into Saudi Arabia.',
    category: 'GCC compliance',
    inDetail:
      'SABER is Saudi Arabia\u2019s online product-conformity system, the digital gateway through which importers register products and obtain the required Certificates of Conformity. The flow is: register the product (which maps it to its HS code and any SASO technical regulation), obtain a conformity certificate from an approved body, and then use SABER to generate the shipment-level clearance documents. SABER applies to both regulated and non-regulated products — even non-regulated goods need a self-declaration — so almost every commercial import touches the platform. The recurring lesson on the China-to-GCC corridor is to complete SABER before the vessel sails: cargo that arrives without the SABER clearance documents sits at the port accumulating demurrage.',
    whyItMatters:
      'SABER is the mandatory Saudi conformity platform for nearly all imports — completing it before sailing is the single most effective way to avoid Jeddah/Dammam port holds.',
    example:
      'A Riyadh importer registers their product on SABER, secures the conformity certificate pre-shipment, and clears through Dammam without delay.',
    related: ['saso', 'hs-code', 'customs-broker'],
    updated: '2026-09-01',
  },
  {
    slug: 'customs-broker',
    term: 'Customs Broker',
    definition:
      'A licensed intermediary that prepares documentation and clears goods through customs on behalf of importers and exporters.',
    category: 'Customs & clearance',
    inDetail:
      'A customs broker is the licensed professional who prepares the entry documents, calculates duties and taxes, and clears goods through customs on your behalf. In the GCC, using a broker is effectively mandatory for commercial cargo: each country\u2019s customs operates its own electronic system (Saudi\u2019s Fasah, the UAE\u2019s Mirsal, Qatar\u2019s Al Nadeeb), and brokers hold the licences and local knowledge to navigate them. The broker\u2019s job is to reconcile the invoice, packing list and bill of lading, assign the correct HS code, and settle duty and VAT. A good broker also flags conformity requirements early — the difference between a broker who asks for your SABER certificate before sailing and one who discovers the problem at the port is measured in days of demurrage.',
    whyItMatters:
      'In the GCC a broker is effectively mandatory for commercial cargo, and a good one catches compliance problems early — before they turn into port-hold demurrage.',
    example:
      'A Kuwait importer\u2019s broker files the entry, applies the correct HS code, and settles the 5% duty so the container can be released from Shuwaikh.',
    whoPays: 'Importer pays the broker\'s service fee.',
    whoBearsRisk: 'Importer retains responsibility for declarations, even when a broker files them.',
    commonMisunderstanding: 'A broker clears your goods but does not absorb your tax or compliance liability.',
    related: ['hs-code', 'bill-of-lading', 'ddp'],
    updated: '2026-09-01',
  },
  {
    slug: 'volumetric-weight',
    term: 'Volumetric Weight',
    definition:
      'A weight derived from a shipment\u2019s volume, used by air carriers to charge for low-density cargo.',
    category: 'Measurement',
    inDetail:
      'Volumetric weight is a calculated \u201cweight\u201d that air carriers use to charge for cargo that is light but bulky, so a shipment of pillows does not pay the same as the same mass of steel. It is computed from the shipment\u2019s volume using a standard divisor — commonly length × width × height (in cm) ÷ 6000, giving a figure in kilograms — and the airline charges on the higher of actual or volumetric weight. The concept matters because air freight between China and the GCC is routinely used for urgent or high-value goods, and low-density cargo can be billed at several times its actual weight. Understanding volumetric weight lets you compare air versus express versus sea freight on a true like-for-like basis.',
    whyItMatters:
      'Air freight bills on the higher of actual or volumetric weight, so bulky light cargo can cost far more than its physical weight suggests — know the divisor before quoting.',
    example:
      'A 40kg carton of electronics measuring 120×80×60cm has a volumetric weight of 120×80×60÷6000 = 96kg, so it is billed at 96kg.',
    whoPays: 'Shipper pays air freight on chargeable weight, which uses volumetric weight.',
    whoBearsRisk: 'Not a risk term — a pricing basis.',
    commonMisunderstanding: 'The divisor differs: air freight typically divides by 6000, express couriers by 5000.',
    related: ['chargeable-weight', 'cbm'],
    updated: '2026-09-01',
  },
  {
    slug: 'chargeable-weight',
    term: 'Chargeable Weight',
    definition:
      'The greater of actual weight and volumetric weight, used as the basis for air freight billing.',
    category: 'Measurement',
    inDetail:
      'Chargeable weight is the number air carriers actually bill on: the greater of a shipment\u2019s actual (gross) weight and its volumetric weight. For dense cargo, actual weight governs; for bulky cargo, volumetric weight does. Because it is always the higher figure, chargeable weight is the true basis for air-freight pricing, and it is why two shipments of identical physical weight can cost very differently depending on packaging density. For China-to-GCC air freight — commonly used for samples, spare parts and high-value goods — the practical lever is packaging: compacting and optimising carton dimensions can reduce volumetric weight and therefore the bill even when the physical weight is unchanged.',
    whyItMatters:
      'Chargeable weight is what you actually pay in air freight — optimising packaging to cut volumetric weight is a direct, controllable cost lever.',
    example:
      'A shipment weighing 60kg actual but 96kg volumetric is billed at 96kg chargeable weight; repacking to 70kg volumetric drops the bill materially.',
    whoPays: 'Shipper pays on the higher of gross or volumetric weight.',
    whoBearsRisk: 'Not a risk term — a pricing rule.',
    commonMisunderstanding: 'Chargeable weight is max(gross, volumetric), not a separate physical quantity.',
    related: ['volumetric-weight', 'cbm'],
    updated: '2026-09-01',
  },
  {
    slug: 'fob',
    term: 'FOB',
    definition:
      'Free on Board — the seller delivers goods on board the vessel at the named origin port; the buyer pays freight and insurance from there.',
    category: 'Trade term',
    inDetail:
      'FOB (Free on Board) is one of the most-used Incoterms in China export. Under FOB the seller\u2019s obligation ends the moment the goods cross the ship\u2019s rail at the named origin port — the seller handles export clearance and inland transport to the port, while the buyer arranges and pays the ocean freight, insurance and everything after loading. On the China-to-GCC corridor FOB is the default for many experienced importers because it gives the buyer control over the carrier and the freight rate. The catch is that the buyer also owns the risk the moment the goods are on board: if the container is lost, damaged or delayed at sea, that is the buyer\u2019s problem, not the seller\u2019s. FOB is a buyer-control term — you win by negotiating your own freight, but you carry the ocean risk.',
    whyItMatters:
      'FOB lets you control the carrier and freight cost, but transfers ocean risk to you at the origin port — the most common term for China-to-GCC buyers who have their own forwarder.',
    example:
      'A Dammam importer buys FOB Shanghai: the Chinese seller clears export and loads the container; the Saudi buyer pays the ocean freight to Dammam and owns the goods from the moment they are on board.',
    whoPays: 'Buyer pays freight and insurance from the moment the goods are on board.',
    whoBearsRisk: 'Risk transfers to the buyer once goods are loaded on the vessel.',
    commonMisunderstanding: 'FOB does not mean the seller manages the shipment to the destination port.',
    related: ['cif', 'exw', 'incoterms'],
    updated: '2026-09-01',
  },
  {
    slug: 'cif',
    term: 'CIF',
    definition:
      'Cost, Insurance and Freight — the seller pays freight and insurance to the named destination port; risk transfers to the buyer once loaded at origin.',
    category: 'Trade term',
    inDetail:
      'CIF (Cost, Insurance and Freight) means the seller pays the ocean freight and a minimum level of marine insurance to the named destination port, while the buyer takes on risk once the goods are loaded at origin. It sounds like the seller does everything, but it is not door-to-door: the buyer still handles import clearance, duties and VAT at the destination. CIF is common on the China-to-GCC lane because it bundles freight into the purchase price, which suits buyers who want a single price and no involvement in arranging ocean transport. The hidden caveat is the insurance — under CIF the seller is only obliged to insure at the minimum ICC(C) level, which covers total loss but little else. If you want real cover, buy supplementary insurance yourself.',
    whyItMatters:
      'CIF bundles freight and basic insurance into one price, but covers only minimum-risk loss — add your own insurance if the cargo is valuable or fragile.',
    example:
      'A UAE importer buys CIF Jebel Ali: the seller pays freight and minimum insurance to Jebel Ali; the buyer clears import and pays 5% duty plus 5% VAT on arrival.',
    whoPays: 'Seller pays freight and insurance to the destination port.',
    whoBearsRisk: 'Risk still transfers to the buyer at loading — insurance covers loss, not the buyer\'s obligation.',
    commonMisunderstanding: 'CIF does not mean the seller unloads or clears the goods at destination.',
    related: ['fob', 'ddp', 'incoterms'],
    updated: '2026-09-01',
  },
  {
    slug: 'exw',
    term: 'EXW',
    definition:
      'Ex Works — the seller makes goods available at their premises; the buyer bears all transport, export clearance and risk from the factory gate.',
    category: 'Trade term',
    inDetail:
      'EXW (Ex Works) is the minimum-obligation term for the seller and the maximum burden for the buyer. The seller simply makes the goods available at their factory or warehouse; the buyer is responsible for everything after that — inland collection, export clearance in China, ocean or air freight, import clearance and final delivery. EXW quotes look cheap because they exclude all logistics, but that saving is an illusion for a GCC buyer: without a China-side agent you cannot even legally export the goods, since Chinese export clearance must be done by a registered entity. On the China-to-GCC lane EXW only makes sense if you already have a forwarder with a China office that can pick up, clear export and ship for you.',
    whyItMatters:
      'EXW is the cheapest-looking but most burden-heavy term — it only works for a GCC buyer who already has a forwarder with China-side export capability.',
    example:
      'A Qatari buyer quoted EXW Shenzhen must arrange a China forwarder to collect from the factory, clear export and ship to Hamad Port — otherwise the goods never leave China.',
    whoPays: 'Buyer pays essentially everything from the seller\'s premises.',
    whoBearsRisk: 'Buyer bears almost all risk from the moment goods leave the seller.',
    commonMisunderstanding: 'EXW is the least work for the exporter and the most risk for the importer.',
    related: ['fob', 'incoterms', 'customs-broker'],
    updated: '2026-09-01',
  },
  {
    slug: 'free-zone',
    term: 'Free Zone',
    definition:
      'A designated area where goods can be stored, processed or re-exported with import duty deferred or waived until they enter the mainland.',
    category: 'Customs & compliance',
    inDetail:
      'A free zone is a fenced, customs-controlled area where goods can be landed, stored, consolidated and re-exported without paying import duty. The GCC\u2019s free zones are among the most strategically important in world trade — Jebel Ali Free Zone (JAFZA) in Dubai is the largest, and Khalifa Industrial Zone (KIZAD) in Abu Dhabi, plus zones in each GCC state. For a China-to-GCC importer the value is working capital: you can hold inventory in a free zone duty-deferred, pay duty only when goods actually cross into the mainland, and re-export to Saudi, Qatar or elsewhere without ever paying UAE duty. The trade-off is that free-zone operations need a registered free-zone entity or a licensed logistics partner, and goods moved into the mainland are dutiable at that point.',
    whyItMatters:
      'Free zones defer or avoid duty until goods enter the mainland — a working-capital lever that lets you hold and re-export China cargo without paying UAE duty.',
    example:
      'A distributor holds China-origin electronics in JAFZA, pays no UAE duty, and re-exports to Riyadh and Doha on demand — paying Saudi or Qatari duty only on the portion actually sold into those markets.',
    related: ['ddp', 'customs-broker', 'dap'],
    updated: '2026-09-01',
  },
  {
    slug: 'certificate-of-origin',
    term: 'Certificate of Origin',
    definition:
      'A document certifying the country where goods were manufactured, used to claim preferential duty rates and satisfy import requirements.',
    category: 'Documentation',
    inDetail:
      'A Certificate of Origin (CO) is a document that certifies the country in which the goods were produced. It is issued by a chamber of commerce or authorised body in the exporting country, and it matters in two ways. First, it proves origin for compliance — some GCC imports require a CO as a matter of course. Second, and more valuably, a preferential CO (under a free-trade agreement) can reduce or eliminate import duty. For China-to-GCC trade the base GCC tariff of 5% applies by default, and China currently has no broad FTA with the GCC, so most COs here are non-preferential proof-of-origin documents rather than duty-savers. Still, a CO is frequently requested by GCC customs, especially for re-exports and for goods subject to anti-dumping or origin-specific rules, so it is cheap insurance to obtain one with each shipment.',
    whyItMatters:
      'A Certificate of Origin proves where your goods were made and is frequently required by GCC customs — obtain it with each shipment even when no preferential rate applies.',
    example:
      'A Kuwaiti importer attaches a Chamber of Commerce Certificate of Origin to a Shenzhen shipment of machinery, satisfying Kuwait Customs origin requirements for the entry.',
    related: ['hs-code', 'commercial-invoice', 'bill-of-lading'],
    updated: '2026-09-01',
  },
  {
    slug: 'ams',
    term: 'AMS',
    definition:
      'Automated Manifest System — the US Customs electronic cargo manifest filed before a shipment sails to the United States.',
    category: 'Documentation',
    inDetail:
      'AMS (Automated Manifest System) is the US Customs and Border Protection electronic system that requires ocean carriers to file cargo manifest data before a shipment departs for the United States. It is a US requirement, not a GCC one — but it appears constantly in China freight quotes because so many forwarders serve both markets and copy the terminology. If your destination is Saudi Arabia, the UAE or anywhere in the GCC, AMS does not apply to your shipment; the GCC equivalent is each state\u2019s own electronic customs declaration (Saudi Fasah, UAE Mirsal, Qatar Al Nadeeb). The practical lesson is to not pay an AMS filing fee on a GCC-bound shipment, and to be wary of forwarders who reflexively add US-centric charges to non-US lanes.',
    whyItMatters:
      'AMS is a US-only filing that does not apply to GCC shipments — do not pay an AMS fee on a China-to-GCC lane; the Gulf uses its own customs systems.',
    example:
      'A China forwarder\u2019s template quote adds a $30 AMS fee to a Jeddah shipment; a UAE-bound buyer correctly removes it because AMS is US Customs only.',
    related: ['bill-of-lading', 'customs-broker', 'hs-code'],
    updated: '2026-09-01',
  },
  {
    slug: 'telex-release',
    term: 'Telex Release',
    definition:
      'An electronic release of cargo that lets the consignee collect goods without presenting the original bill of lading.',
    category: 'Documentation',
    inDetail:
      'A Telex Release is the electronic message by which a carrier or agent releases cargo to the consignee without requiring the original bill of lading. Instead of couriering the original B/L across the world — which can take days and risks loss in transit — the shipper surrenders the original at origin and the carrier transmits an electronic release to the destination agent, who then delivers the goods to the named consignee. On the China-to-GCC lane this is standard practice for routine FCL shipments, because it collapses the document delay and lets the buyer collect the container as soon as it is discharged. The trade-off is security: a Telex Release is issued against a surrender of the original, so it is only appropriate when payment is already secured or the buyer is trusted.',
    whyItMatters:
      'Telex Release removes the original-B/L courier delay so you can collect your container immediately at a GCC port — but only use it once payment is secured.',
    example:
      'A Dammam buyer on secured terms asks for a Telex Release, so the container is released at King Abdulaziz Port the day it discharges instead of waiting for the couriered original.',
    related: ['bill-of-lading', 'sea-waybill', 'customs-broker'],
    updated: '2026-09-01',
  },
  {
    slug: 'sea-waybill',
    term: 'Sea Waybill',
    definition:
      'A non-negotiable transport document that evidences the contract of carriage but is not a document of title.',
    category: 'Documentation',
    inDetail:
      'A Sea Waybill is a non-negotiable transport document that records the carriage contract and receipt of goods, but — unlike a negotiable bill of lading — is not a document of title. This means the carrier can deliver to the named consignee without requiring the consignee to present an original document. For China-to-GCC shipments where the goods are already paid for or between trusted parties, a Sea Waybill removes the entire original-document handover problem: no couriered originals, no Telex Release step, just electronic release on arrival. The reason a negotiable B/L still exists is for letter-of-credit trade and for goods that may be sold while in transit, where the title function matters. For most straightforward GCC imports, a Sea Waybill is the simplest and fastest choice.',
    whyItMatters:
      'A Sea Waybill drops the original-document requirement entirely for trusted, paid shipments — the simplest release path for routine China-to-GCC imports.',
    example:
      'A repeat Qatar importer on prepayment terms ships under a Sea Waybill, so Hamad Port releases the goods to them on arrival with no original document and no Telex step.',
    related: ['bill-of-lading', 'telex-release', 'commercial-invoice'],
    updated: '2026-09-01',
  },
  {
    slug: 'air-waybill',
    term: 'Air Waybill (AWB)',
    definition:
      'The non-negotiable transport document for air freight, issued by the carrier and acting as receipt and contract.',
    category: 'Documentation',
    inDetail:
      'The Air Waybill (AWB) is the transport document for air freight, issued by the airline or its agent. It serves as a receipt for the goods, evidence of the contract of carriage, and carries the routing, chargeable weight and handling instructions — but it is always non-negotiable, meaning it is never a document of title. Cargo is simply released to the named consignee on arrival, which is why air freight clears so quickly compared to ocean. For China-to-GCC air freight the AWB number is your tracking key: it lets you follow the shipment from a Chinese airport through any transit to the GCC arrival airport. Because the AWB is not a title document, air freight between trusted parties is essentially frictionless on the document side.',
    whyItMatters:
      'The AWB is your air-freight tracking key and is non-negotiable — cargo releases to the consignee on arrival with no original document, which is why air clears fast.',
    example:
      'A Kuwaiti buyer air-freights 200 kg of spare parts from Shanghai; the AWB number tracks it door-to-airport and the goods release to them on arrival in Kuwait with no original document.',
    related: ['bill-of-lading', 'volumetric-weight', 'chargeable-weight'],
    updated: '2026-09-01',
  },
  {
    slug: 'commercial-invoice',
    term: 'Commercial Invoice',
    definition:
      'The seller\u2019s bill describing the goods, their value and the parties — the core document customs uses to assess duty and VAT.',
    category: 'Documentation',
    inDetail:
      'The Commercial Invoice is the seller\u2019s formal bill for the goods, and it is the single most important document in customs clearance. It states the buyer and seller, a full description of the goods, quantities, unit and total values, the Incoterm, currency and HS codes. GCC customs uses it — not the packing list and not the B/L — as the primary basis for assessing import duty and VAT, so its accuracy directly determines what you pay. The most common and costly error on the China-to-GCC lane is an invoice that understates or misstates value or HS codes, which can trigger re-valuation, inspection or penalties. The invoice value should be the real transaction value, consistent with the packing list and B/L.',
    whyItMatters:
      'The commercial invoice is what GCC customs reads to calculate your duty and VAT — an accurate, consistent invoice is the difference between smooth clearance and a hold.',
    example:
      'A Saudi buyer\u2019s commercial invoice lists the true CIF value and correct HS codes, so ZATCA assesses 5% duty and 15% VAT cleanly instead of flagging the entry for inspection.',
    related: ['hs-code', 'packing-list', 'bill-of-lading'],
    updated: '2026-09-01',
  },
  {
    slug: 'packing-list',
    term: 'Packing List',
    definition:
      'A document detailing how the goods are packed — cartons, weights, dimensions and volumes — used for handling and verification.',
    category: 'Documentation',
    inDetail:
      'The Packing List describes exactly how a shipment is packed: the number and type of packages (cartons, pallets, crates), each package\u2019s dimensions and gross/net weights, and the total volume in cubic metres. It is the document that makes the cargo physically verifiable — customs, carriers and warehouses use it to check that what arrived matches what was declared, and freight forwarders use its dimensions to calculate CBM for LCL billing. On the China-to-GCC lane an accurate packing list is what keeps your freight bill correct: understate the dimensions and your LCL quote is wrong; overstate and you pay for space you are not using. It must be consistent with the commercial invoice and B/L on weights and piece counts.',
    whyItMatters:
      'The packing list makes your cargo verifiable and keeps freight billing accurate — its dimensions drive CBM for LCL, so wrong carton sizes mean a wrong freight bill.',
    example:
      'A 14.4 CBM shipment of 200 cartons carries a packing list with each carton\u2019s 0.6×0.4×0.3 m dimensions, so the forwarder bills the correct volume for the LCL shipment.',
    related: ['commercial-invoice', 'cbm', 'bill-of-lading'],
    updated: '2026-09-01',
  },
  {
    slug: 'fumigation',
    term: 'Fumigation',
    definition:
      'Chemical treatment of wooden packaging to kill pests, required under the ISPM 15 standard for international shipments.',
    category: 'Customs & compliance',
    inDetail:
      'Fumigation is the treatment of wooden packaging — pallets, crates, dunnage — to kill pests, required under the ISPM 15 international standard. Wood packaging moving between countries must be either heat-treated or fumigated and stamped with the ISPM 15 mark, otherwise it can be rejected at the destination and the shipment quarantined or returned at the importer\u2019s cost. For China-to-GCC shipments this matters because so much Chinese cargo moves on wooden pallets: an unmarked pallet at Jeddah or Jebel Ali can hold up clearance. The practical rule is to confirm your supplier uses ISPM 15-stamped wood, or switch to plastic pallets, which are exempt from the requirement entirely.',
    whyItMatters:
      'Unmarked wooden packaging can be quarantined at a GCC port — confirm ISPM 15-stamped pallets or use plastic to avoid a fumigation hold on your China cargo.',
    example:
      'A Bahrain-bound shipment on unstamped wooden pallets is flagged at Khalifa bin Salman; the importer pays for destination fumigation or re-export, while an ISPM 15-stamped pallet would have cleared cleanly.',
    related: ['packing-list', 'certificate-of-origin', 'customs-broker'],
    updated: '2026-09-01',
  },
  {
    slug: 'eori',
    term: 'EORI',
    definition:
      'Economic Operators Registration and Identification \u2014 the free EU or UK identifier required to clear imports and exports, using an ISO country code plus up to 15 alphanumeric characters.',
    category: 'EU & UK customs',
    inDetail:
      'EORI (Economic Operators Registration and Identification) is issued free by the EU member state or HMRC where an operator is established, and it stays with that legal entity. The format is an ISO country code plus up to 15 alphanumeric characters; the UK uses \u201cGB\u201d followed by 12 digits. No EORI means customs cannot accept the declaration, so the cargo waits at the terminal while the importer applies. The number that changes is the hold cost. If a container is stuck for 7 days and terminal demurrage is estimated at \u20ac90 per day (estimate, MEDIUM confidence, because rates vary by terminal and free time), the exposure is 7 days \u00d7 \u20ac90/day = \u20ac630. That is the cost of not holding a free number. The form itself is once-only per legal entity; the recurring loss appears only when the number is missing or the EORI and VAT registration are not linked. Most operators only discover the gap after arrival, when the cost is already running.',
    whyItMatters:
      'A missing EORI can park a container at port for days; at an estimated \u20ac90/day terminal demurrage, a 7-day hold adds \u20ac630 to landed cost before duty or VAT. Treat the EORI as a pre-shipment checklist item, not a customs form you can sort after arrival.',
    example:
      'A UK importer\u2019s first container arrives without an EORI on file and sits for 7 days; at an estimated \u20ac90/day terminal demurrage the delay adds 7 \u00d7 \u20ac90 = \u20ac630 to landed cost, whereas the free EORI number would have let clearance start on day one.',
    related: ['vat-deferral', 'ioss', 'union-customs-code', 'customs-broker'],
    updated: '2026-09-07',
  },
  {
    slug: 'taric',
    term: 'TARIC',
    definition:
      'Integrated Tariff of the EU \u2014 the 10-digit code formed by the 8-digit Combined Nomenclature plus 2 TARIC digits, updated daily with EU measures such as duties, quotas and suspensions.',
    category: 'EU & UK customs',
    inDetail:
      'TARIC is the EU Integrated Tariff: a 10-digit code made of the 8-digit Combined Nomenclature plus 2 extra TARIC digits. The first 8 digits follow the harmonised structure; the last 2 carry the EU-specific measures \u2014 anti-dumping duties, tariff suspensions, quotas and restrictions. The database is updated daily, so the duty on the same 8-digit CN line can change while the TARIC tail changes. The arithmetic trap is that the final 2 digits are not cosmetic. On a $10,000 CIF consignment, a wrong adjacent CN/TARIC classification can flip the line from 0% to 12%, and the swing is 12% \u00d7 $10,000 = $1,200. That is not a filing fee; it is the duty line itself. Most guides stop at the 8-digit code, but the last two TARIC digits are where anti-dumping and suspension measures actually live. The classification decision is therefore a duty decision: the eight-digit line sets the base, and the two TARIC digits set whether an extra measure applies.',
    whyItMatters:
      'Get the first 8 digits wrong and a $10,000 CIF shipment can swing from 0% to 12% duty, a $1,200 landed-cost change before VAT. Verify the full 10-digit TARIC line on the day of entry, because daily updates can move the applicable measure.',
    example:
      'Two identical $10,000 CIF consignments are declared under adjacent TARIC lines: the correct code carries 0%, the wrong one carries 12%, producing $0 versus $1,200 duty on the same goods \u2014 a $1,200 swing from two digits.',
    related: ['eori', 'union-customs-code', 'hs-code', 'customs-broker'],
    updated: '2026-09-07',
  },
  {
    slug: 'ce-marking',
    term: 'CE Marking',
    definition:
      'A conformity mark that is mandatory for products covered by around 30 EU harmonised directives or regulations before they can be placed on the EU single market.',
    category: 'EU & UK compliance',
    inDetail:
      'CE Marking is the manufacturer\u2019s declaration that a product meets every EU harmonised requirement that applies to it, and it is mandatory for products covered by around 30 EU directives or regulations before placement on the single market. It is a conformity and market-access mark, not a general quality or safety \u201cpassed\u201d badge. The practical fork is the conformity route. Low-risk products can follow manufacturer self-declaration, often with no external fee beyond the technical file and internal testing. Higher-risk products must involve a Notified Body, which can add an estimated \u20ac4,000\u2013\u20ac8,000 and 4\u20138 weeks (estimate, MEDIUM confidence, product-dependent). If the product batch is worth \u20ac20,000 and the estimated holding cost of capital is 0.05% per day, a 6-week (42-day) delay is 42 \u00d7 (0.0005 \u00d7 \u20ac20,000) = 42 \u00d7 \u20ac10 = \u20ac420. The real fork is the lead time plus testing fee, not the mark itself. For an importer, the fork is worth confirming before manufacture because the conformity route determines both cash outlay and the date the goods can legally be sold.',
    whyItMatters:
      'Choosing the wrong route changes landed cost: Notified Body involvement can add an estimated \u20ac4,000\u2013\u20ac8,000 and 4\u20138 weeks, while low-risk self-declaration is mainly a documentation job. Above roughly a \u20ac20,000 batch, the delay\u2019s capital cost becomes material even before testing fees.',
    example:
      'A \u20ac20,000 batch of low-risk electronics follows manufacturer self-declaration and clears for the cost of the technical file; the same batch pushed unnecessarily through a Notified Body adds an estimated \u20ac4,000\u2013\u20ac8,000 and 4\u20138 weeks, raising landed cost and delaying launch.',
    related: ['reach', 'ukca', 'hs-code', 'customs-broker'],
    updated: '2026-09-07',
  },
  {
    slug: 'reach',
    term: 'REACH',
    definition:
      'EU Regulation (EC) No 1907/2006 that requires registration of chemical substances manufactured or imported at 1 tonne or more per year per legal entity, with a Chemical Safety Report added above 10 tonnes per year.',
    category: 'EU & UK compliance',
    inDetail:
      'REACH (EU Regulation (EC) No 1907/2006) makes registration of a chemical substance mandatory once a legal entity manufactures or imports 1 tonne or more per year, with a Chemical Safety Report required above 10 tonnes per year. The registration threshold is a cliff, not a gradient. At 900 kg/yr, the importer is below the line: 900 kg \u00f7 1,000 kg = 0.9 tonnes per year, so no registration dossier is due. At 1,000 kg/yr, the same calculation gives 1.0 tonnes per year and the full registration obligation switches on with one extra 100 kg. Above 10,000 kg/yr, the chemical safety report adds another layer of data to the same dossier. ECHA runs the registry, but the data duty sits with the importer or manufacturer. The part most guides skip is that the threshold is per legal entity and per substance, not per product line: two product lines that each carry 600 kg of the same substance inside one entity total 1,200 kg and cross the line.',
    whyItMatters:
      'REACH is a cliff, not a slope: at 900 kg/yr you owe no registration, at 1,000 kg/yr you owe a full dossier, and at 10,000 kg/yr the Chemical Safety Report adds another compliance layer. Plan the tonnage line before ordering, because the obligation is triggered by total annual volume per legal entity.',
    example:
      'An importer brings in 950 kg of a plasticiser per year with no REACH registration; a new product line pushes the same substance to 1,000 kg per year, so the full registration dossier becomes due from that year onward \u2014 a 50 kg volume change that flips the compliance obligation.',
    related: ['ce-marking', 'ukca', 'union-customs-code', 'hs-code'],
    updated: '2026-09-07',
  },
  {
    slug: 'ukca',
    term: 'UKCA',
    definition:
      'UK Conformity Assessed \u2014 the UK product marking introduced on 1 January 2021 to replace CE, now indefinitely recognising CE marking for most product areas after repeated delays.',
    category: 'UK compliance',
    inDetail:
      'UKCA was introduced on 1 January 2021 as the UK replacement for CE, but it was never fully enforced as the only acceptable mark. The UK moved the mandatory date several times, then in 2023 announced that CE marking would be recognised indefinitely for most product areas, a position reaffirmed in 2024. The trap is conflating the physical mark with the conformity obligation: even where CE remains recognised, the importer or manufacturer still has to hold the technical file, declaration and any required testing. The mark itself is not the expensive part. If a \u00a310,000 batch is sent for UKCA-only duplicate testing at an estimated \u00a33,000 (estimate, MEDIUM confidence), that spend is 3,000 \u00f7 10,000 = 0.30, or 30% of invoice value. For goods in scope of the extension, that is avoidable cost with no legal benefit, while the underlying technical file remains non-negotiable. A UKCA mark alone does not create conformity if the underlying assessment is missing.',
    whyItMatters:
      'For most goods in scope of the extension, UKCA is optional, so paying for duplicate UKCA-only testing can add an estimated \u00a32,000\u2013\u00a34,000 of landed cost for no legal benefit. The technical file remains mandatory regardless of which mark appears.',
    example:
      'Before the 2023/2024 recognition position, a manufacturer budgeted an estimated \u00a33,000 for UKCA-only duplicate testing on a \u00a310,000 batch; after relying on the indefinite CE recognition for their product area, that spend is removed, so landed cost falls by \u00a33,000 while the technical file still must exist.',
    related: ['ce-marking', 'reach', 'union-customs-code', 'hs-code'],
    updated: '2026-09-07',
  },
  {
    slug: 'vat-deferral',
    term: 'VAT Deferral',
    definition:
      'A customs mechanism, including UK Postponed VAT Accounting since 1 January 2021, that lets VAT-registered importers account for import VAT on their next VAT return instead of paying at the border.',
    category: 'EU & UK customs',
    inDetail:
      'VAT Deferral (Postponed VAT Accounting in the UK, and VAT deferment under Article 211 UCC in the EU) lets a VAT-registered importer account for import VAT on the next VAT return rather than paying at the border. In the UK the scheme has been in force since 1 January 2021, and the standard VAT rate is 20%. The cash-flow shift is easy to understate. On a \u00a310,000 CIF import, the deferred amount is 20% \u00d7 \u00a310,000 = \u00a32,000. That \u00a32,000 stays in the importer\u2019s bank from the border date until the next VAT return, roughly 30\u201345 days later. For a fully reclaimable input VAT, this is timing, not money: the \u00a32,000 is declared and reclaimed on the same return, so the benefit is working capital, not a discount. EU deferment needs a prior authorisation from the importing member state, while UK PVA is available without a separate guarantee for many VAT-registered importers.',
    whyItMatters:
      'On a \u00a310,000 CIF import, deferring 20% VAT moves \u00a32,000 from the border to the next return 30\u201345 days later \u2014 a cash-flow shift, not a saving, since reclaimable input VAT is only delayed. The working-capital benefit disappears if the trader is not fully VAT-reclaimable.',
    example:
      'On a \u00a310,000 CIF import, paying at the border removes \u00a32,000 immediately (20% \u00d7 \u00a310,000); using UK PVA shifts that \u00a32,000 to the next VAT return 30\u201345 days later, where it is declared and reclaimed, keeping \u00a32,000 of working capital in the business for the window.',
    related: ['eori', 'ioss', 'union-customs-code', 'customs-broker'],
    updated: '2026-09-07',
  },
  {
    slug: 'station-to-station',
    term: 'Station-to-station',
    definition:
      'Rail freight priced for the terminal-to-terminal haul only \u2014 the middle leg of a three-leg move \u2014 which excludes pre-carriage and last-mile trucking that can add roughly 10\u201320% to total freight cost and 1\u20132 days each.',
    category: 'Freight mode',
    inDetail:
      'Station-to-station is rail freight quoted terminal-to-terminal only: the origin rail terminal and the destination rail terminal are covered, but the pre-carriage trucking from the shipper\u2019s door to origin terminal and the last-mile trucking from destination terminal to the consignee are not. It is the middle leg of a three-leg move, and the quote is therefore a cost component, not a landed figure. On a \u20ac2,000 Chengdu\u2013Duisburg terminal-to-terminal rate, adding an estimated 12% origin trucking and 15% destination trucking (estimates, MEDIUM confidence) gives \u20ac2,000 + (12% \u00d7 \u20ac2,000) + (15% \u00d7 \u20ac2,000) = \u20ac2,000 + \u20ac240 + \u20ac300 = \u20ac2,540. The legs also add time: roughly 1\u20132 days at each end. The trap most buyers hit is comparing a station-to-station rail quote with a door-to-door sea or air quote and concluding rail is cheaper when the missing trucking legs erase the gap. Quotes that omit these legs are not wrong, but they answer a narrower question than the buyer usually thinks.',
    whyItMatters:
      'A station-to-station rate understates landed cost by the trucking legs; on a \u20ac2,000 rail quote, estimated pre-carriage and last-mile can add 25\u201330%, or about \u20ac500\u2013\u20ac600, plus 2\u20134 days. Compare door-to-door figures, not terminal-to-terminal rates, before choosing rail.',
    example:
      'A buyer budgets \u20ac2,000 from a station-to-station Chengdu\u2013Duisburg quote; adding an estimated 12% origin and 15% destination trucking moves the landed freight to \u20ac2,540 (\u20ac2,000 + \u20ac240 + \u20ac300) and adds roughly 2\u20134 days, so the door-to-door cost is \u20ac540 higher than the terminal rate.',
    related: ['fcl', 'lcl', 'demurrage'],
    updated: '2026-09-07',
  },
  {
    slug: 'ioss',
    term: 'IOSS',
    definition:
      'EU Import One-Stop Shop, in force since 1 July 2021, allowing sellers and marketplaces to charge and remit EU VAT at the point of sale for B2C distance sales of goods with an intrinsic value up to \u20ac150.',
    category: 'EU & UK customs',
    inDetail:
      'IOSS (Import One-Stop Shop) has applied since 1 July 2021 to B2C distance sales of goods with an intrinsic value up to \u20ac150, letting the seller or marketplace charge EU VAT at checkout and remit it through one member state. The \u20ac150 threshold is a hard cliff. A \u20ac149 item with 20% VAT charges \u20ac29.80 at the point of sale. A \u20ac151 item is outside IOSS, so import VAT is collected at delivery: 20% \u00d7 \u20ac151 = \u20ac30.20, plus an estimated \u20ac10\u2013\u20ac25 courier handling fee (estimate, MEDIUM confidence), giving \u20ac40.20\u2013\u20ac55.20 in tax and fee at the door. The gap is not \u20ac2 of goods value; it is the difference between \u20ac29.80 collected upfront and \u20ac40.20\u2013\u20ac55.20 collected later. Above \u20ac150, the seller should instead state that import VAT and duty are due at destination. A seller pricing a product at \u20ac151 creates a worse delivery experience than one at \u20ac149, which is why margin decisions should be tested against the threshold rather than after launch.',
    whyItMatters:
      'For a B2C parcel at the \u20ac150 boundary, IOSS moves VAT to checkout; above \u20ac150 the same item can trigger destination import VAT plus an estimated \u20ac10\u2013\u20ac25 courier fee, a cash-flow and customer-experience cliff that pricing cannot smooth over.',
    example:
      'A consumer buys a \u20ac149 phone case under IOSS and pays \u20ac29.80 VAT at checkout; the same case priced at \u20ac151 falls outside IOSS, so they pay \u20ac30.20 import VAT plus an estimated \u20ac10\u2013\u20ac25 courier handling fee at delivery \u2014 \u20ac40.20\u2013\u20ac55.20 at the door instead of \u20ac29.80 upfront.',
    related: ['vat-deferral', 'eori', 'union-customs-code', 'dap'],
    updated: '2026-09-07',
  },
  {
    slug: 'union-customs-code',
    term: 'Union Customs Code (UCC)',
    definition:
      'Regulation (EU) No 952/2013, in force since 1 May 2016, setting EU customs rules for valuation, origin and procedures, with duty levied on the transaction value adjusted to a CIF basis at the EU border.',
    category: 'EU & UK customs',
    inDetail:
      'The Union Customs Code, Regulation (EU) No 952/2013, has been in force since 1 May 2016 and sets the EU rules on customs valuation, origin and procedures. The valuation point is the part importers miss: duty is levied on the transaction value adjusted to a CIF basis at the EU border, not on the supplier invoice alone. If goods are bought at \u20ac10,000 and freight to Rotterdam is \u20ac1,200 with insurance of \u20ac80, the CIF value is \u20ac10,000 + \u20ac1,200 + \u20ac80 = \u20ac11,280. At an illustrative product-line duty rate of 5% (example rate; the actual rate comes from TARIC), the charge is 5% \u00d7 \u20ac11,280 = \u20ac564, not the naive 5% \u00d7 \u20ac10,000 = \u20ac500. The \u20ac64 difference is created entirely by adding freight and insurance before applying the rate. UCC also governs the origin and procedure rules that determine whether a preferential rate applies. In practice, this means asking the forwarder for the CIF value before the entry is filed, not after the duty invoice arrives.',
    whyItMatters:
      'UCC changes the base: import duty is assessed on CIF value, not the supplier invoice, so a \u20ac10,000 invoice with \u20ac1,280 of freight and insurance becomes \u20ac11,280 of dutiable value. At an illustrative 5% rate that is \u20ac564 duty, \u20ac64 more than the naive invoice-based \u20ac500.',
    example:
      'An importer budgets \u20ac500 duty as 5% of a \u20ac10,000 supplier invoice; UCC values the same goods at \u20ac11,280 CIF after \u20ac1,200 freight and \u20ac80 insurance, so the correct 5% charge is \u20ac564 \u2014 \u20ac64 more than the invoice-only calculation.',
    related: ['taric', 'eori', 'vat-deferral', 'cif'],
    updated: '2026-09-07',
  },
];

export function getTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossary.find((term) => term.slug === slug);
}
