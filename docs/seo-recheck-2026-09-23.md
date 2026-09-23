# SEO 技术复检报告 — 2026-09-23 (P0-4)

只读检查，未修改任何文件。抽样 5 页：`/`、`/middleeast/`、`/europe/`、`/freight-rates/`、`/ar/`（另抽查 `/ar/middleeast/`、`/freight-rates/shekou-to-jebel-ali/`）。

检查项：canonical / robots.txt / sitemap-index / hreflang (en–ar) / breadcrumb / JSON-LD 有效性。

## 结论速览

| 级别 | 数量 | 说明 |
|---|---|---|
| CRITICAL | 0 | — |
| HIGH | 1 | 首页 hreflang="ar" 互链缺失 |
| MEDIUM | 2 | /ar/ 首页无 JSON-LD；/europe/ meta description 数字过期 |
| LOW | 3 | /freight-rates/ 相对 canonical/og:url；sitemap 无 hreflang 注释且 europe 未分块；og:locale:alternate 缺失 |

## HIGH

1. **英文首页缺失 hreflang="ar"（互惠断裂）**
   - `/` 只输出 `hreflang="en"` + `x-default`；`/ar/` 反向输出了 `hreflang="en" → /`。Google 要求 hreflang 双向互惠，断裂会在 GSC 报错。
   - 根因：`src/i18n/routes.ts` 的 `toPattern()` 把 `/src/pages/ar/index.astro` 映射为 `/index/`（而非 `/`），`hasLocalePath('/', 'ar')` 返回 false。
   - 影响面：仅根首页这一个顶层 index 路径；其他 `/ar/**` 页面互链正常。

## MEDIUM

2. **`/ar/` 首页 0 个 JSON-LD 块**
   - 英文首页有 3 个（WebSite / Organization / FAQPage），阿语首页一个都没有（BaseLayout 未传 schema prop）。双语页结构化数据不一致，FAQPage 富结果只在英文侧生效。

3. **`/europe/` meta description 与 og:description 数字过期**
   - 文案为 "eight destination countries"，但 `europe-countries.ts` 实际 15 国（本批 P0-2 首页已改为 15）。SEO 描述与站内数据自相矛盾。

## LOW

4. **`/freight-rates/` 与 `/freight-rates/[route]/` 的 canonical 与 og:url 是相对路径**
   - 输出 `/freight-rates/` 而非 `https://worldfreighthub.net/freight-rates/`。合法（可解析）但 Google 建议绝对 URL；其他页面均已绝对化，属不一致。

5. **sitemap 分块不含 hreflang (xhtml:link) 注释；`/europe/` 未单独分块**
   - 页面 head 已声明 hreflang（Google 认可），sitemap 层缺失影响有限。`/europe/` 落入 `pages` 兜底块，无法像 middleeast 一样独立监控索引量。

6. **og:locale:alternate 缺失**
   - 仅输出单语言 og:locale（en_US / ar_SA），未输出 alternate 配对。影响很小。

## 检查通过项（无需处理）

- `public/robots.txt`：全 Allow（含主流 AI 爬虫），`Sitemap: https://worldfreighthub.net/sitemap-index.xml` ✓
- `sitemap-index.xml`：11 个语义分块齐全（directory/routes/ports/glossary/methods/countries/tools/freightrates/middleeast/arabic/pages）✓
- `/middleeast/` ↔ `/ar/middleeast/` hreflang 双向互惠 ✓
- `/europe/`、`/freight-rates/` 无阿语镜像，正确地不输出 hreflang="ar"（hasLocalePath 防幻影 URL 机制生效，无 GSC 404 源）✓
- canonical：5 页除相对路径问题外全部正确（含 `/ar/` → `https://worldfreighthub.net/ar/`）✓
- JSON-LD 全部可解析：`/middleeast/`（ItemList + BreadcrumbList）、`/europe/`（2×ItemList + BreadcrumbList）、`/freight-rates/`（Dataset + BreadcrumbList）、`/`（WebSite + Organization + FAQPage，6 问答）✓
- breadcrumb：`/middleeast/`、`/europe/`、`/freight-rates/` 有 BreadcrumbList；首页无面包屑属正常 ✓
- robots meta：5 页均 `index, follow`；抽查 `/freight-rates/shekou-to-jebel-ali/` 为 `index, follow`（≥2 条报价，符合 MIN_ROUTE_QUOTES_FOR_INDEXING 逻辑）✓
- title / description / og 标签齐全；og:locale en_US / ar_SA 正确；`og.png` 存在；阿语页 `lang="ar" dir="rtl"` ✓

## 建议（待决策，本任务未修改）

- H1（首页 hreflang）与 M3（europe description 数字）与本次 P0-2 单一数据源工作直接相关，建议下批修；
- M2（/ar/ 首页 schema）可与阿语页改造一并处理；
- 其余 LOW 项按需处理。
