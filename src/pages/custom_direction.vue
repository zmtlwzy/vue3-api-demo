<template>
  <n-space vertical>
    <n-slider v-model:value="pinPadding" :min="min" :max="max" :step="1" />
    <!-- <input type="range" min="min" :max="max" v-model="pinPadding" /> -->
    <p ref="textEl" v-pin:[direction].a.b="pinPadding">
      v-pin
    </p>
  </n-space>
</template>

<script lang="ts">
import { useAppStore } from '~/stores/app'
import { pinDirective } from '~/directive/pin'

export default defineComponent({
  name: 'CustomDirective',
  directives: { pin: pinDirective },
  setup() {
    const appStore = useAppStore()
    const pinPadding = ref<number>(210)
    const textEl = ref<HTMLElement>()
    const direction = ref<string>('left')
    const max = computed(() => {
      const w = textEl.value?.offsetWidth ?? 0
      return window.innerWidth - w
    })

    return {
      pinPadding,
      direction,
      max,
      textEl,
      min: appStore.siderWidth,
    }
  },
})
</script>
