import{e,g as a,Y as t,w as s,o as l,h as u,j as o,i as r,G as n,E as f,Z as c,$ as m,Q as i,R as d}from"./vendor.a3123f78.js";var p=e({name:"CustomRef_debounced",setup(){const e=a("hello"),l=function(e,a=500){let s;return t(((t,l)=>({get:()=>(t(),e),set(t){clearTimeout(s),s=setTimeout((()=>{e=t,l()}),a)}})))}("hello");return s(e,(e=>{l.value=e})),{refValue:e,customRefValue:l}}});p.render=function(e,a,t,s,p,v){const V=c,h=m,R=i,_=d;return l(),u(_,{title:e.$options.name},{default:o((()=>[r(R,{vertical:""},{default:o((()=>[r(V,{type:"input",value:e.refValue,"onUpdate:value":a[1]||(a[1]=a=>e.refValue=a),placeholder:"停止输入500ms后,输入值将在下方更新",class:"max-w-1/2"},null,8,["value"]),r(h,{class:"mt-5"},{default:o((()=>[n(f(e.customRefValue),1)])),_:1})])),_:1})])),_:1},8,["title"])};export default p;