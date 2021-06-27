<template>
  <Layout :menuOptions="menuOptions" :menuValue="menuValue">
    <template #header>
      <div class="flex flex-row items-center px-8 h-full justify-between">
        <h2 class="text-2xl font-bold">Vue3 Api Demo</h2>
        <div class="flex flex-row items-center">
          <n-element
            tag="span"
            class="text-md mr-2"
            :class="[!active ? 'text-$primary-color transition-colors duration-400' : '']"
          >
            light
          </n-element>
          <n-switch v-model:value="active" size="medium"></n-switch>
          <n-element
            tag="span"
            class="text-md ml-2"
            :class="[active ? 'text-$primary-color transition-colors duration-400' : '']"
          >
            dark
          </n-element>
        </div>
      </div>
    </template>
    <template #content>
      <router-view :key="refreshId" />
    </template>
    <template #footer>
      <div class="flex w-full justify-center items-center">
        <p class="mr-15 text-md">vue version: {{ version }} (footer)</p>
        <n-button type="primary" @click="refreshId++">refresh</n-button>
      </div>
    </template>
  </Layout>
</template>

<script lang="ts">
  import { computed, defineComponent, onMounted, ref, version, watchEffect } from 'vue';
  import { MenuOption, useLoadingBar } from 'naive-ui';

  import { useAppStore } from '@/store/modules/app';

  import Layout from '@/layout/main.vue';

  import { loadingBarApiRef } from '@/router';
  import { List as routerList } from '@/router/routerList';

  import { rederRouter } from 'comps/render';

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
    name: 'app',
    components: { Layout },
    setup() {
      const route = useRoute();
      const loadingBar = useLoadingBar();
      const appStore = useAppStore();

      const active = ref<boolean>(false);
      const refreshId = ref<number>(0);

      const menuValue = computed(() => {
        const path = route.path;
        return path.slice(1, 2).toUpperCase() + path.slice(2);
      });

      watchEffect(() => {
        if (active.value) {
          appStore.setThemeName('dark');
        } else {
          appStore.setThemeName('light');
        }
      });

      onMounted(() => {
        loadingBarApiRef.value = loadingBar;
        loadingBar?.finish();
      });

      return {
        version,
        menuOptions,
        menuValue,
        active,
        refreshId,
      };
    },
  });
</script>
