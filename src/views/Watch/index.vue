<template>
  <n-h2>open console</n-h2>
  <GridLayout>
    <component v-for="comp in allComps" :is="comp" />
  </GridLayout>
</template>

<script>
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'watch',
  });
</script>
<script setup>
  import * as AllComps from './components';
  const allComps = AllComps;
</script>
