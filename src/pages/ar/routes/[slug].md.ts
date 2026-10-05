import { routesAr } from '../../../data/routes.ar';
import { getArPortBySlug } from '../../../data/ports.ar';
import { getArCountryBySlug } from '../../../data/countries.ar';
import { countrySourceIds, sourcesByIds } from '../../../data/sources';
import { SITE_URL } from '../../../site';
import { cell, frontmatter, mdList, mdResponse, mdTable } from '../../../lib/markdown';
import type { Route } from '../../../data/types';

export function getStaticPaths() {
  return routesAr.map((route) => ({
    params: { slug: route.slug },
    props: { route },
  }));
}

export function GET({ props }: { props: { route: Route } }) {
  const route = props.route;
  const originName = getArPortBySlug(route.originPort)?.name ?? route.originPort;
  const destName = getArPortBySlug(route.destPort)?.name ?? route.destPort;
  const country = getArCountryBySlug(route.country);
  const sources = sourcesByIds(countrySourceIds[route.country] ?? []);
  const canonical = `${SITE_URL}/ar/routes/${route.slug}/`;

  const facts: [string, string][] = [
    ['المنشأ', originName],
    ['الوجهة', destName],
    ['بلد الوجهة', country?.name ?? route.country],
    ['مدة النقل النموذجية', `${route.transitDays.typical} يومًا`],
    ['نطاق مدة النقل', `${route.transitDays.range[0]}–${route.transitDays.range[1]} يومًا`],
    ['الثقة', route.confidence],
  ];
  if (country) {
    facts.push(['رسوم الاستيراد', country.dutyRate]);
    facts.push(['ضريبة القيمة المضافة', country.vatRate === null ? 'لا توجد' : `${country.vatRate}%`]);
  }

  const md = [
    frontmatter({
      title: `مسار الشحن من ${originName} إلى ${destName}`,
      description: `مدة النقل الاسترشادية ونطاقات الأسعار لممر ${originName} إلى ${destName} (الصين–الخليج).`,
      canonical,
      updated: route.updated,
      confidence: route.confidence,
      type: 'route',
    }),
    `# ${originName} → ${destName}`,
    '',
    `${originName} إلى ${destName} تستغرق عادةً ${route.transitDays.typical} يومًا (المدى ${route.transitDays.range[0]}–${route.transitDays.range[1]} يومًا). ${route.routingNote}`,
    '',
    '## الحقائق الأساسية',
    '',
    mdTable(['الحقل', 'القيمة'], facts),
    '',
    '## نطاقات التكلفة المرجعية',
    '',
    mdTable(['البند', 'النطاق الاسترشادي', 'الثقة'], route.costRows.map((r) => [r.label, r.range, r.confidence])),
    '',
    '## مدة النقل',
    '',
    `نموذجيًا ${route.transitDays.typical} يومًا. ${route.transitNote}`,
    '',
    '## التوجيه والاعتبارات',
    '',
    route.routingNote,
    '',
    '## ما تتجاهله معظم الأدلة',
    '',
    route.insight,
    '',
    '## أبرز النقاط',
    '',
    mdList(route.keyTakeaways),
    '',
    ...(sources.length > 0
      ? ['## المصادر', '', ...sources.map((s) => `- [${cell(s.name)}](${s.url})`), '']
      : []),
    '## الصفحة الكاملة',
    '',
    `[عرض صفحة المسار الكاملة](${canonical})`,
    '',
  ].join('\n');

  return mdResponse(md);
}
