import { defineConfig } from 'vite-plugin-windicss'
import plugin from 'windicss/plugin'
import themeOverrides from './naive-ui-theme-overrides.json';
// import { cloneDeep } from 'lodash-es';

export default defineConfig({
  // purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  attributify: {
    prefix: 'w:'
  },
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
  alias: {
    'column-layout': 'flex flex-col border border-dashed p-3 my-3',
    'flex-VC': 'flex items-center'
  },
  shortcuts: {},
  variants: {},
  plugins: [...createMyPlugin()],
});

function createMyPlugin() {
  const GridLayout = plugin(({ addDynamic, theme }) => {

    addDynamic('grid-layout', ({ Utility, Style }) => {
      const handler = Utility.handler.handleStatic(theme('gridLayout')).handleNumber(1, undefined, 'int');
      if (handler.value) {
        return Style.generate(Utility.class, {
          display: 'grid',
          'grid-gap': '32px',
          'grid-template-columns': `repeat(${handler.value}, minmax(0, 1fr))`,
        });
      }
    }, {
      group: 'gridLayout',
      completions: [
        'grid-layout-{int}',
      ],
    });
  },
    {
      theme: {
        gridLayout: {
        },
      },
      variants: {
        gridLayout: ['responsive'],
      },
    });
  return [GridLayout]
}