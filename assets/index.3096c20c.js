import{_ as v}from"./index.729344cb.js";import{a0 as g,m as r,H as j,aS as b,a as u,g as X,o as Y,N as h,w as i,j as a,h as s,a1 as x,a2 as O}from"./vendor.4ec7e586.js";import"./index.bae27874.js";function w(){const{x:n,y:e}=g();return{pageX:n,pageY:e}}function M(){const n=r(0),e=r(0);function o(t){n.value=t.screenX,e.value=t.screenY}return j(()=>{window.addEventListener("mousemove",o)}),b(()=>{window.removeEventListener("mousemove",o)}),{screenX:n,screenY:e}}function $(n){const e=u(()=>`${(n.value/2).toFixed(0)}px`),o=u(()=>`${n.value}px`);return{halfX:e,halfY:o}}const k=X({name:"useHook-MouseEvent"});function E(n){const{pageX:e,pageY:o}=w(),{screenX:t,screenY:_}=M(),{halfX:l,halfY:p}=$(e);return(m,H)=>{const c=v,f=x,d=O;return Y(),h(d,{title:m.$options.name},{default:i(()=>[a(f,{vertical:"",align:"center"},{default:i(()=>[a(c,{varObj:{pageX:s(e),pageY:s(o)}},null,8,["varObj"]),a(c,{varObj:{screenX:s(t),screenY:s(_)}},null,8,["varObj"]),a(c,{varObj:{halfX:s(l),halfY:s(p)}},null,8,["varObj"])]),_:1})]),_:1},8,["title"])}}const L=Object.assign(k,{setup:E});export{L as default};
