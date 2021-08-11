<template>
  <n-card :title="$options.name">
    <n-space vertical>
      <des-table :var-obj="{ count, count2, msg }"></des-table>
      <slot></slot>
      <slot name="other"></slot>
    </n-space>
    <template #action>
      <n-button type="primary" @click="handleClick">add</n-button>
    </template>
  </n-card>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    name: 'useSlots useAttrs defineExpose defineProps defineEmits',
  });
</script>

<script setup lang="ts">
  import { useSlots, useAttrs } from 'vue';
  const slots = useSlots();
  const attrs = useAttrs();
  const props = defineProps({
    msg: {
      type: String,
      default: 'msg',
    },
  });
  const emit = defineEmits(['inc']);

  let count = $ref(1);
  const count2 = ref(count + 1);

  defineExpose({
    count,
    count2,
  });

  const handleClick = () => {
    count+=2
    emit('inc', count2);
  };

  console.log(props?.msg);
  console.log(emit);
  console.log(attrs, 'attrs');
  console.log(slots, 'slots');
</script>

<style></style>
