<template>
  <div v-bind:someDomProperty.prop="value">vbind prop</div>
  <div .someDomProperty="value" ref="el">vbind prop dedicated shorthand</div>
  <div :someDomAttrs="value">vbind attr (default)</div>
</template>

<script>
  import { defineComponent, onMounted, ref } from 'vue';
  export default defineComponent({
    name: 'v-bind',
    setup(props) {
      const el = ref(null);
      onMounted(() => {
        console.log(el.value?.someDomProperty);
      });
      return {
        value: ref(1),
        el,
      };
    },
  });
</script>
