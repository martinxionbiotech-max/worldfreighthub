# AIO Architecture Decision — worldfreighthub.net

- 执行日期：2026-09-08
- 模式：黑盒审计（无仓库/源码访问）——本轮未改任何代码，以下为审计结论 + 建议。

## Site Overview

- URL: https://worldfreighthub.net/
- 架构: Astro 静态站
- 托管: Cloudflare（server: cloudflare, cf-cache-status: DYNAMIC）
- 分类: 内容站 + 知识库 + 数据集 + 目录 + 工具（计算器）+ 获客（get-quote）
- 多语言: EN + AR（无 hreflang 交替）

## Capability Graph

- Content: 57 中东指南 + 77 航线 + 29 港口（置信度标注）
- Knowledge Hub: methodology / editorial-policy / glossary(28)
- Data: 21 航线费率 + 103 货代 + 19 港口（结构化但无独立机器可读文件）
- Tools: CBM / 装箱 / 体积重计算器（客户端）
- Directory: 103 货代（verification-first）
- Lead-gen: get-quote 表单（非 API）
- API: 无
- Subdomains: 无（仅 www）
- Agent: 无 WebMCP/MCP/A2A

## SEO/AIO/Agent Audit（已存在，实测验证）

- ✅ llms.txt（4867 字节，结构完整）
- ✅ Schema.org（3 块 JSON-LD：FAQPage 6 组问答、Organization、WebSite、Person、ContactPoint、ImageObject）
- ✅ robots.txt（GPTBot/ClaudeBot/Google-Extended/PerplexityBot/Bytespider/Baiduspider/CCBot 全 Allow）

## Decision Matrix

| Capability | Exists | Decision | Reason |
|---|---|---:|---|---|
| Semantic HTML | ✅ | REQUIRED | Astro 静态 + 结构化内容 |
| Schema.org | ✅ | REQUIRED | 已实现，可小幅增强 |
| llms.txt | ✅ | RECOMMENDED | 已实现 |
| Markdown 内容 | ✅ | RECOMMENDED | 源码 MDX，公开 HTML |
| Markdown 协商 | ❌ | NOT_REQUIRED | llms.txt 已覆盖 AI 消费；静态站加 Vary:Accept 缓存变体不值 |
| Dataset | ⚠️ | RECOMMENDED | 唯一建议新增：构建期静态 JSON |
| API | ❌ | NOT_REQUIRED | 无公开 API（get-quote 是表单） |
| OpenAPI | ❌ | NOT_REQUIRED | 无 API |
| API Catalog | ❌ | NOT_REQUIRED | 无可广告 API |
| Link Headers | ❌ | NOT_REQUIRED | 无 API Catalog/OpenAPI |
| WebMCP | ❌ | NOT_REQUIRED | 计算器是简单客户端数学 |
| MCP Server | ❌ | NOT_REQUIRED | 静态站无后端 |
| MCP Card | ❌ | NOT_REQUIRED | 无 MCP |
| OAuth/OIDC | ❌ | NOT_REQUIRED | 无受保护资源 |
| A2A | ❌ | NOT_REQUIRED | 无真实 agent |
| Agent Card | ❌ | NOT_REQUIRED | 无 A2A |

## Implemented

- llms.txt（已验证 200/text-plain）
- Schema.org（FAQPage/Organization/WebSite/Person/ContactPoint）
- robots.txt AI 全放行

## Not Implemented（有意不做）

- Markdown 协商 / API / OpenAPI / API Catalog / Link Headers / WebMCP / MCP / MCP Card / OAuth / A2A / Agent Card
- 理由：静态内容站无后端、无 agent、无受保护资源；llms.txt 已覆盖 AI 消费主路径。

## Validation

- HTTPS/HTTP 200 ✅ · llms.txt ✅ · Schema.org ✅ · robots.txt AI ✅
- Markdown 协商 ❌（有意）· /.well-known/* 404（有意）

## Security

- 无公开 API/密钥暴露风险
- ⚠️ access-control-allow-origin: *（静态站影响有限，加 API 前需收紧）
- 🔴 footprint：llms.txt 含 Martin.Wong / +86 13323237275 / martin@dinweys.com，与 chengguangenergy、migibio 撞车 → 需隔离

## Performance

- 纯静态 + Cloudflare CDN，cache-control public 3600s，性能无碍
- 建议 Dataset 用构建期静态 JSON，零运行时成本

## SEO Impact

- 现状已是 AI 友好范本；Dataset JSON 会进一步提升 AI 引用精确度，不伤 SEO
- 遗留：EN↔AR 无 hreflang

## Future Opportunities

- P0: 隔离站群 footprint（llms.txt/联系信息跨站撞车）
- P1: Dataset 静态 JSON（routes/ports/providers 三个文件，含 confidence+source 字段）
- P2: EN↔AR hreflang；Schema.org 加 BreadcrumbList/Dataset；llms.txt 链接改指 .md
- P3: 若计算器做重，再评估 WebMCP
