import{_ as e}from"./GridLayout.vue_vue&type=script&lang.cc8eaca1.js";import{c as o}from"./index.0ea5aed5.js";import{e as a,l as t,aJ as n,E as l,aK as r,ax as s,aL as c,aM as i,aN as d,aO as u,aP as f,aQ as m,aR as p,m as y,P as g,O as C,a0 as v,o as h,L as A,n as _,g as k,M as L,F as w,aS as b,ay as I,aT as T,$ as B,Q as E,N as U,aU as $}from"./vendor.561f27f4.js";const M=a({name:"lifeCycleItemA",setup(){const{count:e,add:a}=o();return m((()=>{throw console.log("onActivated in LifeCycleA"),new Error("some error")})),p((()=>{console.log("onDeactivated in LifeCycleA")})),{count:e,add:a}},render({$options:{name:e}}){return y(v,{vertical:!0},{default:()=>[this.count,y(g,{type:"primary",onClick:this.add},{default:()=>[C("+")]})]})}}),j=a({name:"lifeCycleItemB",setup(){const{count2:e,add:a}=o();return m((()=>{throw console.log("onActivated in LifeCycleA"),new Error("some error")})),p((()=>{console.log("onDeactivated in LifeCycleA")})),{count2:e,add:a}},render({$options:{name:e}}){return y(v,{vertical:!0},{default:()=>[this.count2,y(g,{type:"primary",onClick:this.add},{default:()=>[C("+")]})]})}}),x=a({name:"lifeCycleItemC",setup(){const{count3:e,add:a}=o();return m((()=>{throw console.log("onActivated in LifeCycleA"),new Error("some error")})),p((()=>{console.log("onDeactivated in LifeCycleA")})),{count3:e,add:a}},render({$options:{name:e}}){return y(v,{vertical:!0},{default:()=>[this.count3,y(g,{type:"primary",onClick:this.add},{default:()=>[C("+")]})]})}}),D=[M.name,j.name,x.name];var R=a({name:"LifeCycle",components:{lifeCycleItemA:M,lifeCycleItemB:j,lifeCycleItemC:x},beforeCreate(){console.log("beforeCreate")},created(){console.log("created")},setup(){const e=t(M.name);n((()=>{console.log("onBeforeMount")})),l((()=>{console.log("onMounted")})),r((()=>{console.log("onBeforeUpdate")})),s((()=>{console.log("onUpdated")})),c((()=>{console.log("onBeforeUnmount")})),i(((e,o,a)=>(console.log("onErrorCaptured",e,o,a),!1))),d((()=>{console.log("onUnmounted")})),u((({key:e,target:o,type:a})=>{console.log("onRenderTracked",e,o,a)})),f((({key:e,target:o,type:a})=>{console.log("onRenderTriggered",e,o,a)}));return{componentArr:D,handleClick:o=>{e.value=o},currentTab:e}}});R.render=function(o,a,t,n,l,r){const s=$,c=T,i=B,d=g,u=E,f=v,m=e;return h(),A(i,{title:o.$options.name},{default:_((()=>[y(m,{class:"mt-5"},{default:_((()=>[y(i,{title:"useVshow"},{default:_((()=>[y(c,{type:"line"},{default:_((()=>[(h(!0),k(w,null,L(o.componentArr,(e=>(h(),A(s,{name:e,tab:e,"display-directive":"show"},{default:_((()=>[(h(),A(I(e)))])),_:2},1032,["name","tab"])))),256))])),_:1})])),_:1}),y(i,{title:"useKeepAlive"},{default:_((()=>[y(f,{vertical:""},{default:_((()=>[y(f,null,{default:_((()=>[y(u,null,{default:_((()=>[(h(!0),k(w,null,L(o.componentArr,((e,a)=>(h(),A(d,{key:a,ghost:o.currentTab!==e,onClick:a=>o.handleClick(e),type:"primary"},{default:_((()=>[C(U(e),1)])),_:2},1032,["ghost","onClick"])))),128))])),_:1})])),_:1}),(h(),A(b,null,[(h(),A(I(o.currentTab)))],1024))])),_:1})])),_:1})])),_:1})])),_:1},8,["title"])};export{R as default};