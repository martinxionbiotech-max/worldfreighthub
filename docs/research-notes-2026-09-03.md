# WorldFreightHub — Research Notes (China → Europe: Sea-vs-Rail + Demurrage/Detention)

**Date:** 2026-09-03
**Researcher:** Research Agent (Firecrawl CLI)
**Method:** Firecrawl CLI scrape + search. All facts below extracted from pages that actually loaded. Nothing fabricated; unverified items marked.

---

## 1. China–Europe RAIL freight cost & time (freightsurcharge.com)

Source: https://freightsurcharge.com/blog/china-europe-rail-freight-complete-guide-2026
"Last verified by our freight team: May 2026" · author "Paul, Freight Expert, 10 yrs freight forwarding".

### Rail corridors
- **Northern route**: China → Kazakhstan → Russia → Belarus → Poland → Germany/Netherlands. ~70% of volume. Key terminals: Chengdu/Xi'an/Chongqing (CN) → Malaszewicze/Duisburg/Hamburg (EU).
- **Middle route**: China → Kazakhstan → Caspian → Azerbaijan → Georgia → Turkey. Avoids Russian territory; growing since 2022.
- **Southern route**: China → Kyrgyzstan → Uzbekistan → Turkmenistan → Iran → Turkey. Limited regular service.
- Gauge change (standard 1,435 mm → broad 1,520 mm) at Khorgos/Alashankou (CN–KZ) and Malaszewicze (PL–BY).

### Rail vs Ocean vs Air (40ft, Shanghai → Central Europe, Q1 2026 estimates)
| Mode | Cost (40ft) | Transit | Notes |
|---|---|---|---|
| Ocean | $1,800 – $2,500 | 30–38 days | excludes BAF/DDC/PSS/THC |
| Rail | $4,000 – $5,800 | 15–24 days | |
| Air | $12,000 – $22,000 | 5–8 days | chargeable-weight based |

### Rail rates by route (40ft, door-to-terminal, spot, Q1 2026)
| Route | Transit | Q1 2026 rate | Notes |
|---|---|---|---|
| Xi'an → Duisburg | 16–19 days | $4,200 – $5,100 | highest frequency, 5–7/week |
| Chengdu → Lodz | 18–21 days | $4,000 – $4,800 | central/western CN origins |
| Yiwu → Madrid | 20–24 days | $4,800 – $5,800 | longest, lowest frequency |
| Chongqing → Hamburg | 17–20 days | $4,300 – $5,200 | automotive supply chain |
| Zhengzhou → Liege | 15–18 days | $4,500 – $5,300 | fastest |

"Add 15–25% to base rates for surcharges: fuel, gauge change, border fees, congestion, terminal handling. A $4,500 spot typically lands ~$5,400–$5,800 all-in."

### Rail surcharge structure
- Fuel surcharge: 8–15% of base freight (monthly, diesel-indexed; does NOT track ocean BAF).
- Gauge change fee: $150–250 per container.
- Border fees: $50–150 per border per container (northern route crosses ≥4 borders → budget $200–600 total).
- Congestion surcharge: $200–500 per container at Malaszewicze in peak (Sep–Nov; 3–7 day gauge-change waits; EU expansion not expected before 2027).
- Storage at rail terminals: $20–40/day.

### Rail insurance
- Rail cargo insurance: 0.3–0.5% of cargo value vs ocean 0.1–0.2%. Reason: more borders, gauge-change handling, higher theft risk. Check geographic-scope clause (some marine policies exclude Russia/Central Asia overland).

### Decision arithmetic (inventory carrying cost)
- $80,000 cargo/container @ 12% annual inventory cost ≈ $185/week tied-up capital.
- Ocean ~3 weeks longer than rail → ~$555 extra carrying cost per container.
- At ~$200,000 cargo value/container, rail often beats ocean on total landed cost.
- Rule of thumb — rail wins when: (1) cargo value > $50,000/container; (2) transit tolerance 15–25 days; (3) origin in central/western China (rail terminals closer than seaports).
- Rail loses when: low-value bulk; destination outside main corridor (Duisburg→south Italy/Spain adds 3–5 days + $800–1,200 trucking); cargo subject to Russia-related sanctions/dual-use controls.

