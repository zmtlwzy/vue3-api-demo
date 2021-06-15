<template>
  <div class="column-layout">
    <span>x : {{ x }}--y : {{ y }}</span>
    <button class="btn" @click="add(8, $event)">++</button>
  </div>
</template>

<script>
  import { toRefs, computed } from 'vue';

  import { useAppStore } from '@/store/modules/app';

  export default {
    setup() {
      const appStore = useAppStore();

      return {
        x: computed(() => appStore.getX),
        y: computed(() => appStore.getY),
        add: (...params) => appStore.setValue(params),
      };
    },
  };
</script>

<style></style>
