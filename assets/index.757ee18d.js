import{e as a,r as e,a2 as n,o as l,h as o,j as r,i as t,G as c,E as i,W as s,X as u,J as d,Q as g,R as p}from"./vendor.a3123f78.js";var f=a({name:"Readonly",setup(){const a=e({count:0}),l=n(a);return{original:a,copy:l,changeOriginal:()=>{a.count++},changeCopy:()=>{l.count++}}}});const y=c("changeOriginal"),_=c("changeCopy");f.render=function(a,e,n,f,h,C){const m=s,k=u,b=d,v=g,O=p;return l(),o(O,null,{default:r((()=>[t(v,{vertical:"",align:"center"},{default:r((()=>[t(k,{bordered:"",cols:2},{default:r((()=>[t(m,{label:"original"},{default:r((()=>[c(i(a.original),1)])),_:1}),t(m,{label:"copy"},{default:r((()=>[c(i(a.copy),1)])),_:1})])),_:1}),t(v,null,{default:r((()=>[t(b,{type:"primary",onClick:a.changeOriginal},{default:r((()=>[y])),_:1},8,["onClick"]),t(b,{type:"primary",onClick:a.changeCopy},{default:r((()=>[_])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})};export default f;