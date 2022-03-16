<template>
  <div :someDomProperty.prop="value">
    vbind prop
  </div>
  <div ref="el" .someDomProperty="value">
    vbind prop dedicated shorthand
  </div>
  <div :someDomAttrs="value">
    vbind attr (default)
  </div>
</template>

<script setup lang="ts">
import type { MaybeElementRef } from '@vueuse/core'

const el = ref<MaybeElementRef>(null)
const value = ref('attr_value')

onMounted(() => {
  console.log(el.value)
})

</script>
