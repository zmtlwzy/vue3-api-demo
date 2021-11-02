import{_ as c}from"./index.5bbb8b7e.js";import{e as r,aq as d,au as t,T as l,w as o,a2 as i,o as p,j as s,P as n,ao as f,as as m}from"./vendor.589c209f.js";const b=r({name:"IsReadonly",setup(){const e=d({foo:1,nested:{bar:2}});return console.log(t(e)),console.log(t(e.nested.bar)),{}}}),g=n(" \u68C0\u67E5\u5BF9\u8C61\u662F\u5426\u662F\u7531 "),y=n("readonly"),x=n(" \u521B\u5EFA\u7684\u53EA\u8BFB\u4EE3\u7406\u3002 ");function B(e,h,E,F,$,j){const a=f,_=m,u=i;return p(),l(u,{title:e.$options.name},{footer:o(()=>[s(_,{code:`
const state = readonly({
  foo: 1,
  nested: {
    bar: 2,
  },
});

isReadonly(state); // true
isReadonly(state.nested.bar); // false
  `,language:"javascript"},null,8,["code"])]),default:o(()=>[g,s(a,null,{default:o(()=>[y]),_:1}),x]),_:1},8,["title"])}var v=c(b,[["render",B]]);export{v as default};
