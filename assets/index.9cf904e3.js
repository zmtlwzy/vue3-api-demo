var w=Object.defineProperty;var p=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var d=(o,e,n)=>e in o?w(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n,s=(o,e)=>{for(var n in e||(e={}))j.call(e,n)&&d(o,n,e[n]);if(p)for(var n of p(e))$.call(e,n)&&d(o,n,e[n]);return o};import{_ as g}from"./DesTable.06b8ea66.js";import{_ as x}from"./index.162fed9b.js";import{e as R,$ as k,m as y,n as i,O as C,w as t,a2 as S,o as B,j as a,Q as f,ak as N,al as T,R as V,a3 as D}from"./vendor.26af1a1a.js";const O=R({name:"ShallowRef",setup(){const o={x:0,y:0},e=k(s({},o)),n=y(s({},o));return i(()=>e,l=>{console.log(l,"count")},{deep:!0}),i(()=>n,l=>{console.log(l,"count2")},{deep:!0}),{add:()=>{o.x++,e.value.x=o.x,n.value.x=o.x},overlayShallowRef:()=>{e.value=s({},o)},count:e,count2:n}}}),Q=f("add"),q=f("overlayShallowRef");function z(o,e,n,m,b,l){const _=g,c=N,v=T,r=V,u=D,h=S;return B(),C(h,{title:o.$options.name},{default:t(()=>[a(u,{vertical:"",align:"center"},{default:t(()=>[a(v,{"label-placement":"top",bordered:"",column:2},{default:t(()=>[a(c,{label:"shallowRef"},{default:t(()=>[a(_,{"var-obj":{count:o.count}},null,8,["var-obj"])]),_:1}),a(c,{label:"ref"},{default:t(()=>[a(_,{"var-obj":{count2:o.count2}},null,8,["var-obj"])]),_:1})]),_:1}),a(u,null,{default:t(()=>[a(r,{onClick:o.add},{default:t(()=>[Q]),_:1},8,["onClick"]),a(r,{type:"primary",onClick:o.overlayShallowRef},{default:t(()=>[q]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["title"])}var H=x(O,[["render",z]]);export{H as default};
