import{_ as d}from"./index.f94a28d7.js";import{_ as m}from"./index.ea82313a.js";import{g as f,a1 as g,n as h,I as b,N as $,w as e,ar as R,a4 as j,o as k,j as o,Q as r,am as v,an as x,S as C,a3 as w}from"./vendor.8b730130.js";const T=f({name:"TriggerRef",setup(){const n=g({x:0,y:0});h(()=>n,_=>{console.log(_,"count")},{deep:!0});const t=()=>{n.value.x++},a=()=>{R(n)};return b(()=>{t()}),{handle:t,TriggerRef:a,count:n}}}),y=r("add"),N=r("TriggerRef");function B(n,t,a,_,V,I){const l=d,i=v,p=x,s=C,c=w,u=j;return k(),$(u,{title:n.$options.name},{default:e(()=>[o(c,{vertical:"",align:"center"},{default:e(()=>[o(p,{"label-placement":"top",bordered:"",column:2},{default:e(()=>[o(i,{label:"shallowRef"},{default:e(()=>[o(l,{"var-obj":{count:n.count}},null,8,["var-obj"])]),_:1})]),_:1}),o(c,null,{default:e(()=>[o(s,{onClick:n.handle},{default:e(()=>[y]),_:1},8,["onClick"]),o(s,{onClick:n.TriggerRef,type:"primary"},{default:e(()=>[N]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["title"])}var q=m(T,[["render",B]]);export{q as default};
