import type { Lang } from '../i18n/languages';

export const siteConfig = {
  name: 'PLUS EN MOINS',
  domain: 'plusenmoins.com',
  tagline: {
    fr: 'Architecture d\'interieur & Mobilier multifonctionnel',
    en: 'Interior Architecture & Multifunctional Furniture',
    ar: 'العمارة الداخلية والأثاث متعدد الوظائف',
  } as Record<Lang, string>,
  email: 'joelle.trad@outlook.com',
  phone: '+33 7 82 94 59 96',
  location: {
    fr: 'Paris, France',
    en: 'Paris, France',
    ar: 'باريس، فرنسا',
  } as Record<Lang, string>,
  social: {
    instagram: 'https://www.instagram.com/plus_en_moins?igsh=YWlhYnZyaGJ4b3E4',
    linkedin: 'https://linkedin.com/in/joelletrad',
  },
  formspree: {
    contact: 'https://formspree.io/f/YOUR_FORM_ID',
  },
};
