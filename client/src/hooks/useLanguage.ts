import { useEffect, useState } from 'react';
import { Language } from '@/lib/translations';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('tr');

  // Initialize language from localStorage or browser locale
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null;
    if (savedLanguage && ['tr', 'en', 'ar'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
      document.documentElement.lang = savedLanguage;
      if (savedLanguage === 'ar') {
        document.documentElement.dir = 'rtl';
      } else {
        document.documentElement.dir = 'ltr';
      }
    } else {
      // Detect browser language
      const browserLang = navigator.language.split('-')[0];
      const detectedLang: Language = ['tr', 'en', 'ar'].includes(browserLang) 
        ? (browserLang as Language) 
        : 'en';
      setLanguage(detectedLang);
      document.documentElement.lang = detectedLang;
      if (detectedLang === 'ar') {
        document.documentElement.dir = 'rtl';
      }
    }
  }, []);

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    document.documentElement.lang = newLanguage;
    if (newLanguage === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  };

  return { language, changeLanguage };
};
