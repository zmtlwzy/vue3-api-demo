import{_ as m}from"./DesTable.0a1a8987.js";import{_ as f}from"./index.5bbb8b7e.js";import{e as b,m as j,a as r,f as p,a6 as $,T as g,w as a,a2 as k,o as v,j as s,P as C,Q as h,a1 as R}from"./vendor.589c209f.js";const T=b({name:"unRef",setup(){const n=j(0),t=2,c=()=>{n.value+=2},e=o=>o=$(o)?o.value:o,_=r(()=>p(n)+p(t)),u=r(()=>e(n)*e(t));return{total:_,total2:u,count:n,count2:t,add:c}}}),w=C("++");function B(n,t,c,e,_,u){const o=m,l=h,i=R,d=k;return v(),g(d,{title:n.$options.name},{default:a(()=>[s(i,{vertical:"",align:"center"},{default:a(()=>[s(o,{"var-obj":{count:n.count,count2:n.count2,total:n.total,total2:n.total2}},null,8,["var-obj"]),s(l,{onClick:n.add},{default:a(()=>[w]),_:1},8,["onClick"])]),_:1})]),_:1},8,["title"])}var D=f(T,[["render",B]]);export{D as default};
