import{_ as d}from"./index.5a1be2a2.js";import{g as u,m as s,aN as m,e as g,j as t,w as o,N as f,aO as h,O as v,F as y,a4 as k,aq as x,o as r,Q as c,aP as S,aQ as T,S as w,a3 as N,f as $}from"./vendor.a9042fba.js";function*C(){for(;;)yield document.querySelector("footer .teleport-footer-container"),yield"#teleport-container",yield".teleport-header-container"}const B=C(),I=u({name:"Teleport",setup(){const e=s("#teleport-container"),n=s(!1),a=()=>{e.value=B.next().value};return m(()=>{n.value=!0}),{isShow:n,target:e,changeTarget:a}}}),V=e=>(S("data-v-79e3196e"),e=e(),T(),e),b=c("change"),j=V(()=>$("div",{id:"teleport-container"},null,-1)),q=c("teleport tag");function F(e,n,a,O,Q,z){const _=w,l=N,p=k,i=x;return r(),g(y,null,[t(p,{title:e.$options.name},{default:o(()=>[t(l,{vertical:""},{default:o(()=>[t(_,{type:"primary",onClick:e.changeTarget},{default:o(()=>[b]),_:1},8,["onClick"]),j]),_:1})]),_:1},8,["title"]),e.isShow?(r(),f(h,{key:0,to:e.target},[t(i,{size:"large"},{default:o(()=>[q]),_:1})],8,["to"])):v("",!0)],64)}var A=d(I,[["render",F],["__scopeId","data-v-79e3196e"]]);export{A as default};