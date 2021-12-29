import{_ as l}from"./index.c876aca4.js";import{e as p,r as d,at as o,aq as u,O as m,w as t,a2 as E,o as F,j as c,Q as n,ao as f,as as g}from"./vendor.01d04c5a.js";const C=p({name:"IsReactive",setup(){const e=d({name:"John"});console.log(o(e));const a=u({name:"Mary"});console.log(o(a));const s=u(e);return console.log(o(s)),{}}}),v=n(" \u68C0\u67E5\u5BF9\u8C61\u662F\u5426\u662F\u7531 "),y=n("reactive"),B=n(" \u521B\u5EFA\u7684\u54CD\u5E94\u5F0F\u4EE3\u7406\u3002 ");function x(e,a,s,h,A,R){const r=f,_=g,i=E;return F(),m(i,{title:e.$options.name},{footer:t(()=>[c(_,{code:`
const state = reactive({
  name: 'John',
});
console.log(isReactive(state)); // -> true

// \u4ECE\u666E\u901A\u5BF9\u8C61\u521B\u5EFA\u7684\u53EA\u8BFB proxy
const plain = readonly({
  name: 'Mary',
});
console.log(isReactive(plain)); // -> false

// \u4ECE\u54CD\u5E94\u5F0F proxy \u521B\u5EFA\u7684\u53EA\u8BFB proxy
const stateCopy = readonly(state);
console.log(isReactive(stateCopy)); // -> true
  `,language:"javascript"},null,8,["code"])]),default:t(()=>[v,c(r,null,{default:t(()=>[y]),_:1}),B]),_:1},8,["title"])}var k=l(C,[["render",x]]);export{k as default};
