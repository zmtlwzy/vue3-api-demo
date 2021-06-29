<template>
  <n-card :title="$options.name">
    <n-space vertical>
      <n-button type="primary" @click="handleClick">{{ msg }}</n-button>
      <div>count : {{ count }}</div>
      <slot></slot>
      <slot name="other"></slot>
    </n-space>
  </n-card>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'useContext',
  });
</script>

<script setup lang="ts">
  import { defineProps, defineEmit, useContext } from 'vue';
  const { emit, attrs, slots } = useContext();
  const props = defineProps({
    msg: {
      type: String,
      default: 'msg',
    },
  });

  const Emit = defineEmit(['inc']);

  ref: count = 1;

  const handleClick = () => {
    emit('inc', $count);
    Emit('inc', count);
  };

  console.log(props?.msg);
  console.log(Emit, emit);
  console.log(attrs, 'attrs');
  console.log(slots, 'slots');
</script>

<style></style>
