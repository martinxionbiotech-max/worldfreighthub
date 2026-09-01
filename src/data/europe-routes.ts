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
    advantage: "the densest direct sailings to Northwest Europe",
  },
  'ningbo-zhoushan': {
    note: "Ningbo-Zhoushan is the world's largest port by cargo tonnage and a major gateway for Zhejiang manufacturing.",
    advantage: "a strong Shanghai alternative, often slightly cheaper on Europe lanes",
  },
  'shenzhen': {
    note: "Shenzhen (Yantian/Shekou) is South China's primary export gateway, serving the Pearl River Delta electronics and consumer-goods clusters.",
    advantage: "the natural choice for South China cargo, avoiding a long domestic haul to East China",
  },
  'guangzhou': {
    note: "Guangzhou's Nansha terminal serves the Pearl River Delta hinterland and Guangdong manufacturing.",
    advantage: "a less congested South China alternative to Shenzhen with improving deep-water capacity",
  },
  'qingdao': {
    note: "Qingdao is North China's gateway, serving Shandong's manufacturing and agricultural export belt.",
    advantage: "the natural origin for North China cargo, avoiding the Shanghai congestion zone",
  },
  'tianjin': {
    note: "Tianjin serves the Beijing–Tianjin–Hebei industrial belt and is the northern range's main export port.",
    advantage: "closest deep-water port to Beijing and northern manufacturing",
  },
  'xiamen': {
    note: "Xiamen is Fujian's gateway, serving Southeast China's electronics, footwear and light-industry clusters.",
    advantage: "a Southeast-coast origin that skips the Yangtze Delta entirely",
  },
};

