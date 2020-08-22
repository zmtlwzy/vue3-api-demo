<template>
  <ul v-if="todoList.length !== 0" class="column-layout">
    <li v-for="item in todoList" :key="item.id">
      {{ item.id }}---{{ item.title }}---<input
        type="checkbox"
        :checked="item.completed"
      />
    </li>
    <button @click="update">fetch</button>
  </ul>
  <div v-else>loading...</div>
</template>

<script>
import { reactive, toRefs, watchEffect } from "vue";

export default {
  name: "WatchEffect",
  setup() {
    const state = reactive({
      todoList: [],
      urlId: 1,
    });
    const update = () => {
      state.urlId++;
    };
    watchEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/todos/${state.urlId}`)
        .then((response) => response.json())
        .then((json) => (state.todoList = [json]));
    });

    return {
      ...toRefs(state),
      update,
    };
  },
};
</script>

<style></style>
