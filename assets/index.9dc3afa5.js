import{a}from"./index.890a66fb.js";import{e as n,f as e,a as t,ao as i,o as s,h as r,j as d,i as o,an as l,J as m,aV as u,S as f}from"./vendor.3f924090.js";var p=n({name:"CustomDirective",setup(){const n=a(),i=e(210),s=e();return{pinPadding:i,direction:e("left"),max:t((()=>{var a,n;const e=null!=(n=null==(a=s.value)?void 0:a.offsetWidth)?n:0;return window.innerWidth-e})),textEl:s,min:n.getSiderWidth}}});const v={ref:"textEl"},c=m(" some text ");p.render=function(a,n,e,t,m,p){const x=u,g=f,h=i("pin");return s(),r(g,{vertical:""},{default:d((()=>[o(x,{value:a.pinPadding,"onUpdate:value":n[1]||(n[1]=n=>a.pinPadding=n),min:a.min,max:a.max,step:1},null,8,["value","min","max"]),l(o("p",v,[c],512),[[h,a.pinPadding,a.direction,{a:!0,b:!0}]])])),_:1})};export default p;
