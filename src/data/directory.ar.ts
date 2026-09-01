import type { DirectoryProvider } from './types';
import { directoryProviders } from './directory';

// ——— Enumerable-field translations ———
const hqCountryAr: Record<string, string> = {
  China: 'الصين',
  'Saudi Arabia': 'السعودية',
  'United Arab Emirates': 'الإمارات',
  France: 'فرنسا',
};

const countryAr: Record<string, string> = {
  'saudi-arabia': 'السعودية',
  'united-arab-emirates': 'الإمارات',
  kuwait: 'الكويت',
  qatar: 'قطر',
  oman: 'عُمان',
  bahrain: 'البحرين',
  yemen: 'اليمن',
};

const methodAr: Record<string, string> = {
  'Sea freight': 'الشحن البحري',
  'Ocean freight': 'الشحن البحري',
  'Air freight': 'الشحن الجوي',
  'Rail freight': 'الشحن بالسكك الحديدية',
  'Road freight': 'الشحن البري',
  'Land freight': 'الشحن البري',
  Express: 'البريد السريع',
  'Express courier': 'البريد السريع',
  'Courier services': 'خدمات البريد السريع',
  'Courier/express': 'البريد السريع',
  'International express (DHL/UPS/FedEx/TNT/EMS)': 'البريد السريع الدولي (DHL/UPS/FedEx/TNT/EMS)',
  DDP: 'DDP',
  'DDP shipping': 'الشحن DDP',
  'DDP door-to-door': 'DDP من الباب إلى الباب',
  'DDP customs clearance': 'التخليص الجمركي DDP',
  'DDP/DAP door-to-door': 'DDP/DAP من الباب إلى الباب',
  'DDU/DDP/DAP door-to-door': 'DDU/DDP/DAP من الباب إلى الباب',
  'DDP double-clearance (tax-inclusive door-to-door)': 'التخليص المزدوج DDP (من الباب إلى الباب شامل الضرائب)',
  'Door-to-door': 'من الباب إلى الباب',
  'Last-mile delivery': 'توصيل الميل الأخير',
  'Last-mile': 'الميل الأخير',
  'Amazon FBA': 'أمازون FBA',
  'Amazon FBA DDP': 'أمازون FBA بنظام DDP',
  'Amazon.sa FBA': 'أمازون السعودية FBA',
  'Noon.com FBA': 'نون FBA',
  'FBA first-leg': 'المرحلة الأولى لـFBA',
  'Sea freight (FCL/LCL)': 'الشحن البحري (FCL/LCL)',
  'Sea freight (LCL)': 'الشحن البحري (LCL)',
  'FCL/LCL': 'FCL/LCL',
  LCL: 'LCL',
  'Customs clearance': 'التخليص الجمركي',
  Warehousing: 'التخزين',
  'Warehouse & distribution': 'التخزين والتوزيع',
  'Warehousing & distribution': 'التخزين والتوزيع',
  'Warehousing & prep': 'التخزين والتجهيز',
  'Pick & pack': 'الانتقاء والتغليف',
  'Order packing': 'تغليف الطلبات',
  'Fulfillment (3PL)': 'التنفيذ (3PL)',
  Shipping: 'الشحن',
  'Freight forwarding': 'وكالة الشحن',
  'Freight consolidation': 'تجميع الشحنات',
  Sourcing: 'التوريد',
  Procurement: 'التوريد والمشتريات',
  'Sea / air / rail / road freight': 'الشحن البحري / الجوي / بالسكك / البري',
  'Air & sea freight': 'الشحن الجوي والبحري',
  Railway: 'السكك الحديدية',
  NVOCC: 'NVOCC',
  'SABER/ESMA certification support': 'دعم شهادات SABER/ESMA',
  'SABER/ZATCA compliance': 'الامتثال لـSABER/ZATCA',
  'Inspection & certification': 'الفحص والشهادات',
  'Cross-border trucking': 'النقل البري عبر الحدود',
  'Road transportation (GCC)': 'النقل البري (الخليج)',
  'Shipping agency': 'وكالة الشحن',
  'Project cargo': 'البضائع المشاريعية',
  Packaging: 'التغليف',
  'Cargo insurance': 'تأمين البضائع',
  'Dropshipping & sourcing': 'الدروب شيبينغ والتوريد',
};

const platformAr: Record<string, string> = {
  'Amazon FBA': 'أمازون FBA',
  Noon: 'نون',
};

