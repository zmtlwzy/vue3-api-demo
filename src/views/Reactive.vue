<template>
  <div class="column-layout">
    <p>count: {x:{{ count.x }} , y:{{ count.y }}}</p>
    <button class="btn" @click="add">+</button>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const count = reactive({
      x: 0,
      y: 0,
    });
    const add = () => {
      count.x++;
      count.y += 2;
    };
    return {
      add,
      count,
    };
  },
};
</script>

<style></style>
