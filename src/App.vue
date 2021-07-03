<template>
  <MainLayout :menuOptions="menuOptions" :menuValue="menuValue">
    <template #header>
      <div class="flex flex-row items-center px-8 h-full justify-between">
        <h2 class="text-2xl font-bold">Vue3 Api Demo</h2>
        <div class="teleport-header-container"></div>
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
      <div class="flex w-full justify-center items-center teleport-footer-container">
        <p class="mr-15 text-md">vue version: {{ vueVer }}</p>
        <p class="mr-15 text-md">naive-ui version: {{ naiveuiVer }}</p>
        <n-button type="primary" class="mr-15" @click="handleRefresh">refresh</n-button>
      </div>
    </template>
  </MainLayout>
</template>

<script lang="ts">
  import { computed, defineComponent, onMounted, ref, version as vueVer, watchEffect } from 'vue';
  import { useRoute } from 'vue-router';
  
  import { useLoadingBar,version as naiveuiVer } from 'naive-ui';
  
  import { useAppStore } from '@/store/modules/app';
  import { loadingBarApiRef } from '@/router';
  import { List as routerList } from '@/router/routesList';

  import { genMeunList } from '@/router/menuList';

  import MainLayout from './layout/MainLayout.vue';


  const list = routerList.filter((item) => {
    return item.path !== '/';
  });

  export default defineComponent({
    name: 'app',
    setup() {
      const route = useRoute();
      const loadingBar = useLoadingBar();
      const appStore = useAppStore();

      const active = ref<boolean>(false);

      const refreshId = computed(() => appStore.getRefreshId);
      const menuValue = computed(() => route.path);

      const handleRefresh = () => {
        appStore.resetAllState();
      };

      watchEffect(() => {
        if (active.value) {
          appStore.setThemeName('dark');
        } else {
          appStore.setThemeName('light');
        }

        console.log(menuValue.value, 'menuValue');
      });

      onMounted(() => {
        loadingBarApiRef.value = loadingBar;
        loadingBar?.finish();
      });

      const menuOptions = genMeunList(list);
      
      return {
        vueVer,
        naiveuiVer,
        menuOptions,
        menuValue,
        active,
        refreshId,
        handleRefresh,
      };
    },
    components: { MainLayout },
  });
</script>
