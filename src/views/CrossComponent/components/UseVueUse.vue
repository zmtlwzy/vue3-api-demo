<template>
  <n-card :title="$options.name">
    <des-table :var-obj="{ count }" />
    <template #action>
      <n-space>
        <n-button @click="inc(1)">inc</n-button>
        <n-button @click="dec(1)">dec</n-button>
        <n-button @click="set(100)">set</n-button>
        <n-button @click="reset(1)">reset</n-button>
      </n-space>
    </template>
  </n-card>
</template>

<script lang="ts">
export const useSharedCounter = createSharedComposable(useCounter);

export default defineComponent({
  name: 'UseVueUse'
});
</script>

<script lang="ts" setup>
import { createSharedComposable, useCounter } from '@vueuse/core';
const { count, inc, dec, set, reset } = useSharedCounter();
</script>
