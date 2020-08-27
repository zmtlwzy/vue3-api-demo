<template>
  <div class="grid container">
    <SingleSourceWithGetter />
    <SingleSourceWithRef />
    <MultipleSource />
    <Flush />
    <WatchArray />
    <WatchObject />
    <span>open console</span>
  </div>
</template>

<script>
import { ref, watch, defineComponent } from "vue";

import {
  SingleSourceWithGetter,
  SingleSourceWithRef,
  MultipleSource,
  Flush,
  WatchArray,
  WatchObject,
} from "../components/Watch";

export default defineComponent({
  name: "watch",
  components: {
    SingleSourceWithGetter,
    SingleSourceWithRef,
    MultipleSource,
    Flush,
    WatchArray,
    WatchObject,
  },
});
</script>

<style lang="scss">
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  > span {
    grid-column: 1 / span 2;
  }
}
</style>
