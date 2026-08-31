**Scope**
Reviewed `package.json`, `astro.config.mjs`, `tsconfig.json`, and all 44 files under `src/`. No files were modified.

**Architecture Strengths**
- Static-first Astro 7.2.9 setup with no client-side JS and one ~9.7 KB CSS bundle; very strong performance baseline.
- Clean separation between typed data modules, shared layout, UI components, and page routes.
- Centralized SEO/canonical/robots output through `BaseLayout.astro` + `Seo.astro`.
- Consistent schema injection through `JsonLd.astro`, with `DefinedTerm`, `ItemList`, `Place`, `Country`, and `WebPage` types already in use.
- Good trust scaffolding: `Confidence` levels, disclaimers, `Methodology`, `Editorial Policy`, source-type badges, and `rel="noopener noreferrer"` on external links.

**Concrete Issues**

**Critical**
- Internal pre-publish notes are rendered publicly. `src/data/gcc-countries.ts:11`, `src/data/routes.ts:23`, `src/pages/routes/index.astro:66`, `src/pages/ports/index.astro:57`, and `src/pages/countries/index.astro:62` expose copy like “verify before publish” or “before publish” directly to visitors. Fix by separating editorial/review status from user-facing copy; published text should say “verify with the relevant authority before relying on this figure,” never “before publish.”
- Route pages use an incorrect generic source list. `src/pages/routes/[slug].astro:116` calls `sources.slice(0, 6)`, so a Shanghai→Sohar route can display Saudi/UAE/Qatar sources while omitting Oman. Fix by deriving sources from the destination country/port source map, or render “No verified sources yet” when no mapping exists.
- The quote form is an active form with no backend. `src/pages/get-quote/index.astro:30` uses `method="post" action="#"` and a live submit button, so visitors can submit false leads. Fix by disabling the submit control until a real endpoint exists, or add client-side prevention with a clear “coming soon” status.

**Major**
- Production Astro config is empty. `astro.config.mjs:5` lacks `site`, `trailingSlash`, `compressHTML`, and sitemap integration. Set `site: 'https://worldfreighthub.com'`, `trailingSlash: 'always'`, `compressHTML: true`, and add `@astrojs/sitemap`.
- Breadcrumb structured data uses relative URLs and mismatches visible markup. `src/components/Breadcrumb.astro:13` emits `item: '/'` and `item: '/routes/'`, while the visible breadcrumb omits Home. Resolve all items with `new URL(href, SITE_URL)` and show Home in the visible `<ol>`.
- Open Graph/social cards are incomplete. `src/components/Seo.astro:43` always sets `summary_large_image`, but `BaseLayout.astro:14` never exposes `ogImage`. Add an `ogImage` prop through the layout, create `public/og.png`, and emit `og:image`, dimensions, alt text, and `twitter:image`.
- China origin ports have no public pages or links. `src/pages/ports/[slug].astro:15` generates paths only from `gccPorts`, so `src/data/china-ports.ts:3` is lookup-only and route origins are unlinked. Generate origin-port pages or add linkable origin sections, then link route facts to those pages.
- Thin “coming soon” pages are indexable. `src/pages/tools/index.astro:23` and `src/pages/directory/index.astro:7` have almost no useful content but default to `index, follow`. Pass `noindex` until calculators/directory entries exist.
- Transit ranges are hardcoded and unprovenanced. `src/data/routes.ts:21` gives every route `range: [15, 30]`, with no `lastUpdated` or `sourceIds` on `Route`. Store per-route ranges/dates/provenance or stop presenting these as route-specific figures.

**Minor**
- `src/components/DataTable.astro:12` uses `Record<string, any>`, which silently hides bad column keys and lacks row headers. Use typed row unions and add `th scope="row"` for the first column.
- `src/components/DataTable.astro:40` hardcodes `$`, so non-USD data would render incorrectly. Add a `currency` prop.
- `src/data/lookup.ts:24`, `src/components/AdSlot.astro`, and `src/components/FaqBlock.astro` are unused. Either wire them into pages or remove them.
- `src/layouts/BaseLayout.astro:52` lacks a skip-to-content link; `src/components/Header.astro:18` lacks `aria-current="page"`. Add both for accessibility and crawl clarity.
- `src/styles/global.css:287` declares `color` twice in the table header, and animations lack `prefers-reduced-motion`. Clean the duplicate and add reduced-motion guards.

**Data-Model and Routing Scalability Gaps**
- Data lives in hand-edited TS arrays rather than Astro content collections. `src/data/types.ts` has no Zod schema or build-time validation, so invalid slugs, duplicate IDs, and missing relationships can ship silently.
- Relationships are untyped string references: `Country.ports`, `Route.originPort/destPort`, and `FreightRate.route` in `src/data/types.ts` are not enforced against actual port/country slugs.
- `Port.country` is a display string, not a `countrySlug` reference. This forces duplicate manual source maps in `src/pages/countries/[slug].astro:29` and `src/pages/ports/[slug].astro:25`, and prevents reliable port→country linking.
- `FreightRate.amount` uses `0` as a placeholder sentinel. Model it as `number | null` plus `sourceIds`, `verifiedAt`, `validUntil`, and a unit field.
- All index pages render complete tables with no pagination, filtering, or search. That is fine at 21 routes, but it will not scale as ports, rates, and origins grow.
- No i18n or `hreflang` model exists, despite the GCC target audience; Arabic country names are not represented in the current `Country` type.

**SEO / Schema / AIO / EEAT Gaps**
- SEO: `public/robots.txt`, `public/sitemap.xml`, and sitemap generation are missing. `astro.config.mjs:5` does not establish a canonical site or trailing-slash policy.
- Schema: `BreadcrumbList` URLs are relative, `src/pages/index.astro:10` emits `Organization` without `logo`/`contactPoint`/`sameAs`, `src/pages/routes/[slug].astro:34` emits a bare `WebPage`, and `src/pages/methods/[slug].astro:20` emits `Article` without `author`, `datePublished`, `dateModified`, or `publisher`.
- Schema: `Place` and `Country` payloads omit available facts such as UN/LOCODE, `geo`, and country-slug links, reducing entity clarity.
- AIO: no `public/llms.txt`, no `robots.txt` guidance for AI crawlers, and no machine-readable `Dataset`/`DataCatalog` for the route, rate, and port tables.
- EEAT: `BaseLayout.astro` has no `author`, `reviewedBy`, `datePublished`, or `dateModified` fields, so every page lacks authorship/freshness signals.
- EEAT: there are no privacy, terms, or cookie pages; `src/pages/contact.astro:18` exposes only an email address with no registered entity or operational contact details.
- EEAT: route and rate figures lack per-claim citations, so the claimed “primary sources first” methodology is not actually wired to the data.

**Top 5 Fixes in Priority Order**
1. Remove all internal “before publish” copy from rendered pages and move it into non-rendered editorial fields.
2. Add route-specific source mapping and stop using `sources.slice(0, 6)` on `src/pages/routes/[slug].astro:116`.
3. Disable or fully implement the quote form so it cannot submit false inquiries.
4. Configure production SEO infrastructure: `site`, `trailingSlash`, sitemap, `robots.txt`, `llms.txt`, and Open Graph image support.
5. Publish/link China origin ports, add `countrySlug` to `Port`, and enrich `Organization`/author/date schema for EEAT.
