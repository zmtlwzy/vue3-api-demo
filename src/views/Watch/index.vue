<template>
  <n-h2 class="max-w-screen">open console</n-h2>
  <div class="grid-layout-2">
    <component v-for="comp in allComps" :is="comp" :key="comp.name" />
  </div>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'Watch',
  });
</script>
<script setup lang="ts">
  import * as allComps from './components';
</script>
