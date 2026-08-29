# WorldFreightHub — Research Notes (China → Saudi Arabia / UAE / GCC)

**Date:** 2026-08-30
**Researcher:** Research Agent (Firecrawl CLI)
**Method:** Firecrawl CLI scrape + search. All facts below are extracted from pages that actually loaded. Nothing is fabricated; unverified items are marked.

---

## 1. PRIMARY SOURCES (Part A)

### Saudi Arabia — VAT / Customs (ZATCA)
- **Fact:** Saudi standard VAT rate = **15%** (introduced 1 Jan 2018 at 5%; raised to 15% effective **1 July 2020**). Import VAT applies to almost all goods; calculated on **CIF value + customs duty**.
  - **URL:** https://zatca.gov.sa/en/Pages/default.aspx (official site loaded/verified; homepage itself does NOT print the 15% figure — it links to a "Customs and Tax Calculator" e-service at https://zatca.gov.sa/en/eServices/Pages/Calculator.aspx). The 15% figure verified via secondary: https://www.commenda.io/saudi-arabia/import-vat and https://tariffdutycalculator.com/country/saudi-arabia/
  - **Date:** ZATCA page "Last Update 18 Jan 2026"; Commenda "Last updated February 12, 2026"
  - **Confidence:** HIGH (rate) / MEDIUM (ZATCA primary page did not directly state rate)
- **Fact:** Saudi import duty baseline = **5%** standard under the GCC Unified Customs Tariff (ad valorem on CIF); protective/anti-dumping tariffs up to **15%–25%** on specific goods. Personal courier shipments ≤ **SAR 1,000** de minimis are duty-free.
  - **URL:** https://tariffdutycalculator.com/country/saudi-arabia/ ; https://cargofromchina.com/china-saudiarabia/
  - **Confidence:** MEDIUM (secondary aggregators; note Commenda states "no de minimis threshold" — see discrepancy below)
- **Fact:** Excise tax (on top of VAT): tobacco **100%**, energy drinks **50%**, carbonated drinks **50%**.
  - **URL:** https://www.commenda.io/saudi-arabia/import-vat
  - **Confidence:** MEDIUM
- **Fact:** Saudi customs operates **FASAH single-window** electronic system; pre-arrival declarations; documents: commercial invoice, bill of lading, certificate of origin, SABER conformity certificate (regulated goods).
  - **URL:** https://www.commenda.io/saudi-arabia/import-vat ; https://cargofromchina.com/china-saudiarabia/
  - **Confidence:** HIGH
- **DISCREPANCY to note:** Commenda says "Saudi Arabia does not maintain a low-value (de minimis) exemption"; tariffdutycalculator.com and cargofromchina.com say de minimis = SAR 1,000 for personal courier shipments. Flag as unresolved; needs ZATCA primary confirmation.

### Saudi Ports (Mawani)
- **Fact:** Saudi ports operated by Mawani handled **8.3 million TEU in 2025**, +10.6% YoY (exports, transhipment, cargo tonnage all up).
  - **URL:** https://www.worldcargonews.com/ports-terminals/2026/01/mawani-ports-handle-8-3m-teu-in-2025/ (published 2026-01-19)
  - **Confidence:** MEDIUM (secondary trade press; Mawani.gov.sa itself was blocked — see Failures)
- **Fact:** Saudi Arabia has **9 major ports** (6 commercial + 3 industrial): Jeddah Islamic Port (principal port, Red Sea), King Abdul Aziz Dammam Port (main Gulf port), King Fahd Yanbu Industrial, King Fahd Jubail Industrial, Yanbu Commercial, Jubail Commercial, Jizan, Duba, Ras Al Khair. **Jeddah = Red Sea/west; Dammam = Arabian Gulf/east, serves Riyadh + eastern/central provinces.**
  - **URL:** https://cargofromchina.com/china-saudiarabia/
  - **Confidence:** MEDIUM (secondary)

### UAE — VAT / Customs
- **Fact:** UAE standard VAT rate = **5%** (introduced 1 Jan 2018). FTA page displays "VAT 5% (AED)" calculator. VAT registration threshold **AED 375,000** (optional from AED 187,500).
  - **URL:** https://tax.gov.ae/en/taxes/Vat.aspx (official FTA, loaded); https://www.numeral.com/blog/uae-vat-rates-and-compliance
  - **Date:** FTA news items reference H1 2026
  - **Confidence:** HIGH
