<template>
  <n-card :title="$options.name">
    <n-space vertical align="center">
      <n-descriptions label-placement="top" bordered :column="2">
        <n-descriptions-item label="shallowRef">
          <des-table :var-obj="{ count }"></des-table>
        </n-descriptions-item>
        <n-descriptions-item label="ref">
          <des-table :var-obj="{ count2 }"></des-table>
        </n-descriptions-item>
      </n-descriptions>
      <n-space>
        <n-button @click="add">add</n-button>
        <n-button type="primary" @click="overlayShallowRef">overlayShallowRef</n-button>
      </n-space>
    </n-space>
  </n-card>
</template>

<script lang="ts">

  export default defineComponent({
    name: 'ShallowRef',
    setup() {
      const obj = {
        x:0,
        y:0
      }
      const count = shallowRef({...obj});

      const count2 = ref({...obj});

      watch(
        () => count,
        (val) => {
          console.log(val, 'count');
        },
        { deep: true }
      );

      watch(
        () => count2,
        (val) => {
          console.log(val, 'count2');
        },
        { deep: true }
      );

      const add = () => {
        obj.x++;
        count.value.x = obj.x
        count2.value.x = obj.x
      };

      const overlayShallowRef = () => {
        count.value = {...obj}
      }


      return {
        add,
        overlayShallowRef,
        count,
        count2,
      };
    },
  });
</script>
