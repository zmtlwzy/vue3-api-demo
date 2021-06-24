<template>
  <n-space vertical>
    <n-slider v-model:value="pinPadding" :min="min" :max="max" :step="1"/>
    <!-- <input type="range" min="min" :max="max" v-model="pinPadding" /> -->
    <p v-pin:[direction].a.b="pinPadding" ref="textEl"> some text </p>
  </n-space>
</template>

<script lang="ts">
  import { computed, defineComponent, ref } from 'vue';
  import { useAppStore } from '@/store/modules/app';

  export default defineComponent({
    name: 'DirectiveTemplate',
    setup() {
      const appStore = useAppStore()
      const pinPadding = ref<number>(210);
      const textEl = ref<HTMLElement>();
      const direction = ref<string>('left')  
      const max = computed(() => {
        const w = textEl.value?.offsetWidth ?? 0;
        return window.innerWidth - w;
      });

      return {
        pinPadding,
        direction,
        max,
        textEl,
        min:appStore.getSiderWidth
      };
    },
  });
</script>
