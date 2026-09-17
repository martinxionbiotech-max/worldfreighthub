import type { Locale } from './ui';

/**
 * 构建期扫描真实存在的页面树，推导"每种语言真的拥有哪些路由"。
 *
 * 背景（GSC 404 根因）：BaseLayout 的 hreflang 与 Header 的语言切换器原先假定
 * "任何页面都有 /ar/ 版本"（localizePath 直接加前缀），于是 /intelligence/、
 * /evidence/、/corrections/、/data-changelog/、/provider-verification-policy/
 * （以及历史上已删除的 /europe/* 集群）会被输出 hreflang="ar" → /ar/xxx/，
 * Google 顺着 hreflang 抓到一堆**从未存在过**的 /ar/... URL，在 GSC 里堆成 404。
 *
 * 规则：**只有存在对应译版时才输出 hreflang / 语言链接**。
 * 未来新增区域（/asia/、/africa/…）若无阿语版，本机制自动生效，无需再改代码。
 */

const pageFiles = Object.keys(import.meta.glob('/src/pages/**/*.astro'));

function toPattern(file: string, base: string): string | null {
  if (!file.startsWith(base)) return null;
  let p = file.slice(base.length).replace(/\.astro$/, '').replace(/\/index$/, '/');
  if (!p.endsWith('/')) p += '/';
  return '/' + p.replace(/^\/+/, '');
}

function patternToRegex(pattern: string): RegExp {
  const parts = pattern
    .split('/')
    .filter(Boolean)
    .map((seg) =>
      seg.startsWith('[') && seg.endsWith(']')
        ? '[^/]+'
        : seg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    );
  return new RegExp('^/' + (parts.length ? parts.join('/') + '/' : '') + '$');
}

/** /ar/** 下真实存在的路由模式（含动态段，如 /middleeast/[slug]/） */
const arPatterns = pageFiles
  .map((f) => toPattern(f, '/src/pages/ar/'))
  .filter((p): p is string => !!p);

const arRegexes = arPatterns.map(patternToRegex);

/** 该语言的站点根路径（用于"无译版时回退到语言首页"） */
export function localeHub(locale: Locale): string {
  return locale === 'ar' ? '/ar/' : '/';
}

/**
 * 给定"某语言前缀下的具体路径"（如 /methods/air-freight/），判断该语言是否真有此页。
 * 注意：传入的 pathname 必须是**去掉语言前缀后**的主站路径。
 */
export function hasLocalePath(pathname: string, locale: Locale): boolean {
  if (locale === 'en') return true; // 英文为主版本
  const p = pathname.endsWith('/') ? pathname : `${pathname}/`;
  return arRegexes.some((rx) => rx.test(p));
}
