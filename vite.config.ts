import type { UserConfig, ConfigEnv } from 'vite';

import { resolve } from 'path'

import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import WindiCSS from 'vite-plugin-windicss';

export default ({ command }: ConfigEnv): UserConfig => {

  const isBuild = command === 'build';

  return {
    resolve: {
      alias: {
        '#': resolve(__dirname, './'),
        '@': resolve(__dirname, 'src'),
        assets: resolve(__dirname, 'src/assets'),
        comps: resolve(__dirname, 'src/components'),
        views: resolve(__dirname, 'src/views'),
      },
    },
    base: '',
    plugins: [
      vue(),
      vueJsx(),
      WindiCSS({
        safelist: 'no-select',
      })
    ],
    build: {
      target: 'es2015',
      terserOptions: {
        compress: {
          keep_infinity: true,
          // Used to delete console in production environment
          drop_console: true,
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
