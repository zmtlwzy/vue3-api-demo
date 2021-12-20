<template>
  <my-foo />
</template>

<script lang="ts">
import Foo from '@/webComponents/foo.ce.vue';

export default defineComponent({
  name: 'CustomElement',
  setup() {
    console.log(Foo.styles);
  }
});
</script>
