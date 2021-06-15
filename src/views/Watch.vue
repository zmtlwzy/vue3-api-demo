<template>
  <div class="grid container">
    <SingleSourceWithGetter />
    <SingleSourceWithRef />
    <MultipleSource />
    <Flush />
    <Deep />
    <Immediate />
    <WatchArray />
    <WatchObject />
    <span>open console</span>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';

  import {
    SingleSourceWithGetter,
    SingleSourceWithRef,
    MultipleSource,
    Flush,
    Deep,
    Immediate,
    WatchArray,
    WatchObject,
  } from '../components/Watch';

  export default defineComponent({
    name: 'watch',
    components: {
      SingleSourceWithGetter,
      SingleSourceWithRef,
      MultipleSource,
      Flush,
      Deep,
      Immediate,
      WatchArray,
      WatchObject,
    },
  });
</script>

<style lang="less"></style>