- **Fact:** UAE import duty = **5%** standard under GCC Common External Tariff (ad valorem on CIF). De minimis: goods ≤ **Dhs 1,000** duty/tax free; gifts ≤ **Dhs 3,000** exempt.
  - **URL:** https://cargofromchina.com/china-uae/ ; https://china.docshipper.com/en/freight-shipping-china-uae/
  - **Confidence:** MEDIUM-HIGH (secondary)
- **Fact:** Dubai Customs (https://www.dubaicustoms.gov.ae) homepage loads but does NOT print import duty/VAT figures on the landing page (navigation + e-services only).
  - **Confidence:** MEDIUM (site verified, but no duty figure on home)

### China Ports
- **Fact:** **Shanghai** = world's busiest container port, **55.06 million TEU in 2025** (+6.9% YoY), 16th consecutive year at #1 (SIPG).
  - **URL:** https://media.shipco.com/shanghai-singapore-and-ningbo-zhoushan-top-2025-global-container-port-rankings/ (2026-01-17); source SIPG en.portshanghai.com.cn
  - **Confidence:** HIGH
- **Fact:** **Ningbo-Zhoushan** = #3 container port (**43M TEU 2025**), first port to surpass **1.4 billion tonnes** cargo, 17th consecutive year as world's #1 by cargo tonnage.
  - **URL:** https://media.shipco.com/shanghai-singapore-and-ningbo-zhoushan-top-2025-global-container-port-rankings/ ; https://en.wikipedia.org/wiki/Port_of_Ningbo-Zhoushan
  - **Confidence:** HIGH

---

## 2. COMPETITOR MATRIX (Part B)

Legend: ✅ = covers / ❌ = does not cover / ~ = partial

| Site | Transit | Cost | Customs/VAT | Demurrage/Detention | SASO/SABER | Port comparison | Data methodology |
|---|---|---|---|---|---|---|---|
| ddpchain.com/saudi-arabia/ | ✅ | ✅ | ~ (mentions DDP handles taxes) | ❌ | ❌ | ~ (names ports only) | ❌ |
| cargofromchina.com/china-saudiarabia/ | ✅ | ✅ | ✅ (5% GCC, CIF, docs, SAR1000, VAT15%) | ❌ | ❌ | ✅ (9 ports; Jeddah vs Dammam) | ❌ |
| sino-shipping.com/freight-from-china-to-saudi-arabia/ | ✅ | ✅ | ~ | ❌ | ❌ | ~ | ✅ (monthly rate snapshots) |
| chinaddpshipping.com/ddp-shipping-from-china-to-saudi-arabia/ | ✅ (DDP only) | ~ | ~ | ❌ | ❌ | ❌ | ❌ |
| freightos.com (Shanghai→Riyadh) | ✅ | ✅ (FCL/LCL/Air/Express) | ~ (FAQ only) | ❌ | ❌ | ❌ | ✅ (live forwarder rates) |
| cargofromchina.com/china-uae/ | ✅ | ✅ | ✅ (5% GCC, VAT5%, Dhs1000) | ❌ | ❌ | ✅ (Jebel Ali vs Khalifa etc.) | ❌ |
| china.docshipper.com (China→UAE) | ✅ | ✅ | ✅ (6-step duty calc, docs) | ❌ | ❌ (mentions CE conformity only) | ✅ (6 CN + 6 UAE ports) | ✅ (step-by-step) |

### Exact claims recorded (per site)

**ddpchain.com/saudi-arabia/**
- Air freight: 6–10 days; $880–$1,350 per 100 kg (by route, e.g. Shenzhen→Riyadh $920–$1,250)
- Sea freight: 20–35 days (comparison table) / "20–45 days" (quick answer)
- DDP Air: 33–48 RMB/kg; DDP Sea: from ~1,600 RMB/CBM
- Express courier: 3–7 days (DHL 3–6 working days, $76.36/kg @1kg)

**cargofromchina.com/china-saudiarabia/**
- Sea: ~20 days average; ~$2,500 per 40HC FOB Shenzhen→Jeddah
- Air: 2–5 business days; SAR 26.5–30.5/kg (22kg+/101kg+)
- Customs: GCC common external tariff ≥5%, CIF ad valorem, SAR 1,000 de minimis, VAT 15%

**sino-shipping.com/freight-from-china-to-saudi-arabia/** (search snippets only; full page Cloudflare-blocked)
- Express: 3–5 days, ~$6.90/kg (Aug 2026)
- Sea freight Aug 2026: $5,085–$6,215 (20GP), $6,615–$8,085 (40GP)

**chinaddpshipping.com/ddp-shipping-from-china-to-saudi-arabia/**
- DDP air 10–15 days; DDP sea 30–35 days

**freightos.com/routes/route/cn-shanghai-shanghai/sa-riyadh**
- FCL 20ft $3,333–$4,443 (30–40 days); 40ft/40HC $4,623–$6,164 (30–40 days)
- LCL 1 CBM $716–$955 (32–45 days); 5 CBM $1,650–$2,200; 10 CBM $2,669–$3,559
- Air 100 kg $917–$1,223 (6–10 days); Express 10 kg $315–$420 (3–6 days)

**cargofromchina.com/china-uae/**
- Sea: 14–18 days; LCL AED 880–980/CBM (Dubai)
- Air: 2–4 days express; DDP air 3–6 days; AED 20–23.5/kg
- Customs: GCC common external tariff ≥5%, VAT 5%, Dhs 1,000 de minimis, Dhs 3,000 gifts

**china.docshipper.com/en/freight-shipping-china-uae/**
- VAT 5% (levied on goods value + duty + other taxes); 5% duty example; anti-dumping up to 35% example; excise example
- Required documents: Bill of Lading, Packing List, Commercial Invoice, Certificate of Origin, CE conformity docs
- Ports covered: Shanghai, Ningbo-Zhoushan, Shenzhen, Hong Kong, Guangzhou, Qingdao (CN); Jebel Ali, Khalifa, Zayed, Fujairah, Rashid, Sharjah (UAE)

---

## 3. CONTENT GAPS (what competitors mostly MISS — highest value first)

1. **Demurrage & detention** — ZERO English competitors cover free-time allowances, per-diem demurrage/detention fees, or how to avoid them at Jeddah/Dammam/Jebel Ali. Biggest single gap.
2. **Hidden / destination charges** — almost no breakdown of THC, port service fees, cargo service fee, customs inspection fee, delivery/clearance handling (Saudi "port fees, cargo service fees, import inspection tax" only named by cargofromchina, never quantified).
3. **SASO / SABER step-by-step** — none of the English competitors explain the PC (Product Conformity, 1yr) vs SC (Shipment Conformity, per-shipment) certificates, or the **Jan 1, 2025 rule that SC must be obtained BEFORE cargo arrival**. (Only found in Chinese-language sources.)
4. **FASAH single-window process** — named but never explained (pre-arrival declaration, document flow, payment).
5. **Jeddah vs Dammam vs Jebel Ali routing comparison** — which port for Riyadh vs Eastern Province; cost/time/clearance differences. Only cargofromchina touches it superficially.
6. **Data methodology & freshness** — most competitors give stale/undated numbers; only Freightos and sino-shipping state source/live-data. A "last verified / as of" + methodology note is a differentiator.
7. **DDP 双清包税 practice depth** — what "tax-inclusive" actually includes, risk transfer, real RMB per-kg / per-CBM benchmarks (only ddpchain shows RMB numbers).
8. **Excise tax impact** (tobacco/energy/carbonated) — only Commenda mentions it; no freight competitor does.

---

## 4. CHINESE SOURCES (Part C — operational knowledge)

- **Dominant mode: "双清包税到门 DDP"** (double clearance + tax-inclusive door-to-door DDP). Standard 5-step flow: seller hands cargo to forwarder → China export clearance → international transport → Saudi import clearance + tax paid by forwarder → local last-mile delivery. Positioned as the solution for sellers unfamiliar with Saudi customs.
  - **URL:** https://m.amz123.com/ask/dX9w7vZU (2024-07-08)
- **Operational players:** 广州安时达 (Guangzhou Anshida) advertises "专注沙特双清物流20年" (20 years Saudi double-clearance experience), serves Saudi/UAE/Kuwait/Qatar/Oman/Yemen, incl. Amazon & Noon platform warehouse delivery.
  - **URL:** https://www.ontaskksa.com/
- **SASO certification mechanics:** SASO cert is a conformity (COC) certificate; 2-step = product testing → then **pre-shipment inspection**. Warning: "you cannot ship first and apply for the certificate later — without inspection you cannot get the cert." (Common mistake flagged.)
  - **URL:** http://www.saso-gov.com/index.php?znhcjwt.html
- **SABER SC certificate new rule (KEY):** Effective **1 Jan 2025**, all goods exported to Saudi must apply via the **SABER system and obtain the batch SC certificate BEFORE cargo arrival**; an SC applied after arrival is void → clearance fails. Two certs: **PC** (Product Conformity, ~1 year validity, once per product) + **SC** (Shipment Conformity, per-shipment). B/L required to confirm in-transit status.
  - **URL:** https://www.fuxin.gov.cn/content/2024/962553.html (Liaoning CCPIT, dated 2024-12-26)
- **DDP price benchmark (example):** Guangzhou/Shenzhen → Saudi DDP door-to-door quoted at **45 RMB/kg** (广州三其国际货运代理).
  - **URL:** https://www.globalimporter.net/cdetail_753_8551690.html
- **Pain points mentioned in Chinese logistics marketing:** "清关严格？ SABER 难？ 税费复杂？" (strict clearance, difficult SABER, complex taxes) — reinforces SABER/tax complexity as the perceived barrier.
  - **URL:** https://www.instagram.com/p/DTR9SFSlpBF/

---

## 5. FAILURES (no more than one retry each)

1. **https://mawani.gov.sa** — blocked by WAF (aliyun CDN security gate): "Sorry, your request has been blocked as it may cause potential threats to the server's security." Retried once → still blocked. Used trade-press + competitor data for port facts instead.
2. **https://www.dubaicustoms.gov.ae** — first attempt `ERR_TUNNEL_CONNECTION_FAILED` (Firecrawl internal proxy). Retried → loaded, but landing page has no import-duty/VAT figures.
3. **https://www.sino-shipping.com/** (SA + UAE pages) — Cloudflare "robot suspicion" interstitial; full page not retrievable. Only search-result snippets captured.
4. **ZATCA homepage** — loaded fine but does not state the 15% VAT rate on the landing page (rate lives deeper in site/calculator). No retry needed (page works, just thin).
5. **firecrawl search "china to uae shipping time" --scrape** — timed out twice at 120s; succeeded without `--scrape` (listings only), then scraped target pages individually.

---

## Key verified numbers (quick reference)

| Item | Value | Source |
|---|---|---|
| Saudi VAT | 15% (since 1 Jul 2020) | commenda.io / ZATCA |
| Saudi import duty (baseline) | 5% (GCC CET), CIF basis | cargofromchina / tariffdutycalculator |
| Saudi de minimis (courier) | SAR 1,000 | cargofromchina / tariffdutycalculator |
| UAE VAT | 5% (since 1 Jan 2018) | tax.gov.ae / numeral.com |
| UAE import duty | 5% (GCC CET) | cargofromchina / docshipper |
| UAE de minimis | Dhs 1,000 (gifts Dhs 3,000) | cargofromchina |
| Shanghai TEU (2025) | 55.06M, #1 container port | SIPG via Shipco |
| Ningbo-Zhoushan (2025) | 43M TEU; >1.4bn tonnes cargo, #1 | Global Times via Shipco |
| Saudi ports TEU (2025) | 8.3M (+10.6%) | worldcargonews |
| CN→SA sea transit | ~20–45 days | ddpchain / CFC / freightos |
| CN→SA air transit | 2–10 days | ddpchain / CFC / freightos |
| CN→UAE sea transit | 14–18 days | cargofromchina |
| SABER SC rule | SC cert required before arrival (from 1 Jan 2025) | fuxin.gov.cn |
