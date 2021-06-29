<template>
  <n-card :title="$options.name">
    <n-space vertical align="center">
      <des-table :varObj="{ pageX, pageY }" />
      <des-table :varObj="{ screenX, screenY }" />
      <des-table :varObj="{ halfX, halfY }" />
    </n-space>
  </n-card>
</template>

<script>
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'useHook-MouseEvent',
  });
</script>

<script setup>
  import { useMousePosition, useScreenPosition, useHalfPosition } from '@/hooks/mouse';

  const { pageX, pageY } = useMousePosition();
  const { screenX, screenY } = useScreenPosition();
  const { halfX, halfY } = useHalfPosition(pageX, pageY);
</script>
