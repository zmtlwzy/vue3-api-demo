<template>
  <div class="grid-layout-2">
    <FInherit id="parent-inherit-id" class="parent-inherit-class" :style="{ color: 'yellow' }" />
    <MergeProps class="hover:bg-red-400">
      MergeProps
    </MergeProps>
  </div>
</template>

<script setup lang="ts">
import FInherit from './components/InheritAttrs.vue'
import MergeProps from './components/MergeProps.vue'
</script>
