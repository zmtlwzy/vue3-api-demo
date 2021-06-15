<template>
  <div class="column-layout">
    <h2>single-getter</h2>
    <span>{{ count }}</span>
    <span>{{ other }}</span>
    <br />
    <button class="btn" @click="add">add</button>
    <button class="btn" @click="sub">sub</button>
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
