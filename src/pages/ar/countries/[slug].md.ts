import { gccCountriesAr } from '../../../data/countries.ar';
import { getArPortBySlug } from '../../../data/ports.ar';
import { countrySourceIds, sourcesByIds } from '../../../data/sources';
import { SITE_URL } from '../../../site';
import { cell, frontmatter, mdList, mdOrdered, mdResponse, mdTable } from '../../../lib/markdown';
import type { Country } from '../../../data/types';

export function getStaticPaths() {
  return gccCountriesAr.map((country) => ({
    params: { slug: country.slug },
    props: { country },
  }));
}

export function GET({ props }: { props: { country: Country } }) {
  const country = props.country;
  const sources = sourcesByIds(countrySourceIds[country.slug] ?? []);
  const ports = country.ports.map((slug) => getArPortBySlug(slug)).filter((p) => p !== undefined);
  const canonical = `${SITE_URL}/ar/countries/${country.slug}/`;

  const facts: [string, string][] = [
    ['رمز ISO', country.iso2],
    ['العاصمة', country.capital],
    ['العملة', country.currency],
    ['ضريبة القيمة المضافة', country.vatRate === null ? 'لا توجد' : `${country.vatRate}%`],
    ['رسوم الاستيراد', country.dutyRate],
    ['حد الإعفاء', country.deMinimis],
    ['أفضل ميناء', country.bestPort],
  ];

  const md = [
    frontmatter({
      title: `الشحن إلى ${country.name} من الصين`,
      description: country.tldr,
      canonical,
      updated: country.updated,
      type: 'country',
    }),
    `# ${country.name}`,
    '',
    country.tldr,
    '',
    '## الحقائق الأساسية',
    '',
    mdTable(['الحقل', 'القيمة'], facts),
    '',
    '## رسوم الاستيراد وضريبة القيمة المضافة',
    '',
    `الرسوم: ${country.dutyRate}. ${country.dutyNote}`,
    '',
    `ضريبة القيمة المضافة: ${country.vatRate === null ? 'لا توجد حاليًا' : `${country.vatRate}%`}. ${country.vatNote}`,
    '',
    '## حد الإعفاء',
    '',
    `${country.deMinimis}. ${country.deMinimisNote}`,
    '',
    '## متطلبات الامتثال',
    '',
    mdList(country.compliance),
    '',
    '## إجراءات التخليص',
    '',
    mdOrdered(country.clearanceProcess),
    '',
    '## موانئ الدخول',
    '',
    ...ports.map((p) => `- ${cell(p.name)} (${p.type === 'dry-port' ? 'ميناء جاف' : 'ميناء بحري'})`),
    '',
    '## ما تتجاهله معظم الأدلة',
    '',
    country.insight,
    '',
    '## أبرز النقاط',
    '',
    mdList(country.keyTakeaways),
    '',
    ...(sources.length > 0
      ? ['## المصادر', '', ...sources.map((s) => `- [${cell(s.name)}](${s.url})`), '']
      : []),
    '## الصفحة الكاملة',
    '',
    `[عرض صفحة الدولة الكاملة](${canonical})`,
    '',
  ].join('\n');

  return mdResponse(md);
}
