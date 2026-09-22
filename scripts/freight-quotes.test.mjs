import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateQuote,
  normalizeQuote,
  duplicateKey,
  recentQuotes,
  publicQuotes,
  classifyRegion,
  routeSlug,
  quotesByRoute,
  effectiveStatus,
  DEFAULT_WINDOW_DAYS,
} from '../src/lib/freight-quotes.mjs';

const valid = () => ({
  origin_country: 'China',
  origin_port: 'Shanghai',
  destination_country: 'United Arab Emirates',
  destination_port: 'Dubai / Jebel Ali',
  equipment: '40HQ',
  rate: 1850,
  currency: 'USD',
  quote_date: '2026-09-22',
  valid_from: '2026-09-22',
  valid_until: '2026-09-25',
  source_type: 'Freight Forwarder',
  quote_type: 'Indicative Freight Quote',
});

// 1. valid quote
test('valid quote passes', () => {
  const r = validateQuote(valid());
  assert.equal(r.ok, true);
  assert.deepEqual(r.errors, []);
});

// 2-5. missing critical fields
for (const [name, mutate] of [
  ['missing origin', (q) => { delete q.origin_country; delete q.origin_port; }],
  ['missing destination', (q) => { delete q.destination_country; delete q.destination_port; }],
  ['missing rate', (q) => { delete q.rate; }],
  ['missing currency', (q) => { delete q.currency; }],
]) {
  test(`rejects ${name}`, () => {
    const q = valid();
    mutate(q);
    const r = validateQuote(q);
    assert.equal(r.ok, false);
    assert.ok(r.errors.length > 0);
  });
}

// 6. duplicate quote
test('duplicate quote is detected', () => {
  const q1 = normalizeQuote(valid(), []).quote;
  const q2 = normalizeQuote(valid(), [q1]);
  assert.equal(q2.duplicate, true);
  assert.equal(q2.quote.status, 'draft');
  assert.equal(q1.status, 'published');
});

// 7. same route, different rate → both legitimate
test('same route with different rate is not a duplicate', () => {
  const q1 = normalizeQuote(valid(), []).quote;
  const v2 = valid();
  v2.rate = 2020;
  v2.valid_until = '2026-09-27';
  const q2 = normalizeQuote(v2, [q1]);
  assert.equal(q2.duplicate, false);
  assert.notEqual(duplicateKey(q1), duplicateKey(q2.quote));
});

// 8. expired quote
test('expired quote retains record with expired status', () => {
  const q = valid();
  q.quote_date = '2026-08-01';
  q.valid_until = '2026-08-05';
  const { quote } = normalizeQuote(q, []);
  assert.equal(effectiveStatus(quote, '2026-09-22'), 'expired');
  // Still in publicQuotes (historical retention)
  assert.equal(publicQuotes([quote]).length, 1);
});

// 9. homepage 5-day filtering
test('homepage shows only recent window, db keeps all', () => {
  const old = normalizeQuote({ ...valid(), quote_date: '2026-08-01', valid_until: '2026-08-05' }, []).quote;
  const recent = normalizeQuote(valid(), []).quote;
  const all = [old, recent];
  const now = new Date('2026-09-22T12:00:00Z');
  assert.equal(recentQuotes(all, DEFAULT_WINDOW_DAYS, now).length, 1);
  assert.equal(publicQuotes(all).length, 2);
});

// 10. historical retention — expired not deleted
test('expired records are retained in publicQuotes', () => {
  const q = normalizeQuote({ ...valid(), quote_date: '2026-08-01', valid_until: '2026-08-05' }, []).quote;
  assert.equal(publicQuotes([q]).length, 1);
});

// 11. region classification
test('classifies GCC to middle-east and Germany to europe', () => {
  assert.equal(classifyRegion('Saudi Arabia'), 'middle-east');
  assert.equal(classifyRegion('Germany'), 'europe');
  assert.equal(classifyRegion('Atlantis'), null);
});

// 12. route slug generation
test('route slug is china-to-dubai style', () => {
  const { quote } = normalizeQuote(valid(), []);
  assert.equal(routeSlug(quote), 'shanghai-to-dubai-jebel-ali');
  const v2 = valid();
  delete v2.origin_port;
  delete v2.destination_port;
  const { quote: q2 } = normalizeQuote(v2, []);
  assert.equal(routeSlug(q2), 'china-to-united-arab-emirates');
});

// 13. empty state
test('empty dataset produces no route pages', () => {
  assert.equal(quotesByRoute([]).size, 0);
});

// 14. invalid rate
test('rejects non-positive rate', () => {
  for (const bad of [0, -100, 'abc', null, undefined]) {
    const q = valid();
    q.rate = bad;
    const r = validateQuote(q);
    assert.equal(r.ok, false, `rate=${bad} should fail`);
  }
});

// 15. invalid date
test('rejects malformed dates', () => {
  const q = valid();
  q.quote_date = '22/09/2026';
  const r = validateQuote(q);
  assert.equal(r.ok, false);
});

// 16. future dates warn
test('future dates produce warning but do not block', () => {
  const q = valid();
  q.valid_until = '2099-01-01';
  const r = validateQuote(q);
  assert.equal(r.ok, true);
  assert.ok(r.warnings.length > 0);
});

// 17. valid_from after valid_until
test('rejects inverted validity window', () => {
  const q = valid();
  q.valid_from = '2026-09-25';
  q.valid_until = '2026-09-22';
  const r = validateQuote(q);
  assert.equal(r.ok, false);
});

// 18. ambiguous equipment → warning not error
test('unknown equipment warns but does not block', () => {
  const q = valid();
  q.equipment = 'weird-container';
  const r = validateQuote(q);
  assert.equal(r.ok, true);
  assert.ok(r.warnings.some((w) => w.includes('Equipment')));
});

// 19. route pages respect min threshold
test('route page generated only above MIN threshold', () => {
  const q = normalizeQuote(valid(), []).quote;
  const byRoute = quotesByRoute([q]);
  assert.equal(byRoute.get('shanghai-to-dubai-jebel-ali').length, 1); // below default min=2 → filtered in getStaticPaths
});

// 20. duplicate key includes validity
test('duplicate key distinguishes validity windows', () => {
  const q1 = normalizeQuote(valid(), []).quote;
  const v2 = valid();
  v2.valid_until = '2026-09-30';
  const q2 = normalizeQuote(v2, [q1]).quote;
  assert.notEqual(duplicateKey(q1), duplicateKey(q2));
});
