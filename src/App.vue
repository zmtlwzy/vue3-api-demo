<template>
  <MainLayout :menuOptions="menuOptions">
    <template #header>
      <div class="flex flex-row items-center px-8 h-full justify-between">
        <h2 class="text-2xl font-bold">Vue3 Api Demo</h2>
        <div class="teleport-header-container"></div>
        <n-button text style="font-size: 1.35em" @click="handleClick">
          <n-icon v-if="currentMode === 'light'" color="#f5eb35"> <i-bi-sun-fill /> </n-icon>
          <n-icon v-else-if="currentMode === 'dark'" color="#d0d0d0"> <i-bi-moon-fill /> </n-icon>
        </n-button>
      </div>
    </template>
    <template #content>
      <router-view :key="refreshId" />
    </template>
    <template #footer>
      <div class="flex w-full justify-center items-center teleport-footer-container">
        <p class="mr-15 text-md">vue version: {{ vueVer }}</p>
        <p class="mr-15 text-md">naive-ui version: {{ naiveuiVer }}</p>
        <n-button type="primary" class="mr-15" @click="handleRefresh">
          <template #icon>
            <n-icon>
              <i-ion-refresh />
            </n-icon>
          </template>
          refresh
        </n-button>
      </div>
    </template>
  </MainLayout>
</template>

<script lang="ts">
  import {
    computed,
    defineComponent,
    onBeforeMount,
    onMounted,
    ref,
    version as vueVer,
    watch,
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

  type themeMode = 'light' | 'dark';
  const defaultThemeMode: themeMode = 'light';

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

      onBeforeMount(() => {
        localTheme.value && (currentMode.value = localTheme.value as themeMode);
      });

      watch(
        currentMode,
        (val) => {
          switch (val) {
            case 'light':
              appStore.setThemeName('light');
              break;
            case 'dark':
              appStore.setThemeName('dark');
              break;
          }
        },
        {
          immediate: true,
        }
      );

      watch(
        isDark,
        () => {
          if (!isDark.value) currentMode.value = 'light';
          else currentMode.value = 'dark';
        },
        {
          immediate: true,
        }
      );

      const handleClick = () => {
        if (currentMode.value === 'light') currentMode.value = 'dark';
        else currentMode.value = 'light';
      };

      return {
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
