import type { UserConfig, ConfigEnv } from 'vite';

import { loadEnv } from 'vite';

import { resolve } from 'path'

import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import WindiCSS from 'vite-plugin-windicss';
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

export default ({ command, mode }: ConfigEnv): UserConfig => {

  const root = process.cwd();

  const env = loadEnv(mode, root);

  const isBuild = command === 'build';

  return {
    resolve: {
      alias: {
        '#': resolve(__dirname, './'),
        '@': resolve(__dirname, 'src'),
        comps: resolve(__dirname, 'src/components'),
        views: resolve(__dirname, 'src/views'),
      },
    },
    // base: env.VITE_PUBLIC_PATH,
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

      Components({
        dts: 'types/components.d.ts',
        //auto import dirs compontents 
        dirs: ['src/components', 'src/layout'],
        //auto import Icon & Naive compontents
        resolvers: [IconsResolver({
          componentPrefix: 'i'
        }), NaiveUiResolver()],
      }),
      Icons({
        scale: 1.2, // Scale of icons against 1em
        defaultStyle: '', // Style apply to icons
        defaultClass: '', // Class names apply to icons
        compiler: 'vue3', // 'vue2', 'vue3', 'jsx'
        jsx: 'react' // 'react' or 'preact'
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
