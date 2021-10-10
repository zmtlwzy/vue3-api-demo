import{_}from"./index.bae27874.js";import{g as c,aw as r,as as F,N as d,w as t,a2 as i,o as l,j as o,Q as u,f as p,an as E,ar as C}from"./vendor.4ec7e586.js";const f=c({name:"ShallowReactive",setup(){const e=r({foo:1,nested:{bar:2}});return e.foo++,console.log(F(e.nested)),e.nested.bar++,{}}}),D=u(" \u521B\u5EFA\u4E00\u4E2A\u54CD\u5E94\u5F0F\u4EE3\u7406\uFF0C\u5B83\u8DDF\u8E2A\u5176\u81EA\u8EAB property \u7684\u54CD\u5E94\u6027\uFF0C\u4F46\u4E0D\u6267\u884C\u5D4C\u5957\u5BF9\u8C61\u7684\u6DF1\u5C42\u54CD\u5E94\u5F0F\u8F6C\u6362 (\u66B4\u9732\u539F\u59CB\u503C)\u3002"),m=p("br",null,null,-1),B=u(" \u4E0E "),h=u("reactive"),A=u(" \u4E0D\u540C\uFF0C\u4EFB\u4F55\u4F7F\u7528 "),v=u("ref"),g=u(" \u7684 property \u90FD\u4E0D\u4F1A\u88AB\u4EE3\u7406\u81EA\u52A8\u89E3\u5305\u3002 ");function b(e,w,x,R,$,j){const s=E,n=C,a=i;return l(),d(a,{title:e.$options.name},{footer:t(()=>[o(n,{code:`
const state = shallowReactive({
  foo: 1,
  nested: {
    bar: 2,
  },
});

// \u6539\u53D8 state \u672C\u8EAB\u7684\u6027\u8D28\u662F\u54CD\u5E94\u5F0F\u7684
state.foo++;
// ...\u4F46\u662F\u4E0D\u8F6C\u6362\u5D4C\u5957\u5BF9\u8C61
isReactive(state.nested); // false
state.nested.bar++; // \u975E\u54CD\u5E94\u5F0F
  `,language:"javascript"},null,8,["code"])]),default:t(()=>[D,m,B,o(s,null,{default:t(()=>[h]),_:1}),A,o(s,null,{default:t(()=>[v]),_:1}),g]),_:1},8,["title"])}var k=_(f,[["render",b]]);export{k as default};
