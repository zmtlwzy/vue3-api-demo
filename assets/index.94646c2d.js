import{_ as e}from"./index.86834fdb.js";import{e as a,m as t,aN as o,g as r,j as n,w as s,O as l,aO as i,aA as c,F as d,a2 as u,ao as p,o as f,Q as g,aP as m,aQ as v,R as y,a3 as _,i as h}from"./vendor.87a6fcc2.js";const b=function*(){for(;;)yield document.querySelector("footer .teleport-footer-container"),yield"#teleport-container",yield".teleport-header-container"}(),j=a({name:"Teleport",setup(){const e=t("#teleport-container"),a=t(!1);return o((()=>{a.value=!0})),{isShow:a,target:e,changeTarget:()=>{e.value=b.next().value}}}}),k=e=>(m("data-v-34261b20"),e=e(),v(),e),w=g("change"),x=k((()=>h("div",{id:"teleport-container"},null,-1))),S=g("teleport tag");var T=e(j,[["render",function(e,a,t,o,g,m){const v=y,h=_,b=u,j=p;return f(),r(d,null,[n(b,{title:e.$options.name},{default:s((()=>[n(h,{vertical:""},{default:s((()=>[n(v,{type:"primary",onClick:e.changeTarget},{default:s((()=>[w])),_:1},8,["onClick"]),x])),_:1})])),_:1},8,["title"]),e.isShow?(f(),l(i,{key:0,to:e.target},[n(j,{size:"large"},{default:s((()=>[S])),_:1})],8,["to"])):c("",!0)],64)}],["__scopeId","data-v-34261b20"]]);export{T as default};