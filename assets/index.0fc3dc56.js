import{e as a,ao as e,as as n,o as s,L as o,n as t,m as l,O as r,am as d,aq as u,$ as c}from"./vendor.5b08720f.js";var f=a({name:"IsReadonly",setup(){const a=e({foo:1,nested:{bar:2}});return console.log(n(a)),console.log(n(a.nested.bar)),{}}});const i=r(" 检查对象是否是由 "),m=r("readonly"),b=r(" 创建的只读代理。 ");f.render=function(a,e,n,r,f,p){const y=d,g=u,v=c;return s(),o(v,{title:a.$options.name},{footer:t((()=>[l(g,{code:"\nconst state = readonly({\n  foo: 1,\n  nested: {\n    bar: 2,\n  },\n});\n\nisReadonly(state); // true\nisReadonly(state.nested.bar); // false\n  ",language:"javascript"},null,8,["code"])])),default:t((()=>[i,l(y,null,{default:t((()=>[m])),_:1}),b])),_:1},8,["title"])};export{f as default};
