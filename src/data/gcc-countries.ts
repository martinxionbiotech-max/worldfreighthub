import type { Country } from './types';

export const gccCountries: Country[] = [
  {
    slug: 'saudi-arabia',
    name: 'Saudi Arabia',
    iso2: 'SA',
    capital: 'Riyadh',
    currency: 'SAR',
    vatRate: 15,
    vatNote: '15% since July 2020 (raised from 5%).',
    ports: ['jeddah', 'dammam', 'riyadh-dry-port'],
    tldr:
      'Saudi Arabia is the highest-cost GCC destination to clear — 15% VAT on top of a 5% base duty, with SABER/SASO conformity mandatory for most goods. Budget duty + VAT on the CIF value, not the invoice value.',
    dutyRate: '5% base (CIF value)',
    dutyNote:
      'Agricultural and food tariffs were raised to 5–15% across 51 lines in June 2026. Higher rates: alcohol 100%, tobacco 100%, carbonated drinks 50%. Duty-free: basic food, books, some pharmaceuticals.',
    deMinimis: 'SAR 1,000 (personal parcels)',
    deMinimisNote:
      'Applies to personal/courier shipments only; VAT is still due with no exemption. Awaiting ZATCA first-hand confirmation.',
    compliance: [
      'SABER certificate — mandatory for most regulated consumer and industrial goods.',
      'SASO Certificate of Conformity for regulated products.',
      'ZATCA e-invoicing for cleared commercial cargo.',
      'Accurate HS classification — duty is calculated on CIF value.',
    ],
    clearanceProcess: [
      'Register the product on the SABER platform and obtain the certificate before shipping.',
      'Obtain a SASO Certificate of Conformity where required.',
      'Submit commercial invoice, packing list, bill of lading and HS codes.',
      'Clear through ZATCA at the port of entry (Jeddah, Dammam or Riyadh Dry Port).',
      'Pay duty (5% base) plus 15% VAT on the CIF value.',
      'Release and final delivery.',
    ],
    insight:
      'Saudi Arabia is where most clearance delays and cost surprises happen. The 15% VAT plus 5% duty means a landed cost 20%+ above the invoice value — and the most common failure is not the tax, it is SABER not being completed before sailing. Cargo that arrives without a Certificate of Conformity sits at the port racking up demurrage while the paperwork is fixed. Do the SABER step first, not last.',
    keyTakeaways: [
      '15% VAT is the highest in the GCC — budget it on top of the 5% base duty.',
      'SABER/SASO conformity is mandatory for most goods; complete it before shipping.',
      'Agricultural and food tariffs were raised to 5–15% in June 2026.',
      'De minimis (SAR 1,000) covers personal parcels only — VAT has no exemption.',
    ],
    faqs: [
      {
        q: 'What is SABER and do I need it?',
        a: 'SABER is Saudi Arabia\u2019s product conformity system. Most regulated consumer and industrial goods need a SABER certificate (with a Certificate of Conformity) before they arrive. The product type determines whether yours is regulated.',
      },
      {
        q: 'How is duty calculated for Saudi Arabia?',
        a: 'On the CIF value (cost + insurance + freight), not the invoice value. Base duty is 5%, with higher rates on alcohol, tobacco and some agricultural lines. VAT of 15% applies on top.',
      },
      {
        q: 'Is there a duty-free threshold for Saudi Arabia?',
        a: 'A SAR 1,000 de minimis applies to personal/courier parcels, but VAT is still due with no exemption. Commercial cargo does not benefit from this threshold.',
      },
    ],
  },
  {
    slug: 'united-arab-emirates',
    name: 'United Arab Emirates',
    iso2: 'AE',
    capital: 'Abu Dhabi',
    currency: 'AED',
    vatRate: 5,
    vatNote: '5% since 1 January 2018.',
    ports: ['jebel-ali', 'khalifa-port-abu-dhabi', 'port-khalid'],
    tldr:
      'The UAE is the lowest-friction GCC entry point — 5% VAT and 5% base duty, with free zones offering duty deferral. It is the natural first stop for most China-to-GCC importers.',
    dutyRate: '5% base (CIF value)',
    dutyNote:
      'Duty-free: essential food, books, some pharmaceuticals and capital equipment. Higher rates: alcohol 50%, tobacco 100%. Free zones defer or avoid duty until goods enter the mainland.',
    deMinimis: 'AED 1,000 (personal parcels)',
    deMinimisNote:
      'Personal/courier shipments only; VAT of 5% may still apply. Confirm current threshold with the FTA.',
    compliance: [
      '10-digit HS code classification under the GCC tariff.',
      'ESMA/ECAS product certification for certain regulated categories.',
      'Free-trade-agreement certificates (India CEPA, etc.) where applicable.',
      'Free zone or mainland customs registration depending on the entry point.',
    ],
    clearanceProcess: [
      'Classify goods under the 10-digit HS code.',
      'Submit the import declaration with invoice, packing list and bill of lading.',
      'Clear through the relevant customs authority (Jebel Ali, Khalifa Port, etc.).',
      'Pay 5% duty on CIF value plus 5% VAT.',
      'Release and deliver, or hold in a free zone duty-deferred.',
    ],
    insight:
      'The UAE is the GCC\u2019s import hub, and a large share of China-origin cargo lands here and is re-exported onward to Saudi, Qatar and beyond. Jebel Ali\u2019s free zone lets you hold goods duty-deferred until they actually enter a mainland market — a working-capital advantage most first-time importers underuse. The 5% VAT is among the lowest in the GCC, which makes the landed-cost math friendlier than almost anywhere else on the corridor. If you are unsure where to start in the GCC, start here.',
    keyTakeaways: [
      '5% VAT and 5% duty is the lowest-cost combination among GCC states that have VAT.',
      'Free zones (Jebel Ali) defer or avoid duty until goods enter the mainland.',
      'The UAE is the main re-export hub for the wider GCC.',
      'Duty is on CIF value; alcohol (50%) and tobacco (100%) are the notable exceptions.',
    ],
    faqs: [
      {
        q: 'Can I avoid duty by using a UAE free zone?',
        a: 'Goods stored in a free zone are not subject to duty until they enter the UAE mainland or another GCC market. Re-export from the free zone is duty-free.',
      },
      {
        q: 'What is the standard UAE import duty?',
        a: '5% of the CIF value for most goods under the GCC Common Customs Tariff. Some categories are duty-free (essential food, books) and some are higher (alcohol 50%, tobacco 100%).',
      },
      {
        q: 'Does the UAE have de minimis?',
        a: 'Yes, an AED 1,000 threshold for personal parcels, though VAT may still apply. Commercial cargo does not use this threshold.',
      },
    ],
  },
  {
    slug: 'qatar',
    name: 'Qatar',
    iso2: 'QA',
    capital: 'Doha',
    currency: 'QAR',
    vatRate: null,
    vatNote: 'No VAT yet — expected to implement ~5% (e-invoicing law passed May 2026).',
    ports: ['hamad'],
    tldr:
      'Qatar has no VAT yet and a 5% base duty — currently the lowest-tax GCC destination for most goods. That window is expected to close when VAT launches, so near-term imports save on tax but should plan for a future 5%.',
    dutyRate: '5% base (CIF value)',
    dutyNote:
      'Duty-free: essential food and some pharmaceuticals. Higher rates on alcohol and tobacco. VAT is not yet implemented.',
    deMinimis: 'Not published',
    deMinimisNote:
      'No widely confirmed duty-free threshold; confirm with the General Authority of Customs before shipping low-value goods.',
    compliance: [
      '10-digit HS code classification.',
      'Import declaration via the General Authority of Customs.',
      'Product-specific permits for regulated categories.',
      'E-invoicing readiness ahead of VAT implementation.',
    ],
    clearanceProcess: [
      'Classify goods and prepare the import declaration.',
      'Submit invoice, packing list and bill of lading.',
      'Clear through Hamad Port (the sole commercial gateway).',
      'Pay 5% duty on CIF value (no VAT currently).',
      'Release and deliver.',
    ],
    insight:
      'Qatar is the GCC\u2019s lowest-tax import market right now — 0% VAT means a landed cost noticeably lower than Saudi or Bahrain. But the window is closing: an e-invoicing law passed in May 2026 signals VAT is coming, widely expected at 5%. For importers, the play is straightforward — capture the VAT-free advantage now, and build a 5% VAT assumption into any longer-term pricing. Confirm the VAT timeline with a local agent before quoting long-term landed prices.',
    keyTakeaways: [
      '0% VAT today makes Qatar the lowest-tax GCC destination.',
      'VAT is expected at ~5% — plan for it in forward pricing.',
      'Hamad Port is the sole commercial gateway.',
      '5% base duty on CIF value, with alcohol/tobacco exceptions.',
    ],
    faqs: [
      {
        q: 'Does Qatar charge VAT on imports?',
        a: 'Not yet. Qatar has signed the GCC VAT framework but not implemented it. An e-invoicing law passed in May 2026 signals VAT is coming, widely expected at 5%.',
      },
      {
        q: 'What is Qatar\u2019s import duty rate?',
        a: '5% on CIF value for most goods, with higher rates on alcohol and tobacco and exemptions for essential food and some pharmaceuticals.',
      },
      {
        q: 'Is there a duty-free threshold for Qatar?',
        a: 'No widely confirmed de minimis threshold is published. Confirm with the General Authority of Customs before shipping low-value goods, as commercial cargo is generally dutiable regardless of value.',
      },
    ],
  },
  {
    slug: 'kuwait',
    name: 'Kuwait',
    iso2: 'KW',
    capital: 'Kuwait City',
    currency: 'KWD',
    vatRate: null,
    vatNote: 'No VAT — signed the GCC agreement but not implemented, no confirmed timeline.',
    ports: ['shuwaikh', 'shuaiba'],
    tldr:
      'Kuwait has no VAT and a 5% base duty, but clearance through Shuwaikh/Shuaiba is document-heavy. The tax saving is real; the paperwork is the cost to manage.',
    dutyRate: '5% base (CIF value)',
    dutyNote:
      'Duty-free: essential food and some pharmaceuticals. Higher rates on alcohol and tobacco. VAT is not implemented.',
    deMinimis: 'Not published',
    deMinimisNote:
      'No widely confirmed threshold; confirm with Kuwait Customs before shipping low-value goods.',
    compliance: [
      '10-digit HS code classification.',
      'Import declaration via Kuwait General Administration of Customs.',
      'PAI (Public Authority for Industry) certification for certain products.',
      'Commercial invoice and certificate of origin.',
    ],
    clearanceProcess: [
      'Prepare the import declaration and supporting documents.',
      'Submit invoice, packing list, certificate of origin and bill of lading.',
      'Clear through Shuwaikh or Shuaiba port.',
      'Pay 5% duty on CIF value (no VAT currently).',
      'Release and deliver.',
    ],
    insight:
      'Kuwait\u2019s 0% VAT makes it a genuinely low-tax destination, but the clearance process is known for being document-heavy, and PAI certification trips up importers of regulated goods. The tax you save on VAT can quietly be spent on clearance delays. Budget for a more hands-on customs process here than in the UAE, and get documents exactly right the first time. Work with a forwarder that has direct Kuwait clearance experience rather than a generalist.',
    keyTakeaways: [
      '0% VAT — a genuinely low-tax GCC destination.',
      'Clearance is document-heavy; get paperwork right the first time.',
      'PAI certification applies to certain regulated products.',
      '5% base duty on CIF value, alcohol/tobacco excepted.',
    ],
    faqs: [
      {
        q: 'Does Kuwait charge VAT on imports?',
        a: 'No. Kuwait signed the GCC VAT agreement but has not implemented it, with no confirmed timeline.',
      },
      {
        q: 'What is Kuwait\u2019s import duty rate?',
        a: '5% on CIF value for most goods, with exemptions for essential food and pharmaceuticals and higher rates on alcohol and tobacco.',
      },
      {
        q: 'Which ports handle China imports into Kuwait?',
        a: 'Shuwaikh and Shuaiba are the main commercial ports. Shuwaikh handles general and containerised cargo closer to Kuwait City; Shuaiba handles larger industrial and bulk volumes.',
      },
    ],
  },
  {
    slug: 'oman',
    name: 'Oman',
    iso2: 'OM',
    capital: 'Muscat',
    currency: 'OMR',
    vatRate: 5,
    vatNote: '5% since 16 April 2021.',
    ports: ['sohar', 'salalah'],
    tldr:
      'Oman has 5% VAT and 5% base duty, with Sohar as the main container gateway. A solid mid-cost option with less congestion than Jebel Ali or Jeddah.',
    dutyRate: '5% base (CIF value)',
    dutyNote:
      'Higher rates: alcohol 100%, cement 50%, paints and polyurethane 15%. Duty-free: basic food and GCC-origin goods.',
    deMinimis: 'Not published',
    deMinimisNote:
      'No widely confirmed threshold; confirm with the Directorate General of Customs before shipping low-value goods.',
    compliance: [
      '10-digit HS code classification.',
      'Import declaration via the Directorate General of Customs.',
      'Product-specific permits for regulated categories.',
      'Commercial invoice and bill of lading / airway bill.',
    ],
    clearanceProcess: [
      'Classify goods and prepare the import declaration.',
      'Submit invoice, packing list and bill of lading.',
      'Clear through Sohar or Salalah port.',
      'Pay 5% duty on CIF value plus 5% VAT.',
      'Release and deliver.',
    ],
    insight:
      'Oman is the underrated value option on the corridor. It matches the UAE\u2019s 5% VAT and 5% duty but with a less congested gateway at Sohar, which can mean faster clearance than Jebel Ali or Jeddah on some lanes. For mid-sized cargo that is not in a rush and where cost matters more than the very fastest transit, Oman is worth pricing alongside the UAE rather than defaulting to the bigger hubs. Ask your forwarder for a Sohar routing alongside the Jebel Ali and Jeddah quotes.',
    keyTakeaways: [
      '5% VAT and 5% duty — a lower-cost combination than Saudi or Bahrain.',
      'Sohar is a less congested gateway than Jebel Ali or Jeddah.',
      'Higher rates on alcohol (100%), cement (50%) and paints (15%).',
      'A solid mid-cost, mid-speed option for GCC imports.',
    ],
    faqs: [
      {
        q: 'What is Oman\u2019s VAT rate?',
        a: '5%, introduced on 16 April 2021.',
      },
      {
        q: 'What is Oman\u2019s import duty?',
        a: '5% on CIF value for most goods, with higher rates on alcohol (100%), cement (50%) and paints (15%), and exemptions for basic food and GCC-origin goods.',
      },
      {
        q: 'Is Sohar or Salalah the main gateway for China cargo?',
        a: 'Sohar is the primary container gateway for the northern Oman and GCC market, while Salalah serves transshipment and southern Oman. Most China-to-Oman container cargo clears through Sohar.',
      },
    ],
  },
  {
    slug: 'bahrain',
    name: 'Bahrain',
    iso2: 'BH',
    capital: 'Manama',
    currency: 'BHD',
    vatRate: 10,
    vatNote: '10% since 2022 (raised from 5%).',
    ports: ['khalifa-bin-salman'],
    tldr:
      'Bahrain has the GCC\u2019s second-highest VAT at 10% plus 5% base duty — but Khalifa bin Salman Port\u2019s King Fahd Causeway link to Saudi makes it a strategic entry point for the eastern Saudi market.',
    dutyRate: '5% base (CIF value)',
    dutyNote:
      'Higher rates: alcohol 225%, cigarettes 200%, paper and aluminium 20%. Duty-free: basic food and GCC-origin goods.',
    deMinimis: 'Not published',
    deMinimisNote:
      'No widely confirmed threshold; confirm with Bahrain Customs before shipping low-value goods.',
    compliance: [
      '10-digit HS code classification.',
      'Import declaration via Bahrain Customs Affairs.',
      'Product-specific permits for regulated categories.',
      'Commercial invoice and bill of lading.',
    ],
    clearanceProcess: [
      'Classify goods and prepare the import declaration.',
      'Submit invoice, packing list and bill of lading.',
      'Clear through Khalifa bin Salman Port.',
      'Pay 5% duty on CIF value plus 10% VAT.',
      'Release and deliver, or truck onward to Saudi via the King Fahd Causeway.',
    ],
    insight:
      'Bahrain\u2019s 10% VAT is the GCC\u2019s second-highest, but judging it by the tax rate misses the point. Khalifa bin Salman Port connects to Saudi\u2019s Eastern Province over the King Fahd Causeway, which makes Bahrain a viable alternate entry for the Dammam and Riyadh markets when Jeddah is congested or direct Saudi routing is expensive. For eastern-Saudi-bound cargo, routing via Bahrain can save both time and money despite the higher VAT. Price the Bahrain leg against a direct Dammam call before committing.',
    keyTakeaways: [
      '10% VAT is the GCC\u2019s second-highest, on top of 5% base duty.',
      'Khalifa bin Salman Port + King Fahd Causeway is a strategic Saudi entry point.',
      'Higher rates: alcohol 225%, cigarettes 200%, paper/aluminium 20%.',
      'Consider Bahrain for eastern-Saudi cargo when Jeddah is congested.',
    ],
    faqs: [
      {
        q: 'What is Bahrain\u2019s VAT rate?',
        a: '10%, raised from 5% in 2022.',
      },
      {
        q: 'Why route cargo to Saudi via Bahrain?',
        a: 'Khalifa bin Salman Port links to Saudi\u2019s Eastern Province over the King Fahd Causeway, offering an alternate entry for the Dammam/Riyadh market when Jeddah is congested or direct routing is costly.',
      },
      {
        q: 'How does Bahrain compare to direct Saudi routing?',
        a: 'Bahrain routes cargo to Saudi\u2019s Eastern Province over the King Fahd Causeway, which can be faster and cheaper than a congested Jeddah call when the destination is Dammam or Riyadh \u2014 despite Bahrain\u2019s 10% VAT.',
      },
    ],
  },
];
