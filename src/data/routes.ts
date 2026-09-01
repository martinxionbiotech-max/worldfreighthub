import type { Route, FaqItem, RouteCostRow } from './types';
import { portName } from './lookup';

interface OriginProfile {
  note: string;
  advantage: string;
}

interface DestProfile {
  note: string;
  routing: string;
  transitNote: string;
  costRows: RouteCostRow[];
  insight: string;
}

const originProfiles: Record<string, OriginProfile> = {
  'shanghai': {
    note: "Shanghai is the world's busiest container port and the default origin for East China exports.",
    advantage: "the densest direct sailings to the Gulf",
  },
  'ningbo-zhoushan': {
    note: "Ningbo-Zhoushan is the world's largest port by cargo tonnage and a major gateway for Zhejiang manufacturing.",
    advantage: "a strong Shanghai alternative, often slightly cheaper on Gulf lanes",
  },
  'shenzhen': {
    note: "Shenzhen (Yantian/Shekou) is South China's primary export gateway, serving the Pearl River Delta electronics and consumer-goods clusters.",
    advantage: "the natural choice for South China cargo, avoiding a long domestic haul to East China",
  },
};

const destProfiles: Record<string, DestProfile> = {
  'jeddah': {
    note: "Jeddah is Saudi Arabia's Red Sea gateway and its busiest port, serving the western and central Kingdom.",
    routing: "Red Sea routing means no Strait of Hormuz exposure — a plus when Gulf tensions spike.",
    transitNote:
      'Direct sailings are common, with some services transshipping via Singapore or Colombo. Red Sea routing avoids the Strait of Hormuz.',
    costRows: [
      { label: '20ft FCL', range: '$1,500 – $6,200', confidence: 'MEDIUM' },
      { label: '40ft FCL', range: '$1,900 – $8,100', confidence: 'MEDIUM' },
      { label: 'LCL (per CBM)', range: '$20 – $110', confidence: 'MEDIUM' },
    ],
    insight:
      "The Red Sea lane and the Gulf lane carry two different geopolitical risks, and 2026 made that impossible to ignore. The Strait of Hormuz crisis pushed war-risk insurance from 0.125% to 0.4% or more per transit, inflating Gulf-side rates — while the Houthi naval blockade of Saudi Arabia in July 2026 turned southern Red Sea risk from theoretical to real. Choosing Jeddah over Dammam is not a choice between 'safe' and 'risky'; it is a choice between two different risks. That spread is why Saudi rate ranges here are so wide.",
  },
  'dammam': {
    note: "Dammam is Saudi Arabia's Gulf gateway, serving the Eastern Province and Riyadh via road and rail links inland.",
    routing: "Gulf routing passes through the Strait of Hormuz, the corridor most exposed to geopolitical risk.",
    transitNote:
      'Mostly transshipped via Singapore or Colombo; direct Gulf calls are less frequent than to Jeddah. Strait of Hormuz transit is the key risk variable.',
    costRows: [
      { label: '20ft FCL', range: '$1,500 – $6,200', confidence: 'MEDIUM' },
      { label: '40ft FCL', range: '$1,900 – $8,100', confidence: 'MEDIUM' },
      { label: 'LCL (per CBM)', range: '$20 – $110', confidence: 'MEDIUM' },
    ],
    insight:
      "Dammam is the most geopolitically exposed gateway on the corridor. Every container transits the Strait of Hormuz, and when that waterway tightens — as it did through 2026 — war-risk premiums and fuel costs feed straight into the rate. The wide range here ($1,500 to $6,200 for a 20ft) is not noise; it is the risk premium flexing with the news cycle. If you ship to the Eastern Province, build a risk buffer into your landed-cost model rather than pricing to the calm-period rate.",
  },
  'jebel-ali': {
    note: "Jebel Ali is the largest port in the Middle East and the UAE's re-export hub, with a vast free zone.",
    routing: "the highest-frequency corridor on the China–GCC lane, with the most carrier options.",
    transitNote:
      'The densest schedule on the lane — the most direct calls and the most carrier choices, though some services still transship via Singapore.',
    costRows: [
      { label: '20ft FCL', range: '$1,500 – $3,250', confidence: 'MEDIUM' },
      { label: '40ft FCL', range: '$2,200 – $3,950', confidence: 'MEDIUM' },
      { label: 'LCL (per CBM)', range: '$60 – $180', confidence: 'MEDIUM' },
    ],
    insight:
      "Jebel Ali is where you get the best price on the corridor, for a simple reason: it has the most carriers competing for the cargo. More competition compresses the rate spread, so the range here is narrower than Saudi's. But it still transits the Strait of Hormuz, so the same geopolitical risk premium applies. The play is to use Jebel Ali's frequency to negotiate, while treating the Hormuz risk as a separate line item in your model.",
  },
  'hamad': {
    note: "Hamad Port is Qatar's sole commercial gateway, built to handle the country's post-blockade self-sufficiency push.",
    routing: "a single-gateway market — all Qatar-bound container cargo clears through Hamad.",
    transitNote:
      'Fewer sailings than the UAE or Saudi lanes; transshipment via Singapore or a regional hub is common. Schedule windows are wider.',
    costRows: [
      { label: '20ft FCL', range: '$1,700 – $2,500', confidence: 'MEDIUM' },
      { label: '40ft FCL', range: '$2,500 – $3,600', confidence: 'MEDIUM' },
      { label: 'LCL (per CBM)', range: '$75 – $100', confidence: 'MEDIUM' },
    ],
    insight:
      "Qatar is a single-gateway market, which means you do not get the carrier competition that compresses rates at Jebel Ali. The schedule is thinner and transshipment is more common, so the 22-day typical transit hides a wider real-world window. Qatar's 0% VAT is a genuine landed-cost advantage — but it can be partly offset by a slower, less flexible lane. Price the tax saving and the schedule together.",
  },
  'shuwaikh': {
    note: "Shuwaikh is Kuwait's main commercial port, handling general and containerised cargo near Kuwait City.",
    routing: "a lower-frequency lane than the UAE or Saudi, so schedule windows are wider.",
    transitNote:
      'A low-frequency lane; most services transship via Singapore or a regional hub. Expect wider schedule windows and more routing variability.',
    costRows: [
      { label: '20ft FCL', range: '$1,500 – $2,500', confidence: 'MEDIUM' },
      { label: '40ft FCL', range: '$2,200 – $3,600', confidence: 'MEDIUM' },
      { label: 'LCL (per CBM)', range: '$70 – $100', confidence: 'MEDIUM' },
    ],
    insight:
      "Kuwait's 0% VAT looks great on a tax spreadsheet and less great when the shipment sits waiting for a less-frequent sailing. Shuwaikh is a lower-frequency lane, so transshipment and wider schedule windows are the norm — the 24-day typical is more of a midpoint than a promise. Kuwait's real cost is time and paperwork; the tax saving is real, but budget for the slower lane.",
  },
  'sohar': {
    note: "Sohar is Oman's primary northern gateway and a fast-growing container hub with a deep-water port.",
    routing: "often less congested than Jebel Ali or Jeddah, which can mean faster clearance.",
    transitNote:
      'A growing lane with improving direct calls; less congestion than the bigger hubs. Still transits the Strait of Hormuz via the Gulf of Oman approach.',
    costRows: [
      { label: '20ft FCL', range: '$1,500 – $2,600', confidence: 'MEDIUM' },
      { label: '40ft FCL', range: '$2,200 – $3,800', confidence: 'MEDIUM' },
      { label: 'LCL (per CBM)', range: '$60 – $110', confidence: 'MEDIUM' },
    ],
    insight:
      "Sohar's advantage is the one thing that does not show up in a rate table: less congestion. In peak season, when Jebel Ali and Jeddah queue, Sohar's clearance can be meaningfully faster, which translates to fewer demurrage days and more predictable delivery. It still transits toward the Strait of Hormuz, but for northern Oman and even parts of the UAE market, it is a congestion-arbitrage worth pricing.",
  },
  'khalifa-bin-salman': {
    note: "Khalifa bin Salman Port is Bahrain's main gateway, linked to Saudi's Eastern Province by the King Fahd Causeway.",
    routing: "a strategic alternate entry for the Dammam and Riyadh markets.",
    transitNote:
      'Moderate frequency, typically transshipped via a regional hub. The King Fahd Causeway truck bridge adds an overland leg into Saudi Arabia.',
    costRows: [
      { label: '20ft FCL', range: '$1,500 – $2,500', confidence: 'MEDIUM' },
      { label: '40ft FCL', range: '$2,200 – $3,600', confidence: 'MEDIUM' },
      { label: 'LCL (per CBM)', range: '$75 – $100', confidence: 'MEDIUM' },
    ],
    insight:
      "Bahrain's real value is not its tax rate — the 10% VAT is the GCC's second-highest — it is geography. Khalifa bin Salman connects to Saudi's Eastern Province over the King Fahd Causeway, which makes it a viable alternate entry for Dammam and Riyadh when Jeddah is congested or red-sea risk is elevated. For eastern-Saudi cargo, routing via Bahrain can trade a bit of VAT for a lot of schedule certainty.",
  },
};

