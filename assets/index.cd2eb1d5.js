import{_ as f}from"./index.5bbb8b7e.js";import{e as m,m as b,r as g,n as C,T as k,w as t,f as h,a2 as $,o as v,j as o,P as a,O as u,ak as y,al as j,Q as w,a1 as x}from"./vendor.589c209f.js";const B=m({name:"Reactive",setup(){const n=b(99),e=g({a:0,b:0,c:n}),_=()=>{e.a++,e.b+=2,n.value++},c=()=>{e.a--,e.b--,e.c--};return C(n,s=>{s>=100&&s<=122&&(e[String.fromCharCode(h(n))]=n)}),{add:_,sub:c,count:n,state:e}}}),N=a("+"),S=a("-");function T(n,e,_,c,s,V){const r=y,l=j,i=w,p=x,d=$;return v(),k(d,null,{default:t(()=>[o(p,{vertical:"",align:"center"},{default:t(()=>[o(l,{bordered:"",cols:2},{default:t(()=>[o(r,{label:"count"},{default:t(()=>[a(u(n.count),1)]),_:1}),o(r,{label:"state"},{default:t(()=>[a(u(n.state),1)]),_:1})]),_:1}),o(p,null,{default:t(()=>[o(i,{type:"primary",onClick:n.add},{default:t(()=>[N]),_:1},8,["onClick"]),o(i,{type:"primary",onClick:n.sub},{default:t(()=>[S]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})}var P=f(B,[["render",T]]);export{P as default};
