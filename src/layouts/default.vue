<template>
  <n-layout-header class="h-$app-header-height" bordered>
    <header h-full>
      <div flex flex-row items-center px-8 h-full justify-between>
        <h2 text-2xl font-bold>
          Vue3 Api Demo
        </h2>
        <div class="teleport-header-container" />
        <div space-x-4>
          <n-button text :title="t('button.toggle_langs')" @click="toggleLocales">
            <template #icon>
              <div i="carbon-language" />
            </template>
          </n-button>
          <n-button text :title="t('button.toggle_dark')" @click="toggleDark()">
            <template #icon>
              <div i="carbon-sun dark:carbon-moon" />
            </template>
          </n-button>
        </div>
      </div>
    </header>
  </n-layout-header>
  <n-layout position="absolute" class="!top-$app-header-height" has-sider>
    <n-layout-sider
      bordered
      :inverted="false"
      :native-scrollbar="false"
      collapse-mode="width"
      :collapsed-width="0"
      :width="210"
      :show-collapsed-content="false"
      show-trigger="bar"
      content-style="padding-right: 10px;"
    >
      <n-menu :inverted="false" accordion :value="(menuValue as string)" :options="menuOptions" />
    </n-layout-sider>
    <n-layout :native-scrollbar="false" :content-style="getStyle">
      <NBackTop />
      <Source class="flex-1">
        <main>
          <router-view :key="appStore.refreshId" />
        </main>
      </Source>
      <n-layout-footer bordered class="p-1 -m-8">
        <footer>
          <div class="flex w-full justify-center items-center teleport-footer-container">
            <p class="mr-15 text-md">
              vue version: {{ vueVer }}
            </p>
            <p class="mr-15 text-md">
              naive-ui version: {{ naiveuiVer }}
            </p>
            <n-button tertiary class="mr-15" @click="handleRefresh">
              <template #icon>
                <span text-sm i-carbon-restart />
              </template>
              {{ t('button.refesh_current_page') }}
            </n-button>
          </div>
        </footer>
      </n-layout-footer>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { MenuOption } from 'naive-ui'
import { version as vueVer } from 'vue'
import { version as naiveuiVer } from 'naive-ui'

import { getNaiveMenuList } from '~/router'
import { lang_storage, toggleDark } from '~/composables'
import { useAppStore } from '~/stores/app'

const { t, availableLocales, locale } = useI18n()

// console.log(getNaiveMenuList())

const toggleLocales = () => {
  const locales = availableLocales
  lang_storage.value = locales[(locales.indexOf(lang_storage.value || locale.value) + 1) % locales.length]
  locale.value = lang_storage.value
}
const route = useRoute()
const appStore = useAppStore()

const menuOptions: MenuOption[] = getNaiveMenuList()

const getStyle = ref<CSSProperties>({
  minHeight: 'calc(100vh - var(--app-header-height))',
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
})

const menuValue = computed(() => route.name)

const handleRefresh = () => {
  appStore.inc()
}
</script>
