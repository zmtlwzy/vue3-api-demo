var e=Object.defineProperty,o=Object.defineProperties,n=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,r=(o,n,l)=>n in o?e(o,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):o[n]=l;import{_ as c}from"./index.607b4a1f.js";import{e as s,l as u,ae as p,a as d,w as f,I as i,af as b,ag as v,o as g,L as O,n as h,m as S,O as j,P as m,a0 as _,$ as y}from"./vendor.561f27f4.js";var C=s({name:"effectScope",setup(){const e=u(1),c=p(),s=p();console.log(c,"scope"),console.log(s,"scope2"),console.log((null==c?void 0:c.parent)===(null==s?void 0:s.parent));const g=c.run((()=>{const o=d((()=>2*e.value));return f(o,(()=>console.log(o.value))),i((()=>console.log("Count: ",o.value))),v((()=>{console.log("cleaned!")})),{doubled:o}}));s.cleanups.push((()=>{console.log("scope2 cleanups push")})),c.cleanups.push((()=>{console.log("scope cleanups push")})),O();function O(){const e=b();return console.log(e,"current"),e}return h=((e,o)=>{for(var n in o||(o={}))t.call(o,n)&&r(e,n,o[n]);if(l)for(var n of l(o))a.call(o,n)&&r(e,n,o[n]);return e})({},g),o(h,n({counter:e,handleScope:e=>{var o;let n;if("currentStop"!==e){if("scope2On"===e)return s.on(),void O();c[e](),n=O(),console.log(n===c,n===s)}else console.log(null==(o=O())?void 0:o.stop())}}));var h}});const k=j("add"),P=j("on"),w=j("off"),x=j("stop"),I=j("currentStop"),$=j("scope2On");C.render=function(e,o,n,l,t,a){const r=c,s=m,u=_,p=y;return g(),O(p,{title:e.$options.name},{action:h((()=>[S(u,null,{default:h((()=>[S(s,{onClick:o[0]||(o[0]=o=>e.counter++)},{default:h((()=>[k])),_:1}),S(s,{onClick:o[1]||(o[1]=o=>e.handleScope("on"))},{default:h((()=>[P])),_:1}),S(s,{onClick:o[2]||(o[2]=o=>e.handleScope("off"))},{default:h((()=>[w])),_:1}),S(s,{onClick:o[3]||(o[3]=o=>e.handleScope("stop"))},{default:h((()=>[x])),_:1}),S(s,{onClick:o[4]||(o[4]=o=>e.handleScope("currentStop"))},{default:h((()=>[I])),_:1}),S(s,{onClick:o[5]||(o[5]=o=>e.handleScope("scope2On"))},{default:h((()=>[$])),_:1})])),_:1})])),default:h((()=>[S(r,{"var-obj":{counter:e.counter,doubled:e.doubled}},null,8,["var-obj"])])),_:1},8,["title"])};export{C as default};
