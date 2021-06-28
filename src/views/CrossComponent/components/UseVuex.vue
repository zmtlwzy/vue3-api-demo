<template>
  <n-card :title="$options.name">
    <des-table :var-obj="{ x, y }" />
    <template #action>
      <n-button @click="add(8, $event)">++</n-button>
    </template>
  </n-card>
</template>

<script>
  import { toRefs, computed } from 'vue';

  import { useDemoStore } from '@/store/modules/demo';

  export default {
    name: 'usePinia',
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
