<template>
  <n-card :title="$options.name">
    <n-space vertical>
      <div :class="[...Object.values(module), fatherModule['module-bold'], 'module-bg']"
        >moduleClass</div
      >
    </n-space>
  </n-card>
</template>

<script lang="ts">
  import { defineComponent, useCssModule } from 'vue';
  export default defineComponent({
    name: 'useCssModule',
  });
</script>

<script setup lang="ts">
  ref: module = useCssModule();
  ref: fatherModule = useCssModule('other');
  console.log(module, fatherModule);
</script>

<style module>
  .module-class {
    font-size: large;
    display: inline;
  }

  .module-bg {
    background-color: rgb(120, 150, 206);
  }
</style>

<style module="other">
  .module-bold {
    font-weight: bold;
  }
</style>
