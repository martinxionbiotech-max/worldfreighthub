/**
 * Freight Quote data layer — shared types & pure helpers.
 *
 * Pure ESM (.mjs) so BOTH Astro build and the node CLI (`scripts/freight-add.mjs`)
 * can import it without a transpiler.
 *
 * Data principle (doc §3/§35):
 *   - quotes.json keeps ALL validated records permanently (historical database)
 *   - the homepage renders only a recent window (default 5 days)
 *   - expiry never deletes a record; it only changes its display status
 */

// ── Types ──────────────────────────────────────────────────────────────

/** Quote statuses (doc §10). `expired` is computed at read time, not stored. */
export const QUOTE_STATUSES = ['draft', 'validated', 'published', 'expired', 'archived'];

export const QUOTE_TYPES = [
  'Indicative Freight Quote',
  'Freight Forwarder Quote',
  'Historical Quote',
  'Market Reference',
];

export const SOURCE_TYPES = ['Freight Forwarder', 'Direct Quote', 'User Provided', 'Other'];

export const EQUIPMENT_VALUES = ['20GP', '40GP', '40HQ', '40HC', 'LCL', '20ft FCL', '40ft FCL'];

export const ISO_CURRENCIES = new Set(['USD', 'EUR', 'CNY', 'GBP', 'AED', 'SAR', 'JPY', 'HKD', 'SGD', 'AUD', 'CAD']);

// Region classification: country name → region slug. Extend for future regions.
export const REGION_COUNTRY_MAP = {
  'Saudi Arabia': 'middle-east',
  'United Arab Emirates': 'middle-east',
  UAE: 'middle-east',
  Qatar: 'middle-east',
  Kuwait: 'middle-east',
  Bahrain: 'middle-east',
  Oman: 'middle-east',
  Jordan: 'middle-east',
  Iraq: 'middle-east',
  Egypt: 'middle-east',
  Iran: 'middle-east',
  Turkey: 'middle-east',
  Germany: 'europe',
  Netherlands: 'europe',
  Belgium: 'europe',
  France: 'europe',
  Spain: 'europe',
  Italy: 'europe',
  Poland: 'europe',
  'United Kingdom': 'europe',
  UK: 'europe',
  Sweden: 'europe',
  Denmark: 'europe',
  Norway: 'europe',
  Finland: 'europe',
  Greece: 'europe',
  'Czech Republic': 'europe',
  Hungary: 'europe',
  Romania: 'europe',
  Austria: 'europe',
  Switzerland: 'europe',
};

/** Region list — initial regions only (doc §12). */
export const REGIONS = ['middle-east', 'europe'];

export const DEFAULT_WINDOW_DAYS = 5;

/** Route pages become indexable only above this many published quotes (doc §13). */
export const MIN_ROUTE_QUOTES_FOR_INDEXING = 2;

export function classifyRegion(destinationCountry) {
  if (!destinationCountry) return null;
  const key = Object.keys(REGION_COUNTRY_MAP).find(
    (k) => k.toLowerCase() === String(destinationCountry).trim().toLowerCase(),
  );
  return key ? REGION_COUNTRY_MAP[key] : null;
}

