<template>
  <n-config-provider :hljs="hljs" v-bind="{ ...getProps }">
    <n-loading-bar-provider>
      <n-message-provider>
        <App />
      </n-message-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script lang="ts">
import { useAppStore } from '@/store/modules/app';

import hljs from 'highlight.js/lib/core';
import js from 'highlight.js/lib/languages/javascript';

import App from './App.vue';
export default defineComponent({
  name: 'AppProvider',
  components: {
    App
  },
  setup() {
    const appStore = useAppStore();
    const getProps = computed(() => appStore.getNaiveThemeProps);

    hljs.registerLanguage('javascript', js);
    return {
      getProps,
      hljs
    };
  }
});
</script>
