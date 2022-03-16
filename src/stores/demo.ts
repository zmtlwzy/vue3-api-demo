import { defineStore } from 'pinia'

interface State {
  x: number
  y: number
}

export const useDemoStore = defineStore({
  id: 'demo',
  state: (): State => ({
    x: 0,
    y: 0,
  }),
  getters: {
    getX(): number {
      return this.x
    },
    getY(): number {
      return this.y
    },
  },
  actions: {
    setValue(arr: [number, unknown]) {
      this.x += 1
      this.y += arr[0]
    },
  },
})
