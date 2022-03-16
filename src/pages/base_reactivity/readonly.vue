<template>
  <n-card>
    <n-space vertical align="center">
      <n-descriptions bordered :cols="2">
        <n-descriptions-item label="original">
          {{ original }}
        </n-descriptions-item>
        <n-descriptions-item label="copy">
          {{ copy }}
        </n-descriptions-item>
      </n-descriptions>
      <n-space>
        <n-button type="primary" @click="changeOriginal">
          changeOriginal
        </n-button>
        <n-button type="primary" @click="changeCopy">
          changeCopy
        </n-button>
      </n-space>
    </n-space>
  </n-card>
</template>

<script lang="ts">
export default defineComponent({
  name: 'Readonly',
  setup() {
    const original = reactive({ count: 0 })
    const copy = readonly(original)

    const changeOriginal = () => {
      original.count++
    }

    const changeCopy = () => {
      // @ts-expect-error: make warn
      copy.count++
    }

    return {
      original,
      copy,
      changeOriginal,
      changeCopy,
    }
  },
})
</script>
