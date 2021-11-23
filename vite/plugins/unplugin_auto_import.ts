import AutoImport from 'unplugin-auto-import/vite';

export default function genAutoImport() {
  return AutoImport({
    dts: 'types/auto-imports.d.ts',
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      /\.vue$/,
      /\.vue\?vue/, // .vue
      /\.md$/, // .md
    ],
    // global imports to register
    imports: [
      // presets
      'vue',
      'vue-router',
      {
        vue: ['isProxy', 'isReactive', 'useCssVars'],
      },
    ],
  });
}
