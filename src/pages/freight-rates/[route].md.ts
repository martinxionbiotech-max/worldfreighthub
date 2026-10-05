import quotesJson from '../../data/freight-quotes.json';
import {
  quotesByRoute, effectiveStatus, MIN_ROUTE_QUOTES_FOR_INDEXING,
} from '../../lib/freight-quotes.mjs';
import { SITE_URL } from '../../site';
import { frontmatter, mdResponse, mdTable } from '../../lib/markdown';

interface Quote {
  id: string;
  quote_date: string;
  origin_country: string | null;
  origin_port: string | null;
  destination_country: string | null;
  destination_port: string | null;
  route: string;
  equipment: string | null;
  rate: number;
  currency: string;
  quote_type: string | null;
  source_type: string | null;
  valid_until: string | null;
  basis: string | null;
  confidence: string | null;
  verified: boolean;
}

// getStaticPaths 必须自包含（Vite 打包时函数被提升，外部 const 会 undefined）
export function getStaticPaths() {
  const quotes = Array.isArray(quotesJson.quotes) ? quotesJson.quotes : [];
  const byRoute = quotesByRoute(quotes);
  return Array.from(byRoute.entries())
    .filter(([, qs]) => qs.length >= MIN_ROUTE_QUOTES_FOR_INDEXING)
    .map(([slug, qs]) => ({ params: { route: slug }, props: { quotes: qs } }));
}

export function GET({ params, props }: { params: { route: string }; props: { quotes: Quote[] } }) {
  const route = params.route;
  const routeQuotes = props.quotes;

  const sorted = [...routeQuotes].sort((a, b) => (a.quote_date < b.quote_date ? 1 : -1));
  const latest = sorted[0];
  const titleFor = (q: Quote) => `${q.origin_port || q.origin_country} to ${q.destination_port || q.destination_country}`;
  const canonical = `${SITE_URL}/freight-rates/${route}/`;

  const fmtDate = (d?: string | null) => (d ? d : '—');
  const fmtRate = (q: Quote) => `${q.currency} ${Number(q.rate).toLocaleString('en-US')}`;
  const basisLabel: Record<string, string> = { 'port-to-port': 'Port-to-port', 'all-in': 'All-in' };

  const distinctDates = [...new Set(sorted.map((q) => q.quote_date))].sort();
  const today = new Date().toISOString().slice(0, 10);
  const daysAgo = (n: number) => new Date(Date.now() - n * 86400000).toISOString().slice(0, 10);
  const inWindow = (q: Quote, days: number) => q.quote_date >= daysAgo(days) && q.quote_date <= today;

  const byEquipment = new Map<string, Quote[]>();
  for (const q of sorted) {
    const k = q.equipment ?? 'unspecified';
    if (!byEquipment.has(k)) byEquipment.set(k, []);
    byEquipment.get(k)!.push(q);
  }

  const eqStats = Array.from(byEquipment.entries()).map(([eq, qs]) => {
    const rates = qs.map((q) => Number(q.rate)).sort((a, b) => a - b);
    const median = rates.length ? rates[Math.floor(rates.length / 2)] : null;
    const last30 = qs.filter((q) => inWindow(q, 30));
    const last90 = qs.filter((q) => inWindow(q, 90));
    const range = (arr: Quote[]) => {
      const r = arr.map((q) => Number(q.rate));
      return r.length ? [Math.min(...r), Math.max(...r)] : null;
    };
    return { equipment: eq, count: qs.length, latest: qs[0], median, range30: range(last30), range90: range(last90) };
  });

  const enoughForRange = distinctDates.length >= 2;

  const eqRows = eqStats.map((s) => [
    s.equipment,
    String(s.count),
    fmtRate(s.latest),
    enoughForRange && s.range30 ? `$${s.range30[0].toLocaleString('en-US')}–$${s.range30[1].toLocaleString('en-US')}` : '—',
    enoughForRange && s.range90 ? `$${s.range90[0].toLocaleString('en-US')}–$${s.range90[1].toLocaleString('en-US')}` : '—',
    s.median ? `$${s.median.toLocaleString('en-US')}` : '—',
  ]);

  const historyRows = sorted.map((q) => [
    fmtDate(q.quote_date),
    q.equipment ?? '—',
    fmtRate(q),
    q.basis ? basisLabel[q.basis] || q.basis : '—',
    q.confidence ?? '—',
    q.valid_until ? `${fmtDate(q.valid_until)}${effectiveStatus(q) === 'expired' ? ' (expired)' : ''}` : '—',
    q.quote_type ?? '—',
  ]);

  const md = [
    frontmatter({
      title: `${titleFor(latest)} freight quotes`,
      description: `Indicative freight forwarder quotes for ${titleFor(latest)} — dates, equipment, rate and validity.`,
      canonical,
      updated: latest.quote_date,
      type: 'freight-rate',
    }),
    `# ${titleFor(latest)} — freight quote history`,
    '',
    `Latest recorded quote: ${fmtRate(latest)}${latest.equipment ? ` (${latest.equipment})` : ''}${latest.basis ? `, ${basisLabel[latest.basis] || latest.basis}` : ''}, quoted ${fmtDate(latest.quote_date)}.`,
    '',
    '## Quick facts',
    '',
    mdTable(['Field', 'Value'], [
      ['Records', `${sorted.length} quote${sorted.length === 1 ? '' : 's'} on ${distinctDates.length} distinct date${distinctDates.length === 1 ? '' : 's'}`],
      ['Source type', `${latest.source_type ?? '—'} (${latest.quote_type ?? '—'})`],
      ['Confidence', `${latest.confidence ?? 'not rated'}${latest.verified ? ' · verified' : ''}`],
      ['Status', effectiveStatus(latest)],
    ]),
    '',
    '## Quote statistics by equipment',
    '',
    mdTable(['Equipment', 'Records', 'Latest', '30-day range', '90-day range', 'Median'], eqRows),
    '',
    '## Quote history',
    '',
    mdTable(['Date', 'Equipment', 'Rate', 'Basis', 'Confidence', 'Validity', 'Quote type'], historyRows),
    '',
    '## Disclaimer',
    '',
    'Indicative freight forwarder quotes, not guaranteed market prices.',
    '',
    '## Human-readable page',
    '',
    `[View the full quote history page](${canonical})`,
    '',
  ].join('\n');

  return mdResponse(md);
}
