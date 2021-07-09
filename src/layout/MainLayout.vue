<template>
  <n-layout-header class="h-$header-height" bordered>
    <header class="h-full">
      <slot name="header"></slot>
    </header>
  </n-layout-header>
  <n-layout position="absolute" class="!top-$header-height" has-sider>
    <n-layout-sider
      :native-scrollbar="false"
      bordered
      collapse-mode="width"
      :collapsed-width="0"
      :width="siderWidth"
      :show-collapsed-content="false"
      show-trigger="bar"
      content-style="padding-right: 10px;"
    >
      <n-menu
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
      <div>
        <main>
          <slot name="content"></slot>
        </main>
      </div>
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

  export default defineComponent({
    name: 'MainLayout',
    props: ['menuOptions', 'menuValue'],
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
          const rawKey = arr[arr.length - 2];
          const res = [rawKey.charAt(0).toLocaleUpperCase() + rawKey.slice(1)];
          expandedKeys.value = res;
        },
        {
          immediate: true,
        }
      );

      const handleUpdateExpandedKeys = (e: string[]) => {
        console.log(e);
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
