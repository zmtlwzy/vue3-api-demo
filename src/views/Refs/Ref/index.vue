<template>
  <n-card>
    <n-space vertical align="center">
      <p hover="bg-dark-50 text-light-50">count(use ref):{{ count }}</p>
      <n-button type="primary" @click="add">+</n-button>
    </n-space>
  </n-card>
</template>

<script lang="ts">
export default defineComponent({
  name: 'Ref',
  setup() {
    const count = ref(0);
    const add = () => {
      count.value++;
    };
    return {
      count,
      add
    };
  }
});
</script>
