# WorldFreightHub — GSC 驱动优化审计报告（2026-09-24）

**执行模式**：审计 → 盘点 → 诊断 → 优先 → 提案 → 安全增量修改 → 构建测试 → 报告。结束后内容生产保持暂停。

---

## SECTION 1 — Current Topical Architecture

主站定位「China to GCC freight intelligence」明确，首页 title/H1/TL;DR 均以 GCC 为主（已验证）。簇结构：middleeast 71 页 · ar 79 · europe 35 · evidence 9 · tools 7 · glossary/directory/ports/routes/methods 数据驱动页。知识实体链（Data→Evidence→Entity→Route→Port→Country→Provider→Quote→Intelligence）已成型。

## SECTION 2 — GCC Authority Status ✅ 健康

- 6 国全覆盖：Saudi/UAE/Qatar/Kuwait/Oman/Bahrain 国家页 + customs-duty 专项页 + 港口页 + 路线页
- GSC 印证：oman-customs-duty 126、qatar 122、hamad-port 103、bahrain 77、kuwait 66 曝光
- 首页 TL;DR 纯 GCC 统计（21 航线/6 国税务三档），未混 Europe ✅ §21 合规

## SECTION 3 — Europe Status

Europe 35 页已存在、全部 200、正常收录（GSC：genoa 58 曝光、UK 51）。按任务书执行 **FROZEN/OBSERVATION**：不新建、不删除、不 noindex、不重写。现状天然符合，无动作。

## SECTION 4 — Directory Status ⭐ 核心资产

/directory/ = **4 clicks / 585 impressions**（全站最强信号）。结构：103 provider 列表 + 每供应商 LocalBusiness schema + LEVEL 1-4 验证体系。13 个 GSC 曝光条目中 2 个是供应商详情页（huanji 161、sanqi 3）——Google 正在大量测试供应商实体页。内链 110 条实体链接健康。

## SECTION 5 — Glossary Status ⭐ 高曝光低点击

telex-release（251 曝光/0 点击）、fcl（196/0）。页面结构已完备：DefinedTerm+FAQPage schema、What it means/Why it matters/Example/Related terms 四段、每页 10 条实体内链。零点击原因推断为排名位次低（informational 意图），非页面质量问题。**无需重写**，仅观察。

## SECTION 6 — Port Status

shuwaikh 85、khalifa 69、riyadh-dry-port 60、shenzhen 41 曝光。Place+PostalAddress schema、11 条内链。已健康。

## SECTION 7 — Customs Status

Oman/Qatar/Bahrain/Kuwait 四 customs 页共 391 曝光。每页 Article+FAQPage schema、7 条内链、title 带数字锚点（×1.1025 / ×1.05）。已健康。

## SECTION 8 — GSC Opportunity Analysis

| 模式 | 页面 | 动作 |
|---|---|---|
| 高曝光+点击（4/585）| /directory/ | 强化 hub 页结构（见 §10）|
| 高曝光+0 点击 | glossary ×2、customs ×4、ports ×3 | 观察 2 周，不盲目改 title |
| 中等曝光 | oman route 44、UK 51、genoa 58 | 监控 |
| 供应商详情页 | huanji 161 | 检查该页是否有可加强点 |

按任务书 §24：低 CTR 不自动等于坏页面——informational 意图 + 低排名是主因，不追逐点击率。

## SECTION 9 — Cannibalization Risks

Oman 页面群（5 页）意图分离验证 ✅：
- shipping-from-china-to-oman（总览路由）
- shipping-cost-transit-time（成本/时效专项）
- oman-ports（港群情报）
- oman-customs-duty（关税专项）
- air-freight-from-china-to-oman（空运专项）
title 锚点各自独立，无同意图竞争。其他 GCC 国结构相同，无发现。

## SECTION 10 — Pages Requiring Immediate Incremental Optimization

**唯一一项**：/directory/ hub 页。理由：585 曝光是最大信号，且 §7 要求 Directory 成为战略支柱。改进（additive，不改 URL）：
1. hub 顶部加「按国家/港口筛选」锚点区（指向现有国家/港口页，强化 entity graph）
2. 供应商卡片已有 verification 徽标——补一行「Updated {lastVerified}」

