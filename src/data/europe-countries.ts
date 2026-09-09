import type { Country } from './types';

export const europeCountries: Country[] = [
  {
    slug: 'germany',
    updated: '2026-09-06',
    name: 'Germany',
    iso2: 'DE',
    capital: 'Berlin',
    currency: 'EUR',
    vatRate: 19,
    vatNote: '19% standard (7% reduced on some essentials).',
    ports: ['hamburg'],
    tldr:
      'Germany is the largest EU import market and a China-rail terminus — 19% VAT on top of EU common customs duty, with an EORI number required before any import clears. Hamburg and the rail corridors make it the highest-volume China-to-Europe destination.',
    dutyRate: 'EU Common Customs Tariff (MFN, varies by HS code)',
    dutyNote:
      'Germany applies the EU Common Customs Tariff, so duty is identical across member states and depends on the HS code — typically 0–12% for consumer goods, up to 12% on clothing. No China-EU free-trade agreement is in force.',
    deMinimis: '€150 (VAT threshold)',
    deMinimisNote:
      'The EU abolished the €22 duty-free threshold in 2021; import VAT now applies from the first euro, with the IOSS scheme simplifying VAT on sub-€150 consignments. Confirm current thresholds with German customs.',
    compliance: [
      'EORI number — required for any import into the EU.',
      'CE marking for regulated products.',
      'REACH registration for chemical substances.',
      'Correct 10-digit TARIC classification for duty.',
    ],
    clearanceProcess: [
      'Register for an EORI number before shipping.',
      'Classify goods under the correct TARIC code.',
      'File the import declaration and pay duty plus 19% VAT.',
      'Clear through Hamburg or the rail terminal.',
      'Release and deliver.',
    ],
    insight:
      'Germany is the volume play in Europe, but the EORI is the gate that stops first-time importers. Without an EORI — the EU economic-operators registration number — nothing clears, and the number must exist before the goods arrive, not after. Germany is also where China rail and deep-sea meet: Hamburg takes New Silk Road trains and ocean vessels side by side, so a sea-rail split is a genuine option for German and Central-European cargo. The 19% VAT is middle-of-the-road for Europe, but it is charged on the duty-inclusive value, so budget the compound, not the headline rate.',
    keyTakeaways: [
      'EORI number is mandatory and must exist before the goods arrive.',
      '19% VAT on top of EU common duty — budget the compound.',
      'Hamburg pairs deep-sea with China rail for a sea-rail split.',
      'EU tariff is uniform across member states, varying only by HS code.',
    ],
    faqs: [
      {
        q: 'Do I need an EORI to import into Germany?',
        a: 'Yes. The EORI (Economic Operators Registration and Identification) number is required for any import into the EU, and it must be registered before your goods arrive. It is the single most common first-import stumbling block.',
      },
      {
        q: 'What is the VAT rate in Germany?',
        a: '19% standard, with a 7% reduced rate on some essentials. Import VAT is charged on the duty-inclusive value, so the effective tax is slightly above the headline 19%.',
      },
      {
        q: 'Can I ship China-to-Germany by rail?',
        a: 'Yes — Germany is a primary terminus of the New Silk Road, with trains from Xi\u2019an, Chengdu and Chongqing arriving at Hamburg and other German hubs. Rail is faster than sea and cheaper than air, making it a genuine middle option.',
      },
    ],
  },
  {
    slug: 'united-kingdom',
    updated: '2026-09-06',
    name: 'United Kingdom',
    iso2: 'GB',
    capital: 'London',
    currency: 'GBP',
    vatRate: 20,
    vatNote: '20% standard (5% reduced, 0% some items).',
    ports: ['felixstowe'],
    tldr:
      'The UK is a separate customs regime since Brexit — its own UK Global Tariff, a GB EORI, and UKCA marking, all layered on a 20% VAT. Felixstowe is the default gateway, and the post-Brexit paperwork is the recurring cost.',
    dutyRate: 'UK Global Tariff (independent since 2021)',
    dutyNote:
      'The UK applies its own UK Global Tariff, separate from the EU since 2021. Rates are broadly similar to the EU but simplified, and depend on the HS code — typically 0–12% for consumer goods. Confirm the UK-specific rate, not the EU one.',
    deMinimis: '£135 (VAT threshold)',
    deMinimisNote:
      'Imports below £135 are charged import VAT at the point of sale (the seller registers), while goods above £135 are assessed at the border. Duty applies at lower thresholds depending on value. Confirm current rules with HMRC.',
    compliance: [
      'GB EORI number — required for UK import clearance.',
      'UKCA marking (UK version of CE) for regulated goods.',
      'UK customs declaration for every import.',
      'Correct UK-specific HS classification.',
    ],
    clearanceProcess: [
      'Register for a GB EORI number.',
      'Classify goods under the UK tariff.',
      'File the UK customs declaration.',
      'Pay duty plus 20% VAT.',
      'Clear through Felixstowe and deliver.',
    ],
    insight:
      'Brexit turned the UK from an EU extension into a separate customs wall, and Felixstowe is where it bites. Cargo that once flowed frictionlessly from Rotterdam now needs a UK declaration and a GB EORI at the port, which is why post-Brexit clearance delays and demurrage at Felixstowe became a recurring story. The practical rule for China-to-UK importers is to have the GB EORI and the declaration ready before the vessel arrives — the days of treating the UK as part of the EU are over, and every shipment now carries an extra paperwork cost that must be priced in.',
    keyTakeaways: [
      'GB EORI is mandatory and separate from the EU EORI.',
      'UK Global Tariff is independent of the EU since 2021.',
      '20% VAT on top; UKCA replaces CE for regulated goods.',
      'Post-Brexit paperwork is a recurring, priceable cost.',
    ],
    faqs: [
      {
        q: 'Is the UK still part of the EU customs union?',
        a: 'No. Since 2021 the UK has its own customs regime — the UK Global Tariff, a separate GB EORI, and its own declarations. EU procedures no longer apply to UK imports.',
      },
      {
        q: 'Do I need a GB EORI or an EU EORI for the UK?',
        a: 'A GB EORI (starting with "GB") for UK clearance. An EU EORI is a separate number for EU member states and does not work for UK imports.',
      },
      {
        q: 'Does CE marking still apply in the UK?',
        a: 'The UK introduced UKCA as its own conformity mark. CE remains accepted for many goods during transition, but regulated products increasingly require UKCA — confirm the current status for your product class.',
      },
    ],
  },
  {
    slug: 'france',
    updated: '2026-09-06',
    name: 'France',
    iso2: 'FR',
    capital: 'Paris',
    currency: 'EUR',
    vatRate: 20,
    vatNote: '20% standard (10% and 5.5% reduced on some goods).',
    ports: ['le-havre'],
    tldr:
      'France is the second EU economy with 20% VAT and EU common duty — Le Havre on the Seine is the correct gateway, reaching the Paris market by barge without northern-range trucking.',
    dutyRate: 'EU Common Customs Tariff (MFN, varies by HS code)',
    dutyNote:
      'France applies the EU Common Customs Tariff — duty depends on the HS code and is uniform across member states, typically 0–12% for consumer goods. No China-EU FTA is in force.',
    deMinimis: '€150 (VAT threshold)',
    deMinimisNote:
      'The EU €22 threshold was abolished in 2021; import VAT applies from the first euro, with IOSS simplifying sub-€150 consignments. Confirm current thresholds with French customs.',
    compliance: [
      'EORI number for EU imports.',
      'CE marking for regulated products.',
      'REACH for chemical substances.',
      'Correct TARIC classification.',
    ],
    clearanceProcess: [
      'Register for an EORI number.',
      'Classify under the TARIC code.',
      'File the import declaration and pay duty plus 20% VAT.',
      'Clear through Le Havre.',
      'Release and deliver (often via Seine barge to Paris).',
    ],
    insight:
      'France is where the HAROPA port axis quietly wins: a container discharged at Le Havre reaches the Paris market by Seine barge, avoiding the road congestion and the northern-range trucking that a Rotterdam discharge would require. For France-only cargo, Le Havre is the correct port, not a fallback — yet many importers default to Rotterdam out of habit and pay for the inland haul. The 20% VAT is standard for the EU, but French customs is known for formality, so complete the declaration accurately the first time rather than inviting a re-inspection.',
    keyTakeaways: [
      'Le Havre + Seine barge reaches Paris without road haulage.',
      '20% VAT on top of EU common duty.',
      'EORI mandatory before import.',
      'French customs is formal — get the declaration right first time.',
    ],
    faqs: [
      {
        q: 'Should I ship to Le Havre or Rotterdam for France?',
        a: 'For France-bound cargo, Le Havre — it avoids the inland trucking from Rotterdam and reaches Paris by Seine barge. Rotterdam only makes sense if your cargo is consolidating with other EU destinations.',
      },
      {
        q: 'What is the VAT rate in France?',
        a: '20% standard, with reduced rates of 10% and 5.5% on some goods. Import VAT is charged on the duty-inclusive value.',
      },
    ],
  },
  {
    slug: 'netherlands',
    updated: '2026-09-06',
    name: 'Netherlands',
    iso2: 'NL',
    capital: 'Amsterdam',
    currency: 'EUR',
    vatRate: 21,
    vatNote: '21% standard (9% reduced).',
    ports: ['rotterdam'],
    tldr:
      'The Netherlands is Europe\u2019s distribution hub — Rotterdam is the continent\u2019s gateway, and Dutch VAT-deferral lets importers hold China inventory without paying import VAT until goods enter a member state.',
    dutyRate: 'EU Common Customs Tariff (MFN, varies by HS code)',
    dutyNote:
      'The Netherlands applies the EU Common Customs Tariff — duty depends on the HS code and is uniform across the EU, typically 0–12% for consumer goods. No China-EU FTA is in force.',
    deMinimis: '€150 (VAT threshold)',
    deMinimisNote:
      'The EU €22 threshold was abolished in 2021; import VAT applies from the first euro, with IOSS for sub-€150 consignments. Confirm current thresholds with Dutch customs.',
    compliance: [
      'EORI number for EU imports.',
      'CE marking for regulated products.',
      'REACH for chemical substances.',
      'Article 23 VAT-deferral licence for bonded warehousing.',
    ],
    clearanceProcess: [
      'Register for an EORI number.',
      'Classify under the TARIC code.',
      'File the import declaration and pay duty (VAT deferred if licensed).',
      'Clear through Rotterdam.',
      'Release and distribute — often by Rhine barge onward.',
    ],
    insight:
      'The Netherlands is the VAT-deferral play. Its Article 23 licence lets an importer defer import VAT entirely — goods enter bonded storage at Rotterdam and VAT is only accounted for when they actually enter a member state. For importers who hold inventory or re-export across the EU, this is a working-capital lever most first-timers never discover. Rotterdam\u2019s Rhine barge network then distributes the goods into Germany, France and Switzerland cheaply. If you are building a European distribution base, the Netherlands is almost always the right starting point.',
    keyTakeaways: [
      'Rotterdam is the EU\u2019s gateway; Rhine barge reaches Germany, France, Switzerland.',
      'Article 23 VAT-deferral defers import VAT until goods enter a member state.',
      '21% VAT is among the highest — but deferral softens the cash impact.',
      'The natural base for an EU distribution operation.',
    ],
    faqs: [
      {
        q: 'What is Dutch VAT deferral (Article 23)?',
        a: 'A licence that lets an importer defer import VAT — goods enter bonded storage at Rotterdam and VAT is accounted for only when they enter a member state. It is a major working-capital advantage for importers who hold inventory or re-export.',
      },
      {
        q: 'Is Rotterdam only for the Netherlands?',
        a: 'No — Rotterdam is a European gateway. Its Rhine barge network distributes cargo into Germany, France and Switzerland, so a Rotterdam discharge serves much of Northwest Europe, not just the Dutch market.',
      },
    ],
  },
  {
    slug: 'spain',
    updated: '2026-09-06',
    name: 'Spain',
    iso2: 'ES',
    capital: 'Madrid',
    currency: 'EUR',
    vatRate: 21,
    vatNote: '21% standard (10% and 4% reduced on some goods).',
    ports: ['valencia'],
    tldr:
      'Spain is the Iberian gateway — Valencia on the Mediterranean is the correct entry for Spain and Portugal, avoiding the long haul down from Rotterdam, with 21% VAT on EU common duty.',
    dutyRate: 'EU Common Customs Tariff (MFN, varies by HS code)',
    dutyNote:
      'Spain applies the EU Common Customs Tariff — duty depends on the HS code and is uniform across the EU, typically 0–12% for consumer goods. No China-EU FTA is in force.',
    deMinimis: '€150 (VAT threshold)',
    deMinimisNote:
      'The EU €22 threshold was abolished in 2021; import VAT applies from the first euro, with IOSS for sub-€150 consignments. Confirm current thresholds with Spanish customs.',
    compliance: [
      'EORI number for EU imports.',
      'CE marking for regulated products.',
      'REACH for chemical substances.',
      'Correct TARIC classification.',
    ],
    clearanceProcess: [
      'Register for an EORI number.',
      'Classify under the TARIC code.',
      'File the import declaration and pay duty plus 21% VAT.',
      'Clear through Valencia.',
      'Release and deliver across Iberia.',
    ],
    insight:
      'Spain\u2019s 21% VAT is at the high end, but the real decision is the port: Valencia versus the northern range. For cargo destined to Spain or Portugal, a Rotterdam discharge means a long, expensive haul across France, while a Valencia call puts the container on the Iberian doorstep — and its automated terminals keep cut-offs reliable. China cargo often reaches Valencia via a Mediterranean transshipment rather than a direct deep-sea call, but that is still cheaper than trucking from the north. If your market is Iberia, price Valencia first.',
    keyTakeaways: [
      'Valencia is the correct gateway for Spain and Portugal.',
      '21% VAT on EU common duty — budget the compound.',
      'Med transshipment often beats northern-range trucking.',
      'Highly automated terminals keep cut-offs reliable.',
    ],
    faqs: [
      {
        q: 'Is Valencia better than Rotterdam for Spain?',
        a: 'For Spain or Portugal destinations, yes — Valencia avoids the long inland haul from Rotterdam. China cargo often arrives via a Med transshipment, which is still cheaper than trucking from the northern range.',
      },
      {
        q: 'What is the VAT rate in Spain?',
        a: '21% standard, with reduced rates of 10% and 4% on some goods. Import VAT is charged on the duty-inclusive value.',
      },
    ],
  },
  {
    slug: 'italy',
    updated: '2026-09-06',
    name: 'Italy',
    iso2: 'IT',
    capital: 'Rome',
    currency: 'EUR',
    vatRate: 22,
    vatNote: '22% standard (10% and 4% reduced).',
    ports: ['genoa'],
    tldr:
      'Italy has Europe\u2019s highest standard VAT at 22%, but Genoa feeds the industrial north — for Milan, Turin and Bologna cargo it beats a Rotterdam discharge, at the cost of a strike-prone port.',
    dutyRate: 'EU Common Customs Tariff (MFN, varies by HS code)',
    dutyNote:
      'Italy applies the EU Common Customs Tariff — duty depends on the HS code and is uniform across the EU, typically 0–12% for consumer goods. No China-EU FTA is in force.',
    deMinimis: '€150 (VAT threshold)',
    deMinimisNote:
      'The EU €22 threshold was abolished in 2021; import VAT applies from the first euro, with IOSS for sub-€150 consignments. Confirm current thresholds with Italian customs.',
    compliance: [
      'EORI number for EU imports.',
      'CE marking for regulated products.',
      'REACH for chemical substances.',
      'Correct TARIC classification.',
    ],
    clearanceProcess: [
      'Register for an EORI number.',
      'Classify under the TARIC code.',
      'File the import declaration and pay duty plus 22% VAT.',
      'Clear through Genoa.',
      'Release and deliver to northern Italy.',
    ],
    insight:
      'Italy\u2019s 22% VAT is the highest standard rate in Europe, which makes the port decision matter more: a Rotterdam discharge plus Alpine trucking adds cost on top of the highest VAT, while a Genoa call puts the container at the industrial north\u2019s doorstep. The Vado Gateway terminal modernised Genoa\u2019s capacity, and new Alpine rail tunnels are improving its reach. But Italy\u2019s ports are historically strike-prone and the last mile can be congested — budget a schedule buffer, and treat the 22% VAT as the compound it is (duty + 22% on the duty-inclusive value).',
    keyTakeaways: [
      '22% VAT is Europe\u2019s highest standard rate.',
      'Genoa beats Rotterdam for Milan/Turin/Bologna cargo.',
      'Vado Gateway modernised the Ligurian port system.',
      'Strike-prone port — build a schedule buffer.',
    ],
    faqs: [
      {
        q: 'Should I ship to Genoa or Rotterdam for Italy?',
        a: 'For northern Italy (Milan, Turin, Bologna), Genoa usually wins — it avoids Alpine trucking from the northern range. Budget a buffer, as Italian ports are prone to strikes and last-mile congestion.',
      },
      {
        q: 'What is Italy\u2019s VAT rate?',
        a: '22% standard — the highest in the EU — with reduced rates of 10% and 4% on some goods. Import VAT is charged on the duty-inclusive value.',
      },
    ],
  },
  {
    slug: 'poland',
    updated: '2026-09-06',
    name: 'Poland',
    iso2: 'PL',
    capital: 'Warsaw',
    currency: 'PLN',
    vatRate: 23,
    vatNote: '23% standard (8% and 5% reduced).',
    ports: ['gdansk'],
    tldr:
      'Poland is the Central-Eastern European gateway — Gdańsk\u2019s deep-water port and the Małaszewicze rail entry make it the fastest-growing China route, with 23% VAT on EU common duty.',
    dutyRate: 'EU Common Customs Tariff (MFN, varies by HS code)',
    dutyNote:
      'Poland applies the EU Common Customs Tariff — duty depends on the HS code and is uniform across the EU, typically 0–12% for consumer goods. No China-EU FTA is in force.',
    deMinimis: '€150 (VAT threshold)',
    deMinimisNote:
      'The EU €22 threshold was abolished in 2021; import VAT applies from the first euro, with IOSS for sub-€150 consignments. Confirm current thresholds with Polish customs.',
    compliance: [
      'EORI number for EU imports.',
      'CE marking for regulated products.',
      'REACH for chemical substances.',
      'Correct TARIC classification.',
    ],
    clearanceProcess: [
      'Register for an EORI number.',
      'Classify under the TARIC code.',
      'File the import declaration and pay duty plus 23% VAT.',
      'Clear through Gdańsk or the rail terminal.',
      'Release and deliver across Central-Eastern Europe.',
    ],
    insight:
      'Poland is the fastest-growing China corridor in Europe, and the reason is geography: Gdańsk\u2019s deep-water DCT terminal takes the largest vessels and serves a Central-Eastern European hinterland the German ports reach only by long rail, while the New Silk Road rail enters Poland at Małaszewicze. That makes Poland the natural home for a sea-rail split — ocean to Gdańsk or rail to Małaszewicze, then distribute to Poland, the Baltics, Czechia, Slovakia and into Ukraine. The 23% VAT is the EU\u2019s second-highest, but for this region the logistics savings usually outweigh the tax.',
    keyTakeaways: [
      'Gdańsk + Małaszewicze make Poland a sea-rail split hub.',
      'Fastest-growing China corridor in Europe.',
      '23% VAT is the EU\u2019s second-highest.',
      'Serves Poland, Baltics, Czechia, Slovakia and into Ukraine.',
    ],
    faqs: [
      {
        q: 'Why is Poland the fastest-growing China corridor?',
        a: 'Geography — Gdańsk\u2019s deep-water port serves Central-Eastern Europe directly, and the New Silk Road rail enters at Małaszewicze, so a sea-rail split is natural. It reaches Poland, the Baltics, Czechia and Slovakia with less inland haul than the German ports.',
      },
      {
        q: 'What is Poland\u2019s VAT rate?',
        a: '23% standard — the EU\u2019s second-highest after Hungary\u2019s 27% — with reduced rates of 8% and 5%. Import VAT is charged on the duty-inclusive value.',
      },
    ],
  },
  {
    slug: 'belgium',
    updated: '2026-09-06',
    name: 'Belgium',
    iso2: 'BE',
    capital: 'Brussels',
    currency: 'EUR',
    vatRate: 21,
    vatNote: '21% standard (12% and 6% reduced).',
    ports: ['antwerp'],
    tldr:
      'Belgium is Europe\u2019s chemicals gateway — Antwerp pairs deep-water access with the continent\u2019s largest petrochemical cluster, 21% VAT on EU common duty, and a congestion alternative to Rotterdam.',
    dutyRate: 'EU Common Customs Tariff (MFN, varies by HS code)',
    dutyNote:
      'Belgium applies the EU Common Customs Tariff — duty depends on the HS code and is uniform across the EU, typically 0–12% for consumer goods. No China-EU FTA is in force.',
    deMinimis: '€150 (VAT threshold)',
    deMinimisNote:
      'The EU €22 threshold was abolished in 2021; import VAT applies from the first euro, with IOSS for sub-€150 consignments. Confirm current thresholds with Belgian customs.',
    compliance: [
      'EORI number for EU imports.',
      'CE marking for regulated products.',
      'REACH for chemical substances.',
      'Correct TARIC classification.',
    ],
    clearanceProcess: [
      'Register for an EORI number.',
      'Classify under the TARIC code.',
      'File the import declaration and pay duty plus 21% VAT.',
      'Clear through Antwerp.',
      'Release and deliver — often to the chemical cluster or onward by barge.',
    ],
    insight:
      'Belgium\u2019s Antwerp is the port you pick when your cargo is chemical, breakbulk or reefer rather than pure container volume — it hosts Europe\u2019s largest petrochemical cluster, so the specialised terminals and the bonded chemical infrastructure are the real asset. The Antwerp-Bruges merger created a two-site system with deep inland reach, and its Scheldt access means less tidal constraint than Hamburg. For importers of chemicals, polymers or temperature-controlled goods, Antwerp\u2019s terminals are often a better fit than Rotterdam\u2019s container-first layout — and it is close enough to Rotterdam that carriers shift calls between the two when one congests.',
    keyTakeaways: [
      'Antwerp is Europe\u2019s chemicals and breakbulk gateway.',
      'Hosts the continent\u2019s largest petrochemical cluster.',
      'A congestion alternative to Rotterdam on the same range.',
      '21% VAT on EU common duty.',
    ],
    faqs: [
      {
        q: 'What is Antwerp best for?',
        a: 'Chemicals and polymers (Europe\u2019s largest petrochemical cluster), breakbulk, project cargo and reefer. Its specialised terminals are where Antwerp differentiates from Rotterdam\u2019s container-first layout.',
      },
      {
        q: 'Is Antwerp a real alternative to Rotterdam?',
        a: 'Yes — for chemicals, breakbulk or when Rotterdam is congested. The two ports are close enough that carriers can shift calls, so pricing Antwerp alongside Rotterdam is standard practice.',
      },
    ],
  },
  {
    slug: 'austria',
    updated: '2026-09-06',
    name: 'Austria',
    iso2: 'AT',
    capital: 'Vienna',
    currency: 'EUR',
    vatRate: 20,
    vatNote: '20% standard (10% and 13% reduced).',
    ports: ['hamburg'],
    tldr:
      'Austria is a landlocked EU market reached through a transit gateway — Hamburg on the northern range or Koper/Trieste on the Adriatic — with 20% VAT on EU common duty, and Vienna as both a New Silk Road rail terminus and an inland Danube terminal (ATVIE).',
    dutyRate: 'EU Common Customs Tariff (MFN, varies by HS code)',
    dutyNote:
      'Austria applies the EU Common Customs Tariff — duty depends on the HS code and is uniform across member states, typically 0–12% for consumer goods. No China-EU FTA is in force.',
    deMinimis: '€150 (VAT threshold)',
    deMinimisNote:
      'The EU abolished the €22 duty-free threshold in 2021; import VAT now applies from the first euro, with IOSS simplifying sub-€150 consignments. Confirm current thresholds with Austrian customs.',
    compliance: [
      'EORI number — required for any import into the EU.',
      'CE marking for regulated products.',
      'REACH registration for chemical substances.',
      'Correct 10-digit TARIC classification for duty.',
    ],
    clearanceProcess: [
      'Register for an EORI number before shipping.',
      'Classify goods under the correct TARIC code.',
      'Choose a transit gateway (Hamburg, Koper, Trieste or Constanța) or move under EU customs transit to clear inland.',
      'File the import declaration and pay EU duty plus 20% VAT.',
      'Release and deliver by rail or truck to the Austrian site.',
    ],
    insight:
      'Austria is the landlocked test of the "port is not the destination" rule. Every China shipment must land at someone else\'s port and then travel inland — Hamburg is ~1,000 km from Vienna, while the Adriatic\'s Koper is only ~480 km, roughly half the distance. That distance gap is why Koper and Trieste quietly compete for Austrian cargo despite the longer sea leg down the Med: the inland haul is where the Austrian landed cost is actually decided. Vienna is also a New Silk Road terminus, so rail can bypass the port problem entirely, landing in ~18–22 days instead of the ~32–43 a sea-plus-inland routing needs.',
    keyTakeaways: [
      'Austria is landlocked — every shipment clears via a transit port (Hamburg ~1,000 km, or Koper ~480 km away).',
      '20% VAT on EU common duty; 5% duty + 20% VAT compounds to ×1.26, not 25%.',
      'Vienna is a New Silk Road rail terminus — ~18–22 days versus ~32–43 by sea-plus-inland.',
      'EU customs transit (T1/T2) lets you clear inland at Vienna, Linz or Graz instead of the port.',
      'The gateway-to-Vienna inland leg is the cost most ocean quotes silently omit.',
    ],
    faqs: [
      {
        q: 'How long does shipping from China to Austria take?',
        a: 'Allow roughly 32–43 days door-to-door by sea — 30–38 days port-to-port to a transit gateway (Hamburg or Koper) plus about 2–5 days of inland rail/truck to Vienna (MEDIUM confidence, planning estimates). Direct China rail to Vienna runs roughly 18–22 days, and no verified Austrian air transit is published in the snapshot, so request that from your carrier.',
      },
      {
        q: 'Which port should I use when shipping from China to Austria?',
        a: 'Austria has no seaport, so the decision is the transit gateway. Hamburg (UN/LOCODE DEHAM, ≈7.7m TEU 2023) sits ~1,000 km from Vienna, while Koper (SIKOP, ≈1.0m TEU) is ~480 km away — roughly half the inland distance — which is why the Adriatic route is Austria\'s quiet second option, and Trieste (ITTRS) and Constanța (ROCND) are the further alternatives.',
      },
      {
        q: 'What is the VAT rate in Austria?',
        a: 'Austria applies a 20% standard VAT rate, with reduced rates of 10% (food, books, accommodation) and 13% (some cultural and agricultural goods). Import VAT is charged on the duty-inclusive value, so 5% duty plus 20% VAT compounds to ×1.26, not 25% — a $10,000 CIF shipment at 5% duty lands at $12,600 before destination fees.',
      },
      {
        q: 'Can I ship China-to-Austria by rail?',
        a: 'Yes — Vienna is a New Silk Road terminus, so rail from Xi\'an or Chengdu lands in roughly 18–22 days versus ~32–43 by sea-plus-inland, cutting about 14–20 days at roughly 2–3× the sea rate. That premium is justified by stockout avoidance and market timing on high-value or seasonal cargo, not by financing cost alone.',
      },
      {
        q: 'Can I clear customs inland in Austria instead of at the port?',
        a: 'Yes — under EU customs transit (T1/T2, NCTS) you can move goods from Hamburg or Koper to an inland Austrian customs office in Vienna, Linz or Graz and clear there, paying the 20% Austrian import VAT at the inland point rather than at the gateway.',
      },
      {
        q: 'How does Austria\'s landed cost compare with Germany\'s?',
        a: 'On a $10,000 CIF at 5% duty, Austria\'s 20% VAT lands at $12,600 versus Germany\'s 19% at $12,495 — a $105 gap, roughly 1% on the duty-inclusive base — before adding the extra inland leg Austria needs because it has no seaport of its own.',
      },
      {
        q: 'Do I need an EORI to import into Austria?',
        a: 'Yes — one EORI (Economic Operators Registration and Identification) number is required for any import into the EU, and it must exist before the goods arrive; zero Austrian imports clear without it.',
      },
      {
        q: 'What is the difference between FCL and LCL for China to Austria?',
        a: 'FCL is priced per container at 20ft $1,200–$4,600 and 40ft $1,600–$6,500 to the Hamburg gateway (MEDIUM), while LCL is priced per cubic metre at $60–$150/CBM (MEDIUM), with the planning break-even near 15 CBM — below that LCL is usually cheaper, above it FCL starts to win.',
      },
      {
        q: 'What documents are needed for Austrian customs clearance?',
        a: 'The core set is four documents plus one classification — commercial invoice, bill of lading (or rail/CMR consignment note for rail cargo), packing list and the correct 10-digit TARIC code, backed by your EORI number. Regulated products add CE marking evidence and chemicals add REACH registration.',
      },
      {
        q: 'Can I defer VAT when importing into Austria?',
        a: 'Austria, like other EU states, allows EU customs warehousing (procedures 42/63) to defer import VAT until goods are released for free circulation — a working-capital lever for importers who hold inventory or re-export within the EU.',
      },
      {
        q: 'What are CE marking and REACH, and do they apply in Austria?',
        a: 'CE marking is the EU conformity mark required for regulated products — electronics, toys, machinery and medical devices — and REACH is the EU chemical regulation requiring registration for chemical substances. Both apply in Austria exactly as in every member state.',
      },
      {
        q: 'Do SABER or SASO apply to Austria?',
        a: 'No — SABER and SASO are Saudi-only conformity systems and apply to zero Austrian or EU imports. Austria uses CE marking and REACH instead, so do not copy a Saudi SABER/SASO step into an Austrian quote.',
      },
    ],
  },
  {
    slug: 'sweden',
    updated: '2026-09-06',
    name: 'Sweden',
    iso2: 'SE',
    capital: 'Stockholm',
    currency: 'SEK',
    vatRate: 25,
    vatNote: '25% standard (12% and 6% reduced).',
    ports: ['gothenburg'],
    tldr:
      'Sweden is a Nordic EU market entered through Gothenburg (SEGOT) on the west coast — 25% VAT on EU common duty, a SEK currency not the euro, and a ~470 km inland leg to the Stockholm market on the east coast.',
    dutyRate: 'EU Common Customs Tariff (MFN, varies by HS code)',
    dutyNote:
      'Sweden applies the EU Common Customs Tariff — duty depends on the HS code and is uniform across member states, typically 0–12% for consumer goods. No China-EU FTA is in force.',
    deMinimis: '€150 (VAT threshold)',
    deMinimisNote:
      'The EU abolished the €22 duty-free threshold in 2021; import VAT now applies from the first euro, with IOSS simplifying sub-€150 consignments. Confirm current thresholds with Swedish customs.',
    compliance: [
      'EORI number — required for any import into the EU.',
      'CE marking for regulated products.',
      'REACH registration for chemical substances.',
      'Correct 10-digit TARIC classification for duty.',
    ],
    clearanceProcess: [
      'Register for an EORI number before shipping.',
      'Classify goods under the correct TARIC code.',
      'File the import declaration and pay EU duty plus 25% VAT.',
      'Clear through Gothenburg (or Norvik for east-coast cargo).',
      'Release and deliver by rail or truck across Sweden.',
    ],
    insight:
      'Sweden carries the EU\'s highest standard VAT tier at 25%, and it is one of the few EU states outside the euro — so an importer pays ocean freight in USD, import VAT in SEK, and carries currency risk on both. That 25% rate is 6 points above Germany\'s 19%, which on a $10,000 CIF shipment at 5% duty means $630 more in landed tax before any logistics. The second Sweden-specific variable is geography: Gothenburg, the only mainline-capable port, sits on the west coast while the biggest consumer market is Stockholm, ~470 km east — so the inland leg, not the ocean quote, is where the real landed cost is decided.',
    keyTakeaways: [
      '25% VAT is the EU\'s highest standard tier (with Denmark and Croatia); only Hungary\'s 27% is higher.',
      'SEK, not EUR — freight in USD plus VAT in SEK means double currency exposure.',
      'Gothenburg (SEGOT) is the gateway; Stockholm is ~470 km east, so the inland leg decides landed cost.',
      '5% duty + 25% VAT compounds to ×1.3125, not 30%.',
    ],
    faqs: [
      {
        q: 'How long does shipping from China to Sweden take?',
        a: 'Allow roughly 32–40 days port-to-port by sea from Shanghai or Ningbo-Zhoushan to Gothenburg via the Cape (MEDIUM confidence, planning estimate), plus about 1–2 days inland rail to Stockholm — versus roughly 20–25 days by China-Europe rail via Hamburg or Duisburg. No verified Swedish air transit is published, so request that from your carrier.',
      },
      {
        q: 'Which port should I use when shipping from China to Sweden?',
        a: 'Gothenburg (UN/LOCODE SEGOT, ≈0.9m TEU 2023) is the only Swedish port with mainline container capacity, so it is the default; the newer Norvik Port (SENRK) serves the Stockholm east coast. Direct China calls are thinner than the northern range, so transshipment via Rotterdam or Hamburg is common.',
      },
      {
        q: 'What is the VAT rate in Sweden?',
        a: 'Sweden applies a 25% standard VAT rate, with reduced rates of 12% (food, restaurants, hotels) and 6% (books, newspapers, passenger transport). Import VAT is charged on the duty-inclusive value, so 5% duty plus 25% VAT compounds to ×1.3125, not 30% — a $10,000 CIF shipment at 5% duty lands at $13,125 before destination fees.',
      },
      {
        q: 'Why is Sweden\'s currency (SEK) a landed-cost risk?',
        a: 'Sweden is in the EU but not the eurozone, so you pay ocean freight in USD and import VAT in SEK. A krona move between quoting and clearing changes your landed cost by the full SEK exposure on the duty-inclusive value — a risk a euro-denominated market like Germany does not carry.',
      },
      {
        q: 'How does Sweden\'s landed cost compare with Germany\'s?',
        a: 'On a $10,000 CIF at 5% duty, Sweden\'s 25% VAT lands at $13,125 versus Germany\'s 19% at $12,495 — a $630 gap, roughly 6% on the duty-inclusive base — before the ~470 km Gothenburg-to-Stockholm inland leg is added.',
      },
      {
        q: 'Can I ship China-to-Sweden by rail?',
        a: 'Yes — China-Europe rail runs to Hamburg or Duisburg in roughly 18–22 days, then continues to Sweden by rail across the Øresund region in roughly 20–25 days total, versus ~32–40 days by sea plus inland. That is roughly 2–3× the sea rate, so it is a time-versus-cost call for Stockholm-bound cargo.',
      },
      {
        q: 'Do I need an EORI to import into Sweden?',
        a: 'Yes — one EORI (Economic Operators Registration and Identification) number is required for any import into the EU, and it must exist before the goods arrive; zero Swedish imports clear without it.',
      },
      {
        q: 'What is the difference between FCL and LCL for China to Sweden?',
        a: 'FCL is priced per container (northern-range benchmark 20ft $1,200–$4,800, 40ft $1,600–$6,800; Gothenburg-specific figures are not published and must be requested) and LCL per cubic metre ($60–$160/CBM), with the planning break-even near 15 CBM — below that LCL is usually cheaper, above it FCL starts to win.',
      },
      {
        q: 'What documents are needed for Swedish customs clearance?',
        a: 'The core set is four documents plus one classification — commercial invoice, bill of lading (or rail/CMR consignment note for rail cargo), packing list and the correct 10-digit TARIC code, backed by your EORI number. Regulated products add CE marking evidence and chemicals add REACH registration.',
      },
      {
        q: 'Can I defer VAT when importing into Sweden?',
        a: 'Sweden, like other EU states, allows EU customs warehousing (procedures 42/63) to defer import VAT until goods are released for free circulation — a working-capital lever for importers who hold inventory or re-export within the EU.',
      },
      {
        q: 'What are CE marking and REACH, and do they apply in Sweden?',
        a: 'CE marking is the EU conformity mark required for regulated products — electronics, toys, machinery and medical devices — and REACH is the EU chemical regulation requiring registration for chemical substances. Both apply in Sweden exactly as in every member state.',
      },
      {
        q: 'Do SABER or SASO apply to Sweden?',
        a: 'No — SABER and SASO are Saudi-only conformity systems and apply to zero Swedish or EU imports. Sweden uses CE marking and REACH instead, so do not copy a Saudi SABER/SASO step into a Swedish quote.',
      },
    ],
  },
  {
    slug: 'portugal',
    updated: '2026-09-06',
    name: 'Portugal',
    iso2: 'PT',
    capital: 'Lisbon',
    currency: 'EUR',
    vatRate: 23,
    vatNote: '23% standard (13% and 6% reduced).',
    ports: ['sines'],
    tldr:
      'Portugal is the Atlantic end of Iberia — entered through Sines (PTSIE), a deep-water gateway reached ahead of the northern range on the Cape routing, with 23% VAT on EU common duty and a 1668mm Iberian-gauge rail wall between it and the New Silk Road.',
    dutyRate: 'EU Common Customs Tariff (MFN, varies by HS code)',
    dutyNote:
      'Portugal applies the EU Common Customs Tariff — duty depends on the HS code and is uniform across member states, typically 0–12% for consumer goods. No China-EU FTA is in force.',
    deMinimis: '€150 (VAT threshold)',
    deMinimisNote:
      'The EU €22 threshold was abolished in 2021; import VAT applies from the first euro, with IOSS simplifying sub-€150 consignments. Confirm current thresholds with Portuguese customs.',
    compliance: [
      'EORI number for EU imports.',
      'CE marking for regulated products.',
      'REACH for chemical substances.',
      'Correct 10-digit TARIC classification.',
    ],
    clearanceProcess: [
      'Register for an EORI number.',
      'Classify under the TARIC code.',
      'File the import declaration and pay duty plus 23% VAT.',
      'Clear through Sines, Lisbon or Leixões.',
      'Release and deliver across Portugal.',
    ],
    insight:
      'Portugal is the Atlantic mirror of the Iberian story: its deep-water gateway Sines sits further west than any northern-range port, so on the Cape-of-Good-Hope routing a China vessel reaches Sines before Rotterdam or Hamburg — yet most importers still route Portugal through Rotterdam out of habit. The 23% VAT is two points above Spain\u2019s 21%, which on a $10,000 CIF shipment at 5% duty is $210 more in landed tax before any logistics. And the rail question is structural: Spain and Portugal run 1668mm Iberian gauge, so a standard-gauge China-Europe train cannot roll into Portugal without a transload at the Spanish border — the same gauge wall the New Silk Road meets on its eastern edge, repeated on Europe\u2019s western edge.',
    keyTakeaways: [
      'Sines (PTSIE) is the first deep-water European gateway on the Cape routing — reached ahead of the northern range.',
      '23% VAT is two points above Spain\u2019s 21%; 5% duty + 23% VAT compounds to ×1.2915, not 28%.',
      '1668mm Iberian gauge forces a transload for any rail cargo crossing from standard-gauge Europe.',
      'Three-port geometry: Sines (deep-water south), Lisbon (capital), Leixões (Porto north).',
    ],
    faqs: [
      {
        q: 'What is the VAT rate in Portugal?',
        a: '23% standard, with reduced rates of 13% and 6% on some goods. Import VAT is charged on the duty-inclusive value, so 5% duty plus 23% VAT compounds to ×1.2915 — a $10,000 CIF shipment at 5% duty lands at $12,915, not the $12,800 you get by adding the two rates.',
      },
      {
        q: 'Which port should I use when shipping from China to Portugal?',
        a: 'Sines (PTSIE) is the deep-water default for mainline containers, Lisbon (PTLIS) serves the capital market, and Leixões (PTLEI) serves Porto and the industrial north — so the port choice follows the destination, not a single national gateway.',
      },
      {
        q: 'Can I ship from China to Portugal by rail?',
        a: 'Yes in principle, but Spain and Portugal run 1668mm Iberian gauge against the standard 1435mm the New Silk Road uses, so a China-Europe train must transload at the Spanish border before any rail leg into Portugal — most cargo therefore trucks from Madrid or feeds from the northern range instead.',
      },
    ],
  },
  {
    slug: 'greece',
    updated: '2026-09-06',
    name: 'Greece',
    iso2: 'GR',
    capital: 'Athens',
    currency: 'EUR',
    vatRate: 24,
    vatNote: '24% standard (13% and 6% reduced).',
    ports: ['piraeus'],
    tldr:
      'Greece is the maritime-Silk-Road end of Europe — entered through Piraeus (GRPIR), the only EU gateway owned by a Chinese state carrier (COSCO 67%), with 24% VAT on EU common duty and a sea transit that flips between roughly 22–28 days via Suez and 33–40 days via the Cape.',
    dutyRate: 'EU Common Customs Tariff (MFN, varies by HS code)',
    dutyNote:
      'Greece applies the EU Common Customs Tariff — duty depends on the HS code and is uniform across member states, typically 0–12% for consumer goods. No China-EU FTA is in force.',
    deMinimis: '€150 (VAT threshold)',
    deMinimisNote:
      'The EU €22 threshold was abolished in 2021; import VAT applies from the first euro, with IOSS simplifying sub-€150 consignments. Confirm current thresholds with Greek customs.',
    compliance: [
      'EORI number for EU imports.',
      'CE marking for regulated products.',
      'REACH for chemical substances.',
      'Correct 10-digit TARIC classification.',
    ],
    clearanceProcess: [
      'Register for an EORI number.',
      'Classify under the TARIC code.',
      'File the import declaration and pay duty plus 24% VAT.',
      'Clear through Piraeus (or Thessaloniki for the north).',
      'Release and deliver across Greece or into the Western Balkans.',
    ],
    insight:
      "Greece is the one EU market whose gateway is owned by China. COSCO Shipping Ports holds 67% of Piraeus Port Authority, making Piraeus the maritime terminus of the Belt-and-Road — a China-controlled hub inside the EU customs union. That single fact drives everything: COSCO's own Asia–Europe mainline services are tied to Piraeus (reliable direct calls), and the port functions as a Balkans gateway feeding North Macedonia, Serbia, Kosovo and Bulgaria, competing with Koper and Constanța rather than just Greek ports. The second Greece-specific variable is the Red Sea: on the Suez routing Piraeus is the first major EU call (~22–28 days), on the Cape routing it is one of the last (~33–40 days) — an 11–18-day swing no other gateway suffers. And there is no mainstream China→Greece rail lane, so Greece is a maritime market where the sea-versus-air decision has no rail middle option.",
    keyTakeaways: [
      'Piraeus (GRPIR) is the only EU gateway owned by a Chinese state carrier — COSCO holds 67%.',
      '24% VAT on EU common duty; 5% duty + 24% VAT compounds to ×1.302, not 29%.',
      'The Red Sea inverts Piraeus: ~22–28 days via Suez versus ~33–40 days via the Cape.',
      'No mainstream China→Greece rail lane — the Budapest–Belgrade corridor is still emerging.',
      'Piraeus is a Balkans gateway (North Macedonia, Serbia, Kosovo, Bulgaria), not just a Greek port.',
    ],
    faqs: [
      {
        q: 'What is the VAT rate in Greece?',
        a: '24% standard, with reduced rates of 13% and 6% on some goods. Import VAT is charged on the duty-inclusive value, so 5% duty plus 24% VAT compounds to ×1.302 — a $10,000 CIF shipment at 5% duty lands at $13,020, not the $12,900 you get by adding the two rates.',
      },
      {
        q: 'Why is Piraeus owned by a Chinese company?',
        a: 'COSCO Shipping Ports (CSP), the terminal arm of China\u2019s state carrier COSCO, holds a 67% majority stake in Piraeus Port Authority — acquired 51% in 2016 and raised to 67% in 2021. That makes Piraeus the only EU gateway run by a Chinese state carrier and the maritime terminus of the Belt-and-Road.',
      },
      {
        q: 'How does the Red Sea crisis affect shipping to Greece?',
        a: 'It inverts Piraeus\u2019s position more than any other EU gateway: on the Suez routing Piraeus is the first major EU call after the canal (~22–28 days), while on the Cape routing it becomes one of the last calls (~33–40 days) — a swing of roughly 11–18 days.',
      },
    ],
  },
  {
    slug: "ireland",
    updated: "2026-09-07",
    name: "Ireland",
    iso2: "IE",
    capital: "Dublin",
    currency: "EUR",
    vatRate: 23,
    vatNote: "23% standard (13.5% and 9% reduced).",
    ports: ["dublin", "cork"],
    tldr:
      "Ireland is the EU's Atlantic island — entered through Dublin (IEDUB) and Cork (IEORK), both reached by a final short-sea crossing continental markets never need, with 23% VAT on EU common duty and a post-Brexit routing question the UK landbridge once answered.",
    dutyRate: "EU Common Customs Tariff (MFN, varies by HS code)",
    dutyNote:
      "Ireland applies the EU Common Customs Tariff — duty depends on the HS code and is uniform across member states, typically 0–12% for consumer goods. No China-EU FTA is in force.",
    deMinimis: "€150 (VAT threshold)",
    deMinimisNote:
      "The EU €22 threshold was abolished in 2021; import VAT applies from the first euro, with IOSS simplifying sub-€150 consignments. Confirm current thresholds with Irish Revenue.",
    compliance: [
      "EORI number for EU imports.",
      "CE marking for regulated products.",
      "REACH for chemical substances.",
      "Correct 10-digit TARIC classification.",
    ],
    clearanceProcess: [
      "Register for an EORI number.",
      "Classify under the TARIC code.",
      "File the import declaration and pay duty plus 23% VAT.",
      "Clear through Dublin, Cork or Rosslare.",
      "Release and deliver across Ireland (or onward to Northern Ireland).",
    ],
    insight:
      "Ireland is the one EU market that needs an extra sea leg no continental destination carries: the container must cross the Irish Sea or Celtic Sea at the end, either as a direct lo-lo deep-sea call, a northern-range transshipment feeding west, or — the pre-Brexit default — the UK landbridge across Britain. Brexit changed that third option's arithmetic: routing through the UK now means clearing two customs regimes (EU entry plus UK transit) where a direct Dublin or Cork call clears one, which is why direct continental lo-lo services have grown since 2021. The 23% VAT sits four points above Germany's 19% and compounds with duty — 5% duty + 23% VAT is ×1.2915, not 28% — so a $10,000 CIF shipment lands at $12,915 before the short-sea leg and destination fees are added. And Ireland has no practical China-Europe rail option: the New Silk Road stops at German and Polish termini, and any final rail move still ends in a ferry or feeder crossing that erodes the speed advantage, leaving Ireland a sea-versus-air market.",
    keyTakeaways: [
      "Ireland is an island — every China shipment needs a final short-sea crossing continental markets never pay.",
      "23% VAT on EU common duty; 5% duty + 23% VAT compounds to ×1.2915, not 28%.",
      "Post-Brexit, the UK landbridge means two customs regimes versus one for a direct Dublin or Cork call.",
      "No practical China-Europe rail lane — Ireland is a sea-versus-air market.",
      "Dublin (IEDUB) is the volume gate; Cork (IEORK) is the deep-water alternative.",
    ],
    faqs: [
      {
        q: "What is the VAT rate in Ireland?",
        a: "23% standard, with reduced rates of 13.5% (the broad reduced band) and 9% (tourism, hospitality, newspapers). Import VAT is charged on the duty-inclusive value, so 5% duty plus 23% VAT compounds to ×1.2915 — a $10,000 CIF shipment at 5% duty lands at $12,915, not the $12,800 you get by adding the two rates.",
      },
      {
        q: "Which port should I use when shipping from China to Ireland?",
        a: "Dublin (UN/LOCODE IEDUB) is the volume gate for most of the country, while Cork (IEORK) is the deep-water alternative on the south coast and Rosslare serves the southeast. Dublin is tidal with draft limits, so much China cargo transships via the northern range and feeds west rather than calling direct.",
      },
      {
        q: "Does the UK landbridge still make sense for China to Ireland?",
        a: "Post-Brexit it usually costs more in paperwork than it saves in days — routing through the UK means clearing two customs regimes (EU entry plus UK transit) where a direct Dublin or Cork call clears one. That is why direct continental lo-lo services to Irish ports have grown since 2021, and why most new quotes price the direct call first.",
      },
    ],
  },
  {
    slug: "denmark",
    updated: "2026-09-08",
    name: "Denmark",
    iso2: "DK",
    capital: "Copenhagen",
    currency: "DKK",
    vatRate: 25,
    vatNote: "25% flat — single rate, no reduced band (0% only on newspapers/periodicals).",
    ports: ["aarhus", "copenhagen", "fredericia"],
    tldr:
      "Denmark is Sweden's VAT twin but its currency opposite — 25% flat VAT on EU common duty, a DKK pegged to the euro at ±2.25% (ERM II) instead of a floating krona, and an Aarhus/Copenhagen split between the North Sea/Kattegat and the Øresund/Baltic.",
    dutyRate: "EU Common Customs Tariff (MFN, varies by HS code)",
    dutyNote:
      "Denmark applies the EU Common Customs Tariff — duty depends on the HS code and is uniform across member states, typically 0–12% for consumer goods. No China-EU FTA is in force.",
    deMinimis: "€150 (VAT threshold)",
    deMinimisNote:
      "The EU €22 threshold was abolished in 2021; import VAT applies from the first euro, with IOSS simplifying sub-€150 consignments. Confirm current thresholds with Danish customs.",
    compliance: [
      "EORI number for EU imports.",
      "CE marking for regulated products.",
      "REACH for chemical substances.",
      "Correct 10-digit TARIC classification.",
    ],
    clearanceProcess: [
      "Register for an EORI number.",
      "Classify under the TARIC code.",
      "File the import declaration and pay duty plus 25% VAT.",
      "Clear through Aarhus, Copenhagen or Fredericia.",
      "Release and deliver across Denmark (Jutland or Zealand).",
    ],
    insight:
      "Denmark is the Nordic market most guides flatten into 'a 25% VAT country' — which hides the fact that actually decides the landed cost: the currency regime. Denmark's krone is pegged to the euro at ±2.25% under ERM II, so a Danish importer carries only the USD→EUR leg floating while Sweden's floating krona carries both. The second Denmark-specific variable is the flat 25%: no reduced band means food, books and hospitality pay 25% where Sweden's 12%/6% reduced rates apply, so Denmark's effective VAT is higher despite an equal headline. And the geography splits the port decision — Aarhus on the Kattegat serves Jutland from the North Sea side, while Copenhagen on the Øresund serves Zealand, so the port choice follows the destination rather than a single national gate.",
    keyTakeaways: [
      "Denmark's 25% VAT is flat — no reduced band (0% only on newspapers) — so its effective VAT on food and books exceeds Sweden's despite an equal headline.",
      "DKK is pegged to EUR at ±2.25% (ERM II), so Denmark carries roughly half the currency exposure of a floating-currency market like Sweden.",
      "5% duty + 25% VAT compounds to ×1.3125 — a $10,000 CIF lands at $13,125, identical to Sweden and $630 above Germany's 19%.",
      "Aarhus (DKAAR) handles ~70% of Danish containers on the Kattegat, while Copenhagen (DKCPH) is the Øresund/Baltic capital gate.",
      "The Fehmarn Belt tunnel (~2029) will cut Hamburg–Copenhagen rail from ~4.5h to ~2.5h, rewiring Scandinavia's China-rail feed.",
    ],
    faqs: [
      {
        q: "What is the VAT rate in Denmark?",
        a: "25% flat — a single rate with no reduced band (0% only on newspapers and periodicals). Import VAT is charged on the duty-inclusive value, so 5% duty plus 25% VAT compounds to ×1.3125 — a $10,000 CIF shipment at 5% duty lands at $13,125, not the $13,000 you get by adding the two rates.",
      },
      {
        q: "Which port should I use when shipping from China to Denmark?",
        a: "Aarhus (DKAAR) is the mainline gate for Jutland, handling roughly 70% of Danish container traffic, while Copenhagen (DKCPH) serves Zealand and the capital and Fredericia (DKFRH) serves Jutland/Funen on the Little Belt — so the port follows the destination, not a single national gate.",
      },
      {
        q: "Why is Denmark's currency (DKK) different from Sweden's (SEK)?",
        a: "Denmark's krone is pegged to the euro at ±2.25% under ERM II, so only the USD→EUR leg floats, while Sweden's krona floats freely against both — Denmark therefore carries roughly half the currency exposure of Sweden on identical cargo.",
      },
    ],
  },
  {
    slug: "finland",
    updated: "2026-09-09",
    name: "Finland",
    iso2: "FI",
    capital: "Helsinki",
    currency: "EUR",
    vatRate: 25.5,
    vatNote: "25.5% standard (raised from 24% on 1 Sep 2024; 14% and 10% reduced).",
    ports: ["helsinki", "kotka"],
    tldr:
      "Finland is the EU's far-north Baltic market — entered through Helsinki (FIHEL) and Kotka (FIKTK), both feeder ports reached from the northern range, with 25.5% VAT on EU common duty, a 1524mm broad-gauge rail wall and a winter ice season no western EU port carries.",
    dutyRate: "EU Common Customs Tariff (MFN, varies by HS code)",
    dutyNote:
      "Finland applies the EU Common Customs Tariff — duty depends on the HS code and is uniform across member states, typically 0–12% for consumer goods. No China-EU FTA is in force.",
    deMinimis: "€150 (VAT threshold)",
    deMinimisNote:
      "The EU €22 threshold was abolished in 2021; import VAT applies from the first euro, with IOSS simplifying sub-€150 consignments. Confirm current thresholds with Finnish Customs.",
    compliance: [
      "EORI number — required for any import into the EU.",
      "CE marking for regulated products.",
      "REACH registration for chemical substances.",
      "Correct 10-digit TARIC classification for duty.",
    ],
    clearanceProcess: [
      "Register for an EORI number before shipping.",
      "Classify goods under the correct TARIC code.",
      "File the import declaration and pay EU duty plus 25.5% VAT.",
      "Clear through Helsinki (Vuosaari) or Kotka/Hamina.",
      "Release and deliver by rail or truck across Finland.",
    ],
    insight:
      "Finland is the Nordic market most guides flatten into 'a 25.5% VAT country' — which hides the three things that actually decide the landed cost: the gauge, the ice, and the euro. Finland runs 1524mm Russian broad gauge against Europe's 1435mm standard, so a China-Europe train cannot roll into Finland without a transload, and the historic rail lane through Russia is sanctions-restricted — which is why Finland, like Ireland, is effectively a sea-versus-air market with no practical direct rail lane. Second, the Gulf of Finland freezes roughly December–April, so winter sailings need ice-class vessels (1A/1A Super), Finnish icebreaker assistance and higher fairway dues — a seasonal cost Rotterdam or Hamburg never pays. Third, Finland is the only eurozone Nordic on this list, so it carries none of the SEK/DKK currency risk its neighbours do.",
    keyTakeaways: [
      "5% duty + 25.5% VAT compounds to ×1.31775 — a $10,000 CIF lands at $13,177.50, $52.50 above Sweden's 25% on the same base.",
      "25.5% VAT (raised from 24% on 1 Sep 2024) is now the EU's highest standard tier except Hungary's 27%.",
      "1524mm broad gauge + Russia sanctions mean no practical direct China-Europe rail lane — Finland is a sea-versus-air market.",
      "The Gulf of Finland freezes roughly Dec–Apr, so winter imports need ice-class vessels and icebreaker/fairway dues.",
      "Finland is the eurozone's Nordic (EUR), carrying no SEK/DKK currency risk.",
    ],
    faqs: [
      {
        q: "What is the VAT rate in Finland?",
        a: "25.5% standard — raised from 24% on 1 September 2024 — with reduced rates of 14% (food, restaurants) and 10% (books, medicines, passenger transport). Import VAT is charged on the duty-inclusive value, so 5% duty plus 25.5% VAT compounds to ×1.31775 — a $10,000 CIF shipment at 5% duty lands at $13,177.50, not the $13,050 you get by adding the two rates.",
      },
      {
        q: "Which port should I use when shipping from China to Finland?",
        a: "Helsinki (UN/LOCODE FIHEL, Vuosaari container terminal) is the default for the capital market, while Kotka (FIKTK, part of Port of HaminaKotka) is Finland's largest general-cargo port for the eastern Gulf of Finland — both are feeder ports reached by transshipping at a northern-range hub, not direct deep-sea calls.",
      },
      {
        q: "Does the Baltic freeze affect shipping to Finland?",
        a: "Yes — the Gulf of Finland freezes roughly December–April, so winter sailings need ice-class vessels (1A/1A Super) and Finnish icebreaker assistance, and Finland charges higher fairway dues in winter. That is a seasonal schedule and cost variable a western EU port like Rotterdam or Hamburg never carries.",
      },
      {
        q: "Can I ship China-to-Finland by rail?",
        a: "Not as a direct lane — Finland runs 1524mm broad gauge against Europe's 1435mm standard gauge, and the historic rail route through Russia is sanctions-restricted, so 'rail to Finland' in practice means rail to a Baltic hub (Gdańsk, Hamburg) plus a short-sea ferry across the Baltic. Finland is therefore a sea-versus-air market, like Ireland.",
      },
      {
        q: "Why is Finland's currency not a landed-cost risk?",
        a: "Finland is in the eurozone, so you pay both ocean freight and import VAT in EUR — unlike Sweden (floating SEK) or Denmark (pegged DKK), Finland carries no Nordic currency risk, which removes one variable from the landed-cost model.",
      },
    ],
  },
];
