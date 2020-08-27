<template>
  <div class="column-layout">
    <h2>WatchObject</h2>
    <span>{{ count }}</span>
    <span>{{ name }}</span>
    -------------------------
    <span>{{ num }}</span>
    <span>{{ str }}</span>
    <button @click="add">add</button>
    <button @click="sub">sub</button>
  </div>
</template>

<script>
import { reactive, watchEffect, toRefs, ref, watch } from "vue";
// 需要对象的某个值改变时就触发watch,最好整个重新赋值，或者使用变通方法Object.values

export default {
  name: "WatchObject",
  setup() {
    const state = reactive({
      count: 0,
      name: "name",
    });
    const watchObj = reactive({
      num: 100,
      str: "age",
    });
    const add = () => {
      watchObj.num++;
    };
    const sub = () => {
      watchObj.num--;
    };
    watchEffect(() => {
      console.log(Object.values(watchObj));
      console.log(watchObj);
    });
    watch(
      () => Object.entries(watchObj),
      (val, oldVal) => {
        console.log(val, oldVal);
      }
    );
    return {
      ...toRefs(state),
      ...toRefs(watchObj),
      add,
      sub,
    };
  },
};
</script>
