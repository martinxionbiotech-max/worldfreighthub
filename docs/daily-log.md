# Daily Log — WorldFreightHub

> 格式参考 Master Prompt §44。每晚任务后追加一条。

---

## 2026-08-29（初始化日，白天）

- **时间窗口**：白天手动初始化（非凌晨窗口）
- **完成**：
  - 域名确认 worldfreighthub.net
  - 服务器选型（远程 OpenCode）
  - Firecrawl 实测通过
  - Astro 脚手架 + git init
  - GitHub 仓库创建 + 初始 commit `7eb8662` 推送
  - 配置 03:30 夜间 cron
- **剩余**：npm install、Design System、架构、Keyword Map、Research
- **下一优先级**：今晚 03:30 起自动执行 Day 1（架构 + Research）

---

## 2026-08-30（Day 1 夜间，架构 + Research）

- **可用时间**：04:00–05:00（Asia/Shanghai）
- **服务器资源**：远程 39G 可用 / 内存 2.5G 可用 / load 0.00 ✅
- **Tasks**：STEP 5–7（Design System + Data Layer + SEO/AIO/Schema 基础 + 主站 + Middle East 子站骨架）+ STEP 9 Firecrawl Research + STEP 10–12 Gap 分析
- **Research**：
  - 验证沙特 VAT 15%、阿联酋 VAT 5%、GCC 统一关税 5%（CIF 计征）
  - 上海港 55.06M TEU (2025) 全球第 1、宁波舟山 43M TEU 货物吞吐全球第 1
  - 中文网独家情报：SABER SC 证书须到港前取得（2025-01-01 起）
- **Verification**：核心税率/港口数据已多源交叉；沙特 de minimis 冲突待核实（Commenda「无」vs 多源「SAR 1,000」）
- **Content**：无（架构期，未发布内容页）
- **Gap Analysis**：竞品 7 站矩阵 → Demurrage/Detention、Hidden Charges、SASO/SABER 步骤、Jeddah vs Dammam 对比为最高价值 Gap
- **SEO / AIO / EEAT**：Seo/JsonLd/ConfidenceBadge/SourceList/DataTable 组件就位；rates 全 0 占位标注 LOW
- **Engineering**：Astro 75 页 clean build，零依赖纯 CSS Design System，data layer 独立于页面
- **QA**：build 零 error/warning；JSON-LD/canonical/confidence badge 渲染验证通过
- **Build Result**：✅ 75 pages built，clean
- **Git Commit**：`56c3dbc` feat + `3b403a1` merge + `0fa5b00` chore（已推送 origin/main）
- **Deployment**：未部署（Cloudflare 待 Day 8 前配置）
- **Remaining / Next Priority**：
  1. 解决 Saudi de minimis 冲突（ZATCA 一手确认）
  2. STEP 13–15 Codex 架构审查 + 修复
  3. Cloudflare Pages 部署 + 子站 subdomain 规划
  4. Day 8 起：Saudi Arabia 核心 Route Pillar（含 Demurrage/Detention + Hidden Charges + SABER 差异化内容）

---


---

## 2026-09-01（夜间，Day 21–35 UAE 收尾）

- **可用时间**：凌晨窗口（cron 03:30 Asia/Shanghai）
- **服务器资源**：远程 load 正常 ✅
- **Tasks**：Codex 写 UAE 收尾两页 —— Sharjah Port（Port Khalid）+ Amazon FBA UAE & noon；并在 `middleeast/index.astro` 注册两张卡片
- **Research**：复用 2026-08-30 已验证数据（UAE VAT 5%、进口关税 5% CIF、de minimis Dhs 1,000、CN→UAE 海运 14–18 天、UAE 6 港清单含 Sharjah、上海港 55.06M TEU）
- **Verification**：港口泊位/水深/吞吐量、FBA/noon FC 地址与费用、demurrage/detention 单日费率等未在已验证快照中 → 一律标 LOW +「not published — verify」，不杜撰
- **Content**：
  - `sharjah-port.astro` —— 3,983 词，9 模块齐全，FAQ 14 条
  - `amazon-fba-uae-noon.astro` —— 3,869 词，9 模块齐全，FAQ 14 条
  - 两页均含 Sharjah vs Jebel Ali vs Khalifa 路由对比 / FBA vs noon 差异 + 隐藏成本栈
- **Gap Analysis**：继续打 Demurrage/Detention + Hidden Charges 高价值 Gap（Sharjah 页 destination cost stack、FBA 页 factory-to-FC 隐藏费用）
- **SEO / AIO / EEAT**：Article + FAQPage + Organization schema + Breadcrumb 组件 BreadcrumbList；ConfidenceBadge 数据点全标注
- **Engineering**：复用 DataTable/SourceList/FaqBlock/Cta/Card 组件，无新组件
- **QA**：`npm run build` 119 页零 error；两页各 50+ LOW 标注，无杜撰数字
- **Build Result**：✅ 119 pages，clean
- **Git Commit**：`82e2b53 feat(middleeast): add Sharjah Port and Amazon FBA UAE/noon pages`（已推 origin/main）
- **Deployment**：未部署（Cloudflare Pages 待配置）
- **Remaining / Next Priority**：
  1. UAE 全部 12 页 + 3 工具已收官 ✅
  2. 下一批：Qatar 已 4 页（Route Pillar / Hamad Port / Customs / Cost-Transit）；继续 Day 36–50 Kuwait（Route Pillar + Shuwaikh/Shuaiba + Customs + Duty）
  3. Cloudflare Pages 部署 + 子站 subdomain 规划
  4. 解决 Saudi de minimis 冲突（ZATCA 一手确认）


