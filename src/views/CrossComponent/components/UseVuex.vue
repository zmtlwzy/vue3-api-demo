<template>
  <div class="column-layout">
    <span>x : {{ x }}--y : {{ y }}</span>
   <n-button type="primary" @click="add(8, $event)">++</n-button>
  </div>
</template>

<script>
  import { toRefs, computed } from 'vue';

  import { useDemoStore } from '@/store/modules/demo';

  export default {
    setup() {
      const demoStore = useDemoStore();

      return {
        x: computed(() => demoStore.getX),
        y: computed(() => demoStore.getY),
        add: (...params) => demoStore.setValue(params),
      };
    },
  };
</script>

<style></style>
