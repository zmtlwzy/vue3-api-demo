<template>
  <Layout :theme="theme" :menuOptions="menuOptions" :menuValue="menuValue">
    <template #header>
      <div class="flex flex-row items-center px-8 h-full justify-between">
        <h2 class="text-2xl font-bold">Vue3 Api Demo</h2>
        <div class="flex flex-row items-center">
          <span class="text-md mr-2">light</span>
          <n-switch v-model:value="active" size="medium"></n-switch>
          <span class="text-md ml-2">dark</span>
        </div>
      </div>
    </template>

    <template #content>
      <router-view :key="refreshId" />
    </template>
    <template #footer>
      <n-space vertical align="center">
        <h4>vue version: {{ version }} (footer)</h4>
        <n-button type="primary" @click="refreshId++">refresh</n-button>
      </n-space>
    </template>
  </Layout>
</template>

<script lang="ts">
  import { computed, defineComponent, ref, version } from 'vue';
  import { MenuOption, darkTheme } from 'naive-ui';
  import Layout from '@/layout/main.vue';

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
    name: 'app',
    components: { Layout },
    setup() {
      const route = useRoute();

      const active = ref<boolean>(false);
      const refreshId = ref<number>(0);

      const theme = computed(()=>{
        return active.value ? darkTheme : null
      });

      const menuValue = computed(() => {
        const path = route.path;
        return path.slice(1, 2).toUpperCase() + path.slice(2);
      });

      return {
        version,
        menuOptions,
        darkTheme,
        menuValue,
        active,
        refreshId,
        theme,
      };
    },
  });
</script>
