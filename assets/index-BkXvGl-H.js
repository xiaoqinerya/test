import{i as L}from"./index-B3KaCODP.js";import{s as B,t as P,d as $,v as C,r as c,o as n,c as l,e as t,f as i,F as M,G as N,H as R,B as a,h as T,i as D,T as I,M as f,N as p,E as S,L as b,_ as j}from"./index-BiiIy8BH.js";import{E as z,a as A}from"./col-C4RHHrqY.js";import{i as F}from"./index-CIoy1qQK.js";async function G(){const o=await B.Post("/acting/HomePage");return o.code===0?o.data:Promise.reject(new Error(P("msg."+o.message)))}const V={class:"statistics-header-text"},X={class:"flex"},q=["innerHTML"],J=$({name:"DashboardAnalysis",__name:"index",setup(o){const{t:_}=C.useI18n(),r=c(!0),g=c(null),v=()=>{r.value=!0,u()},d=c([]),u=async()=>{const e=S.loading({message:_("common.loading"),plain:!0});let s=await G();d.value=s,e.close()};u();const h=e=>{if(e){const s=e.toString().split(".");return s.length>1?`${s[0]}.<span style="font-size: 16px;">${s[1]}</span>`:e}else return e};return(e,s)=>{const x=b,w=F,y=z,E=A,k=L;return n(),l(k,null,{default:t(()=>[i(E,{gutter:20,class:"bar-card"},{default:t(()=>[(n(!0),M(N,null,R(d.value,(m,H)=>(n(),l(y,{md:6,sm:12,xs:24,key:H},{default:t(()=>[i(w,{class:"statistics-card"},{default:t(()=>[i(x,{type:"placeholder",class:"statistics-header"},{default:t(()=>[a("div",V,T(D(_)("homePage.list."+m.title)),1)]),_:2},1024),a("div",X,[a("div",{size:"xxl",class:"statistics-value",innerHTML:h(m.value)},null,8,q)])]),_:2},1024)]),_:2},1024))),128))]),_:1}),(n(),l(I,{to:"body"},[f(a("div",{class:"close",onClick:v},"X",512),[[p,!r.value]]),f(a("iframe",{ref_key:"iframeRef",ref:g,class:"full-screen-iframe",frameborder:"0",scrolling:"auto"},null,512),[[p,!r.value]])]))]),_:1})}}}),W=j(J,[["__scopeId","data-v-7090c702"]]);export{W as default};