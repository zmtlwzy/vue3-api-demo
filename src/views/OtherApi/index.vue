<template>
  <n-card>
    <div class="grid-layout">
      <component v-for="comp in comps" :is="comp" />
    </div>
  </n-card>
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
