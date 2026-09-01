import type { Route, FaqItem, RouteCostRow } from './types';

interface OriginProfileAr {
  note: string;
}

interface DestProfileAr {
  note: string;
  routing: string;
  transitNote: string;
  costRows: RouteCostRow[];
  insight: string;
}

const portNamesAr: Record<string, string> = {
  shanghai: 'شنغهاي',
  'ningbo-zhoushan': 'نينغبو-تشوشان',
  shenzhen: 'شنجن',
  jeddah: 'جدة',
  dammam: 'الدمام',
  'jebel-ali': 'جبل علي',
  hamad: 'حمد',
  shuwaikh: 'الشويخ',
  sohar: 'صحار',
  'khalifa-bin-salman': 'خليفة بن سلمان',
};

const originProfilesAr: Record<string, OriginProfileAr> = {
  shanghai: {
    note: 'شنغهاي أكثر موانئ الحاويات ازدحامًا في العالم والمنشأ الافتراضي لصادرات شرق الصين.',
  },
  'ningbo-zhoushan': {
    note: 'نينغبو-تشوشان أكبر ميناء في العالم من حيث حمولة البضائع وبوابة رئيسية لتصنيع تشجيانغ.',
  },
  shenzhen: {
    note: 'شنجن (يانتان/شيكو) هي بوابة التصدير الرئيسية لجنوب الصين، وتخدم تجمعات الإلكترونيات والسلع الاستهلاكية في دلتا نهر اللؤلؤ.',
  },
};

