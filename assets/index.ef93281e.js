import{a}from"./index.64ad86ab.js";import{e as n,g as e,a as t,aq as i,o as s,J as d,j as r,i as o,ap as l,l as m,a$ as u,V as p,M as c}from"./vendor.513dc466.js";var v=n({name:"CustomDirective",setup(){const n=a(),i=e(210),s=e();return{pinPadding:i,direction:e("left"),max:t((()=>{var a,n;const e=null!=(n=null==(a=s.value)?void 0:a.offsetWidth)?n:0;return window.innerWidth-e})),textEl:s,min:n.getSiderWidth}}});const f={ref:"textEl"},x=[c(" some text ")];v.render=function(a,n,e,t,c,v){const g=u,P=p,h=i("pin");return s(),d(P,{vertical:""},{default:r((()=>[o(g,{value:a.pinPadding,"onUpdate:value":n[0]||(n[0]=n=>a.pinPadding=n),min:a.min,max:a.max,step:1},null,8,["value","min","max"]),l(m("p",f,x,512),[[h,a.pinPadding,a.direction,{a:!0,b:!0}]])])),_:1})};export{v as default};
