import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  // purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  attributify: {
    prefix: 'w:'
  },
  preflight:false,
  // prefix:'tw-',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT:'#42b983',
          'lighten': '#65c8a0',
          'darken':'#379c6e'
        },
      },
    },
  },
  shortcuts: {
    'btn': 'px-2 border bg-primary rounded-md active:bg-primary-darken',
    'column-layout':'flex flex-col items-center mb-5 p-3 border border-dashed border-gray-300'
  },
  variants: {},
  plugins: [],
});
