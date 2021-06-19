<template>
  <div class="column-layout">
    <span><span class="label">count:</span> {{ count }}</span>
    <span><span class="label">computed1:</span> {{ com }}</span>
    <span><span class="label">computed2:</span> {{ com2 }}</span>
    <span><span class="label">computed3:</span> {{ com3 }}</span>
    <br />
    <button class="btn" @click="add">++</button>
    <button class="btn" @click="sub">--</button>
    <button class="btn" @click="set">reset</button>
  </div>
</template>

<script lang="ts">
  import { defineComponent, toRefs, reactive, computed } from 'vue';
  export default defineComponent({
    name: 'computed',
    setup() {
      const state = reactive({
        count: 0,
        com: computed(():number => state.count + 1),
      });
      const com2 = computed(() => state.com + 1);
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
