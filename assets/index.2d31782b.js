import{_ as f}from"./index.bae27874.js";import{g as p,av as c,as as r,r as s,N as F,w as t,a2 as m,o as g,j as _,Q as u,an as E,ar as C}from"./vendor.4ec7e586.js";const B=p({name:"MakeRaw",setup(){const e=c({});console.log(r(s(e)));const a=s({foo:e});console.log(r(a.foo));const o=c({nested:{}}),n=s({nested:o.nested});return console.log(o.nested===n.nested),console.log(o.nested,n.nested),{}}}),v=u(" \u6807\u8BB0\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u4F7F\u5176\u6C38\u8FDC\u4E0D\u4F1A\u8F6C\u6362\u4E3A "),D=u("proxy"),b=u("\u3002\u8FD4\u56DE\u5BF9\u8C61\u672C\u8EAB\u3002 ");function x(e,a,o,n,R,k){const d=E,l=C,i=m;return g(),F(i,{title:e.$options.name},{footer:t(()=>[_(l,{code:`
const foo = markRaw({});
console.log(isReactive(reactive(foo))); // false

// \u5D4C\u5957\u5728\u5176\u4ED6\u54CD\u5E94\u5F0F\u5BF9\u8C61\u4E2D\u65F6\u4E5F\u53EF\u4EE5\u4F7F\u7528
const bar = reactive({ foo });
console.log(isReactive(bar.foo)); // false

const foo2 = markRaw({
  nested: {},
});

const bar2 = reactive({
  // \u867D\u7136 foo2 \u88AB\u6807\u8BB0\u4E3A\u539F\u59CB\uFF0C\u4F46 foo2.nested \u4E0D\u662F\u3002
  nested: foo2.nested,
});

console.log(foo2.nested === bar2.nested); // false
console.log(foo2.nested, bar2.nested);
  `,language:"javascript"},null,8,["code"])]),default:t(()=>[v,_(d,null,{default:t(()=>[D]),_:1}),b]),_:1},8,["title"])}var h=f(B,[["render",x]]);export{h as default};
