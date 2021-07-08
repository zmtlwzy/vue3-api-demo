var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,u=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,s=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&u(e,n,t[n]);if(a)for(var n of a(t))r.call(t,n)&&u(e,n,t[n]);return e},l=(e,a)=>t(e,n(a));import{_ as d}from"./index.4767c18a.js";import{_ as c}from"./GridLayout.vue_vue&type=script&lang.f1d59746.js";import{u as i,r as f,s as m,c as v}from"./index.9992538f.js";import{a as p,o as b,f as j,w as y,g as _,D as x,H as C,R as S,S as h,e as k,U as O,s as g,V as w,W as P,t as U,X as V,n as A,C as I,Y as R}from"./vendor.85fa7a64.js";const $={name:"usePinia",setup(){const e=i();return{x:p((()=>e.getX)),y:p((()=>e.getY)),add:(...t)=>{e.setValue(t)},resetState:()=>{e.$reset()}}}},X=x("++"),Y=x("reset");$.render=function(e,t,n,a,o,r){const u=d,s=C,l=S,c=h;return b(),j(c,{title:e.$options.name},{action:y((()=>[_(l,null,{default:y((()=>[_(s,{onClick:t[1]||(t[1]=e=>a.add(8,e))},{default:y((()=>[X])),_:1}),_(s,{onClick:a.resetState},{default:y((()=>[Y])),_:1},8,["onClick"])])),_:1})])),default:y((()=>[_(u,{"var-obj":{x:a.x,y:a.y}},null,8,["var-obj"])])),_:1},8,["title"])};const D=Symbol("1"),E=Symbol("2"),G=Symbol("3");var H=k({name:"Provide & Inject",setup(){const e=O(D,g(10)),t=O(E,50),n=O(G,g(100));return{constant:e,num:t,num2:n,add:()=>{t.value+=w(e),n.value+=w(e)}}}});const L=x("++");H.render=function(e,t,n,a,o,r){const u=d,s=C,l=P,c=S,i=h;return b(),j(i,{title:e.$options.name},{action:y((()=>[_(c,null,{default:y((()=>[_(s,{onClick:e.add},{default:y((()=>[L])),_:1},8,["onClick"]),_(l,{value:e.constant,"onUpdate:value":t[1]||(t[1]=t=>e.constant=t),step:10,placeholder:"constant"},null,8,["value"])])),_:1})])),default:y((()=>[_(u,{"var-obj":{constant:e.constant,num:e.num,num2:e.num2}},null,8,["var-obj"])])),_:1},8,["title"])};var W=k({name:"useReactive",setup:()=>l(s({},U(m)),{add:()=>{m.num++},resetSharedState:f})});const q=x("++"),z=x("reset");W.render=function(e,t,n,a,o,r){const u=d,s=C,l=S,c=h;return b(),j(c,{title:e.$options.name},{action:y((()=>[_(l,null,{default:y((()=>[_(s,{onClick:e.add},{default:y((()=>[q])),_:1},8,["onClick"]),_(s,{onClick:e.resetSharedState},{default:y((()=>[z])),_:1},8,["onClick"])])),_:1})])),default:y((()=>[_(u,{"var-obj":{num:e.num,num2:e.num2,num3:e.num3}},null,8,["var-obj"])])),_:1},8,["title"])};const B={name:"CrossComponentsShared",components:{UseVuex:$,PAndI:H,UseReactive:W},setup(){const e=v(),{add:t}=e,n=((e,t)=>{var n={};for(var u in e)o.call(e,u)&&t.indexOf(u)<0&&(n[u]=e[u]);if(null!=e&&a)for(var u of a(e))t.indexOf(u)<0&&r.call(e,u)&&(n[u]=e[u]);return n})(e,["add"]),u=i();V(E,n.count);return l(s(s({},U(m)),n),{add:t,reactiveAdd:()=>{m.num+=2},x:p((()=>u.getX)),y:p((()=>u.getY)),vuexAdd:(...e)=>{u.setValue(e)}})}},F={class:"flex justify-evenly w-full"},J=x("shared width provide and inject"),K=x("shared width reactive"),M=x("shared width vuex"),N=x("add");B.render=function(e,t,n,a,o,r){const u=d,s=C,l=h,i=R,f=A("UseVuex"),m=A("PAndI"),v=A("UseReactive"),p=c;return b(),j(p,{cols:3},{default:y((()=>[_(i,{span:3},{default:y((()=>[_(l,null,{footer:y((()=>[_("p",null,"total:"+I(e.count+e.count2+e.count3+e.num+e.num2+e.num3+a.x+a.y),1)])),action:y((()=>[_(s,{type:"primary",onClick:a.add},{default:y((()=>[N])),_:1},8,["onClick"])])),default:y((()=>[_("div",F,[_(u,{"var-obj":{count:e.count,count2:e.count2,count3:e.count3}},{default:y((()=>[J])),_:1},8,["var-obj"]),_(u,{"var-obj":{num:e.num,num2:e.num2,num3:e.num3}},{default:y((()=>[K])),_:1},8,["var-obj"]),_(u,{"var-obj":{x:a.x,y:a.y}},{default:y((()=>[M])),_:1},8,["var-obj"])])])),_:1})])),_:1}),_(f),_(m),_(v)])),_:1})};export default B;
