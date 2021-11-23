var Y=Object.defineProperty,J=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var w=(e,t,o)=>t in e?Y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,O=(e,t)=>{for(var o in t||(t={}))Z.call(t,o)&&w(e,o,t[o]);if(S)for(var o of S(t))ee.call(t,o)&&w(e,o,t[o]);return e},C=(e,t)=>J(e,Q(t));var k=(e,t,o)=>new Promise((n,r)=>{var i=p=>{try{c(o.next(p))}catch(l){r(l)}},a=p=>{try{c(o.throw(p))}catch(l){r(l)}},c=p=>p.done?n(p.value):Promise.resolve(p.value).then(i,a);c((o=o.apply(e,t)).next())});import{c as te,d as F,r as M,a as h,t as oe,b as ne,e as g,u as re,f as x,g as V,h as E,i as u,j as d,w as _,_ as se,o as R,k as ae,l as H,m as j,n as I,p as ie,F as ce,q as pe,s as de,v as ue,x as _e,y as le,z as me,A as L,B as he,C as fe,D as ve,E as ge,G as Ee,H as Re,I as ye,J as Ae,K as Te,L as xe,M as Ve,N,O as K,P as U,Q as Le,R as W,S as De,T as Pe,U as be,V as Oe,W as je,X as Ie,Y as $e,Z as Se}from"./vendor.2d6a9d99.js";const we=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}};we();const Ce=te();function ke(e){e.use(Ce)}const Fe=F({id:"demo",state:()=>({x:0,y:0}),getters:{getX(){return this.x},getY(){return this.y}},actions:{setValue(e){this.x+=1,this.y+=e[0]}}}),St=function(){const e=M({count:0,count2:10,count3:100}),t=()=>{e.count++,e.count2+=10,e.count3+=100};return C(O({},oe(e)),{add:t})},$=M({num:0,num2:h(()=>$.num+1),num3:h(()=>$.num+2)}),Me=()=>{$.num=0},He={primaryColor:"#0960BDFF",primaryColorHover:"#186DCFFF",primaryColorPressed:"#043AA8FF",primaryColorSuppl:"#186DCFFF"};var Ne={common:He},y;(function(e){e.DARK="dark",e.LIGHT="light"})(y||(y={}));const Ke=y.LIGHT,Ue="__theme__",D=F({id:"app",state:()=>({refreshId:0,headerHeight:64,siderWidth:250,themeMode:Ke}),getters:{getRefreshId(){return this.refreshId},getHeaderHeight(){return this.headerHeight},getSiderWidth(){return this.siderWidth},getThemeMode(){return this.themeMode},getNaiveThemeProps(){return this.themeMode==="dark"?{theme:ne,"theme-overrides":null}:{"theme-overrides":Ne}}},actions:{setThemeMode(e){this.themeMode=e},resetAllState(){this.refreshId++,Fe().$reset(),Me()}}});var A=(e,t)=>{const o=e.__vccOpts||e;for(const[n,r]of t)o[n]=r;return o};const We=g({name:"SourceLink",setup(){const{currentRoute:e}=re(),t=h(()=>{var n;return(n=x(e).meta)==null?void 0:n.dir});return{getUrl:h(()=>`https://github.com/zmtlwzy/vue3-api-demo/blob/main/src/views/${x(t)||x(e).fullPath.split("/").slice(1).map(r=>r.charAt(0).toLocaleUpperCase()+r.slice(1)).join("/")+"/index.vue"}`)}}}),Be={class:"mt-15 mb-20"},ze=u("div",{class:"group inline-flex items-center"},[u("span",null,"Source"),u("i",{class:"i-akar-icons-arrow-right text-sm transform op0 transition","group-hover":"opacity-100 translate-x-1"})],-1);function Ge(e,t,o,n,r,i){const a=se;return R(),V("div",null,[E(e.$slots,"default"),u("div",Be,[d(a,{href:e.getUrl,target:"_blank",class:"no-underline"},{default:_(()=>[ze]),_:1},8,["href"])])])}var B=A(We,[["render",Ge]]);const qe=g({name:"MainLayout",components:{Source:B},props:["menuOptions","menuValue"],setup(){const e=ae(),t=D();H(()=>({"header-height":`${t.getHeaderHeight}px`}));const o=j({minHeight:"calc(100vh - var(--header-height))",padding:"2rem",display:"flex",flexDirection:"column"}),n=h(()=>e.name),r=j([]);I(()=>e.path,a=>{const c=a.split("/"),l=c.slice(1,c.length-1).map(f=>ie(f));r.value=l},{immediate:!0});const i=a=>{r.value=a};return{siderWidth:t.getSiderWidth,expandedKeys:r,menuValue:n,getStyle:o,handleUpdateExpandedKeys:i}}}),Xe={class:"h-full"};function Ye(e,t,o,n,r,i){const a=pe,c=de,p=ue,l=_e,f=B,v=le,b=me;return R(),V(ce,null,[d(a,{class:"h-$header-height",bordered:""},{default:_(()=>[u("header",Xe,[E(e.$slots,"header")])]),_:3}),d(b,{position:"absolute",class:"!top-$header-height","has-sider":""},{default:_(()=>[d(p,{bordered:"",inverted:!1,"native-scrollbar":!1,"collapse-mode":"width","collapsed-width":0,width:e.siderWidth,"show-collapsed-content":!1,"show-trigger":"bar","content-style":"padding-right: 10px;"},{default:_(()=>[d(c,{inverted:!1,value:e.menuValue,options:e.menuOptions,"expanded-keys":e.expandedKeys,"onUpdate:expandedKeys":e.handleUpdateExpandedKeys},null,8,["value","options","expanded-keys","onUpdate:expandedKeys"])]),_:1},8,["width"]),d(b,{"native-scrollbar":!1,"content-style":e.getStyle},{default:_(()=>[d(l),d(f,{class:"flex-1"},{default:_(()=>[u("main",null,[E(e.$slots,"content")])]),_:3}),d(v,{bordered:"",class:"p-5 -m-8"},{default:_(()=>[u("footer",null,[E(e.$slots,"footer")])]),_:3})]),_:3},8,["content-style"])]),_:3})],64)}var Je=A(qe,[["render",Ye]]);const Qe="modulepreload",z={},Ze="/vue3-api-demo/",s=function(t,o){return!o||o.length===0?t():Promise.all(o.map(n=>{if(n=`${Ze}${n}`,n in z)return;z[n]=!0;const r=n.endsWith(".css"),i=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${i}`))return;const a=document.createElement("link");if(a.rel=r?"stylesheet":Qe,r||(a.as="script",a.crossOrigin=""),a.href=n,document.head.appendChild(a),r)return new Promise((c,p)=>{a.addEventListener("load",c),a.addEventListener("error",p)})})).then(()=>t())},G=[{path:"/",redirect:"/refs"},{path:"/rfcs",name:"Rfcs",redirect:"/rfcs/scriptSetup",children:[{path:"scriptSetup",name:"ScriptSetup",meta:{dir:"ScriptSetup/index.vue"},component:()=>s(()=>import("./index.8c52cdb4.js"),["assets/index.8c52cdb4.js","assets/index.5b34989c.css","assets/DesTable.c9148b09.js","assets/DesTable.6572330c.css","assets/vendor.2d6a9d99.js"])}]},{path:"/newFeatures",name:"NewFeatures",redirect:"/newFeatures/vbindModifiers",meta:{title:"NewFeatures in 3.2.x"},children:[{path:"vbindModifiers",name:"VbindModifiers",meta:{dir:"NewFeatures/vBind.vue"},component:()=>s(()=>import("./vBind.0cc1e70e.js"),["assets/vBind.0cc1e70e.js","assets/vendor.2d6a9d99.js"])},{path:"v-memo",name:"V-memo",meta:{dir:"NewFeatures/vMemo.vue"},component:()=>s(()=>import("./vMemo.746f190d.js"),["assets/vMemo.746f190d.js","assets/vMemo.9364714d.css","assets/vendor.2d6a9d99.js"])},{path:"customElement",name:"CustomElement",meta:{dir:"NewFeatures/customElement.vue"},component:()=>s(()=>import("./customElement.ca30f913.js"),["assets/customElement.ca30f913.js","assets/vendor.2d6a9d99.js"])},{path:"effectScope",name:"EffectScope",meta:{dir:"NewFeatures/effectScope.vue"},component:()=>s(()=>import("./effectScope.0b4279ff.js"),["assets/effectScope.0b4279ff.js","assets/DesTable.c9148b09.js","assets/DesTable.6572330c.css","assets/vendor.2d6a9d99.js"])}]},{path:"/refs",name:"Refs",redirect:"/refs/ref",children:[{path:"ref",name:"Ref",component:()=>s(()=>import("./index.e178c610.js"),["assets/index.e178c610.js","assets/vendor.2d6a9d99.js"])},{path:"unRef",name:"UnRef",component:()=>s(()=>import("./index.e8925e3e.js"),["assets/index.e8925e3e.js","assets/DesTable.c9148b09.js","assets/DesTable.6572330c.css","assets/vendor.2d6a9d99.js"])},{path:"toRef",name:"ToRef",component:()=>s(()=>import("./index.9779823e.js"),["assets/index.9779823e.js","assets/index.7378d90c.css","assets/DesTable.c9148b09.js","assets/DesTable.6572330c.css","assets/vendor.2d6a9d99.js"])},{path:"toRefs",name:"ToRefs",component:()=>s(()=>import("./index.ca0c40e4.js"),["assets/index.ca0c40e4.js","assets/DesTable.c9148b09.js","assets/DesTable.6572330c.css","assets/vendor.2d6a9d99.js"])},{path:"isRef",name:"IsRef",component:()=>s(()=>import("./index.d0cead3c.js"),["assets/index.d0cead3c.js","assets/vendor.2d6a9d99.js"])},{path:"customRef",name:"CustomRef",component:()=>s(()=>import("./index.98fd6316.js"),["assets/index.98fd6316.js","assets/index.4ea3a13d.css","assets/vendor.2d6a9d99.js"])},{path:"shallowRef",name:"ShallowRef",component:()=>s(()=>import("./index.07968d54.js"),["assets/index.07968d54.js","assets/DesTable.c9148b09.js","assets/DesTable.6572330c.css","assets/vendor.2d6a9d99.js"])},{path:"triggerRef",name:"TriggerRef",component:()=>s(()=>import("./index.7244f4e0.js"),["assets/index.7244f4e0.js","assets/DesTable.c9148b09.js","assets/DesTable.6572330c.css","assets/vendor.2d6a9d99.js"])}]},{path:"/baseReactivity",name:"BaseReactivity",redirect:"/baseReactivity/reactive",children:[{path:"reactive",name:"Reactive",component:()=>s(()=>import("./index.409482bd.js"),["assets/index.409482bd.js","assets/vendor.2d6a9d99.js"])},{path:"readonly",name:"Readonly",component:()=>s(()=>import("./index.9bf8a620.js"),["assets/index.9bf8a620.js","assets/vendor.2d6a9d99.js"])},{path:"isProxy",name:"IsProxy",component:()=>s(()=>import("./index.c8a1d6fb.js"),["assets/index.c8a1d6fb.js","assets/vendor.2d6a9d99.js"])},{path:"isReactive",name:"IsReactive",component:()=>s(()=>import("./index.e2fec1aa.js"),["assets/index.e2fec1aa.js","assets/vendor.2d6a9d99.js"])},{path:"isReadonly",name:"IsReadonly",component:()=>s(()=>import("./index.4246280a.js"),["assets/index.4246280a.js","assets/vendor.2d6a9d99.js"])},{path:"toRaw",name:"ToRaw",component:()=>s(()=>import("./index.5dc4cfbe.js"),["assets/index.5dc4cfbe.js","assets/vendor.2d6a9d99.js"])},{path:"markRaw",name:"MarkRaw",component:()=>s(()=>import("./index.846c7193.js"),["assets/index.846c7193.js","assets/vendor.2d6a9d99.js"])},{path:"shallowReactive",name:"ShallowReactive",component:()=>s(()=>import("./index.575b45ca.js"),["assets/index.575b45ca.js","assets/vendor.2d6a9d99.js"])},{path:"shallowReadonly",name:"ShallowReadonly",component:()=>s(()=>import("./index.07f8e5c0.js"),["assets/index.07f8e5c0.js","assets/vendor.2d6a9d99.js"])}]},{path:"/computed",name:"Computed",component:()=>s(()=>import("./index.c1e828c3.js"),["assets/index.c1e828c3.js","assets/DesTable.c9148b09.js","assets/DesTable.6572330c.css","assets/vendor.2d6a9d99.js"])},{path:"/watch",name:"Watch",component:()=>s(()=>import("./index.831b08a3.js"),["assets/index.831b08a3.js","assets/index.62fa4e9d.css","assets/DesTable.c9148b09.js","assets/DesTable.6572330c.css","assets/vendor.2d6a9d99.js"])},{path:"/watchEffect",name:"WatchEffect",component:()=>s(()=>import("./index.e4befd9d.js"),["assets/index.e4befd9d.js","assets/index.da4146cb.css","assets/vendor.2d6a9d99.js","assets/DesTable.c9148b09.js","assets/DesTable.6572330c.css"])},{path:"/event",name:"Event",component:()=>s(()=>import("./index.72c69619.js"),["assets/index.72c69619.js","assets/index.bb64915e.css","assets/vendor.2d6a9d99.js"])},{path:"/slots",name:"Slots",component:()=>s(()=>import("./index.5be7611d.js"),["assets/index.5be7611d.js","assets/index.d8fcb1f5.css","assets/DesTable.c9148b09.js","assets/DesTable.6572330c.css","assets/vendor.2d6a9d99.js"])},{path:"/teleport",name:"Teleport",component:()=>s(()=>import("./index.22e87966.js"),["assets/index.22e87966.js","assets/index.a8551a76.css","assets/vendor.2d6a9d99.js"])},{path:"/lifeCycle",name:"LifeCycle",component:()=>s(()=>import("./index.6c85ac6b.js"),["assets/index.6c85ac6b.js","assets/index.f8d7078a.css","assets/vendor.2d6a9d99.js"])},{path:"/useHooks",name:"UseHooks",component:()=>s(()=>import("./index.2c98936e.js"),["assets/index.2c98936e.js","assets/DesTable.c9148b09.js","assets/DesTable.6572330c.css","assets/vendor.2d6a9d99.js"])},{path:"/asyncComponent",name:"AsyncComponent",component:()=>s(()=>import("./index.ff8c9bd3.js"),["assets/index.ff8c9bd3.js","assets/vendor.2d6a9d99.js"])},{path:"/functionRender",name:"FunctionRender",component:()=>s(()=>import("./index.64bf7d3a.js"),["assets/index.64bf7d3a.js","assets/index.c2848414.css","assets/vendor.2d6a9d99.js"])},{path:"/transition",name:"Transition",component:()=>s(()=>import("./index.2c7eab3e.js"),["assets/index.2c7eab3e.js","assets/index.6f3d5a01.css","assets/vendor.2d6a9d99.js"])},{path:"/fragments",name:"Fragments",component:()=>s(()=>import("./index.9d1d872c.js"),["assets/index.9d1d872c.js","assets/index.654a7d6e.css","assets/vendor.2d6a9d99.js"])},{path:"/cssVar",name:"CssVar",component:()=>s(()=>import("./index.d4859cb7.js"),["assets/index.d4859cb7.js","assets/index.ac0aa2f3.css","assets/vendor.2d6a9d99.js"])},{path:"/customDirective",name:"CustomDirective",component:()=>s(()=>import("./index.ae13ec5d.js"),["assets/index.ae13ec5d.js","assets/vendor.2d6a9d99.js"])},{path:"/other",name:"Other",redirect:"/other/routerApi",children:[{path:"routerApi",name:"RouterApi",meta:{dir:"RouterApi/index.vue"},component:()=>s(()=>import("./index.7f666908.js"),["assets/index.7f666908.js","assets/vendor.2d6a9d99.js"])},{path:"crossComponent",name:"CrossComponent",meta:{dir:"CrossComponent/index.vue"},component:()=>s(()=>import("./index.bcefa749.js"),["assets/index.bcefa749.js","assets/index.17a15eb8.css","assets/DesTable.c9148b09.js","assets/DesTable.6572330c.css","assets/vendor.2d6a9d99.js"])}]}];function et(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!he(e)}function tt(e,t){return()=>d(L("router-link"),{to:t},et(e)?e:{default:()=>[e]})}function ot(){return{render:()=>d(L("router-view"),null,null)}}const T={},q=e=>{for(const t of e){const{component:o,children:n}=t;o||(t.component=ot()),n&&(t.children=q(n))}return e},nt=q(fe(G)),P=ve({history:ge(),routes:nt});P.beforeEach((e,t,o)=>{var n;(!t||e.path!==t.path)&&(T.value&&((n=T.value)==null||n.start()),o())});P.afterEach((e,t)=>{var o;(!t||e.path!==t.path)&&T.value&&((o=T.value)==null||o.finish())});function rt(e){e.use(P)}function X(e,t=""){return e.map(o=>{var a,c;const n={},r=`${t?t+"/":""}${o.path}`,i=(c=(a=o==null?void 0:o.meta)==null?void 0:a.title)!=null?c:o.name;return n.key=o.name,o.component?n.label=tt(i,r):n.label=i,o.children&&(n.children=X(o.children,r)),n})}const st=G.filter(e=>e.path!=="/"),at=g({name:"App",setup(){const{DARK:e,LIGHT:t}=y,o=Ee(),n=D(),r=Re(),i=j("i-ion-refresh-circle");H(()=>{const m=r.value;return{"primary-color":m.primaryColor,"primary-hover-color":m.primaryColorHover,"primary-pressed-color":m.primaryColorPressed,"primary-suppl-color":m.primaryColorSuppl}});const a=h(()=>n.getRefreshId),c=()=>{n.resetAllState()};ye(()=>{T.value=o,o==null||o.finish()});const p=X(st),l=Ae(),f=h(()=>l?e:t),v=Te(Ue,n.getThemeMode);return I(v,m=>{n.setThemeMode(m)},{immediate:!0}),I(f,m=>{m!==f.value&&n.setThemeMode(m)},{immediate:!0}),{currentMode:v,handleClick:()=>{v.value=v.value===t?e:t},vueVer:xe,naiveuiVer:Ve,menuOptions:p,refreshId:a,handleRefresh:c,tt:i}}}),it={class:"flex flex-row items-center px-8 h-full justify-between"},ct=u("h2",{class:"text-2xl font-bold"},"Vue3 Api Demo",-1),pt=u("div",{class:"teleport-header-container"},null,-1),dt={class:"flex w-full justify-center items-center teleport-footer-container"},ut={class:"mr-15 text-md"},_t={class:"mr-15 text-md"},lt=u("i",{class:"i-ion-refresh"},null,-1),mt=U(" refresh ");function ht(e,t,o,n,r,i){const a=L("router-view"),c=Le,p=Je;return R(),V("div",null,[d(p,{menuOptions:e.menuOptions},{header:_(()=>[u("div",it,[ct,pt,u("i",{onClick:t[0]||(t[0]=(...l)=>e.handleClick&&e.handleClick(...l)),class:N([{"i-emojione-sun":e.currentMode==="light","i-emojione-full-moon":e.currentMode==="dark"},"text-xl cursor-pointer"])},null,2)])]),content:_(()=>[d(a,{key:e.refreshId})]),footer:_(()=>[u("div",dt,[u("p",ut,"vue version: "+K(e.vueVer),1),u("p",_t,"naive-ui version: "+K(e.naiveuiVer),1),d(c,{type:"primary",class:"mr-15",onClick:e.handleRefresh},{icon:_(()=>[lt]),default:_(()=>[mt]),_:1},8,["onClick"])])]),_:1},8,["menuOptions"])])}var ft=A(at,[["render",ht]]);const vt=g({name:"AppProvider",components:{App:ft},setup(){const e=D(),t=h(()=>e.getNaiveThemeProps);return W.registerLanguage("javascript",De),{getProps:t,hljs:W}}});function gt(e,t,o,n,r,i){const a=L("App"),c=Oe,p=je,l=Ie;return R(),Pe(l,be({hljs:e.hljs},O({},e.getProps)),{default:_(()=>[d(p,null,{default:_(()=>[d(c,null,{default:_(()=>[d(a)]),_:1})]),_:1})]),_:1},16,["hljs"])}var Et=A(vt,[["render",gt]]);const Rt=(e,t)=>{console.log(e,"el"),console.log(t,"binding");const o=e.style;o.position="fixed",o.bottom="10rem";const n=t.arg||"left";o[n]=t.value+"px"},yt=(e,t)=>{const o=e.style,n=t.arg||"left";o.left="",o.right="",o[n]=t.value+"px"},At={mounted:Rt,updated:yt};function Tt(e){e.directive("pin",At)}function xt(e){Tt(e)}var Vt=`div{display:inline-block;padding:1rem;background-color:#0960bd1a;border-radius:5px}div.dark{background-color:#63e2b726}
`;const Lt=U(" customElement "),Dt=g({setup(e){const t=D(),o=h(()=>t.getThemeMode===y.DARK?"dark":void 0);return(n,r)=>(R(),V("div",{class:N(x(o))},[E(n.$slots,"default",{},()=>[Lt])],2))}});var Pt=A(Dt,[["styles",[Vt]]]);const bt=$e(Pt);function Ot(){customElements.define("my-foo",bt)}function jt(){return k(this,null,function*(){const e=Se(Et);ke(e),Ot(),rt(e),xt(e),yield P.isReady(),e.mount("#app",!0)})}jt();export{Pt as F,G as L,A as _,s as a,Fe as b,St as c,Me as r,$ as s,D as u};
