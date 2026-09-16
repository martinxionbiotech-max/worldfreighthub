# WorldFreightHub — Research Notes: Macro Freight Indices + China→Europe Rail Benchmarks (WHFI seed)

**Date:** 2026-09-16
**Researcher:** Index & Rail Research Subagent (Tavily web_search/web_fetch)
**Scope:** (A) Macro index snapshot — SCFI, CCFI, Freightos FBX, Drewry WCI (latest data points 2026-09-10 → 2026-09-16); (B) China→Europe rail 40HQ station-to-station base rates — Xi'an / Chongqing / Chengdu → Duisburg / Hamburg; rail-vs-sea comparison; transit times.
**Discipline:** every figure traced to a dated public source; ranges = span of cited sources; nothing fabricated; gaps listed in Blockers.

---

## 1. Macro indices (latest verified data points)

### SCFI — Shanghai Containerized Freight Index (weekly, SSE)
- Composite: **3662.18** (2026-09-11), **+72.13 w/w (+2.0%)**, 7th consecutive weekly rise.
- Routes (2026-09-11): Europe base **$2,545/TEU** (−3.7%); Mediterranean $3,299/TEU (−4.2%); USWC **$7,339/FEU** (+1.3%); USEC **$10,479/FEU** (+1.5%); **Persian Gulf $6,311/TEU (+2.9%)**; South America $8,555/TEU (−4.5%); Aus/NZ $2,755/TEU (+4.4%); SE Asia $1,010/TEU (+13.1%).
- Aug-2026 monthly averages (SSE via MOFCOM monthly report, 2026-09-03): composite 3,387.64 (+6.8% MoM); Persian Gulf $5,637/TEU (+26.2% MoM).
- Sources: sse.net.cn (composite, official); CCCME/sofreight + 10100.com + cnyes (route detail cross-check).

### CCFI — China Containerized Freight Index (weekly, SSE)
- Composite: **1862.18** (2026-09-11), **+1.4% w/w**.
- Routes: Europe 2,139.54 (−2.2%); USWC 1,642.39 (+1.7%); USEC 1,867.19 (+0.5%); **Persian Gulf / Red Sea (波红) 3,669.37 (+3.0%)**.
- Source: sse.net.cn (official table, 2026-09-04 → 2026-09-11 issue).

### FBX — Freightos Baltic Index (daily/weekly)
- 2026-09-16 snapshot: **FBX11 China→N Europe $4,499.00/FEU**; FBX13 →Mediterranean $4,157.80; FBX01 →USWC $7,491.20; FBX03 →USEC $9,724.20; global composite $3,503.75.
- Weekly direction (Freightos update 2026-09-08): FBX01 −1%, FBX03 −3%, FBX11 −3%, FBX13 −1%; commentary: USWC ≈ $7,600 & USEC ≈ $9,500; Asia–N Europe ≈ $4,500, Med cooled to ≈ parity with N Europe.
- Source: freightos.com terminal pages (accessed 2026-09-16).

### Drewry World Container Index (weekly)
- Composite: **$4,476/40ft** (2026-09-10 assessment), unchanged — 2nd consecutive stable week.
- Routes: Shanghai→Rotterdam $3,997 (−2%); →Genoa $4,216 (−3%); →Los Angeles $7,352 (+2%); →New York $9,726 (+1%).
- Source: drewry.co.uk.

---

## 2. China→Europe rail rates (40HQ, station-to-station base)

| Lane | Low–High (USD) | Conf | As of | Source |
|---|---|---|---|---|
| Xi'an → Duisburg/Hamburg | $4,000–4,800 | MEDIUM | 2026-08 / H2 | goodhope86 + caexp.net |
| Chongqing → Duisburg/Hamburg | $5,300–5,500 | MEDIUM | 2026-08 | goodhope86 |
| Chengdu → Nuremberg (proxy) | $4,600 (single) | LOW | 2026-08 | goodhope86 |

Notes: base = rail freight + one export declaration; excludes both-end local charges. Xi'an: $4,000 (2026 list "valid pre-August"), $4,600 (2026 H2 list), Xi'an platform reference index ¥32,272.80 ≈ $4,770 (at CNY 6.7670 mid-rate, 2026-09-15). Chongqing: Duisburg $5,300 / Hamburg $5,500. Chengdu's published destinations are Łódź / Tilburg / Nuremberg — no published Chengdu→Duisburg/Hamburg rate found.

**Transit (terminal-to-terminal):** Xi'an→Duisburg ≈ 12 days (timetabled train, 4 departures/wk); standard 15–20 days. Chongqing→Duisburg ≈ 14–15 days. Chengdu→Łódź ≈ 11–12 days; →Nuremberg ≈ 14 days.

