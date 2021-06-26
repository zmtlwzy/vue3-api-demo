<template>
  <div class="grid container">
    <component v-for="comp in comps" :is="comp" class="column-layout"></component>
  </div>
</template>

<script setup lang="ts">
  import * as all from './components';
  const comps = all
</script>
