<template>
  <n-card :title="$options.name">
    <n-space vertical>
      <n-button type="primary" @click="hangleClick">inc</n-button>
      <des-table :var-obj="{ a, b }" />
    </n-space>
  </n-card>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    name: 'Base',
  });
</script>

<script setup lang="ts">
  ref: a = 1;
  const b = ref<number>(200);
  const inc = () => {
    a++;
  };
  const inc2 = () => {
    setTimeout(() => {
      $a.value++;
    }, 100);
  };
  const inc3 = () => {
    b.value--;
  };
  const hangleClick = () => {
    inc();
    inc2();
    inc3();
  };
</script>

<style></style>
