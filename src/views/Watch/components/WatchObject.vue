<template>
  <n-card :title="$options.name">
    <n-space vertical align="center">
      <des-table :varObj="{ count:state.count, key:state.key }"></des-table>
      <des-table :varObj="{ num, str }"></des-table>
      <n-button type="primary" @click="add">add</n-button>
    </n-space>
  </n-card>
</template>

<script>
  import { reactive, watchEffect, toRefs, ref, watch } from 'vue';
  // 需要对象的某个值改变时就触发watch,可以整个重新赋值，或者使用变通方法Object.values
  // 还有vue3 新api deep:true

  export default {
    name: 'WatchObject',
    setup() {
      const state = ref({
        count: 0,
        key: 'num',
      });
      const watchObj = reactive({
        num: 100,
        str: 'age',
      });
      const add = () => {
        watchObj.num++;
        state.value.count++;
      };
      const sub = () => {
        watchObj.num--;
        state.value.count--;
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
      watch(
        state,
        (val) => {
          console.log('watch ref use depp', val);
        },
        { deep: true }
      );

      watch(
        watchObj,
        (val) => {
          console.log('watch use depp', val);
        },
        { deep: true }
      );
      return {
        state,
        ...toRefs(watchObj),
        add,
        sub,
      };
    },
  };
</script>
