import type { UserConfig, ConfigEnv } from 'vite';

import { loadEnv } from 'vite';

import { resolve } from 'path'

import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import WindiCSS from 'vite-plugin-windicss';
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

export default ({ command, mode }: ConfigEnv): UserConfig => {

  const root = process.cwd();

  const env = loadEnv(mode, root);

  return {
    resolve: {
      alias: {
        '#': resolve(__dirname, './'),
        '@': resolve(__dirname, 'src'),
        comps: resolve(__dirname, 'src/components'),
        views: resolve(__dirname, 'src/views'),
      },
    },
    base: env.VITE_PUBLIC_PATH,
    plugins: [
      vue(
        {
          refTransform: 'src/views/ScriptSetup/**/*.vue',
          template: {
            compilerOptions: {
              isCustomElement: tag => tag.startsWith('my-')
            }
          }
        }
      ),
      vueJsx(),
      WindiCSS({
        safelist: 'no-select',
      }),
      AutoImport({
        dts: 'types/auto-imports.d.ts',
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/, /\.vue\?vue/, // .vue
          /\.md$/, // .md  
        ],
        // global imports to register
        imports: [
          // presets
          'vue',
          'vue-router',
          {
            vue: ['isProxy', 'isReactive', 'useCssVars']
          }
        ]
      }),
      Components({
        dts: 'types/components.d.ts',
        // auto import dirs compontents 
        dirs: ['src/components', 'src/layout'],
        // auto import Icon & Naive compontents
        resolvers: [IconsResolver({
          prefix: 'i',
          customCollections: [
            'my-svg'
          ]
        }), NaiveUiResolver()],
      }),
      Icons({
        scale: 1, // Scale of icons against 1em
        defaultStyle: 'display:inline-block;', // Style apply to icons
        defaultClass: '', // Class names apply to icons
        compiler: 'vue3', // 'vue2', 'vue3', 'jsx'
        jsx: 'react', // 'react' or 'preact'
        customCollections: {
          'my-svg': FileSystemIconLoader(resolve(process.cwd(), 'src/assets/icons'))
        }
      })
    ],
    build: {
      target: 'es2015',
      terserOptions: {
        compress: {
          keep_infinity: true,
          // Used to delete console in production environment
          drop_console: false,
        },
        format: {
          comments: false
        }
      },
      // Turning off brotliSize display can slightly reduce packaging time
      brotliSize: false,
      chunkSizeWarningLimit: 600,
    },

    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
  };
};