// ——— Free-text translation memory (keyed by exact English string) ———
const descAr: Record<string, string> = {
  'Chinese freight forwarder advertising double-clearance, tax-inclusive (DDP) door-to-door services to the Gulf.':
    'وكيل شحن صيني يعلن عن خدمات التخليص المزدوج الشاملة للضرائب (DDP) من الباب إلى الباب إلى الخليج.',
  'Chinese freight forwarder referenced in a marketplace listing with a Guangzhou/Shenzhen → Saudi DDP door-to-door benchmark of ~45 RMB/kg.':
    'وكيل شحن صيني مذكور في إدراج سوق مع سعر مرجعي للشحن DDP من الباب إلى الباب من قوانغتشو/شنجن إلى السعودية بنحو 45 يوان/كجم.',
  'China-based freight forwarder offering sea and air freight, warehousing, customs clearance and Amazon FBA shipping from China to worldwide destinations, with a published China-to-Saudi DDP guide.':
    'وكيل شحن مقره الصين يقدم الشحن البحري والجوي والتخزين والتخليص الجمركي وشحن أمازون FBA من الصين إلى وجهات عالمية، مع دليل منشور للشحن DDP من الصين إلى السعودية.',
  'Freight forwarder with a Chinese-language/Arabic site claiming 10+ years shipping from China to Gulf states, with a Jebel Ali (Dubai) free-zone warehouse and multi-currency settlement (AED/SAR/CNY).':
    'وكيل شحن بموقع بالصينية/العربية يدّعي خبرة تزيد على 10 سنوات في الشحن من الصين إلى دول الخليج، مع مستودع في المنطقة الحرة بجبل علي (دبي) وتسوية متعددة العملات (درهم/ريال/يوان).',
  'China-based freight forwarder marketing air, sea (FCL/LCL), rail and DDP shipping to 150+ countries, with a published China-to-Saudi DDP guide.':
    'وكيل شحن مقره الصين يسوّق الشحن الجوي والبحري (FCL/LCL) وبالسكك الحديدية وDDP إلى أكثر من 150 دولة، مع دليل منشور للشحن DDP من الصين إلى السعودية.',
  'DDP-focused Chinese freight forwarder with route pages for China to North America, Europe and the Gulf, advertising tax-inclusive door-to-door LCL sea and air freight.':
    'وكيل شحن صيني متخصص في DDP بصفحات مسارات من الصين إلى أمريكا الشمالية وأوروبا والخليج، يعلن عن شحن بحري وجوي LCL من الباب إلى الباب شامل الضرائب.',
  'China-based full-service freight forwarder describing itself as an Amazon-certified service provider with carrier agreements (Maersk/MSC/COSCO/UPS/DHL/FedEx) and 15+ consolidation warehouses across China.':
    'وكيل شحن صيني متكامل الخدمات يصف نفسه كمزود معتمد من أمازون باتفاقيات ناقلين (Maersk/MSC/COSCO/UPS/DHL/FedEx) وأكثر من 15 مستودع تجميع في أنحاء الصين.',
  'China shipping agent and freight forwarder advertising air, sea, rail, road and DDP shipping with a China-to-Saudi cost guide (DDP air ~33-48 RMB/kg, DDP sea from ~1,600 RMB/CBM).':
    'وكيل شحن صيني يعلن عن الشحن الجوي والبحري وبالسكك والبري وDDP مع دليل تكلفة من الصين إلى السعودية (DDP جوًا ~33-48 يوان/كجم، DDP بحرًا من ~1,600 يوان/م³).',
  'China-based shipping agent, freight forwarder and 3PL ("Cargo From China Limited / CFC") with a China-to-Saudi route page covering sea, air, rail and courier.':
    'وكيل شحن ومقدم خدمات لوجستية طرف ثالث مقره الصين ("Cargo From China Limited / CFC") بصفحة مسار من الصين إلى السعودية تغطي البحر والجو والسكك والبريد.',
  'Suzhou-based supply chain management company offering China-to-Saudi freight forwarding plus road transportation across Saudi Arabia and other GCC countries.':
    'شركة إدارة سلسلة توريد مقرها سوتشو تقدم وكالة الشحن من الصين إلى السعودية إضافة إلى النقل البري عبر السعودية ودول خليجية أخرى.',
  'Shenzhen-based international freight forwarder (also referenced as Basenton Ocean Freight) with multilingual route pages including a China-to-Saudi DDP cost guide.':
    'وكيل شحن دولي مقره شنجن (يُشار إليه أيضًا باسم Basenton Ocean Freight) بصفحات مسارات متعددة اللغات تشمل دليل تكلفة DDP من الصين إلى السعودية.',
  'Destination-side freight forwarder with stated physical offices in Al Khobar (Saudi Arabia) and Manama (Bahrain), specialising in the King Fahd Causeway land lane and Saudi import compliance.':
    'وكيل شحن في جهة الوجهة بمكاتب فعلية معلنة في الخبر (السعودية) والمنامة (البحرين)، متخصص في المسار البري عبر جسر الملك فهد والامتثال للاستيراد السعودي.',
  'Saudi Arabia-based freight forwarder (founded 1990) with head office in Jeddah and branches in Riyadh, Dammam, Rabigh and Jubail, plus a Dubai branch.':
    'وكيل شحن مقره السعودية (تأسس 1990) بمقر رئيسي في جدة وفروع في الرياض والدمام ورابغ والجبيل، إضافة إلى فرع في دبي.',
  'Saudi Arabia-based shipping and logistics company offering warehousing, distribution, insurance brokerage, documentation, customs clearance and project cargo handling.':
    'شركة شحن ولوجستيات مقرها السعودية تقدم التخزين والتوزيع ووساطة التأمين والتوثيق والتخليص الجمركي ومناولة البضائع المشاريعية.',
  'Long-established Saudi shipping service provider (formed 1956) described as one of the largest in the kingdom.':
    'مزود خدمات شحن سعودي عريق (تأسس 1956) يوصف بأنه من الأكبر في المملكة.',
  'China freight agent marketing cheap air and sea DDP door-to-door shipping from China to Saudi Arabia and the UAE via a Made-in-China storefront.':
    'وكيل شحن صيني يسوّق شحنًا جوًا وبحرًا DDP رخيصًا من الباب إلى الباب من الصين إلى السعودية والإمارات عبر واجهة متجر Made-in-China.',
  'Freight forwarder focused on the Middle East with stated branches in Jebel Ali (Dubai) and Lebanon, offering air, sea and land freight plus DDP door-to-door.':
    'وكيل شحن يركز على الشرق الأوسط بفروع معلنة في جبل علي (دبي) ولبنان، يقدم الشحن الجوي والبحري والبري إضافة إلى DDP من الباب إلى الباب.',
  'China-based freight forwarder offering sea and air door-to-door (DDU/DDP/DAP) from China to Dubai/UAE, loading from Shenzhen, Guangzhou, Ningbo, Shanghai and other major ports.':
    'وكيل شحن مقره الصين يقدم الشحن البحري والجوي من الباب إلى الباب (DDU/DDP/DAP) من الصين إلى دبي/الإمارات، بالتحميل من شنجن وقوانغتشو ونينغبو وشنغهاي وموانئ رئيسية أخرى.',
  'UAE-based cargo service specialising in China-to-UAE/GCC air and sea freight, with packaging, customs clearance and cargo insurance.':
    'خدمة بضائع مقرها الإمارات متخصصة في الشحن الجوي والبحري من الصين إلى الإمارات/الخليج، مع التغليف والتخليص الجمركي وتأمين البضائع.',
  'Global logistics and procurement group with a dedicated China desk, offering door-to-door shipping from China to the UAE and other GCC destinations across all modes.':
    'مجموعة لوجستيات وتوريد عالمية بمكتب صيني متخصص، تقدم شحنًا من الباب إلى الباب من الصين إلى الإمارات ووجهات خليجية أخرى عبر جميع الوسائط.',
  'China-based international freight forwarder and customs broker with 35+ years of experience, serving GCC lanes including the UAE and Qatar.':
    'وكيل شحن دولي ومخلص جمركي مقره الصين بخبرة تزيد على 35 عامًا، يخدم مسارات الخليج بما فيها الإمارات وقطر.',
  'China freight forwarder with stated connections in Saudi Arabia, Oman, Qatar, Bahrain and Kuwait, offering sea and air freight plus DDP.':
    'وكيل شحن صيني بصلات معلنة في السعودية وعُمان وقطر والبحرين والكويت، يقدم الشحن البحري والجوي إضافة إلى DDP.',
  'Guangzhou-based logistics company offering air freight to Doha (Qatar) and sea freight, with contracted rates from Hong Kong, Guangzhou, Shanghai, Beijing and Shenzhen.':
    'شركة لوجستيات مقرها قوانغتشو تقدم الشحن الجوي إلى الدوحة (قطر) والشحن البحري، بأسعار متعاقدة من هونغ كونغ وقوانغتشو وشنغهاي وبكين وشنجن.',
  'Shenzhen-based freight forwarder focused on Amazon FBA shipping from China to Saudi Arabia and the UAE on DDP terms, with 10+ years delivery and 5+ years FBA experience.':
    'وكيل شحن مقره شنجن يركز على شحن أمازون FBA من الصين إلى السعودية والإمارات بنظام DDP، بخبرة توصيل تزيد على 10 سنوات وخبرة FBA تزيد على 5 سنوات.',
  'China freight forwarder offering door-to-door sea and air freight to Jeddah, Dubai, Saudi Arabia and the UAE, with FBA DDP lines and SASO/SABER certificate support.':
    'وكيل شحن صيني يقدم الشحن البحري والجوي من الباب إلى الباب إلى جدة ودبي والسعودية والإمارات، مع خطوط FBA بنظام DDP ودعم شهادات SASO/SABER.',
  'Yiwu-based sourcing and freight agent consolidating orders from multiple Yiwu suppliers into one shipment, routed by sea, air or rail with DDP options.':
    'وكيل توريد وشحن مقره ييوو يجمع طلبات عدة موردين من ييوو في شحنة واحدة، تُوجَّه بحرًا أو جوًا أو بالسكك مع خيارات DDP.',
  'China-based freight forwarder and FBA logistics platform combining forwarding, sourcing and warehouse services, shipping to US, UK, EU, Canada, Japan and UAE.':
    'وكيل شحن ومنصة لوجستيات FBA مقرها الصين تجمع بين وكالة الشحن والتوريد وخدمات المستودعات، وتشحن إلى الولايات المتحدة والمملكة المتحدة والاتحاد الأوروبي وكندا واليابان والإمارات.',
  'China-based freight forwarder specialising in Amazon FBA shipping and international logistics, founded 2015, moving goods from China to global markets by air, sea or rail.':
    'وكيل شحن مقره الصين متخصص في شحن أمازون FBA واللوجستيات الدولية، تأسس 2015، وينقل البضائع من الصين إلى الأسواق العالمية جوًا وبحرًا وبالسكك.',
  'Shenzhen cross-border transport company (est. 2015) covering international express, FBA first-leg, air/sea freight and dedicated DDP lines to Dubai, UAE and Saudi Arabia.':
    'شركة نقل عابر للحدود مقرها شنجن (تأسست 2015) تغطي البريد السريع الدولي والمرحلة الأولى لـFBA والشحن الجوي/البحري وخطوط DDP مخصصة إلى دبي والإمارات والسعودية.',
  'Guangdong-based logistics company offering sea freight from Shenzhen/Shanghai to Saudi Arabia, plus DDP/FBA air and sea shipping to Dubai, Qatar and Kuwait.':
    'شركة لوجستيات مقرها قوانغدونغ تقدم الشحن البحري من شنجن/شنغهاي إلى السعودية، إضافة إلى الشحن الجوي والبحري DDP/FBA إلى دبي وقطر والكويت.',
  'Shenzhen-based logistics partner (founded 2016) specialising in cross-border shipping to Saudi Arabia, the US and Europe, with COSCO/MSC/CMA-CGM agency and DDP door-to-door.':
    'شريك لوجستي مقره شنجن (تأسس 2016) متخصص في الشحن العابر للحدود إلى السعودية والولايات المتحدة وأوروبا، مع وكالة COSCO/MSC/CMA-CGM وDDP من الباب إلى الباب.',
  'Shenzhen freight forwarder with 20+ years of experience, over 350 staff and 15,000 m² of warehouse space, serving EU, US, Canada, Mexico and the Middle East.':
    'وكيل شحن في شنجن بخبرة تزيد على 20 عامًا وأكثر من 350 موظفًا ومساحة مستودعات 15,000 م²، يخدم الاتحاد الأوروبي والولايات المتحدة وكندا والمكسيك والشرق الأوسط.',
  'Shenzhen freight forwarder positioned for DDP and Middle East routes, offering air, sea, rail and DDP door-to-door.':
    'وكيل شحن في شنجن متخصص في DDP ومسارات الشرق الأوسط، يقدم الشحن الجوي والبحري وبالسكك وDDP من الباب إلى الباب.',
  'Guangdong freight forwarder specialising in fast LCL and express shipping, with express, rail and DDP options.':
    'وكيل شحن في قوانغدونغ متخصص في شحن LCL السريع والبريد السريع، مع خيارات بريد وسكك وDDP.',
  'Wuhan-based shipping company offering fast air freight, FCL/LCL and DDP door-to-door delivery.':
    'شركة شحن مقرها ووهان تقدم شحنًا جويًا سريعًا وFCL/LCL وتوصيل DDP من الباب إلى الباب.',
  'Shenzhen freight forwarder focused on Amazon FBA and budget shipping, offering air, sea and DDP.':
    'وكيل شحن في شنجن يركز على أمازون FBA والشحن الاقتصادي، يقدم الجو والبحر وDDP.',
  'Shenzhen freight forwarder focused on small and medium shipments, offering air, express and rail.':
    'وكيل شحن في شنجن يركز على الشحنات الصغيرة والمتوسطة، يقدم الجو والبريد والسكك.',
  'Shenzhen freight forwarder specialising in DDP and Amazon FBA shipping, offering sea, air and DDP.':
    'وكيل شحن في شنجن متخصص في DDP وشحن أمازون FBA، يقدم البحر والجو وDDP.',
  'Shenzhen freight forwarder focused on bulk shipping and dropshipping, offering sea freight (FCL/LCL), DDP door-to-door and warehousing.':
    'وكيل شحن في شنجن يركز على الشحن بالجملة والدروب شيبينغ، يقدم الشحن البحري (FCL/LCL) وDDP من الباب إلى الباب والتخزين.',
  'Guangzhou-based logistics group offering DDP/FBA warehousing and door-to-door shipping from China to the UAE, Dubai and Saudi Arabia (Riyadh, Dammam, Jeddah), plus US/UK/Canada/Europe routes.':
    'مجموعة لوجستيات مقرها قوانغتشو تقدم تخزين DDP/FBA وشحنًا من الباب إلى الباب من الصين إلى الإمارات ودبي والسعودية (الرياض والدمام وجدة)، إضافة إلى مسارات الولايات المتحدة والمملكة المتحدة وكندا وأوروبا.',
  'China freight forwarder offering sea and air shipping to Dubai/UAE Amazon FBA and Saudi Arabia, departing Shanghai, Shenzhen, Ningbo, Hong Kong, Guangzhou, Xiamen and Tianjin.':
    'وكيل شحن صيني يقدم الشحن البحري والجوي إلى أمازون FBA في دبي/الإمارات والسعودية، بانطلاق من شنغهاي وشنجن ونينغبو وهونغ كونغ وقوانغتشو وشيامن وتيانجين.',
  'China-based logistics provider specialising in Amazon.sa and Noon.com FBA logistics from China to Saudi Arabia.':
    'مزود لوجستيات مقره الصين متخصص في لوجستيات FBA لأمازون السعودية ونون من الصين إلى السعودية.',
  'China international freight forwarder arranging ocean and air freight (e.g. Qingdao/Shenzhen to Jeddah), plus Amazon FBA, warehousing and customs clearance.':
    'وكيل شحن دولي صيني يرتب الشحن البحري والجوي (مثل تشينغداو/شنجن إلى جدة)، إضافة إلى أمازون FBA والتخزين والتخليص الجمركي.',
  'Shenzhen-based cross-border e-commerce logistics provider handling pick and pack and end-to-end shipping from China to Amazon FBA Saudi Arabia.':
    'مزود لوجستيات تجارة إلكترونية عابرة للحدود مقره شنجن يتعامل مع الانتقاء والتغليف والشحن الشامل من الصين إلى أمازون FBA في السعودية.',
  'Professional China to Middle East freight forwarder providing international logistics solutions.':
    'وكيل شحن محترف من الصين إلى الشرق الأوسط يقدم حلول لوجستيات دولية.',
  'Shenzhen freight forwarder offering air, sea, rail and express shipping, with DDP door-to-door service to Saudi Arabia, Dubai and the UAE.':
    'وكيل شحن في شنجن يقدم الشحن الجوي والبحري وبالسكك والبريد، مع خدمة DDP من الباب إلى الباب إلى السعودية ودبي والإمارات.',
  'Shenzhen 3PL specialising in fulfillment — inventory storage, order packing and shipping for e-commerce and Amazon sellers.':
    'مزود خدمات طرف ثالث في شنجن متخصص في التنفيذ — تخزين المخزون وتغليف الطلبات والشحن لبائعي التجارة الإلكترونية وأمازون.',
  'Shenzhen freight forwarder named in a third-party top-10 China-to-Middle-East forwarders list alongside Sinotrans, DHL Global Forwarding and Kerry Logistics.':
    'وكيل شحن في شنجن مذكور في قائمة طرف ثالث لأفضل 10 وكلاء شحن من الصين إلى الشرق الأوسط إلى جانب سينوترانس وDHL Global Forwarding وكيري لوجستكس.',
  'Shenzhen international freight agency offering sea, air and express shipping from China, with listings for China to Saudi Arabia DDP.':
    'وكالة شحن دولية في شنجن تقدم الشحن البحري والجوي والبريد من الصين، مع إدراجات لشحن DDP من الصين إلى السعودية.',
  'Shenzhen freight forwarder with NVOCC qualification offering FCL/LCL sea and air shipping.':
    'وكيل شحن في شنجن بمؤهل NVOCC يقدم الشحن البحري FCL/LCL والجوي.',
  'Shenzhen forwarder specialised in DGR and battery cargo, with Middle East coverage.':
    'وكيل شحن في شنجن متخصص في بضائع DGR والبطاريات، مع تغطية للشرق الأوسط.',
  'Shenzhen freight forwarder operating as a traffic department for shippers.':
    'وكيل شحن في شنجن يعمل كإدارة نقل للشاحنين.',
  'Shenzhen freight forwarder (FIC-Logistics Group), Luohu District.':
    'وكيل شحن في شنجن (مجموعة FIC-Logistics)، منطقة لوهو.',
  'Shenzhen shipping agency based in Di Wang Tower.':
    'وكالة شحن في شنجن مقرها برج دي وانغ.',
  'Shenzhen freight forwarder, Luohu District.':
    'وكيل شحن في شنجن، منطقة لوهو.',
  'Guangzhou freight forwarding company.':
    'شركة وكالة شحن في قوانغتشو.',
  'Shenzhen supply chain and freight forwarding company.':
    'شركة سلسلة توريد ووكالة شحن في شنجن.',
  'China international freight forwarder.':
    'وكيل شحن دولي صيني.',
  'Shenzhen shipping company.':
    'شركة شحن في شنجن.',
  'Shenzhen international logistics company.':
    'شركة لوجستيات دولية في شنجن.',
  'China supply chain management and freight forwarding company.':
    'شركة إدارة سلسلة توريد ووكالة شحن صينية.',
  'Shenzhen railway logistics company specialising in China-Europe, CIS and Iran multimodal rail.':
    'شركة لوجستيات سكك في شنجن متخصصة في السكك متعددة الوسائط بين الصين وأوروبا ورابطة الدول المستقلة وإيران.',
  'China supply chain company handling overweight cargo, logs, lumber, agriculture and food.':
    'شركة سلسلة توريد صينية تتعامل مع البضائع زائدة الوزن والجذوع والأخشاب والزراعة والأغذية.',
  'China international freight forwarding company offering full logistics solutions.':
    'شركة وكالة شحن دولية صينية تقدم حلول لوجستيات متكاملة.',
  'Shenzhen logistics technology company (50-249 staff).':
    'شركة لوجستيات تكنولوجية في شنجن (50-249 موظفًا).',
  'Guangzhou freight forwarder (2-9 staff).':
    'وكيل شحن في قوانغتشو (2-9 موظفين).',
  'Shenzhen logistics company offering sea shipping.':
    'شركة لوجستيات في شنجن تقدم الشحن البحري.',
  'Shenzhen freight forwarder with NVOCC qualification, FCL/LCL sea and air.':
    'وكيل شحن في شنجن بمؤهل NVOCC، شحن بحري FCL/LCL وجوي.',
  'Shenzhen international freight forwarder with warehousing and flexible transit times.':
    'وكيل شحن دولي في شنجن مع تخزين ومدد نقل مرنة.',
  'Guangzhou supply chain company offering air freight DDU/DDP.':
    'شركة سلسلة توريد في قوانغتشو تقدم الشحن الجوي DDU/DDP.',
  'Shenzhen NVOCC focused on South-East Asia to Latin America and North America, with Middle East coverage.':
    'وكيل NVOCC في شنجن يركز على جنوب شرق آسيا إلى أمريكا اللاتينية وأمريكا الشمالية، مع تغطية للشرق الأوسط.',
  'Shenzhen ocean freight forwarder with Asia coverage.':
    'وكيل شحن بحري في شنجن بتغطية آسيوية.',
  'Shenzhen international freight logistics enterprise with NVOCC qualification, covering the Middle East and other regions.':
    'مؤسسة لوجستيات شحن دولية في شنجن بمؤهل NVOCC، تغطي الشرق الأوسط ومناطق أخرى.',
  'Shenzhen freight forwarding company.':
    'شركة وكالة شحن في شنجن.',
  'Shenzhen branch of Delmar International, a global freight forwarder.':
    'فرع شنجن لشركة Delmar International، وكيل شحن عالمي.',
  'Shenzhen freight forwarder.':
    'وكيل شحن في شنجن.',
  'Shenzhen logistics company (almost 20 years) offering sea, rail, air and truck, with Middle East coverage.':
    'شركة لوجستيات في شنجن (نحو 20 عامًا) تقدم البحر والسكك والجو والشاحنات، مع تغطية للشرق الأوسط.',
  'Shenzhen supply chain company.':
    'شركة سلسلة توريد في شنجن.',
  'Shenzhen forwarder offering China-to-Europe DDP rail freight door-to-door.':
    'وكيل شحن في شنجن يقدم شحنًا بالسكك DDP من الباب إلى الباب من الصين إلى أوروبا.',
  'Shanghai international freight transport agency offering air cargo forwarding.':
    'وكالة نقل شحن دولية في شنغهاي تقدم وكالة الشحن الجوي.',
  'Shenzhen transport company offering express and air freight door-to-door DDU/DDP.':
    'شركة نقل في شنجن تقدم البريد السريع والشحن الجوي من الباب إلى الباب DDU/DDP.',
  'Shandong international freight forwarding company.':
    'شركة وكالة شحن دولية في شاندونغ.',
  'China international freight forwarder offering sea transport consultancy.':
    'وكيل شحن دولي صيني يقدم استشارات النقل البحري.',
  'China customs house broker and freight forwarder.':
    'مخلص جمركي ووكيل شحن صيني.',
  'Ningbo forwarder for dangerous cargo (DG Class 2), chemicals, ISO tank leasing and cargo consolidation.':
    'وكيل شحن في نينغبو للبضائع الخطرة (الفئة 2) والكيماويات وتأجير خزانات ISO وتجميع البضائع.',
  'Ningbo licensed forwarder offering international air freight and sea/land/air forwarding.':
    'وكيل شحن مرخص في نينغبو يقدم الشحن الجوي الدولي ووكالة الشحن البحري/البري/الجوي.',
  'Ningbo forwarder offering tailored logistics plans with WMS/VMI I.T. systems.':
    'وكيل شحن في نينغبو يقدم خطط لوجستيات مخصصة مع أنظمة WMS/VMI.',
  'Ningbo consolidation specialist running weekly boxes from Ningbo/Shanghai to South-East Asia, India, the Middle East and Europe.':
    'متخصص تجميع في نينغبو يشغّل حاويات أسبوعية من نينغبو/شنغهاي إلى جنوب شرق آسيا والهند والشرق الأوسط وأوروبا.',
  'Ningbo NVOCC and international freight forwarder.':
    'وكيل NVOCC ووكيل شحن دولي في نينغبو.',
  'Ningbo forwarder on Middle East and Europe corridors with a global agency network.':
    'وكيل شحن في نينغبو على ممرّي الشرق الأوسط وأوروبا بشبكة وكالات عالمية.',
  'Ningbo supply chain manager partnered with China Railway Corporation, with financial logistics.':
    'مدير سلسلة توريد في نينغبو شريك لشركة السكك الحديدية الصينية، مع لوجستيات مالية.',
  'Top-3 Ningbo listed forwarder with cold chain, project and oversize cargo services.':
    'وكيل شحن مدرج ضمن أفضل 3 في نينغبو مع خدمات سلسلة التبريد والبضائع المشاريعية والضخمة.',
  'Ningbo LCL consolidation specialist with FCL and bonded warehouse services.':
    'متخصص تجميع LCL في نينغبو مع خدمات FCL ومستودعات جمركية.',
  'China shipping agent consolidating from Shanghai, Shenzhen, Ningbo, Qingdao and Xiamen to the Middle East, with door-to-door service.':
    'وكيل شحن صيني يجمّع من شنغهاي وشنجن ونينغبو وتشينغداو وشيامن إلى الشرق الأوسط، مع خدمة من الباب إلى الباب.',
  'China forwarder offering door-to-door ocean and air freight to the Middle East for Amazon and e-commerce sellers, collecting from most Chinese cities.':
    'وكيل شحن صيني يقدم الشحن البحري والجوي من الباب إلى الباب إلى الشرق الأوسط لبائعي أمازون والتجارة الإلكترونية، بجمع من معظم المدن الصينية.',
  'China freight forwarder with Middle East documentation expertise (Fasah, HS codes, Kuwait authorisation) and alternative routing.':
    'وكيل شحن صيني بخبرة في توثيق الشرق الأوسط (فسح، ورموز HS، وتراخيص الكويت) والتوجيه البديل.',
  'China forwarder offering ocean freight from Ningbo to Dammam, Saudi Arabia.':
    'وكيل شحن صيني يقدم الشحن البحري من نينغبو إلى الدمام في السعودية.',
  'Shenzhen forwarder offering shipping service from China to the Middle East, Iran and UAE.':
    'وكيل شحن في شنجن يقدم خدمة الشحن من الصين إلى الشرق الأوسط وإيران والإمارات.',
  'Xian-based China-Europe Railway Express specialist connecting China with Europe, Central Asia and the Middle East via FCL/LCL/SOC/COC rail.':
    'متخصص في قطار الصين-أوروبا السريع مقره شيان يربط الصين بأوروبا وآسيا الوسطى والشرق الأوسط عبر سكك FCL/LCL/SOC/COC.',
  'Shenzhen forwarder (since 2010) specialising in China-Europe Railway Express and cross-border logistics.':
    'وكيل شحن في شنجن (منذ 2010) متخصص في قطار الصين-أوروبا السريع واللوجستيات العابرة للحدود.',
  'Global freight forwarder with China offices in Qingdao, Ningbo, Guangzhou and Xiamen serving ocean and DG cargo.':
    'وكيل شحن عالمي بمكاتب صينية في تشينغداو ونينغبو وقوانغتشو وشيامن يخدم البضائع البحرية والخطرة.',
};

