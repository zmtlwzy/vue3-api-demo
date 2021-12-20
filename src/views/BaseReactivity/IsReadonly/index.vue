<template>
  <n-card :title="$options.name">
    检查对象是否是由
    <n-tag>readonly</n-tag>
    创建的只读代理。
    <template #footer>
      <n-code
        :code="`
const state = readonly({
  foo: 1,
  nested: {
    bar: 2,
  },
});

isReadonly(state); // true
isReadonly(state.nested.bar); // false
  `"
        language="javascript"
      />
    </template>
  </n-card>
</template>

<script lang="ts">
export default defineComponent({
  name: 'IsReadonly',
  setup() {
    const state = readonly({
      foo: 1,
      nested: {
        bar: 2
      }
    });

    console.log(isReadonly(state)); // true
    console.log(isReadonly(state.nested.bar)); // false

    return {};
  }
});
</script>
