var w=Object.defineProperty;var d=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var p=(o,e,n)=>e in o?w(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n,s=(o,e)=>{for(var n in e||(e={}))j.call(e,n)&&p(o,n,e[n]);if(d)for(var n of d(e))$.call(e,n)&&p(o,n,e[n]);return o};import{_ as g}from"./DesTable.79e18142.js";import{_ as x}from"./index.d3d73924.js";import{e as R,$ as k,m as y,n as i,O as C,w as a,a2 as S,o as B,j as t,Q as f,ak as N,al as T,R as V,a3 as D}from"./vendor.e3cf30dd.js";const O=R({name:"ShallowRef",setup(){const o={x:0,y:0},e=k(s({},o)),n=y(s({},o));return i(()=>e,l=>{console.log(l,"count")},{deep:!0}),i(()=>n,l=>{console.log(l,"count2")},{deep:!0}),{add:()=>{o.x++,e.value.x=o.x,n.value.x=o.x},overlayShallowRef:()=>{e.value=s({},o)},count:e,count2:n}}}),Q=f("add"),q=f("overlayShallowRef");function z(o,e,n,m,v,l){const _=g,c=N,b=T,r=V,u=D,h=S;return B(),C(h,{title:o.$options.name},{default:a(()=>[t(u,{vertical:"",align:"center"},{default:a(()=>[t(b,{"label-placement":"top",bordered:"",column:2},{default:a(()=>[t(c,{label:"shallowRef"},{default:a(()=>[t(_,{"var-obj":{count:o.count}},null,8,["var-obj"])]),_:1}),t(c,{label:"ref"},{default:a(()=>[t(_,{"var-obj":{count2:o.count2}},null,8,["var-obj"])]),_:1})]),_:1}),t(u,null,{default:a(()=>[t(r,{onClick:o.add},{default:a(()=>[Q]),_:1},8,["onClick"]),t(r,{type:"primary",onClick:o.overlayShallowRef},{default:a(()=>[q]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["title"])}var H=x(O,[["render",z]]);export{H as default};
