<template>
  <MainLayout :menuOptions="menuOptions">
    <template #header>
      <div class="flex flex-row items-center px-8 h-full justify-between">
        <h2 class="text-2xl font-bold">Vue3 Api Demo</h2>
        <div class="teleport-header-container"></div>
        <n-button-group size="small" inverted>
          <n-button
            v-for="str in themeMode"
            :type="str === currentMode ? 'primary' : 'default'"
            @click="handleClick(str)"
          >
            {{ str }}
          </n-button>
        </n-button-group>
      </div>
    </template>
    <template #content>
      <router-view :key="refreshId" />
    </template>
    <template #footer>
      <div class="flex w-full justify-center items-center teleport-footer-container">
        <p class="mr-15 text-md">vue version: {{ vueVer }}</p>
        <p class="mr-15 text-md">naive-ui version: {{ naiveuiVer }}</p>
        <n-button type="primary" class="mr-15" @click="handleRefresh">refresh</n-button>
      </div>
    </template>
  </MainLayout>
</template>

<script lang="ts">
  import {
    computed,
    defineComponent,
    onMounted,
    ref,
    version as vueVer,
    watch,
    watchEffect,
  } from 'vue';

  import { useLoadingBar, version as naiveuiVer } from 'naive-ui';

  import { usePreferredDark, useLocalStorage } from '@vueuse/core';

  import { useAppStore } from '@/store/modules/app';
  import { loadingBarApiRef } from '@/router';
  import { List as routerList } from '@/router/routesList';

  import { genMeunList } from '@/router/menuList';

  const list = routerList.filter((item) => {
    return item.path !== '/';
  });

  type themeMode = 'light' | 'auto' | 'dark';
  const themeMode = ['light', 'auto', 'dark'] as const;
  const defaultThemeMode: themeMode = 'auto';

  export default defineComponent({
    name: 'app',
    setup() {
      const currentMode = ref<themeMode>(defaultThemeMode);

      const loadingBar = useLoadingBar();
      const appStore = useAppStore();

      const refreshId = computed(() => appStore.getRefreshId);

      const handleRefresh = () => {
        appStore.resetAllState();
      };

      onMounted(() => {
        loadingBarApiRef.value = loadingBar;
        loadingBar?.finish();
      });

      const menuOptions = genMeunList(list);

      const isDark = usePreferredDark();

      const localTheme = useLocalStorage('__theme__', defaultThemeMode);

      watch(currentMode, (val) => {
        switch (val) {
          case 'light':
            appStore.setThemeName('light');
            break;
          case 'dark':
            appStore.setThemeName('dark');
            break;
        }
      });

      watchEffect(() => {
        if (currentMode.value !== 'auto') return;
        if (isDark.value) {
          appStore.setThemeName('dark');
        } else {
          appStore.setThemeName('light');
        }
      });

      const handleClick = (str: themeMode) => {
        currentMode.value = str;
        localTheme.value = str;
      };

      return {
        themeMode,
        currentMode,
        handleClick,
        vueVer,
        naiveuiVer,
        menuOptions,
        refreshId,
        handleRefresh,
      };
    },
  });
</script>
