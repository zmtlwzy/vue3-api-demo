<template>
  <n-h2 class="max-w-screen">
    open console
  </n-h2>
  <div class="grid-layout-2">
    <component :is="comp" v-for="comp in allComps" :key="comp.name" />
  </div>
</template>

<script setup lang="ts">
import * as allComps from './components'
</script>
