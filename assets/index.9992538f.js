var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,i=(e,t)=>{for(var n in t||(t={}))a.call(t,n)&&s(e,n,t[n]);if(r)for(var n of r(t))o.call(t,n)&&s(e,n,t[n]);return e},c=(e,t)=>{var n={};for(var s in e)a.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&r)for(var s of r(e))t.indexOf(s)<0&&o.call(e,s)&&(n[s]=e[s]);return n};import{c as l,d as u,r as p,a as d,t as m,b as h,e as v,u as f,o as _,f as x,g as R,w as y,F as g,_ as w,h as E,i as b,j as O,k as j,l as A,m as V,n as T,p as P,q as I,s as C,v as L,x as D,y as k,z as S,A as $,B as F,C as H,D as W,E as N,G as U,H as M,I as B,J as q,K as z,L as G,M as J,N as K}from"./vendor.85fa7a64.js";const X=l();const Y=u({id:"demo",state:()=>({x:0,y:0}),getters:{getX(){return this.x},getY(){return this.y}},actions:{setValue(e){this.x+=1,this.y+=e[0]}}}),Q=function(){const e=p({count:0,count2:10,count3:100});return r=i({},m(e)),t(r,n({add:()=>{e.count++,e.count2+=10,e.count3+=100}}));var r},Z=p({num:0,num2:d((()=>Z.num+1)),num3:d((()=>Z.num+2))}),ee=()=>{Z.num=0};var te={common:{primaryColor:"#1887A0FF",primaryColorHover:"#36A5ADFF",primaryColorPressed:"#0C737AFF",primaryColorSuppl:"#36ADA3FF"}};const ne=u({id:"app",state:()=>({refreshId:0,headerHeight:64,siderWidth:250,themeName:"light"}),getters:{getRefreshId(){return this.refreshId},getHeaderHeight(){return this.headerHeight},getSiderWidth(){return this.siderWidth},getThemeName(){return this.themeName},getThemeCssVars(){return"dark"===this.themeName?h:null},getThemeOverries(){return"dark"===this.themeName?void 0:te}},actions:{setThemeName(e){this.themeName=e},resetAllState(){this.refreshId++,Y().$reset(),ee()}}});var re=v({name:"MainLayout",props:["menuOptions","menuValue"],setup(){const e=ne();return f((()=>({"header-height":`${e.getHeaderHeight}px`}))),{siderWidth:e.getSiderWidth}}});const ae={class:"h-full"};let oe;re.render=function(e,t,n,r,a,o){const s=w,i=O,c=j,l=A,u=E;return _(),x(g,null,[R(s,{class:"h-$header-height",bordered:""},{default:y((()=>[R("header",ae,[b(e.$slots,"header")])])),_:3}),R(u,{position:"absolute",class:"!top-$header-height","has-sider":""},{default:y((()=>[R(c,{"native-scrollbar":!1,bordered:"","collapse-mode":"width","collapsed-width":0,width:e.siderWidth,"show-collapsed-content":!1,"show-trigger":"bar","content-style":"padding-right: 10px;"},{default:y((()=>[R(i,{value:e.menuValue,options:e.menuOptions,"default-expand-all":""},null,8,["value","options"])])),_:1},8,["width"]),R(u,{"native-scrollbar":!1,"content-style":"min-height: calc(100vh - var(--header-height));padding:2rem;"},{default:y((()=>[R("div",null,[R("main",null,[b(e.$slots,"content")])]),R(l,{bordered:"",position:"absolute",class:"p-5"},{default:y((()=>[R("footer",null,[b(e.$slots,"footer")])])),_:3})])),_:3})])),_:1})],64)};const se={},ie=function(e,t){if(!t)return e();if(void 0===oe){const e=document.createElement("link").relList;oe=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in se)return;se[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":oe,t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((e,t)=>{r.addEventListener("load",e),r.addEventListener("error",t)})):void 0}))).then((()=>e()))},ce=[{path:"/",redirect:"/refs"},{path:"/refs",name:"Refs",meta:{dir:"/Refs"},redirect:"/refs/ref",children:[{path:"ref",component:"Ref"},{path:"unRef",component:"UnRef"},{path:"toRef",component:"ToRef"},{path:"toRefs",component:"ToRefs"},{path:"isRef",component:"IsRef"},{path:"customRef",component:"CustomRef"},{path:"shallowRef",component:"ShallowRef"},{path:"triggerRef",component:"TriggerRef"}]},{path:"/baseReactivity",name:"BaseReactivity",meta:{dir:"/BaseReactivity"},redirect:"/baseReactivity/reactive",children:[{path:"reactive",component:"Reactive"},{path:"readonly",component:"Readonly"},{path:"isProxy",component:"IsProxy"},{path:"isReactive",component:"IsReactive"},{path:"isReadonly",component:"IsReadonly"},{path:"toRaw",component:"ToRaw"},{path:"markRaw",component:"MarkRaw"},{path:"shallowReactive",component:"ShallowReactive"},{path:"shallowReadonly",component:"ShallowReadonly"}]},{path:"/computed",component:"Computed"},{path:"/watch",component:"Watch"},{path:"/watchEffect",component:"WatchEffect"},{path:"/event",component:"Event"},{path:"/slots",component:"Slots"},{path:"/teleport",component:"Teleport"},{path:"/lifeCycle",component:"LifeCycle"},{path:"/crossComponent",component:"CrossComponent"},{path:"/useHooks",component:"UseHooks"},{path:"/routerApi",component:"RouterApi"},{path:"/asyncComponent",component:"AsyncComponent"},{path:"/functionRender",component:"FunctionRender"},{path:"/transition",component:"Transition"},{path:"/fragments",component:"Fragments"},{path:"/scriptSetup",component:"ScriptSetup"},{path:"/cssVar",component:"CssVar"},{path:"/customDirective",component:"CustomDirective"}];function le({component:e},t){return()=>{return R(T("router-link"),{to:t},"function"==typeof(n=e)||"[object Object]"===Object.prototype.toString.call(n)&&!V(n)?e:{default:()=>[e]});var n}}function ue(e){switch(e){case"../views/AsyncComponent/index.vue":return ie((()=>import("./index.b1eadb51.js")),["/vue3-demo/assets/index.b1eadb51.js","/vue3-demo/assets/vendor.85fa7a64.js"]);case"../views/Computed/index.vue":return ie((()=>import("./index.ae52a01d.js")),["/vue3-demo/assets/index.ae52a01d.js","/vue3-demo/assets/index.b1d7d06e.css","/vue3-demo/assets/index.4767c18a.js","/vue3-demo/assets/vendor.85fa7a64.js"]);case"../views/CrossComponent/index.vue":return ie((()=>import("./index.7e18e4b9.js")),["/vue3-demo/assets/index.7e18e4b9.js","/vue3-demo/assets/index.4767c18a.js","/vue3-demo/assets/vendor.85fa7a64.js","/vue3-demo/assets/GridLayout.vue_vue&type=script&lang.f1d59746.js"]);case"../views/CssVar/index.vue":return ie((()=>import("./index.cbac5de7.js")),["/vue3-demo/assets/index.cbac5de7.js","/vue3-demo/assets/index.6d1526a8.css","/vue3-demo/assets/GridLayout.vue_vue&type=script&lang.f1d59746.js","/vue3-demo/assets/vendor.85fa7a64.js"]);case"../views/CustomDirective/index.vue":return ie((()=>import("./index.8f1dde05.js")),["/vue3-demo/assets/index.8f1dde05.js","/vue3-demo/assets/vendor.85fa7a64.js"]);case"../views/Event/index.vue":return ie((()=>import("./index.c76a59e7.js")),["/vue3-demo/assets/index.c76a59e7.js","/vue3-demo/assets/index.a61030df.css","/vue3-demo/assets/vendor.85fa7a64.js"]);case"../views/Fragments/index.vue":return ie((()=>import("./index.fbedd65e.js")),["/vue3-demo/assets/index.fbedd65e.js","/vue3-demo/assets/vendor.85fa7a64.js"]);case"../views/FunctionRender/index.vue":return ie((()=>import("./index.3c5925a7.js")),["/vue3-demo/assets/index.3c5925a7.js","/vue3-demo/assets/vendor.85fa7a64.js"]);case"../views/LifeCycle/index.vue":return ie((()=>import("./index.0b1abd37.js")),["/vue3-demo/assets/index.0b1abd37.js","/vue3-demo/assets/GridLayout.vue_vue&type=script&lang.f1d59746.js","/vue3-demo/assets/vendor.85fa7a64.js"]);case"../views/RouterApi/index.vue":return ie((()=>import("./index.2b2ae95a.js")),["/vue3-demo/assets/index.2b2ae95a.js","/vue3-demo/assets/vendor.85fa7a64.js"]);case"../views/ScriptSetup/index.vue":return ie((()=>import("./index.b52343f8.js")),["/vue3-demo/assets/index.b52343f8.js","/vue3-demo/assets/GridLayout.vue_vue&type=script&lang.f1d59746.js","/vue3-demo/assets/vendor.85fa7a64.js","/vue3-demo/assets/index.4767c18a.js"]);case"../views/Slots/index.vue":return ie((()=>import("./index.f579de13.js")),["/vue3-demo/assets/index.f579de13.js","/vue3-demo/assets/vendor.85fa7a64.js","/vue3-demo/assets/index.4767c18a.js"]);case"../views/Teleport/index.vue":return ie((()=>import("./index.7771ec67.js")),["/vue3-demo/assets/index.7771ec67.js","/vue3-demo/assets/index.9d6308d9.css","/vue3-demo/assets/vendor.85fa7a64.js"]);case"../views/Transition/index.vue":return ie((()=>import("./index.55a324d4.js")),["/vue3-demo/assets/index.55a324d4.js","/vue3-demo/assets/index.e48c43c6.css","/vue3-demo/assets/vendor.85fa7a64.js"]);case"../views/UseHooks/index.vue":return ie((()=>import("./index.fdd4379b.js")),["/vue3-demo/assets/index.fdd4379b.js","/vue3-demo/assets/index.4767c18a.js","/vue3-demo/assets/vendor.85fa7a64.js"]);case"../views/Watch/index.vue":return ie((()=>import("./index.fe013a92.js")),["/vue3-demo/assets/index.fe013a92.js","/vue3-demo/assets/GridLayout.vue_vue&type=script&lang.f1d59746.js","/vue3-demo/assets/vendor.85fa7a64.js","/vue3-demo/assets/index.4767c18a.js"]);case"../views/WatchEffect/index.vue":return ie((()=>import("./index.0e8b8003.js")),["/vue3-demo/assets/index.0e8b8003.js","/vue3-demo/assets/GridLayout.vue_vue&type=script&lang.f1d59746.js","/vue3-demo/assets/vendor.85fa7a64.js","/vue3-demo/assets/index.4767c18a.js"]);default:return Promise.reject(new Error("Unknown variable dynamic import: "+e))}}const pe={},de=(e,t)=>{const n=[],r=(null==t?void 0:t.dir)||"";for(let a of e){const e=a,{component:t,children:o,meta:s}=e,l=c(e,["component","children","meta"]),u=i({},l);u.component=t?()=>ue(`../views${r}/${t}/index.vue`):{render:()=>R(T("router-view"),null,null)},o&&(u.children=de(o,s)),n.push(u)}return n},me=de(ce),he=P({history:I(),routes:me});function ve(e,t=""){return e.map((e=>{const n={};if(e.component){const r=`${t?t+"/":""}${e.path}`;n.key=r,n.label=le(e,r)}else n.key=e.name,n.label=e.name;return e.children&&(n.children=ve(e.children,e.path)),n}))}he.beforeEach(((e,t,n)=>{var r;t&&e.path===t.path||(pe.value&&(null==(r=pe.value)||r.start()),n())})),he.afterEach(((e,t)=>{var n;t&&e.path===t.path||pe.value&&(null==(n=pe.value)||n.finish())}));const fe=ce.filter((e=>"/"!==e.path));var _e=v({name:"app",setup(){const e=$(),t=F(),n=ne(),r=C(!1),a=d((()=>n.getRefreshId)),o=d((()=>e.path));L((()=>{r.value?n.setThemeName("dark"):n.setThemeName("light"),console.log(o.value,"menuValue")})),D((()=>{pe.value=t,null==t||t.finish()}));const s=ve(fe);return{vueVer:k,naiveuiVer:S,menuOptions:s,menuValue:o,active:r,refreshId:a,handleRefresh:()=>{n.resetAllState()}}},components:{MainLayout:re}});const xe={class:"flex flex-row items-center px-8 h-full justify-between"},Re=R("h2",{class:"text-2xl font-bold"},"Vue3 Api Demo",-1),ye=R("div",{class:"teleport-header-container"},null,-1),ge={class:"flex flex-row items-center"},we=W(" light "),Ee=W(" dark "),be={class:"flex w-full justify-center items-center teleport-footer-container"},Oe={class:"mr-15 text-md"},je={class:"mr-15 text-md"},Ae=W("refresh");_e.render=function(e,t,n,r,a,o){const s=N,i=U,c=T("router-view"),l=M,u=re;return _(),x(u,{menuOptions:e.menuOptions,menuValue:e.menuValue},{header:y((()=>[R("div",xe,[Re,ye,R("div",ge,[R(s,{tag:"span",class:["text-md mr-2",[e.active?"":"text-$primary-color transition-colors duration-400"]]},{default:y((()=>[we])),_:1},8,["class"]),R(i,{value:e.active,"onUpdate:value":t[1]||(t[1]=t=>e.active=t),size:"medium"},null,8,["value"]),R(s,{tag:"span",class:["text-md ml-2",[e.active?"text-$primary-color transition-colors duration-400":""]]},{default:y((()=>[Ee])),_:1},8,["class"])])])])),content:y((()=>[R(c,{key:e.refreshId})])),footer:y((()=>[R("div",be,[R("p",Oe,"vue version: "+H(e.vueVer),1),R("p",je,"naive-ui version: "+H(e.naiveuiVer),1),R(l,{type:"primary",class:"mr-15",onClick:e.handleRefresh},{default:y((()=>[Ae])),_:1},8,["onClick"])])])),_:1},8,["menuOptions","menuValue"])};var Ve=v({name:"AppProvider",components:{App:_e},setup(){const e=ne(),t=d((()=>e.getThemeCssVars)),n=d((()=>e.getThemeOverries));return B.registerLanguage("javascript",q),{theme:t,themeOverrides:n,hljs:B}}});Ve.render=function(e,t,n,r,a,o){const s=T("App"),i=G,c=J,l=z;return _(),x(l,{hljs:e.hljs,theme:e.theme,"theme-overrides":e.themeOverrides},{default:y((()=>[R(c,null,{default:y((()=>[R(i,null,{default:y((()=>[R(s)])),_:1})])),_:1})])),_:1},8,["hljs","theme","theme-overrides"])};const Te={mounted:(e,t)=>{console.log(e,"el"),console.log(t,"binding");const n=e.style;n.position="fixed",n.bottom="10rem";n[t.arg||"left"]=t.value+"px"},updated:(e,t)=>{const n=e.style,r=t.arg||"left";n.left="",n.right="",n[r]=t.value+"px"}};function Pe(e){!function(e){e.directive("pin",Te)}(e)}!function(){return e=this,t=null,n=function*(){const e=K(Ve);!function(e){e.use(X)}(e),function(e){e.use(he)}(e),Pe(e),yield he.isReady(),e.mount("#app",!0)},new Promise(((r,a)=>{var o=e=>{try{i(n.next(e))}catch(t){a(t)}},s=e=>{try{i(n.throw(e))}catch(t){a(t)}},i=e=>e.done?r(e.value):Promise.resolve(e.value).then(o,s);i((n=n.apply(e,t)).next())}));var e,t,n}();export{ce as L,ie as _,ne as a,Q as c,ee as r,Z as s,Y as u};