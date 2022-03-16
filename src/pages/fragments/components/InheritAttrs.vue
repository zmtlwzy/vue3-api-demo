<template>
  <n-card :title="$options.name">
    <n-space vertical align="center">
      <span>Can not automatically inherit attributes</span>
      <span>Attrs is render here</span>
      <pre>
        {{ $attrs }}
      </pre>
    </n-space>
  </n-card>
</template>

<script lang="ts">

export default defineComponent({
  name: 'InheritAttrs',
  inheritAttrs: false,
})
</script>
