<template>
  <div class="grid container">
    <A class="column-layout" />
    <B msg="demo2" class="column-layout" @inc="handleClick">
      <template #default>slot_default</template>
      <template #other>slot_other</template>
    </B>
  </div>
</template>

<script setup>
  import { A, B } from '@/components/ScriptSetup';
  import { isRef } from 'vue';
  const handleClick = (e) => {
    isRef(e) && e.value++;
  };
</script>

<style></style>