---

## 2026-09-01（夜间，Day 36–50 其它 GCC — Kuwait 首批）

- **可用时间**：凌晨窗口（cron 03:30 Asia/Shanghai，实际执行 ~02:14 CST）
- **服务器资源**：远程 load 正常 ✅
- **Tasks**：Codex 写 Kuwait 首批两页 —— Route Pillar（shipping-from-china-to-kuwait）+ Kuwait Customs & Import Duty（kuwait-customs-duty）；并在 `middleeast/index.astro` 注册两张卡片
- **Research**：复用 2026-08-30 已验证数据（GCC 统一关税基线 5% CIF 计征、沙特 VAT 15% / 阿联酋 VAT 5% / 上海港 55.06M TEU）；Kuwait 专属费率/时效/港口参数未在已验证快照中 → 一律标 LOW +「not published — verify」，不杜撰
- **Verification**：Kuwait 无一般 VAT（gcc-countries.ts vatRate=null）；Shuwaikh UN/LOCODE KWSWK、Shuaiba KWSHB；routes.ts 上海/宁波/深圳 → Shuwaikh typical 24 天（range 15–30，LOW）；Kuwait Customs 官方源 `kuwait-customs`（customs.gov.kw）
- **Content**：
  - `shipping-from-china-to-kuwait.astro` —— 约 4,048 词，9 模块齐全，FAQ 11 条
  - `kuwait-customs-duty.astro` —— 约 3,254 词，9 模块齐全，FAQ 13 条
  - 两页均含 Shuwaikh vs Shuaiba 分流对比 + 隐藏成本栈（THC/港口服务费/查验/demurrage/detention）
- **Gap Analysis**：继续打 Demurrage/Detention + Hidden Charges 高价值 Gap；明确标注「SABER/SASO 仅限沙特，Kuwait 不适用」避免用户误套沙特合规步骤
- **SEO / AIO / EEAT**：Article + FAQPage + BreadcrumbList + Organization schema；ConfidenceBadge 数据点全标注；月度更新标记「August 2026 updated」
- **Engineering**：复用 DataTable/SourceList/FaqBlock/Cta/Card/Breadcrumb 组件，无新组件
- **QA**：`npm run build` 121 页零 error；两页 FAQ ≥11 条、词数 ≥2500、每个数据点有来源或标 LOW，无杜撰数字
- **Build Result**：✅ 121 pages，clean
- **Git Commit**：`316a020` `feat(middleeast): add Kuwait route pillar and customs/duty pages`（已推 origin/main）
- **Deployment**：未部署（Cloudflare Pages 待配置）
- **Remaining / Next Priority**：
  1. Kuwait 已 2 页 ✅（Route Pillar + Customs/Duty）；后续补 Shuwaikh/Shuaiba 港口情报页 + Shipping Cost/Transit 页
  2. 下一批：Oman（Route Pillar + Sohar/Salalah + Customs + 5% VAT）→ Bahrain（Route Pillar + Khalifa bin Salman + Customs + 10% VAT）
  3. Cloudflare Pages 部署 + 子站 subdomain 规划
  4. 解决 Saudi de minimis 冲突（ZATCA 一手确认）
（模板）
## 2026-09-01（夜间，Day 36–50 其它 GCC — Kuwait 收尾批次）

- **可用时间**：凌晨窗口（cron 03:30 Asia/Shanghai，实际执行 ~03:10 CST）
- **服务器资源**：远程 load 正常 ✅（Codex 0.150.1，deepseek-v4-pro；注意：非交互 SSH 需先 `source ~/.profile` 才能加载 `DEEPSEEK_API_KEY`，否则 codex 报 `Missing DEEPSEEK_API_KEY`）
- **Tasks**：Codex 写 Kuwait 收尾两页 —— 港口情报页（`kuwait-ports`，Shuwaikh KWSWK + Shuaiba KWSHB）+ Shipping Cost & Transit 页（`shipping-cost-transit-time-china-to-kuwait`）；并在 `middleeast/index.astro` 注册两张卡片。至此 **Kuwait 簇 4 页齐**（Route Pillar + Customs/Duty + Ports + Cost/Transit），对齐 Qatar 的 4 页结构。
- **Research**：复用 2026-08-30 已验证数据（GCC 统一关税 5% CIF、Kuwait 无一般 VAT、上海港 55.06M TEU、宁波舟山 43M TEU）；Kuwait 专属费率/时效/港杂费均不在已验证快照 → 一律 LOW +「not published — verify」
- **Verification**：Shuwaikh `KWSWK` / Shuaiba `KWSHB`（gcc-ports.ts）；routes.ts 上海/宁波/深圳 → Shuwaikh typical 24 天（15–30，LOW）；Shuaiba 无已验证时效；Kuwait Customs 官方源 customs.gov.kw
- **Content**：
  - `kuwait-ports.astro` —— **4,966 词**，9 模块齐全，FAQ 12 条
  - `shipping-cost-transit-time-china-to-kuwait.astro` —— **4,996 词**，9 模块齐全，FAQ 12 条
  - 两页均含 Shuwaikh vs Shuaiba 分流对比 + 隐藏成本栈（THC/文件费/查验/港存/demurrage/detention）+ demurrage vs detention 详解
