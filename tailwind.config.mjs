/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cinzel', 'Georgia', 'serif'],
        sans: ['Josefin Sans', 'system-ui', 'sans-serif'],
        'ar-serif': ['Noto Naskh Arabic', 'serif'],
        'ar-sans': ['Noto Sans Arabic', 'sans-serif'],
      },
      colors: {
        cream: '#F5F0E1',
        sand: '#D4C4A8',
        'sand-light': '#EDE7D9',
        terracotta: {
          DEFAULT: '#C67B5C',
          dark: '#A8654A',
          light: '#D4896A',
        },
        olive: {
          DEFAULT: '#6B7B3C',
          light: '#8FA872',
        },
        gold: {
          DEFAULT: '#D4AF37',
          dark: '#BFA030',
          light: '#E5C553',
        },
        warm: {
          black: '#1C1917',
          900: '#2A2522',
          800: '#342E2A',
          700: '#57504A',
          600: '#7A6F65',
          500: '#8C8279',
          400: '#BFB5A8',
          100: '#F5F0E1',
        },
      },
      letterSpacing: {
        logo: '0.2em',
        wide: '0.05em',
      },
    },
  },
  plugins: [],
};
