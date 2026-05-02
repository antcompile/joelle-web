import type { Lang } from '../i18n/languages';

export interface NavItem {
  key: string;
  path: string;
}

export const mainNav: NavItem[] = [
  { key: 'nav.home', path: '/' },
  { key: 'nav.projects', path: '/projects' },
  { key: 'nav.about', path: '/about' },
  { key: 'nav.services', path: '/services' },
  { key: 'nav.contact', path: '/contact' },
];
