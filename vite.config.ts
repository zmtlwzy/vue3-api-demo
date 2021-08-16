import type { UserConfig, ConfigEnv } from 'vite';

import { loadEnv } from 'vite';

import { resolve } from 'path'

import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import WindiCSS from 'vite-plugin-windicss';
import ViteComponents, { NaiveUiResolver } from 'vite-plugin-components'

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
    base: env.VITE_PUBLIC_PATH,
    plugins: [
      vue(
        {
          script: {
            refSugar: true
          },
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

      ViteComponents({
        //auto import dirs compontents 
        dirs: ['src/components', 'src/layout'],
        //auto import Naive compontents
        customComponentResolvers: NaiveUiResolver(),
        globalComponentsDeclaration: 'types/components.d.ts',
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
