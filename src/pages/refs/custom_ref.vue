<template>
  <n-card :title="$options.name">
    <n-space vertical>
      <n-input
        v-model:value="refValue"
        type="input"
        placeholder="停止输入500ms后,输入值将在下方更新"
        class="max-w-1/2"
      />
      <n-tag class="mt-5">
        {{ customRefValue }}
      </n-tag>
    </n-space>
  </n-card>
</template>

<script lang="ts">
function useDebouncedRef(value: any, delay = 500) {
  let timeout: NodeJS.Timeout
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          value = newValue
          trigger()
        }, delay)
      },
    }
  })
}

export default defineComponent({
  name: 'CustomRefDebounced',
  setup() {
    const refValue = ref<string>('hello')
    const customRefValue = useDebouncedRef('hello')

    watch(refValue, (item) => {
      customRefValue.value = item
    })
    return {
      refValue,
      customRefValue,
    }
  },
})
</script>
