<template>
  <n-card :title="$options.name">
    <n-tag class="mb-2 tag-class">{{ color }}</n-tag>
    <template #action>
      <div class="flex items-center">
        <n-color-picker :modes="['hex']" :show-alpha="false" class="flex-1 mr-12vw" v-model:value="color.input" />
        <n-button type="primary" @click="handleClick">changeColor</n-button>
      </div>
    </template>
  </n-card>
</template>

<script lang="ts">
export default defineComponent({
  name: 'BaseDemo'
});
</script>

<script setup lang="ts">
const color = ref<{
  font: null | string;
  input: string;
}>({
  font: null,
  input: '#cccccc'
});

watch(
  () => color.value.input,
  val => {
    color.value.font = val;
  }
);

const handleClick = () => {
  color.value.font = color.value.font === 'red' ? 'yellow' : color.value.font === 'yellow' ? 'red' : 'red';
  color.value.input =
    color.value.input === '#cccccc' ? '#666ddd' : color.value.input === '#666ddd' ? '#cccccc' : '#cccccc';
};
</script>

<style scoped>
.tag-class {
  color: v-bind('color.font || "orange"');
  box-shadow: 0.2rem 0.2rem 0.5rem v-bind('color.input');
}
</style>
