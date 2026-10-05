import { routes } from '../../data/routes';
import { countrySourceIds, sourcesByIds } from '../../data/sources';
import { getCountryBySlug, portName } from '../../data/lookup';
import { SITE_URL } from '../../site';
import { cell, frontmatter, mdList, mdResponse, mdTable } from '../../lib/markdown';
import type { Route } from '../../data/types';

export function getStaticPaths() {
  return routes.map((route) => ({
    params: { slug: route.slug },
    props: { route },
  }));
}

export function GET({ props }: { props: { route: Route } }) {
  const route = props.route;
  const originName = portName(route.originPort);
  const destName = portName(route.destPort);
  const country = getCountryBySlug(route.country);
  const sources = sourcesByIds(countrySourceIds[route.country] ?? []);
  const canonical = `${SITE_URL}/routes/${route.slug}/`;

  const facts: [string, string][] = [
    ['Origin', originName],
    ['Destination', destName],
    ['Destination country', country?.name ?? route.country],
    ['Typical transit', `${route.transitDays.typical} days`],
    ['Transit range', `${route.transitDays.range[0]}–${route.transitDays.range[1]} days`],
    ['Volatility', route.volatility],
    ['Confidence', route.confidence],
  ];
  if (country) {
    facts.push(['Import duty', country.dutyRate]);
    facts.push(['VAT', country.vatRate === null ? 'None' : `${country.vatRate}%`]);
  }

  const md = [
    frontmatter({
      title: `${originName} to ${destName} shipping route`,
      description: `Indicative transit time and rate ranges for the ${originName} to ${destName} China-to-GCC corridor.`,
      canonical,
      updated: route.updated,
      confidence: route.confidence,
      type: 'route',
    }),
    `# ${originName} → ${destName}`,
    '',
    `${originName} to ${destName} typically runs ${route.transitDays.typical} days (range ${route.transitDays.range[0]}–${route.transitDays.range[1]} days). ${route.routingNote}`,
    '',
    '## Key facts',
    '',
    mdTable(['Field', 'Value'], facts),
    '',
    '## Reference cost ranges',
    '',
    mdTable(['Item', 'Indicative range', 'Confidence'], route.costRows.map((r) => [r.label, r.range, r.confidence])),
    '',
    '## Transit time',
    '',
    `Typical ${route.transitDays.typical} days. ${route.transitNote}`,
    '',
    '## Routing & considerations',
    '',
    route.routingNote,
    '',
    '## What most guides skip',
    '',
    route.insight,
    '',
    '## Key takeaways',
    '',
    mdList(route.keyTakeaways),
    '',
    ...(sources.length > 0
      ? ['## Sources', '', ...sources.map((s) => `- [${cell(s.name)}](${s.url})`), '']
      : []),
    '## Human-readable page',
    '',
    `[View the full route page](${canonical})`,
    '',
  ].join('\n');

  return mdResponse(md);
}
