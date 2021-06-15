<template>
  <div class="column-layout">
    <h2>Flush</h2>
    <span>{{ count }}</span>
    <span>{{ other }}</span>
    <br />
    <button class="btn" @click="add">add</button>
    <button class="btn" @click="sub">sub</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "watchFlush",
  data() {
    return {
      count: 1,
      other: 2
    };
  },
  watch: {
    count: {
      handler(val) {
        this.other = val * 2;
        debugger
      },
      flush: "post",
      // post: 默认值 dom更新后运行
      // sync: 同步运行
      // pre : 提前运行
    },
  },
  methods: {
    add() {
      this.count++;
    },
    sub() {
      this.count--;
    },
  },
});
</script>
