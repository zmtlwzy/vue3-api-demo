var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,n=(t,a,o)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,u=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&n(e,a,t[a]);if(o)for(var a of o(t))s.call(t,a)&&n(e,a,t[a]);return e},r=(e,o)=>t(e,a(o));import{_ as c}from"./GridLayout.vue_vue&type=script&lang.965dddf8.js";import{_ as i}from"./index.bb6e3e64.js";import{e as p,l as v,a as d,Y as f,Z as m,L as b,n as y,$ as g,o as _,m as j,O,a0 as $,P as x,a1 as w,a2 as P,h,w as C,a3 as S,N as k,f as E,a4 as B,a5 as I}from"./vendor.5b08720f.js";const L=O("add"),N=O("update d"),R=p({name:"$ref $computed $fromRefs $raw $shallowRef"});var U=p(r(u({},R),{setup(e){let t=v(1);const a=t,o=v(200);let l=d((()=>t.value+o.value)),s=f({a:t.value,b:o,c:l.value});const{x:n,y:u}=m(),r=f(n),c=f(u);let p=d((()=>r.value+c.value));const O=()=>{s.value={a:t.value,b:o,c:l.value}},w=()=>{t.value++,setTimeout((()=>{a.value++}),100),o.value++};return(e,a)=>{const n=i,u=$,v=x,d=g;return _(),b(d,{title:e.$options.name},{action:y((()=>[j(u,null,{default:y((()=>[j(v,{type:"primary",onClick:w},{default:y((()=>[L])),_:1}),j(v,{type:"primary",onClick:O},{default:y((()=>[N])),_:1})])),_:1})])),default:y((()=>[j(u,{vertical:""},{default:y((()=>[j(n,{"var-obj":{a:t.value,b:o.value,c:l.value,d:s.value}},null,8,["var-obj"]),j(n,{"var-obj":{x:r.value,y:c.value,z:p.value}},null,8,["var-obj"])])),_:1})])),_:1},8,["title"])}}}));const z=O("add"),A=p({name:"useSlots useAttrs defineExpose defineProps defineEmits"});const D={Base:U,UseContext:p(r(u({},A),{props:{msg:{type:String,default:"msg"}},emits:["inc"],setup(e,{expose:t,emit:a}){const o=e,l=w(),s=P();let n=v(1);const u=v(n.value+1);t({count:n.value,count2:u});const r=()=>{n.value+=2,a("inc",u)};return console.log(null==o?void 0:o.msg),console.log(a),console.log(s,"attrs"),console.log(l,"slots"),(t,a)=>{const o=i,l=$,s=x,c=g;return _(),b(c,{title:t.$options.name},{action:y((()=>[j(s,{type:"primary",onClick:r},{default:y((()=>[z])),_:1})])),default:y((()=>[j(l,{vertical:""},{default:y((()=>[j(o,{"var-obj":{count:n.value,count2:u.value,msg:e.msg}},null,8,["var-obj"]),h(t.$slots,"default"),h(t.$slots,"other")])),_:3})])),_:3},8,["title"])}}}))},G=O("slot_default"),T=O("slot_other"),Y=p({name:"Namespaced Component tags in ScriptSetup"});const Z=Object.assign(Y,{setup:function(e){const t=e=>{B(e)&&e.value++};let a=v(null);return C((()=>{var e;return null==(e=a.value)?void 0:e.count2}),(e=>{console.log(e,"comp expose count2")})),(e,o)=>{const l=S,s=I,n=c;return _(),b(n,null,{default:y((()=>[j(s,{span:2},{default:y((()=>[j(l,null,{default:y((()=>[O(k(e.$options.name),1)])),_:1})])),_:1}),j(E(D).Base),j(E(D).UseContext,{msg:"demo2",onInc:t,ref:a},{default:y((()=>[G])),other:y((()=>[T])),_:1},512)])),_:1})}}});export{Z as default};
