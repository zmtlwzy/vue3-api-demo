import{_ as i}from"./index.0048b2d6.js";import{e as d,m as f,am as g,n as V,T as $,w as o,a2 as v,o as B,j as u,P as C,O as R,an as h,ao as w,a1 as x}from"./vendor.2d6a9d99.js";function T(e,n=500){let t;return g((a,s)=>({get(){return a(),e},set(r){clearTimeout(t),t=setTimeout(()=>{e=r,s()},n)}}))}const b=d({name:"CustomRefDebounced",setup(){const e=f("hello"),n=T("hello");return V(e,t=>{n.value=t}),{refValue:e,customRefValue:n}}});function j(e,n,t,a,s,r){const l=h,_=w,c=x,p=v;return B(),$(p,{title:e.$options.name},{default:o(()=>[u(c,{vertical:""},{default:o(()=>[u(l,{type:"input",value:e.refValue,"onUpdate:value":n[0]||(n[0]=m=>e.refValue=m),placeholder:"\u505C\u6B62\u8F93\u5165500ms\u540E,\u8F93\u5165\u503C\u5C06\u5728\u4E0B\u65B9\u66F4\u65B0",class:"max-w-1/2"},null,8,["value"]),u(_,{class:"mt-5"},{default:o(()=>[C(R(e.customRefValue),1)]),_:1})]),_:1})]),_:1},8,["title"])}var k=i(b,[["render",j]]);export{k as default};