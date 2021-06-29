<template>
  <n-card :title="$options.name">
    <n-tag class="mb-2 tag-class">{{ color }}</n-tag>
    <template #action>
      <div class="flex items-center">
        <n-color-picker
          :modes="['hex']"
          :show-alpha="false"
          class="flex-1 mr-12vw"
          v-model:value="color.input"
        />
        <n-button type="primary" @click="handleClick">changeColor</n-button>
      </div>
    </template>
  </n-card>
</template>

<script lang="ts">
  import { defineComponent, watch } from 'vue';
  export default defineComponent({
    name: 'Base_demo',
  });
</script>

<script setup lang="ts">
  ref: color = {
    font: null,
    input: '#cccccc',
  } as {
    font: null | string;
    input: string;
  };

  watch(
    () => color.input,
    (val) => {
      color.font = val;
    }
  );

  const handleClick = () => {
    color.font = color.font === 'red' ? 'yellow' : color.font === 'yellow' ? 'red' : 'red';
    color.input =
      color.input === '#cccccc' ? '#666ddd' : color.input === '#666ddd' ? '#cccccc' : '#cccccc';
  };
</script>

<style scoped>
  .tag-class {
    color: v-bind('color.font || "orange"');
    box-shadow: 0.2rem 0.2rem 0.5rem v-bind('color.input');
  }
</style>
