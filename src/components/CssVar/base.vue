<template>
  <n-space vertical>
    <h3>{{ $options.name }}</h3>
    <p class="px-2 py-1 mb-2 bg-gray-200">{{ color }}</p>
    <input type="color" class="mb-2" v-model="color.input" />
    <n-button type="primary" @click="handleClick">changeColor</n-button>
  </n-space>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
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

  const handleClick = () => {
    color.font = color.font === 'red' ? 'yellow' : color.font === 'yellow' ? 'red' : 'red';
    color.input =
      color.input === '#cccccc' ? '#666ddd' : color.input === '#666ddd' ? '#cccccc' : '#cccccc';
  };
</script>

<style>
  p {
    color: v-bind('color.font || "orange"');
    box-shadow: 0.2rem 0.2rem 0.5rem v-bind('color.input');
  }
</style>
