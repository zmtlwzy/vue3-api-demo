import{e,a2 as a,a6 as n,o as s,h as o,j as t,i as l,G as r,$ as d,a4 as u,R as c}from"./vendor.a3123f78.js";var f=e({name:"IsReadonly",setup(){const e=a({foo:1,nested:{bar:2}});return console.log(n(e)),console.log(n(e.nested.bar)),{}}});const i=r(" 检查对象是否是由 "),p=r("readonly"),y=r(" 创建的只读代理。 ");f.render=function(e,a,n,r,f,b){const g=d,m=u,R=c;return s(),o(R,{title:e.$options.name},{footer:t((()=>[l(m,{code:"\nconst state = readonly({\n  foo: 1,\n  nested: {\n    bar: 2,\n  },\n});\n\nisReadonly(state); // true\nisReadonly(state.nested.bar); // false\n  ",language:"javascript"},null,8,["code"])])),default:t((()=>[i,l(g,null,{default:t((()=>[p])),_:1}),y])),_:1},8,["title"])};export default f;