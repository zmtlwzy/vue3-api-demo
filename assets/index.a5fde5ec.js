var g=Object.defineProperty;var p=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var d=(o,e,n)=>e in o?g(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n,s=(o,e)=>{for(var n in e||(e={}))w.call(e,n)&&d(o,n,e[n]);if(p)for(var n of p(e))j.call(e,n)&&d(o,n,e[n]);return o};import{_ as x}from"./DesTable.04e65ba5.js";import{_ as $}from"./index.5a1be2a2.js";import{g as y,a1 as R,m as k,n as i,N as C,w as t,a4 as S,o as N,j as a,Q as m,am as B,an as T,S as V,a3 as D}from"./vendor.a9042fba.js";const Q=y({name:"ShallowRef",setup(){const o={x:0,y:0},e=R(s({},o)),n=k(s({},o));return i(()=>e,l=>{console.log(l,"count")},{deep:!0}),i(()=>n,l=>{console.log(l,"count2")},{deep:!0}),{add:()=>{o.x++,e.value.x=o.x,n.value.x=o.x},overlayShallowRef:()=>{e.value=s({},o)},count:e,count2:n}}}),q=m("add"),z=m("overlayShallowRef");function A(o,e,n,f,b,l){const _=x,c=B,v=T,u=V,r=D,h=S;return N(),C(h,{title:o.$options.name},{default:t(()=>[a(r,{vertical:"",align:"center"},{default:t(()=>[a(v,{"label-placement":"top",bordered:"",column:2},{default:t(()=>[a(c,{label:"shallowRef"},{default:t(()=>[a(_,{"var-obj":{count:o.count}},null,8,["var-obj"])]),_:1}),a(c,{label:"ref"},{default:t(()=>[a(_,{"var-obj":{count2:o.count2}},null,8,["var-obj"])]),_:1})]),_:1}),a(r,null,{default:t(()=>[a(u,{onClick:o.add},{default:t(()=>[q]),_:1},8,["onClick"]),a(u,{type:"primary",onClick:o.overlayShallowRef},{default:t(()=>[z]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["title"])}var I=$(Q,[["render",A]]);export{I as default};
