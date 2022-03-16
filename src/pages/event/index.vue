<template>
  <n-grid :cols="2" x-gap="16" y-gap="24">
    <n-grid-item>
      <eventBase />
    </n-grid-item>
    <n-grid-item>
      <modifiers />
    </n-grid-item>
  </n-grid>
</template>

<script setup lang="ts">
import { base as eventBase, modifiers } from './components'
</script>
