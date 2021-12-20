<template>
  <n-card :title="$options.name">
    <n-space vertical align="center">
      <des-table :varObj="{ pageX, pageY }" />
      <des-table :varObj="{ screenX, screenY }" />
      <des-table :varObj="{ halfX, halfY }" />
    </n-space>
  </n-card>
</template>

<script lang="ts">
export default defineComponent({
  name: 'UseHookMouseEvent'
});
</script>

<script setup lang="ts">
import { useMousePosition, useScreenPosition, useHalfPosition } from '@/composables/mouse';

const { pageX, pageY } = useMousePosition();
const { screenX, screenY } = useScreenPosition();
const { halfX, halfY } = useHalfPosition(pageX);
</script>
