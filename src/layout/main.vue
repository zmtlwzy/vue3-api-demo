<template>
  <div>
    <n-config-provider :theme="theme">
      <n-message-provider>
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
            show-trigger
            content-style="padding-right: 10px;"
          >
            <n-menu :value="menuValue" :options="menuOptions" />
          </n-layout-sider>
          <n-layout
            :native-scrollbar="false"
            content-style="min-height: calc(100vh - var(--header-height));padding:2rem;"
          >
            <div>
              <div id="teleport-container"></div>
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
      </n-message-provider>
    </n-config-provider>
  </div>
</template>

<script lang="ts">
  import { defineComponent, useCssVars } from 'vue';

  import { useAppStore } from '@/store/modules/app';

  export default defineComponent({
    props: ['theme', 'menuOptions', 'menuDefaultValue', 'menuValue'],
    setup() {
      const appStore = useAppStore();

      useCssVars(() => ({
        'header-height': `${appStore.getHeaderHeight}px`,
      }));

      return {
        siderWidth:appStore.getSiderWidth
      };
    },
  });
</script>
