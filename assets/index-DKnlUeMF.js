import{i as D}from"./index-B3KaCODP.js";import{d as E,r as s,O as I,o as N,c as P,e as n,f as l,B as d,g as v,C as S,an as o,aO as L,be as M,cc as r,bd as R,aR as W,a5 as T,y as j,cd as q}from"./index-BiiIy8BH.js";import{i as G}from"./index-CIoy1qQK.js";const H={style:{display:"flex","flex-wrap":"wrap"}},J={style:{display:"flex","flex-wrap":"wrap"}},K={style:{margin:"0 12px 12px 0"}},Q={style:{margin:"0 12px 12px 0"}},X={style:{"max-width":"240px"}},Y={style:{display:"flex","flex-wrap":"wrap"}},Z={style:{display:"flex","flex-wrap":"wrap"}},ee={style:{margin:"0 12px 12px 0"}},le={style:{"max-width":"800px"}},te={style:{display:"flex","flex-wrap":"wrap"}},ae={style:{display:"flex","flex-wrap":"wrap"}},ie={style:{margin:"0 12px 12px 0"}},ne={style:{margin:"0 12px 12px 0"}},ue=E({name:"ExtensionMenu",__name:"index",setup(oe){const b=s(!1),V=s(!1),h=s(!1),w=s(!1),C=s(!1),k=s(!1),F=s(!1),f=s(!1),B=s("1-1"),O=s("1-1"),$=s("1-1"),g=()=>[{index:"1",title:"系统管理",icon:o(L),children:[{index:"1-1",title:"用户管理"},{index:"1-2",title:"角色管理",badge:{value:1}},{index:"1-3",title:"权限管理"}]},{index:"2",title:"日志管理",icon:o(M),badge:{value:"New",type:"warning"},children:[{index:"2-1",title:"登录日志",icon:o(r)},{index:"2-2",title:"操作日志如果标题很长很长很长",icon:o(r),badge:{isDot:!0,type:"success"}}]},{index:"3",title:"订单管理",icon:o(R),popperClass:"demo-menu-popper",children:[{index:"3-1",title:"订单查询",icon:o(r)},{index:"3-2",title:"退款记录",icon:o(r)},{index:"3-3",title:"订单报表",icon:o(r),children:[{index:"3-3-1",title:"日报表",icon:o(r)},{index:"3-3-2",title:"周报表",icon:o(r),disabled:!0},{index:"3-3-3",title:"月报表",icon:o(r)},{index:"3-3-4",title:"季度报表",group:!0,children:[{index:"3-3-4-1",title:"一季度",icon:o(r)},{index:"3-3-4-2",title:"二季度",icon:o(r)}]}]},{index:"3-4",title:"账单统计",group:!0,children:[{index:"3-4-1",title:"销售统计",icon:o(r)},{index:"3-4-2",title:"退款统计",icon:o(r)}]}]},{index:"4",title:"个人中心",icon:o(W),badge:{value:100}}],y=s(g()),z=s(g()),_=s(g()),A=c=>{const e=g().map(u=>{const t={...u};return t.children&&(t.group=!0,t.icon=void 0,t.title&&(t.title=t.title.replace("管理","")),t.children=t.children.map(p=>{var i;return{...p,icon:(i=p.icon)!=null?i:o(r)}})),t});if(c==="box"){_.value=e;return}y.value=e},U=c=>{const e={1:"linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%)",2:"linear-gradient( 135deg, #FFF3B0 10%, #CA26FF 100%)",3:"linear-gradient(-225deg, #69EACB 0%, #EACCF8 48%, #6654F1 100%)",4:"#faad14","1-1":"#f5222d","1-2":"#fa541c","1-3":"#fa8c16","2-1":"#2f54eb","2-2":"#722ed1","3-1":"#eb2f96","3-2":"linear-gradient(135deg, rgb(67, 203, 255) 10%, rgb(151, 8, 204) 100%)","3-3":"linear-gradient(135deg, rgb(160, 254, 101) 10%, rgb(250, 1, 109) 100%)","3-4":"linear-gradient(to right, #f83600 0%, #f9d423 100%)"},t=(c==="box"?_.value:c==="nav"?z.value:y.value).map(p=>{const i={...p};return i.group?i.children&&(i.children=i.children.map(x=>{const m={...x};return m.index&&e[m.index]&&(e[m.index].startsWith("linear-gradient(")?m.iconProps={style:{backgroundImage:e[m.index]}}:m.iconProps={style:{backgroundColor:e[m.index]}}),m})):i.index&&e[i.index]&&(e[i.index].startsWith("linear-gradient(")?i.iconProps={style:{backgroundImage:e[i.index]}}:i.iconProps={style:{backgroundColor:e[i.index]}}),i});if(c==="box"){_.value=t;return}if(c==="nav"){z.value=t;return}y.value=t};return(c,e)=>{const u=T,t=I("option-item"),p=j,i=q,x=G,m=D;return N(),P(m,null,{default:n(()=>[l(x,{header:"垂直菜单"},{default:n(()=>[d("div",H,[l(t,{label:"暗色主题",responsive:!1,style:{margin:"0 12px 12px 0"}},{default:n(()=>[l(u,{modelValue:b.value,"onUpdate:modelValue":e[0]||(e[0]=a=>b.value=a),size:"small"},null,8,["modelValue"])]),_:1}),l(t,{label:"彩色图标",responsive:!1,style:{margin:"0 12px 12px 0"}},{default:n(()=>[l(u,{modelValue:V.value,"onUpdate:modelValue":e[1]||(e[1]=a=>V.value=a),size:"small"},null,8,["modelValue"])]),_:1}),l(t,{label:"折叠菜单",responsive:!1,style:{margin:"0 12px 12px 0"}},{default:n(()=>[l(u,{modelValue:h.value,"onUpdate:modelValue":e[2]||(e[2]=a=>h.value=a),size:"small"},null,8,["modelValue"])]),_:1})]),d("div",J,[d("div",K,[l(p,{type:"primary",class:"ele-btn-icon",onClick:e[3]||(e[3]=a=>A())},{default:n(()=>[v(" 一级菜单分组形式 ")]),_:1})]),d("div",Q,[l(p,{type:"primary",class:"ele-btn-icon",onClick:e[4]||(e[4]=a=>U())},{default:n(()=>[v(" 更改菜单图标颜色 ")]),_:1})])]),d("div",X,[l(i,{mode:"vertical",items:y.value,collapse:h.value,"collapse-transition":!0,"default-active":B.value,theme:b.value?"dark":"light",colorful:V.value,"text-ellipsis-tooltip":!0},null,8,["items","collapse","default-active","theme","colorful"])])]),_:1}),l(x,{header:"水平菜单"},{default:n(()=>[d("div",Y,[l(t,{label:"暗色主题",responsive:!1,style:{margin:"0 12px 12px 0"}},{default:n(()=>[l(u,{modelValue:w.value,"onUpdate:modelValue":e[5]||(e[5]=a=>w.value=a),size:"small"},null,8,["modelValue"])]),_:1}),l(t,{label:"彩色图标",responsive:!1,style:{margin:"0 12px 12px 0"}},{default:n(()=>[l(u,{modelValue:C.value,"onUpdate:modelValue":e[6]||(e[6]=a=>C.value=a),size:"small"},null,8,["modelValue"])]),_:1})]),d("div",Z,[d("div",ee,[l(p,{type:"primary",class:"ele-btn-icon",onClick:e[7]||(e[7]=a=>U("nav"))},{default:n(()=>[v(" 更改菜单图标颜色 ")]),_:1})])]),d("div",le,[l(i,{mode:"horizontal",items:z.value,"default-active":O.value,theme:w.value?"dark":"light",colorful:C.value,"text-ellipsis-tooltip":!0},null,8,["items","default-active","theme","colorful"])])]),_:1}),l(x,{header:"紧凑菜单"},{default:n(()=>[d("div",te,[l(t,{label:"暗色主题",responsive:!1,style:{margin:"0 12px 12px 0"}},{default:n(()=>[l(u,{modelValue:k.value,"onUpdate:modelValue":e[8]||(e[8]=a=>k.value=a),size:"small"},null,8,["modelValue"])]),_:1}),l(t,{label:"彩色图标",responsive:!1,style:{margin:"0 12px 12px 0"}},{default:n(()=>[l(u,{modelValue:F.value,"onUpdate:modelValue":e[9]||(e[9]=a=>F.value=a),size:"small"},null,8,["modelValue"])]),_:1}),l(t,{label:"隐藏标题",responsive:!1,style:{margin:"0 12px 12px 0"}},{default:n(()=>[l(u,{modelValue:f.value,"onUpdate:modelValue":e[10]||(e[10]=a=>f.value=a),size:"small"},null,8,["modelValue"])]),_:1})]),d("div",ae,[d("div",ie,[l(p,{type:"primary",class:"ele-btn-icon",onClick:e[11]||(e[11]=a=>A("box"))},{default:n(()=>[v(" 一级菜单分组形式 ")]),_:1})]),d("div",ne,[l(p,{type:"primary",class:"ele-btn-icon",onClick:e[12]||(e[12]=a=>U("box"))},{default:n(()=>[v(" 更改菜单图标颜色 ")]),_:1})])]),d("div",{style:S({width:f.value?"66px":"88px",transition:"width 0.2s"})},[l(i,{mode:"compact",items:_.value,collapse:f.value,"default-active":$.value,theme:k.value?"dark":"light",colorful:F.value,"text-ellipsis-tooltip":!0},null,8,["items","collapse","default-active","theme","colorful"])],4)]),_:1})]),_:1})}}});export{ue as default};