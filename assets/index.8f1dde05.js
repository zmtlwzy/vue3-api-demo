import{a}from"./index.9992538f.js";import{e as n,s as e,a as t,a6 as i,o as s,f as r,w as d,g as o,a7 as l,D as m,a8 as u,R as f}from"./vendor.85fa7a64.js";var p=n({name:"CustomDirective",setup(){const n=a(),i=e(210),s=e();return{pinPadding:i,direction:e("left"),max:t((()=>{var a,n;const e=null!=(n=null==(a=s.value)?void 0:a.offsetWidth)?n:0;return window.innerWidth-e})),textEl:s,min:n.getSiderWidth}}});const v={ref:"textEl"},c=m(" some text ");p.render=function(a,n,e,t,m,p){const x=u,g=f,P=i("pin");return s(),r(g,{vertical:""},{default:d((()=>[o(x,{value:a.pinPadding,"onUpdate:value":n[1]||(n[1]=n=>a.pinPadding=n),min:a.min,max:a.max,step:1},null,8,["value","min","max"]),l(o("p",v,[c],512),[[P,a.pinPadding,a.direction,{a:!0,b:!0}]])])),_:1})};export default p;