var e=Object.defineProperty,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,t=(a,l,o)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[l]=o,r=(e,r)=>{for(var n in r||(r={}))l.call(r,n)&&t(e,n,r[n]);if(a)for(var n of a(r))o.call(r,n)&&t(e,n,r[n]);return e};import{_ as n}from"./index.607b4a1f.js";import{e as u,Y as c,l as s,w as f,o as d,L as i,n as p,m as b,O as v,ai as m,aj as y,P as j,a0 as w,$ as _}from"./vendor.561f27f4.js";var x=u({name:"ShallowRef",setup(){const e={x:0,y:0},a=c(r({},e)),l=s(r({},e));f((()=>a),(e=>{console.log(e,"count")}),{deep:!0}),f((()=>l),(e=>{console.log(e,"count2")}),{deep:!0});return{add:()=>{e.x++,a.value.x=e.x,l.value.x=e.x},overlayShallowRef:()=>{a.value=r({},e)},count:a,count2:l}}});const O=v("add"),h=v("overlayShallowRef");x.render=function(e,a,l,o,t,r){const u=n,c=m,s=y,f=j,v=w,x=_;return d(),i(x,{title:e.$options.name},{default:p((()=>[b(v,{vertical:"",align:"center"},{default:p((()=>[b(s,{"label-placement":"top",bordered:"",column:2},{default:p((()=>[b(c,{label:"shallowRef"},{default:p((()=>[b(u,{"var-obj":{count:e.count}},null,8,["var-obj"])])),_:1}),b(c,{label:"ref"},{default:p((()=>[b(u,{"var-obj":{count2:e.count2}},null,8,["var-obj"])])),_:1})])),_:1}),b(v,null,{default:p((()=>[b(f,{onClick:e.add},{default:p((()=>[O])),_:1},8,["onClick"]),b(f,{type:"primary",onClick:e.overlayShallowRef},{default:p((()=>[h])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["title"])};export{x as default};
