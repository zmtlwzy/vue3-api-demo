<template>
  <n-layout-header class="h-$header-height" bordered>
    <header class="h-full">
      <slot name="header"></slot>
    </header>
  </n-layout-header>
  <n-layout position="absolute" class="!top-$header-height" has-sider>
    <n-layout-sider
      bordered
      :inverted="false"
      :native-scrollbar="false"
      collapse-mode="width"
      :collapsed-width="0"
      :width="siderWidth"
      :show-collapsed-content="false"
      show-trigger="bar"
      content-style="padding-right: 10px;"
    >
      <n-menu
        :inverted="false"
        :value="menuValue"
        :options="menuOptions"
        :expanded-keys="expandedKeys"
        @update:expanded-keys="handleUpdateExpandedKeys"
      />
    </n-layout-sider>
    <n-layout
      :native-scrollbar="false"
      content-style="min-height: calc(100vh - var(--header-height));padding:2rem;"
    >
      <n-back-top />
      <Source>
        <main>
          <slot name="content"></slot>
        </main>
      </Source>
      <n-layout-footer bordered position="absolute" class="p-5">
        <footer>
          <slot name="footer"></slot>
        </footer>
      </n-layout-footer>
    </n-layout>
  </n-layout>
</template>

<script lang="ts">
  import { defineComponent, useCssVars, ref, computed, watch } from 'vue';

  import { useRoute } from 'vue-router';

  import { useAppStore } from '@/store/modules/app';

  import Source from './Source.vue';

  export default defineComponent({
    name: 'MainLayout',
    props: ['menuOptions', 'menuValue'],
    components: { Source },
    setup() {
      const route = useRoute();
      const appStore = useAppStore();

      useCssVars(() => ({
        'header-height': `${appStore.getHeaderHeight}px`,
      }));

      const menuValue = computed(() => route.name);

      const expandedKeys = ref<string[]>([]);

      watch(
        () => route.path,
        (path) => {
          const arr = path.split('/');
          const rawKeys = arr.slice(1, arr.length - 1);
          const res = rawKeys.map((item) => {
            return item.charAt(0).toLocaleUpperCase() + item.slice(1);
          });
          expandedKeys.value = res;
        },
        {
          immediate: true,
        }
      );

      const handleUpdateExpandedKeys = (e: string[]) => {
        expandedKeys.value = e;
      };

      return {
        siderWidth: appStore.getSiderWidth,
        expandedKeys,
        menuValue,
        handleUpdateExpandedKeys,
      };
    },
  });
</script>
