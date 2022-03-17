<template>
  <div>
    <slot />
    <div mt-15 mb-20>
      <n-button text ghost>
        <a :href="getUrl" target="_blank" class="no-underline">
          <div class="group inline-flex items-center">
            <span font-bold group-hover="underline">Source</span>
            <span
              i-carbon-arrow-right text-xs transform op0 transition
              group-hover="op100 translate-x-1"
            />
          </div>
        </a>
      </n-button>
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
