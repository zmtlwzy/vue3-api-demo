<template>
  <n-card :title="$options.name">
    <n-space vertical align="center">
      <n-descriptions label-placement="top" bordered :column="3">
        <n-descriptions-item label="count">
          <des-table :var-obj="{ a, b }"></des-table>
        </n-descriptions-item>
        <n-descriptions-item label="r">
          {{ z }}
        </n-descriptions-item>
      </n-descriptions>
      <n-button type="primary" @click="handle">click</n-button>
    </n-space>
  </n-card>
</template>

<script lang="ts">

  export default defineComponent({
    name: 'toRef',
    setup() {
      const count = reactive({
        x: 0,
        y: 0,
      });

      const r = { z: ref(1) };

      const handle = () => {
        count.x++;
        count.y += 2;
        r.z.value++;
      };

      return {
        a: toRef(count, 'x'),
        b: toRef(count, 'y'),
        z: toRef(r, 'z'),
        handle,
      };
    },
  });
</script>
