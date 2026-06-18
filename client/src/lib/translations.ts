export type Language = 'tr' | 'en' | 'ar';

export interface Translations {
  [key: string]: {
    tr: string;
    en: string;
    ar: string;
  };
}

export const translations: Translations = {
  // Navigation & Header
  'nav.home': {
    tr: 'Anasayfa',
    en: 'Home',
    ar: 'الرئيسية',
  },
  'nav.services': {
    tr: 'Hizmetlerimiz',
    en: 'Services',
    ar: 'خدماتنا',
  },
  'nav.about': {
    tr: 'Hakkımızda',
    en: 'About Us',
    ar: 'من نحن',
  },
  'nav.contact': {
    tr: 'İletişim',
    en: 'Contact',
    ar: 'اتصل بنا',
  },

  // Hero Section
  'hero.title': {
    tr: 'One Car Care - Küçükçekmece Profesyonel Araç Yıkama',
    en: 'One Car Care - Professional Auto Detailing in Küçükçekmece',
    ar: 'One Car Care - خدمات تفصيل السيارات المهنية في كوتشوك تشكمجة',
  },
  'hero.subtitle': {
    tr: 'Aracınızın boyasını koruyun, estetik görünümünü uzun yıllar muhafaza edin. PPF kaplama, seramik kaplama, cam filmi ve detaylı temizlik hizmetleriyle araçlarınıza özel çözümler sunuyoruz.',
    en: 'Protect your vehicle\'s paint and maintain its aesthetic appearance for years. We offer specialized solutions including PPF coating, ceramic coating, window tinting, and detailed cleaning services.',
    ar: 'احم طلاء سيارتك واحافظ على مظهرها الجمالي لسنوات. نقدم حلولاً متخصصة تشمل طلاء PPF والطلاء الخزفي وتظليل النوافذ وخدمات التنظيف التفصيلي.',
  },
  'hero.cta': {
    tr: 'Hemen Teklif Al',
    en: 'Get Quote Now',
    ar: 'احصل على عرض سعر',
  },

  // Services Section
  'services.title': {
    tr: 'Hizmetlerimiz',
    en: 'Our Services',
    ar: 'خدماتنا',
  },
  'services.subtitle': {
    tr: 'Araçlarınız için kapsamlı koruma ve estetik çözümleri',
    en: 'Comprehensive protection and aesthetic solutions for your vehicles',
    ar: 'حلول حماية وجمالية شاملة لسيارتك',
  },

  // PPF Service
  'service.ppf.title': {
    tr: 'PPF Kaplama',
    en: 'Paint Protection Film',
    ar: 'طلاء حماية الطلاء',
  },
  'service.ppf.desc': {
    tr: '100% TPU malzeme ile üretilen PPF, aracınızın boyasını taş çarpması, çizilme ve dış etkenlere karşı korur. 7-9 yıl garanti ile uzun süreli dayanıklılık sağlar.',
    en: 'Made from 100% TPU material, PPF protects your vehicle\'s paint from rock chips, scratches, and environmental damage. Provides long-lasting durability with 7-9 year warranty.',
    ar: 'مصنوع من مادة TPU بنسبة 100٪، يحمي PPF طلاء سيارتك من الحصى والخدوش والأضرار البيئية. يوفر متانة طويلة الأمد مع ضمان 7-9 سنوات.',
  },

  // Ceramic Coating Service
  'service.ceramic.title': {
    tr: 'Seramik Kaplama',
    en: 'Ceramic Coating',
    ar: 'الطلاء الخزفي',
  },
  'service.ceramic.desc': {
    tr: 'Yüksek parlaklık ve hidrofobik yüzey sağlayan seramik kaplama, aracınızı su, çamur ve kirden korur. Showroom ışıltısı ile aracınız her zaman yeni görünür.',
    en: 'Ceramic coating provides high gloss and hydrophobic surface, protecting your vehicle from water, mud, and dirt. Your car maintains a showroom shine at all times.',
    ar: 'يوفر الطلاء الخزفي لمعاناً عالياً وسطحاً كارهاً للماء، مما يحمي سيارتك من الماء والطين والأوساخ. تحافظ سيارتك على لمعان غرفة العرض في جميع الأوقات.',
  },

  // Window Tinting Service
  'service.tinting.title': {
    tr: 'Cam Filmi',
    en: 'Window Tinting',
    ar: 'تظليل النوافذ',
  },
  'service.tinting.desc': {
    tr: 'UV ve ısı korumalı cam filmi, sürüş konforunu artırır ve iç mekanı korur. Gizlilik sağlarken aracınızın estetik görünümünü iyileştirir.',
    en: 'UV and heat-protective window tinting increases driving comfort and protects the interior. Provides privacy while enhancing your vehicle\'s aesthetic appearance.',
    ar: 'يزيد تظليل النوافذ الواقي من الأشعة فوق البنفسجية والحرارة من راحة القيادة ويحمي الداخل. يوفر الخصوصية مع تحسين المظهر الجمالي لسيارتك.',
  },

  // Auto Detailing Service
  'service.detailing.title': {
    tr: 'Oto Kuaför',
    en: 'Auto Detailing',
    ar: 'تفصيل السيارات',
  },
  'service.detailing.desc': {
    tr: 'Detaylı iç ve dış temizlik, sterilizasyon ve bakım hizmetleriyle aracınızı ilk günkü gibi temiz ve hijyenik tutuyoruz.',
    en: 'Detailed interior and exterior cleaning, sterilization, and maintenance services keep your vehicle clean and hygienic like the first day.',
    ar: 'نحافظ على سيارتك نظيفة وصحية مثل اليوم الأول من خلال خدمات التنظيف التفصيلي والتعقيم والصيانة.',
  },
  'service.ppf.fullContent': {
    tr: `
### Nedir?
PPF (Paint Protection Film), aracınızın boyalı yüzeylerini dış etkenlere karşı korumak amacıyla uygulanan şeffaf, kendiliğinden iyileşebilen (self-healing) bir poliüretan filmdir. Yüksek darbe emici özelliği sayesinde taş sıçramaları, çizikler, kuş pisliği, asit yağmurları ve UV ışınları gibi zararlı faktörlere karşı üstün koruma sağlar.

### Avantajları:
*   **Üstün Koruma:** Taş izleri, çizikler ve hafif sürtünmelerden boyayı korur.
*   **Kendiliğinden İyileşme:** Küçük çizikler güneş ısısı veya sıcak su ile kendiliğinden kaybolur.
*   **Parlaklık ve Estetik:** Aracın orijinal boya parlaklığını artırır ve uzun süre korur.
*   **Sararma Yapmaz:** Yüksek kaliteli PPF filmleri zamanla sararma yapmaz, şeffaflığını korur.
*   **Kolay Temizlik:** Hidrofobik yüzeyi sayesinde kir ve su tutmaz, temizliği kolaylaştırır.
*   **Yüksek Değer Koruma:** Aracınızın ikinci el değerini artırır.

### Uygulama Süreci:
1.  **Detaylı Temizlik:** Aracın yüzeyi özel kimyasallarla derinlemesine temizlenir ve kil uygulaması yapılır.
2.  **Yüzey Hazırlığı:** Boya kusurları giderilir, polisaj ve hare giderme işlemleri uygulanır.
3.  **Kesim:** Araca özel bilgisayar destekli kesim (plotter) ile hatasız film parçaları hazırlanır.
4.  **Uygulama:** Özel solüsyonlar kullanılarak film, aracın yüzeyine hava kabarcığı ve toz kalmayacak şekilde titizlikle uygulanır.
5.  **Kürlenme:** Uygulama sonrası belirli bir süre boyunca filmin yüzeye tam oturması ve yapışması beklenir.

### Neden One Car Care?
One Car Care olarak, sektör lideri **Zenith** ve **Orafol** markalarının 100% TPU içerikli, 7-9 yıl garantili PPF filmlerini kullanıyoruz. Uzman ve sertifikalı ekibimizle, aracınızın her detayına özen göstererek kusursuz bir uygulama sağlıyoruz.
`,
    en: `
### What is it?
PPF (Paint Protection Film) is a transparent, self-healing polyurethane film applied to your vehicle's painted surfaces to protect against external factors. Thanks to its high impact absorption, it provides superior protection against harmful factors such as stone chips, scratches, bird droppings, acid rain, and UV rays.

### Advantages:
*   **Superior Protection:** Protects paint from stone chips, scratches, and minor abrasions.
*   **Self-Healing:** Small scratches disappear on their own with sun heat or hot water.
*   **Shine and Aesthetics:** Enhances and maintains the original paint gloss for a long time.
*   **Non-Yellowing:** High-quality PPF films do not yellow over time, maintaining their transparency.
*   **Easy Cleaning:** Thanks to its hydrophobic surface, it repels dirt and water, making cleaning easier.
*   **High Value Retention:** Increases the resale value of your vehicle.

### Application Process:
1.  **Detailed Cleaning:** The vehicle's surface is thoroughly cleaned with special chemicals and clay bar application.
2.  **Surface Preparation:** Paint imperfections are removed, polishing and swirl removal processes are applied.
3.  **Cutting:** Custom film pieces are prepared with computer-aided cutting (plotter) for a flawless fit.
4.  **Application:** The film is meticulously applied to the vehicle's surface using special solutions, ensuring no air bubbles or dust remain.
5.  **Curing:** After application, the film is allowed to fully settle and adhere to the surface for a certain period.

### Why One Car Care?
At One Car Care, we use 100% TPU PPF films with 7-9 year warranty from industry-leading brands **Zenith** and **Orafol**. With our expert and certified team, we provide a flawless application, paying attention to every detail of your vehicle.
`,
    ar: `
### ما هو؟
PPF (فيلم حماية الطلاء) هو فيلم بولي يوريثان شفاف ذاتي الشفاء يطبق على الأسطح المطلية لسيارتك للحماية من العوامل الخارجية. بفضل خاصية امتصاص الصدمات العالية، يوفر حماية فائقة ضد العوامل الضارة مثل شظايا الحجارة والخدوش وفضلات الطيور والأمطار الحمضية والأشعة فوق البنفسجية.

### المزايا:
*   **حماية فائقة:** يحمي الطلاء من شظايا الحجارة والخدوش والاحتكاكات الطفيفة.
*   **شفاء ذاتي:** تختفي الخدوش الصغيرة تلقائياً بحرارة الشمس أو الماء الساخن.
*   **لمعان وجمالية:** يعزز ويحافظ على لمعان الطلاء الأصلي لفترة طويلة.
*   **عدم الاصفرار:** أفلام PPF عالية الجودة لا تصفر مع مرور الوقت، وتحافظ على شفافيتها.
*   **سهولة التنظيف:** بفضل سطحه الكاره للماء، يطرد الأوساخ والماء، مما يسهل التنظيف.
*   **الحفاظ على القيمة العالية:** يزيد من قيمة إعادة بيع سيارتك.

### عملية التطبيق:
1.  **تنظيف مفصل:** يتم تنظيف سطح السيارة بعمق باستخدام مواد كيميائية خاصة وتطبيق الطين.
2.  **تحضير السطح:** يتم إزالة عيوب الطلاء، وتطبيق عمليات التلميع وإزالة الدوامات.
3.  **القطع:** يتم تحضير قطع الفيلم المخصصة للسيارة بدقة باستخدام القطع المدعوم بالكمبيوتر (الراسمة).
4.  **التطبيق:** يتم تطبيق الفيلم بدقة على سطح السيارة باستخدام محاليل خاصة، مع التأكد من عدم وجود فقاعات هواء أو غبار.
5.  **المعالجة:** بعد التطبيق، يُترك الفيلم ليثبت تماماً ويلتصق بالسطح لفترة معينة.
`
  },
  'service.ceramic.fullContent': {
    tr: `
### Nedir?
Seramik kaplama, aracın boyalı yüzeyine uygulanan, sıvı polimer bazlı, nano teknoloji ürünü bir koruyucu tabakadır. Bu tabaka, boya üzerinde ultra ince, sert ve şeffaf bir kalkan oluşturarak dış etkenlere karşı direnci artırır ve aracın parlaklığını uzun süre muhafaza eder.

### Avantajları:
*   **Derin Parlaklık:** Aracın boyasına ayna efekti veren, göz alıcı bir parlaklık kazandırır.
*   **Hidrofobik Etki:** Su itici özelliği sayesinde su damlacıkları yüzeyde tutunmaz, kir ve çamur kolayca akıp gider.
*   **UV Koruması:** Güneşin zararlı UV ışınlarına karşı koruma sağlayarak boyanın solmasını engeller.
*   **Kimyasal Direnç:** Kuş pisliği, ağaç reçinesi, asit yağmurları gibi kimyasal etkilere karşı direnç oluşturur.
*   **Mikro Çiziklere Karşı Koruma:** Yüzey sertliğini artırarak yıkama kaynaklı mikro çiziklerin oluşumunu geciktirir.
*   **Kolay Bakım:** Aracın temizliğini ve bakımını çok daha pratik hale getirir.

### Uygulama Süreci:
1.  **Ön Yıkama ve Dekontaminasyon:** Aracın yüzeyi demir tozu, zift gibi kirleticilerden arındırılır.
2.  **Polisaj ve Boya Düzeltme:** Boya üzerindeki çizikler, hareler ve kusurlar giderilerek yüzey seramik kaplamaya hazır hale getirilir.
3.  **Yağ Alma:** Yüzey, seramik kaplamanın maksimum tutunmasını sağlamak için özel yağ çözücülerle temizlenir.
4.  **Seramik Uygulaması:** Özel aplikatörler yardımıyla seramik kaplama katmanlar halinde ve kontrollü bir şekilde yüzeye uygulanır.
5.  **Kürlenme:** Uygulama sonrası belirli bir süre boyunca kaplamanın sertleşmesi ve tam koruma sağlaması beklenir.

### Neden One Car Care?
One Car Care olarak, aracınızın boyasını en iyi şekilde korumak ve parlaklığını artırmak için yüksek kaliteli seramik kaplama ürünleri kullanıyoruz. Detaylara verdiğimiz önem ve profesyonel uygulama tekniklerimizle aracınıza showroom kalitesinde bir görünüm kazandırıyoruz.
`,
    en: `
### What is it?
Ceramic coating is a liquid polymer-based, nano-technology protective layer applied to the painted surface of a vehicle. This layer creates an ultra-thin, hard, and transparent shield on the paint, increasing its resistance to external factors and maintaining the vehicle's shine for a long time.

### Advantages:
*   **Deep Shine:** Gives the vehicle's paint a mirror-like, dazzling shine.
*   **Hydrophobic Effect:** Thanks to its water-repellent property, water droplets do not cling to the surface, and dirt and mud easily run off.
*   **UV Protection:** Provides protection against harmful ultraviolet (UV) rays, preventing the paint from fading.
*   **Chemical Resistance:** Creates resistance against chemical effects such as bird droppings, tree sap, and acid rain.
*   **Protection Against Micro Scratches:** Increases surface hardness, delaying the formation of micro-scratches caused by washing.
*   **Easy Maintenance:** Makes vehicle cleaning and maintenance much more practical.

### Application Process:
1.  **Pre-Wash and Decontamination:** The vehicle's surface is cleaned of contaminants such as iron dust and tar.
2.  **Polishing and Paint Correction:** Scratches, swirls, and imperfections on the paint are removed, preparing the surface for ceramic coating.
3.  **Degreasing:** The surface is cleaned with special degreasers to ensure maximum adhesion of the ceramic coating.
4.  **Ceramic Application:** The ceramic coating is applied to the surface in layers and in a controlled manner using special applicators.
5.  **Curing:** After application, the coating is allowed to harden and provide full protection for a certain period.

### Why One Car Care?
At One Car Care, we use high-quality ceramic coating products to best protect your vehicle's paint and enhance its shine. With our attention to detail and professional application techniques, we give your vehicle a showroom-quality appearance.
`,
    ar: `
### ما هو؟
الطلاء الخزفي هو طبقة واقية سائلة قائمة على البوليمر، ومنتجة بتقنية النانو، تطبق على السطح المطلي للسيارة. تخلق هذه الطبقة درعًا رقيقًا وصلبًا وشفافًا على الطلاء، مما يزيد من مقاومته للعوامل الخارجية ويحافظ على لمعان السيارة لفترة طويلة.

### المزايا:
*   **لمعان عميق:** يمنح طلاء السيارة لمعانًا مبهراً يشبه المرآة.
*   **تأثير كاره للماء:** بفضل خاصيته الطاردة للماء، لا تلتصق قطرات الماء بالسطح، وتنزلق الأوساخ والطين بسهولة.
*   **حماية من الأشعة فوق البنفسجية:** يوفر حماية ضد الأشعة فوق البنفسجية الضارة، مما يمنع بهتان الطلاء.
*   **مقاومة كيميائية:** يخلق مقاومة ضد التأثيرات الكيميائية مثل فضلات الطيور ونسغ الأشجار والأمطار الحمضية.
*   **حماية ضد الخدوش الدقيقة:** يزيد من صلابة السطح، مما يؤخر تكون الخدوش الدقيقة الناتجة عن الغسيل.
*   **سهولة الصيانة:** يجعل تنظيف السيارة وصيانتها أكثر عملية بكثير.

### عملية التطبيق:
1.  **الغسيل المسبق وإزالة التلوث:** يتم تنظيف سطح السيارة من الملوثات مثل غبار الحديد والقطران.
2.  **التلميع وتصحيح الطلاء:** يتم إزالة الخدوش والدوامات والعيوب على الطلاء، مما يهيئ السطح للطلاء الخزفي.
3.  **إزالة الشحوم:** يتم تنظيف السطح بمزيلات شحوم خاصة لضمان أقصى التصاق للطلاء الخزفي.
4.  **تطبيق السيراميك:** يتم تطبيق الطلاء الخزفي على السطح في طبقات وبطريقة محكمة باستخدام أدوات تطبيق خاصة.
5.  **المعالجة:** بعد التطبيق، يُترك الطلاء ليتصلب ويوفر حماية كاملة لفترة معينة.
`
  },
  'service.tinting.fullContent': {
    tr: `
### Nedir?
Cam filmi, araç camlarına uygulanan, genellikle polyester bazlı, ince ve dayanıklı bir tabakadır. Bu filmler, farklı ton ve özelliklerde olup, aracın içine giren güneş ışığını, ısıyı ve UV radyasyonunu kontrol etme, gizlilik sağlama ve güvenlik artırma gibi amaçlarla kullanılır.

### Avantajları:
*   **Isı Kontrolü:** Yaz aylarında aracın iç sıcaklığını düşürerek klima kullanımını azaltır ve yakıt tasarrufu sağlar.
*   **UV Koruması:** Zararlı ultraviyole (UV) ışınlarının %99 kadarını engelleyerek araç içindeki döşemelerin solmasını önler ve yolcuların cilt sağlığını korur.
*   **Gizlilik ve Güvenlik:** Dışarıdan içerinin görünmesini zorlaştırarak gizlilik sağlar ve cam kırılmalarında cam parçalarının dağılmasını engelleyerek güvenliği artırır.
*   **Göz Kamaşmasını Azaltma:** Güneşin veya karşıdan gelen farların neden olduğu göz kamaşmasını azaltarak sürüş konforunu artırır.
*   **Estetik Görünüm:** Araca daha sportif ve şık bir görünüm kazandırır.

### Uygulama Süreci:
1.  **Cam Temizliği:** Cam yüzeyleri toz, kir ve yağdan arındırılır.
2.  **Kesim:** Camın boyutlarına ve şekline uygun olarak film hassas bir şekilde kesilir.
3.  **Uygulama:** Özel solüsyonlar kullanılarak film, cam yüzeyine hava kabarcığı ve kırışıklık kalmayacak şekilde dikkatlice yapıştırılır.
4.  **Su Tahliyesi:** Film ile cam arasındaki su ve hava, özel aletlerle dışarı atılır.
5.  **Kürlenme:** Uygulama sonrası filmin cama tam olarak yapışması için belirli bir süre beklenir.

### Neden One Car Care?
One Car Care olarak, aracınızın modeline ve ihtiyaçlarınıza uygun, yüksek kaliteli ve uzun ömürlü cam filmi çözümleri sunuyoruz. Profesyonel ekibimizle, kabarcık veya soyulma yapmayan, kusursuz bir uygulama garantisi veriyoruz. Tüm uygulamalarımızda yasal standartlara uygun ürünler kullanmaktayız.
`,
    en: `
### What is it?
Window film is a thin and durable layer, usually polyester-based, applied to vehicle windows. These films, with different shades and properties, are used to control sunlight, heat, and UV radiation entering the vehicle, provide privacy, and increase safety.

### Advantages:
*   **Heat Control:** Reduces the interior temperature of the vehicle in summer, decreasing air conditioning use and saving fuel.
*   **UV Protection:** Blocks up to 99% of harmful ultraviolet (UV) rays, preventing upholstery from fading and protecting passengers' skin health.
*   **Privacy and Security:** Makes it difficult to see inside from the outside, providing privacy, and increases safety by preventing glass fragments from scattering in case of breakage.
*   **Glare Reduction:** Reduces glare caused by the sun or oncoming headlights, increasing driving comfort.
*   **Aesthetic Appearance:** Gives the vehicle a more sporty and stylish look.

### Application Process:
1.  **Glass Cleaning:** Glass surfaces are cleaned of dust, dirt, and grease.
2.  **Cutting:** The film is precisely cut to the size and shape of the glass.
3.  **Application:** The film is carefully applied to the glass surface using special solutions, ensuring no air bubbles or wrinkles remain.
4.  **Water Drainage:** Water and air between the film and the glass are removed with special tools.
5.  **Curing:** After application, the film is allowed to fully adhere to the glass for a certain period.

### Why One Car Care?
At One Car Care, we offer high-quality and long-lasting window film solutions suitable for your vehicle's model and needs. With our professional team, we guarantee a flawless application without bubbles or peeling. We use products that comply with legal standards in all our applications.
`,
    ar: `
### ما هو؟
فيلم النوافذ هو طبقة رقيقة ومتينة، عادة ما تكون قائمة على البوليستر، تطبق على نوافذ السيارة. تستخدم هذه الأفلام، بألوان وخصائص مختلفة، للتحكم في ضوء الشمس والحرارة والأشعة فوق البنفسجية التي تدخل السيارة، وتوفير الخصوصية، وزيادة الأمان.

### المزايا:
*   **التحكم في الحرارة:** يقلل من درجة حرارة داخل السيارة في الصيف، مما يقلل من استخدام مكيف الهواء ويوفر الوقود.
*   **حماية من الأشعة فوق البنفسجية:** يحجب ما يصل إلى 99% من الأشعة فوق البنفسجية الضارة، مما يمنع بهتان المفروشات ويحمي صحة جلد الركاب.
*   **الخصوصية والأمان:** يجعل من الصعب رؤية الداخل من الخارج، مما يوفر الخصوصية، ويزيد من الأمان بمنع تناثر شظايا الزجاج في حالة الكسر.
*   **تقليل الوهج:** يقلل من الوهج الناتج عن الشمس أو المصابيح الأمامية القادمة، مما يزيد من راحة القيادة.
*   **مظهر جمالي:** يمنح السيارة مظهراً رياضياً وأنيقاً.

### عملية التطبيق:
1.  **تنظيف الزجاج:** يتم تنظيف أسطح الزجاج من الغبار والأوساخ والشحوم.
2.  **القطع:** يتم قطع الفيلم بدقة حسب حجم وشكل الزجاج.
3.  **التطبيق:** يتم تطبيق الفيلم بعناية على سطح الزجاج باستخدام محاليل خاصة، مع التأكد من عدم وجود فقاعات هواء أو تجاعيد.
4.  **تصريف الماء:** يتم إزالة الماء والهواء بين الفيلم والزجاج بأدوات خاصة.
5.  **المعالجة:** بعد التطبيق، يُترك الفيلم ليلتصق بالكامل بالزجاج لفترة معينة.
`
  },
  'service.detailing.fullContent': {
    tr: `
### Nedir?
Oto kuaför, aracın sadece dışını değil, içini de en ince ayrıntısına kadar temizleyen, dezenfekte eden ve yenileyen kapsamlı bir bakım hizmetidir. Bu hizmet, aracın ilk günkü temizliğine ve hijyenine kavuşmasını sağlar.

### Avantajları:
*   **Derinlemesine Temizlik:** Aracın iç ve dış yüzeylerindeki tüm kir, leke ve bakteriler özel ürünlerle temizlenir.
*   **Hijyen ve Dezenfeksiyon:** İç mekandaki kötü kokular giderilir, bakteri ve virüslere karşı dezenfeksiyon sağlanır.
*   **Yenilenmiş Görünüm:** Plastik aksamlar, döşemeler ve deri yüzeyler özel bakım ürünleriyle beslenir ve yenilenir.
*   **Alerjen Azaltma:** Polen, toz akarları gibi alerjenler temizlenerek daha sağlıklı bir sürüş ortamı sunulur.
*   **İkinci El Değer Artışı:** Aracın genel kondisyonunu ve estetiğini iyileştirerek satış değerini artırır.

### Uygulama Süreci:
1.  **İç Temizlik:** Koltuklar, tavan, taban halısı, kapı içleri, torpido ve tüm plastik aksamlar vakumlanır, fırçalanır ve özel temizleyicilerle silinir.
2.  **Deri/Kumaş Bakımı:** Deri yüzeyler beslenir, kumaş döşemeler buharlı temizlik veya leke çıkarıcılarla temizlenir.
3.  **Dezenfeksiyon:** Klima sistemi ve iç mekan ozon veya buharla dezenfekte edilir.
4.  **Dış Yıkama ve Parlatma:** Aracın dışı özel şampuanlarla yıkanır, jantlar ve lastikler temizlenir, boya yüzeyi parlatılır.
5.  **Koruma:** Plastik ve lastik aksamlara koruyucu ve parlatıcı ürünler uygulanır.

### Neden One Car Care?
One Car Care olarak, aracınızın her köşesine ulaşan, detaylı ve titiz bir oto kuaför hizmeti sunuyoruz. Çevre dostu ve insan sağlığına zararsız ürünler kullanarak, aracınızı sadece temizlemekle kalmıyor, aynı zamanda hijyenik ve ferah bir sürüş deneyimi sunuyoruz. Uzman ekibimizle aracınızın ilk günkü ışıltısına kavuşmasını sağlıyoruz.
`,
    en: `
### What is it?
Auto detailing is a comprehensive maintenance service that cleans, disinfects, and renews the vehicle's interior and exterior down to the finest detail. This service ensures the vehicle regains its original cleanliness and hygiene.

### Advantages:
*   **Deep Cleaning:** All dirt, stains, and bacteria on the vehicle's interior and exterior surfaces are cleaned with special products.
*   **Hygiene and Disinfection:** Bad odors in the interior are eliminated, and disinfection against bacteria and viruses is provided.
*   **Renewed Appearance:** Plastic parts, upholstery, and leather surfaces are nourished and renewed with special care products.
*   **Allergen Reduction:** Allergens such as pollen and dust mites are cleaned, providing a healthier driving environment.
*   **Increased Resale Value:** Improves the overall condition and aesthetics of the vehicle, increasing its resale value.

### Application Process:
1.  **Interior Cleaning:** Seats, ceiling, floor mats, door panels, dashboard, and all plastic parts are vacuumed, brushed, and wiped with special cleaners.
2.  **Leather/Fabric Care:** Leather surfaces are nourished, and fabric upholstery is cleaned with steam cleaning or stain removers.
3.  **Disinfection:** The air conditioning system and interior are disinfected with ozone or steam.
4.  **Exterior Washing and Polishing:** The vehicle's exterior is washed with special shampoos, rims and tires are cleaned, and the paint surface is polished.
5.  **Protection:** Protective and polishing products are applied to plastic and rubber parts.

### Why One Car Care?
At One Car Care, we offer a detailed and meticulous auto detailing service that reaches every corner of your vehicle. By using environmentally friendly and human-safe products, we not only clean your vehicle but also provide a hygienic and fresh driving experience. With our expert team, we ensure your vehicle regains its original shine.
`,
    ar: `
### ما هو؟
تفصيل السيارات هو خدمة صيانة شاملة تنظف وتطهر وتجدد داخل وخارج السيارة بأدق التفاصيل. تضمن هذه الخدمة استعادة السيارة لنظافتها ونظافتها الأصلية.

### المزايا:
*   **تنظيف عميق:** يتم تنظيف جميع الأوساخ والبقع والبكتيريا على الأسطح الداخلية والخارجية للسيارة بمنتجات خاصة.
*   **النظافة والتطهير:** يتم التخلص من الروائح الكريهة في الداخل، ويتم توفير التطهير ضد البكتيريا والفيروسات.
*   **مظهر متجدد:** يتم تغذية وتجديد الأجزاء البلاستيكية والمفروشات والأسطح الجلدية بمنتجات عناية خاصة.
*   **تقليل مسببات الحساسية:** يتم تنظيف مسببات الحساسية مثل حبوب اللقاح وعث الغبار، مما يوفر بيئة قيادة أكثر صحة.
*   **زيادة قيمة إعادة البيع:** يحسن الحالة العامة وجماليات السيارة، مما يزيد من قيمة إعادة بيعها.

### عملية التطبيق:
1.  **تنظيف داخلي:** يتم تنظيف المقاعد والسقف وحصائر الأرضية وألواح الأبواب ولوحة القيادة وجميع الأجزاء البلاستيكية بالمكنسة الكهربائية والفرشاة والمسح بمنظفات خاصة.
2.  **العناية بالجلد/القماش:** يتم تغذية الأسطح الجلدية، وتنظيف المفروشات القماشية بالتنظيف بالبخار أو مزيلات البقع.
3.  **التطهير:** يتم تطهير نظام تكييف الهواء والداخل بالأوزون أو البخار.
4.  **الغسيل الخارجي والتلميع:** يتم غسل الجزء الخارجي للسيارة بشامبو خاص، وتنظيف الجنوط والإطارات، وتلميع سطح الطلاء.
5.  **الحماية:** يتم تطبيق منتجات الحماية والتلميع على الأجزاء البلاستيكية والمطاطية.
`
  },

  // Why Us Section
  'whyus.title': {
    tr: 'Neden One Car Care?',
    en: 'Why One Car Care?',
    ar: 'لماذا One Car Care؟',
  },
  'whyus.subtitle': {
    tr: 'Profesyonellik, kalite ve müşteri memnuniyeti bizim önceliğimiz',
    en: 'Professionalism, quality, and customer satisfaction are our priorities',
    ar: 'الاحترافية والجودة ورضا العملاء هي أولوياتنا',
  },

  'whyus.feature1.title': {
    tr: 'Uzman Ekip',
    en: 'Expert Team',
    ar: 'فريق خبير',
  },
  'whyus.feature1.desc': {
    tr: 'Yılların deneyimi ile eğitimli ve sertifikalı profesyonellerimiz, araçlarınıza en iyi hizmeti sunmak için çalışır.',
    en: 'Our trained and certified professionals with years of experience work to provide the best service to your vehicles.',
    ar: 'يعمل متخصصونا المدربون والمعتمدون ذوو سنوات من الخبرة على تقديم أفضل خدمة لسيارتك.',
  },

  'whyus.feature2.title': {
    tr: 'Şeffaf Fiyatlandırma',
    en: 'Transparent Pricing',
    ar: 'تسعير شفاف',
  },
  'whyus.feature2.desc': {
    tr: 'Gizli maliyetler yok, tüm fiyatlar önceden belirtilir. Hizmet aldığınız şey için ödeme yaparsınız.',
    en: 'No hidden costs, all prices are stated upfront. You pay for what you get.',
    ar: 'لا توجد تكاليف مخفية، جميع الأسعار محددة مسبقاً. تدفع مقابل ما تحصل عليه.',
  },

  'whyus.feature3.title': {
    tr: 'Kaliteli Ürünler',
    en: 'Premium Products',
    ar: 'منتجات عالية الجودة',
  },
  'whyus.feature3.desc': {
    tr: 'Zenith ve Orafol gibi dünya markaları kullanarak aracınızın en iyi korumasını sağlıyoruz.',
    en: 'Using world-renowned brands like Zenith and Orafol, we ensure the best protection for your vehicle.',
    ar: 'باستخدام العلامات التجارية العالمية مثل Zenith و Orafol، نضمن أفضل حماية لسيارتك.',
  },

  'whyus.feature4.title': {
    tr: 'Hızlı Hizmet',
    en: 'Quick Service',
    ar: 'خدمة سريعة',
  },
  'whyus.feature4.desc': {
    tr: 'Verimli çalışma sistemiyle hizmetleriniz hızlı ve sorunsuz bir şekilde tamamlanır.',
    en: 'With our efficient work system, your services are completed quickly and smoothly.',
    ar: 'مع نظام عملنا الفعال، تكتمل خدماتك بسرعة وسلاسة.',
  },

  // Video Section
  'video.title': {
    tr: 'Dükkanımızı Tanıyın',
    en: 'Meet Our Shop',
    ar: 'تعرف على متجرنا',
  },
  'video.subtitle': {
    tr: 'One Car Care\'in profesyonel ekibi ve titiz çalışma sürecini video ile izleyin',
    en: 'Watch our professional team and meticulous work process in action',
    ar: 'شاهد فريقنا المحترف وعملية عملنا الدقيقة',
  },

  // Gallery Section
  'gallery.title': {
    tr: 'Uygulamalarımızdan Kareler',
    en: 'Our Work',
    ar: 'أعمالنا',
  },
  'gallery.subtitle': {
    tr: 'Gerçek müşteri araçlarından başarılı uygulamalar',
    en: 'Successful applications from real customer vehicles',
    ar: 'تطبيقات ناجحة من سيارات العملاء الحقيقيين',
  },

  // Contact Section
  'contact.title': {
    tr: 'Bize Ulaşın',
    en: 'Contact Us',
    ar: 'اتصل بنا',
  },
  'contact.subtitle': {
    tr: 'Sorularınız için bize yazın veya arayın',
    en: 'Write or call us with your questions',
    ar: 'اكتب أو اتصل بنا مع أسئلتك',
  },

  'contact.address': {
    tr: 'Adres',
    en: 'Address',
    ar: 'العنوان',
  },
  'contact.addressValue': {
    tr: 'Fatih, Ayazma Sk. No:7 34290, 34029 Küçükçekmece/İstanbul',
    en: 'Fatih, Ayazma Sk. No:7 34290, 34029 Küçükçekmece/İstanbul',
    ar: 'فاتح، أيازما سك. رقم: 7 34290، 34029 كوتشوك تشكمجة / إسطنبول',
  },

  'contact.phone': {
    tr: 'Telefon',
    en: 'Phone',
    ar: 'هاتف',
  },
  'contact.phoneValue': {
    tr: '0532 485 47 65',
    en: '0532 485 47 65',
    ar: '0532 485 47 65',
  },

  'contact.hours': {
    tr: 'Çalışma Saatleri',
    en: 'Working Hours',
    ar: 'ساعات العمل',
  },
  'contact.hoursValue': {
    tr: 'Her gün 09:00 - 00:00',
    en: 'Daily 09:00 - 00:00',
    ar: 'يومياً 09:00 - 00:00',
  },

  'contact.whatsapp': {
    tr: 'WhatsApp\'tan Yazın',
    en: 'Message on WhatsApp',
    ar: 'راسل عبر WhatsApp',
  },

  'contact.call': {
    tr: 'Arayın',
    en: 'Call',
    ar: 'اتصل',
  },

  // Footer
  'footer.copyright': {
    tr: 'Tüm Hakları Saklıdır.',
    en: 'All Rights Reserved.',
    ar: 'جميع الحقوق محفوظة.',
  },
  'footer.brand': {
    tr: 'One Car Care © 2026',
    en: 'One Car Care © 2026',
    ar: 'One Car Care © 2026',
  },

  // Language Selector
  'lang.turkish': {
    tr: 'Türkçe',
    en: 'Turkish',
    ar: 'التركية',
  },
  'lang.english': {
    tr: 'English',
    en: 'English',
    ar: 'الإنجليزية',
  },
  'lang.arabic': {
    tr: 'العربية',
    en: 'Arabic',
    ar: 'العربية',
  },

  // PPF Kaplama - Alt Menü
  'service.ppf.submenu.what': {
    tr: 'PPF Nedir?',
    en: 'What is PPF?',
    ar: 'ما هو PPF؟',
  },
  'service.ppf.submenu.benefits': {
    tr: 'Avantajları',
    en: 'Benefits',
    ar: 'الفوائد',
  },
  'service.ppf.submenu.areas': {
    tr: 'Uygulama Alanları',
    en: 'Application Areas',
    ar: 'مناطق التطبيق',
  },
  'service.ppf.submenu.warranty': {
    tr: 'Garantiler',
    en: 'Warranties',
    ar: 'الضمانات',
  },
  'service.ppf.submenu.why': {
    tr: 'Neden Tercih Edilmelidir',
    en: 'Why Choose Us',
    ar: 'لماذا اختيارنا',
  },

  // Seramik Kaplama - Alt Menü
  'service.ceramic.submenu.what': {
    tr: 'Seramik Kaplama Nedir?',
    en: 'What is Ceramic Coating?',
    ar: 'ما هو الطلاء الخزفي؟',
  },
  'service.ceramic.submenu.benefits': {
    tr: 'Avantajları',
    en: 'Benefits',
    ar: 'الفوائد',
  },
  'service.ceramic.submenu.durability': {
    tr: 'Dayanıklılık',
    en: 'Durability',
    ar: 'المتانة',
  },
  'service.ceramic.submenu.maintenance': {
    tr: 'Bakım Talimatları',
    en: 'Maintenance Guide',
    ar: 'دليل الصيانة',
  },

  // Cam Filmi - Alt Menü
  'service.tinting.submenu.what': {
    tr: 'Cam Filmi Nedir?',
    en: 'What is Window Tinting?',
    ar: 'ما هو تظليل النوافذ؟',
  },
  'service.tinting.submenu.benefits': {
    tr: 'Avantajları',
    en: 'Benefits',
    ar: 'الفوائد',
  },
  'service.tinting.submenu.legal': {
    tr: 'Yasal Bilgiler',
    en: 'Legal Information',
    ar: 'المعلومات القانونية',
  },
  'service.tinting.submenu.types': {
    tr: 'Cam Filmi Türleri',
    en: 'Types of Films',
    ar: 'أنواع الأفلام',
  },

  // Oto Kuaför - Alt Menü
  'service.detailing.submenu.exterior': {
    tr: 'Dış Temizlik',
    en: 'Exterior Cleaning',
    ar: 'التنظيف الخارجي',
  },
  'service.detailing.submenu.interior': {
    tr: 'İç Temizlik',
    en: 'Interior Cleaning',
    ar: 'التنظيف الداخلي',
  },
  'service.detailing.submenu.protection': {
    tr: 'Koruma Ürünleri',
    en: 'Protection Products',
    ar: 'منتجات الحماية',
  },
  'service.detailing.submenu.packages': {
    tr: 'Paket Seçenekleri',
    en: 'Package Options',
    ar: 'خيارات الحزم',
  },
};

export const getTranslation = (key: string, language: Language): string => {
  return translations[key]?.[language] || key;
};
