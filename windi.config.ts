import { defineConfig } from 'vite-plugin-windicss'
import lineClamp from 'windicss/plugin/line-clamp';

export default defineConfig({
  // purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  // prefix:'tw-',
  shortcuts: {
    'topBarItemsHeight': 'h-7 lg:h-9',
    'topBarItemsWidth': 'w-7 lg:w-9',
    'center-layout': 'flex justify-center items-center',
    'start-layout': 'flex justify-start items-center'
  },
  variants: {},
  plugins: [lineClamp],
});
