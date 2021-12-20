<template>
  <n-card :title="$options.name">
    <n-space vertical align="center">
      <des-table :var-obj="{ count, count2 }" />
      <n-space>
        <n-button type="primary" @click="add">add</n-button>
        <n-button type="primary" @click="sub">sub</n-button>
      </n-space>
    </n-space>
  </n-card>
</template>

<script lang="ts">
import { useMessage } from 'naive-ui';
export default defineComponent({
  name: 'WatchOptionsImmediate',
  setup() {
    const message = useMessage();
    const state = reactive({
      count: 1
    });

    const count2 = ref(1);

    const add = () => {
      state.count++;
      count2.value++;
    };

    const sub = () => {
      state.count--;
      count2.value--;
    };

    watch(
      () => state.count,
      (val, oldVal) => {
        message.success(`Immediate:true ==> count:${val}---old:${oldVal}`);
      },
      {
        immediate: true //组件首次加载或刷新时触发，与watchEffect相同
      }
    );

    watch(
      () => count2.value,
      (val, oldVal) => {
        message.warning(`Immediate:false ==> count:${val}---old:${oldVal}`);
      },
      {
        immediate: false
      }
    );

    return {
      ...toRefs(state),
      count2,
      add,
      sub
    };
  }
});
</script>
