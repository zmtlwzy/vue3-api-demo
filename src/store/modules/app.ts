
import { defineStore } from 'pinia';
import { store } from '@/store';

interface AppState {
  x: number,
  y: number
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    x: 0,
    y: 0
  }),
  getters: {
    getX(): number {
      return this.x;
    },
    getY(): number {
      return this.y;
    }
  },
  actions: {
    setValue(arr: [number, number]) {
      this.x += 1
      this.y += arr[0]
    }
  }
})

// Need to be used outside the setup
export function useAppStoreWidthOut() {
  return useAppStore(store);
}
