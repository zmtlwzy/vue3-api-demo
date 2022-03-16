
---
title: MarkRaw
---

<n-card title="MarkRaw" :bordered="false">
    标记一个对象，使其永远不会转换为
    <n-tag>proxy</n-tag>
    。返回对象本身。
    
  ```js
  const foo = markRaw({})
  isReactive(reactive(foo)) // false

  // 嵌套在其他响应式对象中时也可以使用
  const bar = reactive({ foo })
  isReactive(bar.foo) // false

  const foo2 = markRaw({
    nested: {},
  })

  const bar2 = reactive({
    // 虽然 foo2 被标记为原始，但 foo2.nested 不是。
    nested: foo2.nested,
  })

  foo2.nested === bar2.nested // false
```
</n-card>

