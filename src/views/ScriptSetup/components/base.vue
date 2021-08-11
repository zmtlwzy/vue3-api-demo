<template>
  <n-card :title="$options.name">
    <n-space vertical>
      <des-table :var-obj="{ a, b, c }" />
      <des-table :var-obj="{ x, y, z }" />
    </n-space>
    <template #action>
      <n-button type="primary" @click="hangleClick">add</n-button>
    </template>
  </n-card>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useMouse } from '@vueuse/core';
  export default defineComponent({
    name: '$ref $computed $fromRefs $raw',
  });
</script>

<script setup lang="ts">
  let a = $ref(1);
  const raw_a = $raw(a);
  const b = ref(200);
  let c = $computed(() => a + b.value);

  const { x, y } = $fromRefs(useMouse());
  let z = $computed(() => x + y);

  const inc = () => {
    a++;
  };
  const inc2 = () => {
    setTimeout(() => {
      raw_a.value++;
    }, 100);
  };
  const inc3 = () => {
    b.value++;
  };
  const hangleClick = () => {
    inc();
    inc2();
    inc3();
  };
</script>

<style></style>
