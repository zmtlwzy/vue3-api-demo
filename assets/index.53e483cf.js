import{a as r}from"./index.eadfb970.js";import{b2 as t,e as s,j as e,Q as o,b3 as _,b4 as c,F as v}from"./vendor.01d04c5a.js";var b=t(()=>new Promise(n=>{setTimeout(()=>{n(s({setup(){return()=>e("div",null,[o("show on mounted after 4000ms")])}}))},4e3)})),A=t(()=>r(()=>import("./index.ed0bead7.js"),["assets/index.ed0bead7.js","assets/index.eadfb970.js","assets/index.1e9d87ec.css","assets/vendor.01d04c5a.js"]));function C(n,a={}){const{size:l="small",delay:i=1e3,timeout:m=3e4}=a;return t({loader:n,loadingComponent:e(_,{size:l},null),errorComponent:e(c,{title:"Error",type:"error"},{default:()=>[o("alert")]}),delay:i,timeout:m,suspensible:!1,onError(d,u,f,p){d.message.match(/fetch/)&&p<=3?u():f()}})}var j=s({setup(){const n=C(()=>r(()=>import("./LargeImg.f58d8cf7.js"),["assets/LargeImg.f58d8cf7.js","assets/index.eadfb970.js","assets/index.1e9d87ec.css","assets/vendor.01d04c5a.js"]));return()=>e(v,null,[o("Set the network speed to slow3G in devtools"),e(b,null,null),e(A,null,null),e(n,null,null)])}});export{j as default};
