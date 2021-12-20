<template>
  <n-card :title="$options.name">
    <div class="textClass">textClass</div>
  </n-card>
</template>

<script lang="ts">
export default defineComponent({
  name: 'UseCssVars'
});
</script>

<script setup lang="ts">
useCssVars(ctx => {
  console.log(ctx);
  return {
    'font-color': 'yellow',
    'bg-color': 'hotpink'
  };
});
</script>

<style scoped>
.textClass {
  color: var(--font-color);
  background-color: var(--bg-color);
}
</style>
