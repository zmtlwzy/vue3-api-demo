<template>
  <div id="layout">
    <h4>running version: {{ version }}</h4>
    <div id="nav">
      <router-link :to="item.path" v-for="(item, index) in list" :key="index">
        {{ item.component }}
        <span>{{ index === list.length - 1 ? "" : " | " }}</span>
      </router-link>
    </div>
    <main id="main">
      <router-view />
    </main>
    <footer>footer</footer>
  </div>
</template>

<script>
import { List } from "./config/routerList";
import { version } from "vue";
export default {
  data() {
    return {
      list: List,
      version,
    };
  },
};
</script>

<style lang="scss" scoped>
main {
  flex: auto;
}

footer {
  height: 3rem;
  background-color: #ccc;
}

#layout {
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
