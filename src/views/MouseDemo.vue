<template>
  <n-card>
    <n-space vertical align="center">
      <DesTable :varObj="{ pageX, pageY }" />
      <DesTable :varObj="{ screenX, screenY }" />
      <DesTable :varObj="{ halfX, halfY }" />
    </n-space>
  </n-card>
</template>

<script setup>
  import { useMousePosition, useScreenPosition, useHalfPosition } from '@/hooks/mouse';
  import DesTable from '@/components/VarDescriptions';

  const { pageX, pageY } = useMousePosition();
  const { screenX, screenY } = useScreenPosition();
  const { halfX, halfY } = useHalfPosition(pageX, pageY);
</script>
