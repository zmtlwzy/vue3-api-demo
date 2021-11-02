import{_ as d}from"./index.5bbb8b7e.js";import{e as p,m as f,r as l,ar as n,T as m,w as s,a2 as g,o as x,j as t,P as e,ao as y,as as v}from"./vendor.589c209f.js";const F=p({name:"IsProxy",setup(){const o={a:1},c=f(1),a=l(o),r=l(o);return console.log(n(o)),console.log(n(c)),console.log(n(a)),console.log(n(r)),{}}}),h=e(" \u68C0\u67E5\u5BF9\u8C61\u662F\u5426\u662F\u7531 "),P=e("reactive"),$=e(" \u6216 "),b=e("readonly"),j=e(" \u521B\u5EFA\u7684 proxy\u3002 ");function B(o,c,a,r,C,k){const _=y,u=v,i=g;return x(),m(i,{title:o.$options.name},{footer:s(()=>[t(u,{code:`
const foo = { a: 1 };
const num = ref(1);
const reactiveFoo = reactive(foo);
const readonlyFoo = reactive(foo);

console.log(isProxy(foo)); // false
console.log(isProxy(num)); // false
console.log(isProxy(reactiveFoo)); // true
console.log(isProxy(readonlyFoo)); // true
  `,language:"javascript"},null,8,["code"])]),default:s(()=>[h,t(_,null,{default:s(()=>[P]),_:1}),$,t(_,null,{default:s(()=>[b]),_:1}),j]),_:1},8,["title"])}var N=d(F,[["render",B]]);export{N as default};
