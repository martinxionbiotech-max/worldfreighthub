# WorldFreightHub — Project Status

> 最后更新：2026-09-02 07:19 (Asia/Shanghai)

## 核心信息

| 项 | 值 |
|---|---|
| 域名 | `worldfreighthub.net`（主站） |
| 子站 | `middleeast.worldfreighthub.net`（第一阶段，China → GCC）· `europe.worldfreighthub.net`（第二阶段，China → Europe） |
| GitHub | `martinxionbiotech-max/worldfreighthub`（public, main） |
| 远程项目路径 | `/home/developer/worldfreighthub/`（OpenCode 服务器 43.130.37.37） |
| 本地归档 | `/home/ubuntu/.openclaw/workspace/worldfreighthub/` |
| 技术栈 | Astro 7.2.9 + 纯 CSS + Static + Cloudflare Pages |
| 初始 commit | `7eb8662 chore: init Astro scaffold` |
| 架构 commit | `56c3dbc` → `3b403a1`（merge）→ `0fa5b00`（chore gitignore） |
| 夜间 cron | 03:30 Asia/Shanghai（与 wikiqigong 02:00 错开） |

## 执行主体分工

- **OpenClaw**（本机）→ Project Manager / Orchestrator / 调度
- **OpenCode**（远程 43.130.37.37）→ 架构 / 实现（Astro、组件、数据模型、路由、SEO/Schema）
- **Codex**（远程）→ 独立审查 / 修复
- **Firecrawl**（远程，key 在 `/home/developer/.config/firecrawl-cli/credentials.json`）→ Research Agent

## 服务器资源（2026-08-30 实测）

| | 本机 VM-0-8 | 远程 OpenCode |
|---|---|---|
| 磁盘 | 40G / 剩 5.8G | 39G 可用 ✅ |
| 内存 | 1.9G | 2.5G 可用 ✅ |
| Load | — | 0.00 ✅ |

→ 所有构建/抓取/编码在**远程**执行。

## 决策记录

1. 域名：`worldfreighthub.net`
2. 与 wikiqigong（02:00）错开，凌晨 03:30 跑
3. 项目放远程 OpenCode 服务器（磁盘宽裕）
4. Firecrawl 已在远程实测通过
5. **架构实现采用 spec-complete 树（`-s ours` merge 收敛两路并行历史）**，保留完整 data layer（含 rates.ts）+ SEO/schema 组件

## 当前进度（STEP 1–25）

- [x] STEP 1 资源检查
- [x] STEP 2 域名确认
- [x] STEP 3 Git 仓库创建 + Astro 初始化 + 推 GitHub
- [x] STEP 4 安装依赖（npm install）
- [x] STEP 5 Design System（纯 CSS navy/amber，Header/Footer/Card/Table/FAQ/Badge/Breadcrumb/CTA/AdSlot）
- [x] STEP 6 架构基础（Data Layer：china-ports/gcc-countries/gcc-ports/routes(21)/methods/glossary(16)/sources(14)/rates(8占位)；SEO/AIO/Schema 组件）
- [x] STEP 7 主站 + Middle East 子站骨架（**75 页** clean build）
- [x] STEP 8 Keyword Map（`docs/keyword-map.md`）
- [x] STEP 9 Firecrawl 竞品/中文/Primary Sources Research（`docs/research-notes-2026-08-30.md`）
- [x] STEP 10–12 Competitor Content Matrix + Gap Matrix + Roadmap（`docs/competitor-gap.md` + `docs/content-roadmap.md`）
- [x] STEP 13–15 Codex 架构审查 + 修复（commit `5b6abdc` top-5 fixes 已合并）
- [x] STEP 16–20 内容 + 工具 + Directory + Ad + Quote（内容✅ 131 页；工具 3 ✅；Directory 16 家真实企业 ✅；**Ad Slots house ad 接入 ✅ + Quote 表单接 FormSubmit ✅**）
- [ ] STEP 21–25 SEO/AIO/EEAT + Build + Commit + Deploy（Cloudflare）+ 文档（**SEO/AIO 终审 ✅**：llms.txt 全面更新 + robots.txt 放行 AI 爬虫 + 69 页 meta 齐全；Cloudflare 部署 + 部署文档未完成）
- [x] **Phase 2 — Europe 走廊（2026-09-02 收尾 ✅）**：`src/data/europe-*`（8 国 + 8 港 + 56 路线）+ `src/pages/europe/`（hub + 3 index + 56 路线详情 + 5 深度指南 rail/sea-vs-rail/netherlands-vs-germany/direct-vs-transshipment/ioss-vs-vat-deferral）。**329 页 zero error**，commit `dc534c1` 已推 origin/main。数据诚信口径延续（VAT 税率/EORI/EU 统一关税/Red Sea Cape 绕行均经核实，费率标 MEDIUM、时效标 LOW）。

