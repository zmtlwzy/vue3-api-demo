<template>
  <n-card :title="$options.name">
    <n-space vertical align="center">
      <n-descriptions label-placement="top" bordered :column="2">
        <n-descriptions-item label="shallowRef">
          <des-table :var-obj="{ count }"></des-table>
        </n-descriptions-item>
        <n-descriptions-item label="ref">
          <des-table :var-obj="{ count2 }"></des-table>
        </n-descriptions-item>
      </n-descriptions>
      <n-button type="primary" @click="handle">add</n-button>
    </n-space>
  </n-card>
</template>

<script lang="ts">
  import { defineComponent, shallowRef, ref, watch } from 'vue';

  export default defineComponent({
    name: 'ShallowRef',
    setup() {
      const count = shallowRef({
        x: 0,
        y: 0,
      });

      const count2 = ref({
        a: 0,
        b: 0,
      });

      watch(
        () => count,
        (val) => {
          console.log(val, 'count');
        },
        { deep: true }
      );

      watch(
        () => count2,
        (val) => {
          console.log(val, 'count2');
        },
        { deep: true }
      );

      const handle = () => {
        count.value.x++;
        count2.value.a++;
      };


      return {
        handle,
        count,
        count2,
      };
    },
  });
</script>
