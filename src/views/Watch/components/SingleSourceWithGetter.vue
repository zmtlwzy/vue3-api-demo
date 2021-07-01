<template>
  <n-card :title="$options.name">
    <n-space vertical align="center">
      <des-table :varObj="{ count, other }"></des-table>
      <n-button type="primary" @click="add">add</n-button>
    </n-space>
  </n-card>
</template>

<script>
  import { ref, reactive, watch, defineComponent, toRefs } from 'vue';

  export default defineComponent({
    name: 'SingleSourceWithGetter',
    setup() {
      const state = reactive({ count: 0, other: 100 });
      const add = () => {
        state.count++;
      };
      const sub = () => {
        state.count--;
        state.other--;
      };

      watch(
        () => state.count,
        (count, prevCount) => {
          console.log(`val:${count} -- preVal:${prevCount}`);
        }
      );
      watch(
        () => state.other,
        (count, prevCount) => {
          console.log(`val:${count} -- preVal:${prevCount}`);
        }
      );
      return {
        ...toRefs(state),
        add,
        sub,
      };
    },
  });
</script>
