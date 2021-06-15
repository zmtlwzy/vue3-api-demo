import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  // purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  attributify: {
    prefix: 'w:'
  },
  // prefix:'tw-',
  theme: {
    extend: {
      colors: {
        primary: '#42b983',
      },
    },
  },
  shortcuts: {
    'btn': 'px-2 border bg-primary rounded-md hover:opacity-80',
    'column-layout':'flex flex-col items-center mb-5 p-3 border border-dashed border-gray-300'
  },
  variants: {},
  plugins: [],
});
