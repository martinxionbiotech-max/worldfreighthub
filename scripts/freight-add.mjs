#!/usr/bin/env node
/**
 * freight:add — validated Agent update workflow (doc §31/§32).
 *
 * Usage:
 *   npm run freight:add -- path/to/quote.json        (single quote object)
 *   npm run freight:add -- path/to/batch.json        (array of quote objects)
 *
 * Flow per record: validate → deduplicate → write → report (doc §33/§34).
 * Security: local CLI only — no network write endpoint exists, so there is no
 * unauthenticated surface to protect.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  validateQuote, normalizeQuote, duplicateKey, REGIONS,
} from '../src/lib/freight-quotes.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DB_PATH = path.resolve(__dirname, '../src/data/freight-quotes.json');

function usage() {
  console.log('Usage: npm run freight:add -- <quote.json|batch.json>');
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
const inputs = Array.isArray(input) ? input : [input];
if (inputs.length === 0) {
  console.log('No quotes in input file.');
  process.exit(2);
}

const db = loadDb();
let added = 0;
let rejected = 0;
let duplicates = 0;

for (const item of inputs) {
  const { ok, errors, warnings } = validateQuote(item);
  if (!ok) {
    rejected++;
    console.log(`✗ NOT PUBLISHED [${item.origin_port || item.origin_country || '?'} → ${item.destination_port || item.destination_country || '?'}]: ${errors.join(' ')}`);
    continue;
  }
  const { quote, duplicate } = normalizeQuote(item, db.quotes);
  if (duplicate) {
    duplicates++;
    console.log(`≋ DUPLICATE SKIPPED [${quote.route}]: matches existing record`);
    continue;
  }
  const recheck = validateQuote(quote);
  if (!recheck.ok) {
    rejected++;
    console.log(`✗ NOT PUBLISHED [${quote.route}]: ${recheck.errors.join(' ')}`);
    continue;
  }
  db.quotes.push(quote);
  added++;
  const regionNote = quote.region_slug && REGIONS.includes(quote.region_slug)
    ? quote.region_slug
    : (quote.region_slug || 'unclassified');
  console.log(`✓ PUBLISHED [${quote.route}] ${quote.equipment ?? '?'} ${quote.currency} ${quote.rate} — ${regionNote}`);
  warnings.forEach((w) => console.log(`   ⚠ ${w}`));
}

if (added > 0) saveDb(db.quotes);

console.log(`\nResult: ${added} added, ${duplicates} duplicates skipped, ${rejected} rejected.`);
console.log(`Historical database: ${db.quotes.length} records total.`);
if (added > 0) console.log('Next: run `npm run build` and deploy to refresh the homepage.');
