<template>
  <n-card :title="$options.name">
    <n-space vertical align="center">
      <des-table :var-obj="{ count, count2 }"></des-table>
      <n-button type="primary" @click="add">add</n-button>
    </n-space>
  </n-card>
</template>

<script>
  import { ref, watch, defineComponent } from 'vue';
  export default defineComponent({
    name: 'MultipleSource',
    setup() {
      const count = ref(0);
      const count2 = ref(110);
      const add = () => {
        count.value++;
      };
      const sub = () => {
        count2.value--;
      };

      watch([count, count2], ([val, val2], [preVal, preVal2]) => {
        console.log(`val:${val} -- preVal:${preVal}`);
        console.log(`val2:${val2} -- preVal2:${preVal2}`);
      });
      return {
        count,
        count2,
        add,
        sub,
      };
    },
  });
</script>
