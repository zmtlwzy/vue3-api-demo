<template>
  <n-card :title="$options.name">
    <n-space vertical align="center">
      <span class="m-2">{{ arr }}</span>
      <div grid="~ cols-2 gap-4">
        <n-button type="primary" @click="changeArrIndex">changeArrIndex</n-button>
        <n-button type="primary" @click="replaceArr">replaceArr</n-button>
        <n-button type="primary" @click="changeArrUseSplice">changeArrUseSplice</n-button>
        <n-button type="primary" @click="changeArrUseSort">changeArrUseSort</n-button>
      </div>
    </n-space>
  </n-card>
</template>

<script>
export default defineComponent({
  name: 'WatchOptionsDeep',
  data() {
    return {
      count: 0,
      arr: [1, 2, 3]
    };
  },
  watch: {
    arr: {
      handler(val) {
        console.log(val, 'use deep');
      },
      deep: true
    }
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
    }
  }
});
</script>
