var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l,c=(e,a)=>{for(var t in a||(a={}))n.call(a,t)&&o(e,t,a[t]);if(l)for(var t of l(a))r.call(a,t)&&o(e,t,a[t]);return e},u=(e,l)=>a(e,t(l));import{_ as s}from"./GridLayout.vue_vue&type=script&lang.295b3cf9.js";import{_ as i}from"./index.c7ef702c.js";import{g as d,m as p,n as v,a5 as m,o as f,M as g,w as h,j as y,P as b,R as _,a0 as j,a1 as O,ah as k,e as C,a8 as $,F as w,aB as S,O as A,ab as I,f as U,a7 as x,a9 as P,r as M,t as D,a as W,aC as F,a4 as T,h as V,aD as z}from"./vendor.af4c8771.js";var B=d({name:"SingleSource",setup(){const e=p(0);return v((()=>e.value),(e=>{console.log("SingleSource with getter",m(e))})),v(e,(e=>{console.log("SingleSource with ref",m(e))})),{count:e,add:()=>{e.value++}}}});const E=b("add");B.render=function(e,a,t,l,n,r){const o=i,c=_,u=j,s=O;return f(),g(s,{title:e.$options.name},{default:h((()=>[y(u,{vertical:"",align:"center"},{default:h((()=>[y(o,{varObj:{count:e.count}},null,8,["varObj"]),y(c,{type:"primary",onClick:e.add},{default:h((()=>[E])),_:1},8,["onClick"])])),_:1})])),_:1},8,["title"])};var G=d({name:"MultipleSource",setup(){const e=p(0),a=p(110),t=p("post");let l;return k((()=>{null==l||l(),l=v([e,a],(([e,a],[t,l])=>{console.log(`val:${e} -- preVal:${t}`),console.log(`val2:${a} -- preVal2:${l}`)}),{flush:t.value})})),{count:e,count2:a,mode:t,modeOpt:[{label:"post",value:"post"},{label:"pre",value:"pre"},{label:"sync",value:"sync"}],add:()=>{e.value++,a.value++}}}});const L=b("add");G.render=function(e,a,t,l,n,r){const o=i,c=_,u=j,s=I,d=S,p=O;return f(),g(p,{title:e.$options.name},{default:h((()=>[y(u,{justify:"space-around"},{default:h((()=>[y(u,{vertical:"",align:"center"},{default:h((()=>[y(o,{"var-obj":{count:e.count,count2:e.count2}},null,8,["var-obj"]),y(c,{type:"primary",onClick:e.add},{default:h((()=>[L])),_:1},8,["onClick"])])),_:1}),y(d,{value:e.mode,"onUpdate:value":a[0]||(a[0]=a=>e.mode=a),name:"radiogroup"},{default:h((()=>[y(u,{vertical:""},{default:h((()=>[(f(!0),C(w,null,$(e.modeOpt,(e=>(f(),g(s,{key:e.value,value:e.value},{default:h((()=>[b(A(e.label),1)])),_:2},1032,["value"])))),128))])),_:1})])),_:1},8,["value"])])),_:1})])),_:1},8,["title"])};var R=d({name:"watchFlush",setup(){const e=p(1),a=p(),t=p("post");let l;return k((()=>{null==l||l(),l=v(e,(e=>{var t;console.log(`val:${e}--dom:${null==(t=a.value)?void 0:t.innerText}`)}),{flush:t.value})})),{count:e,mode:t,el:a,modeOpt:[{label:"post",value:"post"},{label:"pre",value:"pre"},{label:"sync",value:"sync"}],add:()=>{e.value++}}}});const q=b("add");R.render=function(e,a,t,l,n,r){const o=_,c=j,u=I,s=S,i=O;return f(),g(i,{title:e.$options.name},{default:h((()=>[y(c,{justify:"space-around"},{default:h((()=>[y(c,{vertical:"",align:"center"},{default:h((()=>[U("div",{ref:"el"},A(e.count),513),y(o,{type:"primary",onClick:e.add},{default:h((()=>[q])),_:1},8,["onClick"])])),_:1}),y(s,{value:e.mode,"onUpdate:value":a[0]||(a[0]=a=>e.mode=a),name:"radiogroup"},{default:h((()=>[y(c,{vertical:""},{default:h((()=>[(f(!0),C(w,null,$(e.modeOpt,(e=>(f(),g(u,{key:e.value,value:e.value},{default:h((()=>[b(A(e.label),1)])),_:2},1032,["value"])))),128))])),_:1})])),_:1},8,["value"])])),_:1})])),_:1},8,["title"])};const H=d({name:"watchOptionsDeep",data:()=>({count:0,arr:[1,2,3]}),watch:{arr:{handler(e){console.log(e,"use deep")},deep:!0}},methods:{changeArrIndex(){this.arr[0]=++this.count},replaceArr(){const e=[...this.arr];e[0]=++this.count,this.arr=e},changeArrUseSplice(){this.arr.splice(1,1,++this.count)},changeArrUseSort(){this.arr.sort(((e,a)=>Math.random()-.5))}}}),J={class:"m-2"},K=b("changeArrIndex"),N=b("replaceArr"),Q=b("changeArrUseSplice"),X=b("changeArrUseSort");H.render=function(e,a,t,l,n,r){const o=_,c=x,u=j,s=O;return f(),g(s,{title:e.$options.name},{default:h((()=>[y(u,{vertical:"",align:"center"},{default:h((()=>[U("span",J,A(e.arr),1),y(c,{"x-gap":"8","y-gap":"8",cols:2},{default:h((()=>[y(o,{type:"primary",onClick:e.changeArrIndex},{default:h((()=>[K])),_:1},8,["onClick"]),y(o,{type:"primary",onClick:e.replaceArr},{default:h((()=>[N])),_:1},8,["onClick"]),y(o,{type:"primary",onClick:e.changeArrUseSplice},{default:h((()=>[Q])),_:1},8,["onClick"]),y(o,{type:"primary",onClick:e.changeArrUseSort},{default:h((()=>[X])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["title"])};var Y=d({name:"watchOptionsImmediate",setup(){const e=P(),a=M({count:1}),t=p(1);return v((()=>a.count),((a,t)=>{e.success(`Immediate:true ==> count:${a}---old:${t}`)}),{immediate:!0}),v((()=>t.value),((a,t)=>{e.warning(`Immediate:false ==> count:${a}---old:${t}`)}),{immediate:!1}),u(c({},D(a)),{count2:t,add:()=>{a.count++,t.value++},sub:()=>{a.count--,t.value--}})}});const Z=b("add"),ee=b("sub");Y.render=function(e,a,t,l,n,r){const o=i,c=_,u=j,s=O;return f(),g(s,{title:e.$options.name},{default:h((()=>[y(u,{vertical:"",align:"center"},{default:h((()=>[y(o,{"var-obj":{count:e.count,count2:e.count2}},null,8,["var-obj"]),y(u,null,{default:h((()=>[y(c,{type:"primary",onClick:e.add},{default:h((()=>[Z])),_:1},8,["onClick"]),y(c,{type:"primary",onClick:e.sub},{default:h((()=>[ee])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["title"])};const ae={name:"WatchArray",setup(){const e=M({count:0,arr:[1,2,3]}),a=W((()=>e.arr.length));return F((()=>{console.log("updated")})),k((()=>{console.log(e.arr)})),v((()=>e.arr),(e=>{console.log(`watch arr:${e}`)})),v((()=>Object.values(e.arr)),(e=>{console.log(`Object.values watch arr:${e}`)})),v((()=>e.arr),(e=>{console.log(`deep watch arr:${e}`)}),{deep:!0}),v(a,(e=>{console.log(`watch len:${e}`)})),u(c({},D(e)),{len:a,add:()=>{e.arr.splice(0,0,++e.count)},del:()=>{let a=[...e.arr];a.pop(),e.arr=a},change:()=>{e.arr[0]=++e.count},change2:()=>{const a=[...e.arr];a[0]=++e.count,e.arr=a},change3:()=>{e.arr.splice(1,1,++e.count)}})}},te=b("Increase");ae.render=function(e,a,t,l,n,r){const o=i,c=_,u=j,s=O;return f(),g(s,{title:e.$options.name},{default:h((()=>[y(u,{vertical:"",align:"center"},{default:h((()=>[y(o,{varObj:{arr:e.arr}},null,8,["varObj"]),y(c,{type:"primary",onClick:l.add},{default:h((()=>[te])),_:1},8,["onClick"])])),_:1})])),_:1},8,["title"])};const le={name:"WatchObject",setup(){const e=p({count:0,key:"num"}),a=M({num:100,str:"age"});return k((()=>{console.log(Object.values(a)),console.log(a)})),v((()=>Object.entries(a)),((e,a)=>{console.log(e,a)})),v(e,(e=>{console.log("watch ref use depp",e)}),{deep:!0}),v(a,(e=>{console.log("watch use depp",e)}),{deep:!0}),u(c({state:e},D(a)),{add:()=>{a.num++,e.value.count++},sub:()=>{a.num--,e.value.count--}})}},ne=b("add");le.render=function(e,a,t,l,n,r){const o=i,c=_,u=j,s=O;return f(),g(s,{title:e.$options.name},{default:h((()=>[y(u,{vertical:"",align:"center"},{default:h((()=>[y(o,{varObj:{count:l.state.count,key:l.state.key}},null,8,["varObj"]),y(o,{varObj:{num:e.num,str:e.str}},null,8,["varObj"]),y(c,{type:"primary",onClick:l.add},{default:h((()=>[ne])),_:1},8,["onClick"])])),_:1})])),_:1},8,["title"])};var re=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",SingleSource:B,MultipleSource:G,Flush:R,Deep:H,Immediate:Y,WatchArray:ae,WatchObject:le});const oe=b("open console"),ce=d({name:"watch"});const ue=Object.assign(ce,{setup:function(e){const a=re;return(e,t)=>{const l=T,n=s;return f(),C(w,null,[y(l,null,{default:h((()=>[oe])),_:1}),y(n,null,{default:h((()=>[(f(!0),C(w,null,$(V(a),(e=>(f(),g(z(e))))),256))])),_:1})],64)}}});export{ue as default};
