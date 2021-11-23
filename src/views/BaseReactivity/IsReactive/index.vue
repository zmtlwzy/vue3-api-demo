<template>
  <n-card :title="$options.name">
    检查对象是否是由 <n-tag>reactive</n-tag> 创建的响应式代理。
    <template #footer>
      <n-code
        :code="`
const state = reactive({
  name: 'John',
});
console.log(isReactive(state)); // -> true

// 从普通对象创建的只读 proxy
const plain = readonly({
  name: 'Mary',
});
console.log(isReactive(plain)); // -> false

// 从响应式 proxy 创建的只读 proxy
const stateCopy = readonly(state);
console.log(isReactive(stateCopy)); // -> true
  `"
        language="javascript"
      />
    </template>
  </n-card>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'IsReactive',
    setup() {
      const state = reactive({
        name: 'John',
      });
      console.log(isReactive(state)); // -> true

      // 从普通对象创建的只读 proxy
      const plain = readonly({
        name: 'Mary',
      });
      console.log(isReactive(plain)); // -> false

      // 从响应式 proxy 创建的只读 proxy
      const stateCopy = readonly(state);
      console.log(isReactive(stateCopy)); // -> true
      return {};
    },
  });
</script>

<style></style>
