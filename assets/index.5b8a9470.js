var k=Object.defineProperty,v=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var f=(o,e,n)=>e in o?k(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n,b=(o,e)=>{for(var n in e||(e={}))y.call(e,n)&&f(o,n,e[n]);if(d)for(var n of d(e))j.call(e,n)&&f(o,n,e[n]);return o},g=(o,e)=>v(o,w(e));import{_ as $}from"./DesTable.04e65ba5.js";import{_ as N}from"./index.5a1be2a2.js";import{g as B,r as V,a as u,aB as O,t as D,m as S,N as h,w as t,a4 as T,o as C,j as a,Q as r,P,O as Q,f as R,S as q,a3 as z}from"./vendor.a9042fba.js";const A=B({name:"computed",setup(){const o=V({count:0,com1:u(()=>o.count+1)}),e=u(()=>c()),n=O(()=>c()),l=u({get:()=>(console.log("com2 run"),e.value?o.count*2:-1),set:m=>{o.count=m}}),i=u(()=>(console.log("com3 run"),n.value?o.count*2:-1)),p=()=>{o.count++},s=()=>{o.count--},_=()=>{l.value=0};function c(){return o.count<5}return g(b({},D(o)),{com2:l,com3:i,show:S(!1),add:p,sub:s,set:_})}}),E=R("br",null,null,-1),F=r("++"),G=r("--"),H=r("reset");function I(o,e,n,l,i,p){const s=q,_=$,c=z,m=T;return C(),h(m,null,{default:t(()=>[a(c,{vertical:"",align:"center"},{default:t(()=>[a(s,{onClick:e[0]||(e[0]=J=>o.show=!o.show)},{default:t(()=>[r(P(o.show?"hide":"show"),1)]),_:1}),o.show?(C(),h(_,{key:0,varObj:{count:o.count,com1:o.com1,com2:o.com2,com3:o.com3}},null,8,["varObj"])):Q("",!0),E,a(c,null,{default:t(()=>[a(s,{type:"primary",onClick:o.add},{default:t(()=>[F]),_:1},8,["onClick"]),a(s,{type:"primary",onClick:o.sub},{default:t(()=>[G]),_:1},8,["onClick"]),a(s,{type:"primary",onClick:o.set},{default:t(()=>[H]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})}var W=N(A,[["render",I]]);export{W as default};