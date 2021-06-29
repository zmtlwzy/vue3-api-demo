<template>
  <n-card :title="$options.name">
    <n-space vertical align="center">
      <span class="m-2">{{ arr }}</span>
      <n-grid x-gap="8" y-gap="8" :cols="2">
        <n-button type="primary" @click="changeArrIndex">changeArrIndex</n-button>
        <n-button type="primary" @click="replaceArr">replaceArr</n-button>
        <n-button type="primary" @click="changeArrUseSplice">changeArrUseSplice</n-button>
        <n-button type="primary" @click="changeArrUseSort">changeArrUseSort</n-button>
      </n-grid>
    </n-space>
  </n-card>
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
