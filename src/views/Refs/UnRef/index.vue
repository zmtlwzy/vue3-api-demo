<template>
  <n-card :title="$options.name">
    <n-space vertical align="center">
      <des-table :var-obj="{ count, count2, total, total2 }" />
      <n-button @click="add">++</n-button>
    </n-space>
  </n-card>
</template>

<script lang="ts">
export default defineComponent({
  name: 'UnRef',
  setup() {
    const count = ref<number>(0);
    const count2 = 2;

    const add = () => {
      count.value += 2;
    };

    const UnRef = (val: any) => (val = isRef(val) ? val.value : val);

    const total = computed(() => unref(count) + unref(count2));
    const total2 = computed(() => UnRef(count) * UnRef(count2));

    return {
      total,
      total2,
      count,
      count2,
      add
    };
  }
});
</script>
