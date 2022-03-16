<template>
  <div :class="getClass">
    <slot>customElement</slot>
  </div>
</template>

<script setup lang="ts">
import { isDark } from '~/composables/dark'

const getClass = computed(() => (isDark.value ? 'dark' : null))
</script>

<style>
div {
  display: inline-block;
  padding: 1rem;
  background-color: #0960bd1a;
  border-radius: 5px;
}

div.dark {
  background-color: #63e2b726;
}
</style>
