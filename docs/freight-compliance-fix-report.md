# 合规修复批报告 — worldfreighthub.net（freight 站）

> 日期：2026-10-23 · 角色：合规法律内容编辑 + 技术 SEO
> 仓库：worldfreighthub · 依据：worldbatteryhub.com 仓 `docs/compliance-audit-battery-freight.md` §2 / §3.2（freight 缺口清单）
> 主体口径：沿用真实披露 YIWU DINGWEI TRADING COMPANY（不编造新增字段）

---

## 0. 执行前状态

- 站点已完整披露法人实体 + 地址 + 统一社会信用代码（掩码）+ contactPoint，四处（about / evidence / company / schema）口径一致。
- 缺口（对照审计 §3.2）：**P0 缺 disclaimer**；privacy(428)/terms(468)/cookie(248)/contact(209) 偏薄；报价时效（quote expiry）全站缺失。

## 1. 词数（前 → 后，`wc -w` 原始文件口径）

| 页面 | 前 | 后 | 说明 |
|---|---|---|---|
| privacy-policy | 428 | **1733** | 15 节，补 GDPR 法律依据/跨境传输/留存/儿童/安全/权利细则/DPA（formsubmit.co） |
| terms-of-use | 468 | **1510** | 19 节，补管辖法=中国/责任上限/可分割性/争议解决/完整担保免责/赔偿/弃权 |
| cookie-policy | 248 | **1508** | 11 节，分类逐项表 + 存续期 + 浏览器级管理 + GDPR/ePrivacy 同意说明 |
| disclaimer | ❌ 缺失 | **1525** | 新建 16 节货运行业免责页 |
| about | 963 | 1028 | 微补：法律互链块 + 日期戳（主体披露已强，未动口径） |
| contact | 209 | 588 | 增厚：询价主渠道 + 响应预期(1–2 工作日可兑现) + 不做事项 + 主体署名 + 日期戳 |

## 2. 新建 disclaimer 行业条款清单

| 条款 | 内容 |
|---|---|
| §1 信息性用途 | 仅信息/研究资源，非承运人/货代/报关行/法律顾问，不构成承运要约 |
| §2 估算非承诺 | 运价/时效/关税/VAT 均为指示性参考估算（HIGH/MED/LOW 置信），非承诺 |
| §3 报价非要约且会过期 | 报价以**书面订舱确认为准**；受重量/舱位/燃油/汇率/有效期约束 |
| §4 第三方承运人责任边界 | 承运合同在用户与承运人间，站点非合同方，不经手货物/运费/保费 |
| §5 港口/关税/目的地费用变化 | 关税/VAT/港口费/滞期费可无通知变动，HS 分类/估值/附加费影响 |
| §6 非物流/法律/贸易合规建议 | 认证(SABER/SASO)/危货规则仅供参考，用户自负合规责任 |
| §7 准确性 | 置信标签≠正确性保证，数据可能滞后市场 |
| §8 危险品/认证特规 | 电池/化学品/危货须自查 UN 分类/包装/标签 |
| §9 汇率 | 多币种展示为出版时汇率估算，实际以承运约定为准 |
| §10 不可抗力 | 天气/港口关闭/罢工/海关扣留/冲突/公共卫生事件不保证时效 |
| §11 无担保 / §12 责任限制 / §13 更正通道 / §14 变更 / §15 管辖法+可分割 / §16 联系 |

## 3. 主体一致性核验

- **六页主体口径**：privacy/terms/cookie/disclaimer/about/contact 全部携带 `YIWU DINGWEI TRADING COMPANY`（cookie 页新增引入）。✅
- **联系口径**：`martin@dinweys.com` / `+86 13323237275` 与 `CONTACT` 常量一致。✅
- **日期统一**：六页均 `Last updated: 23 October 2026`。✅
- **互链**：legal 页互相引用 Related policies；footer legal 列新增 Disclaimer 入口（en/ar 双语）。✅
- **schema 不回归**：修复了本次 `git pull` 上游引入的回归——`site.ts` 信用代码中混入 `\x17` 控制字符 + `ORGANIZATION_SCHEMA` 丢失 `identifier` 块；已恢复为 `92330782MA8GW3P***`（掩码）+ 完整 identifier PropertyValue。✅

## 4. 构建

- `npm run build`：✅ 726 pages，8.2s，exit 0。
- 渲染验证：`dist/disclaimer/index.html` 存在；六页日期/主体/信用代码/JSON-LD identifier 均通过 grep 核验。

## 5. Commit（compliance-fix-* 标记，逐页）

1. `compliance-fix-privacy-policy`
2. `compliance-fix-terms-of-use`
3. `compliance-fix-cookie-policy`
4. `compliance-fix-disclaimer`（新建）
5. `compliance-fix-about-contact`
6. `compliance-fix-footer-nav`
7. `compliance-fix-schema`（上游回归修复）

---

*遗留（P2，未在本批处理）：阿语版 legal 页缺失（footer 硬编码英文）；统一社会信用代码掩码（诚实已声明，可选发布完整码）。*