const destinations: { port: string; country: string; typical: number }[] = [
  { port: 'jeddah', country: 'saudi-arabia', typical: 18 },
  { port: 'dammam', country: 'saudi-arabia', typical: 20 },
  { port: 'jebel-ali', country: 'united-arab-emirates', typical: 21 },
  { port: 'hamad', country: 'qatar', typical: 22 },
  { port: 'shuwaikh', country: 'kuwait', typical: 24 },
  { port: 'sohar', country: 'oman', typical: 19 },
  { port: 'khalifa-bin-salman', country: 'bahrain', typical: 22 },
];

function buildFaqs(
  originName: string,
  destName: string,
  typical: number,
  range: [number, number],
  routing: string,
): FaqItem[] {
  return [
    {
      q: `How long does shipping from ${originName} to ${destName} take?`,
      a: `Typically ${typical} days, with a range of ${range[0]}–${range[1]} days depending on direct versus transshipped routing, seasonal congestion and the specific carrier schedule.`,
    },
    {
      q: `Is ${originName} to ${destName} a direct sailing?`,
      a: `${routing} Confirm the direct versus transshipped service with your forwarder, as this varies by carrier and season.`,
    },
    {
      q: `How do I get a current rate for ${originName} to ${destName}?`,
      a: `Rates on this lane shift weekly with fuel, season and geopolitical risk. Request a live quote through the Get Quote form for a current, lane-specific figure rather than relying on a published rate.`,
    },
  ];
}

