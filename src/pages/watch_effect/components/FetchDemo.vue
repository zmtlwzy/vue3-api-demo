<template>
  <n-card :title="$options.name">
    <n-space vertical align="center">
      <ul v-if="todoList.length !== 0" class="mb-5">
        <li v-for="item in todoList" :key="item.id">
          {{ item.id }} --- {{ item.title }} ---
          <n-checkbox v-model:checked="item.completed" />
        </li>
      </ul>
      <div v-else class="flex flex-row items-center mb-5">
        <n-skeleton text height="10px" width="15px" />
        <n-skeleton class="ml-3" text width="120px" height="10px" />
        <n-skeleton class="ml-3" circle height="15px" width="15px" />
      </div>

      <n-button type="primary" @click="update">
        fetch
      </n-button>
    </n-space>
  </n-card>
</template>

<script lang="ts">
interface fetchDataType {
  completed: boolean
  id: number
  title: string
  userId: number
}

interface State {
  todoList: fetchDataType[]
  urlId: number
  isFirstFetch: boolean
}

export default defineComponent({
  name: 'WatchEffectFetch',
  setup() {
    const state = reactive<State>({
      todoList: [],
      urlId: 1,
      isFirstFetch: true,
    })
    const update = () => {
      state.urlId++
    }
    watchEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/todos/${state.urlId}`)
        .then(response => response.json())
        .then((json) => {
          console.log(json)
          setTimeout(
            () => {
              state.todoList = [json]
              state.isFirstFetch = false
            },
            state.isFirstFetch ? 1500 : 0,
          )
        })
    })

    return {
      ...toRefs(state),
      update,
    }
  },
})
</script>
