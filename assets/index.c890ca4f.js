var e=Object.defineProperty,r=Object.defineProperties,t=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,n=(r,t,a)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a;import{_ as s}from"./index.d5bbbc2f.js";import{e as c,r as i,t as p,C as b,o as u,h as f,j as d,i as y,J as m,X as j,Y as v,K as O,S as x,T as g}from"./vendor.4226770e.js";var _=c({name:"toRefs",setup(){const e=i({x:0,y:0}),s=p(e);b((()=>{console.log(s),console.log(s.x.value)}));return c=((e,r)=>{for(var t in r||(r={}))o.call(r,t)&&n(e,t,r[t]);if(a)for(var t of a(r))l.call(r,t)&&n(e,t,r[t]);return e})({},p(e)),r(c,t({handle:()=>{e.x++,e.y+=2}}));var c}});const P=m("click");_.render=function(e,r,t,a,o,l){const n=s,c=j,i=v,p=O,b=x,m=g;return u(),f(m,{title:e.$options.name},{default:d((()=>[y(b,{vertical:"",align:"center"},{default:d((()=>[y(i,{"label-placement":"top",bordered:"",column:2},{default:d((()=>[y(c,{label:"count"},{default:d((()=>[y(n,{"var-obj":{x:e.x,y:e.y}},null,8,["var-obj"])])),_:1})])),_:1}),y(p,{type:"primary",onClick:e.handle},{default:d((()=>[P])),_:1},8,["onClick"])])),_:1})])),_:1},8,["title"])};export default _;
