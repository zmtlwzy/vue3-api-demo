import{_ as e}from"./index.607b4a1f.js";import{Z as a,l as n,E as s,aN as t,a as r,e as o,o as l,L as u,n as c,m as f,f as v,a0 as i,$ as p}from"./vendor.561f27f4.js";const m=o({name:"useHook-MouseEvent"});const d=Object.assign(m,{setup:function(o){const{pageX:m,pageY:d}=function(){const{x:e,y:n}=a();return{pageX:e,pageY:n}}(),{screenX:X,screenY:Y}=function(){const e=n(0),a=n(0);function r(n){e.value=n.screenX,a.value=n.screenY}return s((()=>{window.addEventListener("mousemove",r)})),t((()=>{window.removeEventListener("mousemove",r)})),{screenX:e,screenY:a}}(),{halfX:j,halfY:b}=(g=m,{halfX:r((()=>`${(g.value/2).toFixed(0)}px`)),halfY:r((()=>`${g.value}px`))});var g;return(a,n)=>{const s=e,t=i,r=p;return l(),u(r,{title:a.$options.name},{default:c((()=>[f(t,{vertical:"",align:"center"},{default:c((()=>[f(s,{varObj:{pageX:v(m),pageY:v(d)}},null,8,["varObj"]),f(s,{varObj:{screenX:v(X),screenY:v(Y)}},null,8,["varObj"]),f(s,{varObj:{halfX:v(j),halfY:v(b)}},null,8,["varObj"])])),_:1})])),_:1},8,["title"])}}});export{d as default};
