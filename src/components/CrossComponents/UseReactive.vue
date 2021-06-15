<template>
  <div class="column-layout">
    <span>{{ num }}--{{ num2 }}--{{ num3 }}</span>
    <button class="btn" @click="add">++</button>
  </div>
</template>

<script>
import { sharedState } from "../Common";
import { toRefs } from "vue";
export default {
  setup() {
    const add = () => {
      sharedState.num3 += 3;
    };
    return {
      ...toRefs(sharedState),
      add,
    };
  },
};
</script>

<style></style>
