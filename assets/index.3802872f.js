import{e,g as a,aF as t,az as o,aA as r,o as n,h as l,i as s,j as i,J as c,aG as d,aH as u,F as f,M as p,l as g,N as v,Z as h,Y as y,al as m}from"./vendor.f0797dda.js";const _=function*(){for(;;)yield document.querySelector("footer .teleport-footer-container"),yield"#teleport-container",yield".teleport-header-container"}();var b=e({name:"Teleport",setup(){const e=a("#teleport-container"),o=a(!1);return t((()=>{o.value=!0})),{isShow:o,target:e,changeTarget:()=>{e.value=_.next().value}}}});o("data-v-5b0ff0ba");const k=p("change"),S=g("div",{id:"teleport-container"},null,-1),T=p("teleport tag");r(),b.render=function(e,a,t,o,r,p){const g=v,_=h,b=y,j=m;return n(),l(f,null,[s(b,{title:e.$options.name},{default:i((()=>[s(_,{vertical:""},{default:i((()=>[s(g,{type:"primary",onClick:e.changeTarget},{default:i((()=>[k])),_:1},8,["onClick"]),S])),_:1})])),_:1},8,["title"]),e.isShow?(n(),c(d,{key:0,to:e.target},[s(j,{size:"large"},{default:i((()=>[T])),_:1})],8,["to"])):u("",!0)],64)},b.__scopeId="data-v-5b0ff0ba";export{b as default};
