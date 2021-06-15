
import { defineStore } from 'pinia';
import { store } from '@/store';

interface AppState {
  value: number
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    value: 1,
  }),
  getters: {

  },
  actions: {

  }
})

// Need to be used outside the setup
export function useAppStoreWidthOut() {
  return useAppStore(store);
}
