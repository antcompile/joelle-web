import type { Lang } from '../i18n/languages';

export const siteConfig = {
  name: 'Joelle Trad',
  domain: 'joelletrad.com',
  tagline: {
    fr: 'Architecture & Design Interieur',
    en: 'Interior Architecture & Design',
    ar: 'العمارة الداخلية والتصميم',
  } as Record<Lang, string>,
  email: 'contact@joelletrad.com',
  phone: '+961 XX XXX XXX',
  location: {
    fr: 'Beyrouth, Liban',
    en: 'Beirut, Lebanon',
    ar: 'بيروت، لبنان',
  } as Record<Lang, string>,
  social: {
    instagram: 'https://instagram.com/joelletrad',
    linkedin: 'https://linkedin.com/in/joelletrad',
    pinterest: 'https://pinterest.com/joelletrad',
  },
  formspree: {
    contact: 'https://formspree.io/f/YOUR_FORM_ID',
  },
};
