import{u as a}from"./index.e78448a9.js";import{e as n,l as e,a as t,aE as i,o as s,L as r,n as d,m as o,aD as l,i as m,b5 as u,a0 as p,O as f}from"./vendor.5b08720f.js";var v=n({name:"CustomDirective",setup(){const n=a(),i=e(210),s=e();return{pinPadding:i,direction:e("left"),max:t((()=>{var a,n;const e=null!=(n=null==(a=s.value)?void 0:a.offsetWidth)?n:0;return window.innerWidth-e})),textEl:s,min:n.getSiderWidth}}});const c={ref:"textEl"},x=[f(" some text ")];v.render=function(a,n,e,t,f,v){const g=u,P=p,b=i("pin");return s(),r(P,{vertical:""},{default:d((()=>[o(g,{value:a.pinPadding,"onUpdate:value":n[0]||(n[0]=n=>a.pinPadding=n),min:a.min,max:a.max,step:1},null,8,["value","min","max"]),l(m("p",c,x,512),[[b,a.pinPadding,a.direction,{a:!0,b:!0}]])])),_:1})};export{v as default};
