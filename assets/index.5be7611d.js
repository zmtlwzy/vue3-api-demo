import{_ as d}from"./DesTable.c9148b09.js";import{e as f,r as m,m as l,j as a,a1 as v,P as c,Q as x,a2 as $,A as b,T as g,o as h}from"./vendor.2d6a9d99.js";import{_ as j}from"./index.0048b2d6.js";var u=f({setup(o,{slots:e}){const n=m({a:1,b:1}),t=l(),s=()=>a("span",{style:{margin:"0 5px"}},[c("default")]),_=()=>{n.a*=2,n.b+=2};return()=>a($,{ref:t},{default:()=>[a(v,{vertical:!0,align:"center"},{default:()=>{var r,p,i;return[((r=e.default)==null?void 0:r.call(e))||s(),(p=e.test)==null?void 0:p.call(e,{a:n.a,b:n.b}),t.value instanceof HTMLElement?`offsetHeight:${(i=t.value)==null?void 0:i.offsetHeight}px`:"",a(x,{type:"primary",onClick:_},{default:()=>[c("click")]})]}})]})}}),k=f({components:{Child:u},setup(){const o={test:({a:e,b:n})=>a(d,{varObj:{a:e,b:n}},{default:()=>[c("666")]})};return()=>a(u,null,o)}});const C={components:{A:k}};function A(o,e,n,t,s,_){const r=b("A");return h(),g(r)}var B=j(C,[["render",A]]);export{B as default};