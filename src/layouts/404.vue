<script setup lang="ts">
const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <main flex-C h-screen>
    <n-result status="404" :title="t('not-found')">
      <router-view />
      <div flex-C>
        <n-button ghost @click="router.back()">
          {{ t('button.back') }}
        </n-button>
      </div>
    </n-result>
  </main>
</template>
