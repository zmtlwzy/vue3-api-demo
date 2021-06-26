<template>
  <n-card>
    <n-space vertical align="center">
      <des-table :varObj="{ count, com1, com2, com3 }"></des-table>

      <br />
      <n-space>
        <n-button type="primary" @click="add">++</n-button>
        <n-button type="primary" @click="sub">--</n-button>
        <n-button type="primary" @click="set">reset</n-button>
      </n-space>
    </n-space>
  </n-card>
</template>

<script lang="ts">
  import { defineComponent, toRefs, reactive, computed } from 'vue';
  export default defineComponent({
    name: 'computed',
    setup() {
      const state = reactive({
        count: 0,
        com1: computed((): number => state.count + 1),
      });
      const com2 = computed(() => state.com1 + 1);
      const com3 = computed({
        get: () => com2.value + 1,
        set: (val) => {
          state.count = val;
        },
      });
      const add = () => {
        state.count++;
      };
      const sub = () => {
        state.count--;
      };
      const set = () => {
        com3.value = 0;
      };

      return {
        ...toRefs(state),
        com2,
        com3,
        add,
        sub,
        set,
      };
    },
  });
</script>

<style lang="less">
  .label {
    display: inline-block;
    width: 110px;
  }
</style>
