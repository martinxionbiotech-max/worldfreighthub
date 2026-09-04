import type { Port } from './types';

export const europePorts: Port[] = [
  {
    slug: 'rotterdam',
    name: 'Rotterdam',
    country: 'Netherlands',
    countrySlug: 'netherlands',
    type: 'seaport',
    unlocode: 'NLRTM',
    tldr:
      "Europe's largest port and the corridor's natural gateway — a deep-water transshipment hub whose Rhine barge network reaches deep into Germany, France and Switzerland, with VAT-deferral warehousing that importers underuse.",
    operator: 'Port of Rotterdam Authority',
    specs: [
      { label: 'Container throughput', value: '≈ 13.4m TEU (2023)' },
      { label: 'Max draft', value: '≈ 24 m (Maasvlakte 2)' },
      { label: 'Key terminals', value: 'Maasvlakte 1 & 2, Euromax, ECT Delta' },
      { label: 'UN/LOCODE', value: 'NLRTM' },
    ],
    hinterland:
      'The Rhine corridor — Rotterdam feeds Germany, Belgium, France and Switzerland by barge and rail, making it the shared gateway for a large slice of Northwest Europe.',
    insight:
      "Rotterdam is less a Dutch port than a European one. Its real advantage is the Rhine: a barge network that moves a container into the German Ruhr or the Swiss Alps for a fraction of the road cost, plus bonded warehousing that lets importers defer VAT until goods actually enter a member state. Most China-to-Europe importers default to Rotterdam without using either lever — if your cargo is destined inland, price the barge leg, and if you hold inventory, ask about VAT-deferral storage before committing to a standard bonded route.",
    keyTakeaways: [
      "Europe's largest port; the default China-to-Europe gateway.",
      'Rhine barge network reaches Germany, France and Switzerland cheaply.',
      'VAT-deferral warehousing is an underused working-capital lever.',
      'Maasvlakte 2 gives it the deepest water in Northwest Europe.',
    ],
    faqs: [
      {
        q: 'Why is Rotterdam the default gateway for China cargo?',
        a: 'It combines the deepest water in Northwest Europe, the largest container throughput, and a Rhine barge network that distributes cargo cheaply into Germany, France and Switzerland — so a Rotterdam discharge serves far more than just the Netherlands.',
      },
      {
        q: 'What is VAT-deferral warehousing at Rotterdam?',
        a: 'Goods can be held in bonded storage without paying import VAT until they physically enter a member state. For importers who hold inventory or re-export within the EU, this defers a large cash outflow and is frequently underused.',
      },
      {
        q: 'Does Rotterdam handle China-to-Europe rail cargo?',
        a: 'Less than you would expect — most China rail terminates in Germany or Poland. Rotterdam is primarily a deep-sea gateway; rail arrivals are smaller in share, but the port is building rail capacity to stay relevant to the Belt and Road flow.',
      },
    ],
    updated: '2026-09-01',
  },
  {
    slug: 'hamburg',
    name: 'Hamburg',
    country: 'Germany',
    countrySlug: 'germany',
    type: 'seaport',
    unlocode: 'DEHAM',
    tldr:
      "Germany's largest port and a key China-rail terminus — a tidal Elbe river port that pairs deep-sea container traffic with direct New Silk Road rail arrivals for Central European distribution.",
    operator: 'Hamburg Port Authority',
    specs: [
      { label: 'Container throughput', value: '≈ 7.7m TEU (2023)' },
      { label: 'Max draft', value: '≈ 15.2 m (tide-dependent)' },
      { label: 'Key terminals', value: 'HHLA CTA, Eurogate, Altenwerder' },
      { label: 'UN/LOCODE', value: 'DEHAM' },
    ],
    hinterland:
      'Northern Germany and Central Europe — Hamburg serves the German industrial heartland and, by rail, reaches into Poland, the Czech Republic and Austria.',
    insight:
      "Hamburg is where deep-sea and rail physically meet. It is a major terminus for China-Europe rail — containers from Xi'an or Chengdu arrive here and fan out across Central Europe — which gives it a unique hybrid role that Rotterdam cannot match on the rail side. The catch is the Elbe: Hamburg is a tidal river port with draft limits that some of the largest vessels cannot clear fully loaded, so part of its volume shifts to deeper rivals. For Central European cargo that cannot wait for a Rotterdam barge but cannot justify air, the Hamburg rail+sea mix is the answer.",
    keyTakeaways: [
      "Germany's largest port and a China-rail terminus.",
      'Hybrid deep-sea + New Silk Road rail role is unique in Europe.',
      'Tidal Elbe river imposes draft limits on the largest vessels.',
      'Serves Germany plus Poland, Czechia and Austria by rail.',
    ],
    faqs: [
      {
        q: 'Does China rail freight terminate at Hamburg?',
        a: 'Yes — Hamburg is one of the main European termini for New Silk Road rail, receiving trains from Xi\u2019an, Chengdu, Chongqing and other Chinese hubs. Containers then distribute across Central Europe by rail and truck.',
      },
      {
        q: 'What are Hamburg\u2019s draft limitations?',
        a: 'As a tidal river port on the Elbe, Hamburg\u2019s draft is around 15 m and tide-dependent. The very largest container vessels cannot call fully loaded, which pushes some volume to deeper ports like Rotterdam.',
      },
    ],
    updated: '2026-09-01',
  },
  {
    slug: 'antwerp',
    name: 'Antwerp',
    country: 'Belgium',
    countrySlug: 'belgium',
    type: 'seaport',
    unlocode: 'BEANR',
    tldr:
      "Europe's second-largest port and its chemicals hub — the merged Antwerp-Bruges port excels at breakbulk, chemicals and reefer cargo, with deep inland access on the Scheldt.",
    operator: 'Port of Antwerp-Bruges',
    specs: [
      { label: 'Container throughput', value: '≈ 12.5m TEU (2023, merged)' },
      { label: 'Max draft', value: '≈ 16 m' },
      { label: 'Key terminals', value: 'MSC PSA, DP World, MPET' },
      { label: 'UN/LOCODE', value: 'BEANR' },
    ],
    hinterland:
      'Belgium and the European chemicals belt — Antwerp is the gateway for the petrochemical cluster around the port itself, plus France and the Rhine basin.',
    insight:
      "Antwerp is the port you choose when Rotterdam is congested or when your cargo is chemical, breakbulk or reefer rather than pure container volume. The Antwerp-Bruges merger created a two-site port with deep inland reach, and its Scheldt access means less tidal constraint than Hamburg. For importers of chemicals, polymers or temperature-controlled goods, Antwerp's specialised terminals are often a better fit than Rotterdam's container-first layout — and it is close enough to Rotterdam that carriers can shift calls between the two when one congests.",
    keyTakeaways: [
      "Europe's second-largest port; chemicals and breakbulk specialist.",
      'Antwerp-Bruges merger created a two-site deep-water system.',
      'Less tidal constraint than Hamburg on the Scheldt.',
      'A congestion alternative to Rotterdam on the same range.',
    ],
    faqs: [
      {
        q: 'Is Antwerp a real alternative to Rotterdam?',
        a: 'Yes — especially for chemicals, breakbulk, reefer or when Rotterdam is congested. The two ports sit close enough that carriers can shift calls, so pricing Antwerp alongside Rotterdam is standard practice.',
      },
      {
        q: 'What cargo is Antwerp best for?',
        a: 'Chemicals and polymers (it hosts Europe\u2019s largest petrochemical cluster), breakbulk, project cargo and reefer. Pure container volume is also strong, but the specialised terminals are where Antwerp differentiates.',
      },
    ],
    updated: '2026-09-01',
  },
  {
    slug: 'felixstowe',
    name: 'Felixstowe',
    country: 'United Kingdom',
    countrySlug: 'united-kingdom',
    type: 'seaport',
    unlocode: 'GBFXT',
    tldr:
      "The UK's busiest container port — the default China-to-UK gateway, now carrying the full weight of post-Brexit customs declarations that Rotterdam-to-UK feeder traffic used to absorb.",
    operator: 'Hutchison Ports',
    specs: [
      { label: 'Container throughput', value: '≈ 3.6m TEU (2023)' },
      { label: 'Max draft', value: '≈ 16 m' },
      { label: 'Key terminals', value: 'Trinity Terminal, Dooley Terminal' },
      { label: 'UN/LOCODE', value: 'GBFXT' },
    ],
    hinterland:
      'England — Felixstowe serves the Midlands and the South, with rail connections into the UK distribution network.',
    insight:
      "Felixstowe was a straightforward gateway before Brexit; now it is the point where the UK's separate customs regime bites. Cargo that once landed at Rotterdam and trucked or fed across to the UK now requires a UK customs declaration (and often a GB EORI) at Felixstowe, which is why post-Brexit clearance delays and demurrage at Felixstowe became a recurring story. For China-to-UK importers the practical rule is to complete the UK declaration and have a GB EORI before the vessel arrives — the days of treating the UK as a frictionless extension of the EU are over.",
    keyTakeaways: [
      "The UK's busiest container port and default China-to-UK gateway.",
      'Post-Brexit customs declarations are now required at the port.',
      'GB EORI is mandatory for UK import clearance.',
      'Serves the Midlands and South of England by rail.',
    ],
    faqs: [
      {
        q: 'Has Brexit changed clearance at Felixstowe?',
        a: 'Yes. UK imports now require a separate UK customs declaration and a GB EORI number, where previously EU-wide procedures applied. This has added clearance steps and, at times, delays and demurrage at the port.',
      },
      {
        q: 'Do I need a GB EORI to import into Felixstowe?',
        a: 'Yes — a GB EORI (Economic Operators Registration and Identification) number is required to clear imports into Great Britain. It is the single most common post-Brexit stumbling block for China-to-UK importers.',
      },
    ],
    updated: '2026-09-01',
  },
  {
    slug: 'le-havre',
    name: 'Le Havre',
    country: 'France',
    countrySlug: 'france',
    type: 'seaport',
    unlocode: 'FRLEH',
    tldr:
      "France's largest container port and the gateway of the merged HAROPA port axis — a Seine river port that reaches Paris and the French interior by barge.",
    operator: 'HAROPA Port (Le Havre · Rouen · Paris)',
    specs: [
      { label: 'Container throughput', value: '≈ 2.6m TEU (2023)' },
      { label: 'Max draft', value: '≈ 15.5 m' },
      { label: 'Key terminals', value: 'Port 2000, TPO/TNMSC' },
      { label: 'UN/LOCODE', value: 'FRLEH' },
    ],
    hinterland:
      'France — the Seine axis connects Le Havre to Rouen and the Paris region, the largest single consumer market in France.',
    insight:
      "Le Havre is the quiet alternative to the northern range for France-bound cargo. The HAROPA merger united Le Havre with Rouen and Paris into one port axis, so a container discharged at Le Havre can reach the Paris market by Seine barge without touching the congested roads. It handles far less volume than Rotterdam or Antwerp, which is exactly the point — for France-only importers, a Le Havre call cuts the inland trucking versus a Rotterdam discharge and avoids the northern-range congestion. If your cargo is destined for France, Le Havre is usually the correct port, not a fallback.",
    keyTakeaways: [
      "France's largest container port; the HAROPA merged axis.",
      'Seine barge reaches Paris without road congestion.',
      'Lower volume means less congestion than the northern range.',
      'Correct gateway for France-bound cargo rather than Rotterdam.',
    ],
    faqs: [
      {
        q: 'Should I ship to Le Havre or Rotterdam for France?',
        a: 'For France-bound cargo, Le Havre usually wins — it avoids the inland trucking from Rotterdam and the northern-range congestion, with Seine barge access straight to the Paris market.',
      },
      {
        q: 'What is HAROPA?',
        a: 'The merged port authority of Le Havre, Rouen and Paris, forming a single Seine-axis port system. A Le Havre discharge can therefore move inland by barge to the Paris region as part of one integrated network.',
      },
    ],
    updated: '2026-09-01',
  },
  {
    slug: 'valencia',
    name: 'Valencia',
    country: 'Spain',
    countrySlug: 'spain',
    type: 'seaport',
    unlocode: 'ESVLC',
    tldr:
      "Spain's largest container port and the western Mediterranean's hub — the natural gateway for Iberia and a transshipment relay for North Africa and the western Med.",
    operator: 'Valenciaport (Autoridad Portuaria de Valencia)',
    specs: [
      { label: 'Container throughput', value: '≈ 4.8m TEU (2023)' },
      { label: 'Max draft', value: '≈ 16 m' },
      { label: 'Key terminals', value: 'MSC Terminal, APM Terminals, CSP Iberian' },
      { label: 'UN/LOCODE', value: 'ESVLC' },
    ],
    hinterland:
      'Spain and Portugal — Valencia serves the Iberian Peninsula and doubles as a western-Med transshipment relay for North Africa.',
    insight:
      "Valencia is the southern-range answer to the northern ports: for cargo destined to Spain or Portugal it avoids the long haul down from Rotterdam, and its Med position makes it a natural relay into North Africa. It is also a genuinely modern port — its terminals run among the highest automation in Europe, which keeps cut-offs reliable. The trade-off is that Valencia is further from the deep-sea mainline than the northern range, so China cargo often arrives via a Med transshipment rather than direct. For Iberian cargo, that is still usually cheaper than trucking from the north.",
    keyTakeaways: [
      "Spain's largest container port and western-Med hub.",
      'Correct gateway for Iberian cargo, avoiding northern-range trucking.',
      'Highly automated terminals keep cut-offs reliable.',
      'Doubles as a North Africa transshipment relay.',
    ],
    faqs: [
      {
        q: 'Is Valencia better than Rotterdam for Spain-bound cargo?',
        a: 'For Spain or Portugal destinations, yes — Valencia avoids the long inland haul from Rotterdam and sits on the Mediterranean. China cargo often reaches it via a Med transshipment rather than a direct call, which is still cheaper than trucking from the north.',
      },
      {
        q: 'Does Valencia serve as a transshipment hub?',
        a: 'Yes — its Mediterranean position makes it a relay for North Africa and the western Med, on top of being the primary gateway for Iberian import cargo.',
      },
    ],
    updated: '2026-09-01',
  },
  {
    slug: 'genoa',
    name: 'Genoa',
    country: 'Italy',
    countrySlug: 'italy',
    type: 'seaport',
    unlocode: 'ITGOA',
    tldr:
      "Northern Italy's gateway — a Ligurian port that pairs with the Vado terminal and feeds the industrial north through the Alps, the most important Italian entry for China cargo.",
    operator: 'Ports of Genoa (Autorità di Sistema Portuale)',
    specs: [
      { label: 'Container throughput', value: '≈ 2.5m TEU (2023, incl. Vado)' },
      { label: 'Max draft', value: '≈ 15 m (Vado ~16 m)' },
      { label: 'Key terminals', value: 'VTE, SECH, Vado Gateway (APM)' },
      { label: 'UN/LOCODE', value: 'ITGOA' },
    ],
    hinterland:
      'Northern Italy — Genoa feeds Lombardy, Piedmont and Emilia-Romagna, the industrial core of Italy, through Alpine rail and road links.',
    insight:
      "Genoa matters because northern Italy is Europe's second manufacturing heartland, and the alternative of discharging at Rotterdam and trucking over the Alps is slow and expensive. The Vado Gateway terminal (APM-operated, semi-automated) modernised Genoa's capacity, and the new Alpine rail tunnels are improving its inland reach. For China cargo destined to Milan, Turin or Bologna, a Genoa call beats a northern-range discharge — but the port is historically prone to strikes and road congestion on the last mile, so build a buffer into your schedule for Italian cargo.",
    keyTakeaways: [
      "Northern Italy's gateway; feeds Lombardy and the industrial north.",
      'Vado Gateway terminal modernised its container capacity.',
      'Beats a Rotterdam discharge for Milan/Turin/Bologna cargo.',
      'Historically prone to strikes and last-mile congestion.',
    ],
    faqs: [
      {
        q: 'Should I ship to Genoa or Rotterdam for northern Italy?',
        a: 'For Milan, Turin or Bologna, Genoa usually wins — it avoids the Alpine trucking from the northern range. Build a schedule buffer, as Italian port operations are prone to strikes and last-mile congestion.',
      },
      {
        q: 'What is the Vado Gateway terminal?',
        a: 'A semi-automated APM Terminals facility at Vado Ligure, near Genoa, that added modern deep-water container capacity to the Ligurian port system — the most significant recent upgrade to Italy\u2019s northern gateway.',
      },
    ],
    updated: '2026-09-01',
  },
  {
    slug: 'gdansk',
    name: 'Gdańsk',
    country: 'Poland',
    countrySlug: 'poland',
    type: 'seaport',
    unlocode: 'PLGDN',
    tldr:
      "Poland's fastest-growing port and the Baltic's deep-water hub — the DCT terminal turned Gdańsk into a genuine alternative to the German ports for Central and Eastern Europe.",
    operator: 'Port of Gdańsk Authority',
    specs: [
      { label: 'Container throughput', value: '≈ 2.1m TEU (2023, fast-growing)' },
      { label: 'Max draft', value: '≈ 17 m (DCT)' },
      { label: 'Key terminals', value: 'DCT Gdańsk (Baltic Hub), Baltic Hub' },
      { label: 'UN/LOCODE', value: 'PLGDN' },
    ],
    hinterland:
      'Poland and Central-Eastern Europe — Gdańsk feeds Poland, the Baltics, Czechia, Slovakia and into Ukraine, a region the western ports serve less well.',
    insight:
      "Gdańsk is the Baltic's answer to Hamburg: a deep-water port that can take the largest vessels, serving a fast-growing Central-Eastern European hinterland that the German ports reach only by long rail. The DCT terminal (now 'Baltic Hub') gives it deep-sea calls that bypass the congested northern range entirely. It is also a China-rail neighbour — the main New Silk Road rail enters Poland at Małaszewicze, so Gdańsk pairs naturally with rail for a sea-rail split. For Poland, Czechia, Slovakia or Ukraine-bound cargo, Gdańsk is increasingly the cheapest and fastest route, not a niche.",
    keyTakeaways: [
      "Poland's fastest-growing port and the Baltic deep-water hub.",
      'DCT (Baltic Hub) takes the largest vessels, bypassing the northern range.',
      'Serves Poland, Baltics, Czechia, Slovakia and into Ukraine.',
      'Pairs naturally with New Silk Road rail at Małaszewicze.',
    ],
    faqs: [
      {
        q: 'Is Gdańsk a real alternative to Hamburg?',
        a: 'For Central-Eastern Europe, increasingly yes. Its deep-water DCT terminal takes the largest vessels, and it serves Poland, the Baltics, Czechia and Slovakia with less inland rail than the German ports require.',
      },
      {
        q: 'How does Gdańsk relate to China rail freight?',
        a: 'Gdańsk sits close to the main New Silk Road rail entry point at Małaszewicze, so a sea-rail split — rail to Poland then sea or vice versa — is a practical option for Central-European cargo.',
      },
    ],
    updated: '2026-09-01',
  },
  {
    slug: 'gothenburg',
    name: 'Gothenburg',
    country: 'Sweden',
    countrySlug: 'sweden',
    type: 'seaport',
    unlocode: 'SEGOT',
    tldr:
      "Scandinavia's largest container port and Sweden's default China gateway — a Kattegat west-coast port that feeds the Swedish market and Norway, with the east-coast Stockholm/Norvik alternative behind it.",
    operator: 'Gothenburg Port Authority (Göteborgs Hamn AB)',
    specs: [
      { label: 'Container throughput', value: '≈ 0.9m TEU (2023)' },
      { label: 'Max draft', value: '≈ 13.5 m' },
      { label: 'Key terminals', value: 'APM Terminals Gothenburg (Skandiahamnen)' },
      { label: 'UN/LOCODE', value: 'SEGOT' },
    ],
    hinterland:
      'Sweden and the Nordic region — Gothenburg serves western Sweden and Norway, with rail to Stockholm (~470 km) covering the eastern market.',
    insight:
      "Gothenburg is the gate you cannot fully replace for Sweden: it handles roughly a third of the country's foreign trade and is the only Swedish port deep enough for the mainline container services that China cargo needs. The trade-off is that Sweden's largest consumer market is Stockholm, ~470 km to the east — so the port is not the destination, and the inland rail leg decides the true landed cost, just as it does for landlocked neighbours. China mainline calls are thinner than at Rotterdam or Hamburg, so much cargo transships via a northern-range hub before the feeder north; price that extra move explicitly.",
    keyTakeaways: [
      "Scandinavia's largest container port; handles roughly a third of Sweden's foreign trade.",
      'The only Swedish port with mainline deep-sea container capacity.',
      'Stockholm, the biggest market, sits ~470 km east — budget the inland rail.',
      'Direct China calls are thinner than the northern range; transshipment is common.',
    ],
    faqs: [
      {
        q: 'Is Gothenburg the only Swedish port for China cargo?',
        a: 'It is the main one — Gothenburg is the only Swedish port with the draft and terminals for mainline container services. Stockholm is served by the newer Norvik Port (SENRK) for east-coast cargo, and both typically transship via a northern-range hub such as Rotterdam or Hamburg.',
      },
      {
        q: 'How far is Gothenburg from Stockholm?',
        a: 'Roughly 470 km by road/rail across Sweden. That inland leg is the difference between the port-to-port and the true door-to-door cost for the Stockholm market, so it must be priced in rather than assumed away.',
      },
    ],
    updated: '2026-09-04',
  },
];