其余 12 个 GSC 曝光页**不动作**（结构已优于基线，等 2 周数据再评估）。

## SECTION 11 — Recommended New Content Queue（≤20 页，不发布）

基于 GSC 缺口 + GCC 实体缺口，候选队列（全部 Create/Hold 状态，待批准后才写）：

| # | 提议页 | 依据 | 优先级 |
|---|---|---|---|
| 1 | China origin port 深度页：Shenzhen（已有 41 曝光→扩）| GSC 信号 + 起运港实体缺口 | P2 |
| 2 | China→Jeddah 路线页 | 起运-目的港关系缺口 | P3 |
| 3 | China→Jebel Ali 路线页 | 同上 | P3 |
| 4 | FCL 报价解读指南（supporting page for /glossary/fcl/ 196 曝光）| §25-D 高曝光页支撑 | P4 |
| 5 | Telex Release vs Sea Waybill vs Original B/L 对比 | glossary 251 曝光的实体扩展 | P4 |
| 6-10 | 港口对比页（Jebel Ali vs Khalifa 已有；Dammam vs Jeddah、Shuwaikh vs Shuaiba）| 决策意图缺口 | P5 |
| 11-14 | 各国 customs-duty 页的 HS code 专项小节扩充 | 关税意图深化 | P1 |
| 15-20 | 预留（不指定，等 GSC 下一轮数据）| — | Hold |

## SECTION 12 — Pages That Should NOT Be Created

- ❌ Europe 任何新国家/港口/路线页（冻结期）
- ❌ 泛「shipping from China to X」模板页（无独立决策变量者）
- ❌ 纯关键词匹配的 glossary 长尾（如「what is telex release in shipping」类）
- ❌ Africa/SEA/Americas 走廊页（战略未批准）

## SECTION 13 — Internal Linking Improvements

现有实体图已健康（高曝光页 7-110 条）。增量：
1. Directory hub → 国家页（6 国）锚点区（§10 同步实施）
2. 供应商详情页 → 其 serviceCountries 对应 customs-duty 页互链（检查：huanji 服务沙特/阿联酋/科威特/卡塔尔/阿曼/也门——确认详情页已链向这些国家的 customs 页，缺则补）

## SECTION 14 — Schema Improvements

现状已达标（Article/FAQPage/DefinedTerm/Place/LocalBusiness/ItemList/Dataset 齐全）。无新增 schema 需求。不伪造 FAQ/Product/Offer。

## SECTION 15 — Homepage Recommendations

首页已完美对齐「China → GCC 主定位」（title/H1/TL;DR 验证通过）。**零改动**。

## SECTION 16 — Europe Freeze Strategy

- 现有 35 页：保持 crawlable/indexable，零动作
- 不新建、不 noindex、不改 URL、不重写
- 观察 GSC 4 周后由项目主决策是否解冻

## SECTION 17 — 30-Day Content Plan

| 周 | 动作 |
|---|---|
| W1 | 本报告 + Directory hub 增量优化（§10）+ 供应商→customs 互链检查 |
| W2 | 观察 GSC：glossary/customs/ports 曝光页 CTR 变化 |
| W3 | 若信号支持：写队列 P1（customs HS 专项）+ P2（Shenzhen 深度页），每批 ≤2 页 |
| W4 | GSC 前后对比 → 决策 Europe 解冻与否 + 队列 P3-P5 是否启动 |

## SECTION 18 — Change Log

| 日期 | 变更 | Commit |
|---|---|---|
| 2026-09-24 | 本审计报告 | （docs commit）|
| 2026-09-24 | Directory hub 锚点区 + verified 日期行 | （见实施 commit）|
| 2026-09-24 | 供应商→customs 互链补齐 | （见实施 commit）|

---

**状态声明**：WFH 无自动内容生产工作流（package.json 无 cron），内容生产保持暂停。本任务到此为止，等下一轮 GSC 数据或人工批准再动。
