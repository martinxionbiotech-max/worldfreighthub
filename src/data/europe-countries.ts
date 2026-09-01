import type { Country } from './types';

export const europeCountries: Country[] = [
  {
    slug: 'germany',
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
];
