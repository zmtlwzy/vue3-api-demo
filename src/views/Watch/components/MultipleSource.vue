<template>
  <n-card :title="$options.name">
    <n-space justify="space-around">
      <n-space vertical align="center">
        <des-table :var-obj="{ count, count2 }" />
        <n-button type="primary" @click="add">add</n-button>
      </n-space>
      <n-radio-group v-model:value="mode" name="radiogroup">
        <n-space vertical>
          <n-radio v-for="item in modeOpt" :key="item.value" :value="item.value">
            {{ item.label }}
          </n-radio>
        </n-space>
      </n-radio-group>
    </n-space>
  </n-card>
</template>

<script lang="ts">
  import type { WatchOptionsBase, WatchStopHandle } from 'vue';

  export default defineComponent({
    name: 'MultipleSource',
    setup() {
      const count = ref(0);
      const count2 = ref(110);
      const mode = ref<WatchOptionsBase['flush']>('post');

      let stop: WatchStopHandle;

      const modeOpt = [
        {
          label: 'post',
          value: 'post',
        },
        {
          label: 'pre',
          value: 'pre',
        },
        {
          label: 'sync',
          value: 'sync',
        },
      ];

      const add = () => {
        count.value++;
        count2.value++;
      };

      watchEffect(() => {
        stop?.();
        stop = watch(
          [count, count2],
          ([val, val2], [preVal, preVal2]) => {
            // sync mode will run 2 times
            console.log(`val:${val} -- preVal:${preVal}`);
            console.log(`val2:${val2} -- preVal2:${preVal2}`);
          },
          { flush: mode.value },
        );
      });

      return {
        count,
        count2,
        mode,
        modeOpt,
        add,
      };
    },
  });
</script>
