<template>
  <n-card>
    <n-space vertical align="center">
      <span> {{ String(a) }}--{{ b }}--{{ c }} </span>
     <n-button type="primary" @click="add">add</n-button>
    </n-space>
  </n-card>
</template>

<script>
  import { inject, ref } from 'vue';
  import { CountSymbol_1, CountSymbol_2, CountSymbol_3 } from './sharedKey';
  export default {
    setup() {
      const a = inject(CountSymbol_1);
      const b = inject(CountSymbol_2, 456);
      const c = inject(CountSymbol_3, ref(789));
      const add = () => {
        b.value++;
        c.value++;
      };
      return {
        a,
        b,
        c,
        add,
      };
    },
  };
</script>

<style></style>