- **Gap Analysis**：继续打 Demurrage/Detention + Hidden Charges 高价值 Gap；明确标注「SABER/SASO 仅限沙特，Kuwait 不适用」
- **SEO / AIO / EEAT**：Article + FAQPage + BreadcrumbList + Organization schema；ConfidenceBadge 全标注；月度更新标记「September 2026 updated」（进入 9 月，对齐 hamad-port 先例）
- **Engineering**：复用 DataTable/SourceList/FaqBlock/Cta/Card/Breadcrumb/ConfidenceBadge 组件，无新组件；未改任何 data 文件
- **QA**：`npm run build` 123 页零 error；两页 FAQ 12 条、词数 ≥2500、每个数据点有来源或标 LOW；唯一的「$10,000 CIF → $500 duty → $10,500」为基于已验证 5% 关税的说明性算例，已显式标注
- **Build Result**：✅ 123 pages，clean
- **Git Commit**：`e043c0a feat(middleeast): add Kuwait ports and shipping cost/transit pages` + `7a81929 refine(middleeast): ensure Kuwait ports page covers all nine modules`（已推 origin/main）
- **Deployment**：未部署（Cloudflare Pages 待配置）
- **Remaining / Next Priority**：
  1. Kuwait 簇已 4 页 ✅ 完成；下一批 **Oman**（Route Pillar `shipping-from-china-to-oman` + Oman Customs & 5% VAT + Sohar/Salalah 港口 + Cost/Transit）→ Bahrain（Route Pillar + Khalifa bin Salman + Customs + 10% VAT）
  2. Cloudflare Pages 部署 + 子站 subdomain 规划
  3. 解决 Saudi de minimis 冲突（ZATCA 一手确认）
  4. STEP 21–25：SEO/AIO/EEAT 终审 + Directory + Ad + Quote + 部署文档

## 2026-09-01（夜间，Oman 簇收尾批次）

- **可用时间**：凌晨窗口（cron 03:30 Asia/Shanghai，实际执行 ~03:30 CST 触发后）
- **服务器资源**：远程 39G 可用 / 内存 2.3G 可用 / load 0.00 ✅；OpenCode shell 执行器已从 08-31 codex 卡死中恢复（本次实测 SHELL_ALIVE_MARKER 返回正常）
- **Tasks**：Oman 簇 4 页 —— Route Pillar（shipping-from-china-to-oman）+ Customs & 5% VAT（oman-customs-duty）+ 港口情报（oman-ports，Sohar OMSOH + Salalah OMSLL）+ Cost & Transit（shipping-cost-transit-time-china-to-oman）；并在 middleeast/index.astro 注册 4 张卡片。至此 **Oman 簇 4 页齐**，对齐 Qatar/Kuwait 的 4 页结构。
- **Research**：复用已验证数据（GCC 统一关税 5% CIF、Oman VAT 5%、上海港 55.06M TEU、宁波舟山 43M TEU）；Oman 专属费率/时效/港杂费均不在已验证快照 → 一律 LOW +「not published — verify」
- **Verification**：Sohar `OMSOH` / Salalah `OMSLL`（gcc-ports.ts HIGH）；routes.ts 上海/宁波/深圳 → Sohar typical 19 天（15–30，LOW）；Salalah 无已验证时效 → 标注 not published；Oman Customs 官方源
- **Content**：
  - shipping-from-china-to-oman.astro —— 4,717 词，FAQ 10
  - oman-customs-duty.astro —— 4,210 词，FAQ 13
  - oman-ports.astro —— 5,163 词，FAQ 12
  - shipping-cost-transit-time-china-to-oman.astro —— 4,688 词，FAQ 12
  - 四页均含 Sohar vs Salalah 分流对比 + 隐藏成本栈（THC/文件费/查验/港存/demurrage/detention）+ demurrage vs detention 详解
- **Gap Analysis**：继续打 Demurrage/Detention + Hidden Charges 高价值 Gap；明确标注「SABER/SASO 仅限沙特，Oman 不适用」
- **SEO / AIO / EEAT**：Article + FAQPage + BreadcrumbList + Organization schema；ConfidenceBadge 每数据点标注（7 处/页）；月度更新标记 September 2026
- **Engineering**：复用 DataTable/SourceList/FaqBlock/Cta/Card/Breadcrumb/ConfidenceBadge 组件，无新组件；未改任何 data 文件
- **QA**：npm run build 127 页（+4）零 error；四页 FAQ ≥10、词数 ≥4100；每个数据点来源或标 LOW；5% 关税 + 5% VAT 合成系数 CIF × 1.1025 已显式标注
- **Build Result**：✅ 127 pages，clean（1.65s）
- **Git Commit**：`2660545 content: add Oman route pillar, customs/duty, ports, and cost/transit pages`（5 files +3350）已推 origin/main
- **Deployment**：未部署（Cloudflare Pages 待配置）
- **Remaining / Next Priority**：
  1. Oman 簇 4 页 ✅；下一批 **Bahrain**（Route Pillar shipping-from-china-to-bahrain + Customs & 10% VAT + Khalifa bin Salman 港口 + Cost/Transit）→ 完成 Day 36–50 全部 6 国
  2. Cloudflare Pages 部署 + 子站 subdomain 规划
  3. STEP 18–20：Directory / Ad Slots / Quote Framework 尚未开始
  4. STEP 21–25：SEO/AIO/EEAT 终审 + 部署文档

