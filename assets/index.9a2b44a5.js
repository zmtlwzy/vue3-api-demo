var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,r=(e,t)=>{for(var a in t||(t={}))n.call(t,a)&&s(e,a,t[a]);if(l)for(var a of l(t))o.call(t,a)&&s(e,a,t[a]);return e},c=(e,l)=>t(e,a(l));import{_ as u}from"./GridLayout.vue_vue&type=script&lang.965dddf8.js";import{e as i,r as d,I as h,t as p,o as f,L as m,n as v,m as y,g,F as b,M as k,O as F,az as j,P as x,a0 as C,$ as w,N as O,ac as _,l as E,a as I,w as $,i as L,Q as P,y as D}from"./vendor.5b08720f.js";import{_ as M}from"./index.bb6e3e64.js";var S=i({name:"watchEffectFetch",setup(){const e=d({todoList:[],urlId:1,isFirstFetch:!0});return h((()=>{fetch(`https://jsonplaceholder.typicode.com/todos/${e.urlId}`).then((e=>e.json())).then((t=>{console.log(t),setTimeout((()=>{e.todoList=[t],e.isFirstFetch=!1}),e.isFirstFetch?1500:0)}))})),c(r({},p(e)),{update:()=>{e.urlId++}})}});const T={key:0,class:"mb-5"},U={key:1,class:"flex flex-row items-center mb-5"},W=F("fetch");S.render=function(e,t,a,l,n,o){const s=_,r=j,c=x,u=C,i=w;return f(),m(i,{title:e.$options.name},{default:v((()=>[y(u,{vertical:"",align:"center"},{default:v((()=>[0!==e.todoList.length?(f(),g("ul",T,[(f(!0),g(b,null,k(e.todoList,(e=>(f(),g("li",{key:e.id},[F(O(e.id)+" --- "+O(e.title)+" --- ",1),y(s,{checked:e.completed,"onUpdate:checked":t=>e.completed=t},null,8,["checked","onUpdate:checked"])])))),128))])):(f(),g("div",U,[y(r,{text:"",height:"10px",width:"15px"}),y(r,{class:"ml-3",text:"",width:"120px",height:"10px"}),y(r,{class:"ml-3",circle:"",height:"15px",width:"15px"})])),y(c,{type:"primary",onClick:e.update},{default:v((()=>[W])),_:1},8,["onClick"])])),_:1})])),_:1},8,["title"])};var z=i({name:"watchFlushFlush",props:["mode"],emits:["change"],setup(e,{emit:t}){var a;const l=E(),n=E(null!=(a=e.mode)?a:"post"),o=d({count:1,other:2}),s=I((()=>({flush:n.value})));$((()=>n.value),(()=>{t("change",n)}));return h((()=>{var e;o.other=2*o.count;1*(null==(e=l.value)?void 0:e.$el.firstElementChild.lastElementChild.firstElementChild.innerText)===o.count&&o.count}),s.value),c(r({},p(o)),{el:l,flushState:n,changeFlush:e=>{n.value=e},add:()=>{o.count++},sub:()=>{o.count--}})}});const G=L("p",null,"open console",-1),N=L("br",null,null,-1),Q=F("add");z.render=function(e,t,a,l,n,o){const s=M,r=x,c=P,u=C,i=w;return f(),m(i,{title:e.$options.name},{default:v((()=>[y(u,{vertical:"",align:"center"},{default:v((()=>[G,y(s,{varObj:{count:e.count,other:e.other},ref:"el"},null,8,["varObj"]),N,y(r,{type:"primary",onClick:e.add},{default:v((()=>[Q])),_:1},8,["onClick"]),y(c,{class:"mt-5"},{default:v((()=>[(f(),g(b,null,k(["pre","post","sync"],(t=>y(r,{type:e.flushState===`${t}`?"primary":"default",onClick:a=>e.changeFlush(`${t}`)},{default:v((()=>[F(O(t),1)])),_:2},1032,["type","onClick"]))),64))])),_:1})])),_:1})])),_:1},8,["title"])};var q=i({name:"watchEffect",components:{FetchDemo:S,WatchEffectFlush:z},setup(){const e=E(0),t=E();return{keyId:e,saveMode:t,handleChange:a=>{console.log("fuck"),e.value++,t.value=a}}}});q.render=function(e,t,a,l,n,o){const s=D("FetchDemo"),r=D("WatchEffectFlush"),c=u;return f(),m(c,null,{default:v((()=>[y(s),y(r,{onChange:e.handleChange,mode:e.saveMode,key:e.keyId},null,8,["onChange","mode"])])),_:1})};export{q as default};
