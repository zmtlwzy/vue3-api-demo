<template>
  <n-card :title="$options.name">
    <n-space vertical>
      <des-table :var-obj="{ a, b }" />
    </n-space>
    <template #action>
      <n-button type="primary" @click="hangleClick">add</n-button>
    </template>
  </n-card>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    name: 'Base',
  });
</script>

<script setup lang="ts">
  const a = ref(1);
  const b = ref<number>(200);
  const inc = () => {
    a.value++;
  };
  const inc2 = () => {
    setTimeout(() => {
      a.value++;
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
