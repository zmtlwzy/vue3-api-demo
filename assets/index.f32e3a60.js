import{_}from"./index.d3d73924.js";import{e as d,ay as r,au as c,O as l,w as o,a2 as p,o as i,j as t,Q as u,i as F,ao as E,as as f}from"./vendor.e3cf30dd.js";const B=d({name:"ShallowReadonly",setup(){const e=r({foo:1,nested:{bar:2}});return e.foo++,c(e.nested),e.nested.bar++,{}}}),C=u(" \u521B\u5EFA\u4E00\u4E2A proxy\uFF0C\u4F7F\u5176\u81EA\u8EAB\u7684 property \u4E3A\u53EA\u8BFB\uFF0C\u4F46\u4E0D\u6267\u884C\u5D4C\u5957\u5BF9\u8C61\u7684\u6DF1\u5EA6\u53EA\u8BFB\u8F6C\u6362 (\u66B4\u9732\u539F\u59CB\u503C)\u3002 "),m=F("br",null,null,-1),A=u(" \u4E0E "),h=u("readonly"),y=u(" \u4E0D\u540C\uFF0C\u4EFB\u4F55\u4F7F\u7528 "),D=u("ref"),x=u(" \u7684 property \u90FD\u4E0D\u4F1A\u88AB\u4EE3\u7406\u81EA\u52A8\u89E3\u5305\u3002 ");function g(e,b,w,R,$,j){const n=E,s=f,a=p;return i(),l(a,{title:e.$options.name},{footer:o(()=>[t(s,{code:`
const state = shallowReadonly({
  foo: 1,
  nested: {
    bar: 2,
  },
});

// \u6539\u53D8 state \u672C\u8EAB\u7684 property \u5C06\u5931\u8D25
state.foo++;
// ...\u4F46\u9002\u7528\u4E8E\u5D4C\u5957\u5BF9\u8C61
isReadonly(state.nested); // false
state.nested.bar++; // \u9002\u7528
  `,language:"javascript"},null,8,["code"])]),default:o(()=>[C,m,A,t(n,null,{default:o(()=>[h]),_:1}),y,t(n,null,{default:o(()=>[D]),_:1}),x]),_:1},8,["title"])}var V=_(B,[["render",g]]);export{V as default};
