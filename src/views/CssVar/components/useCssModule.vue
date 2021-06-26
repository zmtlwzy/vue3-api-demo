<template>
  <n-space vertical>
    <div :class="module['module-class']">moduleClass</div>
  </n-space>
</template>

<script lang="ts">
  import { defineComponent, useCssModule } from 'vue';
  export default defineComponent({
    name: 'useCssModule',
  });
</script>

<script setup lang="ts">
  ref: module = useCssModule();
</script>

<style module>
  .module-class {
    font-size: large;
    display: inline;
  }

</style>
