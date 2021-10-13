<template>
  <n-card :title="$options.name">
    <des-table :var-obj="{ num, num2, num3 }" />
    <template #action>
      <n-space>
        <n-button @click="add">++</n-button>
        <n-button @click="resetSharedState">reset</n-button>
      </n-space>
    </template>
  </n-card>
</template>

<script lang="ts">
  import { sharedState, resetSharedState } from '@/composables/Common';
  export default defineComponent({
    name: 'useReactive',
    setup() {
      const add = () => {
        sharedState.num++;
      };
      return {
        ...toRefs(sharedState),
        add,
        resetSharedState,
      };
    },
  });
</script>

<style></style>
