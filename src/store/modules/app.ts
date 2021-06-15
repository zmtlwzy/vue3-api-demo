
import { defineStore } from 'pinia';
import { store } from '@/store';

interface AppState {
  value: any,
  pageLoading: boolean;
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    value: 1,
    pageLoading: false,
  }),
  getters: {
    getValue(): any {
      return this.value;
    }
  },
  actions: {
    setValue(val: any) {
      this.value = val;
    }
  }
})

// Need to be used outside the setup
export function useAppStoreWidthOut() {
  return useAppStore(store);
}
