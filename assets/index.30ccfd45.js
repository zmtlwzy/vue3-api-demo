import{a as r}from"./index.bae27874.js";import{a$ as t,j as e,Q as o,b0 as _,b1 as c,g as f,F as v}from"./vendor.4ec7e586.js";var b=t(()=>new Promise(n=>{setTimeout(()=>{n({setup(){return()=>e("div",null,[o("show on mounted after 4000ms")])}})},4e3)})),g=t(()=>r(()=>import("./index.3b7be357.js"),["assets/index.3b7be357.js","assets/index.bae27874.js","assets/index.4cd014ec.css","assets/vendor.4ec7e586.js"]));function A(n,s={}){const{size:a="small",delay:l=1e3,timeout:i=3e4}=s;return t({loader:n,loadingComponent:e(_,{size:a},null),errorComponent:e(c,{title:"Error",type:"error"},{default:()=>[o("alert")]}),delay:l,timeout:i,suspensible:!1,onError(m,u,d,p){m.message.match(/fetch/)&&p<=3?u():d()}})}var j=f({setup(){const n=A(()=>r(()=>import("./LargeImg.da1bbe61.js"),["assets/LargeImg.da1bbe61.js","assets/index.bae27874.js","assets/index.4cd014ec.css","assets/vendor.4ec7e586.js"]));return()=>e(v,null,[o("Set the network speed to slow3G in devtools"),e(b,null,null),e(g,null,null),e(n,null,null)])}});export{j as default};
