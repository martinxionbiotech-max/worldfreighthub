import { gccPortsAr, chinaPortsAr } from '../../../data/ports.ar';
import { portSourceIds, sourcesByIds } from '../../../data/sources';
import { SITE_URL } from '../../../site';
import { cell, frontmatter, mdList, mdResponse, mdTable } from '../../../lib/markdown';
import type { Port } from '../../../data/types';

export function getStaticPaths() {
  return [...chinaPortsAr, ...gccPortsAr].map((port) => ({
    params: { slug: port.slug },
    props: { port },
  }));
}

export function GET({ props }: { props: { port: Port } }) {
  const port = props.port;
  const sources = sourcesByIds(portSourceIds[port.slug] ?? []);
  const canonical = `${SITE_URL}/ar/ports/${port.slug}/`;

  const facts: [string, string][] = [
    ['الدولة', port.country],
    ['النوع', port.type === 'dry-port' ? 'ميناء جاف' : 'ميناء بحري'],
    ['UN/LOCODE', port.unlocode ?? '—'],
    ['المشغل', port.operator],
    ['الثقة', port.confidence],
  ];

  const md = [
    frontmatter({
      title: `${port.name} — ملف الميناء`,
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
    '## الحقائق الأساسية',
    '',
    mdTable(['الحقل', 'القيمة'], facts),
    '',
    '## المواصفات الرئيسية',
    '',
    mdTable(['المواصفة', 'القيمة'], port.specs.map((s) => [s.label, s.value])),
    '',
    '## النطاق الجغرافي',
    '',
    port.hinterland,
    '',
    '## ما تتجاهله معظم الأدلة',
    '',
    port.insight,
    '',
    '## أبرز النقاط',
    '',
    mdList(port.keyTakeaways),
    '',
    ...(sources.length > 0
      ? ['## المصادر', '', ...sources.map((s) => `- [${cell(s.name)}](${s.url})`), '']
      : []),
    '## الصفحة الكاملة',
    '',
    `[عرض صفحة الميناء الكاملة](${canonical})`,
    '',
  ].join('\n');

  return mdResponse(md);
}
