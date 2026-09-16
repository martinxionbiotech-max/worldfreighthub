# WorldFreightHub — Research Notes: China → Saudi Arabia / UAE Rate Verification (WHFI v1 seed)

**Date:** 2026-09-16
**Researcher:** Rate Research Subagent (Tavily web_search/web_fetch)
**Scope:** 9 FCL routes (20GP/40HQ) + 3 LCL + 3 air lanes, China → SA/AE
**Discipline:** every figure traced to a public source with date; ranges = span across cited sources; nothing fabricated; unconfirmed items flagged in Blockers.

---

## 1. Market context (2026-09)

- **Hormuz closure:** Strait of Hormuz effectively closed to container vessels for 6+ months; Gulf volumes re-routed via **land bridges through Jeddah and Khor al Fakkan** (Xeneta, 2026-09-10).
- **Red Sea:** capacity returning — Bab el-Mandeb weekly capacity 212,636 TEU (Aug 2026) vs 930,679 (Aug 2023) = 23% of pre-crisis. Red Sea vs Cape routing delta ≈ **11 days** (China→Genoa example). Houthi/Saudi flare-up continues.
- **SCFI Persian Gulf line:** **$6,311/TEU** on 2026-09-11 (+$176, +2.9% w/w; composite 3662.18). History: $3,977/TEU (2026-04-03, ~+200% vs pre-war), $3,220 mid-March.
- **Xeneta (2026-09-10):** China→Jeddah **$10,870/FEU** (+256% vs 2026-02-28); China→Khor al Fakkan **$10,626/FEU** (+479%). Record highs above Covid peaks.
- CN analysts 2026-09-11 (cls.cn): Middle East/"Red Sea" rates described as "sky-high" (天价); Q4 inflection expected.
- **No FBX / Drewry WCI China–Gulf lane exists** (checked) — index evidence limited to SCFI + Xeneta.

## 2. Sources used (with dates)

| # | Source | Date | Used for |
|---|--------|------|----------|
| S1 | Xeneta Weekly Ocean Update — https://www.xeneta.com/news/xeneta-weekly-ocean-container-shipping-market-update-10.09.26 | 2026-09-10 | Jeddah/Khor Fakkan FEU index |
| S2 | Shanghai Shipping Exchange (SCFI) via CCCME — https://www.cccme.org.cn/news/details.aspx?id=45B2AF7028B85EBFBDDFE7D8D98FDB58&classid=8C92359A9456952E&xgid=F868932F64EB7AAF | 2026-09-11 | Shanghai→Persian Gulf $6,311/TEU |
| S3 | Sino-shipping China→Saudi guide — https://www.sino-shipping.com/freight-from-china-to-saudi-arabia | 2026-09 | Jeddah/Dammam FCL/LCL/air |
| S4 | Sino-shipping China→UAE guide — https://www.sino-shipping.com/country-guides/freight-from-china-to-uae | 2026-09 | UAE FCL/LCL/air (incl. Abu Dhabi) |
| S5 | MIDTRANS published filed rates — https://www.mid-trans.com/shipping-rates | windows 2026-07-22→08-05 (expired; page rotates monthly) | China m/ports→Jeddah $5,300; Dammam $5,400; KhF $5,100; Jebel Ali $5,000 (20ft); SH→JA 40HC $6,800–7,025; Nansha 40HC $7,050; air PVG/HGH→DXB $1.5–1.6/kg |
| S6 | Tonlexing China→Saudi — https://www.tonlexing.com/shipping-cost-from-china-to-saudi-arabia & /20ft-40ft-container-shipping-costs-from-china-to-saudi-arabia | 2026-06 | Ningbo→Jeddah/Dammam; Shenzhen→Dammam; LCL |
| S7 | Tonlexing China→UAE — https://www.tonlexing.com/shipping-cost-from-china-to-uae | 2026 | LCL $30–60; 20GP $3,294–4,086; 40HQ $3,750–5,250; air $3.5–6/$4.25 |
| S8 | Freightos lane pages — https://www.freightos.com/routes/route/cn-shenzhen-guangdong/ae-dubai (also cn-guangzhou-guangdong) | accessed 2026-09-16 | SZ→Dubai from: 20' $2,642 / 1CBM $705 / 100kg $917; transit 31–41d (Cape-era) |
| S9 | Basenton China→Jebel Ali — https://www.basenton.com/cheapest-shipping-from-china-to-jebel-ali-dubai | undated | SH $2,650/$3,850; SZ $2,850/$4,250; NB $2,650/$3,850 |
| S10 | SZ-Junqing — https://www.sz-junqing.com/news/cost-of-shipping-20ft-and-40ft-container-from-china-to-saudi-arabia.html | undated (+Jul-2026 note: 40ft surged $6,615–8,085) | SZ→Jeddah/Dammam tables |
| S11 | Goodhope — https://goodhopefreight.com/freight/uae2024.html | undated | Shekou LCL $30/26/23/18 per CBM brackets; FCL quotes |
| S12 | GCC Freight (air) — https://gcc-freight.com/en/blog/air-freight-shipping-from-china-to-saudi-arabia | 2026 | SH/SZ→KSA air brackets |
| S13 | SamVertex — https://samvertex.com/blog/air-freight-china-uae-when-to-use | 2026 | China→UAE air $4–8/kg market |
| S14 | AC Global — https://air-cargo-global.com/route/routes-china-uae | 2026 | SZX→DWC from $3.8/3.4/3.0 |
| S15 | Dantful — https://www.dantful.com/20ft-40ft-container-cost-from-china-to-uae & container-shipping-costs-from-china-to-saudi-arabia | 2026-04 | UAE/Khalifa + KSA references |
| S16 | DDPChain — https://ddpchain.com/saudi-arabia | 2026 | KSA air $3.3–5/kg; carrier transits 39–52d (Cape-era) |
| S17 | CNDDP — https://www.cnddpshipping.com/how-much-does-it-cost-to-ship-from-china-to-saudi-arabia | undated | LCL $60–125; FCL refs |
| S18 | cccme/sofreight SCFI weekly — see S2 | 2026-09-11 | SCFI values |
| S19 | shippingdigest.tw — https://shippingdigest.tw/news/20260409n2 | 2026-04-09 | SCFI Gulf history $3,977 |

