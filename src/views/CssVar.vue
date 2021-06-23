<template>
  <div class="grid container">
    <component v-for="comp in comps" :is="comp" class="column-layout"></component>
  </div>
</template>

<!-- <script>
  import * as comps from '@/components/CssVar';
  import { defineComponent } from 'vue';
  export default defineComponent({
    components: { ...comps },
    setup() {
      return {
        comps,
      };
    },
  });
</script> -->

<script setup lang="ts">
  import * as all from '@/components/CssVar';
  const comps = all
</script>

<style></style>
