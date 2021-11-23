<template>
  <n-card :title="$options.name">
    <n-space vertical align="center">
      <des-table :varObj="{ count }" />
      <n-button type="primary" @click="add">add</n-button>
    </n-space>
  </n-card>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'SingleSource',
    setup() {
      const count = ref(0);
      const add = () => {
        count.value++;
      };

      watch(
        () => count.value,
        (val) => {
          console.log('SingleSource with getter', isRef(val));
        },
      );

      watch(count, (val) => {
        console.log('SingleSource with ref', isRef(val));
      });

      return {
        count,
        add,
      };
    },
  });
</script>
