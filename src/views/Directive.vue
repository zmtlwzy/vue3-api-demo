<template>
  <div>
    <input type="range" min="0" :max="maxWidth" v-model="pinPadding" />
    <p v-pin:[direction].a.b="pinPadding" ref="textEl"> some text </p>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, ref } from 'vue';
  export default defineComponent({
    name: 'DirectiveTemplate',
    setup() {
      const pinPadding = ref<number>(210);
      const textEl = ref<HTMLElement>();
      const direction = ref<string>('left')  
      const maxWidth = computed(() => {
        const w = textEl.value?.offsetWidth ?? 0;
        return window.innerWidth - w;
      });

      return {
        pinPadding,
        direction,
        maxWidth,
        textEl,
      };
    },
  });
</script>
