import{_ as u}from"./index.bae27874.js";import{g as r,ap as d,at as t,N as l,w as o,a2 as p,o as i,j as a,Q as n,an as f,ar as m}from"./vendor.4ec7e586.js";const g=r({name:"IsReadonly",setup(){const e=d({foo:1,nested:{bar:2}});return console.log(t(e)),console.log(t(e.nested.bar)),{}}}),y=n(" \u68C0\u67E5\u5BF9\u8C61\u662F\u5426\u662F\u7531 "),x=n("readonly"),B=n(" \u521B\u5EFA\u7684\u53EA\u8BFB\u4EE3\u7406\u3002 ");function b(e,h,E,F,$,j){const s=f,_=m,c=p;return i(),l(c,{title:e.$options.name},{footer:o(()=>[a(_,{code:`
const state = readonly({
  foo: 1,
  nested: {
    bar: 2,
  },
});

isReadonly(state); // true
isReadonly(state.nested.bar); // false
  `,language:"javascript"},null,8,["code"])]),default:o(()=>[y,a(s,null,{default:o(()=>[x]),_:1}),B]),_:1},8,["title"])}var v=u(g,[["render",b]]);export{v as default};
