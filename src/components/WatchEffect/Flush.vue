<template>
  <div class="column-layout">
    <h3>Flush</h3>
    <span>{{ count }}</span>
    <span>{{ other }}</span>
    <br />
    <button @click="add">add</button>
    <button @click="sub">sub</button>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs, watchEffect } from "vue";
export default defineComponent({
  name: "watchFlushFlush",
  setup() {
    const state = reactive({
      count: 1,
      other: 2,
    });
    const add = () => {
      state.count++;
    };
    const sub = () => {
      state.count--;
    };
    watchEffect(
      () => {
        state.other = state.count * 2;
        console.log(state)
        debugger
      },
      {
        flush: "pre",
        // post: 默认值 dom更新后运行
        // sync: 同步运行
        // pre : 提前运行
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