## 3. WHFI v1 candidate records (24 rows = 9 FCL lanes × 20GP/40HQ + 3 LCL + 3 air)

Ranges = span of cited sources (low = lowest credible published figure; high = highest; single-figure sources noted). "P2P" = port-to-port freight only.

| # | route | container | low | high | conf | as_of | sources |
|---|-------|-----------|-----|------|------|-------|---------|
| 1 | shanghai-jeddah | 20GP | 8820 | 10780 | MEDIUM | 2026-09 | S3 |
| 2 | shanghai-jeddah | 40HQ | 10870 | 14245 | HIGH | 2026-09-10 | S1+S3 |
| 3 | shanghai-dammam | 20GP | 8820 | 10780 | MEDIUM | 2026-09 | S3 (combined JD/DM) |
| 4 | shanghai-dammam | 40HQ | 11655 | 14245 | MEDIUM | 2026-09 | S3 (combined) |
| 5 | ningbo-zhoushan-jeddah | 20GP | 2400 | 2700 | MEDIUM | 2026-06 | S6 |
| 6 | ningbo-zhoushan-jeddah | 40HQ | 2800 | 3200 | MEDIUM | 2026-06 | S6 |
| 7 | ningbo-zhoushan-dammam | 20GP | 1250 | 2500 | MEDIUM | 2026-06 | S6 |
| 8 | ningbo-zhoushan-dammam | 40HQ | 2000 | 3600 | MEDIUM | 2026-06 | S6 |
| 9 | shenzhen-dammam | 20GP | 1000 | 2100 | MEDIUM | 2026-06 | S6+S10 |
| 10 | shenzhen-dammam | 40HQ | 1400 | 2800 | MEDIUM | 2026-06 | S6+S10 |
| 11 | shanghai-jebel-ali | 20GP | 4118 | 6311 | HIGH | 2026-09-11 | S2+S4 |
| 12 | shanghai-jebel-ali | 40HQ | 5860 | 8204 | MEDIUM | 2026-09 | S4 (+S5 context) |
| 13 | ningbo-zhoushan-jebel-ali | 20GP | 2650 | 5000 | LOW | 2026-07 | S9+S5 |
| 14 | ningbo-zhoushan-jebel-ali | 40HQ | 3850 | 3850 | LOW | undated | S9 (single "from" value) |
| 15 | shenzhen-jebel-ali | 20GP | 2642 | 3400 | MEDIUM | 2026-09-16 | S8+S9+S11 |
| 16 | shenzhen-jebel-ali | 40HQ | 2850 | 4250 | MEDIUM | 2026-09-16 | S9+S11 |
| 17 | shanghai-khalifa-port | 20GP | 4118 | 5108 | MEDIUM | 2026-09 | S4 (UAE-wide incl. Abu Dhabi) |
| 18 | shanghai-khalifa-port | 40HQ | 5860 | 8204 | MEDIUM | 2026-09 | S4 |
| 19 | shanghai-jeddah | LCL/CBM | 40 | 100 | MEDIUM | 2026-09 | S3+S6 |
| 20 | shanghai-jebel-ali | LCL/CBM | 30 | 95 | MEDIUM | 2026-09 | S7+S4 (+gcf) |
| 21 | shenzhen-jebel-ali | LCL/CBM | 15 | 30 | LOW | 2026 (undated) | S11 (+tendify) |
| 22 | shanghai-jeddah | air/kg | 4.00 | 8.50 | MEDIUM | 2026 | S12 (+S3/S16) |
| 23 | shanghai-jebel-ali | air/kg | 4.00 | 8.00 | MEDIUM | 2026-09 | S13+S4 |
| 24 | shenzhen-jebel-ali | air/kg | 3.80 | 8.00 | MEDIUM | 2026 | S14+S13 |

## 4. Key caveats for publication

- **Source spread is extreme** (index vs guide vs marketplace). Ranges deliberately bracket both; DO NOT collapse to single "average" values. Label all as **indicative**.
- Saudi lanes: Red Sea routing (Jeddah avoids Hormuz; Dammam is Gulf-side and now served via Jeddah/Khor Fakkan land bridges). Cape of Good Hope alternatives add ~11 days vs Red Sea; some carrier transits quoted 39–52 days (DDPChain).
- Sino-shipping page text is internally inconsistent (some lines "stable", others "very sharp rise"); only its numeric tables were used.
- Ningbo/Shenzhen origin lanes lack Sep-2026 specific data — June 2026 guides approximating; expect current levels higher (index trajectory).
- LCL/air figures vary by volume/weight bracket and base-vs-all-in definitions; bracket notes included in notes per record.

## 5. Blockers (not confirmed)

1. No FBX / Drewry WCI China–Gulf lane exists — index evidence limited to SCFI + Xeneta.
2. shanghai-dammam has no standalone published rate (combined with Jeddah in S3).
3. Ningbo-Zhoushan & Shenzhen origin lanes: no Sep-2026 data (used 2026-06/07 approximations).
4. shanghai-khalifa-port: no port-specific rate; UAE-wide quote + Apr-2026 reference used.
5. ningbo-zhoushan-jebel-ali: LOW confidence; 40HQ single-figure only.
6. LCL/air: bracket and "all-in vs base" ambiguity across sources.
