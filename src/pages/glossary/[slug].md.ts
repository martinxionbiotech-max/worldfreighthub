import { glossary } from '../../data/glossary';
import { SITE_URL } from '../../site';
import { cell, frontmatter, mdResponse } from '../../lib/markdown';
import type { GlossaryTerm } from '../../data/types';

export function getStaticPaths() {
  return glossary.map((term) => ({
    params: { slug: term.slug },
    props: { term },
  }));
}

export function GET({ props }: { props: { term: GlossaryTerm } }) {
  const term = props.term;
  const canonical = `${SITE_URL}/glossary/${term.slug}/`;

  const relatedTerms = term.related
    .map((slug) => glossary.find((t) => t.slug === slug))
    .filter((t) => t !== undefined);

  const decisionFacts: [string, string][] = [
    ['Who pays', term.whoPays],
    ['Who bears risk', term.whoBearsRisk],
    ['Common misunderstanding', term.commonMisunderstanding],
  ].filter(([, v]) => v) as [string, string][];

  const md = [
    frontmatter({
      title: `${term.term} — freight glossary`,
      description: term.definition,
      canonical,
      updated: term.updated,
      type: 'glossary',
    }),
    `# ${term.term}`,
    '',
    term.definition,
    '',
    `Category: ${cell(term.category)}`,
    '',
    '## What it means',
    '',
    term.inDetail,
    '',
    '## Why it matters',
    '',
    term.whyItMatters,
    '',
    '## Example',
    '',
    term.example,
    '',
    ...(decisionFacts.length > 0
      ? ['## Who pays / who bears risk', '', ...decisionFacts.map(([k, v]) => `- **${cell(k)}:** ${cell(v)}`), '']
      : []),
    ...(relatedTerms.length > 0
      ? ['## Related terms', '', ...relatedTerms.map((t) => `- [${cell(t.term)}](${SITE_URL}/glossary/${t.slug}/) — ${cell(t.definition)}`), '']
      : []),
    '## Human-readable page',
    '',
    `[View the full glossary entry](${canonical})`,
    '',
  ].join('\n');

  return mdResponse(md);
}
