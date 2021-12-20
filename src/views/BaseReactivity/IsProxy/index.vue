<template>
  <n-card :title="$options.name">
    检查对象是否是由
    <n-tag>reactive</n-tag>
    或
    <n-tag>readonly</n-tag>
    创建的 proxy。
    <template #footer>
      <n-code
        :code="`
const foo = { a: 1 };
const num = ref(1);
const reactiveFoo = reactive(foo);
const readonlyFoo = reactive(foo);

console.log(isProxy(foo)); // false
console.log(isProxy(num)); // false
console.log(isProxy(reactiveFoo)); // true
console.log(isProxy(readonlyFoo)); // true
  `"
        language="javascript"
      />
    </template>
  </n-card>
</template>

<script lang="ts">
export default defineComponent({
  name: 'IsProxy',
  setup() {
    const foo = { a: 1 };
    const num = ref(1);
    const reactiveFoo = reactive(foo);
    const readonlyFoo = reactive(foo);

    console.log(isProxy(foo)); // false
    console.log(isProxy(num)); // false
    console.log(isProxy(reactiveFoo)); // true
    console.log(isProxy(readonlyFoo)); // true

    return {};
  }
});
</script>

<style></style>
