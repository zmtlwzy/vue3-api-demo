import{e as r,k as l,u as c,bd as i,be as p,j as e,a2 as d,a1 as m,Q as o,A as _,P as t,F as f}from"./vendor.2d6a9d99.js";import{L as u}from"./index.e8c8685e.js";const a="RouterApi";var j=r({name:a,setup(){console.log("current route:",l());const n=c();console.log(i),console.log(p);const s=()=>{n.push(u[1]).then(()=>{console.log("jump")})};return()=>e(f,null,[e(d,{title:a},{default:()=>[e(m,{vertical:!0},{default:()=>[e(o,{onClick:s},{default:()=>[e(_("router-link"),{to:u[0]},{default:()=>[t("List[0]")]})]}),e(o,{onClick:s},{default:()=>[t("router.push(List[1])")]}),e(o,{onClick:()=>n.go(-1)},{default:()=>[t("router.go(-1)")]})]})]})])}});export{j as default};
