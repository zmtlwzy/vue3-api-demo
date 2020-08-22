import { createStore,createLogger } from "vuex";

export default createStore({
  state: {
    x: 0,
    y: 0
  },
  mutations: {
    setValue(state, arr) {
      state.x += 1
      state.y += arr[0]
    },
  },
  actions: {},
  modules: {},
  plugins: process.env.NODE_ENV !== 'production'
    ? [createLogger()]
    : []
});
