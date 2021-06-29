<template>
  <n-card :title="$options.name">
    <div class="textClass">textClass</div>
  </n-card>
</template>

<script lang="ts">
  import { defineComponent, useCssVars } from 'vue';
  export default defineComponent({
    name: 'useCssVars',
  });
</script>

<script setup lang="ts">
  useCssVars((ctx) => {
    console.log(ctx);
    return {
      'font-color': 'yellow',
      'bg-color': 'hotpink',
    };
  });
</script>

<style scoped>
  .textClass {
    color: var(--font-color);
    background-color: var(--bg-color);
  }
</style>