const noteAr: Record<string, string> = {
  'Contact details (phone / email / address) not yet independently verified — none are published until confirmed.':
    'بيانات الاتصال (الهاتف / البريد / العنوان) لم تُتحقق منها بشكل مستقل بعد — لا يُنشر أي منها حتى التأكيد.',
  'Website and contact details not verified. Listing held pending confirmation.':
    'الموقع وبيانات الاتصال غير موثقة. الإدراج معلّق بانتظار التأكيد.',
  'FIATA and IATA certified professionals (published on site). Contact details still to be confirmed.':
    'محترفون معتمدون من FIATA وIATA (منشور على الموقع). بيانات الاتصال ما تزال بانتظار التأكيد.',
  'Contact details not independently verified; site lists a WhatsApp number (+86 18825057036).':
    'بيانات الاتصال لم تُتحقق منها بشكل مستقل؛ الموقع يدرج رقم واتساب (+86 18825057036).',
  'FMC-compliant licensed NVOCC (published on site). Contact details still to be confirmed.':
    'NVOCC مرخص ومتوافق مع FMC (منشور على الموقع). بيانات الاتصال ما تزال بانتظار التأكيد.',
  'Company identity and contact details not yet independently verified.':
    'هوية الشركة وبيانات الاتصال لم تُتحقق منها بشكل مستقل بعد.',
  'Site lists a WhatsApp/phone number (+86 180 2548 7644); identity not independently verified.':
    'الموقع يدرج رقم واتساب/هاتف (+86 180 2548 7644)؛ والهوية لم تُتحقق منها بشكل مستقل.',
  'Contact details not independently verified; site claims offices in Al Khobar (KSA) and Manama (Bahrain).':
    'بيانات الاتصال لم تُتحقق منها بشكل مستقل؛ الموقع يدّعي مكاتب في الخبر (السعودية) والمنامة (البحرين).',
  'Website and contact details not yet independently located or verified.':
    'الموقع وبيانات الاتصال لم يُعثر عليها أو تُوثق بشكل مستقل بعد.',
  'Website and contact details not yet located or verified.':
    'الموقع وبيانات الاتصال لم يُعثر عليها أو تُوثق بعد.',
  'Business identity independently verified: NVOCC approved by China Ministry of Transport, SGS-audited supplier (report QIP-ASI252103), and a verified badge on Made-in-China. Contact details and specific service claims still to be confirmed.':
    'هوية العمل متحققة بشكل مستقل: NVOCC معتمد من وزارة النقل الصينية، ومورد مدقق من SGS (تقرير QIP-ASI252103)، وشارة موثقة على Made-in-China. بيانات الاتصال وادعاءات الخدمة المحددة ما تزال بانتظار التأكيد.',
  'Contact details not independently verified; site lists Lebanon and Jebel Ali (Dubai) branch addresses.':
    'بيانات الاتصال لم تُتحقق منها بشكل مستقل؛ الموقع يدرج عناوين فروع في لبنان وجبل علي (دبي).',
  'Contact (info@sino-shipping.com) listed on site; identity not independently verified.':
    'بيانات الاتصال (info@sino-shipping.com) مدرجة على الموقع؛ والهوية لم تُتحقق منها بشكل مستقل.',
  'Contact details not independently verified; site lists a WhatsApp number (+86 13533420644).':
    'بيانات الاتصال لم تُتحقق منها بشكل مستقل؛ الموقع يدرج رقم واتساب (+86 13533420644).',
  'Operated by Shenzhen Cubic Speed International Forwarding Co., Ltd. (same entity behind ChinaDdpShipping). Contact details not independently verified.':
    'تديرها شركة Shenzhen Cubic Speed International Forwarding Co., Ltd. (الكيان نفسه وراء ChinaDdpShipping). بيانات الاتصال لم تُتحقق منها بشكل مستقل.',
  'Listed as an Amazon SPN provider (platform-verified). Contact details still to be confirmed.':
    'مدرج كمزود Amazon SPN (موثق عبر المنصة). بيانات الاتصال ما تزال بانتظار التأكيد.',
  'Business identity verified via Made-in-China Audited Supplier (third-party inspection; Gold Member since 2024). Contact details still to be confirmed.':
    'هوية العمل موثقة عبر مورد مدقق من Made-in-China (فحص طرف ثالث؛ عضو ذهبي منذ 2024). بيانات الاتصال ما تزال بانتظار التأكيد.',
  'Business identity verified via Made-in-China Audited Supplier (third-party inspection). Contact details still to be confirmed.':
    'هوية العمل موثقة عبر مورد مدقق من Made-in-China (فحص طرف ثالث). بيانات الاتصال ما تزال بانتظار التأكيد.',
  'Business identity verified on Alibaba (assessed videos, factory inspection reports, verified production lines; 7-year supplier). Contact details still to be confirmed.':
    'هوية العمل موثقة على علي بابا (مقاطع فيديو مُقيَّمة، تقارير فحص مصنع، خطوط إنتاج موثقة؛ مورد منذ 7 سنوات). بيانات الاتصال ما تزال بانتظار التأكيد.',
  'Contact details not independently verified; 20+ years / 350 staff / 15,000 m² warehouse as stated in listicle.':
    'بيانات الاتصال لم تُتحقق منها بشكل مستقل؛ خبرة 20+ عامًا / 350 موظفًا / مستودع 15,000 م² كما ورد في قائمة مقالات.',
  'Business identity verified as an Intertek Verified Supplier (Made-in-China). Website and contact details still to be confirmed.':
    'هوية العمل موثقة كمورد معتمد من Intertek (Made-in-China). الموقع وبيانات الاتصال ما تزال بانتظار التأكيد.',
  'Contact details not independently verified.':
    'بيانات الاتصال لم تُتحقق منها بشكل مستقل.',
  'Contact details not independently verified; listed via an Alibaba storefront.':
    'بيانات الاتصال لم تُتحقق منها بشكل مستقل؛ مُدرج عبر واجهة متجر علي بابا.',
  'NVOCC licence MOC-NV09192 (China Ministry of Transport) and FMC licence 030310 (US) published on site. Contact details still to be confirmed.':
    'ترخيص NVOCC رقم MOC-NV09192 (وزارة النقل الصينية) وترخيص FMC رقم 030310 (الولايات المتحدة) منشوران على الموقع. بيانات الاتصال ما تزال بانتظار التأكيد.',
  'Contact details not independently verified; listed via a Made-in-China storefront.':
    'بيانات الاتصال لم تُتحقق منها بشكل مستقل؛ مُدرج عبر واجهة متجر Made-in-China.',
  'Contact details not independently verified; listed via Clutch.co.':
    'بيانات الاتصال لم تُتحقق منها بشكل مستقل؛ مُدرج عبر Clutch.co.',
  'Website not yet located; listed in a third-party top-10 listicle.':
    'الموقع لم يُعثر عليه بعد؛ مُدرج في قائمة أفضل 10 من طرف ثالث.',
  'Website not yet located; listed via a supplier directory.':
    'الموقع لم يُعثر عليه بعد؛ مُدرج عبر دليل موردين.',
  'Website not yet located; listed via a supplier directory with NVOCC qualification.':
    'الموقع لم يُعثر عليه بعد؛ مُدرج عبر دليل موردين مع مؤهل NVOCC.',
  'NVOCC, officially registered with the China Ministry of Transport (published on site). Contact details still to be confirmed.':
    'NVOCC، مسجل رسميًا لدى وزارة النقل الصينية (منشور على الموقع). بيانات الاتصال ما تزال بانتظار التأكيد.',
  'WIFFA member and Secretary General of the Shantou Port chapter (World International Freight Forwarder Alliance). Contact details still to be confirmed.':
    'عضو WIFFA وأمين عام فرع ميناء شانتو (الاتحاد العالمي لوكلاء الشحن الدوليين). بيانات الاتصال ما تزال بانتظار التأكيد.',
  'Global 3PL — ISO 9001:2015, ISO 13485 and CTPAT certified, FDA registered (published on site). Contact details still to be confirmed.':
    'مزود طرف ثالث عالمي — حاصل على شهادات ISO 9001:2015 وISO 13485 وCTPAT ومسجل لدى FDA (منشور على الموقع). بيانات الاتصال ما تزال بانتظار التأكيد.',
};

