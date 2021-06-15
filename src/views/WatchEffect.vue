<template>
  <div class="grid container">
    <FetchDemo />
    <Flush />
  </div>
</template>

<script>
  import { FetchDemo, Flush } from '@/components/WatchEffect';
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'watchEffect',
    components: {
      FetchDemo,
      Flush,
    },
  });
</script>

<style></style>
