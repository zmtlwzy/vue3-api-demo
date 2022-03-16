<script setup lang="ts">
import { getNaiveThemeProps, lang_storage } from '~/composables'

const { locale } = useI18n()
useHead({
  title: 'Vue3-api-demo',
  meta: [
    { name: 'description', content: 'Study vue3 api' },
  ],
})

watchEffect(() => {
  locale.value = lang_storage.value
})
</script>

<template>
  <n-config-provider v-bind="getNaiveThemeProps">
    <n-message-provider>
      <router-view />
    </n-message-provider>
  </n-config-provider>
</template>
