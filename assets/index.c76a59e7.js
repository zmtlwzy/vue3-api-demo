import{e,a9 as a,o as l,f as t,w as s,g as n,D as o,H as c,R as i,S as u,a1 as d,a2 as r,a0 as p,x as m,F as v,r as f,a as k,aa as C,a7 as h,a6 as b,W as g,V as y,Y as _,Z as N}from"./vendor.85fa7a64.js";var x=e({name:"eventBase",setup(){const e=a();return{handleClick:a=>{e.success("1"),console.log(a)},handleClick2:(a,l)=>{e.success(a),console.log(l)}}}});const M=o("click event"),V=o("click Multiple event");x.render=function(e,a,o,d,r,p){const m=c,v=i,f=u;return l(),t(f,{title:e.$options.name},{default:s((()=>[n(v,{vertical:""},{default:s((()=>[n(m,{onClick:e.handleClick},{default:s((()=>[M])),_:1},8,["onClick"]),n(m,{onClick:a[1]||(a[1]=a=>(e.handleClick(a),e.handleClick2("2",a)))},{default:s((()=>[V])),_:1})])),_:1})])),_:1},8,["title"])};var U=e({name:"eventModifiers",setup(){const e=a();return{handleClick:a=>{e.success(`${a}`)}}}});const w=p();d("data-v-5ce58618");const I=o(" 1 "),$=o(" 2 ");r();const j=w(((e,a,s,o,c,d)=>{const r=i,p=u;return l(),t(p,{title:e.$options.name},{default:w((()=>[n(r,{vertical:"",align:"center"},{default:w((()=>[n("div",{class:"border",onClickCapture:a[3]||(a[3]=a=>e.handleClick("1"))},[I,n("div",{class:"border",onClick:a[2]||(a[2]=a=>e.handleClick("2"))},[$,n("div",{class:"border",onClick:a[1]||(a[1]=a=>e.handleClick("3"))}," click 3 first alert is 1 ")])],32)])),_:1})])),_:1},8,["title"])}));U.render=j,U.__scopeId="data-v-5ce58618";const D=e({name:"vModelCom1",props:["customName","customNameModifiers","label"],setup:(e,{emit:a})=>(m((()=>{console.log(e.customNameModifiers)})),()=>n(v,null,[n("div",{class:"column-layout"},[n("label",null,[n("span",null,[e.label]),n("input",{type:"text",value:e.customName,onInput:e=>{return l=e.target.value,void a("update:customName",Number(l));var l}},null)])])]))}),F=e({name:"vModelCom2",props:{modelValue:{type:[String,Number]}},setup:(e,{emit:a})=>()=>n("div",null,[n("input",{type:"number",value:e.modelValue,onInput:e=>{return l=e.target.value,void a("update:modelValue",Number(l));var l}},null)])});var S=e({name:"modifiersUseTsx",setup(e,{attrs:l}){const t=f({a:600}),s=a(),d=k((()=>t.a>600?"left":"right")),r={padding:"20px",margin:"1.5rem 0",border:"1px dashed",display:"flex",flexDirection:"column"},p=e=>{s.success(e)};return()=>n(u,{title:"modifiersUseTsx"},{default:()=>[n("div",l,[n(i,{vertical:!0,align:"center"},{default:()=>[n("span",null,[t.a]),n("span",null,[typeof t.a]),n(c,{type:"primary",onClick:()=>{t.a++}},{default:()=>[o("++")]})]}),n("div",{style:r,onClick:C((()=>p("container")),["capture"])},[o("container-capture"),n("div",{style:r,onClick:()=>p("child-0")},[o("child-0")]),n("div",{style:r,onClick:C((()=>p("child-1")),["stop"])},[o("child-stop"),n("a",{href:"https://www.baidu.com",onClick:C((()=>p("stopJump")),["stop","prevent"])},[o("a link to baidu")])]),n("div",{style:r,onClick:C((()=>p("child-2")),["self"])},[o("child-self"),n("div",{style:r,onClick:()=>p("child-child")},[o("child-child")])])])]),n(D,{customName:t.a,customNameModifiers:{capitalize:!0,other:!0},"onUpdate:customName":e=>t.a=e,label:"label : "},null),n(F,{modelValue:t.a,"onUpdate:modelValue":e=>t.a=e},null),h(n(g,{value:t.a,"onUpdate:value":e=>t.a=e,onFocus:console.log("focus")},null),[[b("pin"),t.a,d.value,{c:!0,d:!0}]])]})}});const T=e({name:"event"});const z=Object.assign(T,{setup:function(e){return(e,a)=>{const o=_,c=N;return l(),t(c,{cols:2,"x-gap":"16","y-gap":"24"},{default:s((()=>[n(o,null,{default:s((()=>[n(y(x))])),_:1}),n(o,null,{default:s((()=>[n(y(U))])),_:1}),n(o,{span:2},{default:s((()=>[n(y(S))])),_:1})])),_:1})}}});export default z;
