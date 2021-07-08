<template>
  <n-card>
    <n-space vertical align="center">
      <n-descriptions bordered :cols="2">
        <n-descriptions-item label="count">
          {{ count }}
        </n-descriptions-item>
        <n-descriptions-item label="state">
          {{ state }}
        </n-descriptions-item>
      </n-descriptions>
      <n-space>
        <n-button type="primary" @click="add">+</n-button>
        <n-button type="primary" @click="sub">-</n-button>
      </n-space>
    </n-space>
  </n-card>
</template>

<script lang="ts">
  import { defineComponent, reactive, ref, unref, watch } from 'vue';
  export default defineComponent({
    name:'Reactive',
    setup() {
      const count = ref(99);
      const state = reactive({
        a: 0,
        b: 0,
        c: count,
      });
      const add = () => {
        state.a++;
        state.b += 2;
        count.value++;
      };
      const sub = () => {
        state.a--;
        state.b--;
        state.c--;
      };
      watch(count, (val) => {
        if (val >= 100 && val <= 122) {
          state[String.fromCharCode(unref(count))] = count;
        }
      });
      return {
        add,
        sub,
        count,
        state,
      };
    },
  });
</script>

<style></style>
