import { glossaryAr } from '../../../data/glossary.ar';
import { SITE_URL } from '../../../site';
import { cell, frontmatter, mdResponse } from '../../../lib/markdown';
import type { GlossaryTerm } from '../../../data/types';

export function getStaticPaths() {
  return glossaryAr.map((term) => ({
    params: { slug: term.slug },
    props: { term },
  }));
}

export function GET({ props }: { props: { term: GlossaryTerm } }) {
  const term = props.term;
  const canonical = `${SITE_URL}/ar/glossary/${term.slug}/`;

  const relatedTerms = term.related
    .map((slug) => glossaryAr.find((t) => t.slug === slug))
    .filter((t) => t !== undefined);

  const md = [
    frontmatter({
      title: `${term.term} — مصطلحات الشحن`,
      description: term.definition,
      canonical,
      updated: term.updated,
      type: 'glossary',
    }),
    `# ${term.term}`,
    '',
    term.definition,
    '',
    `التصنيف: ${cell(term.category)}`,
    '',
    '## ما معناه',
    '',
    term.inDetail,
    '',
    '## لماذا يهم على مسار الصين–الخليج',
    '',
    term.whyItMatters,
    '',
    '## مثال',
    '',
    term.example,
    '',
    ...(relatedTerms.length > 0
      ? ['## مصطلحات ذات صلة', '', ...relatedTerms.map((t) => `- [${cell(t.term)}](${SITE_URL}/ar/glossary/${t.slug}/) — ${cell(t.definition)}`), '']
      : []),
    '## الصفحة الكاملة',
    '',
    `[عرض صفحة المصطلح الكاملة](${canonical})`,
    '',
  ].join('\n');

  return mdResponse(md);
}
