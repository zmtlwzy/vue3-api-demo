<template>
  <MainLayout :menuOptions="menuOptions">
    <template #header>
      <div class="flex flex-row items-center px-8 h-full justify-between">
        <h2 class="text-2xl font-bold">Vue3 Api Demo</h2>
        <div class="teleport-header-container"></div>
        <div class="text-21px cursor-pointer" @click="handleClick">
          <i-my-svg-sun v-if="currentMode === 'light'" />
          <i-my-svg-moon v-else-if="currentMode === 'dark'" />
        </div>
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
    watchEffect,
    onMounted,
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

  enum ThemeEnum {
    DARK = 'dark',
    LIGHT = 'light',
  }
  const defaultThemeMode = ThemeEnum.LIGHT;

  export default defineComponent({
    name: 'app',
    setup() {
      const { DARK, LIGHT } = ThemeEnum;

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

      const isOsDark = usePreferredDark();

      const localTheme = useLocalStorage('__theme__', defaultThemeMode);


      watchEffect(() => {
        const modeVal = localTheme.value;
        if (modeVal === LIGHT) {
          appStore.setThemeName(LIGHT);
        } else if (modeVal === DARK) {
          appStore.setThemeName(DARK);
        }
      });

      watch(
        isOsDark,
        (val) => {
          appStore.setThemeName(val ? DARK : LIGHT) 
        },
        {
          immediate: true,
        }
      );

      const handleClick = () => {
        if (localTheme.value === 'light') localTheme.value = 'dark';
        else localTheme.value = 'light';
      };

      return {
        currentMode:localTheme,
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