### Rail documentation
- CIM/SMGS consignment note (CIM = EU leg; SMGS = CIS leg; combined note covers full journey).
- T1 transit document (filed electronically before EU border).
- China export declaration; certificate of origin (recommended).
- Missing docs stop the container at borders (e.g. missing T1 → up to a week at Malaszewicze).

---

## 2. China–Europe SEA freight corroboration (china.docshipper.com)

Source: https://china.docshipper.com/en/service-freight-europe/
- 20ft FCL China→Europe: avg $1,500 – $3,000.
- 40ft FCL China→Europe: avg $2,500 – $4,500.
- Spot Shanghai → major European ports (e.g. Rotterdam): ~$2,000 – $2,200 per 40ft (early/Feb 2026).

---

## 3. Demurrage & Detention — European carrier tariff (ACL / Atlantic Container Line)

Source: https://www.aclcargo.com/shipping-info/free-time-demurrage-detention/
Carrier tariff (Hamburg, import demurrage = combined terminal storage + carrier demurrage, calendar days, counting from first calendar day after vessel discharge).

| Equipment | Free days | Day 1–7 | Day 8+ |
|---|---|---|---|
| 20ft dry van & tanks (non-HAZ) | 3 | 70 EUR | 130 EUR |
| 40ft dry / HC (non-HAZ) | 3 | 115 EUR | 180 EUR |
| 20ft open top / flat rack | 3 | 90 EUR | 155 EUR |
| 40ft open top / flat rack | 3 | 140 EUR | 205 EUR |
| Reefer (non-HAZ) | 2 | 110 EUR | 150 EUR |

HAZ equipment (from ACL search snippet): 4 calendar days free, then 50 EUR/day (20ft) / 90 EUR/day (40ft).

## 4. Demurrage vs Detention definitions + US per-diem benchmark

- Demurrage = container still inside the port/terminal (beyond free days).
- Detention = container has left the port but not returned to depot (beyond free days).
  Source: https://tracecontainer.com/blog/free-days-demurrage-explained-the-complete-2026-guide/
- US/FMC benchmark: standard 40ft may incur ~$45/day first 5 days after free time, escalating to $110+/day thereafter.
  Source: https://www.esenyelpartners.com/container-demurrage-regulations-cost/ (FMC context — NOT European; use only as global magnitude reference, mark LOW for Europe).
- European port congestion context (2026): Rotterdam & Antwerp barge delays stretching past 72 hours.
  Source: https://www.gocubic.io/blog/european-port-congestion-2026

---

## Quick reference (verified numbers)

| Item | Value | Source | Confidence for site |
|---|---|---|---|
| Rail Xi'an→Duisburg (40ft) | $4,200–$5,100, 16–19 days | freightsurcharge Q1 2026 | MEDIUM |
| Rail Chengdu→Lodz (40ft) | $4,000–$4,800, 18–21 days | freightsurcharge | MEDIUM |
| Rail Yiwu→Madrid (40ft) | $4,800–$5,800, 20–24 days | freightsurcharge | MEDIUM |
| Rail Chongqing→Hamburg (40ft) | $4,300–$5,200, 17–20 days | freightsurcharge | MEDIUM |
| Rail Zhengzhou→Liege (40ft) | $4,500–$5,300, 15–18 days | freightsurcharge | MEDIUM |
| Rail surcharge add-on | +15–25% all-in | freightsurcharge | MEDIUM |
| Rail fuel surcharge | 8–15% of base | freightsurcharge | MEDIUM |
| Gauge change fee | $150–250/container | freightsurcharge | MEDIUM |
| Border fees | $50–150/border | freightsurcharge | MEDIUM |
| Ocean 40ft (Shanghai→C. Europe) | $1,800–$2,500 | freightsurcharge | MEDIUM |
| Ocean 20ft/40ft (CN→EU) | $1,500–3,000 / $2,500–4,500 | docshipper | MEDIUM |
| Hamburg demurrage 20ft dry | 3 free days; 70→130 EUR/day | ACL tariff | MEDIUM |
| Hamburg demurrage 40ft dry | 3 free days; 115→180 EUR/day | ACL tariff | MEDIUM |
| Hamburg demurrage reefer | 2 free days; 110→150 EUR/day | ACL tariff | MEDIUM |
| 40ft demurrage (US/FMC ref) | ~$45/day → $110+/day | esenyelpartners | LOW for Europe |
