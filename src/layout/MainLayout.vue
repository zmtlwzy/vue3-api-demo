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
    <n-layout :native-scrollbar="false" :content-style="getStyle">
      <n-back-top />
      <Source class="flex-1">
        <main>
          <slot name="content"></slot>
        </main>
      </Source>
      <n-layout-footer bordered class="p-5 -m-8">
        <footer>
          <slot name="footer"></slot>
        </footer>
      </n-layout-footer>
    </n-layout>
  </n-layout>
</template>

<script lang="ts">
import type { CSSProperties, PropType } from 'vue';
import { MenuProps } from 'naive-ui';

import { useAppStore } from '@/store/modules/app';

import Source from './Source.vue';

import { upperFirst } from 'lodash-es';

export default defineComponent({
  name: 'MainLayout',
  components: { Source },
  props: {
    menuOptions: Object as PropType<MenuProps['options']>
  },
  setup() {
    const route = useRoute();
    const appStore = useAppStore();

    useCssVars(() => ({
      'header-height': `${appStore.getHeaderHeight}px`
    }));

    const getStyle = ref<CSSProperties>({
      minHeight: 'calc(100vh - var(--header-height))',
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column'
    });

    const menuValue = computed(() => route.name);

    const expandedKeys = ref<string[]>([]);

    watch(
      () => route.path,
      path => {
        const arr = path.split('/');
        const rawKeys = arr.slice(1, arr.length - 1);
        const res = rawKeys.map(item => upperFirst(item));
        expandedKeys.value = res;
      },
      {
        immediate: true
      }
    );

    const handleUpdateExpandedKeys = (e: string[]) => {
      expandedKeys.value = e;
    };

    return {
      siderWidth: appStore.getSiderWidth,
      expandedKeys,
      menuValue,
      getStyle,
      handleUpdateExpandedKeys
    };
  }
});
</script>
