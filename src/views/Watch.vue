<template>
  <n-card>
    <div class="grid-layout">
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
  </n-card>
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
