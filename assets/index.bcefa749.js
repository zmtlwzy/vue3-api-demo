var Q=Object.defineProperty,q=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var N=(n,e,a)=>e in n?Q(n,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[e]=a,b=(n,e)=>{for(var a in e||(e={}))w.call(e,a)&&N(n,a,e[a]);if(h)for(var a of h(e))D.call(e,a)&&N(n,a,e[a]);return n},y=(n,e)=>q(n,z(e));var T=(n,e)=>{var a={};for(var o in n)w.call(n,o)&&e.indexOf(o)<0&&(a[o]=n[o]);if(n!=null&&h)for(var o of h(n))e.indexOf(o)<0&&D.call(n,o)&&(a[o]=n[o]);return a};import{_ as $}from"./DesTable.c9148b09.js";import{_ as k,b as X,r as F,s as U,c as G}from"./index.0048b2d6.js";import{a as g,o as C,T as V,w as t,j as s,P as u,Q as j,a1 as A,a2 as S,e as P,bf as B,m as Y,f as p,aL as H,t as E,bg as J,bh as K,bi as M,A as R,g as W,i as I,O as Z}from"./vendor.2d6a9d99.js";const x={name:"UsePinia",setup(){const n=X();return{x:g(()=>n.getX),y:g(()=>n.getY),add:(...e)=>{n.setValue(e)},resetState:()=>{n.$reset()}}}},nn=u("++"),en=u("reset");function on(n,e,a,o,i,l){const _=$,c=j,r=A,d=S;return C(),V(d,{title:n.$options.name},{action:t(()=>[s(r,null,{default:t(()=>[s(c,{onClick:e[0]||(e[0]=m=>o.add(8,m))},{default:t(()=>[nn]),_:1}),s(c,{onClick:o.resetState},{default:t(()=>[en]),_:1},8,["onClick"])]),_:1})]),default:t(()=>[s(_,{"var-obj":{x:o.x,y:o.y}},null,8,["var-obj"])]),_:1},8,["title"])}var tn=k(x,[["render",on]]);const sn=Symbol("1"),L=Symbol("2"),an=Symbol("3"),cn=P({name:"Provide & Inject",setup(){const n=B(sn,Y(10)),e=B(L,50),a=B(an,Y(100));return{constant:n,num:e,num2:a,add:()=>{e.value+=p(n),a.value+=p(n)}}}}),_n=u("++");function un(n,e,a,o,i,l){const _=$,c=j,r=H,d=A,m=S;return C(),V(m,{title:n.$options.name},{action:t(()=>[s(d,null,{default:t(()=>[s(c,{onClick:n.add},{default:t(()=>[_n]),_:1},8,["onClick"]),s(r,{value:n.constant,"onUpdate:value":e[0]||(e[0]=f=>n.constant=f),step:10,placeholder:"constant"},null,8,["value"])]),_:1})]),default:t(()=>[s(_,{"var-obj":{constant:n.constant,num:n.num,num2:n.num2}},null,8,["var-obj"])]),_:1},8,["title"])}var dn=k(cn,[["render",un]]);const rn=P({name:"UseReactive",setup(){const n=()=>{U.num++};return y(b({},E(U)),{add:n,resetSharedState:F})}}),ln=u("++"),mn=u("reset");function pn(n,e,a,o,i,l){const _=$,c=j,r=A,d=S;return C(),V(d,{title:n.$options.name},{action:t(()=>[s(r,null,{default:t(()=>[s(c,{onClick:n.add},{default:t(()=>[ln]),_:1},8,["onClick"]),s(c,{onClick:n.resetSharedState},{default:t(()=>[mn]),_:1},8,["onClick"])]),_:1})]),default:t(()=>[s(_,{"var-obj":{num:n.num,num2:n.num2,num3:n.num3}},null,8,["var-obj"])]),_:1},8,["title"])}var fn=k(rn,[["render",pn]]);const vn=u("inc"),bn=u("dec"),$n=u("set"),Cn=u("reset"),O=J(K),jn=P({name:"UseVueUse"});function Sn(n){const{count:e,inc:a,dec:o,set:i,reset:l}=O();return(_,c)=>{const r=$,d=j,m=A,f=S;return C(),V(f,{title:_.$options.name},{action:t(()=>[s(m,null,{default:t(()=>[s(d,{onClick:c[0]||(c[0]=v=>p(a)(1))},{default:t(()=>[vn]),_:1}),s(d,{onClick:c[1]||(c[1]=v=>p(o)(1))},{default:t(()=>[bn]),_:1}),s(d,{onClick:c[2]||(c[2]=v=>p(i)(100))},{default:t(()=>[$n]),_:1}),s(d,{onClick:c[3]||(c[3]=v=>p(l)(1))},{default:t(()=>[Cn]),_:1})]),_:1})]),default:t(()=>[s(r,{"var-obj":{count:p(e)}},null,8,["var-obj"])]),_:1},8,["title"])}}const hn=P(y(b({},jn),{setup:Sn})),yn={name:"CrossComponentsShared",components:{UseVuex:tn,PAndI:dn,UseReactive:fn,UseVueUse:hn},setup(){const l=G(),{add:n}=l,e=T(l,["add"]),a=X(),{count:o}=O();M(L,e.count);const i=()=>{U.num+=2};return y(b(b({},E(U)),e),{add:n,reactiveAdd:i,x:g(()=>a.getX),y:g(()=>a.getY),vuexAdd:(..._)=>{a.setValue(_)},vueuseCount:o})}},kn={class:"grid-layout-2"},Un={class:"col-span-2"},gn={class:"flex justify-evenly w-full"},Vn=u("provide and inject"),An=u("reactive"),Pn=u("vuex(pinia)"),Rn=u("vueuse"),Bn=u("add");function In(n,e,a,o,i,l){const _=$,c=j,r=S,d=R("UseVuex"),m=R("PAndI"),f=R("UseReactive"),v=R("UseVueUse");return C(),W("div",kn,[I("div",Un,[s(r,null,{footer:t(()=>[I("p",null,"total:"+Z(n.count+n.count2+n.count3+n.num+n.num2+n.num3+o.x+o.y+o.vueuseCount),1)]),action:t(()=>[s(c,{type:"primary",onClick:o.add},{default:t(()=>[Bn]),_:1},8,["onClick"])]),default:t(()=>[I("div",gn,[s(_,{"var-obj":{count:n.count,count2:n.count2,count3:n.count3}},{default:t(()=>[Vn]),_:1},8,["var-obj"]),s(_,{"var-obj":{num:n.num,num2:n.num2,num3:n.num3}},{default:t(()=>[An]),_:1},8,["var-obj"]),s(_,{"var-obj":{x:o.x,y:o.y}},{default:t(()=>[Pn]),_:1},8,["var-obj"]),s(_,{"var-obj":{vueuseCount:o.vueuseCount}},{default:t(()=>[Rn]),_:1},8,["var-obj"])])]),_:1})]),s(d),s(m),s(f),s(v)])}var Xn=k(yn,[["render",In]]);export{Xn as default};