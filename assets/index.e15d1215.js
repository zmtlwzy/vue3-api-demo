import{g as a,r as n,aq as e,o as l,L as o,n as r,m as t,O as c,N as i,ak as s,al as u,Q as d,$ as g,a0 as p}from"./vendor.173cf73b.js";var f=a({name:"Readonly",setup(){const a=n({count:0}),l=e(a);return{original:a,copy:l,changeOriginal:()=>{a.count++},changeCopy:()=>{l.count++}}}});const y=c("changeOriginal"),_=c("changeCopy");f.render=function(a,n,e,f,C,h){const m=s,k=u,b=d,O=g,v=p;return l(),o(v,null,{default:r((()=>[t(O,{vertical:"",align:"center"},{default:r((()=>[t(k,{bordered:"",cols:2},{default:r((()=>[t(m,{label:"original"},{default:r((()=>[c(i(a.original),1)])),_:1}),t(m,{label:"copy"},{default:r((()=>[c(i(a.copy),1)])),_:1})])),_:1}),t(O,null,{default:r((()=>[t(b,{type:"primary",onClick:a.changeOriginal},{default:r((()=>[y])),_:1},8,["onClick"]),t(b,{type:"primary",onClick:a.changeCopy},{default:r((()=>[_])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})};export{f as default};
