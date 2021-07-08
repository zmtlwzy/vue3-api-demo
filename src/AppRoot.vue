<template>
  <n-config-provider :hljs="hljs" :theme="theme" :theme-overrides="themeOverrides">
    <n-loading-bar-provider>
      <n-message-provider>
        <App />
      </n-message-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { useAppStore } from '@/store/modules/app';

  import hljs from 'highlight.js/lib/core';
  import js from 'highlight.js/lib/languages/javascript';

  import App from './App.vue';
  export default defineComponent({
    name: 'AppProvider',
    components: {
      App,
    },
    setup() {
      const appStore = useAppStore();
      const theme = computed(() => appStore.getThemeCssVars);
      const themeOverrides = computed(() => appStore.getThemeOverries);

      hljs.registerLanguage('javascript', js);
      return {
        theme,
        themeOverrides,
        hljs,
      };
    },
  });
</script>
