<template>
  <div :class="getClass">
    <slot>customElement</slot>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/modules/app';
import { ThemeEnum } from '@/enums/themeEnum';

const appStore = useAppStore();
const getClass = computed(() => (appStore.getThemeMode === ThemeEnum.DARK ? 'dark' : void 0));
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
