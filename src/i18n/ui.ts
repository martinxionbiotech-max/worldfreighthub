// Shared UI dictionary for English (/) and Arabic (/ar/) locales.
// Keys are flat dot-notation strings. Interpolated strings use {var} placeholders.

export type Locale = 'en' | 'ar';

export const locales: Locale[] = ['en', 'ar'];

interface Dict {
  [key: string]: string;
}

const en: Dict = {
  // Header / nav
  'nav.routes': 'Routes',
  'nav.countries': 'Countries',
  'nav.ports': 'Ports',
  'nav.methods': 'Methods',
  'nav.glossary': 'Glossary',
  'nav.tools': 'Tools',
  'nav.directory': 'Directory',
  'nav.middleeast': 'Middle East',
  'nav.europe': 'Europe',
  'nav.destinations': 'Destinations',
  'nav.guides': 'Shipping Guides',
  'nav.resources': 'Resources',
  'nav.whatsapp': 'WhatsApp',
  'nav.getquote': 'Get Quote',

  // Footer
  'footer.brand.tagline':
    'A freight intelligence network for the China–GCC corridor: routes, ports, countries, methods, and a trusted provider directory.',
  'footer.explore': 'Explore',
  'footer.company': 'Company',
  'footer.data': 'Data',
  'footer.about': 'About',
  'footer.methodology': 'Methodology',
  'footer.editorial': 'Editorial Policy',
  'footer.contact': 'Contact',
  'footer.disclaimer':
    'Disclaimer: All freight rates and transit times on this site are indicative estimates, not live quotes. Always confirm figures with a licensed carrier or customs broker before making commercial decisions.',

  // Breadcrumb
  'breadcrumb.home': 'Home',

  // Common section headings
  'section.faq': 'Frequently asked questions',
  'section.keyTakeaways': 'Key takeaways',
  'section.whatGuidesSkip': 'What most guides skip',
  'section.relatedMethods': 'Related shipping methods',
  'section.relatedTerms': 'Related terms',
  'section.whatItMeans': 'What it means',
  'section.whyItMatters': 'Why it matters',
  'section.example': 'Example',
  'section.keySpecs': 'Key specifications',
  'section.hinterland': 'Hinterland',
  'section.sources': 'Sources',
  'section.primarySources': 'Primary sources',
  'section.officialSources': 'Official sources',
  'section.noSources': 'No verified sources yet.',
  'section.ports': 'Ports',
  'section.chinaLoadingPorts': 'China loading ports',
  'section.gccPorts': 'GCC ports & terminals',
  'section.chinaRoutesTo': 'China routes to {country}',

  // Country detail
  'country.iso': 'ISO code',
  'country.capital': 'Capital',
  'country.currency': 'Currency',
  'country.vat': 'VAT rate',
  'country.none': 'None',
  'country.dutyVat': 'Import duty & VAT',
  'country.duty': 'Duty',
  'country.deMinimis': 'De minimis threshold',
  'country.compliance': 'Compliance requirements',
  'country.clearance': 'Clearance process',
  'country.dryPort': 'Dry port',
  'country.seaport': 'Seaport',
  'country.destinationProfile': 'Destination profile for the China freight corridor.',

  // Countries index
  'countries.lead':
    'The six Gulf Cooperation Council member states on the China freight corridor — each with its own VAT rate, duty rules, compliance requirements and entry ports.',
  'countries.atAGlance': 'Destination at a glance',
  'countries.taxStacks': 'How the tax stacks up',

  // Methods
  'methods.lead':
    'The main ways to move goods from China to the GCC, compared by cost, speed and the cargo each one suits.',
  'methods.howToChoose': 'How to choose',
  'methods.whatIs': 'What is {name}?',
  'methods.whenToUse': 'When to use {name}',
  'methods.pricingWorks': 'How {name} pricing works',
  'methods.referenceCosts': 'Reference cost ranges',
  'methods.transitTime': 'Transit time',
  'methods.prosCons': 'Pros and cons',
  'methods.pros': 'Pros',
  'methods.cons': 'Cons',
  'methods.stepByStep': 'How {name} works, step by step',
  'methods.item': 'Item',
  'methods.indicativeRange': 'Indicative range (China → GCC)',
  'methods.confidence': 'Confidence',
  'methods.costCaption': 'Indicative cost ranges for the China–GCC corridor',
  'methods.lastUpdated': 'Last updated: {date}.',

  // Confidence badges
  'confidence.HIGH': 'High',
  'confidence.MEDIUM': 'Medium',
  'confidence.LOW': 'Low',

  // CTA
  'cta.title': 'Get a freight quote',
  'cta.text':
    'Tell us about your shipment and we will connect you with verified providers on the China–GCC corridor.',
  'cta.label': 'Get a quote',

  // Card
  'card.learnMore': 'Learn more',

  // Ad slot
  'ad.label': 'Advertisement',
  'ad.headline': 'Advertise with WorldFreightHub',
  'ad.text': 'Reach importers and freight decision-makers on the China–GCC corridor.',
  'ad.cta': 'Advertise',

  // TL;DR
  'tldr': 'TL;DR',

  // Generic
  'generic.indicativeNote':
    'Rates and transit times on this page are indicative ranges, not live quotes — confirm figures with a licensed carrier or freight forwarder before booking.',
};

