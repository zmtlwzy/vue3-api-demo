var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,u=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,l=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&u(e,n,t[n]);if(a)for(var n of a(t))r.call(t,n)&&u(e,n,t[n]);return e},s=(e,a)=>t(e,n(a));import{_ as d}from"./index.216d2d79.js";import{b as c,f as i,Q as m,p as f,o as v,e as p,w as b,z as j,C as y,O as x,R as _,n as C,S as O,T as h,M as S,L as g,U as k,m as w,y as P,V as U}from"./vendor.736d68c4.js";import{u as V}from"./index.f6cb7046.js";import{r as A,s as I,c as R}from"./index.f8eba878.js";var $=c({name:"GridLayout",setup:(e,{slots:t})=>()=>i(m,{cols:2,"x-gap":"16","y-gap":"24"},{default:()=>{var e;return[null==(e=t.default)?void 0:e.call(t)]}})});const L={name:"usePinia",setup(){const e=V();return{x:f((()=>e.getX)),y:f((()=>e.getY)),add:(...t)=>e.setValue(t)}}},X=j("++");L.render=function(e,t,n,a,o,r){const u=d,l=y,s=x;return v(),p(s,{title:e.$options.name},{action:b((()=>[i(l,{onClick:t[1]||(t[1]=e=>a.add(8,e))},{default:b((()=>[X])),_:1})])),default:b((()=>[i(u,{"var-obj":{x:a.x,y:a.y}},null,8,["var-obj"])])),_:1},8,["title"])};const Y=Symbol("1"),z=Symbol("2"),D=Symbol("3");var E=c({name:"Provide & Inject",setup(){const e=_(Y,C(10)),t=_(z,50),n=_(D,C(100));return{constant:e,num:t,num2:n,add:()=>{t.value+=O(e),n.value+=O(e)}}}});const G=j("++");E.render=function(e,t,n,a,o,r){const u=d,l=y,s=h,c=S,m=x;return v(),p(m,{title:e.$options.name},{action:b((()=>[i(c,null,{default:b((()=>[i(l,{onClick:e.add},{default:b((()=>[G])),_:1},8,["onClick"]),i(s,{value:e.constant,"onUpdate:value":t[1]||(t[1]=t=>e.constant=t),step:10,placeholder:"constant"},null,8,["value"])])),_:1})])),default:b((()=>[i(u,{"var-obj":{constant:e.constant,num:e.num,num2:e.num2}},null,8,["var-obj"])])),_:1},8,["title"])};var M=c({name:"useReactive",setup:()=>s(l({},g(I)),{add:()=>{I.num++},resetSharedState:A})});const Q=j("++"),T=j("reset");M.render=function(e,t,n,a,o,r){const u=d,l=y,s=S,c=x;return v(),p(c,{title:e.$options.name},{action:b((()=>[i(s,null,{default:b((()=>[i(l,{onClick:e.add},{default:b((()=>[Q])),_:1},8,["onClick"]),i(l,{onClick:e.resetSharedState},{default:b((()=>[T])),_:1},8,["onClick"])])),_:1})])),default:b((()=>[i(u,{"var-obj":{num:e.num,num2:e.num2,num3:e.num3}},null,8,["var-obj"])])),_:1},8,["title"])};const q={name:"CrossComponentsShared",components:{UseVuex:L,PAndI:E,UseReactive:M},setup(){const e=R(),{add:t}=e,n=((e,t)=>{var n={};for(var u in e)o.call(e,u)&&t.indexOf(u)<0&&(n[u]=e[u]);if(null!=e&&a)for(var u of a(e))t.indexOf(u)<0&&r.call(e,u)&&(n[u]=e[u]);return n})(e,["add"]),u=V();k(z,n.count);return s(l(l({},g(I)),n),{add:t,reactiveAdd:()=>{I.num+=2},x:f((()=>u.getX)),y:f((()=>u.getY)),vuexAdd:(...e)=>{u.setValue(e)}})}},B={class:"flex justify-evenly w-full"},F=j("shared width provide and inject"),H=j("shared width reactive"),J=j("shared width vuex"),K=j("add");q.render=function(e,t,n,a,o,r){const u=d,l=y,s=x,c=U,m=w("UseVuex"),f=w("PAndI"),j=w("UseReactive"),_=$;return v(),p(_,null,{default:b((()=>[i(c,{span:2},{default:b((()=>[i(s,null,{footer:b((()=>[i("p",null,"total:"+P(e.count+e.count2+e.count3+e.num+e.num2+e.num3+a.x+a.y),1)])),action:b((()=>[i(l,{type:"primary",onClick:a.add},{default:b((()=>[K])),_:1},8,["onClick"])])),default:b((()=>[i("div",B,[i(u,{"var-obj":{count:e.count,count2:e.count2,count3:e.count3}},{default:b((()=>[F])),_:1},8,["var-obj"]),i(u,{"var-obj":{num:e.num,num2:e.num2,num3:e.num3}},{default:b((()=>[H])),_:1},8,["var-obj"]),i(u,{"var-obj":{x:a.x,y:a.y}},{default:b((()=>[J])),_:1},8,["var-obj"])])])),_:1})])),_:1}),i(m),i(f),i(j)])),_:1})};export default q;
