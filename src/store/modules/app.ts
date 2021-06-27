
import { defineStore } from 'pinia';
import { store } from '@/store';
import { darkTheme } from 'naive-ui'

interface AppState {
  headerHeight: number,
  siderWidth: number,
  themeName: 'dark' | 'light',
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({

    headerHeight: 64,
    siderWidth: 250,
    themeName: 'light',
  }),
  getters: {

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
  },
  actions: {

    setThemeName(val: AppState['themeName']) {
      this.themeName = val
    },
    toggleTheme() {
      switch (this.themeName) {
        case 'dark':
          this.setThemeName('light')
          break;
        case 'light':
          this.setThemeName('dark')
          break;
      }
    }
  }
})

// Need to be used outside the setup
export function useAppStoreWidthOut() {
  return useAppStore(store);
}
