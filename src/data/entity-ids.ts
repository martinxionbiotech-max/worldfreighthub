/**
 * entity-ids.ts — stable entity identifiers (WFH Phase 3 P1).
 *
 * One canonical ID scheme across the whole site so pages, JSON-LD @id values
 * and internal links all reference the same entity identity.
 *
 *   country_id  — ISO 3166-1 alpha-2 (already authoritative in data files)
 *   port_id     — UN/LOCODE where available (authoritative); fallback slug
 *   route_id    — <origin port UN/LOCODE>-<destination port UN/LOCODE>
 *                 e.g. CNSHA-SAJED (Shanghai → Jeddah)
 *   provider_id — WH-P-### (stable order: GCC directory first, then Europe)
 *   rate_id     — RATE-<YYYYMMDD>-<seq> derived from quote id
 *
 * These are deterministic: derived from existing data files, never invented.
 */
import { directoryProviders } from './directory';
import { europeDirectoryProviders } from './europe/europe-directory';
import { gccPorts } from './gcc-ports';
import { europePorts } from './europe/europe-ports';
import { gccCountries } from './gcc-countries';
import { europeCountries } from './europe/europe-countries';
import quotesJson from './freight-quotes.json';

// ── Country ────────────────────────────────────────────────────────────
export function countryId(countrySlug: string): string | null {
  const all = [...gccCountries, ...europeCountries];
  const c = all.find((x) => x.slug === countrySlug);
  return c?.iso2 ?? null;
}

// ── Port ──────────────────────────────────────────────────────────────
const portUnlocode = new Map<string, string>();
for (const p of [...gccPorts, ...europePorts]) {
  if (p.unlocode) portUnlocode.set(p.slug, p.unlocode.toUpperCase());
}

/**
 * 报价库中出现的起运/目的港别名 → 真实 UN/LOCODE。
 * 数据文件（gcc-ports/china-ports）不含这些 slug（如 shekou、khor-fakkan、
 * umm-qasr、bandar-abbas、european-base-ports 集合概念），逐一映射到真实代码。
 * european-base-ports 是多港集合 → null（不猜单港）。
 */
const PORT_ALIASES: Record<string, string | null> = {
  // 起运港（真实 UN/LOCODE）
  shekou: 'CNSHK',
  nansha: 'CNNSA',
  ningbo: 'CNNGB',
  shanghai: 'CNSHA',
  yantian: 'CNYTN',
  qingdao: 'CNTAO',
  // 目的港别名
  'khor-fakkan': 'AEKLF',
  'hamad-port': 'QAHMD',
  'umm-qasr': 'IQUQR',
  'bandar-abbas': 'IRBND',
  // 集合概念（多港）→ 不映射单港
  'european-base-ports': null,
};

export function portId(portSlug: string): string | null {
  const key = String(portSlug).toLowerCase().trim();
  if (key in PORT_ALIASES) return PORT_ALIASES[key];
  return portUnlocode.get(key) ?? null;
}



// ── Route ─────────────────────────────────────────────────────────────
/**
 * routeId('shanghai-jeddah') → 'CNSHA-SAJED'
 * Accepts either a route slug ('shanghai-jeddah') or a freight-quote
 * route slug ('shekou-to-jebel-ali').
 */
export function routeId(routeSlug: string): string | null {
  let origin: string;
  let dest: string;
  if (routeSlug.includes('-to-')) {
    [origin, dest] = routeSlug.split('-to-');
  } else {
    const parts = routeSlug.split('-');
    if (parts.length < 2) return null;
    origin = parts[0];
    dest = parts.slice(1).join('-');
  }
  const o = portId(origin);
  const d = portId(dest);
  if (!o || !d) return null;
  return `${o}-${d}`;
}

// ── Provider ──────────────────────────────────────────────────────────
const providerOrder = [
  ...directoryProviders.map((p) => p.slug),
  ...europeDirectoryProviders.map((p) => `europe-${p.slug}`),
];

const providerIndex = new Map<string, number>();
providerOrder.forEach((slug, i) => providerIndex.set(slug, i + 1));

export function providerId(providerSlug: string, isEurope = false): string | null {
  const key = isEurope ? `europe-${providerSlug}` : providerSlug;
  const idx = providerIndex.get(key);
  return idx ? `WH-P-${String(idx).padStart(3, '0')}` : null;
}

// ── Rate ──────────────────────────────────────────────────────────────
const quotes = Array.isArray(quotesJson.quotes) ? quotesJson.quotes : [];

const rateIndex = new Map<string, number>();
let seq = 0;
for (const q of quotes) {
  seq += 1;
  rateIndex.set(q.id, seq);
}

/** rateId('q-20260922-1850-shanghai-to-dubai-jebel-ali') → 'RATE-20260922-001' */
export function rateId(quoteId: string): string | null {
  const m = /^q-(\d{8})-/.exec(quoteId);
  if (!m) return null;
  const idx = rateIndex.get(quoteId);
  if (!idx) return null;
  return `RATE-${m[1]}-${String(idx).padStart(3, '0')}`;
}

/** Full @id URL for JSON-LD, e.g. https://worldfreighthub.net/#route-CNSHA-SAJED */
export const ENTITY_BASE = 'https://worldfreighthub.net';

export function entityUrl(id: string): string {
  return `${ENTITY_BASE}/#entity-${id}`;
}
