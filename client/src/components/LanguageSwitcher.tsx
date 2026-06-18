import { Language } from '@/lib/translations';
import { Button } from '@/components/ui/button';

interface LanguageSwitcherProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function LanguageSwitcher({
  currentLanguage,
  onLanguageChange,
}: LanguageSwitcherProps) {
  const languages: { code: Language; label: string; nativeName: string }[] = [
    { code: 'tr', label: 'TR', nativeName: 'Türkçe' },
    { code: 'en', label: 'EN', nativeName: 'English' },
    { code: 'ar', label: 'AR', nativeName: 'العربية' },
  ];

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1 bg-gradient-to-r from-blue-50 to-blue-100 rounded-full p-1 shadow-sm border border-blue-200">
        {languages.map((lang, index) => (
          <div key={lang.code}>
            <Button
              variant={currentLanguage === lang.code ? 'default' : 'ghost'}
              size="sm"
              onClick={() => onLanguageChange(lang.code)}
              className={`
                px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-200
                ${
                  currentLanguage === lang.code
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-white/50'
                }
              `}
            >
              {lang.label}
            </Button>
            {index < languages.length - 1 && (
              <div className="inline-block w-px h-4 bg-blue-200 mx-0.5" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
