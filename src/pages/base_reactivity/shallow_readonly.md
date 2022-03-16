---
title: ShallowReadonly
---

<n-card title="ShallowReadonly" :bordered="false">
     创建一个 proxy，使其自身的 property 为只读，但不执行嵌套对象的深度只读转换 (暴露原始值)。
    <br />
    与
    <n-tag>readonly</n-tag>
    不同，任何使用
    <n-tag>ref</n-tag>
    的 property 都不会被代理自动解包。
    
  ```js
  const state = shallowReadonly({
    foo: 1,
    nested: {
      bar: 2,
    },
  })
  
  // 改变 state 本身的 property 将失败
  statefoo++
  // ...但适用于嵌套对象
  isReadonly(state.nested) // false
  state.nested.bar++ // 适用
```
</n-card>

