<template>
  <n-card :title="$options.name">
    创建一个 proxy，使其自身的 property 为只读，但不执行嵌套对象的深度只读转换 (暴露原始值)。<br />
    与 <n-tag>readonly</n-tag> 不同，任何使用 <n-tag>ref</n-tag> 的 property 都不会被代理自动解包。
    <template #footer>
      <n-code
        :code="`
const state = shallowReadonly({
  foo: 1,
  nested: {
    bar: 2,
  },
});

// 改变 state 本身的 property 将失败
state.foo++;
// ...但适用于嵌套对象
isReadonly(state.nested); // false
state.nested.bar++; // 适用
  `"
        language="javascript"
      />
    </template>
  </n-card>
</template>

<script lang="ts">
  import { defineComponent, shallowReadonly, isReadonly } from 'vue';
  export default defineComponent({
    name: 'ShallowReadonly',
    setup() {
      const state = shallowReadonly({
        foo: 1,
        nested: {
          bar: 2,
        },
      });

      // 改变 state 本身的 property 将失败
      state.foo++;
      // ...但适用于嵌套对象
      isReadonly(state.nested); // false
      state.nested.bar++; // 适用

      return {};
    },
  });
</script>

<style></style>
