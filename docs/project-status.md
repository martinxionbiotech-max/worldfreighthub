# WorldFreightHub — Project Status

> 最后更新：2026-09-01 06:15 (Asia/Shanghai)

## 核心信息

| 项 | 值 |
|---|---|
| 域名 | `worldfreighthub.net`（主站） |
| 子站 | `middleeast.worldfreighthub.net`（第一阶段，China → GCC） |
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
- [ ] STEP 16–20 内容 + 工具 + Directory + Ad + Quote（内容进行中：Saudi 15 页 ✅ / UAE 12 页+3 工具 ✅ / Qatar 4 页 ✅ / Kuwait 4 页 ✅ / Oman 4 页 ✅ / Bahrain 4/4 页 ✅ —— **六国核心内容页全齐**；Directory/Ad/Quote 未开始）
- [ ] STEP 21–25 SEO/AIO/EEAT + Build + Commit + Deploy（Cloudflare）+ 文档

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

1. **Demurrage/Detention + Hidden Charges**（竞品 0 覆盖）→ 通向 Freight Cost Calculator
2. **SASO/SABER 步骤 + SC 新规**（合规权威差异化）
3. **Jeddah vs Dammam vs Jebel Ali 港口对比**（用户真实问题）

## 待核实冲突

- 沙特 de minimis：Commenda「无」vs 多源「SAR 1,000」→ 需 ZATCA 一手确认

## 下一优先级（明晚 03:30 cron）

1. **Day 36–50 收尾 ✅**：Bahrain 簇已完成 4/4 页（Route Pillar + Customs/Duty + `bahrain-ports` + Cost/Transit）—— 六国（Saudi/UAE/Qatar/Kuwait/Oman/Bahrain）核心内容页全齐；下一步进入 STEP 18–20（Directory / Ad Slots / Quote Framework）+ STEP 21–25（SEO/AIO/EEAT 终审）
2. Cloudflare Pages 部署 + `middleeast` 子站 subdomain 规划
3. 解决 Saudi de minimis 冲突（ZATCA 一手确认）
4. STEP 21–25：SEO/AIO/EEAT 终审 + Directory + Ad + Quote + 部署文档
