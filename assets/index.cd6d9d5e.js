import{_ as d}from"./DesTable.0a1a8987.js";import{_ as m}from"./index.5bbb8b7e.js";import{e as f,$ as g,n as b,I as h,T as $,w as e,ap as k,a2 as R,o as T,j as o,P as l,ak as j,al as v,Q as C,a1 as w}from"./vendor.589c209f.js";const x=f({name:"TriggerRef",setup(){const n=g({x:0,y:0});b(()=>n,_=>{console.log(_,"count")},{deep:!0});const t=()=>{n.value.x++},a=()=>{k(n)};return h(()=>{t()}),{handle:t,TriggerRef:a,count:n}}}),y=l("add"),B=l("TriggerRef");function N(n,t,a,_,V,D){const r=d,p=j,i=v,s=C,c=w,u=R;return T(),$(u,{title:n.$options.name},{default:e(()=>[o(c,{vertical:"",align:"center"},{default:e(()=>[o(i,{"label-placement":"top",bordered:"",column:2},{default:e(()=>[o(p,{label:"shallowRef"},{default:e(()=>[o(r,{"var-obj":{count:n.count}},null,8,["var-obj"])]),_:1})]),_:1}),o(c,null,{default:e(()=>[o(s,{onClick:n.handle},{default:e(()=>[y]),_:1},8,["onClick"]),o(s,{onClick:n.TriggerRef,type:"primary"},{default:e(()=>[B]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["title"])}var Q=m(x,[["render",N]]);export{Q as default};
