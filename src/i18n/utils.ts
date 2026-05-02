import { type Lang, languages, defaultLang } from './languages';
import fr from './fr.json';
import en from './en.json';
import ar from './ar.json';

const translations: Record<Lang, Record<string, string>> = { fr, en, ar };

export function useTranslation(lang: Lang) {
  return function t(key: string): string {
    return translations[lang]?.[key] ?? translations[defaultLang]?.[key] ?? key;
  };
}

export function getLocalizedPath(lang: Lang, path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `/${lang}${cleanPath}`;
}

export function getDirection(lang: Lang): 'ltr' | 'rtl' {
  return languages[lang].dir;
}

export function isRTL(lang: Lang): boolean {
  return languages[lang].dir === 'rtl';
}

export function getLangFromPath(path: string): Lang {
  const segment = path.split('/').filter(Boolean)[0];
  if (segment && segment in languages) return segment as Lang;
  return defaultLang;
}

export function getLocalizedContent(content: Record<string, string>, lang: Lang): string {
  return content[lang] ?? content[defaultLang] ?? '';
}
