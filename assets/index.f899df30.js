var e=Object.defineProperty,a=Object.defineProperties,r=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,n=(a,r,t)=>r in a?e(a,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[r]=t;import{_ as s}from"./index.45e40a1f.js";import{e as c,r as i,t as p,G as u,o as b,J as f,j as d,i as y,M as m,ab as j,ac as v,N as O,Y as x,X as g}from"./vendor.6d81ba54.js";var _=c({name:"toRefs",setup(){const e=i({x:0,y:0}),s=p(e);u((()=>{console.log(s),console.log(s.x.value)}));return c=((e,a)=>{for(var r in a||(a={}))o.call(a,r)&&n(e,r,a[r]);if(t)for(var r of t(a))l.call(a,r)&&n(e,r,a[r]);return e})({},p(e)),a(c,r({handle:()=>{e.x++,e.y+=2}}));var c}});const P=m("click");_.render=function(e,a,r,t,o,l){const n=s,c=j,i=v,p=O,u=x,m=g;return b(),f(m,{title:e.$options.name},{default:d((()=>[y(u,{vertical:"",align:"center"},{default:d((()=>[y(i,{"label-placement":"top",bordered:"",column:2},{default:d((()=>[y(c,{label:"count"},{default:d((()=>[y(n,{"var-obj":{x:e.x,y:e.y}},null,8,["var-obj"])])),_:1})])),_:1}),y(p,{type:"primary",onClick:e.handle},{default:d((()=>[P])),_:1},8,["onClick"])])),_:1})])),_:1},8,["title"])};export{_ as default};
