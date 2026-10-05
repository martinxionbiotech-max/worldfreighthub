import { methods } from '../../data/methods';
import { SITE_URL } from '../../site';
import { cell, frontmatter, mdList, mdOrdered, mdResponse, mdTable } from '../../lib/markdown';
import type { Method } from '../../data/types';

export function getStaticPaths() {
  return methods.map((method) => ({
    params: { slug: method.slug },
    props: { method },
  }));
}

export function GET({ props }: { props: { method: Method } }) {
  const method = props.method;
  const canonical = `${SITE_URL}/methods/${method.slug}/`;

  const md = [
    frontmatter({
      title: method.name,
      description: method.summary,
      canonical,
      updated: method.updated,
      type: 'method',
    }),
    `# ${method.name}`,
    '',
    method.summary,
    '',
    '## Definition',
    '',
    method.definition,
    '',
    '## Reference cost ranges',
    '',
    mdTable(['Item', 'Indicative range', 'Confidence'], method.costRows.map((r) => [r.label, r.range, r.confidence])),
    '',
    '## Transit time',
    '',
    `${method.transitTime.range} — ${method.transitTime.note}`,
    '',
    `Confidence: ${method.transitTime.confidence}`,
    '',
    '## Pros',
    '',
    mdList(method.pros),
    '',
    '## Cons',
    '',
    mdList(method.cons),
    '',
    '## What most guides skip',
    '',
    method.insight,
    '',
    '## Step by step',
    '',
    mdOrdered(method.process),
    '',
    '## Key takeaways',
    '',
    mdList(method.keyTakeaways),
    '',
    ...(method.sources.length > 0
      ? ['## Sources', '', ...method.sources.map((s) => `- [${cell(s.name)}](${s.url})`), '']
      : []),
    '## Human-readable page',
    '',
    `[View the full method page](${canonical})`,
    '',
  ].join('\n');

  return mdResponse(md);
}
