<template>
  <div class="grid container">
    <A class="column-layout"/>
    <B msg="demo2" class="column-layout" @inc="handleClick">slot_default</B>
    <C class="column-layout"/>
  </div>
</template>

<script setup>
  import { A, B,C } from '@/components/ScriptSetup';
  import { isRef } from 'vue';
  const handleClick = (e) => {
    isRef(e) && e.value++
  };
</script>

<style></style>
