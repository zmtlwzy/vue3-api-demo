<template>
  <div>
    <n-config-provider :theme="theme">
    <n-message-provider>
        <n-layout-header class="h-$header-height" bordered>
          <div class="flex flex-row items-center px-8 h-full justify-between">
            <h2 class="text-2xl font-bold">Vue3 Api Demo</h2>
            <div class="flex flex-row">
              <n-button @click="theme = darkTheme">深色</n-button>
              <n-button @click="theme = null">浅色</n-button>
            </div>
          </div>
        </n-layout-header>
        <n-layout position="absolute" class="!top-$header-height" has-sider>
          <n-layout-sider
            :native-scrollbar="false"
            bordered
            collapse-mode="width"
            :collapsed-width="0"
            :width="250"
            :show-collapsed-content="false"
            show-trigger
            :inverted="inverted"
            content-style="padding-right: 10px;"
          >
            <n-menu :default-value="defaultValue" :inverted="inverted" :options="menuOptions" />
          </n-layout-sider>
          <n-layout
            :native-scrollbar="false"
            content-style="min-height: calc(100vh - var(--header-height));padding:2rem;"
          >
            <div>
              <div id="teleport-container"></div>
              <main>
                <router-view :key="refreshId" />
              </main>
            </div>
            <n-layout-footer bordered position="absolute" class="p-5">
              <footer>
                <n-space vertical align="center">
                  <h4>vue version: {{ version }} (footer)</h4>
                  <n-button type="primary" @click="refreshId++">refresh</n-button>
                </n-space>
              </footer>
            </n-layout-footer>
          </n-layout>
        </n-layout>
      </n-message-provider>
    </n-config-provider>
  </div>
</template>

<script lang="ts">
  import { defineComponent, onBeforeMount, ref, version, useCssVars } from 'vue';
  import { MenuOption, darkTheme } from 'naive-ui';

  import { useAppStore } from '@/store/modules/app';

  import { List as routerList } from '@/router/routerList';

  import { rederRouter } from '@/components/render';

  import { useRoute } from 'vue-router';

  const list = routerList.filter((item) => {
    return !Object.keys(item).includes('redirect');
  });
  const menuOptions = list.map((item) => {
    return {
      label: rederRouter(item),
      key: item.component,
    };
  }) as MenuOption[];

  export default defineComponent({
    setup() {
      const appStore = useAppStore();
      const inverted = ref<boolean>(false);
      const refreshId = ref<number>(0);
      const defaultValue = ref<string>();
      useCssVars(() => ({
        'header-height': `${appStore.getHeaderHeight}px`,
      }));
      onBeforeMount(() => {
        const path = useRoute().path;
        defaultValue.value = path.slice(1, 2).toUpperCase() + path.slice(2);
      });
      return {
        version,
        refreshId,
        inverted,
        menuOptions,
        defaultValue,
        darkTheme,
        theme: ref<typeof darkTheme | null>(null),
      };
    },
  });
</script>
