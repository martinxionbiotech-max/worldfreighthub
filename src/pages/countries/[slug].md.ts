import { gccCountries } from '../../data/gcc-countries';
import { countrySourceIds, sourcesByIds } from '../../data/sources';
import { getPortBySlug } from '../../data/lookup';
import { SITE_URL } from '../../site';
import { cell, frontmatter, mdList, mdOrdered, mdResponse, mdTable } from '../../lib/markdown';
import type { Country } from '../../data/types';

export function getStaticPaths() {
  return gccCountries.map((country) => ({
    params: { slug: country.slug },
    props: { country },
  }));
}

export function GET({ props }: { props: { country: Country } }) {
  const country = props.country;
  const sources = sourcesByIds(countrySourceIds[country.slug] ?? []);
  const ports = country.ports.map((slug) => getPortBySlug(slug)).filter((p) => p !== undefined);
  const canonical = `${SITE_URL}/countries/${country.slug}/`;

  const facts: [string, string][] = [
    ['ISO code', country.iso2],
    ['Capital', country.capital],
    ['Currency', country.currency],
    ['VAT rate', country.vatRate === null ? 'None' : `${country.vatRate}%`],
    ['Import duty', country.dutyRate],
    ['De minimis', country.deMinimis],
    ['Best port', country.bestPort],
  ];

  const md = [
    frontmatter({
      title: `Shipping to ${country.name} from China`,
      description: country.tldr,
      canonical,
      updated: country.updated,
      type: 'country',
    }),
    `# ${country.name}`,
    '',
    country.tldr,
    '',
    '## Key facts',
    '',
    mdTable(['Field', 'Value'], facts),
    '',
    '## Import duty & VAT',
    '',
    `Duty: ${country.dutyRate}. ${country.dutyNote}`,
    '',
    `VAT: ${country.vatRate === null ? 'None currently' : `${country.vatRate}%`}. ${country.vatNote}`,
    '',
    '## De minimis threshold',
    '',
    `${country.deMinimis}. ${country.deMinimisNote}`,
    '',
    '## Compliance requirements',
    '',
    mdList(country.compliance),
    '',
    '## Clearance process',
    '',
    mdOrdered(country.clearanceProcess),
    '',
    '## Entry ports',
    '',
    ...ports.map((p) => `- ${cell(p.name)} (${p.type === 'dry-port' ? 'dry port' : 'seaport'})`),
    '',
    '## What most guides skip',
    '',
    country.insight,
    '',
    '## Key takeaways',
    '',
    mdList(country.keyTakeaways),
    '',
    ...(sources.length > 0
      ? ['## Sources', '', ...sources.map((s) => `- [${cell(s.name)}](${s.url})`), '']
      : []),
    '## Human-readable page',
    '',
    `[View the full country page](${canonical})`,
    '',
  ].join('\n');

  return mdResponse(md);
}
