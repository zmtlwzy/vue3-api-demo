var B=Object.defineProperty,I=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var y=(e,a,n)=>a in e?B(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,N=(e,a)=>{for(var n in a||(a={}))S.call(a,n)&&y(e,n,a[n]);if(b)for(var n of b(a))U.call(a,n)&&y(e,n,a[n]);return e},M=(e,a)=>I(e,E(a));import{_ as V}from"./index.2c6c92ad.js";import{e as r,a9 as m,o as f,O as v,w as i,j as t,Q as c,R as x,a3 as C,a2 as g,i as h,I as j,F as D,r as F,a as J,aI as _,aJ as T,aK as z,aL as K,aC as L,f as k,aM as O}from"./vendor.b337872e.js";const Q=r({name:"EventBase",setup(){const e=m();return{handleClick:l=>{e.success("1"),console.log(l)},handleClick2:(l,u)=>{e.success(l),console.log(u)}}}}),R=c("click event"),q=c("click Multiple event");function A(e,a,n,l,u,d){const o=x,s=C,p=g;return f(),v(p,{title:e.$options.name},{default:i(()=>[t(s,{vertical:""},{default:i(()=>[t(o,{onClick:e.handleClick},{default:i(()=>[R]),_:1},8,["onClick"]),t(o,{onClick:a[0]||(a[0]=$=>(e.handleClick($),e.handleClick2("2",$)))},{default:i(()=>[q]),_:1})]),_:1})]),_:1},8,["title"])}var G=V(Q,[["render",A]]);const H=r({name:"EventModifiers",setup(){const e=m();return{handleClick:n=>{e.success(`${n}`)}}}}),P=c(" 1 "),W=c(" 2 ");function X(e,a,n,l,u,d){const o=C,s=g;return f(),v(s,{title:e.$options.name},{default:i(()=>[t(o,{vertical:"",align:"center"},{default:i(()=>[h("div",{class:"border",onClickCapture:a[2]||(a[2]=p=>e.handleClick("1"))},[P,h("div",{class:"border",onClick:a[1]||(a[1]=p=>e.handleClick("2"))},[W,h("div",{class:"border",onClick:a[0]||(a[0]=p=>e.handleClick("3"))},"click 3 first alert is 1")])],32)]),_:1})]),_:1},8,["title"])}var Y=V(H,[["render",X],["__scopeId","data-v-66e284d4"]]);const Z=r({name:"VModelCom1",props:{customName:String,customNameModifiers:String,label:String},emits:["update:customName"],setup(e,{emit:a}){const n=l=>{a("update:customName",Number(l))};return j(()=>{console.log(e.customNameModifiers)}),()=>t(D,null,[t("div",{class:"column-layout"},[t("label",null,[t("span",null,[e.label]),t("input",{type:"text",value:e.customName,onInput:l=>n(l.target.value)},null)])])])}}),ee=r({name:"VModelCom2",props:{modelValue:{type:[String,Number]}},emits:["update:modelValue"],setup(e,{emit:a}){const n=l=>{a("update:modelValue",Number(l))};return()=>t("div",null,[t("input",{type:"number",value:e.modelValue,onInput:l=>n(l.target.value)},null)])}}),w="modifiersUseTsx";var ne=r({name:w,setup(e,{attrs:a}){const n=F({a:600}),l=m(),u=J(()=>n.a>600?"left":"right"),d={padding:"20px",margin:"1.5rem 0",border:"1px dashed",display:"flex",flexDirection:"column"},o=s=>{l.success(s)};return()=>t(g,{title:w},{default:()=>[t("div",a,[t(C,{vertical:!0,align:"center"},{default:()=>[t("span",null,[n.a]),t("span",null,[typeof n.a]),t(x,{type:"primary",onClick:()=>{n.a++}},{default:()=>[c("++")]})]}),t("div",{style:d,onClick:_(()=>o("container"),["capture"])},[c("container-capture"),t("div",{style:d,onClick:()=>o("child-0")},[c("child-0")]),t("div",{style:d,onClick:_(()=>o("child-1"),["stop"])},[c("child-stop"),t("a",{href:"https://www.baidu.com",onClick:_(()=>o("stopJump"),["stop","prevent"])},[c("a link to baidu")])]),t("div",{style:d,onClick:_(()=>o("child-2"),["self"])},[c("child-self"),t("div",{style:d,onClick:()=>o("child-child")},[c("child-child")])])])]),t(Z,{customName:n.a,customNameModifiers:{capitalize:!0,other:!0},"onUpdate:customName":s=>n.a=s,label:"label : "},null),t(ee,{modelValue:n.a,"onUpdate:modelValue":s=>n.a=s},null),T(t(K,{value:n.a,"onUpdate:value":s=>n.a=s,onFocus:console.log("focus")},null),[[z("pin"),n.a,u.value,{c:!0,d:!0}]])]})}});const te=r({name:"Event"}),se=r(M(N({},te),{setup(e){return(a,n)=>{const l=O,u=L;return f(),v(u,{cols:2,"x-gap":"16","y-gap":"24"},{default:i(()=>[t(l,null,{default:i(()=>[t(k(G))]),_:1}),t(l,null,{default:i(()=>[t(k(Y))]),_:1}),t(l,{span:2},{default:i(()=>[t(k(ne))]),_:1})]),_:1})}}}));export{se as default};
