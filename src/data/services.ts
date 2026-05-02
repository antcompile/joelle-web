import type { Lang } from '../i18n/languages';

export interface Service {
  key: string;
  icon: string;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  deliverables: Record<Lang, string[]>;
}

export const services: Service[] = [
  {
    key: 'residential',
    icon: 'home',
    title: {
      fr: 'Residentiel',
      en: 'Residential',
      ar: 'سكني',
    },
    description: {
      fr: 'Maisons, appartements et villas. Des espaces de vie qui reflettent votre personnalite et votre mode de vie.',
      en: 'Homes, apartments, and villas. Living spaces that reflect your personality and lifestyle.',
      ar: 'منازل وشقق وفيلات. مساحات معيشة تعكس شخصيتكم ونمط حياتكم.',
    },
    deliverables: {
      fr: ['Plans et elevations', 'Selection des materiaux', 'Eclairage', 'Mobilier sur mesure'],
      en: ['Floor plans & elevations', 'Material selection', 'Lighting design', 'Custom furniture'],
      ar: ['مخططات الأرضيات', 'اختيار المواد', 'تصميم الإضاءة', 'أثاث مخصص'],
    },
  },
  {
    key: 'commercial',
    icon: 'building',
    title: {
      fr: 'Commercial',
      en: 'Commercial',
      ar: 'تجاري',
    },
    description: {
      fr: 'Bureaux, commerces et showrooms. Des espaces professionnels qui inspirent et performent.',
      en: 'Offices, retail, and showrooms. Professional spaces that inspire and perform.',
      ar: 'مكاتب ومحلات تجارية وصالات عرض. مساحات مهنية تلهم وتؤدي.',
    },
    deliverables: {
      fr: ['Amenagement spatial', 'Identite de marque', 'Conformite reglementaire', 'Gestion de projet'],
      en: ['Space planning', 'Brand identity integration', 'Regulatory compliance', 'Project management'],
      ar: ['تخطيط المساحات', 'دمج هوية العلامة', 'الامتثال التنظيمي', 'إدارة المشروع'],
    },
  },
  {
    key: 'consultation',
    icon: 'compass',
    title: {
      fr: 'Consultation',
      en: 'Consultation',
      ar: 'استشارة',
    },
    description: {
      fr: 'Conseil en couleurs, planification spatiale et selection de materiaux. Une direction creative sur mesure.',
      en: 'Color consulting, space planning, and material selection. Bespoke creative direction.',
      ar: 'استشارات الألوان وتخطيط المساحات واختيار المواد. توجيه إبداعي مخصص.',
    },
    deliverables: {
      fr: ['Palette de couleurs', 'Moodboards', 'Specifications materiaux', 'Direction artistique'],
      en: ['Color palette', 'Mood boards', 'Material specifications', 'Art direction'],
      ar: ['لوحة الألوان', 'لوحات المزاج', 'مواصفات المواد', 'التوجيه الفني'],
    },
  },
];
