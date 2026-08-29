# Competitor & Content Gap Analysis — China → GCC

> 更新：2026-08-30 (Day 1 夜间, STEP 10–12)
> 数据来源：Firecrawl Research 2026-08-30（`docs/research-notes-2026-08-30.md`）
> 原则：§15–§19。Gap = 竞品没写但有搜索需求+用户价值+商业价值的东西。

## 1. Competitor Content Matrix（§16）

Legend: ✅ covers / ❌ missing / ~ partial

| Site | Transit | Cost | Customs/VAT | Demurrage/Detention | SASO/SABER | Port comparison | Data methodology |
|---|---|---|---|---|---|---|---|
| ddpchain.com/saudi-arabia | ✅ | ✅ | ~ | ❌ | ❌ | ~ | ❌ |
| cargofromchina.com/china-saudiarabia | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| sino-shipping.com (SA) | ✅ | ✅ | ~ | ❌ | ❌ | ~ | ✅ |
| chinaddpshipping.com (SA DDP) | ✅ | ~ | ~ | ❌ | ❌ | ❌ | ❌ |
| freightos.com (Shanghai→Riyadh) | ✅ | ✅ | ~ | ❌ | ❌ | ❌ | ✅ |
| cargofromchina.com/china-uae | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| china.docshipper.com (China→UAE) | ✅ | ✅ | ✅ | ❌ | ~ | ✅ | ✅ |

**结论**：竞品普遍覆盖 Transit + Cost + Customs/VAT，但 **Demurrage/Detention 全 0 覆盖**、SASO/SABER 步骤全缺失、Data Methodology 几乎全缺。

## 2. Content Gap Matrix（§16/§17 分类）

| # | Gap 主题 | 分类(§17) | 搜索需求 | 竞品覆盖 | Gap Score(§19) | 优先级 |
|---|---|---|---|---|---|---|
| 1 | Demurrage & Detention（free-time、滞箱费、如何避免） | Cost Gap | 高 | 0/7 | ~85 | **HIGH** |
| 2 | Hidden / Destination Charges（THC、港杂费、清关费等拆解） | Cost Gap | 高 | 1/7 泛提 | ~85 | **HIGH** |
| 3 | SASO/SABER 步骤（PC vs SC、2025-01-01 新规） | Compliance Gap | 中高 | 0/7 | ~82 | **HIGH** |
| 4 | FASAH 单一窗口流程 | Compliance Gap | 中 | 0/7（只提名） | ~70 | MEDIUM |
| 5 | Jeddah vs Dammam vs Jebel Ali 港口对比 | Local/Comparison Gap | 高 | 1/7 浅 | ~80 | **HIGH** |
| 6 | Data Methodology & Freshness（来源/更新时间/假设） | Trust Gap | 中 | 2/7 | ~68 | MEDIUM |
| 7 | DDP 双清包税实操深度（含税含什么、风险转移、RMB 基准价） | Operational Gap | 高（中文网） | 1/7 | ~78 | HIGH |
| 8 | Excise tax 影响（烟草/能量/碳酸饮料附加税） | Compliance Gap | 低 | 0/7 | ~50 | LOW |

## 3. 最高价值 Gap（本阶段建设锚点）

1. **Demurrage/Detention + Hidden Charges**（Cost Gap）— 竞品 0 覆盖，商业意图强，直接通向 Freight Cost Calculator 工具（§20 Gap→Tool）。
2. **SABER SC 新规（2025-01-01 到港前须取得）** — 中文网独有情报，英文竞品无人提及，是 Authority + Trust 差异化王牌。
3. **Jeddah vs Dammam 港口对比** — 用户真实问题（"which Saudi port is better"），竞品仅浅提。

## 4. 已验证核心数据（可安全进入内容，标注 confidence）

| 项 | 值 | 来源 | confidence |
|---|---|---|---|
| 沙特 VAT | 15%（2020-07-01 起） | ZATCA/commenda | HIGH |
| 阿联酋 VAT | 5%（2018-01-01 起） | tax.gov.ae | HIGH |
| 沙特进口关税基线 | 5%（GCC 统一关税，CIF 计征） | 多源 | MEDIUM |
| 阿联酋进口关税 | 5%（GCC CET） | 多源 | MEDIUM-HIGH |
| 沙特 de minimis | SAR 1,000（个人快递） | 多源 | ⚠️ 冲突待核实 |
| 阿联酋 de minimis | Dhs 1,000（礼品 Dhs 3,000） | cargofromchina | MEDIUM |
| 上海港 | 55.06M TEU (2025)，全球第 1 | SIPG | HIGH |
| 宁波舟山港 | 43M TEU (2025)，货物吞吐量全球第 1 | 多源 | HIGH |
| 沙特港口 | 8.3M TEU (2025, +10.6%) | worldcargonews | MEDIUM |
| CN→SA 海运 | ~20–45 天 | 多源 | LOW（range 宽） |
| CN→UAE 海运 | 14–18 天 | cargofromchina | LOW |
| SABER SC 规则 | SC 证书须到港前取得（2025-01-01 起） | fuxin.gov.cn（辽宁贸促会） | MEDIUM-HIGH |

## 5. 待核实冲突（下次研究优先）

- **沙特 de minimis**：Commenda 说"无"，tariffdutycalculator/cargofromchina 说 SAR 1,000 → 需 ZATCA 一手确认。
- 竞品运价均为 snapshot（不同月份、不同口径），不可直接对比，仅作量级参考。

## 6. 失败来源（§55 记录，不再重试）

- mawani.gov.sa（WAF 拦截）
- dubaicustoms.gov.ae（代理错误→首页无税率）
- sino-shipping.com（Cloudflare 拦截）
- ZATCA 首页不直接显示 15%
