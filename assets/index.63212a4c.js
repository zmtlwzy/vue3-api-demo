import{_,u}from"./index.c876aca4.js";import{e as l,m as a,a as f,aK as v,O as g,w as x,a3 as h,o as d,j as w,aJ as P,g as $,bc as j,Q as k}from"./vendor.01d04c5a.js";const B=l({name:"CustomDirective",setup(){const e=u(),n=a(210),s=a(),i=a("left"),r=f(()=>{var t,o;const c=(o=(t=s.value)==null?void 0:t.offsetWidth)!=null?o:0;return window.innerWidth-c});return{pinPadding:n,direction:i,max:r,textEl:s,min:e.getSiderWidth}}}),C={ref:"textEl"},D=k("some text"),E=[D];function S(e,n,s,i,r,c){const t=j,o=h,p=v("pin");return d(),g(o,{vertical:""},{default:x(()=>[w(t,{value:e.pinPadding,"onUpdate:value":n[0]||(n[0]=m=>e.pinPadding=m),min:e.min,max:e.max,step:1},null,8,["value","min","max"]),P((d(),$("p",C,E)),[[p,e.pinPadding,e.direction,{a:!0,b:!0}]])]),_:1})}var N=_(B,[["render",S]]);export{N as default};
