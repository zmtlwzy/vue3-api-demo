<template>
  <div id="layout" class="text-hex-2c3e50 text-center flex min-h-screen">
    <nav id="nav" class="font-bold text-md flex border-r border-gray-500 flex-col">
      <h2 class="font-bold text-3xl py-5 border-b border-black">API TEST</h2>
      <router-link
        :to="item.path"
        v-for="(item, index) in list"
        :key="index"
        custom
        v-slot="{ navigate, href, isActive }"
      >
        <a :href="href" @click="navigate" w:hover="bg-gray-200" class="px-3" :class="[isActive ? 'bg-primary' : '']">
          {{ item.component }}
        </a>
      </router-link>
    </nav>
    <div class="content">
      <div id="teleport-container"></div>
      <main>
        <router-view />
      </main>
      <footer>
        <h4 :style="{ textAlign: 'center' }">vue version: {{ version }} (footer)</h4>
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
