import{_ as i}from"./index.2c6c92ad.js";import{e as f,m as d,am as g,n as V,O as $,w as o,a2 as v,o as B,j as u,Q as C,P as R,an as h,ao as w,a3 as x}from"./vendor.b337872e.js";function b(e,n=500){let t;return g((a,s)=>({get(){return a(),e},set(c){clearTimeout(t),t=setTimeout(()=>{e=c,s()},n)}}))}const j=f({name:"CustomRefDebounced",setup(){const e=d("hello"),n=b("hello");return V(e,t=>{n.value=t}),{refValue:e,customRefValue:n}}});function D(e,n,t,a,s,c){const r=h,l=w,_=x,p=v;return B(),$(p,{title:e.$options.name},{default:o(()=>[u(_,{vertical:""},{default:o(()=>[u(r,{type:"input",value:e.refValue,"onUpdate:value":n[0]||(n[0]=m=>e.refValue=m),placeholder:"\u505C\u6B62\u8F93\u5165500ms\u540E,\u8F93\u5165\u503C\u5C06\u5728\u4E0B\u65B9\u66F4\u65B0",class:"max-w-1/2"},null,8,["value"]),u(l,{class:"mt-5"},{default:o(()=>[C(R(e.customRefValue),1)]),_:1})]),_:1})]),_:1},8,["title"])}var k=i(j,[["render",D]]);export{k as default};
