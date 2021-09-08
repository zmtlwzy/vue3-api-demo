<template>
  <n-card :title="$options.name">
    <n-space vertical align="center">
      <p>open console</p>
      <des-table :varObj="{ count, count2, other }" ref="el"></des-table>
      <br />
      <n-button type="primary" @click="add">add</n-button>

      <n-radio-group class="mt-5" v-model:value="mode" name="watchEffectFlush">
        <n-radio-button v-for="item in modeOpt" :key="item.value" :value="item.value">
          {{ item.label }}
        </n-radio-button>
      </n-radio-group>
    </n-space>
  </n-card>
</template>

<script lang="ts">
  import {
    defineComponent,
    reactive,
    toRefs,
    watch,
    watchEffect,
    WatchStopHandle,
    ref,
    WatchOptionsBase,
    ComponentPublicInstance,
  } from 'vue';

  export default defineComponent({
    name: 'watchFlushFlush',
    setup() {
      const el = ref<ComponentPublicInstance>();
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
      const state = reactive({
        count: 1,
        other: 2,
      });
      const count2 = ref(3);
      const add = () => {
        state.count++;
        count2.value++;
      };

      watch(
        mode,
        (val) => {
          stop?.();
          stop = watchEffect(watchFun, { flush: val });
        },
        { immediate: true }
      );

      function watchFun() {
        state.other = state.count * 2 + count2.value;
        const domValue =
          el.value?.$el.firstElementChild.lastElementChild.firstElementChild.innerText * 1;
        console.log(`domValue:${domValue}  state.count:${state.count}`);
      }

      return {
        ...toRefs(state),
        count2,
        el,
        mode,
        modeOpt,
        add,
      };
    },
  });
</script>