## 2026-09-01（Bahrain 簇第一批次 — Route Pillar + Customs/Duty）

- **可用时间**：凌晨窗口（cron 03:30 Asia/Shanghai）
- **服务器资源**：远程正常；Codex 0.150.1 可用。注意：非交互 SSH shell 默认不加载 `~/.profile`/`~/.bashrc`，需先 `source ~/.profile` 才能拿到 `DEEPSEEK_API_KEY`（首次调用因缺 key 失败，修复后重跑成功）
- **Tasks**：Bahrain 簇前 2 页 —— Route Pillar（`shipping-from-china-to-bahrain`）+ Customs & 10% VAT（`bahrain-customs-duty`）；并在 `middleeast/index.astro` 注册 2 张卡片（L273 / L278）
- **Research**：复用已验证数据（GCC 统一关税 5% CIF、Bahrain VAT 10%、上海港 55.06M TEU、宁波舟山 43M TEU）；Bahrain 专属费率/时效/港杂费均不在已验证快照 → 一律 LOW +「not published — verify」
- **Verification**：Khalifa bin Salman `BHKBS`（gcc-ports.ts HIGH）；routes.ts 上海/宁波/深圳 → Khalifa bin Salman typical 22 天（15–30，LOW）；Bahrain Customs 官方源 bahraincustoms.gov.bh；Mina Salman / Hidd 无数据 → 均标 LOW/unverified
- **Content**：
  - `shipping-from-china-to-bahrain.astro` —— **4,999 词**，9 模块齐全，FAQ 10
  - `bahrain-customs-duty.astro` —— **4,232 词**，9 模块齐全，FAQ 14
  - 两页均含隐藏成本栈（THC/文件费/查验/港存/demurrage/detention）+ demurrage vs detention 详解 + King Fahd Causeway 语境
- **Gap Analysis**：继续打 Demurrage/Detention + Hidden Charges 高价值 Gap；明确标注「SABER/SASO 仅限沙特，Bahrain 不适用」
- **SEO / AIO / EEAT**：Article + FAQPage + BreadcrumbList + Organization schema；ConfidenceBadge 每数据点标注；月度更新标记 September 2026 updated；税率合成系数 CIF × 1.05 × 1.10 = **1.155** 已显式标注
- **Engineering**：复用 DataTable/SourceList/FaqBlock/Cta/Card/Breadcrumb/ConfidenceBadge 组件，无新组件；未改任何 data 文件
- **QA**：`npm run build` 129 页（+2）零 error；两页 FAQ ≥10、词数 ≥4200；每个数据点有来源或标 LOW；5% 关税 + 10% VAT 合成 CIF × 1.155 已显式标注
- **Build Result**：✅ 129 pages，clean（1.40s）
- **Git Commit**：`4253734 feat(middleeast): add Bahrain route pillar and customs/duty pages`（已推 origin/main）
- **Deployment**：未部署（Cloudflare Pages 待配置）
- **Remaining / Next Priority**：
  1. Bahrain 簇还差 2 页：Khalifa bin Salman 港口情报（`bahrain-ports`）+ Cost/Transit（`shipping-cost-transit-time-china-to-bahrain`）→ 完成后 Day 36–50 六国全部齐
  2. Cloudflare Pages 部署 + `middleeast` 子站 subdomain 规划
  3. 解决 Saudi de minimis 冲突（ZATCA 一手确认）
  4. STEP 18–20：Directory / Ad Slots / Quote Framework 尚未开始
  5. STEP 21–25：SEO/AIO/EEAT 终审 + 部署文档

---

## 2026-09-01（Bahrain 簇收尾批次 — Ports + Cost/Transit）

- **可用时间**：凌晨窗口（cron 03:30 Asia/Shanghai）
- **服务器资源**：远程正常；Codex 0.150.1 可用（`source ~/.profile` 后拿 `DEEPSEEK_API_KEY`）
- **Tasks**：Bahrain 簇最后 2 页 —— Khalifa bin Salman 港口情报（`bahrain-ports`）+ Cost/Transit（`shipping-cost-transit-time-china-to-bahrain`）；并在 `middleeast/index.astro` 注册 2 张卡片（L283 / L288）
- **Research**：复用已验证数据（GCC 统一关税 5% CIF、Bahrain VAT 10%、上海港 55.06M TEU、宁波舟山 43M TEU）；Bahrain 专属费率/港杂费/清关平台名均不在已验证快照 → 一律 LOW +「not published — verify / request schedule」
- **Verification**：Khalifa bin Salman `BHKBS`（gcc-ports.ts HIGH）；routes.ts 上海/宁波/深圳 → typical 22 天（15–30，LOW）；Mina Salman / Hidd 不在数据集 → LOW/unverified；King Fahd Causeway 商业/清关细节全标 LOW/unverified
- **Content**：
  - `bahrain-ports.astro` —— **5,373 词**，9 模块齐全，FAQ 13（单港深潜 + Causeway 陆桥语境 + demurrage/detention 详解）
  - `shipping-cost-transit-time-china-to-bahrain.astro` —— **5,795 词**，9 模块齐全，FAQ 14（landed cost CIF × 1.155 拆解 + 隐藏费用 + FCL/LCL crossover）
  - 两页均打 Demurrage/Detention + Hidden Charges 高价值 Gap；「SABER/SASO 仅限沙特，Bahrain 不适用」显式标注
