var M=Object.defineProperty,P=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var B=(n,e,t)=>e in n?M(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,$=(n,e)=>{for(var t in e||(e={}))H.call(e,t)&&B(n,t,e[t]);if(w)for(var t of w(e))I.call(e,t)&&B(n,t,e[t]);return n},b=(n,e)=>P(n,U(e));import{_ as N}from"./DesTable.c9148b09.js";import{e as m,m as p,a as T,$ as y,a0 as Q,o as C,T as R,w as a,j as s,P as i,a1 as z,Q as E,a2 as O,a3 as q,a4 as G,h as V,n as J,a5 as K,g as L,O as W,i as X,f as A,F as Y,a6 as Z}from"./vendor.2d6a9d99.js";const ee=i("add"),te=i("update d"),oe=m({name:"$ref $computed $raw $shallowRef"});function ne(n){let e=p(1);const t=e,o=p(200);let c=T(()=>e.value+o.value),u=y({a:e.value,b:o,c:c.value}),{x:_,y:l}=Q();const r=y(_),f=y(l);let d=T(()=>r.value+f.value);const j=()=>{u.value={a:e.value,b:o,c:c.value}},g=()=>{e.value++,setTimeout(()=>{t.value++},100),o.value++};return(h,S)=>{const v=N,k=z,x=E,F=O;return C(),R(F,{title:h.$options.name},{action:a(()=>[s(k,null,{default:a(()=>[s(x,{type:"primary",onClick:g},{default:a(()=>[ee]),_:1}),s(x,{type:"primary",onClick:j},{default:a(()=>[te]),_:1})]),_:1})]),default:a(()=>[s(k,{vertical:""},{default:a(()=>[s(v,{"var-obj":{a:e.value,b:o.value,c:c.value,d:u.value}},null,8,["var-obj"]),s(v,{"var-obj":{x:r.value,y:f.value,z:d.value}},null,8,["var-obj"])]),_:1})]),_:1},8,["title"])}}const ae=m(b($({},oe),{setup:ne})),se=i("add"),le=m({name:"useSlots useAttrs defineExpose defineProps defineEmits"});function ce(n,{expose:e,emit:t}){const{num:o=111,msg:c="defaultStr"}=n,u=q(),_=G();let l=p(1);const r=p(l.value+1);e({count:l.value,count2:r});const f=()=>{l.value+=2,t("inc",r)};return console.log(o,c),console.log(t),console.log(_,"attrs"),console.log(u,"slots"),(d,j)=>{const g=N,h=z,S=E,v=O;return C(),R(v,{title:d.$options.name},{action:a(()=>[s(S,{type:"primary",onClick:f},{default:a(()=>[se]),_:1})]),default:a(()=>[s(h,{vertical:""},{default:a(()=>[s(g,{"var-obj":{count:l.value,count2:r.value,msg:n.msg,num:n.num}},null,8,["var-obj"]),V(d.$slots,"default"),V(d.$slots,"other")]),_:3})]),_:3},8,["title"])}}const ue=m(b($({},le),{props:{num:null,msg:null},emits:["inc"],setup:ce}));var D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Base:ae,UseContext:ue});const _e={class:"grid-layout-2"},re=i("slot_default"),ie=i("slot_other"),de=m({name:"Namespaced Component tags in ScriptSetup"});function me(n){const e=o=>{Z(o)&&o.value++};let t=p(123);return J(()=>{var o;return(o=t.value)==null?void 0:o.count2},o=>{console.log(o,"comp expose count2")}),(o,c)=>{const u=K;return C(),L(Y,null,[s(u,null,{default:a(()=>[i(W(o.$options.name),1)]),_:1}),X("div",_e,[s(A(D).Base),s(A(D).UseContext,{msg:"demo2",num:123,onInc:e,ref:(_,l)=>{l.comp=_,t.value=_}},{default:a(()=>[re]),other:a(()=>[ie]),_:1},512)])],64)}}const ge=Object.assign(de,{setup:me});export{ge as default};