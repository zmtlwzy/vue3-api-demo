import{c as f,_ as E}from"./index.2c6c92ad.js";import{e as d,m as I,aR as R,I as V,aS as M,aD as j,aT as N,aU as F,aV as K,aW as S,aX as x,aY as g,aZ as C,j as n,R as u,Q as p,a3 as _,O as i,w as o,a2 as O,o as r,i as P,g as h,a8 as A,aE as k,F as b,P as Q,a_ as W,a$ as X,b0 as Y,b1 as Z}from"./vendor.b337872e.js";const y=d({name:"LifeCycleItemA",setup(){const{count:e,add:s}=f();return g(()=>{throw console.log("onActivated in LifeCycleA"),new Error("some error")}),C(()=>{console.log("onDeactivated in LifeCycleA")}),{count:e,add:s}},render({$options:{name:e}}){return n(_,{vertical:!0},{default:()=>[this.count,n(u,{type:"primary",onClick:this.add},{default:()=>[p("+")]})]})}}),B=d({name:"LifeCycleItemB",setup(){const{count2:e,add:s}=f();return g(()=>{throw console.log("onActivated in LifeCycleA"),new Error("some error")}),C(()=>{console.log("onDeactivated in LifeCycleA")}),{count2:e,add:s}},render({$options:{name:e}}){return n(_,{vertical:!0},{default:()=>[this.count2,n(u,{type:"primary",onClick:this.add},{default:()=>[p("+")]})]})}}),$=d({name:"LifeCycleItemC",setup(){const{count3:e,add:s}=f();return g(()=>{throw console.log("onActivated in LifeCycleA"),new Error("some error")}),C(()=>{console.log("onDeactivated in LifeCycleA")}),{count3:e,add:s}},render({$options:{name:e}}){return n(_,{vertical:!0},{default:()=>[this.count3,n(u,{type:"primary",onClick:this.add},{default:()=>[p("+")]})]})}}),q=[y.name,B.name,$.name];var z=d({name:"LifeCycle",components:{lifeCycleItemA:y,lifeCycleItemB:B,lifeCycleItemC:$},setup(){const e=I(y.name);return R(()=>{console.log("onBeforeMount")}),V(()=>{console.log("onMounted")}),M(()=>{console.log("onBeforeUpdate")}),j(()=>{console.log("onUpdated")}),N(()=>{console.log("onBeforeUnmount")}),F((t,l,c)=>(console.log("onErrorCaptured",t,l,c),!1)),K(()=>{console.log("onUnmounted")}),S(({key:t,target:l,type:c})=>{console.log("onRenderTracked",t,l,c)}),x(({key:t,target:l,type:c})=>{console.log("onRenderTriggered",t,l,c)}),{componentArr:q,handleClick:t=>{e.value=t},currentTab:e}},beforeCreate(){console.log("beforeCreate")},created(){console.log("created")}});const G={class:"grid-layout-2 mt-5"};function H(e,s,t,l,c,J){const L=X,w=Y,m=O,T=u,U=Z,v=_;return r(),i(m,{title:e.$options.name},{default:o(()=>[P("div",G,[n(m,{title:"useVshow"},{default:o(()=>[n(w,{type:"line"},{default:o(()=>[(r(!0),h(b,null,A(e.componentArr,a=>(r(),i(L,{key:a,name:a,tab:a,"display-directive":"show"},{default:o(()=>[(r(),i(k(a)))]),_:2},1032,["name","tab"]))),128))]),_:1})]),_:1}),n(m,{title:"useKeepAlive"},{default:o(()=>[n(v,{vertical:""},{default:o(()=>[n(v,null,{default:o(()=>[n(U,null,{default:o(()=>[(r(!0),h(b,null,A(e.componentArr,(a,D)=>(r(),i(T,{key:D,ghost:e.currentTab!==a,onClick:ee=>e.handleClick(a),type:"primary"},{default:o(()=>[p(Q(a),1)]),_:2},1032,["ghost","onClick"]))),128))]),_:1})]),_:1}),(r(),i(W,null,[(r(),i(k(e.currentTab)))],1024))]),_:1})]),_:1})])]),_:1},8,["title"])}var te=E(z,[["render",H]]);export{te as default};