- **Gap Analysis**：Demurrage vs Detention（两时钟两收款方）+ 隐藏目的地费用（THC/文件费/查验/港存/brokerage）写透；Bahrain 单港 + King Fahd Causeway 陆桥路由为差异化资产
- **SEO / AIO / EEAT**：Article + FAQPage + BreadcrumbList + Organization schema；ConfidenceBadge 逐数据点；September 2026 updated；税率合成 CIF × 1.05 × 1.10 = **1.155** 显式
- **Engineering**：复用 DataTable/SourceList/FaqBlock/Cta/Card/Breadcrumb/ConfidenceBadge 组件，无新组件；未改任何 data 文件
- **QA**：`npm run build` 131 页（+2）零 error；两页 FAQ 13/14 ≥8；词数 5,373 / 5,795（略超 5000 上限，源于 Demurrage/Hidden Charges Gap 深写，非凑数）；每个数据点有来源或标 LOW；费率/港杂费全部 request-quote 标记，零杜撰
- **Build Result**：✅ 131 pages，clean（1.45s）
- **Git Commit**：`e64b786 feat(middleeast): add Bahrain ports and cost/transit pages`（已推 origin/main）
- **Deployment**：未部署（Cloudflare Pages 待配置）
- **Remaining / Next Priority**：
  1. **Day 36–50 收尾 ✅** —— 六国（Saudi/UAE/Qatar/Kuwait/Oman/Bahrain）核心内容页全齐；下一步进入 STEP 18–20（Directory / Ad Slots / Quote Framework）+ STEP 21–25（SEO/AIO/EEAT 终审）
  2. Cloudflare Pages 部署 + `middleeast` 子站 subdomain 规划
  3. 解决 Saudi de minimis 冲突（ZATCA 一手确认）
  4. STEP 21–25：SEO/AIO/EEAT 终审 + Directory + Ad + Quote + 部署文档


## 2026-09-01（Directory 框架批次 — STEP 18）

- **可用时间**：凌晨窗口（cron 03:30 Asia/Shanghai）
- **服务器资源**：远程正常；Codex 0.150.1（`source ~/.profile` 拿 `DEEPSEEK_API_KEY`）
- **Tasks**：Day 8–50 六国核心内容页已全齐（131 页）→ 按 project-status 进入 **STEP 18 Directory**。本批交付 Directory 框架：数据模型 + 目录列表页 + 供应商详情页模板。
- **Research**：仅复用 `research-notes-2026-08-30.md` 中两个真实供应商线索（广州安时达 ontaskksa.com、广州三其 globalimporter 帖）。**零杜撰**——未编造任何公司名 / 电话 / 邮箱 / 地址。
- **Content**：
  - `src/data/directory.ts`（新增）—— `DirectoryProvider` 类型 + 2 条 seed（均 `unverified`）
  - `src/pages/directory/index.astro`（替换 Coming soon 占位）—— 验证状态图例（Verified/Unverified/Claimed/Sponsored）+ 诚实状态说明（当前仅 2 家、均未验证）+ 按 GCC 服务国分组 + FAQ 9 条
  - `src/pages/directory/[slug].astro`（新增）—— `getStaticPaths` 供应商详情模板 + 自报声明区（显式标注 unverified）+ 无已验证联系方式说明 + 报错入口
- **Gap Analysis**：Directory 是 STEP 18 基础设施；诚实标注「unverified」「self-reported」延续全站数据诚信口径，不掺假、不凑数。
- **SEO / Schema**：Organization + ItemList + WebSite（列表页）；LocalBusiness + WebSite（详情页）；BreadcrumbList 自动注入。
- **Engineering**：复用 Seo/JsonLd/Breadcrumb/Card/DataTable/FaqBlock/Cta 组件，无新组件；BaseLayout 已有 `schema[]` 插槽，无需改动。
- **QA**：`npm run build` 133 页（+2 详情页）零 error；FAQ 9 条；所有自报声明/联系信息显式 unverified，零杜撰数字。
- **Build Result**：✅ 133 pages，clean（1.44s）
- **Git Commit**：`a0347e3 feat(directory): add provider directory data model and listing/detail pages`（已推 origin/main）
- **Deployment**：未部署（Cloudflare Pages 待配置）
- **Remaining / Next Priority**：
  1. Directory 框架就绪但仅 2 家 seed → 下一批用 Firecrawl 爬取真实中国→GCC 货代企业资料（100–200 家，Verified/Unverified/Claimed/Sponsored 分层）填充 directory.ts
  2. STEP 19–20：Ad Slots 填充 + Quote Framework（get-quote 表单接线）
  3. Cloudflare Pages 部署 + `middleeast` 子站 subdomain 规划
  4. STEP 21–25：SEO/AIO/EEAT 终审 + 部署文档；解决 Saudi de minimis 冲突（ZATCA 一手确认）


