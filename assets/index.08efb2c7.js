var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,c=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o;import{_ as l}from"./index.216d2d79.js";import{b as u,K as s,p as i,L as p,o as m,e as d,w as f,f as b,z as y,C as v,M as O,O as j}from"./vendor.736d68c4.js";var C=u({name:"computed",setup(){const e=s({count:0,com1:i((()=>e.count+1))}),l=i((()=>e.com1+1)),u=i({get:()=>l.value+1,set:t=>{e.count=t}});return m=((e,t)=>{for(var r in t||(t={}))a.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))n.call(t,r)&&c(e,r,t[r]);return e})({},p(e)),t(m,r({com2:l,com3:u,add:()=>{e.count++},sub:()=>{e.count--},set:()=>{u.value=0}}));var m}});const _=b("br",null,null,-1),k=y("++"),g=y("--"),w=y("reset");C.render=function(e,t,r,o,a,n){const c=l,u=v,s=O,i=j;return m(),d(i,null,{default:f((()=>[b(s,{vertical:"",align:"center"},{default:f((()=>[b(c,{varObj:{count:e.count,com1:e.com1,com2:e.com2,com3:e.com3}},null,8,["varObj"]),_,b(s,null,{default:f((()=>[b(u,{type:"primary",onClick:e.add},{default:f((()=>[k])),_:1},8,["onClick"]),b(u,{type:"primary",onClick:e.sub},{default:f((()=>[g])),_:1},8,["onClick"]),b(u,{type:"primary",onClick:e.set},{default:f((()=>[w])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})};export default C;
