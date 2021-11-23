<template>
  <n-card :title="$options.name">
    返回 <n-tag>reactive</n-tag> 或
    <n-tag>readonly</n-tag>
    代理的原始对象。这是一个“逃生舱”，可用于临时读取数据而无需承担代理访问/跟踪的开销，也可用于写入数据而避免触发更改。不建议保留对原始对象的持久引用。请谨慎使用。
    <template #footer>
      <n-code
        :code="`
const foo = { a: 1 };
const reactiveFoo = reactive(foo);

console.log(reactiveFoo, foo);
console.log(toRaw(reactiveFoo) === foo); // true
  `"
        language="javascript"
      />
    </template>
  </n-card>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'ToRaw',
    setup() {
      const foo = { a: 1 };
      const reactiveFoo = reactive(foo);

      console.log(reactiveFoo, foo);
      console.log(toRaw(reactiveFoo) === foo); // true

      return {};
    },
  });
</script>

<style></style>
