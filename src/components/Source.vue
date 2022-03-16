<template>
  <div>
    <slot />
    <div mt-15 mb-20>
      <n-a :href="getUrl" target="_blank" class="no-underline">
        <div class="group inline-flex items-center">
          <span>Source</span>
          <i
            i-carbon-arrow-right text-xs transform op0 transition
            group-hover="op100 translate-x-1"
          />
        </div>
      </n-a>
    </div>
  </div>
</template>

<script setup lang="ts">
const { currentRoute } = useRouter()

const getUrl = computed(() => {
  const dir = `${unref(currentRoute).path}.vue`
  return `https://github.com/zmtlwzy/vue3-api-demo/blob/main/src/pages${dir}`
})

</script>
