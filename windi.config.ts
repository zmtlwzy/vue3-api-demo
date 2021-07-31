import { defineConfig } from 'vite-plugin-windicss'
import themeOverrides from './naive-ui-theme-overrides.json';

export default defineConfig({
  // purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  attributify: {
    prefix: 'w:'
  },
  preflight: false,
  // prefix:'tw-',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: themeOverrides.common.primaryColor,
          'lighten': themeOverrides.common.primaryColorHover,
          'darken': themeOverrides.common.primaryColorPressed
        },
      },
    },
  },
  shortcuts: {},
  variants: {},
  plugins: [],
});
