<template>
  <GridLayout>
    <ScriptSetupBase />
    <UseContext msg="demo2" @inc="handleClick" ref="comp">
      <template #default>slot_default</template>
      <template #other>slot_other</template>
    </UseContext>
  </GridLayout>
</template>

<script setup>
  import { Base as ScriptSetupBase, UseContext } from './components';
  import { isRef, watch } from 'vue';
  const handleClick = (e) => {
    isRef(e) && e.value++;
  };
  ref: comp = null;
  watch(
    () => comp?.count,
    (val) => {
      console.log(val, 'comp expose count');
    }
  );
</script>
