import{e,g as o,C as r,o as s,h as t,l as a,F as d}from"./vendor.f0797dda.js";const l=e({name:"v-bind",setup(e){const s=o(null);return r((()=>{var e;console.log(null==(e=s.value)?void 0:e.someDomProperty)})),{value:o(1),el:s}}}),n=[".someDomProperty"],m=[".someDomProperty"],v=["someDomAttrs"];l.render=function(e,o,r,l,u,p){return s(),t(d,null,[a("div",{".someDomProperty":e.value},"vbind prop",8,n),a("div",{".someDomProperty":e.value,ref:"el"},"vbind prop dedicated shorthand",8,m),a("div",{someDomAttrs:e.value},"vbind attr (default)",8,v)],64)};export{l as default};
