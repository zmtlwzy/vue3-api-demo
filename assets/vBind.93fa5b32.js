import{_ as t}from"./index.5a1be2a2.js";import{g as r,m as s,I as a,e as n,f as o,F as d,o as m}from"./vendor.a9042fba.js";const i=r({name:"v-bind",setup(){const e=s(null);return a(()=>{console.log(e.value)}),{value:s(1),el:e}}}),p=[".someDomProperty"],l=[".someDomProperty"],c=["someDomAttrs"];function u(e,v,f,_,b,h){return m(),n(d,null,[o("div",{".someDomProperty":e.value},"vbind prop",8,p),o("div",{".someDomProperty":e.value,ref:"el"},"vbind prop dedicated shorthand",8,l),o("div",{someDomAttrs:e.value},"vbind attr (default)",8,c)],64)}var B=t(i,[["render",u]]);export{B as default};
