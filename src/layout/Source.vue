<template>
  <div>
    <slot></slot>
    <div class="mt-15 mb-20">
      <a :href="getUrl" target="_blank" class="text-primary hover:underline">Source</a>
    </div>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, unref } from 'vue';
  import { useRouter } from 'vue-router';

  export default defineComponent({
    name: 'SourceLink',
    setup() {
      const { currentRoute } = useRouter();
      console.log(currentRoute.value);

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
