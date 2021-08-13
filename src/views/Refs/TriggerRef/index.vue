<template>
  <n-card :title="$options.name">
    <n-space vertical align="center">
      <n-descriptions label-placement="top" bordered :column="2">
        <n-descriptions-item label="shallowRef">
          <des-table :var-obj="{ count }"></des-table>
        </n-descriptions-item>
      </n-descriptions>
      <n-space>
        <n-button @click="handle">add</n-button>
        <n-button @click="TriggerRef" type="primary" >TriggerRef</n-button>
      </n-space>
    </n-space>
  </n-card>
</template>

<script lang="ts">
  import { defineComponent, onMounted, shallowRef, triggerRef, watch } from 'vue';

  export default defineComponent({
    name: 'TriggerRef',
    setup() {
      const count = shallowRef({
        x: 0,
        y: 0,
      });

      watch(
        () => count,
        (val) => {
          console.log(val, 'count');
        },
        { deep: true }
      );

      const handle = () => {
        count.value.x++;
      };

      const TriggerRef = () => {
        triggerRef(count);
      };

      onMounted(() => {
        handle();
      });

      return {
        handle,
        TriggerRef,
        count,
      };
    },
  });
</script>