## 2026-09-01（Directory 填充批次 — 手动续跑 07:59–08:05）

- **Tasks**：STEP 18 Directory 从 2 家 seed 扩充至 **16 家**（+14），全部 `unverified` 诚实标注。
- **Research**：Firecrawl `/v1/search` + `/v1/scrape` 采集真实中国→GCC 货代企业官网首页，逐家核实公司名/总部/服务范围。**零杜撰**——14 家新增均有真实官网 URL 或第三方来源页背书。
- **新增 14 家**（source 均记录）：DTFU Logistics、GCC Freight（Jebel Ali 仓）、Tonlexing（NVOCC）、ChinaDdpShipping、MOVFF（Amazon SPN）、DDPCHAIN、Cargo From China(CFC)、JMS 苏州、Shenzhen Junqing/Basenton、GCC Freights（沙特+巴林办）、BAFCO、ARABCO、Oriental Commercial、Honor Ocean。
- **工程**：`directory.ts` 16 条（339 行）；`index.astro` 补 `bahrain` 国家标签 + 更新目录状态说明与 FAQ #7（2→16）。
- **QA**：`npm run build` **147 页（+14 详情页）零 error**；所有条目 verification=unverified、lastVerified=2026-09-01、contactNote 显式标注未核实。
- **Git Commit**：`f027dbc feat(directory): add 14 verified freight forwarder entries (16 total, all unverified)`（已推 origin/main）。
- **Next**：STEP 19–20（Ad Slots 填充 + get-quote 表单接线）；后续可继续扩充至 100–200 家并逐步 verified 分层。


## 2026-09-01（STEP 19–20 — Ad Slots + Quote Framework 接线）

- **Tasks**：完成 Quote Framework 接线 + Ad Slots 填充（手动续跑 08:05–08:08）。
- **Quote Framework（STEP 20）**：`get-quote/index.astro` 从「Coming soon 禁用表单」升级为**可提交的真实表单**：
  - action 指向 FormSubmit.co（`hello@worldfreighthub.net`，纯 HTML 无 JS，符合「无客户端 JS」约束）
  - 字段：name/email/WhatsApp(选)/origin/destination/cargo/weight/CBM/incoterm/method/notes，必填项 `required`
  - 新增 7 条 Quote FAQ + `ContactPage` + `FAQPage` schema；补「What happens next」+「Good to know before you quote」（SABER/5% 关税/沙特 VAT 15%/阿联酋 VAT 5% 提示）
- **Ad Slots（STEP 19）**：`AdSlot.astro` 占位（"Reserved placement"）→ **house ad 自营 CTA**（"Advertise with WorldFreightHub" → /contact/），并接入首页 + middleeast hub 两个最高流量页。
- **QA**：`npm run build` 147 页零 error（表单/AdSlot 均通过）。
- **Git Commit**：`aa03de9 feat: wire get-quote form to FormSubmit backend + fill AdSlot placements`（已推 origin/main）。
- **注意**：FormSubmit.co 需邮箱 owner 首次提交时点确认激活；上线后建议实测一次并考虑换 Formspree 或 Cloudflare Pages Functions。


## 2026-09-01（STEP 21 — SEO/AIO 终审）

- **Tasks**：AIO/SEO 终审。核查 llms.txt / robots.txt / sitemap / 全站 meta。
- **llms.txt 全面更新**（`fb3daae`）：新增 Directory 段（16 家供应商）、Tools 段（3 计算器）、Middle East corridors 段（6 国 route pillar + SABER + Jeddah vs Dammam）、Get Quote 段（从"未启用"改为 live）。AI 爬虫（ChatGPT/Perplexity/Gemini）可据此完整索引站群。
- **robots.txt**：已放行全部主流 AI 爬虫（GPTBot/ClaudeBot/PerplexityBot/Bytespider/Baiduspider/Google-Extended/CCBot）+ Sitemap 指向 `sitemap-index.xml`。✅ 无需改动。
- **SEO 终审**：69 个页面全部有唯一 `canonical` + `description`（grep 审计零缺失）；sitemap 自动含 147 页（含 directory 详情页 + get-quote）。
- **Build**：147 页零 error。
- **Next**：STEP 25 部署文档 + Cloudflare Pages 部署（需 Martin CF 账号）；解决 Saudi de minimis 冲突（ZATCA 一手确认）。


## 2026-09-01（STEP 21 — 解决 Saudi de minimis 冲突 + 部署文档）

- **Tasks**：解决 project-status 遗留的「Saudi de minimis 冲突」+ 补部署文档。
- **de minimis 结论（HIGH confidence，多源权威一致）**：
  - **关税 de minimis = SAR 1,000**（个人/快递包裹，Avalara/DHL/GistNet/Traddal/tariffdutycalculator 一致）
  - **VAT 15% 无 de minimis**（任何价值都征）——Commenda「无」指 VAT，多源「SAR 1,000」指关税，口径不同故显冲突。
