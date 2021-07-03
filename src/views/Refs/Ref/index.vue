<template>
  <n-card>
    <n-space vertical align="center">
      <p>count(use ref):{{ count }}</p>
      <n-button type="primary" @click="add">+</n-button>
    </n-space>
  </n-card>
</template>

<script>
  import { ref } from 'vue';
  export default {
    name: 'Ref',
    setup() {
      const count = ref(0);
      const add = () => {
        count.value++;
      };
      return {
        count,
        add,
      };
    },
  };
</script>
