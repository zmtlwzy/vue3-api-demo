import{e as o,r as e,a7 as a,o as n,h as t,j as s,i as l,G as r,$ as c,a4 as u,R as f}from"./vendor.a3123f78.js";var i=o({name:"ToRaw",setup(){const o={a:1},n=e(o);return console.log(n,o),console.log(a(n)===o),{}}});const d=r(" 返回 "),v=r("reactive"),g=r(" 或 "),p=r("readonly"),m=r(" 代理的原始对象。这是一个“逃生舱”，可用于临时读取数据而无需承担代理访问/跟踪的开销，也可用于写入数据而避免触发更改。不建议保留对原始对象的持久引用。请谨慎使用。 ");i.render=function(o,e,a,r,i,j){const F=c,R=u,_=f;return n(),t(_,{title:o.$options.name},{footer:s((()=>[l(R,{code:"\nconst foo = { a: 1 };\nconst reactiveFoo = reactive(foo);\n\nconsole.log(reactiveFoo, foo);\nconsole.log(toRaw(reactiveFoo) === foo); // true\n  ",language:"javascript"},null,8,["code"])])),default:s((()=>[d,l(F,null,{default:s((()=>[v])),_:1}),g,l(F,null,{default:s((()=>[p])),_:1}),m])),_:1},8,["title"])};export default i;