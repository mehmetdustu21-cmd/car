import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogImage?: string;
}

export default function SEOHead({
  title = 'One Car Care - Küçükçekmece Oto Yıkama ve PPF Kaplama',
  description = 'Küçükçekmece\'de profesyonel oto yıkama, PPF kaplama, seramik kaplama, cam filmi ve detaylı temizlik hizmetleri. Şeffaf fiyatlandırma, uzman ekip, kaliteli ürünler.',
  keywords = 'oto yıkama Küçükçekmece, PPF kaplama İstanbul, cam filmi, seramik kaplama, araç detaylı temizlik, oto kuaför, araç bakım',
  ogTitle = 'One Car Care - Küçükçekmece Profesyonel Araç Yıkama',
  ogDescription = 'PPF kaplama, seramik kaplama, cam filmi ve detaylı temizlik hizmetleriyle araçlarınıza profesyonel bakım',
  ogUrl = 'https://onecarcare.com.tr',
  ogImage = 'https://onecarcare.com.tr/favicon.png',
}: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      let tag = document.querySelector(
        isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`
      ) as HTMLMetaElement;

      if (!tag) {
        tag = document.createElement('meta');
        if (isProperty) {
          tag.setAttribute('property', name);
        } else {
          tag.setAttribute('name', name);
        }
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    // Update standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Update Open Graph tags
    updateMetaTag('og:title', ogTitle, true);
    updateMetaTag('og:description', ogDescription, true);
    updateMetaTag('og:url', ogUrl, true);
    updateMetaTag('og:image', ogImage, true);

    return () => {
      // Cleanup is optional - keeping meta tags is usually fine
    };
  }, [title, description, keywords, ogTitle, ogDescription, ogUrl, ogImage]);

  return null;
}
