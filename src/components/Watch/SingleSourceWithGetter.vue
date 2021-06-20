<template>
  <div class="column-layout">
    <h2>single-getter</h2>
    <DesTable :varObj="{ count, other }"></DesTable>
    <br />
   <n-button type="primary" @click="add">add</n-button>
  </div>
</template>

<script>
  import { ref, reactive, watch, defineComponent, toRefs } from 'vue';
  import DesTable from '@/components/VarDescriptions';

  export default defineComponent({
    name: 'SingleSourceWithGetter',
    components: { DesTable },

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
