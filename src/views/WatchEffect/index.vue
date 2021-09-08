<template>
  <GridLayout>
    <FetchDemo />
    <WatchEffectFlush />
  </GridLayout>
</template>

<script lang="ts">
  import { FetchDemo, Flush as WatchEffectFlush } from './components';
  import { defineComponent, ref, WatchOptionsBase } from 'vue';
  export default defineComponent({
    name: 'watchEffect',
    components: {
      FetchDemo,
      WatchEffectFlush,
    },
    setup() {
      const keyId = ref<number>(0);
      const saveMode = ref<string>();
      const handleChange = (str: WatchOptionsBase['flush']) => {
        keyId.value++;
        saveMode.value = str;
      };
      return {
        keyId,
        saveMode,
        handleChange,
      };
    },
  });
</script>

<style></style>
