import 'server-only';

export type Locale = 'en' | 'sv';

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  sv: () => import('@/dictionaries/sv.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  const getDictionaryFn = dictionaries[locale];
  if (!getDictionaryFn) {
    throw new Error(`Dictionary for locale "${locale}" not found`);
  }
  return getDictionaryFn();
};

export const locales: Locale[] = ['en', 'sv'];
export const defaultLocale: Locale = 'en';
