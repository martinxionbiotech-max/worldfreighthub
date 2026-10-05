import { gccPorts } from '../../data/gcc-ports';
import { chinaPorts } from '../../data/china-ports';
import { portSourceIds, sourcesByIds } from '../../data/sources';
import { SITE_URL } from '../../site';
import { cell, frontmatter, mdList, mdResponse, mdTable } from '../../lib/markdown';
import type { Port } from '../../data/types';

export function getStaticPaths() {
  return [...chinaPorts, ...gccPorts].map((port) => ({
    params: { slug: port.slug },
    props: { port },
  }));
}

export function GET({ props }: { props: { port: Port } }) {
  const port = props.port;
  const sources = sourcesByIds(portSourceIds[port.slug] ?? []);
  const canonical = `${SITE_URL}/ports/${port.slug}/`;

  const facts: [string, string][] = [
    ['Country', port.country],
    ['Type', port.type === 'dry-port' ? 'Dry port' : 'Seaport'],
    ['UN/LOCODE', port.unlocode ?? '—'],
    ['Operator', port.operator],
    ['Confidence', port.confidence],
  ];

  const md = [
    frontmatter({
      title: `${port.name} — port profile`,
      description: port.tldr,
      canonical,
      updated: port.updated,
      confidence: port.confidence,
      type: 'port',
    }),
    `# ${port.name}`,
    '',
    port.tldr,
    '',
    '## Key facts',
    '',
    mdTable(['Field', 'Value'], facts),
    '',
    '## Key specifications',
    '',
    mdTable(['Specification', 'Value'], port.specs.map((s) => [s.label, s.value])),
    '',
    '## Hinterland',
    '',
    port.hinterland,
    '',
    ...(port.decisionScore
      ? [
          '## Port decision score',
          '',
          `**${port.decisionScore.score.toFixed(1)} / 5**`,
          '',
          mdTable(['Factor', 'Score'], port.decisionScore.factors.map((f) => [f.label, `${f.value} / 5`])),
          '',
          port.decisionScore.note,
          '',
        ]
      : []),
    '## What most guides skip',
    '',
    port.insight,
    '',
    '## Key takeaways',
    '',
    mdList(port.keyTakeaways),
    '',
    ...(sources.length > 0
      ? ['## Sources', '', ...sources.map((s) => `- [${cell(s.name)}](${s.url})`), '']
      : []),
    '## Human-readable page',
    '',
    `[View the full port page](${canonical})`,
    '',
  ].join('\n');

  return mdResponse(md);
}
