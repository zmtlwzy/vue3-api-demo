<template>
  <n-space vertical>
    <h3>{{ $options.name }}</h3>
    <div class="textClass">textClass</div>
  </n-space>
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
