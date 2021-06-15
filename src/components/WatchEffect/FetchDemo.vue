<template>
  <div class="column-layout">
    <h3>FetchDemo</h3>
    <ul v-if="todoList.length !== 0">
      <li v-for="item in todoList" :key="item.id">
        {{ item.id }}---{{ item.title }}---<input
          type="checkbox"
          :checked="item.completed"
        />
      </li>
      <button class="btn" @click="update">fetch</button>
    </ul>
    <div v-else>loading...</div>
  </div>
</template>

<script>
import { reactive, toRefs, watchEffect } from "vue";

export default {
  name: "watchEffectFetch",
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