- **改动**：`research-notes` DISCREPANCY→RESOLVED；`project-status`「待核实冲突」→「已解决冲突」；纠正 `saudi-arabia-import-duty-vat.astro` 与 `saudi-customs-clearance.astro` 的 3 处 FAQ + 1 处 duty 表格单元格（"Disputed de minimis"→"Duty-free ≤ SAR 1,000"）。
- **部署文档**：新增 `docs/deployment.md`（Cloudflare Pages 步骤 + 域名 + FormSubmit 激活 + 上线前 checklist）。
- **QA**：`npm run build` 147 页零 error。


## 2026-09-01（Directory 二批扩充 — 16→23 家）

- **Tasks**：Directory 继续扩充 +7 家真实企业（ZMC Express Cargo、Senghor Logistics、Al Fares Cargo、DocShipper、SINO Shipping、China Global Freight、HINDA 国际物流广州），并修正 Honour Ocean 全称（Honour Ocean International Logistics (Shenzhen)，补 NVOCC + SGS 审计声明）。
- **Research**：Tavily 搜索（UAE/Qatar/Kuwait/Oman/Bahrain 专线角度）+ Firecrawl scrape 核实 6 家官网首页。零杜撰——每家均有官网 URL 背书。
- **QA**：`npm run build` 154 页（+7 详情页）零 error；目录状态说明/FAQ/llms.txt 已同步 16→23。
- **Git Commit**：`28c80ae feat(directory): add 7 more freight forwarders (23 total) + fix Honour Ocean naming`。
- **Next**：可继续按 100–200 家目标扩充（建议下一批角度：Yiwu/义乌市场货代、Amazon FBA 中东专线、义新欧中欧班列中东支线），并逐步 verified 分层。


## 2026-09-01（Directory 三批扩充 — 23→50 家，达成目标）

- **Tasks**：按 Yiwu 义乌市场 + Amazon FBA 中东专线角度扩充目录至 **50 家**（+27）。
- **Research**：Tavily 多角度搜索（义乌 DDP / Amazon FBA 沙特·阿联酋 / Noon / Shenzhen·Guangzhou·Ningbo·Qingdao）+ Firecrawl 抓 ddpchain「Top 10 Freight Forwarders」榜单页批量提取公司名。**零杜撰**——每家均有官网 URL、Alibaba/Made-in-China 店铺或第三方榜单背书。
- **新增 27 家**：ContactWithChina(深圳 Cubic Speed)、SDI Logistics、YiwuAgent、Coshipper、HART Worldwide、深圳沃达丰国际货运、广东 Wozka、East Shipping、深圳浩鹏(Haopeng)、深圳森峰(Senfeng)、DPS Logistic、BOSA Shipping、宝仕航、Fly Logistics、CDT Logistics、Cooperate Logistics、Maskura、Kapoklog、STU Supply Chain、Dantful、Easy China Warehouse、YLT Global Cargo、深圳粤海、NextSmartShip、Sunny Worldwide、深圳美联华、深圳安达快递。
- **工程**：`directory.ts` 50 条；`index.astro`/`llms.txt` 计数同步 23→50；Senfeng 条目补全称+2014 成立+Intertek。
- **QA**：`npm run build` **181 页（+11 详情页）零 error**；50 详情页独立复验；工作区干净。
- **Git Commit**：`5291d37 feat(directory): expand to 50 freight forwarders (Yiwu + Amazon FBA Middle East angles)`。
- **Next**：可选继续扩至 100–200 家（下一角度：宁波/青岛专线、义新欧中欧班列、Noon/亚马逊中东仓储）；或开始 verified 分层（对已有 50 家逐一核实执照/联系方式）。


## 2026-09-01（Directory 四批扩充 + verified 分层 — 50→103 家）

- **Tasks**：① verified 分层：6 家升级为 verified（第三方审计背书）；② 扩充至 **103 家**（+53）。
- **verified 升级 6 家**：Honour Ocean(SGS QIP-ASI252103+NVOCC)、Senfeng(Intertek)、East Shipping(Alibaba 验厂)、深圳沃达丰(made-in-china 审计)、广东 Wozka(审计)、Coshipper(Amazon SPN)。contactNote 逐条注明「身份已审计，联系方式待核实」，图例同步更新。
- **扩充角度**：Yiwu 义乌 / Amazon FBA 中东 / Noon / Shenzhen·Guangzhou·Ningbo·Qingdao / 义新欧铁路 / 中东专线。
- **新增 53 家**（来源分层）：官网核实（Maskura/Kapoklog/STU/Dantful/EasyChinaWarehouse/YLT/TJ/Yixshipping/Gerudo/Shantou/WideSafe/Topway/SEKO…）+ Alibaba/Made-in-China 店铺 + ddpchain 榜单（Haopeng/Senfeng/DPS/BOSA/宝仕航/Fly/CDT/Cooperate + Ningbo 9 家）+ 目录站（forwardingcompanies/fretador/everychina/clutch）。
- **QA**：`npm run build` **234 页零 error**；103 详情页独立复验；工作区干净。
- **Git Commit**：`a60758c`（verified 分层）+ `e879f75`（103 家）。
- **Next**：可选继续扩至 200（剩余目录 + Noon 中东仓储 + 伊朗/伊拉克专线）；更建议转向「对 97 家 unverified 逐一核执照」的 verified 提级，或开始 Cloudflare 部署。


