import{e as a,g as e,r as t,w as s,S as l,o as r,h as n,j as u,i as o,G as d,E as c,W as f,X as i,J as b,Q as _,R as p}from"./vendor.a3123f78.js";var m=a({name:"Reactive",setup(){const a=e(99),r=t({a:0,b:0,c:a});return s(a,(e=>{e>=100&&e<=122&&(r[String.fromCharCode(l(a))]=a)})),{add:()=>{r.a++,r.b+=2,a.value++},sub:()=>{r.a--,r.b--,r.c--},count:a,state:r}}});const C=d("+"),v=d("-");m.render=function(a,e,t,s,l,m){const k=f,y=i,g=b,h=_,j=p;return r(),n(j,null,{default:u((()=>[o(h,{vertical:"",align:"center"},{default:u((()=>[o(y,{bordered:"",cols:2},{default:u((()=>[o(k,{label:"count"},{default:u((()=>[d(c(a.count),1)])),_:1}),o(k,{label:"state"},{default:u((()=>[d(c(a.state),1)])),_:1})])),_:1}),o(h,null,{default:u((()=>[o(g,{type:"primary",onClick:a.add},{default:u((()=>[C])),_:1},8,["onClick"]),o(g,{type:"primary",onClick:a.sub},{default:u((()=>[v])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})};export default m;