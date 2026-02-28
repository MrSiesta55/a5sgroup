'use client';

import { Locale } from '@/lib/dictionary';

export default function LanguageSwitcher({ currentLang }: { currentLang: Locale }) {
  const otherLang: Locale = currentLang === 'en' ? 'sv' : 'en';

  const handleLanguageSwitch = () => {
    // Set cookie and reload page
    document.cookie = `NEXT_LOCALE=${otherLang}; path=/; max-age=31536000`; // 1 year
    window.location.reload();
  };

  return (
    <button
      onClick={handleLanguageSwitch}
      className="block px-4 py-2.5 text-sm font-medium whitespace-nowrap text-white/90 hover:bg-white hover:text-black transition-all duration-300 rounded-full w-full text-center"
    >
      {currentLang === 'en' ? '🇸🇪 Svenska' : '🇬🇧 English'}
    </button>
  );
}
