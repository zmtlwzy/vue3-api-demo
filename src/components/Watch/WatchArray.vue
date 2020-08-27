<template>
  <div class="column-layout">
    <h2>WatchArray</h2>
    <ul>
      <li v-for="i in arr" :key="i">{{ i }}</li>
    </ul>
    <div
      :style="{ display: 'inline-grid', gridAutoRows: '30px', gridGap: '5px' }"
    >
      <button @click="change">changeArrIndex</button>
      <button @click="add">Increase</button>
      <button @click="del">Decrease</button>
      <button @click="change2">changeArr</button>
    </div>
  </div>
</template>

<script>
// 只能监听 数组,Set 长度的变化，如length,size,push,pop,add,delete,splice等,
// 更改成员某个值属性时无法触发watch，需要整个重新赋值
// ，或者使用变通方法Object.values

export default {
  name: "WatchArray",
  data() {
    return {
      count: 0,
      arr: [1, 2, 3],
    };
  },
  methods: {
    change() {
      this.arr[0] = ++this.count;
    },
    add() {
      this.arr.splice(0, 0, ++this.count);
    },
    del() {
      this.arr.splice(0, 1);
    },
    change2() {
      const _arr = [...this.arr];
      _arr[0] = ++this.count;
      this.arr = _arr;
    },
  },
  updated() {
    console.log("updated");
  },
  watch: {
    arr(val, oval) {
      console.log("watch", val, oval);
    },
    len(val) {
      console.log("len:", this.len);
    },
  },
  computed: {
    len() {
      return this.arr.length;
    },
  },
};
</script>
