var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,c=(e,t)=>{for(var a in t||(t={}))n.call(t,a)&&l(e,a,t[a]);if(r)for(var a of r(t))o.call(t,a)&&l(e,a,t[a]);return e},u=(e,r)=>t(e,a(r));import{_ as s}from"./GridLayout.vue_vue&type=script&lang.d0d4bf7f.js";import{_ as i}from"./index.ba1b58e3.js";import{e as d,r as p,w as h,t as f,o as m,J as g,j as v,i as b,M as y,N as _,V as j,W as O,g as $,l as k,L as C,af as S,ag as w,a as A,ah as I,G as W,ai as x,h as U,F as M,K as P,X as V,aj as G}from"./vendor.513dc466.js";const D=d({name:"SingleSourceWithGetter",setup(){const e=p({count:0,other:100});return h((()=>e.count),((e,t)=>{console.log(`val:${e} -- preVal:${t}`)})),h((()=>e.other),((e,t)=>{console.log(`val:${e} -- preVal:${t}`)})),u(c({},f(e)),{add:()=>{e.count++},sub:()=>{e.count--,e.other--}})}}),F=y("add");D.render=function(e,t,a,r,n,o){const l=i,c=_,u=j,s=O;return m(),g(s,{title:e.$options.name},{default:v((()=>[b(u,{vertical:"",align:"center"},{default:v((()=>[b(l,{varObj:{count:e.count,other:e.other}},null,8,["varObj"]),b(c,{type:"primary",onClick:e.add},{default:v((()=>[F])),_:1},8,["onClick"])])),_:1})])),_:1},8,["title"])};const L=d({name:"SingleSourceWithRef",setup(){const e=$(0),t=$(100);return h(e,((e,t)=>{console.log(`count:${e} -- pre:${t}`)})),h(t,((e,t)=>{console.log(`other:${e} -- pre:${t}`)})),{count:e,other:t,add:()=>{e.value++},sub:()=>{e.value--}}}}),R=y("add");L.render=function(e,t,a,r,n,o){const l=i,c=_,u=j,s=O;return m(),g(s,{title:e.$options.name},{default:v((()=>[b(u,{vertical:"",align:"center"},{default:v((()=>[b(l,{varObj:{count:e.count,other:e.other}},null,8,["varObj"]),b(c,{type:"primary",onClick:e.add},{default:v((()=>[R])),_:1},8,["onClick"])])),_:1})])),_:1},8,["title"])};const z=d({name:"MultipleSource",setup(){const e=$(0),t=$(110);return h([e,t],(([e,t],[a,r])=>{console.log(`val:${e} -- preVal:${a}`),console.log(`val2:${t} -- preVal2:${r}`)})),{count:e,count2:t,add:()=>{e.value++},sub:()=>{t.value--}}}}),E=y("add");z.render=function(e,t,a,r,n,o){const l=i,c=_,u=j,s=O;return m(),g(s,{title:e.$options.name},{default:v((()=>[b(u,{vertical:"",align:"center"},{default:v((()=>[b(l,{"var-obj":{count:e.count,count2:e.count2}},null,8,["var-obj"]),b(c,{type:"primary",onClick:e.add},{default:v((()=>[E])),_:1},8,["onClick"])])),_:1})])),_:1},8,["title"])};const J=d({name:"watchFlush",data:()=>({count:1,other:2}),watch:{count:{handler(e){this.other=2*e},flush:"post"}},methods:{add(){this.count++},sub(){this.count--}}}),K=y("add");J.render=function(e,t,a,r,n,o){const l=i,c=_,u=j,s=O;return m(),g(s,{title:e.$options.name},{default:v((()=>[b(u,{vertical:"",align:"center"},{default:v((()=>[b(l,{"var-obj":{count:e.count,other:e.other}},null,8,["var-obj"]),b(c,{type:"primary",onClick:e.add},{default:v((()=>[K])),_:1},8,["onClick"])])),_:1})])),_:1},8,["title"])};const N=d({name:"watchOptionsDeep",data:()=>({count:0,arr:[1,2,3]}),watch:{arr:{handler(e){console.log(e,"use deep")},deep:!0}},methods:{changeArrIndex(){this.arr[0]=++this.count},replaceArr(){const e=[...this.arr];e[0]=++this.count,this.arr=e},changeArrUseSplice(){this.arr.splice(1,1,++this.count)},changeArrUseSort(){this.arr.sort(((e,t)=>Math.random()-.5))}}}),T={class:"m-2"},X=y("changeArrIndex"),q=y("replaceArr"),B=y("changeArrUseSplice"),H=y("changeArrUseSort");N.render=function(e,t,a,r,n,o){const l=_,c=S,u=j,s=O;return m(),g(s,{title:e.$options.name},{default:v((()=>[b(u,{vertical:"",align:"center"},{default:v((()=>[k("span",T,C(e.arr),1),b(c,{"x-gap":"8","y-gap":"8",cols:2},{default:v((()=>[b(l,{type:"primary",onClick:e.changeArrIndex},{default:v((()=>[X])),_:1},8,["onClick"]),b(l,{type:"primary",onClick:e.replaceArr},{default:v((()=>[q])),_:1},8,["onClick"]),b(l,{type:"primary",onClick:e.changeArrUseSplice},{default:v((()=>[B])),_:1},8,["onClick"]),b(l,{type:"primary",onClick:e.changeArrUseSort},{default:v((()=>[H])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["title"])};var Q=d({name:"watchOptionsImmediate",setup(){const e=w(),t=p({count:1}),a=$(1);return h((()=>t.count),((t,a)=>{e.success(`Immediate:true ==> count:${t}---old:${a}`)}),{immediate:!0}),h((()=>a.value),((t,a)=>{e.warning(`Immediate:false ==> count:${t}---old:${a}`)}),{immediate:!1}),u(c({},f(t)),{count2:a,add:()=>{t.count++,a.value++},sub:()=>{t.count--,a.value--}})}});const Y=y("add"),Z=y("sub");Q.render=function(e,t,a,r,n,o){const l=i,c=_,u=j,s=O;return m(),g(s,{title:e.$options.name},{default:v((()=>[b(u,{vertical:"",align:"center"},{default:v((()=>[b(l,{"var-obj":{count:e.count,count2:e.count2}},null,8,["var-obj"]),b(u,null,{default:v((()=>[b(c,{type:"primary",onClick:e.add},{default:v((()=>[Y])),_:1},8,["onClick"]),b(c,{type:"primary",onClick:e.sub},{default:v((()=>[Z])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["title"])};const ee={name:"WatchArray",setup(){const e=p({count:0,arr:[1,2,3]}),t=A((()=>e.arr.length));return I((()=>{console.log("updated")})),W((()=>{console.log(e.arr)})),h((()=>e.arr),(e=>{console.log(`watch arr:${e}`)})),h((()=>Object.values(e.arr)),(e=>{console.log(`Object.values watch arr:${e}`)})),h((()=>e.arr),(e=>{console.log(`deep watch arr:${e}`)}),{deep:!0}),h(t,(e=>{console.log(`watch len:${e}`)})),u(c({},f(e)),{len:t,add:()=>{e.arr.splice(0,0,++e.count)},del:()=>{let t=[...e.arr];t.pop(),e.arr=t},change:()=>{e.arr[0]=++e.count},change2:()=>{const t=[...e.arr];t[0]=++e.count,e.arr=t},change3:()=>{e.arr.splice(1,1,++e.count)}})}},te=y("Increase");ee.render=function(e,t,a,r,n,o){const l=i,c=_,u=j,s=O;return m(),g(s,{title:e.$options.name},{default:v((()=>[b(u,{vertical:"",align:"center"},{default:v((()=>[b(l,{varObj:{arr:e.arr}},null,8,["varObj"]),b(c,{type:"primary",onClick:r.add},{default:v((()=>[te])),_:1},8,["onClick"])])),_:1})])),_:1},8,["title"])};const ae={name:"WatchObject",setup(){const e=$({count:0,key:"num"}),t=p({num:100,str:"age"});return W((()=>{console.log(Object.values(t)),console.log(t)})),h((()=>Object.entries(t)),((e,t)=>{console.log(e,t)})),h(e,(e=>{console.log("watch ref use depp",e)}),{deep:!0}),h(t,(e=>{console.log("watch use depp",e)}),{deep:!0}),u(c({state:e},f(t)),{add:()=>{t.num++,e.value.count++},sub:()=>{t.num--,e.value.count--}})}},re=y("add");ae.render=function(e,t,a,r,n,o){const l=i,c=_,u=j,s=O;return m(),g(s,{title:e.$options.name},{default:v((()=>[b(u,{vertical:"",align:"center"},{default:v((()=>[b(l,{varObj:{count:r.state.count,key:r.state.key}},null,8,["varObj"]),b(l,{varObj:{num:e.num,str:e.str}},null,8,["varObj"]),b(c,{type:"primary",onClick:r.add},{default:v((()=>[re])),_:1},8,["onClick"])])),_:1})])),_:1},8,["title"])};var ne=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",SingleSourceWithGetter:D,SingleSourceWithRef:L,MultipleSource:z,Flush:J,Deep:N,Immediate:Q,WatchArray:ee,WatchObject:ae});const oe=y("open console"),le=d({name:"watch"});const ce=Object.assign(le,{setup:function(e){const t=ne;return(e,a)=>{const r=x,n=s;return m(),U(M,null,[b(r,null,{default:v((()=>[oe])),_:1}),b(n,{cols:1},{default:v((()=>[(m(!0),U(M,null,P(V(t),(e=>(m(),g(G(e))))),256))])),_:1})],64)}}});export{ce as default};
