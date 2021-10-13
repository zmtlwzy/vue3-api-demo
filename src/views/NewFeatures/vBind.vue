<template>
  <div v-bind:someDomProperty.prop="value">vbind prop</div>
  <div .someDomProperty="value" ref="el">vbind prop dedicated shorthand</div>
  <div :someDomAttrs="value">vbind attr (default)</div>
</template>

<script lang="ts">
  import { MaybeElementRef } from '@vueuse/core'
  export default defineComponent({
    name: 'v-bind',
    setup() {
      const el = ref<MaybeElementRef>(null);
      onMounted(() => {
        console.log(el.value);
      });
      return {
        value: ref(1),
        el,
      };
    },
  });
</script>
