<template>
  <div class="column-layout">
    <h3>FetchDemo</h3>
    <ul v-if="todoList.length !== 0">
      <li v-for="item in todoList" :key="item.id">
        {{ item.id }} --- {{ item.title }} --- <n-checkbox v-model:checked="item.completed" />
      </li>
    </ul>
    <div v-else>loading...</div>
    <n-button type="primary" @click="update">fetch</n-button>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, toRefs, watchEffect } from 'vue';

  interface fetchDataType {
    completed: boolean;
    id: number;
    title: string;
    userId: number;
  }

  interface State {
    todoList: fetchDataType[],
    urlId: number
  }

  export default defineComponent({
    name: 'watchEffectFetch',
    setup() {
      const state = reactive<State>({
        todoList: [],
        urlId: 1,
      });
      const update = () => {
        state.urlId++;
      };
      watchEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${state.urlId}`)
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
            state.todoList = [json]
          });
      });

      return {
        ...toRefs(state),
        update,
      };
    },
  });
</script>

<style></style>
