<template>
  <n-h2>open console</n-h2>
  <div class="grid-layout-2">
    <component v-for="comp in allComps" :is="comp" />
  </div>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'watch',
  });
</script>
<script setup lang="ts">
  import * as AllComps from './components';
  const allComps = AllComps;
</script>
