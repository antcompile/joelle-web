import type { Lang } from '../i18n/languages';

export interface NavItem {
  key: string;
  href: (lang: Lang) => string;
}

export const mainNav: NavItem[] = [
  { key: 'nav.home', href: (lang) => `/${lang}/` },
  { key: 'nav.projects', href: (lang) => `/${lang}/projects` },
  { key: 'nav.about', href: (lang) => `/${lang}/about` },
  { key: 'nav.services', href: (lang) => `/${lang}/services` },
  { key: 'nav.contact', href: (lang) => `/${lang}/contact` },
];
