import{e as a,r as e,aj as n,o as l,J as o,j as r,i as t,M as c,L as i,ad as s,ae as u,N as d,Y as g,X as p}from"./vendor.2ed87477.js";var f=a({name:"Readonly",setup(){const a=e({count:0}),l=n(a);return{original:a,copy:l,changeOriginal:()=>{a.count++},changeCopy:()=>{l.count++}}}});const y=c("changeOriginal"),_=c("changeCopy");f.render=function(a,e,n,f,C,h){const m=s,k=u,b=d,j=g,v=p;return l(),o(v,null,{default:r((()=>[t(j,{vertical:"",align:"center"},{default:r((()=>[t(k,{bordered:"",cols:2},{default:r((()=>[t(m,{label:"original"},{default:r((()=>[c(i(a.original),1)])),_:1}),t(m,{label:"copy"},{default:r((()=>[c(i(a.copy),1)])),_:1})])),_:1}),t(j,null,{default:r((()=>[t(b,{type:"primary",onClick:a.changeOriginal},{default:r((()=>[y])),_:1},8,["onClick"]),t(b,{type:"primary",onClick:a.changeCopy},{default:r((()=>[_])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})};export{f as default};
