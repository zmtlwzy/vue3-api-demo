<template>
  <n-card>
    <n-space vertical align="center">
      <p>count: {x:{{ count.x }} , y:{{ count.y }}}</p>
     <n-button type="primary" @click="add">+</n-button>
    </n-space>
  </n-card>
</template>

<script>
  import { reactive } from 'vue';
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
