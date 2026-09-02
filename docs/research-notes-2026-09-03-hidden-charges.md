# WorldFreightHub — Research Notes (China → Europe: Hidden Charges / Accessorials)

**Date:** 2026-09-03
**Researcher:** Research Agent (Firecrawl CLI) — night cron run
**Method:** Firecrawl CLI scrape + search. All facts below extracted from pages that actually loaded. Nothing fabricated; unverified items marked.

---

## 1. Carrier tariff — OOCL Germany Local Surcharges (eff. 2026, maximum rates)

Source: https://www.oocl.com/germany/eng/localinformation/localsurcharges/Pages/default.aspx
(All surcharges/fees shown are MAXIMUM rates and valid until further notice unless specified.)

### General / Outbound (export side)
| Charge | Unit | Amount (EUR) | Notes |
|---|---|---|---|
| Security Charge (ISPS) | container | 14 | all trades (incl. in below THCs) |
| THC — Bremerhaven + Hamburg, DRY | container | 325 | eff. Jan 1 2026 |
| THC — Bremerhaven + Hamburg, DG | container | 365 | eff. Jan 1 2026 |
| THC — Bremerhaven + Hamburg, Awkward | container | 590 | eff. Jan 1 2026 |
| THC — Bremerhaven + Hamburg, Reefer | container | 475 | eff. Jan 1 2026 |
| THC — Wilhelmshaven, DRY | container | 295 | eff. Jan 1 2026 |
| THC — Wilhelmshaven, DG | container | 335 | eff. Jan 1 2026 |
| THC — Wilhelmshaven, Awkward | container | 565 | eff. Jan 1 2026 |
| THC — Wilhelmshaven, Reefer | container | 410 | eff. Jan 1 2026 |
| THC — Belgium + Netherlands, DRY | container | 260 | eff. May 10 2024 |
| THC — Belgium + Netherlands, Reefer | container | 355 | eff. May 10 2024 |
| Documentation Fee (BL) | BL | 75 | all trades — if SI not via MOC/CargoSmart/EDI (eff. Jul 2014) |
| Switch BL fee (2nd set) | BL | 150 | eff. Jul 25 2014 |
| VGM Manual Submission Admin Fee | container | 40 | eff. Jul 1 2017 |
| VGM Manual Amendment Admin Fee | container | 40 | eff. Jul 1 2017 |
| VGM Late Submission Admin Fee | container | 80 | eff. Jul 1 2017 |
| Manual Booking Fee | booking | 40 | eff. May 1 2023 |
| Cancellation/roll — general dry | container | 100 | 5 cal days before closing (eff. Sep 1 2023) |
| Cancellation/roll — reefer/DG/special | container | 150 | eff. Sep 1 2023 |
| Extra Container Handling — Inland | container/move | 70 | eff. Jan 1 2024 |
| Extra Container Handling — Terminal | container/move | 90 | eff. Jan 1 2024 |

### Inbound (import side)
| Charge | Unit | Amount (EUR) | Notes |
|---|---|---|---|
| Documentation Fee (BL) | BL | 40 | eff. Nov 1 2018 |
| Import Manifest Correction — pre customs | BL | 40 | eff. Feb 2013 |
| Import Manifest Correction — post customs | BL | 80 | eff. Feb 2013 |
| Change of empty drop-off depot after DO | container | 30 | eff. Nov 2016 |
| Container Inspection Fee (DE/AT/CZ/SK imports) | container | 15 | eff. Jun 16 2021 |
| Congestion Surcharge — barge via Antwerp/Rotterdam | container | 75 | eff. Apr 1 2026 |
| Congestion Surcharge — rail via Bremerhaven/Wilhelmshaven/Rotterdam | TEU | 50 | eff. Apr 1 2026 |
| Congestion Surcharge — rail via Hamburg | TEU | 150 (ICS) / 50 (ICO) | eff. Apr 1 2026 |
| Congestion Surcharge — truck via Hamburg/Antwerp/Rotterdam | container | 60 | eff. Jul 5 2024 |
| Container door closing (Security Claw, import) | container | 90 | Aug 2013 |
| Genset reefer surcharge — truck (GNO/GND) | container | 150 | Apr 8 2022 |
| Genset reefer surcharge — barge | container | 265 | Mar 27 2024 |
| Fuel Surcharge carrier haulage — Truck | inland rate | 21% (Sep 2026) / 13% (Aug 2026) | Sep 17 2026 |
| Fuel Surcharge carrier haulage — Rail | container | EUR 27 | Aug/Sep 2026 |
| Fuel Surcharge carrier haulage — Barge | inland rate | 15% | Aug/Sep 2026 |

