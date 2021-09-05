<template>
  <div>
    <slot></slot>
    <div class="mt-15 mb-20">
    <n-a :href="getUrl" target="_blank">
    <div class="group *flex-VC">
      <span>Source</span>
      <i-akar-icons-arrow-right class="text-0.8em transform opacity-0 transition group-hover:(opacity-100 translate-x-1)"/>
    </div>
    </n-a>
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