### Rail vs sea comparison point
- Sea benchmarks: WCI Shanghai→Rotterdam $3,997/40ft; FBX11 $4,499/FEU.
- Xi'an rail $4,000–4,800 ≈ **parity** with sea (−$0.5k…+$0.8k/FEU vs benchmarks).
- Chongqing rail $5,300–5,500 ≈ **+$0.8k–1.5k premium** over sea.
- Transit: rail 12–15 d vs sea ≈ 35–45 d (Cape routing). Near-parity pricing + ~3× speed is the key market-status line.

---

## 3. Sources used (with dates)

| # | Source | Date | Used for |
|---|---|---|---|
| S1 | sse.net.cn SCFI — https://www.sse.net.cn/index/singleIndex?indexType=scfi | 2026-09-11 | SCFI composite + prior week |
| S2 | sse.net.cn CCFI — https://www.sse.net.cn/index/singleIndex?indexType=ccfi | 2026-09-11 | CCFI full route table |
| S3 | CCCME (sofreight) — https://www.cccme.org.cn/news/details.aspx?id=45B2AF7028B85EBFBDDFE7D8D98FDB58&classid=8C92359A9456952E&xgid=F868932F64EB7AAF | 2026-09-11/13 | SCFI route values |
| S4 | 10100.com weekly summary — https://m.10100.com/article/150974163 | 2026-09 | Cross-check SCFI/CCFI/WCI |
| S5 | 财联社 — https://www.cls.cn/detail/2474228 | 2026-09-04 | SCFI/CCFI corroboration |
| S6 | eastmoney — https://wap.eastmoney.com/a/202609113872030118.html | 2026-09-11 | SCFI composite confirm |
| S7 | Drewry WCI — https://www.drewry.co.uk/supply-chain-advisors/supply-chain-expertise/world-container-index-assessed-by-drewry | 2026-09-10 | WCI values |
| S8 | Freightos FBX pages — https://www.freightos.com/enterprise/terminal/fbx-11-china-to-northern-europe (also fbx-01/03/13, global index page) | accessed 2026-09-16 | FBX values |
| S9 | Freightos weekly update — https://www.freightos.com/freight-resources/mediterranean-ocean-rates-pull-even-with-asia-eu-possibly-from-red-sea-transit-bump-september-8-2026-update | 2026-09-08 | FBX deltas + commentary |
| S10 | goodhope86 price lists — https://goodhope86.com/railway/germany-price.html ; https://goodhope86.com/railway/price-fcl.html ; https://tw.goodhope86.com/railway/price-fcl.html | 2026-08 / H2 | Rail rates |
| S11 | caexp.net (Xi'an platform) — https://www.caexp.net/ | accessed 2026-09-16 | Xi'an reference ¥32,272.80; 12-day transit |
| S12 | CRCT — https://www.crct.com/index.php?m=content&c=index&a=lists&catid=22 | n/d (official operator) | Chongqing/Chengdu transit |
| S13 | MOFCOM/SSE Aug report — https://fec.mofcom.gov.cn/article/ggfw/tjsj/zsff/ckjzxjgzscx/202609/7869.html | 2026-09-03 | Aug monthly averages |
| S14 | cnr.cn — https://www.cnr.cn/sxpd/c/yl/20240616/t20240616_526749423.shtml | 2024-06 | Xi'an–Duisburg 12-day transit |

## 4. Caveats / excluded data
- Excluded (scope mismatch): door-to-door quotes ($6,800–8,500 Xi'an; $7,000–10,000 Chongqing); undated legacy reference table (XinHua Silk Road cross-border segment $4,900); third-party FBX aggregator page (farpointglobal) — inconsistent with official Freightos terminal ($2,418 vs $7,491 for FBX01), judged unreliable.
- Rail lists are monthly-updated forwarder price sheets; no official rail freight index exists.
- FBX terminal values are live, no printed as-of date → treated as 2026-09-16 access snapshot (±2% variance across cached pages).
- Refresh cadence: WCI next 2026-09-17; SCFI/CCFI next 2026-09-18; FBX daily.

## 5. Blockers
1. Chengdu→Duisburg/Hamburg: no public benchmark quote found (only Chengdu→Nuremberg proxy, LOW confidence).
2. No official China–Europe rail freight index; ranges are a union of 2026 price-list versions (pre-Aug & H2) — refresh with platform quotes before publishing.
3. FBX pages carry no explicit as-of date — use Freightos Terminal/JOC if an exact dated value is needed.
4. Rail rows are single-source-family (goodhope86), station-to-station basis; door-to-door quotes excluded (materially higher).
