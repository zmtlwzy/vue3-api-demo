<template>
  <div class="column-layout">
    <n-h4>Flush</n-h4>
    <p>open console</p>
    <des-table :varObj="{ count, other }" ref="el"></des-table>
    <br />
    <n-button type="primary" @click="add">add</n-button>
    <n-button-group class="mt-5">
      <n-button
        v-for="item in ['pre', 'post', 'sync']"
        :type="flushState === `${item}` ? 'primary' : 'default'"
        @click="changeFlush(`${item}`)"
      >
        {{ item }}
      </n-button>
    </n-button-group>
  </div>
</template>

<script lang="ts">
  import {
    defineComponent,
    reactive,
    toRefs,
    watch,
    watchEffect,
    WatchOptionsBase,
    ref,
    ComponentPublicInstance,
    computed,
    // toRef,
    // Ref
  } from 'vue';
  export default defineComponent({
    name: 'watchFlushFlush',
    props: ['mode'],
    emits: ['change'],
    setup(props, { emit }) {
      const el = ref<ComponentPublicInstance>();
      const flushState = ref<WatchOptionsBase['flush']>(props.mode ?? 'post');
      // const flushState:Ref<WatchOptionsBase['flush']> = toRef(props,'mode');
      // pre : 默认值 dom更新前运行
      // post: dom更新后运行
      // sync: 同步运行(这将强制效果始终同步触发。然而，这是低效的，应该很少需要)
      const state = reactive({
        count: 1,
        other: 2,
      });
      const add = () => {
        state.count++;
      };
      const sub = () => {
        state.count--;
      };

      const changeFlush = (str: string) => {
        flushState.value = str as WatchOptionsBase['flush'];
      };

      const optsBase = computed(() => ({ flush: flushState.value }));

      watch(
        () => flushState.value,
        () => {
          emit('change', flushState);
        }
      );

      const watchFun = () => {
        state.other = state.count * 2;
        const domValue =
          el.value?.$el.firstElementChild.lastElementChild.firstElementChild.innerText * 1;
        if (domValue === state.count && state.count !== 1) {
          debugger;
        }
      };

      watchEffect(watchFun, optsBase.value);

      return {
        ...toRefs(state),
        el,
        flushState,
        changeFlush,
        add,
        sub,
      };
    },
  });
</script>
