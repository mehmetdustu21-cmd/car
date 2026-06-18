# One Car Care - SEO Optimizasyon Rehberi

Bu rehber, One Car Care web sitesinin arama motorlarında Küçükçekmece bölgesindeki "oto yıkama", "cam filmi", "PPF kaplama" aramaları için öne çıkmasını sağlamak amacıyla uygulanmış SEO stratejisini açıklamaktadır.

## Uygulanmış SEO Optimizasyonları

### 1. Meta Etiketleri (Meta Tags)

#### Sayfa Başlığı (Title Tag)
```html
<title>One Car Care - Küçükçekmece Oto Yıkama ve PPF Kaplama</title>
```

**Anahtar Kelimeler:** Küçükçekmece, oto yıkama, PPF kaplama

#### Meta Açıklama (Meta Description)
```html
<meta name="description" content="Küçükçekmece'de profesyonel oto yıkama, PPF kaplama, seramik kaplama, cam filmi ve detaylı temizlik hizmetleri. Şeffaf fiyatlandırma, uzman ekip, kaliteli ürünler." />
```

**Amaç:** Arama sonuçlarında görünen açıklama (155-160 karakter)

#### Meta Anahtar Kelimeler (Meta Keywords)
```html
<meta name="keywords" content="oto yıkama Küçükçekmece, PPF kaplama İstanbul, cam filmi, seramik kaplama, araç detaylı temizlik, oto kuaför, araç bakım" />
```

**Hedef Anahtar Kelimeler:**
- Oto yıkama Küçükçekmece
- PPF kaplama İstanbul
- Cam filmi
- Seramik kaplama
- Araç detaylı temizlik
- Oto kuaför
- Araç bakım

### 2. Yapılandırılmış Veriler (Schema.org)

#### LocalBusiness Schema
Yerel işletme bilgilerini arama motorlarına bildirmek için kullanılır:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "One Car Care",
  "address": {
    "streetAddress": "Fatih, Ayazma Sk. No:7",
    "addressLocality": "Küçükçekmece",
    "addressRegion": "İstanbul",
    "postalCode": "34290",
    "addressCountry": "TR"
  },
  "telephone": "+905324854765",
  "openingHoursSpecification": {
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "09:00",
    "closes": "00:00"
  },
  "serviceType": ["Oto Yıkama", "PPF Kaplama", "Seramik Kaplama", "Cam Filmi", "Oto Kuaför"]
}
```

**Faydaları:**
- Google Maps'te daha iyi görünüm
- Yerel arama sonuçlarında öne çıkma
- İşletme bilgilerinin doğru gösterilmesi

#### ProfessionalService Schema
Hizmet katalogunu yapılandırılmış şekilde sunmak için:

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "One Car Care",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Araç Bakım Hizmetleri",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "PPF Kaplama",
          "description": "100% TPU malzeme ile üretilen PPF..."
        }
      },
      // Diğer hizmetler...
    ]
  }
}
```

**Faydaları:**
- Hizmetlerin arama sonuçlarında görünmesi
- Rich Snippets oluşturma
- Kullanıcı deneyimini iyileştirme

#### Organization Schema
Kuruluş bilgilerini tanımlamak için:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "One Car Care",
  "url": "https://onecarcare.com.tr",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "telephone": "+905324854765",
    "availableLanguage": ["tr", "en", "ar"]
  }
}
```

### 3. Open Graph Etiketleri

Sosyal medya paylaşımları için optimize edilmiş etiketler:

```html
<meta property="og:type" content="business.business" />
<meta property="og:title" content="One Car Care - Küçükçekmece Profesyonel Araç Yıkama" />
<meta property="og:description" content="PPF kaplama, seramik kaplama, cam filmi ve detaylı temizlik hizmetleriyle araçlarınıza profesyonel bakım" />
<meta property="og:url" content="https://onecarcare.com.tr" />
<meta property="og:site_name" content="One Car Care" />
```

### 4. Robots.txt

Arama motorlarının web sitesini nasıl taraması gerektiğini belirtir:

```
User-agent: *
Allow: /
Disallow: /admin

