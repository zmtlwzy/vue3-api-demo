
import { defineStore } from 'pinia';
import { store } from '@/store';
import { darkTheme,GlobalThemeOverrides } from 'naive-ui'
import { useDemoStore } from './demo';
import { resetSharedState } from '@/hooks/Common';
import themeOverrides from '@/naive-ui-theme-overrides.json';


interface AppState {
  headerHeight: number,
  siderWidth: number,
  themeName: 'dark' | 'light',
  refreshId: number
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    refreshId: 0,
    headerHeight: 64,
    siderWidth: 250,
    themeName: 'light',
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
    getThemeName(): AppState['themeName'] {
      return this.themeName;
    },
    getThemeCssVars(): null | typeof darkTheme {
      return this.themeName === 'dark' ? darkTheme : null;
    },
    getThemeOverries(): GlobalThemeOverrides | undefined {
      return this.themeName === 'dark' ? undefined : themeOverrides
    }
  },
  actions: {
    setThemeName(val: AppState['themeName']) {
      this.themeName = val
    },
    resetAllState() {
      this.refreshId++
      useDemoStore().$reset()
      resetSharedState()
    }
  }
})

// Need to be used outside the setup
export function useAppStoreWidthOut() {
  return useAppStore(store);
}
