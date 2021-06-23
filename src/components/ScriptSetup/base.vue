<template>
  <n-space vertical>
    <h3>{{$options.name}}</h3>
    <n-button type="primary" @click="hangleClick">inc</n-button>
    <DesTable :var-obj="{a,b}" />
  </n-space>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    name: 'Base',
  });
</script>

<script setup lang="ts">
  import DesTable from '@/components/VarDescriptions';
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
