<template>
  <div class="test">
    <h1>test count: {{ count }}</h1>
    <ul>
      <li v-for="i in arr2" :key="i" :style="{ listStyle: 'none' }">{{ i }}</li>
    </ul>
    <button @click="add">add</button>
    <button @click="Increase">Increase size</button>
    <button @click="Decrease">Decrease size</button>
  </div>
</template>

<script>
import { ref, reactive, watchEffect, onUpdated, onMounted } from "vue";

export default {
  name: "WatchEffect2",
  setup() {
    const count = ref(0);
    const arr = reactive([1, 2, 3]);
    const arr2 = ref([1, 2, 3]);
    const set = reactive(new Set([1, 2, 3]));
    const add = () => {
      count.value++;
    };
    const Increase = () => {
      arr2.value = arr2.value.map((item, index) => {
        return item * 2;
      });
      set.add(++count.value);
    };

    const Decrease = () => {
      arr2.value = arr2.value.map((item, index) => {
        return item / 2;
      });
      set.delete(count.value--);
    };

    watchEffect(() => {
      // 只能监听 数组,Set 长度的变化，如length,size ,push,pop ,add,delete等,更改成员某个值属性时无法触发，需要整个重新赋值
      set.size;
      console.log(set);
    });

    return {
      count,
      add,
      arr,
      arr2,
      set,
      Increase,
      Decrease,
    };
  },
};
</script>
