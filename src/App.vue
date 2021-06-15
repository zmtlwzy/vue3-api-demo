<template>
  <div id="layout">
    <nav id="nav">
      <h2>API TEST</h2>
      <router-link :to="item.path" v-for="(item, index) in list" :key="index">
        {{ item.component }}
      </router-link>
    </nav>
    <div class="content">
      <div id="teleport-container"></div>
      <main>
        <router-view />
      </main>
      <footer>
        <h4 :style="{ textAlign: 'center' }">
          vue version: {{ version }} (footer)
        </h4>
      </footer>
    </div>
  </div>
</template>

<script>
import { List as routerList } from "./router/routerList";
import { version } from "vue";
export default {
  data() {
    return {
      version,
    };
  },
  computed: {
    list() {
      return routerList.filter((item) => {
        return !Object.keys(item).includes("redirect");
      });
    },
  },
};
</script>

<style lang="less" scoped>
#layout {
  text-align: center;
  color: #2c3e50;
  display: flex;
  min-height: 100vh;

  #nav {
    display: flex;
    flex-direction: column;
    border-right: 1px solid;
    a {
      font-weight: bold;
      color: #2c3e50;
      padding: 5px;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    main {
      flex: 1;
      padding:2rem;
    }
    footer {
      flex-basis: 3rem;
      background-color: #ccc;
    }
  }
}
</style>
