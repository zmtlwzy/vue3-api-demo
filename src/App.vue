<template>
  <div id="layout" class="text-black text-center flex min-h-screen">
    <nav id="nav" class="font-bold text-md flex border-r border-gray-500 flex-col">
      <h2 class="font-bold text-3xl py-5 border-b border-black">API TEST</h2>
      <router-link
        :to="item.path"
        v-for="(item, index) in list"
        :key="index"
        custom
        v-slot="{ navigate, href, isActive }"
      >
        <a
          :href="href"
          @click="navigate"
          w:hover="bg-gray-200"
          class="px-3"
          :class="[isActive ? '!bg-primary' : '']"
        >
          {{ item.component }}
        </a>
      </router-link>
    </nav>
    <div class="content">
      <div id="teleport-container"></div>
      <main>
        <router-view :key="refreshId" />
      </main>
      <footer class="column-layout mb-0">
        <h4 :style="{ textAlign: 'center' }">vue version: {{ version }} (footer)</h4>
        <button class="mt-3 btn" @click="refreshId++">refresh</button>
      </footer>
    </div>
  </div>
</template>

<script>
  import { List as routerList } from '@/router/routerList';
  import { version } from 'vue';
  export default {
    data() {
      return {
        version,
        refreshId: 0,
      };
    },
    computed: {
      list() {
        return routerList.filter((item) => {
          return !Object.keys(item).includes('redirect');
        });
      },
    },
  };
</script>

<style lang="less" scoped>
  #layout {
    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      main {
        flex: 1;
        padding: 2rem;
      }
      footer {
        flex-basis: 3rem;
        background-color: #ccc;
      }
    }
  }
</style>
