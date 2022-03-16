var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,r=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,s=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&r(e,n,t[n]);if(a)for(var n of a(t))u.call(t,n)&&r(e,n,t[n]);return e},l=(e,a)=>t(e,n(a));import{_ as c}from"./DesTable.6623db8f.js";import{_ as d,b as i,r as f,s as v,c as m}from"./index.86834fdb.js";import{a as b,o as p,O as j,w as _,j as y,Q as C,R as x,a3 as k,a2 as U,e as O,bf as S,m as g,f as P,aK as V,t as h,bg as w,bh as A,bi as $,A as I,g as R,i as D,P as X}from"./vendor.87a6fcc2.js";const Y={name:"UsePinia",setup(){const e=i();return{x:b((()=>e.getX)),y:b((()=>e.getY)),add:(...t)=>{e.setValue(t)},resetState:()=>{e.$reset()}}}},E=C("++"),K=C("reset");var Q=d(Y,[["render",function(e,t,n,a,o,u){const r=c,s=x,l=k,d=U;return p(),j(d,{title:e.$options.name},{action:_((()=>[y(l,null,{default:_((()=>[y(s,{onClick:t[0]||(t[0]=e=>a.add(8,e))},{default:_((()=>[E])),_:1}),y(s,{onClick:a.resetState},{default:_((()=>[K])),_:1},8,["onClick"])])),_:1})])),default:_((()=>[y(r,{"var-obj":{x:a.x,y:a.y}},null,8,["var-obj"])])),_:1},8,["title"])}]]);const T=Symbol("1"),q=Symbol("2"),z=Symbol("3"),B=O({name:"ProvideAndInject",setup(){const e=S(T,g(10)),t=S(q,50),n=S(z,g(100));return{constant:e,num:t,num2:n,add:()=>{t.value+=P(e),n.value+=P(e)}}}}),F=C("++");var G=d(B,[["render",function(e,t,n,a,o,u){const r=c,s=x,l=V,d=k,i=U;return p(),j(i,{title:e.$options.name},{action:_((()=>[y(d,null,{default:_((()=>[y(s,{onClick:e.add},{default:_((()=>[F])),_:1},8,["onClick"]),y(l,{value:e.constant,"onUpdate:value":t[0]||(t[0]=t=>e.constant=t),step:10,placeholder:"constant"},null,8,["value"])])),_:1})])),default:_((()=>[y(r,{"var-obj":{constant:e.constant,num:e.num,num2:e.num2}},null,8,["var-obj"])])),_:1},8,["title"])}]]);const H=O({name:"UseReactive",setup:()=>l(s({},h(v)),{add:()=>{v.num++},resetSharedState:f})}),J=C("++"),L=C("reset");var M=d(H,[["render",function(e,t,n,a,o,u){const r=c,s=x,l=k,d=U;return p(),j(d,{title:e.$options.name},{action:_((()=>[y(l,null,{default:_((()=>[y(s,{onClick:e.add},{default:_((()=>[J])),_:1},8,["onClick"]),y(s,{onClick:e.resetSharedState},{default:_((()=>[L])),_:1},8,["onClick"])])),_:1})])),default:_((()=>[y(r,{"var-obj":{num:e.num,num2:e.num2,num3:e.num3}},null,8,["var-obj"])])),_:1},8,["title"])}]]);const N=C("inc"),W=C("dec"),Z=C("set"),ee=C("reset"),te=w(A),ne=O({name:"UseVueUse"}),ae={name:"CrossComponentsShared",components:{UseVuex:Q,PAndI:G,UseReactive:M,UseVueUse:O(l(s({},ne),{setup(e){const{count:t,inc:n,dec:a,set:o,reset:u}=te();return(e,r)=>{const s=c,l=x,d=k,i=U;return p(),j(i,{title:e.$options.name},{action:_((()=>[y(d,null,{default:_((()=>[y(l,{onClick:r[0]||(r[0]=e=>P(n)(1))},{default:_((()=>[N])),_:1}),y(l,{onClick:r[1]||(r[1]=e=>P(a)(1))},{default:_((()=>[W])),_:1}),y(l,{onClick:r[2]||(r[2]=e=>P(o)(100))},{default:_((()=>[Z])),_:1}),y(l,{onClick:r[3]||(r[3]=e=>P(u)(1))},{default:_((()=>[ee])),_:1})])),_:1})])),default:_((()=>[y(s,{"var-obj":{count:P(t)}},null,8,["var-obj"])])),_:1},8,["title"])}}}))},setup(){const e=m(),{add:t}=e,n=((e,t)=>{var n={};for(var r in e)o.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&a)for(var r of a(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(e,["add"]),r=i(),{count:c}=te();$(q,n.count);return l(s(s({},h(v)),n),{add:t,reactiveAdd:()=>{v.num+=2},x:b((()=>r.getX)),y:b((()=>r.getY)),vuexAdd:(...e)=>{r.setValue(e)},vueuseCount:c})}},oe={class:"grid-layout-2"},ue={class:"col-span-2"},re={class:"flex justify-evenly w-full"},se=C("provide and inject"),le=C("reactive"),ce=C("vuex(pinia)"),de=C("vueuse"),ie=C("add");var fe=d(ae,[["render",function(e,t,n,a,o,u){const r=c,s=x,l=U,d=I("UseVuex"),i=I("PAndI"),f=I("UseReactive"),v=I("UseVueUse");return p(),R("div",oe,[D("div",ue,[y(l,null,{footer:_((()=>[D("p",null,"total:"+X(e.count+e.count2+e.count3+e.num+e.num2+e.num3+a.x+a.y+a.vueuseCount),1)])),action:_((()=>[y(s,{type:"primary",onClick:a.add},{default:_((()=>[ie])),_:1},8,["onClick"])])),default:_((()=>[D("div",re,[y(r,{"var-obj":{count:e.count,count2:e.count2,count3:e.count3}},{default:_((()=>[se])),_:1},8,["var-obj"]),y(r,{"var-obj":{num:e.num,num2:e.num2,num3:e.num3}},{default:_((()=>[le])),_:1},8,["var-obj"]),y(r,{"var-obj":{x:a.x,y:a.y}},{default:_((()=>[ce])),_:1},8,["var-obj"]),y(r,{"var-obj":{vueuseCount:a.vueuseCount}},{default:_((()=>[de])),_:1},8,["var-obj"])])])),_:1})]),y(d),y(i),y(f),y(v)])}]]);export{fe as default};