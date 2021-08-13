<template>
  <n-card :title="$options.name">
    <n-space vertical>
      <des-table :var-obj="{ a, b, c, d }" />
      <des-table :var-obj="{ x, y, z }" />
    </n-space>
    <template #action>
      <n-space>
        <n-button type="primary" @click="hangleClick">add</n-button>
        <n-button type="primary" @click="updateShallowRef">update d</n-button>
      </n-space>
    </template>
  </n-card>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useMouse } from '@vueuse/core';
  export default defineComponent({
    name: '$ref $computed $fromRefs $raw $shallowRef',
  });
</script>

<script setup lang="ts">
  let a = $ref(1);
  const raw_a = $raw(a);
  const b = ref(200);
  let c = $computed(() => a + b.value);
  let d = $shallowRef({
    a,
    b,
    c,
  });

  const { x, y } = $fromRefs(useMouse());
  let z = $computed(() => x + y);

  const updateShallowRef = () => {
    d = {
      a,
      b,
      c,
    };
  };
  
  const hangleClick = () => {
    a++;
    setTimeout(() => {
      raw_a.value++;
    }, 100);
    b.value++;
  };
</script>
