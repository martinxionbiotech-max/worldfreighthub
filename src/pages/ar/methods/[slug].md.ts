import { methodsAr } from '../../../data/methods.ar';
import { SITE_URL } from '../../../site';
import { cell, frontmatter, mdList, mdOrdered, mdResponse, mdTable } from '../../../lib/markdown';
import type { Method } from '../../../data/types';

export function getStaticPaths() {
  return methodsAr.map((method) => ({
    params: { slug: method.slug },
    props: { method },
  }));
}

export function GET({ props }: { props: { method: Method } }) {
  const method = props.method;
  const canonical = `${SITE_URL}/ar/methods/${method.slug}/`;

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
    '## التعريف',
    '',
    method.definition,
    '',
    '## نطاقات التكلفة المرجعية',
    '',
    mdTable(['البند', 'النطاق الاسترشادي', 'الثقة'], method.costRows.map((r) => [r.label, r.range, r.confidence])),
    '',
    '## مدة النقل',
    '',
    `${method.transitTime.range} — ${method.transitTime.note}`,
    '',
    `الثقة: ${method.transitTime.confidence}`,
    '',
    '## المزايا',
    '',
    mdList(method.pros),
    '',
    '## العيوب',
    '',
    mdList(method.cons),
    '',
    '## ما تتجاهله معظم الأدلة',
    '',
    method.insight,
    '',
    '## خطوة بخطوة',
    '',
    mdOrdered(method.process),
    '',
    '## أبرز النقاط',
    '',
    mdList(method.keyTakeaways),
    '',
    ...(method.sources.length > 0
      ? ['## المصادر', '', ...method.sources.map((s) => `- [${cell(s.name)}](${s.url})`), '']
      : []),
    '## الصفحة الكاملة',
    '',
    `[عرض صفحة الوسيلة الكاملة](${canonical})`,
    '',
  ].join('\n');

  return mdResponse(md);
}
