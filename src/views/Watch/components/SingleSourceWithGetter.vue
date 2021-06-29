<template>
  <div class="column-layout">
    <n-h4>single-getter</n-h4>
    <des-table :varObj="{ count, other }"></des-table>
    <br />
    <n-button type="primary" @click="add">add</n-button>
  </div>
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
