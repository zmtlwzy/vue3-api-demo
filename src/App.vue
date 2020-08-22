<template>
  <div id="app">
    <div id="nav">
      <router-link :to="item.path" v-for="(item, index) in list" :key="index">
        {{ item.component }}
        <span>{{ index === list.length - 1 ? "" : " | " }}</span>
      </router-link>
    </div>
    <router-view />
    <footer id="footer">footer</footer>
  </div>
</template>

<script>
import { List } from "./config/routerList";

export default {
  data() {
    return {
      list: List,
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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

.column-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  padding: 15px;
  border: 1px dashed grey;
}

ul,
li {
  list-style: none;
}

#footer {
  position: fixed;
  bottom: 5vh;
  left:50%;
}
</style>