const destProfiles: Record<string, DestProfile> = {
  'rotterdam': {
    note: "Rotterdam is Europe's largest port and the default deep-sea gateway for Northwest Europe.",
    routing: "Direct sailings are the densest on the continent; the Rhine barge network then reaches Germany, France and Switzerland.",
    transitNote:
      'Direct deep-sea calls are frequent. Since 2024 most carriers reroute around the Cape of Good Hope to avoid the Red Sea, adding roughly 10–14 days versus the pre-crisis Suez routing.',
    costRows: [
      { label: '20ft FCL', range: '$1,200 – $4,800', confidence: 'MEDIUM' },
      { label: '40ft FCL', range: '$1,600 – $6,800', confidence: 'MEDIUM' },
      { label: 'LCL (per CBM)', range: '$60 – $160', confidence: 'MEDIUM' },
    ],
    insight:
      "Rotterdam is where the Red Sea crisis changed the math, and 2026 made clear the Cape routing is a new normal rather than a blip. What used to be a ~30-day Shanghai–Rotterdam lane now runs closer to 40–45 days, and the rate swing that went with it — a 40ft that spiked above $8,000 in 2024 before settling near $2,500 — is the reason the range here is so wide. The practical consequence: build your landed-cost model on Cape transit, not the pre-crisis Suez number, and treat Rotterdam's Rhine barge and VAT-deferral warehousing as the two levers that still make it the best Northwest Europe landing point.",
  },
  'hamburg': {
    note: "Hamburg is Germany's largest port and a China-rail terminus; a tidal Elbe river port.",
    routing: "A hybrid corridor — deep-sea plus New Silk Road rail — that no other European port matches.",
    transitNote:
      'Deep-sea transits the Cape/Suez routing; China rail arrives via Poland in roughly 18–22 days. The tidal Elbe limits draft, so the largest vessels cannot call fully loaded.',
    costRows: [
      { label: '20ft FCL', range: '$1,200 – $4,600', confidence: 'MEDIUM' },
      { label: '40ft FCL', range: '$1,600 – $6,500', confidence: 'MEDIUM' },
      { label: 'LCL (per CBM)', range: '$60 – $150', confidence: 'MEDIUM' },
    ],
    insight:
      "Hamburg is Europe's only port where deep-sea and New Silk Road rail physically meet, which makes it the natural test bed for the sea-versus-rail decision. Rail from Xi'an or Chengdu lands in 18–22 days versus ~40 by sea, but costs roughly two to three times more per container. The real question is not cost — it is inventory: cutting transit from 40 days to 20 halves your goods-in-transit, which for high-value or deadline-sensitive cargo makes the rail premium buyable. Price the financing cost of the extra 20 days at sea against the rail surcharge before defaulting to ocean.",
  },
  'antwerp': {
    note: "Antwerp is Europe's chemicals and breakbulk gateway, paired with the continent's largest petrochemical cluster.",
    routing: "The same northern-range corridor as Rotterdam; carriers shift calls between the two as congestion dictates.",
    transitNote:
      'Direct and transshipped services. Close enough to Rotterdam that congestion and schedule pressure shift calls between the two ports.',
    costRows: [
      { label: '20ft FCL', range: '$1,200 – $4,700', confidence: 'MEDIUM' },
      { label: '40ft FCL', range: '$1,600 – $6,600', confidence: 'MEDIUM' },
      { label: 'LCL (per CBM)', range: '$60 – $150', confidence: 'MEDIUM' },
    ],
    insight:
      "Antwerp and Rotterdam are effectively one northern-range market, so do not expect a structural discount at either — carriers balance calls between the two and the rates move together. Antwerp's real differentiation is cargo type: its density of chemical, polymer, breakbulk and reefer terminals is unmatched on the range. If you ship ordinary containers, Rotterdam is usually the marginally better default; if you ship chemicals or temperature-controlled goods, Antwerp's specialised infrastructure is the reason to choose it.",
  },
  'felixstowe': {
    note: "Felixstowe is the UK's default container gateway — a post-Brexit customs wall.",
    routing: "Direct UK calls; since 2021 it sits in a separate customs regime from the EU.",
    transitNote:
      'Direct deep-sea calls exist, but post-Brexit clearance at the port is the recurring delay and cost source.',
    costRows: [
      { label: '20ft FCL', range: '$1,300 – $5,000', confidence: 'MEDIUM' },
      { label: '40ft FCL', range: '$1,800 – $7,000', confidence: 'MEDIUM' },
      { label: 'LCL (per CBM)', range: '$70 – $170', confidence: 'MEDIUM' },
    ],
    insight:
      "Felixstowe is where Brexit's cost concentrates. Cargo that once flowed frictionlessly from Rotterdam into the UK now needs a UK customs declaration and a GB EORI at the port, which turned post-Brexit clearance delays and demurrage at Felixstowe into a recurring story. The practical rule is counterintuitive: a direct China-to-UK sailing is often simpler than a Rotterdam discharge plus overland relay, because it avoids clearing the EU first and then the UK again. If the UK is your only market, price the direct call before assuming the European-range routing is cheaper.",
  },
  'le-havre': {
    note: "Le Havre is France's Seine gateway, feeding the Paris market by barge.",
    routing: "Direct calls are thinner than Rotterdam; much cargo transships via a Mediterranean hub before a feeder north.",
    transitNote:
      'Direct calls exist but are less frequent; a common pattern is transshipment at a Med hub. The Seine barge then reaches Paris.',
    costRows: [
      { label: '20ft FCL', range: '$1,200 – $4,800', confidence: 'MEDIUM' },
      { label: '40ft FCL', range: '$1,600 – $6,800', confidence: 'MEDIUM' },
      { label: 'LCL (per CBM)', range: '$60 – $150', confidence: 'MEDIUM' },
    ],
    insight:
      "Le Havre's trap is the habit of defaulting to Rotterdam. Many China importers discharge at Rotterdam and truck the container to Paris, paying an inland leg they could have avoided — a Le Havre call plus a Seine barge to Paris is usually cheaper and less congested. The trade-off is schedule: Le Havre's direct calls are thinner, and some cargo transships via a Mediterranean hub. The rule is to price the Le Havre inland advantage first, and only fall back to Rotterdam when you are consolidating multiple Northwest European destinations in one box.",
  },
  'valencia': {
    note: "Valencia is the Iberian gateway on the Mediterranean, with highly automated terminals.",
    routing: "China cargo usually transships at a Mediterranean hub (Tanger Med, Malta) before a feeder to Valencia.",
    transitNote:
      'Direct deep-sea calls from China are rare; Mediterranean transshipment is the norm. Highly automated terminals keep cut-offs reliable.',
    costRows: [
      { label: '20ft FCL', range: '$1,300 – $5,000', confidence: 'MEDIUM' },
      { label: '40ft FCL', range: '$1,800 – $7,000', confidence: 'MEDIUM' },
      { label: 'LCL (per CBM)', range: '$70 – $170', confidence: 'MEDIUM' },
    ],
    insight:
      "Valencia represents the Mediterranean-port pattern: few China direct calls, so cargo transships at a hub like Tanger Med or Malta before a feeder south. That extra move looks like a disadvantage on paper, but for Iberian cargo it usually beats the alternative — a Rotterdam discharge followed by a long haul across France. Do not let the word 'direct' mislead you into pricing the wrong routing: for Spain and Portugal, a Mediterranean transshipment landing at Valencia is often the cheapest total landed cost.",
  },
  'genoa': {
    note: "Genoa is Italy's northern gateway, feeding Milan, Turin and Bologna — and historically strike-prone.",
    routing: "Mediterranean routing; new Alpine rail tunnels are improving inland reach into northern Italy.",
    transitNote:
      'Med transshipment is common; the Vado Gateway terminal modernised capacity. Industrial action and last-mile congestion are recurring variables.',
    costRows: [
      { label: '20ft FCL', range: '$1,300 – $5,200', confidence: 'MEDIUM' },
      { label: '40ft FCL', range: '$1,800 – $7,200', confidence: 'MEDIUM' },
      { label: 'LCL (per CBM)', range: '$70 – $170', confidence: 'MEDIUM' },
    ],
    insight:
      "Genoa's risk is not the rate — it is the strike. Italian ports have a history of industrial action and last-mile congestion, so a 'cheaper' Genoa call can be quietly eaten by a 3–5 day delay that Rotterdam would not have. That said, for Milan, Turin and Bologna cargo a Genoa discharge plus short inland leg beats a Rotterdam discharge plus Alpine trucking, even before you factor Italy's 22% VAT — Europe's highest standard rate. Price the strike buffer explicitly, and compare the Genoa-inland total against the Rotterdam-over-Alps total rather than the headline ocean rate.",
  },
  'gdansk': {
    note: "Gdańsk is the Baltic's deep-water gateway and a New Silk Road rail entry — Europe's fastest-growing corridor.",
    routing: "Baltic routing via the Danish Straits; pairs deep-sea with the Małaszewicze rail entry.",
    transitNote:
      'Deep-sea transits the Baltic approach; the DCT terminal takes the largest vessels. Rail arrives at Małaszewicze in ~18–22 days.',
    costRows: [
      { label: '20ft FCL', range: '$1,200 – $4,800', confidence: 'MEDIUM' },
      { label: '40ft FCL', range: '$1,600 – $6,800', confidence: 'MEDIUM' },
      { label: 'LCL (per CBM)', range: '$60 – $150', confidence: 'MEDIUM' },
    ],
    insight:
      "Gdańsk's rise is the overlap of two things the German ports cannot fully replicate: a deep-water DCT terminal that takes ultra-large vessels, and the New Silk Road rail entry at Małaszewicze that makes Poland the natural sea-rail split hub for Central-Eastern Europe. For cargo bound to Poland, the Baltics, Czechia, Slovakia or Ukraine, Gdańsk is shifting from alternative to default — it skips the long rail leg out of the German ports. The two variables to watch are Poland's 23% VAT (the EU's second-highest) and the finite rail capacity out of Małaszewicze, which tightens in peak season.",
  },
};

