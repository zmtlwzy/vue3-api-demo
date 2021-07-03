<template>
  <n-card :title="$options.name">
    <n-space vertical>
      <des-table :var-obj="{ count, msg }"></des-table>
      <slot></slot>
      <slot name="other"></slot>
    </n-space>
    <template #action>
      <n-button type="primary" @click="handleClick">add</n-button>
    </template>
  </n-card>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'useSlots & useAttrs & defineEmits & defineProps',
  });
</script>

<script setup lang="ts">
  import { defineProps, defineEmits, useSlots, useAttrs } from 'vue';
  const slots = useSlots();
  const attrs = useAttrs();
  const props = defineProps({
    msg: {
      type: String,
      default: 'msg',
    },
  });
  const emit = defineEmits(['inc']);

  ref: count = 1;

  const handleClick = () => {
    emit('inc', $count);
  };

  console.log(props?.msg);
  console.log(emit);
  console.log(attrs, 'attrs');
  console.log(slots, 'slots');
</script>

<style></style>
