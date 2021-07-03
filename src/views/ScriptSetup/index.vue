<template>
  <GridLayout>
    <ScriptSetupBase />
    <UseContext msg="demo2" @inc="handleClick">
      <template #default>slot_default</template>
      <template #other>slot_other</template>
    </UseContext>
  </GridLayout>
</template>

<script setup>
  import { Base as ScriptSetupBase,UseContext } from './components';
  import { isRef } from 'vue';
  const handleClick = (e) => {
    isRef(e) && e.value++;
  };
</script>
