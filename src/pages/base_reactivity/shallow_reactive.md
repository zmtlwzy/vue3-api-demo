---
title: ShallowReactive
---

<n-card title="ShallowReactive" :bordered="false">
     创建一个响应式代理，它跟踪其自身 property 的响应性，但不执行嵌套对象的深层响应式转换 (暴露原始值)。
    <br />
    与
    <n-tag>reactive</n-tag>
    不同，任何使用
    <n-tag>ref</n-tag>
    的 property 都不会被代理自动解包。
    
  ```js
  const state = shallowReactive({
    foo: 1,
    nested: {
      bar: 2,
    },
  })
  
  // 改变 state 本身的性质是响应式的
  state.foo++
  // ...但是不转换嵌套对象
  isReactive(state.nested) // false
  state.nested.bar++// 非响应式
```
</n-card>

