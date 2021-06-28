<template>
  <n-card :title="$options.name">
    <des-table :var-obj="{ constant, num, num2 }" />
    <template #action>
      <n-space>
        <n-button @click="add">++</n-button>
        <n-input-number v-model:value="constant" :step="10" placeholder="constant" />
      </n-space>
    </template>
  </n-card>
</template>

<script lang="ts">
  import { defineComponent, inject, ref, Ref, unref } from 'vue';
  import { CountSymbol_1, CountSymbol_2, CountSymbol_3 } from './sharedKey';
  export default defineComponent({
    name: 'Provide & Inject',
    setup() {
      const constant = inject(CountSymbol_1, ref(10));
      const num = inject(CountSymbol_2, 50) as unknown as Ref<number>;
      const num2 = inject(CountSymbol_3, ref(100));
      const add = () => {
        num.value += unref(constant);
        num2.value += unref(constant);
      };
      return {
        constant,
        num,
        num2,
        add,
      };
    },
  });
</script>

<style></style>
