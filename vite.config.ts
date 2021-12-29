import type { UserConfig, ConfigEnv } from 'vite';

import { loadEnv } from 'vite';

import { resolve } from 'path';

import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import getPlugins from './build/plugins';

export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();

  const env = loadEnv(mode, root);

  return {
    resolve: {
      alias: {
        '#': resolve(__dirname, './'),
        '@': resolve(__dirname, 'src'),
        comps: resolve(__dirname, 'src/components'),
        views: resolve(__dirname, 'src/views')
      }
    },
    base: env.VITE_PUBLIC_PATH,
    plugins: [
      vue({
        reactivityTransform: 'src/views/ScriptSetup/**/*.vue',
        template: {
          compilerOptions: {
            isCustomElement: tag => tag.startsWith('my-')
          }
        }
      }),
      vueJsx(),
      ...getPlugins
    ],
    build: {
      target: 'es2015',
      terserOptions: {
        compress: {
          keep_infinity: true,
          // Used to delete console in production environment
          drop_console: false
        },
        format: {
          comments: false
        }
      },
      // Turning off brotliSize display can slightly reduce packaging time
      brotliSize: false,
      chunkSizeWarningLimit: 800
    },

    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true
        }
      }
    }
  };
};
