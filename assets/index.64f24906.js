var M=Object.defineProperty,I=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var $=(s,e,t)=>e in s?M(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,_=(s,e)=>{for(var t in e||(e={}))j.call(e,t)&&$(s,t,e[t]);if(b)for(var t of b(e))N.call(e,t)&&$(s,t,e[t]);return s},l=(s,e)=>I(s,S(e));import{g as a,l as x,m,n as U,o as u,N as v,w as n,f as d,j as c,Q as y,P as z,aq as P,ba as Q,S as q,a4 as f,bb as w,Z as D,a3 as E,aP as O,aQ as T,e as Z,h}from"./vendor.8b730130.js";import{_ as g}from"./index.ea82313a.js";const A={class:"flex items-center"},F=y("changeColor"),G=a({name:"Base_demo"});function H(s){x(o=>({c1a1592c:e.value.font||"orange","348fd0be":e.value.input}));const e=m({font:null,input:"#cccccc"});U(()=>e.value.input,o=>{e.value.font=o});const t=()=>{e.value.font=e.value.font==="red"?"yellow":(e.value.font==="yellow","red"),e.value.input=e.value.input==="#cccccc"?"#666ddd":(e.value.input==="#666ddd","#cccccc")};return(o,r)=>{const p=P,i=Q,V=q,k=f;return u(),v(k,{title:o.$options.name},{action:n(()=>[d("div",A,[c(i,{modes:["hex"],"show-alpha":!1,class:"flex-1 mr-12vw",value:e.value.input,"onUpdate:value":r[0]||(r[0]=B=>e.value.input=B)},null,8,["value"]),c(V,{type:"primary",onClick:t},{default:n(()=>[F]),_:1})])]),default:n(()=>[c(p,{class:"mb-2 tag-class"},{default:n(()=>[y(z(e.value),1)]),_:1})]),_:1},8,["title"])}}const J=a(l(_({},G),{setup:H}));var K=g(J,[["__scopeId","data-v-19218306"]]),L={"module-class":"_module-class_lw3cp_2","module-bg":"_module-bg_lw3cp_7"},R={"module-bold":"_module-bold_t5zl1_2"};const W=a({name:"useCssModule"});function X(s){const e=m(w()),t=m(w("other"));return console.log(e.value,t.value),(o,r)=>{const p=E,i=f;return u(),v(i,{title:o.$options.name},{default:n(()=>[c(p,{vertical:""},{default:n(()=>[d("div",{class:D([...Object.values(e.value),t.value["module-bold"],"module-bg"])},"moduleClass",2)]),_:1})]),_:1},8,["title"])}}const Y=a(l(_({},W),{setup:X})),C={};C.$style=L;C.other=R;var ee=g(Y,[["__cssModules",C]]);const se=s=>(O("data-v-7558cc07"),s=s(),T(),s),te=se(()=>d("div",{class:"textClass"},"textClass",-1)),oe=a({name:"useCssVars"});function ae(s){return x(e=>(console.log(e),{"font-color":"yellow","bg-color":"hotpink"})),(e,t)=>{const o=f;return u(),v(o,{title:e.$options.name},{default:n(()=>[te]),_:1},8,["title"])}}const ne=a(l(_({},oe),{setup:ae}));var ce=g(ne,[["__scopeId","data-v-7558cc07"]]);const _e={class:"grid-layout-2"},le={class:"col-span-2"},pe=a({setup(s){return(e,t)=>(u(),Z("div",_e,[d("div",le,[c(h(K))]),c(h(ee)),c(h(ce))]))}});export{pe as default};
