import{_ as m}from"./DesTable.71037a05.js";import{_ as d}from"./index.c239b451.js";import{g as f,r as b,m as g,al as a,N as $,w as e,a4 as v,o as j,j as o,Q as c,P as y,am as h,an as k,S as x,a3 as z}from"./vendor.ff15c49e.js";const C=f({name:"toRef",setup(){const n=b({x:0,y:0}),t={z:g(1)},_=()=>{n.x++,n.y+=2,t.z.value++};return{a:a(n,"x"),b:a(n,"y"),z:a(t,"z"),handle:_}}}),N=c("click");function w(n,t,_,B,D,R){const l=m,s=h,p=k,r=x,i=z,u=v;return j(),$(u,{title:n.$options.name},{default:e(()=>[o(i,{vertical:"",align:"center"},{default:e(()=>[o(p,{"label-placement":"top",bordered:"",column:3},{default:e(()=>[o(s,{label:"count"},{default:e(()=>[o(l,{"var-obj":{a:n.a,b:n.b}},null,8,["var-obj"])]),_:1}),o(s,{label:"r"},{default:e(()=>[c(y(n.z),1)]),_:1})]),_:1}),o(r,{type:"primary",onClick:n.handle},{default:e(()=>[N]),_:1},8,["onClick"])]),_:1})]),_:1},8,["title"])}var P=d(C,[["render",w]]);export{P as default};
