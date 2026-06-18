# One Car Care - Vercel Deploy Rehberi

Bu rehber, One Car Care projesini Vercel üzerinde deploy etmek için gerekli tüm adımları içermektedir.

## Proje Özeti

**One Car Care**, Küçükçekmece'de profesyonel araç bakım ve koruma hizmetleri sunan bir web sitesidir. Proje aşağıdaki özellikleri içermektedir:

- **Çok Dilli Destek:** Türkçe, İngilizce ve Arapça (RTL desteği)
- **SEO Uyumlu:** Arama motorları için optimize edilmiş yapı
- **Responsive Tasarım:** Mobil, tablet ve masaüstü cihazlarda mükemmel görünüm
- **Hızlı Yükleme:** Vercel'in edge ağı ile küresel performans
- **İletişim Entegrasyonu:** WhatsApp ve telefon arama butonları

## Teknik Yığın (Tech Stack)

| Teknoloji | Versiyon | Amaç |
|-----------|----------|------|
| React | 19 | UI framework |
| Vite | 7.1 | Build tool ve dev server |
| Tailwind CSS | 4 | Styling |
| TypeScript | 5.6 | Type safety |
| Wouter | 3.3 | Client-side routing |
| Lucide React | 0.453 | Icons |

## Vercel Deploy Adımları

### 1. Proje Dosyalarını Hazırlama

Proje zaten Vercel uyumlu şekilde yapılandırılmıştır. Aşağıdaki dosyalar önemlidir:

- `package.json` - Bağımlılıklar ve build script'leri
- `vite.config.ts` - Vite konfigürasyonu
- `tsconfig.json` - TypeScript ayarları
- `client/` - React uygulaması
- `server/` - Express sunucusu (statik dosya sunumu için)

### 2. GitHub'a Push Etme

Projeyi GitHub'a yükleyin:

```bash
git init
git add .
git commit -m "Initial commit: One Car Care website"
git remote add origin https://github.com/your-username/one-car-care.git
git push -u origin main
```

### 3. Vercel'de Proje Oluşturma

1. [Vercel Dashboard](https://vercel.com/dashboard) adresine gidin
2. "New Project" butonuna tıklayın
3. GitHub repository'nizi seçin (`one-car-care`)
4. Aşağıdaki ayarları yapılandırın:

| Ayar | Değer |
|------|-------|
| Framework | Other (Vite) |
| Build Command | `pnpm build` |
| Output Directory | `dist` |
| Install Command | `pnpm install` |

### 4. Environment Variables (İsteğe Bağlı)

Vercel dashboard'da "Settings" → "Environment Variables" kısmından gerekli değişkenleri ekleyin. Bu proje için özel environment variable gerekmemektedir, ancak gelecekte eklenmesi gerekirse:

```
VITE_API_URL=https://api.example.com
```

### 5. Deploy Etme

Ayarları tamamladıktan sonra "Deploy" butonuna tıklayın. Vercel otomatik olarak:

- Projeyi build edecek
- Tüm dosyaları optimize edecek
- Edge ağına dağıtacak
- Otomatik HTTPS sertifikası sağlayacak

## Özel Domain Bağlama

Vercel'de custom domain bağlamak için:

1. Dashboard'da projeyi açın
2. "Settings" → "Domains" kısmına gidin
3. "Add Domain" butonuna tıklayın
4. Domain adınızı girin (örn: `onecarcare.com.tr`)
5. DNS ayarlarınızı Vercel'in talimatlarına göre yapılandırın

## Continuous Deployment (CD)

Vercel, GitHub'a push yaptığınızda otomatik olarak:

- Projeyi build eder
- Test eder (varsa)
- Production'a deploy eder

Bu sayede, kod değişiklikleri otomatik olarak canlı siteye yansır.

## Performans Optimizasyonları

Vercel üzerinde performansı maksimize etmek için:

1. **Image Optimization:** Büyük görselleri optimize edin
2. **Code Splitting:** Vite otomatik olarak yapıyor
3. **Caching:** Vercel edge caching'i otomatik yapılandırır
4. **CDN:** Vercel'in global CDN'i kullanılır

## Monitoring ve Analytics

Vercel dashboard'da:

- **Analytics:** Sayfa yükleme süreleri, ziyaretçi sayısı
- **Logs:** Build ve runtime hataları
- **Deployments:** Deployment geçmişi ve rollback seçeneği

## Sorun Giderme

### Build Hatası

Eğer build başarısız olursa:

```bash
# Yerel olarak build test edin
pnpm build

# Hataları kontrol edin
pnpm check
```

### Yavaş Yükleme

- Vercel Analytics'te performans kontrol edin
- Büyük bağımlılıkları kaldırın
- Image optimization yapın

### 404 Hatası

Tek sayfalık uygulama (SPA) için `server/index.ts` tüm rotaları `index.html`'e yönlendirir. Bu otomatik olarak yapılandırılmıştır.

## Güvenlik Notları

- Tüm iletişim HTTPS üzerinden yapılır (Vercel otomatik sağlar)
- Telefon numarası `tel:` protokolü ile güvenli şekilde işlenir
- WhatsApp linki harici olarak açılır (güvenli)
- Hassas veriler saklanmaz (statik site)

## Maintenance ve Updates

### Bağımlılıkları Güncelleme

```bash
pnpm update
git add pnpm-lock.yaml
git commit -m "Update dependencies"
git push
```

Vercel otomatik olarak yeni deploy yapacaktır.

### Dil Desteği Ekleme

Yeni dil eklemek için `client/src/lib/translations.ts` dosyasını düzenleyin:

```typescript
'key.name': {
  tr: 'Türkçe',
  en: 'English',
  ar: 'العربية',
  // Yeni dil ekle
  de: 'Deutsch',
}
```

## Vercel Pricing

| Plan | Fiyat | Özellikler |
|------|-------|-----------|
| Hobby | Ücretsiz | Kişisel projeler, 100 GB bandwidth |
| Pro | $20/ay | Ekip işbirliği, sınırsız bandwidth |
| Enterprise | Özel | Kurumsal çözümler |

Bu proje Hobby planı ile rahatça çalışır.

## Yardımcı Linkler

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)

## İletişim ve Destek

Herhangi bir sorun için:

- Vercel Support: https://vercel.com/support
- Project Issues: GitHub repository'de issue açın
- Email: support@vercel.com

---

**Son Güncelleme:** 18 Haziran 2026

**Versiyon:** 1.0

**Durum:** Üretim Hazır (Production Ready)
