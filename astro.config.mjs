import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://antcompile.github.io',
  base: '/joelle-web',
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'ar'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
