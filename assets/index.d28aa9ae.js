var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,c=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o;import{_ as l}from"./index.7c2f89e5.js";import{e as u,r as s,a as i,t as p,o as m,f,w as b,g as d,B as y,E as v,M as O,O as j}from"./vendor.08f8efb0.js";var _=u({name:"computed",setup(){const e=s({count:0,com1:i((()=>e.count+1))}),l=i((()=>e.com1+1)),u=i({get:()=>l.value+1,set:t=>{e.count=t}});return m=((e,t)=>{for(var r in t||(t={}))a.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))n.call(t,r)&&c(e,r,t[r]);return e})({},p(e)),t(m,r({com2:l,com3:u,add:()=>{e.count++},sub:()=>{e.count--},set:()=>{u.value=0}}));var m}});const g=d("br",null,null,-1),k=y("++"),C=y("--"),w=y("reset");_.render=function(e,t,r,o,a,n){const c=l,u=v,s=O,i=j;return m(),f(i,null,{default:b((()=>[d(s,{vertical:"",align:"center"},{default:b((()=>[d(c,{varObj:{count:e.count,com1:e.com1,com2:e.com2,com3:e.com3}},null,8,["varObj"]),g,d(s,null,{default:b((()=>[d(u,{type:"primary",onClick:e.add},{default:b((()=>[k])),_:1},8,["onClick"]),d(u,{type:"primary",onClick:e.sub},{default:b((()=>[C])),_:1},8,["onClick"]),d(u,{type:"primary",onClick:e.set},{default:b((()=>[w])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})};export default _;
