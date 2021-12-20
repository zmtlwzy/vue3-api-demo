<template>
  <div class="grid-layout-2">
    <FetchDemo />
    <WatchEffectFlush />
  </div>
</template>

<script lang="ts">
import { FetchDemo, Flush as WatchEffectFlush } from './components';
import type { WatchOptionsBase } from 'vue';
export default defineComponent({
  name: 'WatchEffect',
  components: {
    FetchDemo,
    WatchEffectFlush
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
      handleChange
    };
  }
});
</script>

<style></style>
