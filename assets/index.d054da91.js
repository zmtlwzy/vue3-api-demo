import{_ as m}from"./DesTable.04e65ba5.js";import{_ as f}from"./index.5a1be2a2.js";import{g as b,m as g,a as r,h as p,a8 as j,N as $,w as a,a4 as h,o as k,j as s,Q as v,S as C,a3 as N}from"./vendor.a9042fba.js";const R=b({name:"unRef",setup(){const n=g(0),t=2,c=()=>{n.value+=2},e=o=>o=j(o)?o.value:o,_=r(()=>p(n)+p(t)),u=r(()=>e(n)*e(t));return{total:_,total2:u,count:n,count2:t,add:c}}}),w=v("++");function B(n,t,c,e,_,u){const o=m,l=C,i=N,d=h;return k(),$(d,{title:n.$options.name},{default:a(()=>[s(i,{vertical:"",align:"center"},{default:a(()=>[s(o,{"var-obj":{count:n.count,count2:n.count2,total:n.total,total2:n.total2}},null,8,["var-obj"]),s(l,{onClick:n.add},{default:a(()=>[w]),_:1},8,["onClick"])]),_:1})]),_:1},8,["title"])}var D=f(R,[["render",B]]);export{D as default};