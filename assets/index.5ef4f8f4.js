import{_ as i}from"./index.5a1be2a2.js";import{g as f,m as d,ao as g,n as V,N as $,w as o,a4 as v,o as B,j as a,Q as C,P as R,ap as b,aq as h,a3 as w}from"./vendor.a9042fba.js";function x(e,n=500){let t;return g((u,s)=>({get(){return u(),e},set(r){clearTimeout(t),t=setTimeout(()=>{e=r,s()},n)}}))}const j=f({name:"CustomRef_debounced",setup(){const e=d("hello"),n=x("hello");return V(e,t=>{n.value=t}),{refValue:e,customRefValue:n}}});function F(e,n,t,u,s,r){const _=b,l=h,c=w,p=v;return B(),$(p,{title:e.$options.name},{default:o(()=>[a(c,{vertical:""},{default:o(()=>[a(_,{type:"input",value:e.refValue,"onUpdate:value":n[0]||(n[0]=m=>e.refValue=m),placeholder:"\u505C\u6B62\u8F93\u5165500ms\u540E,\u8F93\u5165\u503C\u5C06\u5728\u4E0B\u65B9\u66F4\u65B0",class:"max-w-1/2"},null,8,["value"]),a(l,{class:"mt-5"},{default:o(()=>[C(R(e.customRefValue),1)]),_:1})]),_:1})]),_:1},8,["title"])}var k=i(j,[["render",F]]);export{k as default};
