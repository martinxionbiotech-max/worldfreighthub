import type { Method } from './types';

export const methods: Method[] = [
  {
    slug: 'fcl',
    name: 'FCL (Full Container Load)',
    summary:
      'Dedicated container shipping for larger volumes, using a full 20ft or 40ft container door-to-door or port-to-port.',
    tldr:
      'FCL is the lowest cost-per-unit way to move a full container from China to the GCC — but only above ~15 CBM, and only if you clear the box within free time. Demurrage of $75–300 per day is the hidden cost that can erase the savings.',
    definition:
      'FCL — Full Container Load — means you book an entire container for your cargo alone. You are not sharing space with other shippers. A 20ft container holds roughly 33 CBM and a 40ft container roughly 67 CBM; you pay for the box whether it is full or not.',
    bestFor: [
      'Shipments of roughly 15 CBM or more, where a full box makes economic sense.',
      'Heavy or dense cargo that would be overcharged per-kilo or per-CBM elsewhere.',
      'High-value or fragile goods that should not be consolidated with other cargo.',
      'Scheduled, repeat shipments where a predictable door-to-door flow matters.',
    ],
    pricingLogic:
      'FCL is priced per container, not per cubic metre. The ocean freight is a flat rate for the box, and you add origin and destination terminal handling (OTHC/DTHC), bunker and documentation fees on top. The per-unit cost falls as you fill the box — which is the whole point.',
    costRows: [
      { label: '20ft container (China → GCC)', range: '$1,500 – $6,200', confidence: 'MEDIUM' },
      { label: '40ft container (China → GCC)', range: '$1,900 – $8,100', confidence: 'MEDIUM' },
    ],
    transitTime: {
      range: '14–30 days',
      note: 'Port-to-port, China base ports to GCC ports. Direct sailings are faster (14–20 days); transshipment via Singapore or Colombo adds a week or more.',
      confidence: 'MEDIUM',
    },
    pros: [
      'Lowest cost per unit of any sea freight method, once the box is reasonably full.',
      'Your cargo is sealed in its own container — no mixing, less handling damage.',
      'Most predictable schedule of the ocean options; FCL is the least likely to be delayed by consolidation.',
      'Best for heavy, bulky or sensitive cargo that LCL and air cannot move economically.',
    ],
    cons: [
      'You pay for the full container even if you only half-fill it — wasted spend below ~15 CBM.',
      'Door-to-door FCL needs trucking at both ends, which adds cost and coordination.',
      'Higher upfront cost than LCL for a single small shipment.',
      'Demurrage and detention fees apply if the box is not returned within free time.',
    ],
    insight:
      'The cost most FCL shippers overlook is demurrage. Free time at GCC terminals runs only 3–7 days, and daily charges escalate from roughly $50 to $300+ the longer the box sits — 2025 averages were $150–300 per day. A customs hold of a week can add hundreds of dollars to a single container, quietly erasing the per-unit savings that made FCL attractive in the first place. Plan clearance and trucking before the ship arrives, not after.',
    process: [
      'Book space with a forwarder or carrier and receive a booking confirmation.',
      'The empty container is delivered to the shipper for loading (or loaded at the CFS).',
      'Cargo is loaded, sealed, and trucked to the origin port.',
      'China export customs clearance is completed against the invoice, packing list and HS codes.',
      'The container sails on the booked vessel, direct or transshipped.',
      'At the destination port the container is cleared, trucked to the consignee, unloaded and returned empty.',
    ],
    faqs: [
      {
        q: 'At what volume does FCL beat LCL on cost?',
        a: 'Roughly 15 CBM and up. Below that, LCL usually costs less because you only pay for the space you use. Above it, the flat FCL rate spread across your cargo becomes the cheaper per-unit option.',
      },
      {
        q: '20ft or 40ft — how do I choose?',
        a: 'Use the container that your volume justifies. A 20ft holds ~33 CBM, a 40ft ~67 CBM. A 40ft often costs only 30–50% more than a 20ft, so if you are close to filling a 20ft, a 40ft can be the better value.',
      },
      {
        q: 'Does FCL include customs clearance?',
        a: 'Ocean freight covers the port-to-port leg only. Export and import clearance, duties and VAT are separate — unless you book DDP, which bundles everything into a single delivered price.',
      },
    ],
    keyTakeaways: [
      'FCL is cheapest per unit only above ~15 CBM — below that you are paying for empty space.',
      'Demurrage ($75–300/day after 3–7 free days) is the hidden cost that erodes FCL savings.',
      'Direct sailings (14–20 days) beat transshipment, which adds a week or more.',
      'A 40ft costs only ~30–50% more than a 20ft but holds twice the volume.',
    ],
    compareWith: { slug: 'lcl', label: 'Compare FCL vs LCL' },
    updated: '2026-09-01',
    sources: [
      {
        id: 'maersk-fcl',
        name: 'Maersk — FCL shipping explained',
        url: 'https://www.maersk.com/logistics-explained/shipping-documents/fcl',
        type: 'carrier',
      },
      {
        id: 'sino-aug2026',
        name: 'Sino Shipping — China to Saudi Arabia rates & transit (Aug 2026 snapshot)',
        url: 'https://www.sino-shipping.com/freight-from-china-to-saudi-arabia',
        type: 'industry',
      },
      {
        id: 'freightamigo-demurrage',
        name: 'FreightAmigo — Demurrage & detention charges (2025 averages)',
        url: 'https://www.freightamigo.com/en/blog/logistics/demurrage-and-detention-charges-in-shipping-understanding-and-minimizing-costs',
        type: 'industry',
      },
    ],
  },
  {
    slug: 'lcl',
    name: 'LCL (Less than Container Load)',
    summary:
      'Shared container space for smaller shipments, charged by volume (CBM) instead of a full container.',
    tldr:
      'LCL lets you pay only for the space you use — the right call below ~15 CBM. But the headline per-CBM rate hides CFS consolidation fees and a longer, less predictable transit, so the real cost is higher than the quoted rate suggests.',
    definition:
      'LCL — Less than Container Load — means your cargo shares a container with other shippers. You pay only for the volume you occupy, measured in cubic metres (CBM). The forwarder consolidates multiple shipments into one box at origin and de-consolidates at destination.',
    bestFor: [
      'Shipments below roughly 15 CBM that do not justify a full container.',
      'First orders, samples, and testing a new GCC market before committing to volume.',
      'Cargo that is light but bulky, where per-CBM pricing beats per-kilo alternatives.',
      'Importers who value flexibility over the lowest possible per-unit cost.',
    ],
    pricingLogic:
      'LCL is priced per CBM, usually with a 1 CBM minimum. On top of the ocean freight you pay CFS (container freight station) charges at both ends for consolidation and de-consolidation. The all-in per-CBM rate is higher than FCL per-CBM — you are buying convenience, not volume efficiency.',
    costRows: [
      { label: 'LCL per CBM (China → GCC)', range: '$20 – $110 / CBM', confidence: 'MEDIUM' },
    ],
    transitTime: {
      range: '15–35 days',
      note: 'Port-to-port, slower than FCL because cargo must be consolidated before sailing and de-consolidated after arrival. Add 5–10 days over an equivalent FCL sailing.',
      confidence: 'MEDIUM',
    },
    pros: [
      'No minimum volume — you pay only for the space you actually use.',
      'Lower upfront cost than FCL for small shipments.',
      'Flexible for irregular or first-time volumes; easy to scale up to FCL later.',
      'Freight is handled by the forwarder, so you do not manage a container.',
    ],
    cons: [
      'Higher cost per CBM than FCL — the convenience premium.',
      'Longer transit: consolidation and de-consolidation add days or weeks.',
      'Cargo is handled more times, raising the risk of damage or misrouting.',
      'Less predictable schedule than FCL; one delayed co-shipper can hold the whole box.',
    ],
    insight:
      'LCL looks cheap on a per-CBM quote and quietly stops being cheap once the CFS charges land. Consolidation at origin, de-consolidation at destination, and a minimum billable volume all stack on top of the headline rate — and the longer transit means your money is tied up in floating inventory for an extra week or two. LCL is the right tool below ~15 CBM, but it is a convenience you pay for, not a bargain.',
    process: [
      'Book the shipment and deliver your cargo to the origin CFS (or arrange pickup).',
      'Your cargo is consolidated with other shippers into a shared container.',
      'The consolidated box is exported, cleared and sailed.',
      'At destination the box is de-consolidated at the CFS and your cargo is separated.',
      'Your cargo is cleared, and you collect it or arrange last-mile delivery.',
    ],
    faqs: [
      {
        q: 'What is the minimum volume for LCL?',
        a: 'Most forwarders apply a 1 CBM minimum. Below that you still pay for 1 CBM, so very small or dense shipments may be cheaper by express or air instead.',
      },
      {
        q: 'Is LCL always slower than FCL?',
        a: 'Almost always, yes. The consolidation window before sailing and de-consolidation after arrival typically add 5–10 days versus an equivalent FCL sailing on the same lane.',
      },
      {
        q: 'When should I switch from LCL to FCL?',
        a: 'Around 15 CBM. Above that volume the flat FCL rate usually becomes cheaper per CBM than LCL — and you get a faster, more predictable sailing as a bonus.',
      },
    ],
    keyTakeaways: [
      'LCL is the right call below ~15 CBM — you pay only for space used.',
      'CFS consolidation and de-consolidation fees sit on top of the per-CBM rate.',
      'Expect 5–10 days slower than FCL, with more handling and more schedule risk.',
      'Below 1 CBM, express or air is often cheaper than paying the LCL minimum.',
    ],
    compareWith: { slug: 'fcl', label: 'Compare LCL vs FCL' },
    updated: '2026-09-01',
    sources: [
      {
        id: 'maersk-lcl',
        name: 'Maersk — LCL (Less than Container Load) explained',
        url: 'https://www.maersk.com/logistics-explained/shipping-documents/lcl',
        type: 'carrier',
      },
      {
        id: 'freightamigo-uae',
        name: 'FreightAmigo — China to UAE LCL rates & transit',
        url: 'https://www.freightamigo.com/en/routes/shipping-from-china-to-united-arab-emirates',
        type: 'industry',
      },
    ],
  },
  {
    slug: 'air-freight',
    name: 'Air Freight',
    summary:
      'Expedited air transport for time-critical cargo, priced on chargeable weight.',
    tldr:
      'Air freight is the fastest commercial option, but you are billed on chargeable weight — the greater of actual and volumetric weight. Light, bulky cargo is the classic trap: a box that weighs 20 kg can be charged as 27 kg or more.',
    definition:
      'Air freight moves cargo on scheduled passenger or freighter aircraft from a Chinese airport to a GCC airport. It is the fastest non-courier option for commercial cargo, and it is priced on chargeable weight — the greater of actual weight and volumetric weight.',
    bestFor: [
      'Time-critical cargo that cannot wait for a 2–4 week ocean sailing.',
      'High-value goods where insurance and holding costs make speed worth the premium.',
      'Light, dense or perishable cargo with a short shelf life.',
      'Urgent replenishment, spare parts, and seasonal stock-outs.',
    ],
    pricingLogic:
      'Air freight is priced per kilogram of chargeable weight. Chargeable weight is the higher of gross weight and volumetric weight, where volumetric weight = length × width × height (cm) ÷ 6000. A light but bulky box is charged on its volume, not its scale weight — that is the single biggest surprise for first-time air shippers.',
    costRows: [
      { label: 'Air freight per kg (China → GCC)', range: '$4.3 – $11.0 / kg', confidence: 'MEDIUM' },
    ],
    transitTime: {
      range: '3–7 days',
      note: 'Airport-to-airport for commercial cargo, plus time for origin pickup, export handling and destination clearance. Transit on the flight itself is hours; the ground handling is where the days go.',
      confidence: 'MEDIUM',
    },
    pros: [
      'Fastest commercial option — days, not weeks.',
      'Lower insurance cost, because goods are in transit for less time.',
      'Less handling damage risk than multi-stage ocean consolidation.',
      'Ideal for high-value-per-kilo cargo where freight is a small fraction of value.',
    ],
    cons: [
      'The most expensive method per kilogram — often 5–10× sea freight.',
      'Weight and dimensional limits exclude very heavy or oversized cargo.',
      'Subject to fuel surcharges and peak-season rate swings.',
      'Not suited to low-value, heavy goods where freight would exceed the cargo value.',
    ],
    insight:
      'Chargeable weight is where air freight silently gets expensive. The IATA standard divisor is 6000, but a box that is large and light is charged on its volume: an 80 × 50 × 40 cm box weighing 20 kg is billed as 26.7 kg. Add a 15–25 kg pallet and the number climbs again. If your cargo is bulky but light — packaging, foam, empty containers — air freight may cost far more than the per-kg rate implies, and sea freight can suddenly look rational.',
    process: [
      'Book space with an air forwarder and confirm the airport pair and ready date.',
      'Cargo is delivered to the origin airport or a forwarder warehouse for screening.',
      'Export clearance and security screening are completed.',
      'The cargo flies, usually with a transit stop depending on the routing.',
      'At destination the cargo is cleared, then delivered or collected.',
    ],
    faqs: [
      {
        q: 'What is the difference between air freight and express?',
        a: 'Air freight is airport-to-airport for commercial cargo, priced per chargeable kg, and you arrange pickup and delivery. Express (courier) is door-to-door for small parcels with tracking, and costs more per kg.',
      },
      {
        q: 'How is chargeable weight calculated?',
        a: 'Take the greater of gross weight and volumetric weight. Volumetric weight = length × width × height (cm) ÷ 6000 for air freight (÷ 5000 for most couriers). A box that is large but light is charged on its volume.',
      },
      {
        q: 'When does air freight beat sea freight on total cost?',
        a: 'When holding, insurance or lost-sale costs exceed the freight premium — typically for high-value or perishable cargo, or when a stock-out is more expensive than the extra freight.',
      },
    ],
    keyTakeaways: [
      'You are billed on chargeable weight, not scale weight — bulky light cargo is the classic trap.',
      'Volumetric weight = L×W×H (cm) ÷ 6000; couriers use ÷ 5000, which charges more.',
      'Air is 5–10× sea freight per kg — only worth it when speed or value justifies it.',
      'Pallet weight (15–25 kg) counts; measure the widest point, not the pallet base.',
    ],
    compareWith: { slug: 'express', label: 'Air freight vs express' },
    updated: '2026-09-01',
    sources: [
      {
        id: 'iata-air',
        name: 'IATA — Air cargo chargeable weight',
        url: 'https://www.iata.org/en/publications/newsletters/iata-knowledge-hub/air-cargo-chargeable-weight/',
        type: 'organization',
      },
      {
        id: 'sino-air-aug2026',
        name: 'Sino Shipping — China to Saudi air freight (Aug 2026 snapshot)',
        url: 'https://www.sino-shipping.com/freight-from-china-to-saudi-arabia',
        type: 'industry',
      },
    ],
  },
  {
    slug: 'rail-freight',
    name: 'Rail Freight',
    summary:
      'Overland rail corridors that balance cost and transit time for selected destinations.',
    tldr:
      'Rail sits between sea and air on cost and speed, but its reach into the GCC is limited — most Gulf destinations still need a road or sea bridging leg. It is a genuine option on Central Asian corridors and a niche one for the Gulf itself.',
    definition:
      'Rail freight moves containerised cargo overland on the China–Europe and Central Asia rail network. For the GCC it is less direct than ocean or air — rail typically reaches the Gulf via Central Asian or Iranian corridors — but it fills a middle ground on cost and speed for cargo that cannot justify air and cannot wait for sea.',
    bestFor: [
      'Cargo bound for Central Asia or the northern Gulf where rail corridors reach.',
      'Shipments where 2–3 weeks is acceptable but a 4-week ocean sailing is not.',
      'Bulk or containerised goods that suit block-train consolidation.',
      'A cost-speed compromise between air freight and sea freight.',
    ],
    pricingLogic:
      'Rail is usually priced per container (like FCL) or per CBM for consolidated loads. Rates sit between sea and air — closer to sea for full containers. The economics depend heavily on the corridor and how much of the journey is rail versus road bridging.',
    costRows: [
      { label: 'Rail 20ft container (China → Middle East)', range: '$1,500 – $5,500', confidence: 'LOW' },
    ],
    transitTime: {
      range: '18–25 days',
      note: 'Highly corridor-dependent. China–Europe block trains run ~15–20 days; routes into the Gulf via Central Asia are less standardised and should be confirmed per lane.',
      confidence: 'LOW',
    },
    pros: [
      'Faster than sea freight, cheaper than air — a genuine middle option.',
      'More schedule stability than transshipped ocean sailings on some corridors.',
      'Lower emissions than air freight, a point that matters to some buyers.',
      'Good for inland destinations poorly served by ports.',
    ],
    cons: [
      'Limited reach into the GCC — many Gulf destinations still need road or sea bridging.',
      'Less standardised schedules than ocean or air on Gulf lanes.',
      'Transit through multiple customs regimes adds documentary complexity.',
      'Track gauge changes at some borders require container transfer.',
    ],
    insight:
      'Rail is a middle option that mostly exists for Europe and Central Asia, not the Gulf. China-to-GCC rail typically routes through Central Asian or Iranian corridors and still needs a road or sea leg to reach most Gulf cities — which is why, despite attractive headline transit times of 18–25 days and 20ft rates around $1,500–5,500, rail to the GCC is a niche choice. It earns its place when the destination is inland Central Asia, or when a slower sea sailing is unacceptable and air is over budget.',
    process: [
      'Confirm the rail corridor and whether the destination is directly served.',
      'Cargo is containerised and delivered to the origin rail terminal.',
      'Export clearance is completed, and the container loads onto the block train.',
      'The train transits China and Central Asia, with possible transshipment at gauge breaks.',
      'At the railhead the container is transferred to truck for the final leg into the Gulf.',
    ],
    faqs: [
      {
        q: 'Does rail freight reach all GCC countries?',
        a: 'Not directly. Rail corridors reach the Gulf mainly via Central Asia or Iran, and most GCC destinations still require a road bridging leg. Check the specific lane before assuming rail is available.',
      },
      {
        q: 'How does rail compare to sea freight on cost?',
        a: 'Rail is generally more expensive than sea but cheaper than air — closer to sea freight for full containers. The premium buys you roughly half the transit time on suitable corridors.',
      },
      {
        q: 'What is the transit time for China to the GCC by rail?',
        a: 'Around 18–25 days depending on the corridor, but Gulf-bound rail is less standardised than China–Europe trains. Confirm per lane, as this is the least predictable of the methods.',
      },
    ],
    keyTakeaways: [
      'Rail is a middle option on cost and speed — but a niche one for the GCC.',
      'Most Gulf destinations still need a road or sea bridging leg after rail.',
      'Transit times of 18–25 days and 20ft rates of $1,500–5,500 are corridor-dependent.',
      'Best suited to Central Asian destinations, not the Gulf coast itself.',
    ],
    compareWith: { slug: 'fcl', label: 'Rail vs sea freight' },
    updated: '2026-09-01',
    sources: [
      {
        id: 'eurasian-rail',
        name: 'Eurasian Rail Alliance — China–Europe rail corridors',
        url: 'https://index1520.com/en/',
        type: 'organization',
      },
      {
        id: 'chinatop-rail',
        name: 'ChinaTopFreight — Rail freight China to Middle East',
        url: 'https://chinatopfreight.com/rail-freight-china-to-middle-east-your-ultimate-shipping-guide',
        type: 'industry',
      },
    ],
  },
  {
    slug: 'ddp',
    name: 'DDP (Delivered Duty Paid)',
    summary:
      'Seller assumes costs, duties, and risk up to the buyer’s named destination.',
    tldr:
      'DDP is the simplest term for the buyer and the riskiest for the seller. The seller pays everything — freight, clearance, duty, VAT — and prices it all into one landed cost. Into Saudi Arabia, DDP also means managing SABER and importer-of-record rules.',
    definition:
      'DDP — Delivered Duty Paid — is an Incoterms rule where the seller bears all costs and risk to deliver the goods to the buyer’s named place, including export and import clearance, duties, taxes and final delivery. It is the maximum-obligation term for the seller and the simplest for the buyer.',
    bestFor: [
      'Buyers who do not want to handle import clearance, duties or VAT themselves.',
      'Door-to-door e-commerce and B2B where a single landed price is expected.',
      'Sellers who already have a destination agent and want to control the full journey.',
      'Shipments where the buyer has no importer of record in the destination country.',
    ],
    pricingLogic:
      'DDP is a single all-in price, not a freight rate. It bundles ocean or air freight, both ends of clearance, import duty and VAT, and final delivery. The seller calculates the landed cost — freight + insurance + duty + VAT + clearance + delivery — and quotes one number. The risk sits entirely with the seller.',
    costRows: [
      { label: 'DDP is a bundled price', range: 'No fixed range — freight + duty + VAT + clearance', confidence: 'LOW' },
    ],
    transitTime: {
      range: 'Varies by mode',
      note: 'DDP is a commercial term, not a transport mode. Transit time is whatever the underlying method (sea or air) delivers, plus clearance and final delivery.',
      confidence: 'LOW',
    },
    pros: [
      'One landed price — the buyer knows the total cost up front, no surprises.',
      'The buyer does not touch customs, duties, VAT or last-mile logistics.',
      'Good for markets where import procedures are complex or unfamiliar.',
      'The seller controls the full journey and can optimise for total landed cost.',
    ],
    cons: [
      'Maximum risk for the seller, including duty-rate changes and clearance delays.',
      'Usually the most expensive delivered option, because the seller prices in the risk.',
      'The seller needs a reliable destination agent and importer-of-record capability.',
      'Some countries restrict who can act as importer of record, complicating DDP.',
    ],
    insight:
      'DDP is the Incoterm that looks effortless to the buyer and is anything but effortless for the seller. The seller must pre-calculate duty and VAT, arrange an importer of record, and absorb any rate change or clearance delay. Into Saudi Arabia the burden is heavier still: SABER/SASO product registration and a local agent to act as importer of record are effectively mandatory. The convenience of a single landed price is real — but it is priced into the quote, with margin for the risk the seller is carrying.',
    process: [
      'The seller calculates the full landed cost including duty and VAT.',
      'Cargo is collected, exported and shipped by the agreed mode.',
      'The destination agent clears import and pays duty and VAT on the seller’s behalf.',
      'Cargo is delivered to the buyer’s named place, completing the seller’s obligation.',
    ],
    faqs: [
      {
        q: 'What is the difference between DDP and DAP?',
        a: 'Under DDP the seller pays import duties and taxes and clears the goods; under DAP (Delivered at Place) the buyer handles import clearance and pays duties and VAT. DDP is one step further in seller obligation.',
      },
      {
        q: 'Does DDP include VAT?',
        a: 'Yes. DDP means the seller pays all duties, taxes and charges to deliver the goods cleared for import — including VAT. That is exactly why DDP is the most seller-risk-heavy Incoterm.',
      },
      {
        q: 'Is DDP available for Saudi Arabia?',
        a: 'In practice yes, but it requires a local agent to act as importer of record and manage SABER/SASO compliance. Confirm the destination agent can do this before committing to DDP into Saudi Arabia.',
      },
    ],
    keyTakeaways: [
      'DDP is the maximum-obligation Incoterm for the seller — all cost and risk to the door.',
      'The seller pre-pays duty and VAT and must price the risk into one landed number.',
      'Into Saudi Arabia, DDP also means SABER/SASO and a local importer of record.',
      'DDP is convenient for the buyer, but that convenience is never free.',
    ],
    compareWith: { slug: 'fcl', label: 'DDP vs standard FCL' },
    updated: '2026-09-01',
    sources: [
      {
        id: 'icc-incoterms',
        name: 'ICC — Incoterms® 2020 rules (DDP)',
        url: 'https://iccwbo.org/business-solutions/incoterms-rules/',
        type: 'organization',
      },
      {
        id: 'maersk-ddp',
        name: 'Maersk — Delivered Duty Paid (DDP) explained',
        url: 'https://www.maersk.com/logistics-explained/customs-and-compliance/2023/10/05/delivered-duty-paid-shipping',
        type: 'carrier',
      },
    ],
  },
  {
    slug: 'express',
    name: 'Express',
    summary:
      'Courier and parcel delivery for small, urgent shipments.',
    tldr:
      'Express is the simplest door-to-door option and the most expensive per kilogram. Couriers use a ÷5000 volumetric divisor, so light but bulky parcels cost even more than they would by air freight — best reserved for small, urgent, high-value items.',
    definition:
      'Express is door-to-door courier delivery — DHL, FedEx, UPS and similar — for parcels, samples and documents. It is the simplest method and the most expensive per kilogram, priced on chargeable weight with a door-to-door service and full tracking.',
    bestFor: [
      'Small parcels, samples and documents under roughly 30 kg.',
      'Urgent shipments where a 3–7 day door-to-door service is required.',
      'Single low-value-per-weight items where freight is not the dominant cost.',
      'When simplicity and tracking matter more than the freight bill.',
    ],
    pricingLogic:
      'Express is priced per kilogram of chargeable weight, typically with a higher volumetric divisor (÷ 5000) than air freight (÷ 6000) — so bulky light parcels cost relatively more. You pay a base plus per-kg rate, and door-to-door handling and clearance are bundled in.',
    costRows: [
      { label: 'Express per kg (China → GCC)', range: '$6.9 – $11.0 / kg', confidence: 'MEDIUM' },
    ],
    transitTime: {
      range: '3–7 days',
      note: 'Door-to-door from a Chinese origin to a GCC address. Most couriers offer faster premium tiers at a higher rate.',
      confidence: 'MEDIUM',
    },
    pros: [
      'Simplest method — one booking, door-to-door, full tracking.',
      'Fast and predictable for small shipments.',
      'Clearance is handled by the courier, reducing documentary burden.',
      'Ideal for samples, documents and small urgent parcels.',
    ],
    cons: [
      'The most expensive method per kilogram, by a wide margin.',
      'Weight and size limits — couriers generally cap parcels around 30–70 kg.',
      'Volumetric pricing (÷ 5000) punishes bulky light items.',
      'Not economical once a shipment grows past small-parcel size.',
    ],
    insight:
      'Express is where the volumetric divisor hits hardest. Couriers use ÷5000 rather than air freight’s ÷6000, so the same 80 × 50 × 40 cm box is billed as 32 kg by a courier versus 26.7 kg by air freight — a 20% jump before you even compare rates. For anything bulky, express is a poor fit; for small, dense, urgent items it is unbeatable for convenience.',
    process: [
      'Book the shipment and print the waybill or arrange a courier pickup.',
      'The courier collects the parcel from the shipper.',
      'Export screening and clearance are handled by the courier network.',
      'The parcel is flown and cleared at destination.',
      'The courier delivers door-to-door and updates tracking throughout.',
    ],
    faqs: [
      {
        q: 'Express or air freight — which should I use?',
        a: 'Use express for small parcels under ~30 kg where door-to-door convenience and tracking are worth the premium. Use air freight for heavier commercial cargo, where you arrange pickup and delivery yourself and pay less per kg.',
      },
      {
        q: 'Why is my light parcel charged for more than its actual weight?',
        a: 'Couriers charge on chargeable weight — the greater of actual and volumetric weight. Volumetric weight = length × width × height (cm) ÷ 5000. A large, light box is charged on its volume.',
      },
      {
        q: 'Is express covered for duties and VAT?',
        a: 'No — express delivery does not include import duty or VAT unless you book a specific DDP courier service. The courier will typically collect duty and VAT from the consignee before final delivery.',
      },
    ],
    keyTakeaways: [
      'Express is the most expensive per kg — reserve it for small, urgent, high-value items.',
      'Couriers use ÷5000 (not ÷6000), so bulky light parcels are charged even more.',
      'Door-to-door convenience and tracking are what you are paying for.',
      'Duty and VAT are not included unless you book a DDP courier service.',
    ],
    compareWith: { slug: 'air-freight', label: 'Express vs air freight' },
    updated: '2026-09-01',
    sources: [
      {
        id: 'dhl-volumetric',
        name: 'DHL Express — volumetric weight calculation',
        url: 'https://www.dhl.com/discover/en-sg/ship-with-dhl/volumetric-weight',
        type: 'carrier',
      },
      {
        id: 'sino-express-aug2026',
        name: 'Sino Shipping — China to Saudi express (Aug 2026 snapshot)',
        url: 'https://www.sino-shipping.com/freight-from-china-to-saudi-arabia',
        type: 'industry',
      },
    ],
  },
];

export function getMethodBySlug(slug: string): Method | undefined {
  return methods.find((method) => method.slug === slug);
}