export function slugify(s) {
  return String(s ?? '')
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** china-to-dubai style route slug. Prefer port cities when present. */
export function routeSlug(quote) {
  const origin = slugify(quote.origin_port || quote.origin_country);
  const dest = slugify(quote.destination_port || quote.destination_country);
  return `${origin}-to-${dest}`;
}

export function regionSlug(quote) {
  return quote.region_slug || classifyRegion(quote.destination_country) || null;
}

/** Duplicate key (doc §11): origin+destination+equipment+rate+quote_date+validity. */
export function duplicateKey(quote) {
  return [
    slugify(quote.origin_port || quote.origin_country),
    slugify(quote.destination_port || quote.destination_country),
    slugify(quote.equipment),
    String(quote.rate),
    quote.currency,
    quote.quote_date,
    quote.valid_until ?? '',
  ].join('|');
}

// ── Validation (doc §10/§34/§36) ──────────────────────────────────────

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const todayISO = () => new Date().toISOString().slice(0, 10);

export function validateQuote(input) {
  const errors = [];
  const warnings = [];

  // Critical: never guess. Missing origin/destination/rate → do not publish.
  if (!input.origin_country && !input.origin_port) errors.push('Origin (country or port) is missing.');
  if (!input.destination_country && !input.destination_port) errors.push('Destination (country or port) is missing.');
  if (input.rate === undefined || input.rate === null || input.rate === '') {
    errors.push('Rate is missing.');
  } else {
    const r = Number(input.rate);
    if (!Number.isFinite(r) || r <= 0) errors.push('Rate must be a positive number.');
  }
  if (!input.currency) {
    errors.push('Currency is missing — refusing to assume USD.');
  } else if (!ISO_CURRENCIES.has(String(input.currency).toUpperCase())) {
    errors.push(`Currency "${input.currency}" is not a recognised ISO code.`);
  }

  // Dates
  const checkDate = (v, label) => {
    if (v === undefined || v === null || v === '') return;
    if (!DATE_RE.test(String(v))) { errors.push(`${label} must be YYYY-MM-DD.`); return; }
    if (String(v) > '2100-01-01' || String(v) < '2000-01-01') errors.push(`${label} is outside a plausible range.`);
    if (String(v) > todayISO()) warnings.push(`${label} is in the future.`);
  };
  checkDate(input.quote_date, 'Quote date');
  checkDate(input.valid_from, 'Valid from');
  checkDate(input.valid_until, 'Valid until');
  if (DATE_RE.test(String(input.valid_from ?? '')) && DATE_RE.test(String(input.valid_until ?? ''))
    && input.valid_from > input.valid_until) {
    errors.push('Valid from is after valid until.');
  }
  if (!input.quote_date) {
    errors.push('Quote date is missing — provide the date the quote was received.');
  }

  // Equipment: ambiguous → warning, not error (doc §10).
  if (!input.equipment) {
    warnings.push('Equipment is missing — flagged for confirmation.');
  } else if (!EQUIPMENT_VALUES.includes(input.equipment)) {
    warnings.push(`Equipment "${input.equipment}" is not a standard value — flagged for confirmation.`);
  }

  // Enums
  if (input.quote_type && !QUOTE_TYPES.includes(input.quote_type)) {
    warnings.push(`quote_type "${input.quote_type}" is non-standard; defaulting to "Indicative Freight Quote".`);
  }
  if (input.source_type && !SOURCE_TYPES.includes(input.source_type)) {
    warnings.push(`source_type "${input.source_type}" is non-standard; defaulting to "Other".`);
  }

  return { ok: errors.length === 0, errors, warnings };
}

/**
 * Normalize a raw agent input into the canonical record.
 * Call only after validateQuote() returns ok (or fix the errors).
 */
export function normalizeQuote(input, existing = []) {
  const rate = Number(input.rate);
  const quoteDate = String(input.quote_date);
  const now = new Date().toISOString();

  const quote = {
    id: `q-${quoteDate.replaceAll('-', '')}-${String(rate)}-${routeSlug(input)}`,
    quote_date: quoteDate,
    origin_country: input.origin_country || null,
    origin_region: input.origin_region || null,
    origin_port: input.origin_port || null,
    destination_country: input.destination_country || null,
    destination_region: input.destination_region || null,
    destination_port: input.destination_port || null,
    route: routeSlug(input),
    equipment: input.equipment || null,
    container_size: input.container_size || null,
    rate,
    currency: String(input.currency).toUpperCase(),
    quote_type: QUOTE_TYPES.includes(input.quote_type) ? input.quote_type : 'Indicative Freight Quote',
    source_type: SOURCE_TYPES.includes(input.source_type) ? input.source_type : 'Other',
    valid_from: input.valid_from || null,
    valid_until: input.valid_until || null,
    notes: input.notes || '',
    forwarder_reference: input.forwarder_reference || null,
    service_type: input.service_type || null,
    shipping_line: input.shipping_line || null,
    transit_time: input.transit_time || null,
    free_days: input.free_days ?? null,
    subject_to: input.subject_to || null,
    source_note: input.source_note || null,
    data_confidence: input.data_confidence || null,
    raw_input: input.raw_input || null,
    normalized_input: null,
    region_slug: regionSlug(input),
    route_slug: routeSlug(input),
    equipment_slug: input.equipment ? slugify(input.equipment) : null,
    created_at: now,
    updated_at: now,
    status: input.status && QUOTE_STATUSES.includes(input.status) ? input.status : 'published',
  };

  // Duplicate detection (doc §11): identical key → mark duplicate, do not create twice.
  const key = duplicateKey(quote);
  const isDuplicate = existing.some((q) => duplicateKey(q) === key);
  if (isDuplicate) {
    quote.status = 'draft';
    quote.notes = (quote.notes ? quote.notes + ' ' : '') + '[DUPLICATE: matches an existing record]';
  }

  return { quote, duplicate: isDuplicate };
}

// ── Read helpers (used by pages) ───────────────────────────────────────

export function effectiveStatus(quote, now = todayISO()) {
  if (quote.status === 'archived' || quote.status === 'draft') return quote.status;
  if (quote.valid_until && quote.valid_until < now) return 'expired';
  return 'published';
}

/** Recent window used by the homepage (doc §15). */
export function recentQuotes(quotes, windowDays = DEFAULT_WINDOW_DAYS, now = new Date()) {
  const cutoff = new Date(now.getTime() - windowDays * 86400000).toISOString().slice(0, 10);
  return quotes
    .filter((q) => (q.status === 'published' || q.status === 'validated') && q.quote_date >= cutoff)
    .sort((a, b) => (b.quote_date < a.quote_date ? -1 : b.quote_date > a.quote_date ? 1 : b.updated_at < a.updated_at ? -1 : 1));
}

/** All publicly visible quotes (excludes draft/archived), newest first. */
export function publicQuotes(quotes) {
  return quotes
    .filter((q) => q.status === 'published' || q.status === 'validated')
    .sort((a, b) => (b.quote_date < a.quote_date ? -1 : 1));
}

/** Group published quotes by route slug for route-page generation. */
export function quotesByRoute(quotes) {
  const map = new Map();
  for (const q of publicQuotes(quotes)) {
    const key = q.route_slug || q.route;
    if (!key) continue;
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(q);
  }
  return map;
}
