import { defineStore } from 'pinia';
import { store } from '@/store';
import { darkTheme } from 'naive-ui';
import { useDemoStore } from './demo';
import { resetSharedState } from '@/composables/Common';
import themeOverrides from '#/naive-ui-theme-overrides.json';
import { defaultThemeMode, ThemeEnum } from '@/enums/themeEnum';

interface AppState {
  headerHeight: number;
  siderWidth: number;
  themeMode: ThemeEnum;
  refreshId: number;
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    refreshId: 0,
    headerHeight: 64,
    siderWidth: 250,
    themeMode: defaultThemeMode,
  }),
  getters: {
    getRefreshId(): number {
      return this.refreshId;
    },
    getHeaderHeight(): number {
      return this.headerHeight;
    },
    getSiderWidth(): number {
      return this.siderWidth;
    },
    getThemeMode(): ThemeEnum {
      return this.themeMode;
    },
    getNaiveThemeProps() {
      if (this.themeMode === 'dark')
        return {
          theme: darkTheme,
          'theme-overrides': null,
        };
      else
        return {
          'theme-overrides': themeOverrides,
        };
    },
  },
  actions: {
    setThemeMode(val: ThemeEnum) {
      this.themeMode = val;
    },
    resetAllState() {
      this.refreshId++;
      useDemoStore().$reset();
      resetSharedState();
    },
  },
});

// Need to be used outside the setup
export function useAppStoreWidthOut() {
  return useAppStore(store);
}
