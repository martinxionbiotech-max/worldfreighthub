import quotesJson from '../../data/freight-quotes.json';
import { publicQuotes } from '../../lib/freight-quotes.mjs';
import { rateId } from '../../data/entity-ids';

/**
 * /data/freight-quotes.json — machine-readable public export (P2).
 * Static JSON endpoint generated at build time from the single source of truth
 * (src/data/freight-quotes.json). Only public fields are exposed.
 *
 * Consumers: researchers, LLMs, AI agents, spreadsheet imports.
 */
export function GET() {
  const quotes = Array.isArray(quotesJson.quotes) ? quotesJson.quotes : [];
  const publicData = publicQuotes(quotes).map((q) => ({
    rate_id: rateId(q.id),
    quote_date: q.quote_date,
    origin_country: q.origin_country,
    origin_port: q.origin_port,
    destination_country: q.destination_country,
    destination_port: q.destination_port,
    route: q.route,
    route_id: q.route_slug,
    equipment: q.equipment,
    rate: q.rate,
    currency: q.currency,
    basis: q.basis,
    quote_type: q.quote_type,
    source_type: q.source_type,
    confidence: q.data_confidence,
    verified: q.verified ?? false,
    valid_from: q.valid_from,
    valid_until: q.valid_until,
    notes: q.notes,
  }));

  return new Response(
    JSON.stringify(
      {
        name: 'WorldFreightHub Freight Quote Database',
        description:
          'Normalized indicative freight forwarder quotes — origin, destination, equipment, rate, currency, basis, quote date and validity. Quotes are indicative, not guaranteed market prices.',
        license: 'CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/)',
        updated_at: quotesJson.updated_at,
        records: publicData.length,
        quotes: publicData,
      },
      null,
      2,
    ),
    {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    },
  );
}