const destProfilesAr: Record<string, DestProfileAr> = {
  jeddah: {
    note: 'جدة هي بوابة السعودية على البحر الأحمر وأكثر موانئها ازدحامًا، وتخدم غرب المملكة ووسطها.',
    routing: 'التوجيه عبر البحر الأحمر يعني عدم التعرض لمضيق هرمز — ميزة إضافية عندما تشتد توترات الخليج.',
    transitNote:
      'الإبحارات المباشرة شائعة، مع إعادة شحن بعض الخدمات عبر سنغافورة أو كولومبو. ويتجنب التوجيه عبر البحر الأحمر مضيق هرمز.',
    costRows: [
      { label: 'FCL 20 قدمًا', range: '$1,500 – $6,200', confidence: 'MEDIUM' },
      { label: 'FCL 40 قدمًا', range: '$1,900 – $8,100', confidence: 'MEDIUM' },
      { label: 'LCL (للمتر المكعب)', range: '$20 – $110', confidence: 'MEDIUM' },
    ],
    insight:
      'مسار البحر الأحمر ومسار الخليج يحملان مخاطر جيوسياسية مختلفة، وجعل عام 2026 تجاهل ذلك مستحيلًا. فقد دفعت أزمة مضيق هرمز تأمين مخاطر الحرب من 0.125% إلى 0.4% أو أكثر لكل عبور، ما رفع أسعار جانب الخليج — بينما حوّل الحصار البحري الحوثي للسعودية في يوليو 2026 خطر جنوب البحر الأحمر من نظري إلى واقعي. اختيار جدة بدل الدمام ليس اختيارًا بين «آمن» و«محفوف بالمخاطر»؛ بل اختيار بين خطرين مختلفين. وهذا الفارق هو سبب اتساع نطاقات أسعار السعودية هنا.',
  },
  dammam: {
    note: 'الدمام هي بوابة السعودية على الخليج، وتخدم المنطقة الشرقية والرياض عبر روابط برية وسككية داخلية.',
    routing: 'يمر التوجيه الخليجي عبر مضيق هرمز، الممر الأكثر تعرضًا للمخاطر الجيوسياسية.',
    transitNote:
      'يُعاد الشحن غالبًا عبر سنغافورة أو كولومبو؛ فمكالمات الخليج المباشرة أقل تكرارًا منها إلى جدة. وعبور مضيق هرمز هو متغير الخطر الرئيسي.',
    costRows: [
      { label: 'FCL 20 قدمًا', range: '$1,500 – $6,200', confidence: 'MEDIUM' },
      { label: 'FCL 40 قدمًا', range: '$1,900 – $8,100', confidence: 'MEDIUM' },
      { label: 'LCL (للمتر المكعب)', range: '$20 – $110', confidence: 'MEDIUM' },
    ],
    insight:
      'الدمام هي البوابة الأكثر تعرضًا للمخاطر الجيوسياسية على الممر. فكل حاوية تعبر مضيق هرمز، وعندما يشتد ذلك الممر المائي — كما حدث خلال 2026 — تتغذى أقساط مخاطر الحرب وتكاليف الوقود مباشرة في السعر. والنطاق الواسع هنا (1,500 إلى 6,200 دولار لحاوية 20 قدمًا) ليس ضجيجًا؛ بل مرونة علاوة المخاطر مع دورة الأخبار. إن كنت تشحن إلى المنطقة الشرقية، فأدرج هامش مخاطر في نموذج التكلفة الإجمالية بدل التسعير وفق سعر فترة الهدوء.',
  },
  'jebel-ali': {
    note: 'جبل علي أكبر ميناء في الشرق الأوسط ومركز إعادة التصدير في الإمارات، بمنطقة حرة شاسعة.',
    routing: 'الممر الأعلى ترددًا على مسار الصين–الخليج، مع أكبر عدد من خيارات الناقلين.',
    transitNote:
      'الجدول الأكثف على المسار — أكبر عدد من المكالمات المباشرة والخيارات من الناقلين، رغم أن بعض الخدمات ما تزال تُعاد عبر سنغافورة.',
    costRows: [
      { label: 'FCL 20 قدمًا', range: '$1,500 – $3,250', confidence: 'MEDIUM' },
      { label: 'FCL 40 قدمًا', range: '$2,200 – $3,950', confidence: 'MEDIUM' },
      { label: 'LCL (للمتر المكعب)', range: '$60 – $180', confidence: 'MEDIUM' },
    ],
    insight:
      'جبل علي هو حيث تحصل على أفضل سعر على الممر، لسبب بسيط: أكبر عدد من الناقلين يتنافسون على البضاعة. فالمزيد من المنافسة يضغط نطاق الأسعار، لذا يكون النطاق هنا أضيق من السعودية. لكنه ما يزال يعبر مضيق هرمز، لذا تنطبق علاوة المخاطر الجيوسياسية نفسها. والخطة هي استخدام تردد جبل علي للتفاوض، مع معاملة خطر هرمز كبند منفصل في نموذجك.',
  },
  hamad: {
    note: 'ميناء حمد هو البوابة التجارية الوحيدة لقطر، بُني ليتعامل مع توجه البلاد نحو الاكتفاء الذاتي بعد الحصار.',
    routing: 'سوق أحادية البوابة — كل بضائع الحاويات المتجهة إلى قطر تُخلَّص عبر حمد.',
    transitNote:
      'إبحارات أقل من مسارات الإمارات أو السعودية؛ وإعادة الشحن عبر سنغافورة أو محور إقليمي شائعة. ونوافذ الجدولة أوسع.',
    costRows: [
      { label: 'FCL 20 قدمًا', range: '$1,700 – $2,500', confidence: 'MEDIUM' },
      { label: 'FCL 40 قدمًا', range: '$2,500 – $3,600', confidence: 'MEDIUM' },
      { label: 'LCL (للمتر المكعب)', range: '$75 – $100', confidence: 'MEDIUM' },
    ],
    insight:
      'قطر سوق أحادية البوابة، ما يعني أنك لا تحصل على منافسة الناقلين التي تضغط الأسعار في جبل علي. فالجدول أرق وإعادة الشحن أكثر شيوعًا، لذا تخفي مدة النقل النموذجية البالغة 22 يومًا نافذة واقعية أوسع. وضريبة القيمة المضافة 0% في قطر ميزة تكلفة وصول حقيقية — لكن يمكن أن يقابلها جزئيًا مسار أبطأ وأقل مرونة. سعّر التوفير الضريبي والجدول معًا.',
  },
  shuwaikh: {
    note: 'الشويخ هو الميناء التجاري الرئيسي للكويت، يتعامل مع البضائع العامة والحاويات قرب مدينة الكويت.',
    routing: 'مسار أقل ترددًا من الإمارات أو السعودية، لذا تكون نوافذ الجدولة أوسع.',
    transitNote:
      'مسار منخفض التردد؛ تعيد معظم الخدمات الشحن عبر سنغافورة أو محور إقليمي. توقع نوافذ جدولة أوسع وتنوعًا أكبر في التوجيه.',
    costRows: [
      { label: 'FCL 20 قدمًا', range: '$1,500 – $2,500', confidence: 'MEDIUM' },
      { label: 'FCL 40 قدمًا', range: '$2,200 – $3,600', confidence: 'MEDIUM' },
      { label: 'LCL (للمتر المكعب)', range: '$70 – $100', confidence: 'MEDIUM' },
    ],
    insight:
      'ضريبة القيمة المضافة 0% في الكويت تبدو رائعة على جدول الضرائب وأقل روعة عندما تنتظر الشحنة إبحارًا أقل تكرارًا. فالشويخ مسار منخفض التردد، لذا تكون إعادة الشحن ونوافذ الجدولة الأوسع هي القاعدة — والـ24 يومًا النموذجية هي نقطة وسط أكثر منها وعدًا. التكلفة الحقيقية للكويت هي الوقت والأوراق؛ فالتوفير الضريبي حقيقي، لكن خصص ميزانية للمسار الأبطأ.',
  },
  sohar: {
    note: 'صحار هي البوابة الشمالية الرئيسية لعُمان ومركز حاويات سريع النمو بميناء عميق.',
    routing: 'غالبًا أقل ازدحامًا من جبل علي أو جدة، ما قد يعني تخليصًا أسرع.',
    transitNote:
      'مسار متنامٍ بمكالمات مباشرة متحسنة؛ أقل ازدحامًا من المحاور الأكبر. وما يزال يعبر مضيق هرمز عبر مدخل خليج عُمان.',
    costRows: [
      { label: 'FCL 20 قدمًا', range: '$1,500 – $2,600', confidence: 'MEDIUM' },
      { label: 'FCL 40 قدمًا', range: '$2,200 – $3,800', confidence: 'MEDIUM' },
      { label: 'LCL (للمتر المكعب)', range: '$60 – $110', confidence: 'MEDIUM' },
    ],
    insight:
      'ميزة صحار هي الشيء الوحيد الذي لا يظهر في جدول الأسعار: ازدحام أقل. ففي موسم الذروة، عندما تصطف جبل علي وجدة، يمكن أن يكون تخليص صحار أسرع بشكل ملموس، ما يترجم إلى أيام غرامة تأخير أقل وتسليم أكثر قابلية للتنبؤ. وما يزال يعبر نحو مضيق هرمز، لكن لشمال عُمان وحتى أجزاء من سوق الإمارات، فإنه مراجحة ازدحام تستحق التسعير.',
  },
  'khalifa-bin-salman': {
    note: 'ميناء خليفة بن سلمان هو البوابة الرئيسية للبحرين، متصل بشرق السعودية عبر جسر الملك فهد.',
    routing: 'مدخل بديل استراتيجي لسوقي الدمام والرياض.',
    transitNote:
      'تردد معتدل، يُعاد الشحن عادةً عبر محور إقليمي. ويضيف جسر الملك فهد للشاحنات مرحلة برية إلى السعودية.',
    costRows: [
      { label: 'FCL 20 قدمًا', range: '$1,500 – $2,500', confidence: 'MEDIUM' },
      { label: 'FCL 40 قدمًا', range: '$2,200 – $3,600', confidence: 'MEDIUM' },
      { label: 'LCL (للمتر المكعب)', range: '$75 – $100', confidence: 'MEDIUM' },
    ],
    insight:
      'القيمة الحقيقية للبحرين ليست معدل ضرائبها — فضريبة القيمة المضافة 10% هي ثاني أعلى معدل في الخليج — بل جغرافيتها. يتصل ميناء خليفة بن سلمان بشرق السعودية عبر جسر الملك فهد، ما يجعله مدخلًا بديلًا قابلًا للتطبيق للدمام والرياض عندما تزدحم جدة أو يرتفع خطر البحر الأحمر. وبالنسبة لبضائع شرق السعودية، يمكن أن يقايض التوجيه عبر البحرين قليلًا من الضريبة بكثير من يقين الجدول.',
  },
};

