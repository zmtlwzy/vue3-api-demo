
---
title: IsReactive
---

<n-card title="IsReactive" :bordered="false">
    检查对象是否是由
    <n-tag>reactive</n-tag>
    创建的响应式代理。
    
  ```js
  const state = reactive({
    name: 'John',
  })
  isReactive(state) // -> true

  // 从普通对象创建的只读 proxy
  const plain = readonly({
    name: 'Mary',
  })
  isReactive(plain) // -> false

  // 从响应式 proxy 创建的只读 proxy
  const stateCopy = readonly(state)
  isReactive(stateCopy) // -> true
```
</n-card>