const destinations: { port: string; country: string; typical: number }[] = [
  { port: 'rotterdam', country: 'netherlands', typical: 28 },
  { port: 'hamburg', country: 'germany', typical: 29 },
  { port: 'antwerp', country: 'belgium', typical: 28 },
  { port: 'felixstowe', country: 'united-kingdom', typical: 29 },
  { port: 'le-havre', country: 'france', typical: 30 },
  { port: 'valencia', country: 'spain', typical: 32 },
  { port: 'genoa', country: 'italy', typical: 33 },
  { port: 'gdansk', country: 'poland', typical: 30 },
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
      a: `Typically ${typical} days port-to-port, with a range of ${range[0]}–${range[1]} days depending on Cape-of-Good-Hope versus Suez routing, direct versus transshipped service, and seasonal congestion. Since 2024 most China–Europe sailings reroute around the Cape, adding 10–14 days versus the pre-crisis Suez routing.`,
    },
    {
      q: `Is ${originName} to ${destName} a direct sailing?`,
      a: `${routing} Confirm direct versus transshipped service with your forwarder, as this varies by carrier and season.`,
    },
    {
      q: `How do I get a current rate for ${originName} to ${destName}?`,
      a: `China–Europe rates swing sharply with Red Sea routing, fuel and season. Request a live quote through the Get Quote form for a current, lane-specific figure rather than relying on a published range.`,
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
    `Confirm Cape-versus-Suez routing and direct-versus-transshipped service — both are the biggest variables in time and cost.`,
  ];
}

export const europeRoutes: Route[] = Object.keys(originProfiles).flatMap((origin) =>
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
      transitDays: { typical: dest.typical, range: [25, 45] as [number, number] },
      confidence: 'LOW' as const,
      note: 'estimate — verify with the relevant carrier before relying on this figure',
      originNote: originProfile.note,
      destNote: destProfile.note,
      routingNote: destProfile.routing,
      transitNote: destProfile.transitNote,
      costRows: destProfile.costRows,
      insight: destProfile.insight,
      faqs: buildFaqs(originName, destName, dest.typical, [25, 45], destProfile.routing),
      keyTakeaways: buildKeyTakeaways(
        originName,
        destName,
        originProfile.note,
        destProfile.note,
        dest.typical,
        [25, 45],
      ),
    };
  }),
);

export function getEuropeRouteBySlug(slug: string): Route | undefined {
  return europeRoutes.find((route) => route.slug === slug);
}
