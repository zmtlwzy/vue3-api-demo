<template>
  <n-card :title="$options.name">
    <n-space vertical align="center">
      <des-table :varObj="{ count, other }"></des-table>
      <n-button type="primary" @click="add">add</n-button>
    </n-space>
  </n-card>
</template>

<script>
  import { ref, watch, defineComponent, toRefs } from 'vue';
  export default defineComponent({
    name: 'SingleSourceWithRef',
    setup() {
      const count = ref(0);
      const other = ref(100);
      const add = () => {
        count.value++;
      };
      const sub = () => {
        count.value--;
      };

      watch(count, (count, prevCount) => {
        console.log(`count:${count} -- pre:${prevCount}`);
      });
      watch(other, (count, prevCount) => {
        console.log(`other:${count} -- pre:${prevCount}`);
      });

      return {
        count,
        other,
        add,
        sub,
      };
    },
  });
</script>
