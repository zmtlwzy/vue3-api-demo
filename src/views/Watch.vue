<template>
  <n-card>
    <div class="grid-layout">
      <component v-for="comp in allComps" :is="comp" />
      <span>open console</span>
    </div>
  </n-card>
</template>

<script>
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'watch',
  });
</script>
<script setup>
  import * as AllComps from '@/components/Watch';
  const allComps = AllComps;
</script>
