<template>
  <div class="column-layout">
    <h2>WatchArray</h2>
    <span class="ma">{{ arr }}</span>
    <div
      :style="{ display: 'inline-grid', gridAutoRows: '30px', gridGap: '5px' }"
    >
      <button class="btn" @click="add">Increase</button>
      <button class="btn" @click="del">Decrease</button>
      <button class="btn" @click="change">changeArrIndex</button>
      <button class="btn" @click="change2">replaceArr</button>
      <button class="btn" @click="change3">changeArrUseSplice</button>
    </div>
  </div>
</template>

<script>
// 只能监听 数组,Set 长度的变化，如length,size,push,pop,add,delete,splice等,
// vue3 新api deep:true
// 或者使用变通方法Object.values
import { computed, onUpdated, reactive, toRefs, watchEffect, watch } from "vue";

export default {
  name: "WatchArray",
  setup() {
    const state = reactive({
      count: 0,
      arr: [1, 2, 3],
    });
    const add = () => {
      state.arr.splice(0, 0, ++state.count);
    };
    const del = () => {
      let a = [...state.arr];
      a.pop();
      state.arr = a;
    };
    const change = () => {
      state.arr[0] = ++state.count;
    };
    const change2 = () => {
      const _arr = [...state.arr];
      _arr[0] = ++state.count;
      state.arr = _arr;
    };
    const change3 = () => {
      state.arr.splice(1, 1, ++state.count);
    };
    const len = computed(() => {
      return state.arr.length;
    });

    onUpdated(() => {
      console.log("updated");
    });

    watchEffect(() => {
      console.log(state.arr);
    });

    watch(
      () => state.arr,
      (val) => {
        console.log(`watch arr:${val}`);
      }
    );

    watch(
      () => Object.values(state.arr),
      (val) => {
        console.log(`Object.values watch arr:${val}`);
      }
    );

    watch(
      () => state.arr,
      (val) => {
        console.log(`deep watch arr:${val}`);
      },
      {
        deep: true,
      }
    );
    
    watch(len, (val) => {
      console.log(`watch len:${val}`);
    });

    return {
      ...toRefs(state),
      len,
      add,
      del,
      change,
      change2,
      change3,
    };
  },
};
</script>
