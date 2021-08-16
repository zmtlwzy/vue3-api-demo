<template>
  <my-foo />
</template>

<script>
  import { defineComponent } from 'vue';
  import Foo from '@/webComponents/foo.ce.vue';

  export default defineComponent({
    name: 'customElement',
    setup() {
      console.log(Foo.styles);
    },
  });
</script>
