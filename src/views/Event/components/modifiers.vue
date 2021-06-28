<template>
  <n-card :title="$options.name">
    <n-space vertical align="center">
      <div class="border" @click.capture="handleClick('1')">
        1
        <div class="border" @click="handleClick('2')">
          2
          <div class="border" @click="handleClick('3')"> click 3 first alert is 1 </div>
        </div>
      </div>
    </n-space>
  </n-card>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useMessage } from 'naive-ui';
  export default defineComponent({
    name: 'eventModifiers',
    setup() {
      const message = useMessage();
      const handleClick = (text: any) => {
        message.success(`${text}`);
      };

      return {
        handleClick,
      };
    },
  });
</script>

<style scoped>
  .border {
    padding: 20px;
    border: 1px dashed grey;
  }
</style>