const destinationsAr: { port: string; country: string; typical: number }[] = [
  { port: 'jeddah', country: 'saudi-arabia', typical: 18 },
  { port: 'dammam', country: 'saudi-arabia', typical: 20 },
  { port: 'jebel-ali', country: 'united-arab-emirates', typical: 21 },
  { port: 'hamad', country: 'qatar', typical: 22 },
  { port: 'shuwaikh', country: 'kuwait', typical: 24 },
  { port: 'sohar', country: 'oman', typical: 19 },
  { port: 'khalifa-bin-salman', country: 'bahrain', typical: 22 },
];

function buildFaqsAr(
  originName: string,
  destName: string,
  typical: number,
  range: [number, number],
  routing: string,
): FaqItem[] {
  return [
    {
      q: `كم تستغرق مدة الشحن من ${originName} إلى ${destName}؟`,
      a: `عادةً ${typical} يومًا، بمدى ${range[0]}–${range[1]} يومًا حسب التوجيه المباشر مقابل المعاد الشحن والازدحام الموسمي وجدول الناقل المحدد.`,
    },
    {
      q: `هل الرحلة من ${originName} إلى ${destName} مباشرة؟`,
      a: `${routing} أكد الخدمة المباشرة مقابل المعاد شحنها مع وكيل الشحن لديك، إذ يختلف ذلك حسب الناقل والموسم.`,
    },
    {
      q: `كيف أحصل على سعر حالي من ${originName} إلى ${destName}؟`,
      a: `تتغير الأسعار على هذا المسار أسبوعيًا مع الوقود والموسم والمخاطر الجيوسياسية. اطلب عرض سعر مباشر عبر نموذج الحصول على عرض سعر للحصول على رقم حالي خاص بالمسار، بدل الاعتماد على سعر منشور.`,
    },
  ];
}

