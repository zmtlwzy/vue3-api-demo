<template>
  <div class="column-layout">
    <n-h4>Immediate</n-h4>
    <span>{{ count }}</span>
    <span>{{ other }}</span>
    <br />
    <n-button type="primary" @click="add">add</n-button>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, toRefs, watch } from 'vue';
  import { useMessage } from 'naive-ui';
  export default defineComponent({
    name: 'watchOptionsImmediate',
    setup() {
      const message = useMessage();
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

      watch(
        () => state.count,
        (val) => {
          state.other = val * 2;
          message.info(`watchOptionsImmediate: ${state.count} -- ${state.other}`);
        },
        {
          immediate: true,
        }
      );

      return {
        ...toRefs(state),
        add,
        sub,
      };
    },
  });
</script>
