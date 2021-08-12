var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a;import{c as i,d as p,r as d,a as m,t as l,b as c,e as h,u as _,f as u,g as f,w as v,h as E,i as R,j as x,F as y,_ as b,k as O,o as g,l as j,m as T,n as V,p as P,q as A,s as I,v as L,x as D,y as w,z as C,A as k,B as F,C as S,D as N,E as $,G as M,H,I as W,J as U,K,L as B,M as q,N as z,O as G,P as J,Q,R as X,S as Y,T as Z,U as ee}from"./vendor.64c953bc.js";const te=i();const ne=p({id:"demo",state:()=>({x:0,y:0}),getters:{getX(){return this.x},getY(){return this.y}},actions:{setValue(e){this.x+=1,this.y+=e[0]}}}),ae=function(){const e=d({count:0,count2:10,count3:100});return i=((e,t)=>{for(var n in t||(t={}))r.call(t,n)&&s(e,n,t[n]);if(a)for(var n of a(t))o.call(t,n)&&s(e,n,t[n]);return e})({},l(e)),t(i,n({add:()=>{e.count++,e.count2+=10,e.count3+=100}}));var i},re=d({num:0,num2:m((()=>re.num+1)),num3:m((()=>re.num+2))}),oe=()=>{re.num=0};var se={common:{primaryColor:"#0960BDFF",primaryColorHover:"#186DCFFF",primaryColorPressed:"#043AA8FF",primaryColorSuppl:"#186DCFFF"}};const ie=p({id:"app",state:()=>({refreshId:0,headerHeight:64,siderWidth:250,themeName:"light"}),getters:{getRefreshId(){return this.refreshId},getHeaderHeight(){return this.headerHeight},getSiderWidth(){return this.siderWidth},getThemeName(){return this.themeName},getThemeCssVars(){return"dark"===this.themeName?c:null},getThemeOverries(){return"dark"===this.themeName?void 0:se}},actions:{setThemeName(e){this.themeName=e},resetAllState(){this.refreshId++,ne().$reset(),oe()}}});var pe=h({name:"MainLayout",props:["menuOptions","menuValue"],setup(){const e=_(),t=ie();u((()=>({"header-height":`${t.getHeaderHeight}px`})));const n=m((()=>e.name)),a=f([]);v((()=>e.path),(e=>{const t=e.split("/"),n=t.slice(1,t.length-1).map((e=>e.charAt(0).toLocaleUpperCase()+e.slice(1)));a.value=n}),{immediate:!0});return{siderWidth:t.getSiderWidth,expandedKeys:a,menuValue:n,handleUpdateExpandedKeys:e=>{a.value=e}}}});const de={class:"h-full"};let me;pe.render=function(e,t,n,a,r,o){const s=b,i=V,p=P,d=A,m=I,l=O;return g(),E(y,null,[R(s,{class:"h-$header-height",bordered:""},{default:x((()=>[j("header",de,[T(e.$slots,"header")])])),_:3}),R(l,{position:"absolute",class:"!top-$header-height","has-sider":""},{default:x((()=>[R(p,{bordered:"",inverted:!1,"native-scrollbar":!1,"collapse-mode":"width","collapsed-width":0,width:e.siderWidth,"show-collapsed-content":!1,"show-trigger":"bar","content-style":"padding-right: 10px;"},{default:x((()=>[R(i,{inverted:!1,value:e.menuValue,options:e.menuOptions,"expanded-keys":e.expandedKeys,"onUpdate:expandedKeys":e.handleUpdateExpandedKeys},null,8,["value","options","expanded-keys","onUpdate:expandedKeys"])])),_:1},8,["width"]),R(l,{"native-scrollbar":!1,"content-style":"min-height: calc(100vh - var(--header-height));padding:2rem;"},{default:x((()=>[R(d),j("main",null,[T(e.$slots,"content")]),R(m,{bordered:"",position:"absolute",class:"p-5"},{default:x((()=>[j("footer",null,[T(e.$slots,"footer")])])),_:3})])),_:3})])),_:3})],64)};const le={},ce=function(e,t){if(!t||0===t.length)return e();if(void 0===me){const e=document.createElement("link").relList;me=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if((e=`/vue3-api-demo/${e}`)in le)return;le[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":me,t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((e,t)=>{a.addEventListener("load",e),a.addEventListener("error",t)})):void 0}))).then((()=>e()))},he=[{path:"/",redirect:"/refs"},{path:"/rfcs",name:"Rfcs",redirect:"/rfcs/scriptSetup",children:[{path:"scriptSetup",name:"ScriptSetup",component:()=>ce((()=>import("./index.84b27a9a.js")),["assets/index.84b27a9a.js","assets/GridLayout.vue_vue&type=script&lang.c989fc64.js","assets/vendor.64c953bc.js","assets/index.77a65783.js"])}]},{path:"/newFeatures",name:"NewFeatures",redirect:"/newFeatures/vbindModifiers",meta:{title:"NewFeatures in 3.2.x"},children:[{path:"vbindModifiers",name:"VbindModifiers",component:()=>ce((()=>import("./vBind.404b3ad5.js")),["assets/vBind.404b3ad5.js","assets/vendor.64c953bc.js"])},{path:"v-memo",name:"V-memo",component:()=>ce((()=>import("./vMemo.8b1697b0.js")),["assets/vMemo.8b1697b0.js","assets/vendor.64c953bc.js"])}]},{path:"/refs",name:"Refs",redirect:"/refs/ref",children:[{path:"ref",name:"Ref",component:()=>ce((()=>import("./index.279ceed6.js")),["assets/index.279ceed6.js","assets/vendor.64c953bc.js"])},{path:"unRef",name:"UnRef",component:()=>ce((()=>import("./index.5b5940d9.js")),["assets/index.5b5940d9.js","assets/index.77a65783.js","assets/vendor.64c953bc.js"])},{path:"toRef",name:"ToRef",component:()=>ce((()=>import("./index.b0ed8c3e.js")),["assets/index.b0ed8c3e.js","assets/index.77a65783.js","assets/vendor.64c953bc.js"])},{path:"toRefs",name:"ToRefs",component:()=>ce((()=>import("./index.6367e74c.js")),["assets/index.6367e74c.js","assets/index.77a65783.js","assets/vendor.64c953bc.js"])},{path:"isRef",name:"IsRef",component:()=>ce((()=>import("./index.fa0d862e.js")),["assets/index.fa0d862e.js","assets/vendor.64c953bc.js"])},{path:"customRef",name:"CustomRef",component:()=>ce((()=>import("./index.bb11baa0.js")),["assets/index.bb11baa0.js","assets/vendor.64c953bc.js"])},{path:"shallowRef",name:"ShallowRef",component:()=>ce((()=>import("./index.326d1d9c.js")),["assets/index.326d1d9c.js","assets/index.77a65783.js","assets/vendor.64c953bc.js"])},{path:"triggerRef",name:"TriggerRef",component:()=>ce((()=>import("./index.5b75f29d.js")),["assets/index.5b75f29d.js","assets/index.77a65783.js","assets/vendor.64c953bc.js"])}]},{path:"/baseReactivity",name:"BaseReactivity",redirect:"/baseReactivity/reactive",children:[{path:"reactive",name:"Reactive",component:()=>ce((()=>import("./index.de25593e.js")),["assets/index.de25593e.js","assets/vendor.64c953bc.js"])},{path:"readonly",name:"Readonly",component:()=>ce((()=>import("./index.e9afdf75.js")),["assets/index.e9afdf75.js","assets/vendor.64c953bc.js"])},{path:"isProxy",name:"IsProxy",component:()=>ce((()=>import("./index.5b4d66a0.js")),["assets/index.5b4d66a0.js","assets/vendor.64c953bc.js"])},{path:"isReactive",name:"IsReactive",component:()=>ce((()=>import("./index.542da06b.js")),["assets/index.542da06b.js","assets/vendor.64c953bc.js"])},{path:"isReadonly",name:"IsReadonly",component:()=>ce((()=>import("./index.55d42fb7.js")),["assets/index.55d42fb7.js","assets/vendor.64c953bc.js"])},{path:"toRaw",name:"ToRaw",component:()=>ce((()=>import("./index.c8b52c52.js")),["assets/index.c8b52c52.js","assets/vendor.64c953bc.js"])},{path:"markRaw",name:"MarkRaw",component:()=>ce((()=>import("./index.059701e1.js")),["assets/index.059701e1.js","assets/vendor.64c953bc.js"])},{path:"shallowReactive",name:"ShallowReactive",component:()=>ce((()=>import("./index.1ccabdc8.js")),["assets/index.1ccabdc8.js","assets/vendor.64c953bc.js"])},{path:"shallowReadonly",name:"ShallowReadonly",component:()=>ce((()=>import("./index.40647fc9.js")),["assets/index.40647fc9.js","assets/vendor.64c953bc.js"])}]},{path:"/computed",name:"Computed",component:()=>ce((()=>import("./index.08f3cb71.js")),["assets/index.08f3cb71.js","assets/index.b1d7d06e.css","assets/index.77a65783.js","assets/vendor.64c953bc.js"])},{path:"/watch",name:"Watch",component:()=>ce((()=>import("./index.7a80a43e.js")),["assets/index.7a80a43e.js","assets/GridLayout.vue_vue&type=script&lang.c989fc64.js","assets/vendor.64c953bc.js","assets/index.77a65783.js"])},{path:"/watchEffect",name:"WatchEffect",component:()=>ce((()=>import("./index.9d6ae692.js")),["assets/index.9d6ae692.js","assets/GridLayout.vue_vue&type=script&lang.c989fc64.js","assets/vendor.64c953bc.js","assets/index.77a65783.js"])},{path:"/event",name:"Event",component:()=>ce((()=>import("./index.60c86210.js")),["assets/index.60c86210.js","assets/index.a61030df.css","assets/vendor.64c953bc.js"])},{path:"/slots",name:"Slots",component:()=>ce((()=>import("./index.4b614700.js")),["assets/index.4b614700.js","assets/vendor.64c953bc.js","assets/index.77a65783.js"])},{path:"/teleport",name:"Teleport",component:()=>ce((()=>import("./index.aaf5cde2.js")),["assets/index.aaf5cde2.js","assets/index.9d6308d9.css","assets/vendor.64c953bc.js"])},{path:"/lifeCycle",name:"LifeCycle",component:()=>ce((()=>import("./index.c9cadbbe.js")),["assets/index.c9cadbbe.js","assets/GridLayout.vue_vue&type=script&lang.c989fc64.js","assets/vendor.64c953bc.js"])},{path:"/crossComponent",name:"CrossComponent",component:()=>ce((()=>import("./index.5791a384.js")),["assets/index.5791a384.js","assets/index.77a65783.js","assets/vendor.64c953bc.js","assets/GridLayout.vue_vue&type=script&lang.c989fc64.js"])},{path:"/useHooks",name:"UseHooks",component:()=>ce((()=>import("./index.c48067fd.js")),["assets/index.c48067fd.js","assets/index.77a65783.js","assets/vendor.64c953bc.js"])},{path:"/routerApi",name:"RouterApi",component:()=>ce((()=>import("./index.808068aa.js")),["assets/index.808068aa.js","assets/vendor.64c953bc.js"])},{path:"/asyncComponent",name:"AsyncComponent",component:()=>ce((()=>import("./index.7d7d76d5.js")),["assets/index.7d7d76d5.js","assets/vendor.64c953bc.js"])},{path:"/functionRender",name:"FunctionRender",component:()=>ce((()=>import("./index.493c3a8a.js")),["assets/index.493c3a8a.js","assets/vendor.64c953bc.js"])},{path:"/transition",name:"Transition",component:()=>ce((()=>import("./index.44a0543b.js")),["assets/index.44a0543b.js","assets/index.e48c43c6.css","assets/vendor.64c953bc.js"])},{path:"/fragments",name:"Fragments",component:()=>ce((()=>import("./index.2f1ba595.js")),["assets/index.2f1ba595.js","assets/GridLayout.vue_vue&type=script&lang.c989fc64.js","assets/vendor.64c953bc.js"])},{path:"/cssVar",name:"CssVar",component:()=>ce((()=>import("./index.ebb3bbf5.js")),["assets/index.ebb3bbf5.js","assets/index.8daaf171.css","assets/GridLayout.vue_vue&type=script&lang.c989fc64.js","assets/vendor.64c953bc.js"])},{path:"/customDirective",name:"CustomDirective",component:()=>ce((()=>import("./index.58ec91ec.js")),["assets/index.58ec91ec.js","assets/vendor.64c953bc.js"])}];function _e(e,t){return()=>{return R(L("router-link"),{to:t},"function"==typeof(n=e)||"[object Object]"===Object.prototype.toString.call(n)&&!D(n)?e:{default:()=>[e]});var n}}const ue={},fe=e=>{for(let t of e){const{component:e,children:n}=t;e||(t.component={render:()=>R(L("router-view"),null,null)}),n&&(t.children=fe(n))}return e},ve=fe(w(he)),Ee=C({history:k(),routes:ve});function Re(e,t=""){return e.map((e=>{var n,a;const r={},o=`${t?t+"/":""}${e.path}`,s=null!=(a=null==(n=null==e?void 0:e.meta)?void 0:n.title)?a:e.name;return r.key=e.name,e.component?r.label=_e(s,o):r.label=s,e.children&&(r.children=Re(e.children,o)),r}))}Ee.beforeEach(((e,t,n)=>{var a;t&&e.path===t.path||(ue.value&&(null==(a=ue.value)||a.start()),n())})),Ee.afterEach(((e,t)=>{var n;t&&e.path===t.path||ue.value&&(null==(n=ue.value)||n.finish())}));const xe=he.filter((e=>"/"!==e.path)),ye=["light","auto","dark"];var be=h({name:"app",setup(){const e=f("auto"),t=F(),n=ie(),a=m((()=>n.getRefreshId));S((()=>{ue.value=t,null==t||t.finish()}));const r=Re(xe),o=N(),s=$("__theme__","auto");v(e,(e=>{switch(e){case"light":n.setThemeName("light");break;case"dark":n.setThemeName("dark")}})),M((()=>{"auto"===e.value&&(o.value?n.setThemeName("dark"):n.setThemeName("light"))}));return{themeMode:ye,currentMode:e,handleClick:t=>{e.value=t,s.value=t},vueVer:H,naiveuiVer:W,menuOptions:r,refreshId:a,handleRefresh:()=>{n.resetAllState()}}}});const Oe={class:"flex flex-row items-center px-8 h-full justify-between"},ge=j("h2",{class:"text-2xl font-bold"},"Vue3 Api Demo",-1),je=j("div",{class:"teleport-header-container"},null,-1),Te={class:"flex w-full justify-center items-center teleport-footer-container"},Ve={class:"mr-15 text-md"},Pe={class:"mr-15 text-md"},Ae=q("refresh");be.render=function(e,t,n,a,r,o){const s=z,i=G,p=L("router-view"),d=pe;return g(),U(d,{menuOptions:e.menuOptions},{header:x((()=>[j("div",Oe,[ge,je,R(i,{size:"small",inverted:""},{default:x((()=>[(g(!0),E(y,null,K(e.themeMode,(t=>(g(),U(s,{type:t===e.currentMode?"primary":"default",onClick:n=>e.handleClick(t)},{default:x((()=>[q(B(t),1)])),_:2},1032,["type","onClick"])))),256))])),_:1})])])),content:x((()=>[R(p,{key:e.refreshId})])),footer:x((()=>[j("div",Te,[j("p",Ve,"vue version: "+B(e.vueVer),1),j("p",Pe,"naive-ui version: "+B(e.naiveuiVer),1),R(s,{type:"primary",class:"mr-15",onClick:e.handleRefresh},{default:x((()=>[Ae])),_:1},8,["onClick"])])])),_:1},8,["menuOptions"])};var Ie=h({name:"AppProvider",components:{App:be},setup(){const e=ie(),t=m((()=>e.getThemeCssVars)),n=m((()=>e.getThemeOverries));return J.registerLanguage("javascript",Q),{theme:t,themeOverrides:n,hljs:J}}});Ie.render=function(e,t,n,a,r,o){const s=L("App"),i=Y,p=Z,d=X;return g(),U(d,{hljs:e.hljs,theme:e.theme,"theme-overrides":e.themeOverrides},{default:x((()=>[R(p,null,{default:x((()=>[R(i,null,{default:x((()=>[R(s)])),_:1})])),_:1})])),_:1},8,["hljs","theme","theme-overrides"])};const Le={mounted:(e,t)=>{console.log(e,"el"),console.log(t,"binding");const n=e.style;n.position="fixed",n.bottom="10rem";n[t.arg||"left"]=t.value+"px"},updated:(e,t)=>{const n=e.style,a=t.arg||"left";n.left="",n.right="",n[a]=t.value+"px"}};function De(e){!function(e){e.directive("pin",Le)}(e)}!function(){return e=this,t=null,n=function*(){const e=ee(Ie);!function(e){e.use(te)}(e),function(e){e.use(Ee)}(e),De(e),yield Ee.isReady(),e.mount("#app",!0)},new Promise(((a,r)=>{var o=e=>{try{i(n.next(e))}catch(t){r(t)}},s=e=>{try{i(n.throw(e))}catch(t){r(t)}},i=e=>e.done?a(e.value):Promise.resolve(e.value).then(o,s);i((n=n.apply(e,t)).next())}));var e,t,n}();export{he as L,ce as _,ie as a,ae as c,oe as r,re as s,ne as u};