function buildKeyTakeawaysAr(
  originName: string,
  destName: string,
  originNote: string,
  destNote: string,
  typical: number,
  range: [number, number],
): string[] {
  return [
    `${originName} → ${destName} تستغرق عادةً ${typical} يومًا، بمدى ${range[0]}–${range[1]} يومًا.`,
    originNote,
    destNote,
    `أكد التوجيه المباشر مقابل المعاد الشحن، فهو أكبر متغير في كل من الوقت والتكلفة.`,
  ];
}

export const routesAr: Route[] = Object.keys(originProfilesAr).flatMap((origin) =>
  destinationsAr.map((dest) => {
    const originName = portNamesAr[origin] ?? origin;
    const destName = portNamesAr[dest.port] ?? dest.port;
    const originProfile = originProfilesAr[origin];
    const destProfile = destProfilesAr[dest.port];
    return {
      slug: `${origin}-${dest.port}`,
      originPort: origin,
      destPort: dest.port,
      country: dest.country,
      transitDays: { typical: dest.typical, range: [15, 30] as [number, number] },
      confidence: 'LOW' as const,
      note: 'تقديري — تحقق مع الناقل المعني قبل الاعتماد على هذا الرقم',
      originNote: originProfile.note,
      destNote: destProfile.note,
      routingNote: destProfile.routing,
      transitNote: destProfile.transitNote,
      costRows: destProfile.costRows,
      insight: destProfile.insight,
      faqs: buildFaqsAr(originName, destName, dest.typical, [15, 30], destProfile.routing),
      keyTakeaways: buildKeyTakeawaysAr(
        originName,
        destName,
        originProfile.note,
        destProfile.note,
        dest.typical,
        [15, 30],
      ),
    };
  }),
);

export function getArRouteBySlug(slug: string): Route | undefined {
  return routesAr.find((route) => route.slug === slug);
}
