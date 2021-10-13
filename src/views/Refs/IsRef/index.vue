<template>
  <n-card>
    <n-space vertical align="center">
      <n-descriptions bordered :cols="2">
        <n-descriptions-item label="num">
          {{ numBool }}
        </n-descriptions-item>
        <n-descriptions-item label="count">
          {{ countBool }}
        </n-descriptions-item>
        <n-descriptions-item label="a">
          {{ aBool }}
        </n-descriptions-item>
      </n-descriptions>
    </n-space>
  </n-card>
</template>

<script lang="ts">
  const obj = {
    a: 1,
  };
  export default defineComponent({
    name: 'IsRef',
    setup() {
      const num = 0;
      const count = ref(num);
      const a = toRef(obj, 'a');
      return {
        numBool: computed(() => isRef(num)),
        countBool: computed(() => isRef(count)),
        aBool: computed(() => isRef(a)),
      };
    },
  });
</script>
