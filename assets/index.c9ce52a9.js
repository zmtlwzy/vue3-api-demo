import{_ as d}from"./index.5bbb8b7e.js";import{e as g,r as m,aq as f,T as y,w as o,a2 as h,o as C,j as e,P as a,O as i,ak as b,al as k,Q as $,a1 as O}from"./vendor.589c209f.js";const v=g({name:"Readonly",setup(){const n=m({count:0}),t=f(n);return{original:n,copy:t,changeOriginal:()=>{n.count++},changeCopy:()=>{t.count++}}}}),j=a("changeOriginal"),x=a("changeCopy");function w(n,t,l,r,B,N){const c=b,p=k,_=$,s=O,u=h;return C(),y(u,null,{default:o(()=>[e(s,{vertical:"",align:"center"},{default:o(()=>[e(p,{bordered:"",cols:2},{default:o(()=>[e(c,{label:"original"},{default:o(()=>[a(i(n.original),1)]),_:1}),e(c,{label:"copy"},{default:o(()=>[a(i(n.copy),1)]),_:1})]),_:1}),e(s,null,{default:o(()=>[e(_,{type:"primary",onClick:n.changeOriginal},{default:o(()=>[j]),_:1},8,["onClick"]),e(_,{type:"primary",onClick:n.changeCopy},{default:o(()=>[x]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})}var q=d(v,[["render",w]]);export{q as default};
