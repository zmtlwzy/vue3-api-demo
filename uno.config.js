import { presetUno, presetAttributify, e } from 'unocss';
import presetIcons from '@unocss/preset-icons';
import themeOverrides from './naive-ui-theme-overrides.json';

export default {
  presets: [
    presetAttributify({
      prefix: 'un-',
      prefixedOnly: false
    }),
    presetUno(),
    presetIcons({
      prefix: 'i-'
    })
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: themeOverrides.common.primaryColor,
        lighten: themeOverrides.common.primaryColorHover,
        darken: themeOverrides.common.primaryColorPressed
      }
    }
  },
  rules: [
    [
      /^grid-layout-(\d+)(\/(\d+(.*)))?$/,
      ([, row, , gap, gapUnit]) => {
        return {
          display: 'grid',
          'grid-gap': `${gap ?? '36'}${gapUnit ? '' : 'px'}`,
          'grid-template-columns': `repeat(${row}, minmax(0, 1fr))`
        };
      },
      { layer: 'components' }
    ]
  ],
  shortcuts: {
    'column-layout': 'flex flex-col border border-dashed p-3 my-3',
    'flex-VC': 'flex items-center'
  }
};
