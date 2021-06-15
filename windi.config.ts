import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  // purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  // prefix:'tw-',
  theme: {
    extend: {
      colors: {
        primary: '#42b983',
      },
    },
  },
  shortcuts: {
    'btn': 'px-2 border bg-primary rounded-md hover:opacity-80'
  },
  variants: {},
  plugins: [],
});
