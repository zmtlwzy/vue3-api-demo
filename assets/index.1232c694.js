var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l,c=(e,a)=>{for(var t in a||(a={}))r.call(a,t)&&o(e,t,a[t]);if(l)for(var t of l(a))n.call(a,t)&&o(e,t,a[t]);return e},u=(e,l)=>a(e,t(l));import{_ as s}from"./DesTable.6623db8f.js";import{_ as i}from"./index.86834fdb.js";import{e as d,m as p,n as v,a7 as m,o as f,O as g,w as b,j as h,Q as y,R as _,a3 as j,a2 as O,ah as k,g as C,a8 as $,P as S,F as w,ad as A,aB as I,i as U,a9 as W,r as x,t as P,a as D,aC as M,a6 as F,f as T,aD as V}from"./vendor.87a6fcc2.js";const z=d({name:"SingleSource",setup(){const e=p(0);return v((()=>e.value),(e=>{console.log("SingleSource with getter",m(e))})),v(e,(e=>{console.log("SingleSource with ref",m(e))})),{count:e,add:()=>{e.value++}}}}),B=y("add");var E=i(z,[["render",function(e,a,t,l,r,n){const o=s,c=_,u=j,i=O;return f(),g(i,{title:e.$options.name},{default:b((()=>[h(u,{vertical:"",align:"center"},{default:b((()=>[h(o,{varObj:{count:e.count}},null,8,["varObj"]),h(c,{type:"primary",onClick:e.add},{default:b((()=>[B])),_:1},8,["onClick"])])),_:1})])),_:1},8,["title"])}]]);const Q=d({name:"MultipleSource",setup(){const e=p(0),a=p(110),t=p("post");let l;return k((()=>{null==l||l(),l=v([e,a],(([e,a],[t,l])=>{console.log(`val:${e} -- preVal:${t}`),console.log(`val2:${a} -- preVal2:${l}`)}),{flush:t.value})})),{count:e,count2:a,mode:t,modeOpt:[{label:"post",value:"post"},{label:"pre",value:"pre"},{label:"sync",value:"sync"}],add:()=>{e.value++,a.value++}}}}),R=y("add");var q=i(Q,[["render",function(e,a,t,l,r,n){const o=s,c=_,u=j,i=A,d=I,p=O;return f(),g(p,{title:e.$options.name},{default:b((()=>[h(u,{justify:"space-around"},{default:b((()=>[h(u,{vertical:"",align:"center"},{default:b((()=>[h(o,{"var-obj":{count:e.count,count2:e.count2}},null,8,["var-obj"]),h(c,{type:"primary",onClick:e.add},{default:b((()=>[R])),_:1},8,["onClick"])])),_:1}),h(d,{value:e.mode,"onUpdate:value":a[0]||(a[0]=a=>e.mode=a),name:"radiogroup"},{default:b((()=>[h(u,{vertical:""},{default:b((()=>[(f(!0),C(w,null,$(e.modeOpt,(e=>(f(),g(i,{key:e.value,value:e.value},{default:b((()=>[y(S(e.label),1)])),_:2},1032,["value"])))),128))])),_:1})])),_:1},8,["value"])])),_:1})])),_:1},8,["title"])}]]);const G=d({name:"WatchFlush",setup(){const e=p(1),a=p(),t=p("post");let l;return k((()=>{null==l||l(),l=v(e,(e=>{var t;console.log(`val:${e}--dom:${null==(t=a.value)?void 0:t.innerText}`)}),{flush:t.value})})),{count:e,mode:t,el:a,modeOpt:[{label:"post",value:"post"},{label:"pre",value:"pre"},{label:"sync",value:"sync"}],add:()=>{e.value++}}}}),H=y("add");var J=i(G,[["render",function(e,a,t,l,r,n){const o=_,c=j,u=A,s=I,i=O;return f(),g(i,{title:e.$options.name},{default:b((()=>[h(c,{justify:"space-around"},{default:b((()=>[h(c,{vertical:"",align:"center"},{default:b((()=>[U("div",{ref:"el"},S(e.count),513),h(o,{type:"primary",onClick:e.add},{default:b((()=>[H])),_:1},8,["onClick"])])),_:1}),h(s,{value:e.mode,"onUpdate:value":a[0]||(a[0]=a=>e.mode=a),name:"radiogroup"},{default:b((()=>[h(c,{vertical:""},{default:b((()=>[(f(!0),C(w,null,$(e.modeOpt,(e=>(f(),g(u,{key:e.value,value:e.value},{default:b((()=>[y(S(e.label),1)])),_:2},1032,["value"])))),128))])),_:1})])),_:1},8,["value"])])),_:1})])),_:1},8,["title"])}]]);const K=d({name:"WatchOptionsDeep",data:()=>({count:0,arr:[1,2,3]}),watch:{arr:{handler(e){console.log(e,"use deep")},deep:!0}},methods:{changeArrIndex(){this.arr[0]=++this.count},replaceArr(){const e=[...this.arr];e[0]=++this.count,this.arr=e},changeArrUseSplice(){this.arr.splice(1,1,++this.count)},changeArrUseSort(){this.arr.sort(((e,a)=>Math.random()-.5))}}}),L={class:"m-2"},N={grid:"~ cols-2 gap-4"},X=y("changeArrIndex"),Y=y("replaceArr"),Z=y("changeArrUseSplice"),ee=y("changeArrUseSort");var ae=i(K,[["render",function(e,a,t,l,r,n){const o=_,c=j,u=O;return f(),g(u,{title:e.$options.name},{default:b((()=>[h(c,{vertical:"",align:"center"},{default:b((()=>[U("span",L,S(e.arr),1),U("div",N,[h(o,{type:"primary",onClick:e.changeArrIndex},{default:b((()=>[X])),_:1},8,["onClick"]),h(o,{type:"primary",onClick:e.replaceArr},{default:b((()=>[Y])),_:1},8,["onClick"]),h(o,{type:"primary",onClick:e.changeArrUseSplice},{default:b((()=>[Z])),_:1},8,["onClick"]),h(o,{type:"primary",onClick:e.changeArrUseSort},{default:b((()=>[ee])),_:1},8,["onClick"])])])),_:1})])),_:1},8,["title"])}]]);const te=d({name:"WatchOptionsImmediate",setup(){const e=W(),a=x({count:1}),t=p(1);return v((()=>a.count),((a,t)=>{e.success(`Immediate:true ==> count:${a}---old:${t}`)}),{immediate:!0}),v((()=>t.value),((a,t)=>{e.warning(`Immediate:false ==> count:${a}---old:${t}`)}),{immediate:!1}),u(c({},P(a)),{count2:t,add:()=>{a.count++,t.value++},sub:()=>{a.count--,t.value--}})}}),le=y("add"),re=y("sub");var ne=i(te,[["render",function(e,a,t,l,r,n){const o=s,c=_,u=j,i=O;return f(),g(i,{title:e.$options.name},{default:b((()=>[h(u,{vertical:"",align:"center"},{default:b((()=>[h(o,{"var-obj":{count:e.count,count2:e.count2}},null,8,["var-obj"]),h(u,null,{default:b((()=>[h(c,{type:"primary",onClick:e.add},{default:b((()=>[le])),_:1},8,["onClick"]),h(c,{type:"primary",onClick:e.sub},{default:b((()=>[re])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["title"])}]]);const oe=d({name:"WatchArray",setup(){const e=x({count:0,arr:[1,2,3]}),a=D((()=>e.arr.length));return M((()=>{console.log("updated")})),k((()=>{console.log(e.arr)})),v((()=>e.arr),(e=>{console.log(`watch arr:${e}`)})),v((()=>Object.values(e.arr)),(e=>{console.log(`Object.values watch arr:${e}`)})),v((()=>e.arr),(e=>{console.log(`deep watch arr:${e}`)}),{deep:!0}),v(a,(e=>{console.log(`watch len:${e}`)})),u(c({},P(e)),{len:a,add:()=>{e.arr.splice(0,0,++e.count)},del:()=>{let a=[...e.arr];a.pop(),e.arr=a},change:()=>{e.arr[0]=++e.count},change2:()=>{const a=[...e.arr];a[0]=++e.count,e.arr=a},change3:()=>{e.arr.splice(1,1,++e.count)}})}}),ce=y("Increase");var ue=i(oe,[["render",function(e,a,t,l,r,n){const o=s,c=_,u=j,i=O;return f(),g(i,{title:e.$options.name},{default:b((()=>[h(u,{vertical:"",align:"center"},{default:b((()=>[h(o,{varObj:{arr:e.arr}},null,8,["varObj"]),h(c,{type:"primary",onClick:e.add},{default:b((()=>[ce])),_:1},8,["onClick"])])),_:1})])),_:1},8,["title"])}]]);const se={name:"WatchObject",setup(){const e=p({count:0,key:"num"}),a=x({num:100,str:"age"});return k((()=>{console.log(Object.values(a)),console.log(a)})),v((()=>Object.entries(a)),((e,a)=>{console.log(e,a)})),v(e,(e=>{console.log("watch ref use depp",e)}),{deep:!0}),v(a,(e=>{console.log("watch use depp",e)}),{deep:!0}),u(c({state:e},P(a)),{add:()=>{a.num++,e.value.count++},sub:()=>{a.num--,e.value.count--}})}},ie=y("add");var de=i(se,[["render",function(e,a,t,l,r,n){const o=s,c=_,u=j,i=O;return f(),g(i,{title:e.$options.name},{default:b((()=>[h(u,{vertical:"",align:"center"},{default:b((()=>[h(o,{varObj:{count:l.state.count,key:l.state.key}},null,8,["varObj"]),h(o,{varObj:{num:e.num,str:e.str}},null,8,["varObj"]),h(c,{type:"primary",onClick:l.add},{default:b((()=>[ie])),_:1},8,["onClick"])])),_:1})])),_:1},8,["title"])}]]),pe=Object.freeze(Object.defineProperty({__proto__:null,SingleSource:E,MultipleSource:q,Flush:J,Deep:ae,Immediate:ne,WatchArray:ue,WatchObject:de},Symbol.toStringTag,{value:"Module"}));const ve=y("open console"),me={class:"grid-layout-2"},fe=d({name:"Watch"}),ge=d(u(c({},fe),{setup:e=>(e,a)=>{const t=F;return f(),C(w,null,[h(t,{class:"max-w-screen"},{default:b((()=>[ve])),_:1}),U("div",me,[(f(!0),C(w,null,$(T(pe),(e=>(f(),g(V(e),{key:e.name})))),128))])],64)}}));export{ge as default};
