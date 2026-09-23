#!/usr/bin/env node
/**
 * P0-3 one-off backfill: enrich the 24 existing quotes with the new optional
 * fields (basis / confidence / verified / transit_mode / route_via / carrier).
 *
 * Backfill policy (per task):
 *   basis='port-to-port', confidence='MEDIUM', verified=false,
 *   transit_mode='direct', route_via='Suez' (default assumption for both
 *   Middle-East and Europe lanes — flagged in notes, pending forwarder
 *   confirmation), carrier=null (unknown — never guessed).
 *
 * Idempotent: re-running only fills fields that are still missing.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DB_PATH = path.resolve(__dirname, '../src/data/freight-quotes.json');
const FLAG = '[P0-3 回填: 默认假设, 待货代确认]';

const db = JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
const quotes = Array.isArray(db.quotes) ? db.quotes : [];

const before = JSON.stringify(db, null, 2);
let touched = 0;

for (const q of quotes) {
  let changed = false;
  if (q.basis === undefined) { q.basis = 'port-to-port'; changed = true; }
  if (q.confidence === undefined) { q.confidence = 'MEDIUM'; changed = true; }
  if (q.verified === undefined) { q.verified = false; changed = true; }
  if (q.transit_mode === undefined) { q.transit_mode = 'direct'; changed = true; }
  if (q.route_via === undefined) { q.route_via = 'Suez'; changed = true; }
  if (q.carrier === undefined) { q.carrier = null; changed = true; }
  if (typeof q.notes === 'string' && !q.notes.includes(FLAG)) {
    q.notes = `${q.notes} ${FLAG}`.trim();
    changed = true;
  }
  if (changed) touched++;
}

db.updated_at = new Date().toISOString();
fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2) + '\n', 'utf-8');

const after = fs.readFileSync(DB_PATH, 'utf-8');
console.log(`Backfilled ${touched}/${quotes.length} quotes.`);
console.log(`updated_at: ${db.updated_at}`);

// Minimal diff audit: report per-quote field deltas without dumping secrets.
const beforeDb = JSON.parse(before);
for (const [i, bq] of beforeDb.quotes.entries()) {
  const aq = db.quotes[i];
  const deltas = ['basis', 'confidence', 'verified', 'transit_mode', 'route_via', 'carrier']
    .filter((f) => JSON.stringify(bq[f]) !== JSON.stringify(aq[f]))
    .map((f) => `${f}: ${JSON.stringify(bq[f])}→${JSON.stringify(aq[f])}`)
    .join(', ');
  const noteChanged = bq.notes !== aq.notes ? 'notes+suffix' : '';
  console.log(`${aq.route}: ${deltas}${noteChanged ? ` ${noteChanged}` : ''}`);
}
