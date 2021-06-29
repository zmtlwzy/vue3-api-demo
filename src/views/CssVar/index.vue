<template>
  <GridLayout>
    <n-grid-item :span="2">
      <CssVarBase />
    </n-grid-item>
    <UseCssModule />
    <UseCssVars />
  </GridLayout>
</template>

<script setup lang="ts">
  import { Base as CssVarBase, UseCssModule, UseCssVars } from './components';
</script>
