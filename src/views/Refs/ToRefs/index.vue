<template>
  <n-card :title="$options.name">
    <n-space vertical align="center">
      <n-descriptions label-placement="top" bordered :column="2">
        <n-descriptions-item label="count">
          <des-table :var-obj="{ x, y }" />
        </n-descriptions-item>
      </n-descriptions>
      <n-button type="primary" @click="handle">click</n-button>
    </n-space>
  </n-card>
</template>

<script lang="ts">
export default defineComponent({
  name: 'ToRefs',
  setup() {
    const count = reactive({
      x: 0,
      y: 0
    });

    const countAsRefs = toRefs(count);

    watchEffect(() => {
      console.log(countAsRefs);
      console.log(countAsRefs.x.value);
    });

    const handle = () => {
      count.x++;
      count.y += 2;
    };

    return {
      ...toRefs(count),
      handle
    };
  }
});
</script>