// Pattern-based Arabic rendering for provenance/claim strings (keeps proper nouns & quoted figures verbatim)
function arSource(src: string): string {
  return src
    .replace(/^Referenced in /, 'مذكور في ')
    .replace(/ official site \(/g, ' — الموقع الرسمي (')
    .replace(/ supplier storefront \(/g, ' — واجهة متجر موردين (')
    .replace(/ storefront \(/g, ' — واجهة متجر (')
    .replace(/ marketplace listing \(/g, ' — إدراج سوق (')
    .replace(/ directory \(/g, ' — دليل (')
    .replace(/ top-10 China-to-Middle-East listicle \(/g, ' — قائمة أفضل 10 من الصين إلى الشرق الأوسط (')
    .replace(/ top-forwarders listicle \(/g, ' — قائمة أفضل الوكلاء (')
    .replace(/ top-FBA-forwarders listicle \(/g, ' — قائمة أفضل وكلاء FBA (')
    .replace(/ shipping-companies listicle \(/g, ' — قائمة شركات الشحن (')
    .replace(/ China freight-forwarders directory \(/g, ' — دليل وكلاء الشحن في الصين (')
    .replace(/ route page \(/g, ' — صفحة مسار (')
    .replace(/\(found in research pass /g, '(عُثر عليه في جولة بحث ')
    .replace(/\(Firecrawl scrape /g, '(جمع Firecrawl ')
    .replace(/\(research pass /g, '(جولة بحث ')
    .replace(/\)$/, ')');
}

function arClaim(claim: string): string {
  return claim
    .replace(/ — self-reported on their site, not independently verified$/, ' — ادعاء ذاتي على موقعهم، لم يُتحقق منه بشكل مستقل')
    .replace(/ — self-reported storefront listing$/, ' — إدراج واجهة متجر، ادعاء ذاتي')
    .replace(/ — self-reported marketing figures$/, ' — أرقام تسويقية، ادعاء ذاتي')
    .replace(/ — self-reported rate guide$/, ' — دليل أسعار، ادعاء ذاتي')
    .replace(/ — self-reported guide$/, ' — دليل، ادعاء ذاتي')
    .replace(/ — self-reported project listing$/, ' — إدراج مشروع، ادعاء ذاتي')
    .replace(/ — marketplace listing, unverified snapshot$/, ' — إدراج سوق، لقطة غير موثقة')
    .replace(/ — self-reported$/, ' — ادعاء ذاتي')
    .replace(/ — as stated in a third-party route page, unverified$/, ' — كما ورد في صفحة مسار طرف ثالث، غير موثق')
    .replace(/ — as stated in a third-party top-10 listicle, unverified$/, ' — كما ورد في قائمة أفضل 10 من طرف ثالث، غير موثق')
    .replace(/ — as stated in a third-party listicle, unverified$/, ' — كما ورد في قائمة مقالات طرف ثالث، غير موثق')
    .replace(/ — as stated in Clutch.co, unverified$/, ' — كما ورد في Clutch.co، غير موثق')
    .replace(/ — as stated in a supplier directory, unverified$/, ' — كما ورد في دليل موردين، غير موثق');
}

export const directoryProvidersAr: DirectoryProvider[] = directoryProviders.map((p) => ({
  ...p,
  hqCountry: hqCountryAr[p.hqCountry] ?? p.hqCountry,
  serviceCountries: p.serviceCountries.map((c) => countryAr[c] ?? c),
  methods: p.methods.map((m) => methodAr[m] ?? m),
  platformFocus: p.platformFocus?.map((f) => platformAr[f] ?? f),
  description: descAr[p.description] ?? p.description,
  contactNote: noteAr[p.contactNote] ?? p.contactNote,
  sourceName: arSource(p.sourceName),
  selfReportedClaims: p.selfReportedClaims?.map((c) => arClaim(c)),
}));

export function getArProviderBySlug(slug: string): DirectoryProvider | undefined {
  return directoryProvidersAr.find((provider) => provider.slug === slug);
}
