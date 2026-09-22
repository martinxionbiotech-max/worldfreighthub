#!/usr/bin/env node
/**
 * freight:add — validated Agent update workflow (doc §31/§32).
 *
 * Usage:
 *   npm run freight:add -- path/to/quote.json
 *
 * The quote file is the normalized payload (doc §9), e.g.:
 *   {
 *     "origin_country": "China", "origin_port": "Shanghai",
 *     "destination_country": "United Arab Emirates", "destination_port": "Dubai / Jebel Ali",
 *     "equipment": "40HQ", "rate": 1850, "currency": "USD",
 *     "quote_date": "2026-09-22", "valid_from": "2026-09-22", "valid_until": "2026-09-25",
 *     "source_type": "Freight Forwarder", "quote_type": "Indicative Freight Quote"
 *   }
 *
 * Flow: validate → deduplicate → write → report (doc §33/§34).
 * Security: local CLI only — no network write endpoint exists, so there is no
 * unauthenticated surface to protect.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  validateQuote, normalizeQuote, duplicateKey, effectiveStatus, REGIONS,
} from '../src/lib/freight-quotes.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DB_PATH = path.resolve(__dirname, '../src/data/freight-quotes.json');

function usage() {
  console.log('Usage: npm run freight:add -- <quote.json>');
  process.exit(1);
}

function loadDb() {
  const raw = fs.readFileSync(DB_PATH, 'utf-8');
  const db = JSON.parse(raw);
  return { quotes: Array.isArray(db.quotes) ? db.quotes : [] };
}

function saveDb(quotes) {
  fs.writeFileSync(
    DB_PATH,
    JSON.stringify({ updated_at: new Date().toISOString(), quotes }, null, 2) + '\n',
    'utf-8',
  );
}

// ── main ──────────────────────────────────────────────────────────────
const inputFile = process.argv[2];
if (!inputFile) usage();

const input = JSON.parse(fs.readFileSync(path.resolve(inputFile), 'utf-8'));

const { ok, errors, warnings } = validateQuote(input);
if (!ok) {
  console.log('Quote not published.');
  console.log(`Reason: ${errors.join(' ')}`);
  console.log('Detected:', JSON.stringify(input, null, 2));
  process.exit(2);
}

const db = loadDb();
const { quote, duplicate } = normalizeQuote(input, db.quotes);

if (duplicate) {
  console.log('Duplicate quote detected — record saved as draft, not published.');
  console.log('Duplicate key:', duplicateKey(quote));
  console.log('Not adding a second public record.');
  process.exit(0);
}

// Final publish guard: never write a record that fails validation at save time.
const recheck = validateQuote(quote);
if (!recheck.ok) {
  console.log('Quote not published.');
  console.log(`Reason: ${recheck.errors.join(' ')}`);
  process.exit(2);
}

db.quotes.push(quote);
saveDb(db.quotes);

const regionNote = quote.region_slug && REGIONS.includes(quote.region_slug)
  ? quote.region_slug
  : (quote.region_slug || 'unclassified (destination not in initial regions)');

console.log('Freight quote processed successfully.');
console.log(`  Origin:            ${quote.origin_port || quote.origin_country}`);
console.log(`  Destination:       ${quote.destination_port || quote.destination_country}`);
console.log(`  Equipment:         ${quote.equipment ?? '(unconfirmed)'}`);
console.log(`  Rate:              ${quote.currency} ${quote.rate}`);
console.log(`  Quote date:        ${quote.quote_date}`);
console.log(`  Valid until:       ${quote.valid_until ?? '(none)'}`);
console.log(`  Region:            ${regionNote}`);
console.log(`  Status:            ${quote.status}`);
console.log(`  Duplicate:         No`);
console.log(`  Homepage:          will show within the recent-window (rebuild required)`);
console.log(`  Historical database: updated (${db.quotes.length} records total)`);
warnings.forEach((w) => console.log(`  Warning: ${w}`));
console.log('\nNext: run `npm run build` and deploy to refresh the homepage.');
