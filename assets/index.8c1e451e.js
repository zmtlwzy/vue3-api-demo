import{b as e,n as o,av as a,ab as n,s as t,ag as s,o as l,e as r,f as c,w as f,aw as u,ax as d,F as i,z as p,C as g,O as E}from"./vendor.736d68c4.js";var m=e({name:"transitionHook",setup(){const e=o(!1),l=a();n((()=>{console.log("onBeforeMount"),console.log(l)})),t((()=>{console.log("onMounted"),console.log(l)})),s((()=>{console.log("onUnmounted"),console.log(l)}));return{flag:e,bfEnter:e=>{gsap.set(e,{x:150,y:50})},enter:(e,o)=>{gsap.to(e,{duration:1,x:"random([450,500,600])",ease:"expo.inOut"}),gsap.to(e,{scaleX:1.5,scaleY:.7,duration:.5,ease:"expo.in"}),gsap.to(e,{delay:.5,scaleX:1,scaleY:1,duration:.5,ease:"expo.out"}),gsap.to(e,{delay:.7,duration:.6,scaleX:.6,scaleY:1.7,y:"random(300, 700, 5)",opacity:0,ease:"expo.in",onComplete:o})},afEnter:()=>{e.value=!e.value}}}});const x=p("start"),y={key:0,class:"ball"};m.render=function(e,o,a,n,t,s){const p=g,m=E;return l(),r(i,null,[c(m,{title:e.$options.name},{default:f((()=>[c(p,{type:"primary",onClick:o[1]||(o[1]=o=>e.flag=!e.flag)},{default:f((()=>[x])),_:1})])),_:1},8,["title"]),c(d,{css:!1,onBeforeEnter:e.bfEnter,onEnter:e.enter,onAfterEnter:e.afEnter},{default:f((()=>[e.flag?(l(),r("div",y)):u("",!0)])),_:1},8,["onBeforeEnter","onEnter","onAfterEnter"])],64)};export default m;
