import{_ as t}from"./GridLayout.vue_vue&type=script&lang.d0d4bf7f.js";import{e,i as r,V as s,M as a,W as n,C as i,o as l,h as o,l as d,aT as c,aU as u,F as p,aQ as g,aV as f,v as h,J as m,j as v}from"./vendor.513dc466.js";var A=e({name:"UseAttrsTsx",inheritAttrs:!1,setup:(t,{attrs:e})=>()=>r(n,{title:"Non-Prop Attributes"},{default:()=>[r(s,{vertical:!0,align:"center"},{default:()=>[r("div",e,[a("Attribute Inheritance on Multiple Root Nodes")])]})]})});var b=e({name:"inheritAttrs",inheritAttrs:!1,setup:(t,{attrs:e})=>(i((()=>{console.log("attrs",e)})),()=>r(n,{title:"inheritAttrs"},{default:()=>[r(s,{vertical:!0,align:"center"},{default:()=>[r("span",null,[a("Can not automatically inherit attributes")])]})]}))});const y={mounted(){console.log(this.$attrs)}},x=d("header",null,"header",-1),M=d("footer",null,"footer",-1);y.render=function(t,e,r,s,a,n){return l(),o(p,null,[x,d("main",c(u(t.$attrs)),"main",16),M],64)};const U=e({name:"MergeProps",inheritAttrs:!1,setup:t=>({obj:{"data-merge":"img",class:["bg-gray-400","p-2"],style:"color:rgb(80,70,255)"}}),render(){return g(n,{title:"MergeProps"},[g(s,{vertical:!0,align:"center"},[g("div",f(this.$attrs,this.obj),this.$slots)])])}}),P=e({name:"Fragments",components:{UseAttrs:y,UseAttrsTsx:A,FInherit:b,MergeProps:U}}),_=a("MergeProps");P.render=function(e,a,i,o,d,c){const u=h("UseAttrs"),p=s,g=n,f=h("UseAttrsTsx"),A=h("FInherit"),b=h("MergeProps"),y=t;return l(),m(y,null,{default:v((()=>[r(g,{title:"UseAttrs"},{default:v((()=>[r(p,{vertical:"",align:"center"},{default:v((()=>[r(u,{class:"parent-class",id:"parent-id",style:{padding:"10px",backgroundColor:"#dfc59f"}})])),_:1})])),_:1}),r(f,{class:"parent-tsx-class",id:"parent-tsx-id",style:{padding:"15px",backgroundColor:"red"}}),r(A,{class:"parent-inherit-class",id:"parent-inherit-id",style:{color:"yellow"}}),r(b,{class:"hover:bg-red-400"},{default:v((()=>[_])),_:1})])),_:1})};export{P as default};
