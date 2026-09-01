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
    related: ['volumetric-weight', 'cbm'],
    updated: '2026-09-01',
  },
];

export function getTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossary.find((term) => term.slug === slug);
}