## 2. Indicative THC by container type (Europe, 2024–2025)

Source: https://hz-containers.com/en/news/terminal-handling-charges-thc-in-european-and-czech-ports/ (dated 16.2.2026)
| Container type | Rate (indicative, EUR) |
|---|---|
| 20′ standard DC | 220–275 |
| 40′ standard DC/HC | 280–330 |
| Reefer | 320–400 |
| OOG (flat rack/open top) | 400–600+ |
| HAZ/IMO | +50–100% surcharge |

Also: THC typically includes temporary "free time" storage of 3–7 days within the terminal; demurrage billed after free time expires. OTHC = origin, DTHC = destination, transshipment THC often already inside ocean tariff.

## 3. Rotterdam THC benchmark

Source: https://www.xeneta.com/blog/terminal-handling-charges
- Average THC for exports out of Rotterdam ≈ USD 235 per 20ft (~30% of the port-to-port rate).

## 4. Cross-reference: ACL terminal surcharges (2026)

Source: https://www.aclcargo.com/shipping-info/surcharges-accessorials/
- Cont. Europe (incl. Denmark & Finland) flat line: 50 EUR/container (terminal/security-related line).
- Port Terminals DV/HV/OT/FV: 160 USD / reefer 320 USD (per equipment, magnitude reference).
- Inland terminal surcharges vary widely by depot (e.g. Duisburg 68–90 EUR, Rotterdam 75 EUR per container lines) — magnitudes only, mark LOW.

## 5. Quick reference (verified numbers for site use)

| Item | Value | Source | Confidence |
|---|---|---|---|
| ISPS security charge | EUR 14/container | OOCL 2026 | MEDIUM |
| THC Hamburg/Bremerhaven DRY | EUR 325 | OOCL eff. Jan 1 2026 | MEDIUM |
| THC Wilhelmshaven DRY | EUR 295 | OOCL 2026 | MEDIUM |
| THC Belgium/Netherlands DRY | EUR 260 | OOCL eff. May 2024 | MEDIUM |
| THC Hamburg/Bremerhaven Reefer | EUR 475 | OOCL 2026 | MEDIUM |
| THC Belgium/Netherlands Reefer | EUR 355 | OOCL 2024 | MEDIUM |
| THC 20ft indicative (Europe) | 220–275 EUR | hz-containers | MEDIUM |
| THC 40ft indicative (Europe) | 280–330 EUR | hz-containers | MEDIUM |
| Rotterdam export THC | ~USD 235/20ft | Xeneta | MEDIUM |
| Documentation fee (BL) outbound | EUR 75 | OOCL | MEDIUM |
| Documentation fee (BL) inbound | EUR 40 | OOCL | MEDIUM |
| VGM manual submission fee | EUR 40 | OOCL | MEDIUM |
| Congestion surcharge (barge Antwerp/Rotterdam) | EUR 75 | OOCL 2026 | MEDIUM |

All are single-carrier or indicative references → mark MEDIUM confidence on site, NOT HIGH. Origin-side (China) OTHC, China documentation fee, customs broker fees, and China export fees have NO verified $/€ number → mark LOW + "request an itemised schedule".