const ar: Dict = {
  // Header / nav
  'nav.routes': 'المسارات',
  'nav.countries': 'الدول',
  'nav.ports': 'الموانئ',
  'nav.methods': 'طرق الشحن',
  'nav.glossary': 'المصطلحات',
  'nav.tools': 'الأدوات',
  'nav.directory': 'الدليل',
  'nav.middleeast': 'الشرق الأوسط',
  'nav.europe': 'أوروبا',
  'nav.destinations': 'الوجهات',
  'nav.guides': 'أدلة الشحن',
  'nav.resources': 'الموارد',
  'nav.whatsapp': 'واتساب',
  'nav.getquote': 'احصل على عرض سعر',

  // Footer
  'footer.brand.tagline':
    'شبكة معلومات شحن لممر الصين–الخليج: مسارات وموانئ ودول وطرق شحن ودليل مزودين موثوق.',
  'footer.explore': 'استكشف',
  'footer.company': 'الشركة',
  'footer.data': 'البيانات',
  'footer.about': 'من نحن',
  'footer.methodology': 'المنهجية',
  'footer.editorial': 'السياسة التحريرية',
  'footer.contact': 'اتصل بنا',
  'footer.disclaimer':
    'إخلاء مسؤولية: جميع أسعار الشحن ومدد النقل على هذا الموقع تقديرات استرشادية وليست عروض أسعار فورية. أكد الأرقام دائمًا مع ناقل مرخص أو مخلص جمركي قبل اتخاذ قرارات تجارية.',

  // Breadcrumb
  'breadcrumb.home': 'الرئيسية',

  // Common section headings
  'section.faq': 'الأسئلة الشائعة',
  'section.keyTakeaways': 'النقاط الرئيسية',
  'section.whatGuidesSkip': 'ما تتجاهله معظم الأدلة',
  'section.relatedMethods': 'طرق الشحن ذات الصلة',
  'section.relatedTerms': 'مصطلحات ذات صلة',
  'section.whatItMeans': 'ماذا يعني',
  'section.whyItMatters': 'لماذا يهم',
  'section.example': 'مثال',
  'section.keySpecs': 'المواصفات الرئيسية',
  'section.hinterland': 'النطاق الجغرافي الذي يخدمه الميناء',
  'section.sources': 'المصادر',
  'section.primarySources': 'المصادر الأساسية',
  'section.officialSources': 'المصادر الرسمية',
  'section.noSources': 'لا توجد مصادر موثقة بعد.',
  'section.ports': 'الموانئ',
  'section.chinaLoadingPorts': 'موانئ التحميل في الصين',
  'section.gccPorts': 'الموانئ والمحطات الخليجية',
  'section.chinaRoutesTo': 'المسارات من الصين إلى {country}',

  // Country detail
  'country.iso': 'رمز ISO',
  'country.capital': 'العاصمة',
  'country.currency': 'العملة',
  'country.vat': 'ضريبة القيمة المضافة',
  'country.none': 'لا يوجد',
  'country.dutyVat': 'الرسوم الجمركية وضريبة القيمة المضافة',
  'country.duty': 'الرسوم',
  'country.deMinimis': 'حد الإعفاء الجمركي',
  'country.compliance': 'متطلبات الامتثال',
  'country.clearance': 'إجراءات التخليص الجمركي',
  'country.dryPort': 'ميناء جاف',
  'country.seaport': 'ميناء بحري',
  'country.destinationProfile': 'ملف الوجهة لممر الشحن من الصين.',

  // Countries index
  'countries.lead':
    'الدول الست الأعضاء في مجلس التعاون الخليجي على ممر الشحن من الصين — لكل منها معدل ضريبة قيمة مضافة وقواعد رسوم ومتطلبات امتثال وموانئ دخول خاصة.',
  'countries.atAGlance': 'الوجهات في لمحة',
  'countries.taxStacks': 'كيف تتراكم الضرائب',

  // Methods
  'methods.lead':
    'الطرق الرئيسية لنقل البضائع من الصين إلى الخليج، مقارنةً بالتكلفة والسرعة ونوع البضاعة التي يناسبها كل منها.',
  'methods.howToChoose': 'كيف تختار',
  'methods.whatIs': 'ما هو {name}؟',
  'methods.whenToUse': 'متى تستخدم {name}',
  'methods.pricingWorks': 'كيف يعمل تسعير {name}',
  'methods.referenceCosts': 'نطاقات التكلفة المرجعية',
  'methods.transitTime': 'مدة النقل',
  'methods.prosCons': 'المزايا والعيوب',
  'methods.pros': 'المزايا',
  'methods.cons': 'العيوب',
  'methods.stepByStep': 'كيف يعمل {name} خطوة بخطوة',
  'methods.item': 'البند',
  'methods.indicativeRange': 'النطاق الاسترشادي (الصين → الخليج)',
  'methods.confidence': 'الثقة',
  'methods.costCaption': 'نطاقات التكلفة الاسترشادية لممر الصين–الخليج',
  'methods.lastUpdated': 'آخر تحديث: {date}.',

  // Confidence badges
  'confidence.HIGH': 'مرتفع',
  'confidence.MEDIUM': 'متوسط',
  'confidence.LOW': 'منخفض',

  // CTA
  'cta.title': 'احصل على عرض سعر للشحن',
  'cta.text':
    'أخبرنا عن شحنتك وسنوصلك بمزودين موثقين على ممر الصين–الخليج.',
  'cta.label': 'احصل على عرض سعر',

  // Card
  'card.learnMore': 'اعرف المزيد',

  // Ad slot
  'ad.label': 'إعلان',
  'ad.headline': 'أعلن مع WorldFreightHub',
  'ad.text': 'تواصل مع المستوردين وصنّاع القرار في الشحن على ممر الصين–الخليج.',
  'ad.cta': 'أعلن',

  // TL;DR
  'tldr': 'خلاصة',

  // Generic
  'generic.indicativeNote':
    'الأسعار ومدد النقل على هذه الصفحة نطاقات استرشادية وليست عروض أسعار فورية — أكد الأرقام مع ناقل مرخص أو وكيل شحن قبل الحجز.',
};

export const ui: Record<Locale, Dict> = { en, ar };

// Locale helpers
export function detectLocale(pathname: string): Locale {
  return pathname.startsWith('/ar/') || pathname === '/ar' ? 'ar' : 'en';
}

export function t(locale: Locale, key: string, vars?: Record<string, string | number>): string {
  let str = ui[locale][key] ?? ui.en[key] ?? key;
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      str = str.replaceAll(`{${k}}`, String(v));
    }
  }
  return str;
}

export function localizePath(pathname: string, locale: Locale): string {
  // Convert an English path to its localized equivalent, and vice versa.
  const base = pathname.replace(/^\/ar(?=\/|$)/, '').replace(/^\//, '');
  if (locale === 'ar') return `/ar/${base}`;
  return `/${base}`;
}

export function alternateHref(pathname: string, locale: Locale): string {
  return `https://worldfreighthub.net${localizePath(pathname, locale)}`;
}
