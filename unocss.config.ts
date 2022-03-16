import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import themeOverrides from './naive-ui-theme-overrides.json'

export default defineConfig({
  shortcuts: [
    ['column-layout', 'flex flex-col border border-dashed p-3 my-3'],
    ['flex-HC', 'flex justify-center'],
    ['flex-VC', 'flex flex-col justify-center'],
    ['flex-C', 'flex justify-center items-center'],
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: themeOverrides.common.primaryColor,
        lighten: themeOverrides.common.primaryColorHover,
        darken: themeOverrides.common.primaryColorPressed,
      },
    },
  },
  rules: [
    [
      /^grid-layout-(\d+)(\/(\d+(.*)))?$/,
      ([, row, , gap, gapUnit]) => {
        return {
          'display': 'grid',
          'grid-gap': `${gap ?? '36'}${gapUnit ? '' : 'px'}`,
          'grid-template-columns': `repeat(${row}, minmax(0, 1fr))`,
        }
      },
      { layer: 'components' },
    ],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})
