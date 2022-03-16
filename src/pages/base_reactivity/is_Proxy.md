
---
title: IsProxy
---

<n-card title="IsProxy" :bordered="false">
    检查对象是否是由
    <n-tag>reactive</n-tag>
    或
    <n-tag>readonly</n-tag>
    创建的 proxy。
    
  ```js
  const foo = { a: 1 }
  const num = ref(1)
  const reactiveFoo = reactive(foo)
  const readonlyFoo = reactive(foo)

  isProxy(foo) // false
  isProxy(num) // false
  isProxy(reactiveFoo) // true
  isProxy(readonlyFoo) // true
```
</n-card>

