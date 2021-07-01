<template>
  <grid-layout>
    <component v-for="comp in comps" :is="comp" />
  </grid-layout>
</template>

<script>
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'otherApi',
  });
</script>
<script setup>
  import * as all from './components';
  const comps = all;
</script>
