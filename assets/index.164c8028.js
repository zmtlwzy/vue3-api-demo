import{_ as e}from"./GridLayout.vue_vue&type=script&lang.5e7f6d2d.js";import{c as o}from"./index.ca648fe0.js";import{e as t,g as a,au as n,A as l,av as r,ad as s,aw as c,ax as i,ay as d,az as u,aA as f,aB as m,aC as p,i as y,J as C,G as g,Q as v,o as A,h,j as _,F as k,U as w,aD as L,af as b,aE as B,R as E,ai as I,E as T,aF as U}from"./vendor.a3123f78.js";const j=t({name:"lifeCycleItemA",setup(){const{count:e,add:t}=o();return m((()=>{throw console.log("onActivated in LifeCycleA"),new Error("some error")})),p((()=>{console.log("onDeactivated in LifeCycleA")})),{count:e,add:t}},render({$options:{name:e}}){return y(v,{vertical:!0},{default:()=>[this.count,y(C,{type:"primary",onClick:this.add},{default:()=>[g("+")]})]})}}),D=t({name:"lifeCycleItemB",setup(){const{count2:e,add:t}=o();return m((()=>{throw console.log("onActivated in LifeCycleA"),new Error("some error")})),p((()=>{console.log("onDeactivated in LifeCycleA")})),{count2:e,add:t}},render({$options:{name:e}}){return y(v,{vertical:!0},{default:()=>[this.count2,y(C,{type:"primary",onClick:this.add},{default:()=>[g("+")]})]})}}),$=t({name:"lifeCycleItemC",setup(){const{count3:e,add:t}=o();return m((()=>{throw console.log("onActivated in LifeCycleA"),new Error("some error")})),p((()=>{console.log("onDeactivated in LifeCycleA")})),{count3:e,add:t}},render({$options:{name:e}}){return y(v,{vertical:!0},{default:()=>[this.count3,y(C,{type:"primary",onClick:this.add},{default:()=>[g("+")]})]})}}),x=[j.name,D.name,$.name];var R=t({name:"LifeCycle",components:{lifeCycleItemA:j,lifeCycleItemB:D,lifeCycleItemC:$},beforeCreate(){console.log("beforeCreate")},created(){console.log("created")},setup(){const e=a(j.name);n((()=>{console.log("onBeforeMount")})),l((()=>{console.log("onMounted")})),r((()=>{console.log("onBeforeUpdate")})),s((()=>{console.log("onUpdated")})),c((()=>{console.log("onBeforeUnmount")})),i(((e,o,t)=>(console.log("onErrorCaptured",e,o,t),!1))),d((()=>{console.log("onUnmounted")})),u((({key:e,target:o,type:t})=>{console.log("onRenderTracked",e,o,t)})),f((({key:e,target:o,type:t})=>{console.log("onRenderTriggered",e,o,t)}));return{componentArr:x,handleClick:o=>{e.value=o},currentTab:e}}});R.render=function(o,t,a,n,l,r){const s=U,c=B,i=E,d=C,u=I,f=v,m=e;return A(),h(i,{title:o.$options.name},{default:_((()=>[y(m,{class:"mt-5"},{default:_((()=>[y(i,{title:"useVshow"},{default:_((()=>[y(c,{type:"line"},{default:_((()=>[(A(!0),h(k,null,w(o.componentArr,(e=>(A(),h(s,{name:e,tab:e,"display-directive":"show"},{default:_((()=>[(A(),h(b(e)))])),_:2},1032,["name","tab"])))),256))])),_:1})])),_:1}),y(i,{title:"useKeepAlive"},{default:_((()=>[y(f,{vertical:""},{default:_((()=>[y(f,null,{default:_((()=>[y(u,null,{default:_((()=>[(A(!0),h(k,null,w(o.componentArr,((e,t)=>(A(),h(d,{key:t,ghost:o.currentTab!==e,onClick:t=>o.handleClick(e),type:"primary"},{default:_((()=>[g(T(e),1)])),_:2},1032,["ghost","onClick"])))),128))])),_:1})])),_:1}),(A(),h(L,null,[(A(),h(b(o.currentTab)))],1024))])),_:1})])),_:1})])),_:1})])),_:1},8,["title"])};export default R;
