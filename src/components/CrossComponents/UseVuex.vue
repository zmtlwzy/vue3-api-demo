<template>
  <div class="column-layout">
    <span>x : {{ x }}--y : {{ y }}</span>
    <button @click="add(8,$event)">++</button>
  </div>
</template>

<script>
import { toRefs, computed } from "vue";

import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    return {
      x: computed(() => store.state.x),
      y: computed(() => store.state.y),
      add: (...params) => store.commit("setValue",params),
    };
  },
};
</script>

<style></style>
