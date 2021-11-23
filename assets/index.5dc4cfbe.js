import{_}from"./index.0048b2d6.js";import{e as F,r,av as i,T as l,w as e,a2 as E,o as d,j as n,P as o,ao as p,as as f}from"./vendor.2d6a9d99.js";const m=F({name:"ToRaw",setup(){const u={a:1},t=r(u);return console.log(t,u),console.log(i(t)===u),{}}}),B=o(" \u8FD4\u56DE "),C=o("reactive"),D=o(" \u6216 "),v=o("readonly"),g=o(" \u4EE3\u7406\u7684\u539F\u59CB\u5BF9\u8C61\u3002\u8FD9\u662F\u4E00\u4E2A\u201C\u9003\u751F\u8231\u201D\uFF0C\u53EF\u7528\u4E8E\u4E34\u65F6\u8BFB\u53D6\u6570\u636E\u800C\u65E0\u9700\u627F\u62C5\u4EE3\u7406\u8BBF\u95EE/\u8DDF\u8E2A\u7684\u5F00\u9500\uFF0C\u4E5F\u53EF\u7528\u4E8E\u5199\u5165\u6570\u636E\u800C\u907F\u514D\u89E6\u53D1\u66F4\u6539\u3002\u4E0D\u5EFA\u8BAE\u4FDD\u7559\u5BF9\u539F\u59CB\u5BF9\u8C61\u7684\u6301\u4E45\u5F15\u7528\u3002\u8BF7\u8C28\u614E\u4F7F\u7528\u3002 ");function h(u,t,x,w,$,j){const a=p,s=f,c=E;return d(),l(c,{title:u.$options.name},{footer:e(()=>[n(s,{code:`
const foo = { a: 1 };
const reactiveFoo = reactive(foo);

console.log(reactiveFoo, foo);
console.log(toRaw(reactiveFoo) === foo); // true
  `,language:"javascript"},null,8,["code"])]),default:e(()=>[B,n(a,null,{default:e(()=>[C]),_:1}),D,n(a,null,{default:e(()=>[v]),_:1}),g]),_:1},8,["title"])}var T=_(m,[["render",h]]);export{T as default};
