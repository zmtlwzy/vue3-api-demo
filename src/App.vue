<template>
  <div>
    <MainLayout :menuOptions="menuOptions">
      <template #header>
        <div class="flex flex-row items-center px-8 h-full justify-between">
          <h2 class="text-2xl font-bold">Vue3 Api Demo</h2>
          <div class="teleport-header-container"></div>
          <i
            @click="handleClick"
            :class="{
              'i-emojione-sun': currentMode === 'light',
              'i-emojione-full-moon': currentMode === 'dark'
            }"
            class="text-xl cursor-pointer"
          ></i>
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
              <i class="i-ion-refresh"></i>
            </template>
            refresh
          </n-button>
        </div>
      </template>
    </MainLayout>
  </div>
</template>

<script lang="ts">
import { version as vueVer } from 'vue';
import { useLoadingBar, useThemeVars, version as naiveuiVer } from 'naive-ui';
import { usePreferredDark, useLocalStorage } from '@vueuse/core';

import { useAppStore } from '@/store/modules/app';
import { loadingBarApiRef } from '@/router';
import { List as routerList } from '@/router/routesList';

import { genMeunList } from '@/router/menuList';
import { ThemeEnum, localThemeKey } from '@/enums/themeEnum';

const list = routerList.filter(item => {
  return item.path !== '/';
});

export default defineComponent({
  name: 'App',
  setup() {
    const { DARK, LIGHT } = ThemeEnum;

    const loadingBar = useLoadingBar();
    const appStore = useAppStore();
    const themeVars = useThemeVars();

    const tt = ref('i-ion-refresh-circle');

    useCssVars(() => {
      const list = themeVars.value;
      return {
        'primary-color': list.primaryColor,
        'primary-hover-color': list.primaryColorHover,
        'primary-pressed-color': list.primaryColorPressed,
        'primary-suppl-color': list.primaryColorSuppl
      };
    });

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

    const getOsTheme = computed(() => (isOsDark ? DARK : LIGHT));

    const localTheme = useLocalStorage<ThemeEnum>(localThemeKey, appStore.getThemeMode);

    watch(
      localTheme,
      val => {
        appStore.setThemeMode(val);
      },
      {
        immediate: true
      }
    );

    watch(
      getOsTheme,
      val => {
        if (val !== getOsTheme.value) appStore.setThemeMode(val);
      },
      {
        immediate: true
      }
    );

    const handleClick = () => {
      localTheme.value = localTheme.value === LIGHT ? DARK : LIGHT;
    };

    return {
      currentMode: localTheme,
      handleClick,
      vueVer,
      naiveuiVer,
      menuOptions,
      refreshId,
      handleRefresh,
      tt
    };
  }
});
</script>
