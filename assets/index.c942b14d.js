import{_ as e}from"./index.c775dd62.js";import{aL as t,i as o,J as r,aM as l,aN as s,e as n,F as a}from"./vendor.4226770e.js";var u=t((()=>new Promise((e=>{setTimeout((()=>{e({setup:()=>()=>o("div",null,[r("show on mounted after 4000ms")])})}),4e3)})))),i=t((()=>e((()=>import("./index.8e4cd1f5.js")),["/vue3-demo/assets/index.8e4cd1f5.js","/vue3-demo/assets/vendor.4226770e.js"])));var m=n({setup(){const n=function(e,n={}){const{size:a="small",delay:u=1e3,timeout:i=3e4}=n;return t({loader:e,loadingComponent:o(l,{size:a},null),errorComponent:o(s,{title:"Error",type:"error"},{default:()=>[r("alert")]}),delay:u,timeout:i,suspensible:!1,onError(e,t,o,r){e.message.match(/fetch/)&&r<=3?t():o()}})}((()=>e((()=>import("./LargeImg.77614c04.js")),["/vue3-demo/assets/LargeImg.77614c04.js","/vue3-demo/assets/vendor.4226770e.js"])));return()=>o(a,null,[r("Set the network speed to slow3G in devtools"),o(u,null,null),o(i,null,null),o(n,null,null)])}});export default m;