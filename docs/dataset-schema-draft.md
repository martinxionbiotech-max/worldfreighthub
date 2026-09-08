# worldfreighthub.net — Dataset 静态 JSON 结构草案

> 用途：把"置信度标注的航线费率/港口/货代"数据做成机器可读的静态 JSON，供 AI 直接抽取引用。
> 落地方式：构建期静态生成（Astro build 时输出到 `/data/*.json`），零运行时成本，符合"静态 > 运行时"原则。
> 每个值都带 `confidence` + `source` 字段——这是本站的差异化，必须保留进机器可读层。

## 文件清单

| 文件 | 内容 | 规模 |
|---|---|---|
| `/data/catalog.json` | 数据集索引（Dataset schema，指向下面三个） | 1 个 |
| `/data/routes.json` | 6 国关税/VAT/落地乘数 + 21 航线费率 | ~21 条 |
| `/data/ports.json` | 19 港口档案（7 中国 + 12 GCC） | 19 条 |
| `/data/providers.json` | 103 货代目录（含 verified/unverified 状态） | 103 条 |

---

## 1. `/data/catalog.json`（Dataset 索引）

```json
{
  "@context": "https://schema.org",
  "@type": "Dataset",
  "name": "WorldFreightHub China-GCC Freight Reference Data",
  "description": "Confidence-labelled freight data for the China-to-GCC corridor: duty/VAT by country, route rate benchmarks, port profiles, and a verification-first freight provider directory.",
  "url": "https://worldfreighthub.net/data/catalog.json",
  "creator": { "@type": "Organization", "name": "WorldFreightHub" },
  "dateModified": "2026-09-08",
  "isAccessibleForFree": true,
  "license": "https://worldfreighthub.net/terms/",
  "distribution": [
    { "@type": "DataDownload", "encodingFormat": "application/json", "contentUrl": "https://worldfreighthub.net/data/routes.json" },
    { "@type": "DataDownload", "encodingFormat": "application/json", "contentUrl": "https://worldfreighthub.net/data/ports.json" },
    { "@type": "DataDownload", "encodingFormat": "application/json", "contentUrl": "https://worldfreighthub.net/data/providers.json" }
  ],
  "variableMeasured": [
    { "@type": "PropertyValue", "name": "duty_pct", "unitText": "%" },
    { "@type": "PropertyValue", "name": "vat_pct", "unitText": "%" },
    { "@type": "PropertyValue", "name": "landed_multiplier", "unitText": "×CIF" },
    { "@type": "PropertyValue", "name": "confidence", "value": "HIGH|MEDIUM|LOW" }
  ]
}
```

---

## 2. `/data/routes.json`（6 国落地成本 + 航线基准）

```json
{
  "dataset": "worldfreighthub-routes",
  "version": "2026-08",
  "confidence_legend": {
    "HIGH": "Confirmed against a primary source (customs/tax/port authority)",
    "MEDIUM": "Corroborated by multiple secondary sources",
    "LOW": "Unverified estimate; verify before relying"
  },
  "countries": [
    { "country": "Saudi Arabia", "iso": "SA", "duty_pct": 5, "vat_pct": 15,
      "landed_multiplier": 1.2075, "clearance_above_cif_pct": 20.75,
      "confidence": "HIGH", "source": "ZATCA", "de_minimis": "unresolved" },
    { "country": "United Arab Emirates", "iso": "AE", "duty_pct": 5, "vat_pct": 5,
      "landed_multiplier": 1.1025, "clearance_above_cif_pct": 10.25,
      "confidence": "HIGH", "source": "Dubai Customs" },
    { "country": "Oman", "iso": "OM", "duty_pct": 5, "vat_pct": 5,
      "landed_multiplier": 1.1025, "clearance_above_cif_pct": 10.25,
      "confidence": "HIGH", "source": "Oman Customs" },
    { "country": "Bahrain", "iso": "BH", "duty_pct": 5, "vat_pct": 10,
      "landed_multiplier": 1.155, "clearance_above_cif_pct": 15.5,
      "confidence": "HIGH", "source": "Bahrain Customs" },
    { "country": "Qatar", "iso": "QA", "duty_pct": 5, "vat_pct": 0,
      "landed_multiplier": 1.05, "clearance_above_cif_pct": 5.0,
      "confidence": "HIGH", "source": "Qatar Customs" },
    { "country": "Kuwait", "iso": "KW", "duty_pct": 5, "vat_pct": 0,
      "landed_multiplier": 1.05, "clearance_above_cif_pct": 5.0,
      "confidence": "HIGH", "source": "Kuwait Customs" }
  ],
  "routes": [
    {
      "route_id": "cn-sa-fcl20",
      "origin": "Shanghai", "origin_country": "CN",
      "destination": "Saudi Arabia", "dest_country": "SA",
      "method": "FCL 20GP",
      "rate_range_usd": [3333, 5085],
      "confidence": "LOW", "source": "Freightos / Sino-shipping snapshots",
      "note": "Different route/date bases; not averaged"
    },
    {
      "route_id": "cn-sa-lcl",
      "origin": "Shanghai", "destination": "Saudi Arabia",
      "method": "LCL (per CBM)",
      "rate_range_usd": [267, 955],
      "confidence": "LOW", "source": "Freightos Shanghai-Riyadh"
    },
    {
      "route_id": "cn-sa-air",
      "origin": "Shanghai", "destination": "Saudi Arabia",
      "method": "Air (per 100kg)",
      "rate_range_usd": [880, 1350],
      "confidence": "LOW", "source": "ddpchain / Freightos"
    }
  ]
}
```

