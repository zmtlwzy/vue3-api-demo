import{g as o,l as e,r as n,ar as a,o as s,L as l,n as r,m as t,O as c,ao as u,as as f,a0 as i}from"./vendor.173cf73b.js";var d=o({name:"IsProxy",setup(){const o={a:1},s=e(1),l=n(o),r=n(o);return console.log(a(o)),console.log(a(s)),console.log(a(l)),console.log(a(r)),{}}});const g=c(" 检查对象是否是由 "),y=c("reactive"),v=c(" 或 "),m=c("readonly"),x=c(" 创建的 proxy。 ");d.render=function(o,e,n,a,c,d){const p=u,P=f,F=i;return s(),l(F,{title:o.$options.name},{footer:r((()=>[t(P,{code:"\nconst foo = { a: 1 };\nconst num = ref(1);\nconst reactiveFoo = reactive(foo);\nconst readonlyFoo = reactive(foo);\n\nconsole.log(isProxy(foo)); // false\nconsole.log(isProxy(num)); // false\nconsole.log(isProxy(reactiveFoo)); // true\nconsole.log(isProxy(readonlyFoo)); // true\n  ",language:"javascript"},null,8,["code"])])),default:r((()=>[g,t(p,null,{default:r((()=>[y])),_:1}),v,t(p,null,{default:r((()=>[m])),_:1}),x])),_:1},8,["title"])};export{d as default};