## 关键交付物（已入库 docs/）

- `architecture.md` — STEP 5–7 实施规范
- `keyword-map.md` — China→GCC 核心关键词（Route/Port/Method/Cost/Transit/Customs/FBA/Tools/长尾）
- `research-notes-2026-08-30.md` — Firecrawl 已验证数据 + 竞品矩阵 + 失败记录
- `competitor-gap.md` — Competitor Content Matrix + Gap Matrix（§16/§17 分类 + §19 评分）
- `content-roadmap.md` — Phase 1 约 50 页序列（Day 1–90）
- `daily-log.md` — 每夜生产日志

## 已验证核心数据（content 可用，标注 confidence）

- 沙特 VAT **15%**、阿联酋 VAT **5%**、GCC 统一关税基线 **5%**（CIF 计征）
- 上海港 55.06M TEU (2025) 全球第 1；宁波舟山 43M TEU 货物吞吐全球第 1
- **SABER SC 证书须到港前取得（2025-01-01 起）**——英文竞品无人提及的差异化情报

## 最高价值 Content Gap（下一阶段建设锚点）

1. **Demurrage/Detention + Hidden Charges**（竞品 0 覆盖）→ Freight Cost Calculator ✅ 已上线（2026-09-02，commit `1d2d49a`）
2. **SASO/SABER 步骤 + SC 新规**（合规权威差异化）
3. **Jeddah vs Dammam vs Jebel Ali 港口对比**（用户真实问题）

## 已解决冲突

- ~~沙特 de minimis~~（2026-09-01 解决）：**关税 de minimis = SAR 1,000**（个人/快递包裹，HIGH）；**VAT 15% 无 de minimis**（任何价值都征，HIGH）。Commenda「无」指 VAT，多源「SAR 1,000」指关税——口径不同，均已澄清。

## 下一优先级（明晚 03:30 cron）

1. ~~Freight Cost Calculator 工具~~ ✅ 已上线（2026-09-02，commit `1d2d49a`）
2. **Europe 走廊第二波**：Germany/UK ✅（commit `4d79478`）+ Netherlands/France ✅（commit `11b468a`：`shipping-from-china-to-netherlands` + `shipping-from-china-to-france`，Article 23 VAT 递延 / HAROPA Le Havre 差异化，9 模块，费率 MEDIUM、时效 MEDIUM/LOW，build 526 页零 error）+ Spain/Italy ✅（commit `eb02b45`：`shipping-from-china-to-spain` + `shipping-from-china-to-italy`，Valencia-vs-Rotterdam 到岸成本逻辑 / 意大利 22% VAT + 罢工缓冲差异化，9 模块，费率 MEDIUM、时效 LOW，build 528 页零 error）+ Poland/Belgium ✅（commit `13f1979`：`shipping-from-china-to-poland` + `shipping-from-china-to-belgium`，Gdańsk 海铁分流枢纽 / Antwerp 化工门户差异化，9 模块，费率 MEDIUM、时效 MEDIUM/LOW，build 530 页零 error）；**Europe Route Pillar 已覆盖全部 8 国（DE/UK/NL/FR/ES/IT/PL/BE）✅**；续：FCL vs LCL Europe 拆解、海运/铁路成本对比数据页
3. Cloudflare Pages 部署 + `middleeast` / `europe` 子站 subdomain 规划
4. Directory 继续扩充（当前 103 家，12 verified）→ 接 Qichacha/天眼查/国家企业信用信息公示系统 API 提级 verified