---

## 3. `/data/ports.json`（19 港口档案）

```json
{
  "dataset": "worldfreighthub-ports",
  "version": "2026-08",
  "ports": [
    {
      "port_id": "shanghai",
      "name": "Shanghai",
      "country": "CN", "role": "origin",
      "throughput_teu_2025": 55060000,
      "confidence": "HIGH", "source": "SIPG"
    },
    {
      "port_id": "ningbo-zhoushan",
      "name": "Ningbo-Zhoushan",
      "country": "CN", "role": "origin",
      "throughput_teu_2025": 43000000,
      "confidence": "HIGH", "source": "NBPort"
    },
    {
      "port_id": "jeddah",
      "name": "Jeddah Islamic Port",
      "country": "SA", "role": "destination",
      "region": "Red Sea gateway",
      "confidence": "MEDIUM", "source": "Mawani"
    },
    {
      "port_id": "jebel-ali",
      "name": "Jebel Ali",
      "country": "AE", "role": "destination",
      "region": "Gulf hub",
      "confidence": "MEDIUM", "source": "DP World"
    },
    {
      "port_id": "hamad",
      "name": "Hamad Port",
      "country": "QA", "role": "destination",
      "confidence": "MEDIUM", "source": "Mwani Qatar"
    }
  ]
}
```

> 完整 19 个港口照此模板填充（dammam / guangzhou / hamad / jebel-ali / jeddah / khalifa-bin-salman / khalifa-port-abu-dhabi / ningbo-zhoushan / port-khalid / qingdao / riyadh-dry-port / salalah / shanghai / shenzhen / shuaiba / shuwaikh / sohar / tianjin / xiamen）。

---

## 4. `/data/providers.json`（103 货代目录）

```json
{
  "dataset": "worldfreighthub-providers",
  "version": "2026-08",
  "verification_meaning": {
    "verified": "Identity, contact and service claims independently confirmed against primary source",
    "unverified": "Found in research; not yet independently confirmed — treat as research lead only"
  },
  "providers": [
    {
      "provider_id": "gcc-freight",
      "name": "GCC Freight",
      "headquarters": "CN",
      "service_countries": ["SA", "AE", "KW", "QA", "OM", "BH"],
      "methods": ["FCL", "LCL", "air", "DDP"],
      "verification_status": "unverified",
      "last_verified": "2026-09-01",
      "source": "gcc-freight.com"
    }
  ]
}
```

---

## 落地要点

1. **全部构建期静态生成**（Astro 的 `getStaticPaths` / 构建脚本输出到 `public/data/`），零后端。
2. **`confidence` + `source` 字段是本站灵魂**，必须保留进 JSON——这是它区别于"抓来的通用数据"的核心。
3. **不要暴露**：未核验货代的真实联系方式、内部价格、非公开字段（遵循技能"安全约束"）。
4. **Schema 补强**：主页/数据页加 `Dataset` JSON-LD 指向 `/data/catalog.json`。
5. **与 llms.txt 打通**：在 llms.txt 加一节 `## Data` 指向这三个 JSON 文件。
