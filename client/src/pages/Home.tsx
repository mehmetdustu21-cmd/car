import { useLanguage } from '@/hooks/useLanguage';
import { getTranslation } from '@/lib/translations';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Shield, Sparkles, Zap, Droplet, MapPin, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useState } from 'react';
import { MapView } from '@/components/Map';
import SEOHead from '@/components/SEOHead';

export default function Home() {
  const { language, changeLanguage } = useLanguage();

  const t = (key: string) => getTranslation(key, language);

  const services = [
    {
      id: 'ppf',
      titleKey: 'service.ppf.title',
      descKey: 'service.ppf.desc',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663756469855/fj4yS7Pde3ZtZPjhyYKsLd/ppf-coating-service-djSKpBSzptNaiCN2auz6it.webp',
    },
    {
      id: 'ceramic',
      titleKey: 'service.ceramic.title',
      descKey: 'service.ceramic.desc',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663756469855/fj4yS7Pde3ZtZPjhyYKsLd/auto-detailing-service-cPvGoSuWC63RyMvMKxcVsy.webp',
    },
    {
      id: 'tinting',
      titleKey: 'service.tinting.title',
      descKey: 'service.tinting.desc',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663756469855/fj4yS7Pde3ZtZPjhyYKsLd/window-tinting-service-dBHEXRfEmpCvNtQEoDz4yT.webp',
    },
    {
      id: 'detailing',
      titleKey: 'service.detailing.title',
      descKey: 'service.detailing.desc',
      image: '/gallery-1-plate.png',
    },
  ];

  const features = [
    {
      titleKey: 'whyus.feature1.title',
      descKey: 'whyus.feature1.desc',
    },
    {
      titleKey: 'whyus.feature2.title',
      descKey: 'whyus.feature2.desc',
    },
    {
      titleKey: 'whyus.feature3.title',
      descKey: 'whyus.feature3.desc',
    },
    {
      titleKey: 'whyus.feature4.title',
      descKey: 'whyus.feature4.desc',
    },
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/905324854765', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+905324854765';
  };

  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openServiceDetail = (service: typeof services[0]) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeServiceDetail = () => {
    setSelectedService(null);
    setIsModalOpen(false);
  };

  const getServiceDetailContent = (serviceId: string) => {
    switch (serviceId) {
      case 'ppf':
        return {
          title: t('service.ppf.title'),
          description: t('service.ppf.desc'),
          fullContent: `
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
`
        };
      case 'ceramic':
        return {
          title: t('service.ceramic.title'),
          description: t('service.ceramic.desc'),
          fullContent: `
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
`
        };
      case 'tinting':
        return {
          title: t('service.tinting.title'),
          description: t('service.tinting.desc'),
          fullContent: `
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
`
        };
      case 'detailing':
        return {
          title: t('service.detailing.title'),
          description: t('service.detailing.desc'),
          fullContent: `
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
`
        };
      default:
        return { title: '', description: '', fullContent: '' };
    }
  };

  return (
    <>
      <SEOHead
        title="One Car Care - Küçükçekmece Oto Yıkama ve PPF Kaplama"
        description="Küçükçekmece'de profesyonel oto yıkama, PPF kaplama, seramik kaplama, cam filmi ve detaylı temizlik hizmetleri. Şeffaf fiyatlandırma, uzman ekip, kaliteli ürünler."
        keywords="oto yıkama Küçükçekmece, PPF kaplama İstanbul, cam filmi, seramik kaplama, araç detaylı temizlik, oto kuaför, araç bakım"
        ogTitle="One Car Care - Küçükçekmece Profesyonel Araç Yıkama"
        ogDescription="PPF kaplama, seramik kaplama, cam filmi ve detaylı temizlik hizmetleriyle araçlarınıza profesyonel bakım"
        ogUrl="https://onecarcare.com.tr"
      />
      <div className="min-h-screen bg-white">
        {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="One Car Care Logo"
              className="w-12 h-12 object-contain"
            />
            <div className="flex flex-col">
              <span className="font-bold text-gray-900 text-lg tracking-tight">One Car Care</span>
              <span className="text-xs text-gray-500 font-medium">Küçükçekmece</span>
            </div>
          </div>
          <LanguageSwitcher currentLanguage={language} onLanguageChange={changeLanguage} />
        </div>
      </header>

      {/* Hero Section with Video */}
      <section className="relative w-full h-screen bg-black overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
          src="https://carwaxaquaflorya.com.tr/wp-content/uploads/2025/12/carwax-kazali.mp4"
          onLoadedMetadata={(e) => {
            const video = e.currentTarget as HTMLVideoElement;
            video.playbackRate = 1;
          }}
          style={{ objectPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10 h-full flex items-center">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight tracking-tight px-4">
              {t('hero.title')}
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-blue-100 mb-6 sm:mb-10 leading-relaxed font-light px-4">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold shadow-lg hover:shadow-xl transition-all"
                onClick={handleCall}
              >
                <Phone className="w-5 h-5 mr-2" />
                {t('contact.call')}
              </Button>
              <Button
                size="lg"
                className="bg-blue-400/20 border-2 border-white text-white hover:bg-white/20 font-semibold transition-all"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {t('contact.whatsapp')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 md:px-0">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4 tracking-tight">
              {t('services.title')}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 font-light max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
                <div
                  key={service.id}
                  className="group overflow-hidden bg-white border border-gray-100 rounded-xl hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  onClick={() => openServiceDetail(service)}
                >
                  <div className="relative h-48 overflow-hidden bg-gray-200">
                    <img
                      src={service.image}
                      alt={t(service.titleKey)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {t(service.titleKey)}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light">
                      {t(service.descKey)}
                    </p>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-12 md:py-32 bg-gray-50">
        <div className="container px-4 md:px-0">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4 tracking-tight">
              {t('whyus.title')}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 font-light max-w-2xl mx-auto">
              {t('whyus.subtitle')}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="group bg-white p-5 md:p-7 rounded-xl border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-blue-600 transition-colors">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-light">
                  {t(feature.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Gallery Section */}
      <section className="py-12 md:py-32 bg-white">
        <div className="container px-4 md:px-0">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4 tracking-tight">
              {t('gallery.title')}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 font-light max-w-2xl mx-auto">
              {t('gallery.subtitle')}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {['/gallery-1-plate.png', '/gallery-2-foam.png', '/gallery-3-plate.png'].map((src, idx) => (
              <div
                key={idx}
                className="group aspect-square bg-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src={src}
                  alt={`One Car Care Galeri ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-32 bg-gray-50">
        <div className="container px-4 md:px-0">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4 tracking-tight">
              {t('contact.title')}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 font-light max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
            <div className="bg-white p-5 md:p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base">
                {t('contact.address')}
              </h3>
              <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4">
                {t('contact.addressValue')}
              </p>
              <h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base">
                {t('contact.phone')}
              </h3>
              <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4">
                {t('contact.phoneValue')}
              </p>
              <h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base">
                {t('contact.hours')}
              </h3>
              <p className="text-gray-600 text-xs md:text-sm">
                {t('contact.hoursValue')}
              </p>
            </div>
            <div className="w-full rounded-xl overflow-hidden border border-gray-100 shadow-sm" style={{ height: '300px', minHeight: '300px' }}>
              <MapView
                initialCenter={{ lat: 41.0082, lng: 28.7411 }}
                initialZoom={16}
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={handleCall}
            >
              <Phone className="w-5 h-5 mr-2" />
              {t('contact.call')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {t('contact.whatsapp')}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-16 pb-8">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12 mb-12">

            {/* Brand Info */}
            <div className="flex flex-col items-center md:items-start">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663756469855/fj4yS7Pde3ZtZPjhyYKsLd/one-car-care-logo-f3Syw7uJT8989k6DM5eFon.webp"
                alt="One Car Care"
                className="w-16 h-16 mb-4 object-contain"
              />
              <h3 className="text-xl font-bold mb-1">One Car Care</h3>
              <p className="text-gray-400 text-sm mb-4">Küçükçekmece, İstanbul</p>
              <p className="text-gray-500 text-xs leading-relaxed max-w-xs text-center md:text-left">
                Profesyonel araç bakım ve koruma hizmetleri. PPF kaplama, seramik kaplama, cam filmi ve oto kuaför.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col items-center">
              <h4 className="text-lg font-bold mb-5 text-white">İletişim</h4>
              <div className="space-y-3 text-gray-400 text-sm text-center">
                <div className="flex items-center gap-2 justify-center">
                  <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <a href="tel:+905324854765" className="hover:text-white transition-colors">
                    0532 485 47 65
                  </a>
                </div>
                <div className="flex items-start gap-2 justify-center">
                  <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Fatih, Ayazma Sk. No:7<br />34290 Küçükçekmece/İstanbul</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <span className="w-4 h-4 text-blue-400 flex-shrink-0 text-center">⏰</span>
                  <span>Her gün 09:00 – 00:00</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex flex-col items-center md:items-end">
              <h4 className="text-lg font-bold mb-5 text-white">Bizi Takip Edin</h4>
              <div className="flex gap-4 mb-6">

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/onecarcare"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram sayfamızı ziyaret edin"
                  className="group relative w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-6 h-6"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/onecarcare"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook sayfamızı ziyaret edin"
                  className="group w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl"
                  style={{ background: '#1877F2' }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-6 h-6"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Google Maps */}
                <a
                  href="https://maps.google.com/?q=Fatih+Ayazma+Sk+No:7+34290+Küçükçekmece+İstanbul"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Haritalar'da konumumuzu görün"
                  className="group w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl bg-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-7 h-7"
                  >
                    <path d="M12 0C7.802 0 4 3.403 4 7.602 4 11.8 7.469 16.812 12 24c4.531-7.188 8-12.2 8-16.398C20 3.403 16.199 0 12 0zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" fill="#EA4335"/>
                    <path d="M12 0v11c1.657 0 3-1.343 3-3s-1.343-3-3-3V0z" fill="#FBBC04"/>
                    <path d="M12 11c1.657 0 3-1.343 3-3V0C16.199 0 20 3.403 20 7.602 20 11.8 16.531 16.812 12 24V11z" fill="#4285F4"/>
                    <path d="M12 0C7.802 0 4 3.403 4 7.602c0 4.198 3.469 9.21 8 16.398V11c-1.657 0-3-1.343-3-3s1.343-3 3-3V0z" fill="#34A853"/>
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/905324854765"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp üzerinden bize yazın"
                  className="group w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl"
                  style={{ background: '#25D366' }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-6 h-6"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>

              {/* Quick Links */}
              <div className="text-center md:text-right">
                <h5 className="text-sm font-semibold text-gray-300 mb-3">Hızlı Erişim</h5>
                <div className="space-y-2 text-sm text-gray-500">
                  <a
                    href="https://maps.google.com/?q=Fatih+Ayazma+Sk+No:7+34290+Küçükçekmece+İstanbul"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 justify-center md:justify-end hover:text-white transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 text-red-400" />
                    Yol Tarifi Al
                  </a>
                  <a
                    href="tel:+905324854765"
                    className="flex items-center gap-1.5 justify-center md:justify-end hover:text-white transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-400" />
                    Hemen Ara
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-500 text-sm text-center md:text-left">
                {t('footer.brand')} — {t('footer.copyright')}
              </p>
              <p className="text-gray-600 text-xs text-center">
                Küçükçekmece'nin Güvenilir Araç Bakım Merkezi
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Contact Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
        <Button
          size="lg"
          className="rounded-full w-14 h-14 p-0 bg-blue-600 hover:bg-blue-700 shadow-lg"
          onClick={handleCall}
          title={t('contact.call')}
        >
          <Phone className="w-6 h-6" />
        </Button>
        <Button
          size="lg"
          className="rounded-full w-14 h-14 p-0 bg-green-500 hover:bg-green-600 shadow-lg"
          onClick={handleWhatsApp}
          title={t('contact.whatsapp')}
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>

      {selectedService && (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden">
            <DialogHeader className="relative h-48 md:h-64 overflow-hidden">
              <img
                src={selectedService.image}
                alt={selectedService.titleKey}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <DialogTitle className="absolute bottom-4 left-4 text-white text-3xl font-bold z-10">
                {getServiceDetailContent(selectedService.id).title}
              </DialogTitle>
              <button
                onClick={closeServiceDetail}
                className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
                aria-label="Kapat"
              >
                <X className="w-6 h-6" />
              </button>
            </DialogHeader>
            <div className="p-6 md:p-8 pt-4 md:pt-4 max-h-[70vh] overflow-y-auto">
              <DialogDescription className="text-gray-700 leading-relaxed text-base prose prose-blue max-w-none">
                <div dangerouslySetInnerHTML={{ __html: getServiceDetailContent(selectedService.id).fullContent.replace(/\n/g, '<br/>') }} />
              </DialogDescription>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
    </>
  );
}
