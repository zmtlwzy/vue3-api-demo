<template>
  <n-card :title="$options.name">
    <n-space vertical>
      <n-button @click="handleClick">click event</n-button>
      <n-button @click="handleClick($event), handleClick2('2', $event)"
        >click Multiple event</n-button
      >
    </n-space>
  </n-card>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useMessage } from 'naive-ui';

  export default defineComponent({
    name: 'eventBase',
    setup() {
      const message = useMessage();
      const handleClick = (e: MouseEvent) => {
        message.success('1');
        console.log(e);
      };

      const handleClick2 = (str: string, e: MouseEvent) => {
        message.success(str);
        console.log(e);
      };

      return {
        handleClick,
        handleClick2,
      };
    },
  });
</script>
