<template>
  <n-card>
    <n-space vertical align="center">
      <n-button @click="show = !show">{{ show ? 'hide' : 'show' }}</n-button>
      <des-table v-if="show" :varObj="{ count, com1, com2, com3 }"></des-table>

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
  import { eagerComputed } from '@vueuse/core';

  export default defineComponent({
    name: 'computed',
    setup() {
      const state = reactive({
        count: 0,
        com1: computed((): number => state.count + 1),
      });

      const bool = computed(() => fun(), {
        onTrack(e) {
          console.log('track', e.target);
        },
        onTrigger(e) {
          console.log('trigger', e);
        },
      });

      const eager_bool = eagerComputed(() => fun());

      const com2 = computed({
        get: () => {
          console.log('com2 run');
          return bool.value ? state.count * 2 : -1;
        },
        set: (val) => {
          state.count = val;
        },
      });

      const com3 = computed(() => {
        console.log('com3 run');
        return eager_bool.value ? state.count * 2 : -1;
      });

      const add = () => {
        state.count++;
      };
      const sub = () => {
        state.count--;
      };
      const set = () => {
        com2.value = 0;
      };

      function fun() {
        return state.count < 5;
      }

      return {
        ...toRefs(state),
        com2,
        com3,
        show: ref(false),
        add,
        sub,
        set,
      };
    },
  });
</script>

