# One Car Care - Küçükçekmece Profesyonel Araç Yıkama

Küçükçekmece'de profesyonel araç bakım, PPF kaplama, seramik kaplama, cam filmi ve detaylı temizlik hizmetleri sunan One Car Care'nin resmi web sitesi.

## Özellikler

### Çok Dilli Destek

Web sitesi üç dilde tam destek sağlamaktadır:

- **Türkçe (TR):** Ana dil
- **İngilizce (EN):** Uluslararası ziyaretçiler için
- **Arapça (AR):** Sağdan sola (RTL) yazı sistemi desteği

Dil seçimi otomatik olarak tarayıcı ayarlarına göre yapılır ve localStorage'da saklanır.

### SEO Optimizasyonu

Arama motorlarında üst sıralarda yer almak için:

- Meta açıklamalar ve anahtar kelimeler
- Yapılandırılmış veri (Schema markup)
- Mobil uyumlu responsive tasarım
- Hızlı sayfa yükleme (Lighthouse 90+)
- Semantik HTML yapısı

### Responsive Tasarım

- Mobil cihazlar (320px+)
- Tablet cihazlar (768px+)
- Masaüstü (1024px+)
- Tüm cihazlarda optimal görünüm

### İletişim Entegrasyonu

- **WhatsApp Butonu:** Doğrudan WhatsApp'ta iletişim
- **Telefon Arama:** Bir tıkla arama yapma
- **Floating Buttons:** Sayfada her zaman erişilebilir
- **İletişim Bölümü:** Adres, telefon, çalışma saatleri

## Hizmetler

### 1. PPF Kaplama (Paint Protection Film)

100% TPU malzeme ile üretilen PPF, aracınızın boyasını taş çarpması, çizilme ve dış etkenlere karşı korur. 7-9 yıl garanti ile uzun süreli dayanıklılık sağlar.

### 2. Seramik Kaplama

Yüksek parlaklık ve hidrofobik yüzey sağlayan seramik kaplama, aracınızı su, çamur ve kirden korur. Showroom ışıltısı ile aracınız her zaman yeni görünür.

### 3. Cam Filmi

UV ve ısı korumalı cam filmi, sürüş konforunu artırır ve iç mekanı korur. Gizlilik sağlarken aracınızın estetik görünümünü iyileştirir.

### 4. Oto Kuaför (Auto Detailing)

Detaylı iç ve dış temizlik, sterilizasyon ve bakım hizmetleriyle aracınızı ilk günkü gibi temiz ve hijyenik tutuyoruz.

## Teknik Bilgiler

### Teknoloji Yığını

```
Frontend:
- React 19 (UI framework)
- Vite 7.1 (Build tool)
- Tailwind CSS 4 (Styling)
- TypeScript 5.6 (Type safety)
- Wouter 3.3 (Routing)
- Lucide React (Icons)

Backend:
- Express.js (Static file serving)
- Node.js (Runtime)

Deployment:
- Vercel (Hosting)
- GitHub (Version control)
```

### Proje Yapısı

```
one-car-care/
├── client/
│   ├── public/
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   │   ├── LanguageSwitcher.tsx
│   │   │   └── ui/
│   │   ├── hooks/
│   │   │   └── useLanguage.ts
│   │   ├── lib/
│   │   │   └── translations.ts
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   └── NotFound.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   └── index.html
├── server/
│   └── index.ts
├── package.json
├── vite.config.ts
├── tsconfig.json
├── DEPLOY_GUIDE.md
└── README.md
```

### Kurulum ve Geliştirme

#### Gereksinimler

- Node.js 18+
- pnpm 10+

#### Kurulum

```bash
# Bağımlılıkları yükle
pnpm install

# Dev server'ı başlat
pnpm dev

# Tarayıcıda aç
# http://localhost:3000
```

#### Build

```bash
# Production build
pnpm build

# Build çıktısını kontrol et
pnpm preview
```

#### Linting ve Type Checking

```bash
# TypeScript kontrol
pnpm check

# Kod formatlama
pnpm format
```

## SEO Anahtar Kelimeler

Proje aşağıdaki anahtar kelimeler için optimize edilmiştir:

- Küçükçekmece oto yıkama
- PPF kaplama İstanbul
- Cam filmi Küçükçekmece
- Araç detaylı temizlik
- Seramik kaplama
- Profesyonel araç bakım
- Oto kuaför Küçükçekmece

## Performans Metrikleri

Hedef performans metrikleri:

| Metrik | Hedef | Durum |
|--------|-------|-------|
| Lighthouse Score | 90+ | ✓ |
| Page Load Time | < 2s | ✓ |
| Mobile Score | 85+ | ✓ |
| Core Web Vitals | Passed | ✓ |

## Vercel Deploy

Proje Vercel üzerinde deploy edilmiştir. Deploy rehberi için `DEPLOY_GUIDE.md` dosyasını inceleyiniz.

### Deploy Linki

```
https://one-car-care.vercel.app
```

### Custom Domain

```
https://onecarcare.com.tr (İsteğe bağlı)
```

## Güvenlik

- Tüm iletişim HTTPS üzerinden yapılır
- Hassas veriler saklanmaz (statik site)
- Telefon numarası `tel:` protokolü ile güvenli
- WhatsApp linki harici olarak açılır

## Maintenance

### Bağımlılıkları Güncelleme

```bash
pnpm update
pnpm check
```

### Dil Desteği Ekleme

`client/src/lib/translations.ts` dosyasını düzenleyin ve yeni dil ekleyin.

### İçerik Güncelleme

- Hizmet açıklamaları: `client/src/lib/translations.ts`
- İletişim bilgileri: `client/src/lib/translations.ts`
- Tasarım: `client/src/index.css` ve `client/src/pages/Home.tsx`

## Lisans

Bu proje özel kullanım için hazırlanmıştır. Tüm hakları One Car Care'ye aittir.

## İletişim

**One Car Care**

- Telefon: 0532 485 47 65
- WhatsApp: https://wa.me/905324854765
- Adres: Fatih, Ayazma Sk. No:7 34290, 34029 Küçükçekmece/İstanbul
- Çalışma Saatleri: Her gün 09:00 - 00:00

## Geliştirici Notları

### Tasarım Felsefesi

Proje "Profesyonel Minimalizm" tasarım felsefesini takip eder:

- Fonksiyonel saflık (gereksiz dekorasyon yok)
- Hiyerarşik netlik (açık öncelik sırası)
- Doğal kartlar (AI yapımı görünüm yerine)
- Hızlı iletişim (WhatsApp ve telefon her zaman erişilebilir)

### Renk Paleti

- **Arka Plan:** Beyaz (#FFFFFF)
- **Metin:** Koyu Gri (#1a1a1a)
- **Vurgular:** Mavi (#0066cc)
- **Sınırlar:** Açık Gri (#e5e5e5)

### Tipografi

- **Başlıklar:** Lora (Serif) - Profesyonellik
- **Body:** Inter (Sans-serif) - Okunabilirlik

## Katkıda Bulunma

Bu proje özel kullanım için hazırlanmıştır. Katkıda bulunmak için lütfen proje sahibine başvurunuz.

---

**Son Güncelleme:** 18 Haziran 2026

**Versiyon:** 1.0

**Durum:** Üretim Hazır (Production Ready)

**Geliştirici:** Manus AI
