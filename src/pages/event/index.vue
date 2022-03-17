<template>
  <n-grid :cols="2" x-gap="16" y-gap="24">
    <n-grid-item>
      <EventBase />
    </n-grid-item>
    <n-grid-item>
      <EventModifiers />
    </n-grid-item>
  </n-grid>
</template>

<script setup lang="ts">
import { EventBase, EventModifiers } from './components'
</script>
