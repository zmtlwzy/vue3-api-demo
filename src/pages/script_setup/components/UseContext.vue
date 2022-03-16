<template>
  <n-card title="useContext">
    <n-space vertical>
      <des-table :var-obj="{ count, count2, msg, num }" />
      <slot />
      <slot name="other" />
    </n-space>
    <template #action>
      <n-button type="primary" @click="handleClick">
        add
      </n-button>
    </template>
  </n-card>
</template>

<script setup lang="ts">
const slots = useSlots()
const attrs = useAttrs()
const props = withDefaults(defineProps<{ num?: number; msg?: string }>(), {
  num: 11,
  msg: 'some text',
})

const emit = defineEmits(['inc'])

let count = $ref(1)
const count2 = ref(count + 1)

defineExpose({
  count,
  count2,
})

const handleClick = () => {
  count += 2
  emit('inc', count2)
}

console.log(props)
console.log(emit)
console.log(attrs, 'attrs')
console.log(slots, 'slots')
</script>
