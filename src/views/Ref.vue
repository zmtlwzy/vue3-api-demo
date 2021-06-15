<template>
  <div class="column-layout">
    <p>count(use ref):{{ count }}</p>
    <button @click="add" class="btn">+</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Ref",
  setup() {
    const count = ref(0);
    const add = () => {
      count.value++;
    };
    return {
      count,
      add,
    };
  },
};
</script>
