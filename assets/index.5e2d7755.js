var e=Object.defineProperty,o=Object.defineProperties,t=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,c=(o,t,a)=>t in o?e(o,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[t]=a;import{_ as s}from"./index.c7ef702c.js";import{g as l,r as u,a as i,aA as m,t as p,m as f,o as d,M as b,w as y,j as v,P as O,O as j,N as w,f as g,R as h,a0 as k,a1 as _}from"./vendor.af4c8771.js";var C=l({name:"computed",setup(){const e=u({count:0,com1:i((()=>e.count+1))}),s=i((()=>y())),l=m((()=>y())),d=i({get:()=>(console.log("com2 run"),s.value?2*e.count:-1),set:o=>{e.count=o}}),b=i((()=>(console.log("com3 run"),l.value?2*e.count:-1)));function y(){return e.count<5}return v=((e,o)=>{for(var t in o||(o={}))r.call(o,t)&&c(e,t,o[t]);if(a)for(var t of a(o))n.call(o,t)&&c(e,t,o[t]);return e})({},p(e)),O={com2:d,com3:b,show:f(!1),add:()=>{e.count++},sub:()=>{e.count--},set:()=>{d.value=0}},o(v,t(O));var v,O}});const P=g("br",null,null,-1),x=O("++"),A=O("--"),D=O("reset");C.render=function(e,o,t,a,r,n){const c=h,l=s,u=k,i=_;return d(),b(i,null,{default:y((()=>[v(u,{vertical:"",align:"center"},{default:y((()=>[v(c,{onClick:o[0]||(o[0]=o=>e.show=!e.show)},{default:y((()=>[O(j(e.show?"hide":"show"),1)])),_:1}),e.show?(d(),b(l,{key:0,varObj:{count:e.count,com1:e.com1,com2:e.com2,com3:e.com3}},null,8,["varObj"])):w("",!0),P,v(u,null,{default:y((()=>[v(c,{type:"primary",onClick:e.add},{default:y((()=>[x])),_:1},8,["onClick"]),v(c,{type:"primary",onClick:e.sub},{default:y((()=>[A])),_:1},8,["onClick"]),v(c,{type:"primary",onClick:e.set},{default:y((()=>[D])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})};export{C as default};
