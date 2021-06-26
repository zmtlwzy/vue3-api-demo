<template>
  <div class="column-layout">
    <n-h4>Flush</n-h4>
    <span>{{ count }}</span>
    <span>{{ other }}</span>
    <br />
   <n-button type="primary" @click="add">add</n-button>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'watchFlush',
    data() {
      return {
        count: 1,
        other: 2,
      };
    },
    watch: {
      count: {
        handler(val) {
          this.other = val * 2;
          debugger;
        },
        flush: 'post',
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
