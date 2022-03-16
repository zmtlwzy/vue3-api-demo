
---
title: IsReadonly
---

<n-card title="IsReadonly" :bordered="false">
    检查对象是否是由
    <n-tag>readonly</n-tag>
    创建的只读代理。
    
  ```js
  const state = readonly({
    foo: 1,
    nested: {
      bar: 2,
    },
  })

  isReadonly(state) // true
  isReadonly(state.nested.bar) // false
```
</n-card>

