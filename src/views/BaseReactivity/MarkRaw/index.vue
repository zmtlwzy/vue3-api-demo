<template>
  <n-card :title="$options.name">
    标记一个对象，使其永远不会转换为
    <n-tag>proxy</n-tag>
    。返回对象本身。
    <template #footer>
      <n-code
        :code="`
const foo = markRaw({});
console.log(isReactive(reactive(foo))); // false

// 嵌套在其他响应式对象中时也可以使用
const bar = reactive({ foo });
console.log(isReactive(bar.foo)); // false

const foo2 = markRaw({
  nested: {},
});

const bar2 = reactive({
  // 虽然 foo2 被标记为原始，但 foo2.nested 不是。
  nested: foo2.nested,
});

console.log(foo2.nested === bar2.nested); // false
console.log(foo2.nested, bar2.nested);
  `"
        language="javascript"
      />
    </template>
  </n-card>
</template>

<script lang="ts">
export default defineComponent({
  name: 'MakeRaw',
  setup() {
    const foo = markRaw({});
    console.log(isReactive(reactive(foo))); // false

    // 嵌套在其他响应式对象中时也可以使用
    const bar = reactive({ foo });
    console.log(isReactive(bar.foo)); // false

    const foo2 = markRaw({
      nested: {}
    });

    const bar2 = reactive({
      // 虽然 foo2 被标记为原始，但 foo2.nested 不是。
      nested: foo2.nested
    });

    console.log(foo2.nested === bar2.nested); // false
    console.log(foo2.nested, bar2.nested);

    return {};
  }
});
</script>

<style></style>
