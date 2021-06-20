<template>
  <div class="theme-provider">
    <p class="px-2 py-1 mb-2 bg-gray-200">{{ color }}</p>
    <input type="color" class="mb-2" v-model="color.input" />
   <n-button type="primary" @click="handleClick">changeColor</n-button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'ScriptSetup_demo3',
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

<style lang="less">
  .theme-provider {
    --color-primary: v-bind('color.font || "orange"');
    p {
      color: var(--color-primary);
      box-shadow: 0.2rem 0.2rem 0.5rem v-bind('color.input');
    }
  }
</style>
