<template>
  <div>
    <slot></slot>
    <div class="mt-15 mb-20">
      <n-a :href="getUrl" target="_blank" class="no-underline">
        <div class="group inline-flex items-center">
          <span>Source</span>
          <i
            class="i-akar-icons-arrow-right text-sm transform op0 transition"
            group-hover="opacity-100 translate-x-1"
          />
        </div>
      </n-a>
    </div>
  </div>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'SourceLink',
    setup() {
      const { currentRoute } = useRouter();

      const getDir = computed(() => {
        return unref(currentRoute).meta?.dir;
      });
      const getUrl = computed(() => {
        const dir =
          unref(getDir) ||
          unref(currentRoute)
            .fullPath.split('/')
            .slice(1)
            .map((item) => item.charAt(0).toLocaleUpperCase() + item.slice(1))
            .join('/') + '/index.vue';
        return `https://github.com/zmtlwzy/vue3-api-demo/blob/main/src/views/${dir}`;
      });

      return {
        getUrl,
      };
    },
  });
</script>
