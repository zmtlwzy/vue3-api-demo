import{_ as m}from"./DesTable.c77b56b3.js";import{e as f,r as l,m as d,j as n,a3 as v,Q as o,R as x,a2 as $,A as b,O as g,o as h}from"./vendor.01d04c5a.js";import{_ as j}from"./index.c876aca4.js";var u=f({setup(r,{slots:e}){const a=l({a:1,b:1}),t=d(),s=()=>n("span",{style:{margin:"0 5px"}},[o("default")]),_=()=>{a.a*=2,a.b+=2};return()=>n($,{ref:t},{default:()=>[n(v,{vertical:!0,align:"center"},{default:()=>{var c,p,i;return[((c=e.default)==null?void 0:c.call(e))||s(),(p=e.test)==null?void 0:p.call(e,{a:a.a,b:a.b}),t.value instanceof HTMLElement?`offsetHeight:${(i=t.value)==null?void 0:i.offsetHeight}px`:"",n(x,{type:"primary",onClick:_},{default:()=>[o("click")]})]}})]})}}),k=f({components:{Child:u},setup(){const r={test:({a:e,b:a})=>n(m,{varObj:{a:e,b:a}},{default:()=>[o("666")]})};return()=>n(u,null,r)}});const C={components:{A:k}};function A(r,e,a,t,s,_){const c=b("A");return h(),g(c)}var B=j(C,[["render",A]]);export{B as default};