function buildKeyTakeaways(
  originName: string,
  destName: string,
  originNote: string,
  destNote: string,
  typical: number,
  range: [number, number],
): string[] {
  return [
    `${originName} → ${destName} typically runs ${typical} days, with a ${range[0]}–${range[1]} day range.`,
    originNote,
    destNote,
    `Confirm direct vs transshipped routing, as it is the biggest variable in both time and cost.`,
  ];
}

export const routes: Route[] = Object.keys(originProfiles).flatMap((origin) =>
  destinations.map((dest) => {
    const originName = portName(origin);
    const destName = portName(dest.port);
    const originProfile = originProfiles[origin];
    const destProfile = destProfiles[dest.port];
    return {
      slug: `${origin}-${dest.port}`,
      originPort: origin,
      destPort: dest.port,
      country: dest.country,
      transitDays: { typical: dest.typical, range: [15, 30] as [number, number] },
      confidence: 'LOW' as const,
      note: 'estimate — verify with the relevant carrier before relying on this figure',
      originNote: originProfile.note,
      destNote: destProfile.note,
      routingNote: destProfile.routing,
      transitNote: destProfile.transitNote,
      costRows: destProfile.costRows,
      insight: destProfile.insight,
      faqs: buildFaqs(originName, destName, dest.typical, [15, 30], destProfile.routing),
      keyTakeaways: buildKeyTakeaways(
        originName,
        destName,
        originProfile.note,
        destProfile.note,
        dest.typical,
        [15, 30],
      ),
    };
  }),
);

export function getRouteBySlug(slug: string): Route | undefined {
  return routes.find((route) => route.slug === slug);
}
