<template>
  <div class="column-layout">
    <h2>Flush</h2>
    <span>{{ count }}</span>
    <span>{{ other }}</span>
    <br />
    <button @click="add">add</button>
    <button @click="sub">sub</button>
  </div>
</template>

<script>
import { ref, reactive, watch, defineComponent, toRefs } from "vue";
export default defineComponent({
  name: "watchFlush",
  data() {
    return {
      count: 1,
      other: 2,
    };
  },
  watch: {
    count: {
      handler(val) {
        console.log(this.$el);
        this.other = val * 2;
        debugger
      },
      flush: "sync",
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