Sitemap: https://onecarcare.com.tr/sitemap.xml
Crawl-delay: 1
```

### 5. Sitemap.xml

Tüm sayfaların listesini arama motorlarına sağlar:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://onecarcare.com.tr/</loc>
    <lastmod>2026-06-18</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

## Teknik SEO Uygulamaları

### 1. Responsive Tasarım
- Mobil cihazlarda mükemmel görünüm
- Hızlı sayfa yükleme (Lighthouse 90+)
- Dokunmatik navigasyon

### 2. Sayfa Hızı Optimizasyonu
- Vite ile hızlı build
- Tailwind CSS ile minimal CSS
- Lazy loading görselleri
- CDN üzerinden dağıtım (Vercel)

### 3. Semantik HTML
- Doğru başlık hiyerarşisi (H1, H2, H3)
- Anlamsal etiketler (`<header>`, `<section>`, `<footer>`)
- Alt metinler görsellerde

### 4. İç Bağlantılar (Internal Links)
- Sayfalar arasında mantıklı bağlantılar
- Anchor text'lerde anahtar kelimeler
- Navigasyon yapısı optimize edilmiş

### 5. Dış Bağlantılar (External Links)
- Sosyal medya profilleri
- İşletme dizinleri
- Yerel referanslar

## Yerel SEO Stratejisi

### 1. Google Business Profile
**Yapılması Gerekenler:**
- Google Business Profile oluşturma
- Tam iş bilgilerini doldurma
- Düzenli güncellemeler yapma
- Müşteri yorumlarına yanıt verme

### 2. Yerel Anahtar Kelimeler
- "Küçükçekmece oto yıkama"
- "İstanbul PPF kaplama"
- "Cam filmi Küçükçekmece"
- "Araç detaylı temizlik İstanbul"

### 3. Yerel Referanslar (NAP)
- **Name:** One Car Care
- **Address:** Fatih, Ayazma Sk. No:7, 34290, Küçükçekmece/İstanbul
- **Phone:** +905324854765

Tüm yerel dizinlerde tutarlı bilgiler sağlanmalıdır.

## İçerik SEO Stratejisi

### 1. Başlık Optimizasyonu
- H1: "One Car Care - Küçükçekmece Profesyonel Araç Yıkama"
- H2: "Hizmetlerimiz", "Neden One Car Care?", "Bize Ulaşın"
- Anahtar kelimeler doğal şekilde yerleştirilmiş

### 2. Meta Açıklama
- 155-160 karakter
- Anahtar kelimeler içeriyor
- Harekete geçirici (CTA)

### 3. URL Yapısı
- Basit ve anlaşılır: `https://onecarcare.com.tr/`
- Anahtar kelimeler içeriyor
- Hiyerarşik yapı

## Ölçüm ve İzleme

### Google Search Console
1. Site haritasını gönderme
2. Arama performansını izleme
3. Dizin oluşturma sorunlarını kontrol etme
4. Mobil kullanılabilirlik raporlarını inceleme

### Google Analytics
1. Ziyaretçi sayısını izleme
2. Dönüşüm oranlarını ölçme
3. Kullanıcı davranışını analiz etme
4. Trafik kaynaklarını takip etme

### Lighthouse
1. Performans puanı
2. Erişilebilirlik puanı
3. SEO puanı
4. En İyi Uygulamalar puanı

**Hedef:** Tüm kategorilerde 90+ puan

## Devam Eden SEO Görevleri

### Kısa Vadeli (1-3 ay)
- [ ] Google Business Profile oluşturma
- [ ] Google Search Console'a site ekleme
- [ ] Yerel dizinlerde listeleme
- [ ] Müşteri yorumları toplama

### Orta Vadeli (3-6 ay)
- [ ] Blog yazıları yayınlama
- [ ] Backlink oluşturma
- [ ] Sosyal medya aktivitesi
- [ ] Teknik SEO iyileştirmeleri

### Uzun Vadeli (6-12 ay)
- [ ] Otoritelendirme
- [ ] Marka bilinirliği
- [ ] Organik trafik artışı
- [ ] Dönüşüm oranı iyileştirmesi

## Kaynaklar

- [Google Search Central](https://developers.google.com/search)
- [Schema.org](https://schema.org)
- [Moz SEO Guide](https://moz.com/beginners-guide-to-seo)
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)

---

**Son Güncelleme:** 18 Haziran 2026

**Durum:** Aktif

**Sorumlu:** One Car Care
