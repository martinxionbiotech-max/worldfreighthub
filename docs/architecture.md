# Architecture — WorldFreightHub

> 更新：2026-08-30 (Day 1 夜间)
> 状态：STEP 5–7 实施规范（Design System + Data Layer + SEO/AIO/Schema 基础 + 主站 + Middle East 子站骨架）
> 技术：Astro 7.x + 纯 CSS + Static First + Cloudflare Pages

## 0. 现实对齐（重要）

- 远程仓库当前仅为 `7eb8662` 裸脚手架（只有 `src/pages/index.astro`）。
- 之前 project-status.md 中记录的 `fbbdb05` 架构 commit 与 54 页**不存在**（文档超前于现实，已纠正）。
- 本文件是 STEP 5–7 的实际实施规范。

## 1. 目录结构

```
src/
  data/                     # 数据层（独立于页面，§32）
    types.ts
    china-ports.ts
    gcc-countries.ts
    gcc-ports.ts
    routes.ts
    methods.ts
    glossary.ts
    sources.ts
    rates.ts               # 全 0 占位，confidence=LOW，发布前须二次核查
  layouts/
    BaseLayout.astro
  components/
    Seo.astro
    JsonLd.astro
    Header.astro
    Footer.astro
    Card.astro
    DataTable.astro
    FaqBlock.astro
    ConfidenceBadge.astro
    SourceList.astro
    Breadcrumb.astro
    Cta.astro
    AdSlot.astro
  styles/
    global.css             # Design tokens + 基础样式
  pages/
    index.astro
    routes/index.astro
    routes/[slug].astro
    countries/index.astro
    countries/[slug].astro
    ports/index.astro
    ports/[slug].astro
    methods/index.astro
    methods/[slug].astro
    glossary/index.astro
    glossary/[slug].astro
    tools/index.astro
    directory/index.astro
    get-quote/index.astro
    about.astro
    methodology.astro
    editorial-policy.astro
    contact.astro
    middleeast/index.astro      # 子站入口（路径式，未来可迁 subdomain）
docs/                      # 项目文档
```

## 2. Design System（纯 CSS tokens）

配色：navy 主色 + amber 强调（专业/数据/可信，§38）。

```css
:root {
  --navy-900: #0b1f3a;  --navy-800: #10294f;  --navy-700: #16345f;
  --amber-500: #f59e0b; --amber-400: #fbbf24;
  --ink: #1a2332; --muted: #5b6b82; --line: #e5e9f0; --bg: #f7f9fc;
  --radius: 8px;
}
```

组件规范：
- Header：Logo + 主导航（Routes/Countries/Ports/Methods/Tools/Directory）+ Middle East 入口
- Footer：导航 + 信任页（About/Methodology/Editorial Policy/Contact）+ 版权 + 免责声明（运价为 indicative）
- Card / DataTable / FaqBlock / ConfidenceBadge / SourceList / Breadcrumb / Cta / AdSlot（预留，UX > Ad）

## 3. Data Layer（types.ts）

```ts
type Confidence = 'HIGH' | 'MEDIUM' | 'LOW';
interface Source { id: string; name: string; url: string; type: 'government'|'carrier'|'industry'|'port-authority'; }
interface Country { slug: string; name: string; nameAr?: string; iso2: string; capital: string;
  currency: string; vat: { rate: number; note: string }; ports: string[]; }
interface Port { slug: string; name: string; country: string; type: 'seaport'|'dry-port';
  unlocode?: string; note?: string; }
interface Route { slug: string; originPort: string; destPort: string; country: string;
  method: string; transitDays: { typical: number; range: [number,number]; confidence: Confidence };
  note?: string; }
interface Method { slug: string; name: string; summary: string; }
interface GlossaryTerm { slug: string; term: string; definition: string; }
interface FreightRate { id: string; route: string; container: string; amount: number; // 0 = placeholder
  currency: string; confidence: Confidence; lastUpdated: string; source: string; }
```

## 4. SEO / AIO / Schema 基础

- `Seo.astro`：title / meta description / canonical / OG / robots；Answer-first 标题。
- `JsonLd.astro`：按页面类型注入 WebSite / Organization / WebPage / Article / BreadcrumbList / ItemList / Dataset / DefinedTerm / Place（§26，禁止虚假数据）。
- 所有 rates 数据：ConfidenceBadge + Last Updated + Source + 免责声明（§13）。
- EEAT：SourceList 引用真实一手来源（Mawani、ZATCA/Saudi Customs、DP World、China Port 官方等，§23）。

## 5. 主站 + 子站

- 主站 `worldfreighthub.net`：Global Freight Intelligence Portal（index + 概念/工具/目录/数据入口）。
- 子站 `middleeast.worldfreighthub.net`：Day 1 用路径 `/middleeast/` 实现（独立 header 提示子站身份），未来可迁独立 subdomain deploy（§27–30）。
- 内容边界（§29）：主站讲概念，子站讲 China→GCC 落地，不复制。

## 6. 关键约束

- Static First、Data Driven、Component Driven（§41/§54）。
- 新增国家/港口/航线不改核心代码。
- rates 全 0 占位，禁止伪造实时价格（§13）。
- 每个核心页过 Quality Gate（§46）才发布。
