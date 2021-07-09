import{e,a9 as t,a5 as a,o as n,h as s,j as o,i as l,G as r,$ as d,a4 as f,R as u}from"./vendor.a3123f78.js";var c=e({name:"ShallowReactive",setup(){const e=t({foo:1,nested:{bar:2}});return e.foo++,console.log(a(e.nested)),e.nested.bar++,{}}});const i=r(" 创建一个响应式代理，它跟踪其自身 property 的响应性，但不执行嵌套对象的深层响应式转换 (暴露原始值)。"),p=l("br",null,null,-1),v=r(" 与 "),b=r("reactive"),m=r(" 不同，任何使用 "),R=r("ref"),g=r(" 的 property 都不会被代理自动解包。 ");c.render=function(e,t,a,r,c,h){const j=d,_=f,w=u;return n(),s(w,{title:e.$options.name},{footer:o((()=>[l(_,{code:"\nconst state = shallowReactive({\n  foo: 1,\n  nested: {\n    bar: 2,\n  },\n});\n\n// 改变 state 本身的性质是响应式的\nstate.foo++;\n// ...但是不转换嵌套对象\nisReactive(state.nested); // false\nstate.nested.bar++; // 非响应式\n  ",language:"javascript"},null,8,["code"])])),default:o((()=>[i,p,v,l(j,null,{default:o((()=>[b])),_:1}),m,l(j,null,{default:o((()=>[R])),_:1}),g])),_:1},8,["title"])};export default c;