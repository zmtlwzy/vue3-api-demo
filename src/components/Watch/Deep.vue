<template>
  <div class="column-layout">
    <h2>Deep</h2>
    <span class="m-2">{{ arr }}</span>
    <div :style="{ display: 'inline-grid', gridAutoRows: '30px', gridGap: '5px' }">
      <button class="btn" @click="changeArrIndex">changeArrIndex</button>
      <button class="btn" @click="replaceArr">replaceArr</button>
      <button class="btn" @click="changeArrUseSplice">changeArrUseSplice</button>
      <button class="btn" @click="changeArrUseSort">changeArrUseSort</button>
    </div>
  </div>
</template>

<script>
  import { ref, reactive, watch, defineComponent, toRefs } from 'vue';

  export default defineComponent({
    name: 'watchOptionsDeep',
    data() {
      return {
        count: 0,
        arr: [1, 2, 3],
      };
    },
    watch: {
      arr: {
        handler(val) {
          console.log(val, 'use deep');
        },
        deep: true,
      },
    },
    methods: {
      changeArrIndex() {
        this.arr[0] = ++this.count;
      },
      replaceArr() {
        const _arr = [...this.arr];
        _arr[0] = ++this.count;
        this.arr = _arr;
      },
      changeArrUseSplice() {
        this.arr.splice(1, 1, ++this.count);
      },
      changeArrUseSort() {
        this.arr.sort((a, b) => {
          return Math.random() - 0.5;
        });
      },
    },
  });
</script>
