<template>
  <n-card :title="$options.name">
    <n-space vertical align="center">
      <n-descriptions label-placement="top" bordered :column="2">
        <n-descriptions-item label="shallowRef">
          <n-space vertical>
            <des-table :var-obj="{ count }"></des-table>
            <n-space>
              <n-button @click="overlay">overlay</n-button>
              <n-button @click="TriggerRef">TriggerRef</n-button>
            </n-space>
          </n-space>
        </n-descriptions-item>
      </n-descriptions>
      <n-button type="primary" @click="handle">add</n-button>
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

      const overlay = () => {
        triggerRef(count);
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
        overlay,
        count,
      };
    },
  });
</script>
