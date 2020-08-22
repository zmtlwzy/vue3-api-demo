<template>
  <div class="column-layout">
    <p>count: {x:{{ x }} , y:{{ y }}}</p>
    <p>other: {a:{{ a }} , b:{{ b }}}</p>
    <button @click="handle">click</button>
  </div>
</template>

<script>
import { reactive, toRefs, toRef } from "vue";

export default {
  setup() {

    const count = reactive({
      x: 0,
      y: 0,
    });

    const other = reactive({
      a: 100,
      b: 100,
    });

    const handle = () => {
      count.x++;
      count.y += 2;
      other.a --;
      other.b -= 2;
    };

    return {
      ...toRefs(count),
      a: toRef(other, "a"),
      b: toRef(other, "b"),
      handle,
    };
  },
};
</script>

<style></style>
