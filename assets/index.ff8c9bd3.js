import{a as r}from"./index.0048b2d6.js";import{b2 as t,e as s,j as e,P as o,b3 as c,b4 as f,F as v}from"./vendor.2d6a9d99.js";var b=t(()=>new Promise(n=>{setTimeout(()=>{n(s({setup(){return()=>e("div",null,[o("show on mounted after 4000ms")])}}))},4e3)})),A=t(()=>r(()=>import("./index.e178c610.js"),["assets/index.e178c610.js","assets/index.0048b2d6.js","assets/index.a2e50c28.css","assets/vendor.2d6a9d99.js"]));function C(n,l={}){const{size:a="small",delay:i=1e3,timeout:m=3e4}=l;return t({loader:n,loadingComponent:e(c,{size:a},null),errorComponent:e(f,{title:"Error",type:"error"},{default:()=>[o("alert")]}),delay:i,timeout:m,suspensible:!1,onError(d,u,p,_){d.message.match(/fetch/)&&_<=3?u():p()}})}var j=s({setup(){const n=C(()=>r(()=>import("./LargeImg.b6bcf6dd.js"),["assets/LargeImg.b6bcf6dd.js","assets/index.0048b2d6.js","assets/index.a2e50c28.css","assets/vendor.2d6a9d99.js"]));return()=>e(v,null,[o("Set the network speed to slow3G in devtools"),e(b,null,null),e(A,null,null),e(n,null,null)])}});export{j as default};
