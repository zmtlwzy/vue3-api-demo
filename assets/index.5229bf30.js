var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,l=(t,o,s)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[o]=s,n=(e,t)=>{for(var o in t||(t={}))a.call(t,o)&&l(e,o,t[o]);if(s)for(var o of s(t))r.call(t,o)&&l(e,o,t[o]);return e},u=(e,s)=>t(e,o(s));import{_ as i}from"./GridLayout.vue_vue&type=script&lang.3ec06964.js";import{_ as c}from"./index.984ffa56.js";import{e as p,q as f,o as m,f as v,w as d,g,B as y,E as b,M as _,O as j,as as O,A as x,i as w,R as P,at as h}from"./vendor.ffd8cda6.js";const $=y("inc"),C=p({name:"Base"});var k=p(u(n({},C),{expose:[],setup(e){const t=f(1),o=f(200),s=()=>{t.value++,setTimeout((()=>{t.value++}),100),o.value--};return(e,a)=>{const r=b,l=c,n=_,u=j;return m(),v(u,{title:e.$options.name},{default:d((()=>[g(n,{vertical:""},{default:d((()=>[g(r,{type:"primary",onClick:s},{default:d((()=>[$])),_:1}),g(l,{"var-obj":{a:t.value,b:o.value}},null,8,["var-obj"])])),_:1})])),_:1},8,["title"])}}}));const B=p({name:"useContext"});var E=p(u(n({},B),{expose:[],props:{msg:{type:String,default:"msg"}},emits:["inc"],setup(e,{emit:t}){const o=e,{emit:s,attrs:a,slots:r}=O(),l=f(1),n=()=>{s("inc",l),t("inc",l.value)};return console.log(null==o?void 0:o.msg),console.log(t,s),console.log(a,"attrs"),console.log(r,"slots"),(t,o)=>{const s=b,a=_,r=j;return m(),v(r,{title:t.$options.name},{default:d((()=>[g(a,{vertical:""},{default:d((()=>[g(s,{type:"primary",onClick:n},{default:d((()=>[y(x(e.msg),1)])),_:1}),g("div",null,"count : "+x(l.value),1),w(t.$slots,"default"),w(t.$slots,"other")])),_:3})])),_:1},8,["title"])}}}));const I=y("slot_default"),S=y("slot_other"),q={expose:[],setup(e){const t=e=>{h(e)&&e.value++};return(e,o)=>{const s=i;return m(),v(s,null,{default:d((()=>[g(P(k)),g(P(E),{msg:"demo2",onInc:t},{default:d((()=>[I])),other:d((()=>[S])),_:1})])),_:1})}}};export default q;