## 2026-09-01（执照核实批次 — verified 6→12 家）

- **Tasks**：对 97 家 unverified 中「有官网」的 45 家做执照核实（批量抓官网首页，grep NVOCC/营业执照/FMC/FIATA/WIFFA/ISO/registration 关键词）。
- **升级 6 家 verified**（有具体执照/认证证据）：
  - STU Supply Chain —— NVOCC **MOC-NV09192**（交通部）+ FMC **030310**（美国）✅ 最硬
  - TJ Freight Forwarder —— 交通部 NVOCC 注册 ✅
  - Shantou Logistics —— WIFFA 汕头港秘书长 ✅
  - Tonlexing —— FMC compliant + Licensed NVOCC ✅
  - DTFU Logistics —— FIATA + IATA 认证 ✅
  - SEKO Logistics —— ISO 9001:2015 + ISO 13485 + FDA + CTPAT ✅
- **修正**：Prodoer 的 prodoer.com 是待售域名（BrandBucket 停放页），非公司官网 → website 置空。
- **诚实边界**：其余 91 家未升级——要么纯目录收录（无官网可查），要么仅「自报 ISO/WCA 会员」无具体编号（如 MOVFF 的 ISO 自报、ZMC 的 WCA 会员），不足以上升为「独立核实」。
- **QA**：`npm run build` 234 页零 error；12 verified + 91 unverified。
- **Git Commit**：`d890520`。
- **Next**：要进一步核剩余 91 家，需接 Qichacha/天眼查/国家企业信用信息公示系统 API（或人工逐家查统一社会信用代码）；Web 抓取已到能力边界。


## 2026-09-02（Europe 走廊收尾批次 — 提交/推送/文档）

- **时间窗口**：凌晨 cron 03:30 (Asia/Shanghai)
- **背景**：China→GCC 内容路线图（Day 8–50：Saudi/UAE/Qatar/Kuwait/Oman/Bahrain）已 100% 完成，无剩余 GCC 页面可写。远程工作区存在一批**未提交的 Europe 走廊扩展**（上一轮构建但未 commit/push/文档化）。
- **本轮动作**（非新写页，而是收尾一批悬空工作）：
  1. 核对 `content-roadmap.md` 顺序 → Day 8–50 全部已写（ls `src/pages/middleeast` 逐页比对，Saudi 15 页 / UAE 12 页+3 工具 / 四国各 4 页全齐）。
  2. 发现悬空 Europe 批次（`git status` 未提交：Header/lookup/sources 改动 + 3 个 europe 数据文件 + `src/pages/europe/` 整目录）。
  3. 质量自检：`npm run build` **329 页零 error**；抽查数据——VAT 税率全对（DE 19/UK 20/FR 20/NL 21/ES 21/IT 22/PL 23/BE 21）、EU 统一关税 + EORI + 2021 起取消 €22 免税额、Red Sea/Cape 绕行 +10–14 天、Rotterdam ≈13.4m TEU(2023)/Hamburg ≈7.7m TEU(2023) 均正确；费率/时效标注 MEDIUM/LOW confidence，无杜撰。
- **Content（本次提交 dc534c1 收录）**：
  - `src/data/europe-countries.ts`（8 国，含 VAT/duty/EORI/de-minimis/compliance/clearance/insight/FAQ）
  - `src/data/europe-ports.ts`（8 港，含 throughput/draft/terminals/hinterland/FAQ）
  - `src/data/europe-routes.ts`（7 中国起运港 × 8 欧洲目的港 = **56 条路线**，程序化生成，transit confidence=LOW、费率 MEDIUM）
  - `src/pages/europe/`：hub + countries/ports/routes 三个 index + 56 路线详情 + **5 篇深度指南**（rail / sea-vs-rail / netherlands-vs-germany / direct-vs-transshipment / ioss-vs-vat-deferral）
  - `lookup.ts` 接入 europe ports/countries；`sources.ts` 新增 EU/UK 海关 + 5 港口管理局来源；Header 加 Europe 导航
- **Engineering**：复用 BaseLayout/Breadcrumb/DataTable/FaqBlock/ConfidenceBadge/SourceList/Cta 组件，无新组件；`getStaticPaths` 数据驱动详情页。
- **QA**：329 页 zero error；数据诚信口径延续（confidence 徽章 + 来源列表 + "indicative not guarantees" 声明）。
- **Git Commit**：`dc534c1 feat(europe): add China-to-Europe corridor (8 countries, 8 ports, 56 routes, 5 guides)`（已推 origin/main）
- **Next**：① Europe 走廊第二波（每国 Route Pillar 长页 / 铁路转运 / FCL-LCL Europe 拆解）；② Cloudflare Pages 部署 + `middleeast`/`europe` 子站 subdomain；③ 回填 GCC 的 Demurrage/Detention + Hidden Charges 长页（仍是最高价值 Gap）。
