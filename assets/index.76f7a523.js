import{a}from"./index.eaefe958.js";import{e,f as n,a as t,ap as i,o as s,h as d,j as r,i as o,ao as l,K as m,aW as u,T as p}from"./vendor.89c1f2d4.js";var f=e({name:"CustomDirective",setup(){const e=a(),i=n(210),s=n();return{pinPadding:i,direction:n("left"),max:t((()=>{var a,e;const n=null!=(e=null==(a=s.value)?void 0:a.offsetWidth)?e:0;return window.innerWidth-n})),textEl:s,min:e.getSiderWidth}}});const c={ref:"textEl"},v=m(" some text ");f.render=function(a,e,n,t,m,f){const x=u,g=p,h=i("pin");return s(),d(g,{vertical:""},{default:r((()=>[o(x,{value:a.pinPadding,"onUpdate:value":e[1]||(e[1]=e=>a.pinPadding=e),min:a.min,max:a.max,step:1},null,8,["value","min","max"]),l(o("p",c,[v],512),[[h,a.pinPadding,a.direction,{a:!0,b:!0}]])])),_:1})};export{f as default};
