var z=Object.defineProperty,H=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var B=(e,n,t)=>n in e?z(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,j=(e,n)=>{for(var t in n||(n={}))P.call(n,t)&&B(e,t,n[t]);if(V)for(var t of V(n))Q.call(n,t)&&B(e,t,n[t]);return e},O=(e,n)=>H(e,L(n));import{_ as S}from"./DesTable.71037a05.js";import{_ as g}from"./index.c239b451.js";import{g as h,m as v,n as m,a8 as T,o as d,N as f,w as o,j as c,Q as i,S as b,a3 as y,a4 as k,ai as w,e as A,a9 as F,P as I,F as U,ad as E,aC as R,f as M,aD as q,aa as G,r as W,t as N,a as J,aE as K,a7 as X,h as Y,aF as Z}from"./vendor.ff15c49e.js";const x=h({name:"SingleSource",setup(){const e=v(0),n=()=>{e.value++};return m(()=>e.value,t=>{console.log("SingleSource with getter",T(t))}),m(e,t=>{console.log("SingleSource with ref",T(t))}),{count:e,add:n}}}),ee=i("add");function ne(e,n,t,s,l,u){const r=S,a=b,_=y,p=k;return d(),f(p,{title:e.$options.name},{default:o(()=>[c(_,{vertical:"",align:"center"},{default:o(()=>[c(r,{varObj:{count:e.count}},null,8,["varObj"]),c(a,{type:"primary",onClick:e.add},{default:o(()=>[ee]),_:1},8,["onClick"])]),_:1})]),_:1},8,["title"])}var te=g(x,[["render",ne]]);const oe=h({name:"MultipleSource",setup(){const e=v(0),n=v(110),t=v("post");let s;const l=[{label:"post",value:"post"},{label:"pre",value:"pre"},{label:"sync",value:"sync"}],u=()=>{e.value++,n.value++};return w(()=>{s==null||s(),s=m([e,n],([r,a],[_,p])=>{console.log(`val:${r} -- preVal:${_}`),console.log(`val2:${a} -- preVal2:${p}`)},{flush:t.value})}),{count:e,count2:n,mode:t,modeOpt:l,add:u}}}),ae=i("add");function ce(e,n,t,s,l,u){const r=S,a=b,_=y,p=E,D=R,$=k;return d(),f($,{title:e.$options.name},{default:o(()=>[c(_,{justify:"space-around"},{default:o(()=>[c(_,{vertical:"",align:"center"},{default:o(()=>[c(r,{"var-obj":{count:e.count,count2:e.count2}},null,8,["var-obj"]),c(a,{type:"primary",onClick:e.add},{default:o(()=>[ae]),_:1},8,["onClick"])]),_:1}),c(D,{value:e.mode,"onUpdate:value":n[0]||(n[0]=C=>e.mode=C),name:"radiogroup"},{default:o(()=>[c(_,{vertical:""},{default:o(()=>[(d(!0),A(U,null,F(e.modeOpt,C=>(d(),f(p,{key:C.value,value:C.value},{default:o(()=>[i(I(C.label),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1},8,["value"])]),_:1})]),_:1},8,["title"])}var re=g(oe,[["render",ce]]);const se=h({name:"watchFlush",setup(){const e=v(1),n=v(),t=v("post");let s;const l=[{label:"post",value:"post"},{label:"pre",value:"pre"},{label:"sync",value:"sync"}],u=()=>{e.value++};return w(()=>{s==null||s(),s=m(e,r=>{var a;console.log(`val:${r}--dom:${(a=n.value)==null?void 0:a.innerText}`)},{flush:t.value})}),{count:e,mode:t,el:n,modeOpt:l,add:u}}}),le=i("add");function ue(e,n,t,s,l,u){const r=b,a=y,_=E,p=R,D=k;return d(),f(D,{title:e.$options.name},{default:o(()=>[c(a,{justify:"space-around"},{default:o(()=>[c(a,{vertical:"",align:"center"},{default:o(()=>[M("div",{ref:"el"},I(e.count),513),c(r,{type:"primary",onClick:e.add},{default:o(()=>[le]),_:1},8,["onClick"])]),_:1}),c(p,{value:e.mode,"onUpdate:value":n[0]||(n[0]=$=>e.mode=$),name:"radiogroup"},{default:o(()=>[c(a,{vertical:""},{default:o(()=>[(d(!0),A(U,null,F(e.modeOpt,$=>(d(),f(_,{key:$.value,value:$.value},{default:o(()=>[i(I($.label),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1},8,["value"])]),_:1})]),_:1},8,["title"])}var _e=g(se,[["render",ue]]);const pe=h({name:"watchOptionsDeep",data(){return{count:0,arr:[1,2,3]}},watch:{arr:{handler(e){console.log(e,"use deep")},deep:!0}},methods:{changeArrIndex(){this.arr[0]=++this.count},replaceArr(){const e=[...this.arr];e[0]=++this.count,this.arr=e},changeArrUseSplice(){this.arr.splice(1,1,++this.count)},changeArrUseSort(){this.arr.sort((e,n)=>Math.random()-.5)}}}),de={class:"m-2"},ie=i("changeArrIndex"),me=i("replaceArr"),fe=i("changeArrUseSplice"),ve=i("changeArrUseSort");function he(e,n,t,s,l,u){const r=b,a=q,_=y,p=k;return d(),f(p,{title:e.$options.name},{default:o(()=>[c(_,{vertical:"",align:"center"},{default:o(()=>[M("span",de,I(e.arr),1),c(a,{"x-gap":"8","y-gap":"8",cols:2},{default:o(()=>[c(r,{type:"primary",onClick:e.changeArrIndex},{default:o(()=>[ie]),_:1},8,["onClick"]),c(r,{type:"primary",onClick:e.replaceArr},{default:o(()=>[me]),_:1},8,["onClick"]),c(r,{type:"primary",onClick:e.changeArrUseSplice},{default:o(()=>[fe]),_:1},8,["onClick"]),c(r,{type:"primary",onClick:e.changeArrUseSort},{default:o(()=>[ve]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["title"])}var $e=g(pe,[["render",he]]);const ge=h({name:"watchOptionsImmediate",setup(){const e=G(),n=W({count:1}),t=v(1),s=()=>{n.count++,t.value++},l=()=>{n.count--,t.value--};return m(()=>n.count,(u,r)=>{e.success(`Immediate:true ==> count:${u}---old:${r}`)},{immediate:!0}),m(()=>t.value,(u,r)=>{e.warning(`Immediate:false ==> count:${u}---old:${r}`)},{immediate:!1}),O(j({},N(n)),{count2:t,add:s,sub:l})}}),be=i("add"),ye=i("sub");function ke(e,n,t,s,l,u){const r=S,a=b,_=y,p=k;return d(),f(p,{title:e.$options.name},{default:o(()=>[c(_,{vertical:"",align:"center"},{default:o(()=>[c(r,{"var-obj":{count:e.count,count2:e.count2}},null,8,["var-obj"]),c(_,null,{default:o(()=>[c(a,{type:"primary",onClick:e.add},{default:o(()=>[be]),_:1},8,["onClick"]),c(a,{type:"primary",onClick:e.sub},{default:o(()=>[ye]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["title"])}var Ce=g(ge,[["render",ke]]);const je=h({name:"WatchArray",setup(){const e=W({count:0,arr:[1,2,3]}),n=()=>{e.arr.splice(0,0,++e.count)},t=()=>{let a=[...e.arr];a.pop(),e.arr=a},s=()=>{e.arr[0]=++e.count},l=()=>{const a=[...e.arr];a[0]=++e.count,e.arr=a},u=()=>{e.arr.splice(1,1,++e.count)},r=J(()=>e.arr.length);return K(()=>{console.log("updated")}),w(()=>{console.log(e.arr)}),m(()=>e.arr,a=>{console.log(`watch arr:${a}`)}),m(()=>Object.values(e.arr),a=>{console.log(`Object.values watch arr:${a}`)}),m(()=>e.arr,a=>{console.log(`deep watch arr:${a}`)},{deep:!0}),m(r,a=>{console.log(`watch len:${a}`)}),O(j({},N(e)),{len:r,add:n,del:t,change:s,change2:l,change3:u})}}),Oe=i("Increase");function Se(e,n,t,s,l,u){const r=S,a=b,_=y,p=k;return d(),f(p,{title:e.$options.name},{default:o(()=>[c(_,{vertical:"",align:"center"},{default:o(()=>[c(r,{varObj:{arr:e.arr}},null,8,["varObj"]),c(a,{type:"primary",onClick:e.add},{default:o(()=>[Oe]),_:1},8,["onClick"])]),_:1})]),_:1},8,["title"])}var we=g(je,[["render",Se]]);const Ae={name:"WatchObject",setup(){const e=v({count:0,key:"num"}),n=W({num:100,str:"age"}),t=()=>{n.num++,e.value.count++},s=()=>{n.num--,e.value.count--};return w(()=>{console.log(Object.values(n)),console.log(n)}),m(()=>Object.entries(n),(l,u)=>{console.log(l,u)}),m(e,l=>{console.log("watch ref use depp",l)},{deep:!0}),m(n,l=>{console.log("watch use depp",l)},{deep:!0}),O(j({state:e},N(n)),{add:t,sub:s})}},Ie=i("add");function Ue(e,n,t,s,l,u){const r=S,a=b,_=y,p=k;return d(),f(p,{title:e.$options.name},{default:o(()=>[c(_,{vertical:"",align:"center"},{default:o(()=>[c(r,{varObj:{count:s.state.count,key:s.state.key}},null,8,["varObj"]),c(r,{varObj:{num:e.num,str:e.str}},null,8,["varObj"]),c(a,{type:"primary",onClick:s.add},{default:o(()=>[Ie]),_:1},8,["onClick"])]),_:1})]),_:1},8,["title"])}var De=g(Ae,[["render",Ue]]),Fe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",SingleSource:te,MultipleSource:re,Flush:_e,Deep:$e,Immediate:Ce,WatchArray:we,WatchObject:De});const Me=i("open console"),We={class:"grid-layout-2"},Ne=h({name:"watch"});function Ve(e){const n=Fe;return(t,s)=>{const l=X;return d(),A(U,null,[c(l,null,{default:o(()=>[Me]),_:1}),M("div",We,[(d(!0),A(U,null,F(Y(n),u=>(d(),f(Z(u)))),256))])],64)}}const ze=h(O(j({},Ne),{setup:Ve}));export{ze as default};
