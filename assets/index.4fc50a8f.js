import{_ as e}from"./index.c587eba1.js";import{g as a,C as n,aI as s,a as t,e as o,o as r,J as u,j as v,i as l,a1 as i,Y as c,X as f}from"./vendor.2ed87477.js";const m=o({name:"useHook-MouseEvent"});const d=Object.assign(m,{setup:function(o){const{pageX:m,pageY:d}=function(){const e=a(0),t=a(0);function o(a){e.value=a.pageX,t.value=a.pageY}return n((()=>{window.addEventListener("mousemove",o)})),s((()=>{window.removeEventListener("mousemove",o)})),{pageX:e,pageY:t}}(),{screenX:p,screenY:X}=function(){const e=a(0),t=a(0);function o(a){e.value=a.screenX,t.value=a.screenY}return n((()=>{window.addEventListener("mousemove",o)})),s((()=>{window.removeEventListener("mousemove",o)})),{screenX:e,screenY:t}}(),{halfX:Y,halfY:g}=(j=m,{halfX:t((()=>`${(j.value/2).toFixed(0)}px`)),halfY:t((()=>`${j.value}px`))});var j;return(a,n)=>{const s=e,t=c,o=f;return r(),u(o,{title:a.$options.name},{default:v((()=>[l(t,{vertical:"",align:"center"},{default:v((()=>[l(s,{varObj:{pageX:i(m),pageY:i(d)}},null,8,["varObj"]),l(s,{varObj:{screenX:i(p),screenY:i(X)}},null,8,["varObj"]),l(s,{varObj:{halfX:i(Y),halfY:i(g)}},null,8,["varObj"])])),_:1})])),_:1},8,["title"])}}});export{d as default};
