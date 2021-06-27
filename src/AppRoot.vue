<template>
  <n-config-provider :theme="theme">
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

  import App from './App.vue';
  export default defineComponent({
    name: 'AppProvider',
    components: {
      App,
    },
    setup() {
      const appStore = useAppStore();
      const theme = computed(() => appStore.getThemeCssVars);
      return {
        theme,
      };
    },
  });
</script>
