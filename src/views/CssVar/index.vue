<template>
  <div class="grid-layout-2">
    <div class="col-span-2">
      <CssVarBase />
    </div>
    <UseCssModule />
    <UseCssVars />
  </div>
</template>

<script setup lang="ts">
  import { Base as CssVarBase, UseCssModule, UseCssVars } from './components';
</script>
