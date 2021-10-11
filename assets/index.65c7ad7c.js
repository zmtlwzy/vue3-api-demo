import{_ as d}from"./index.ea82313a.js";import{g as p,m as f,r as l,at as n,N as m,w as t,a4 as g,o as x,j as s,Q as e,aq as y,au as v}from"./vendor.8b730130.js";const F=p({name:"IsProxy",setup(){const o={a:1},a=f(1),c=l(o),r=l(o);return console.log(n(o)),console.log(n(a)),console.log(n(c)),console.log(n(r)),{}}}),h=e(" \u68C0\u67E5\u5BF9\u8C61\u662F\u5426\u662F\u7531 "),P=e("reactive"),$=e(" \u6216 "),j=e("readonly"),B=e(" \u521B\u5EFA\u7684 proxy\u3002 ");function C(o,a,c,r,N,k){const _=y,u=v,i=g;return x(),m(i,{title:o.$options.name},{footer:t(()=>[s(u,{code:`
const foo = { a: 1 };
const num = ref(1);
const reactiveFoo = reactive(foo);
const readonlyFoo = reactive(foo);

console.log(isProxy(foo)); // false
console.log(isProxy(num)); // false
console.log(isProxy(reactiveFoo)); // true
console.log(isProxy(readonlyFoo)); // true
  `,language:"javascript"},null,8,["code"])]),default:t(()=>[h,s(_,null,{default:t(()=>[P]),_:1}),$,s(_,null,{default:t(()=>[j]),_:1}),B]),_:1},8,["title"])}var V=d(F,[["render",C]]);export{V as default};
