<template>
  <n-card :title="$options.name">
    <n-space justify="space-around">
      <n-space vertical align="center">
        <div ref="el">{{ count }}</div>
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
    name: 'watchFlush',
    setup() {
      const count = ref(1);
      const el = ref<HTMLElement>();
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
      };

      watchEffect(() => {
        stop?.();
        stop = watch(
          count,
          (val) => {
            // sync mode will run 2 times
            console.log(`val:${val}--dom:${el.value?.innerText}`);
          },
          {
            flush: mode.value,
          }
        );
      });

      return {
        count,
        mode,
        el,
        modeOpt,
        add,
      };
    },
  });
</script>
