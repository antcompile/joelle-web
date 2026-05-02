export type Lang = 'fr' | 'en' | 'ar';

export const languages: Record<Lang, { name: string; dir: 'ltr' | 'rtl' }> = {
  fr: { name: 'Français', dir: 'ltr' },
  en: { name: 'English', dir: 'ltr' },
  ar: { name: 'العربية', dir: 'rtl' },
};

export const defaultLang: Lang = 'fr';

export function isValidLang(lang: string): lang is Lang {
  return lang in languages;
}
