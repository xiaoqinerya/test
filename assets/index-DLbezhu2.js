import{i as U}from"./index-B3KaCODP.js";import{d as F,r as C,o as h,c as N,e as i,f as u,g as k,aa as E,ab as M,E as g,y as K,ac as G,B as x,F as _,G as z,H as R,h as A,a0 as D}from"./index-BiiIy8BH.js";import{i as T}from"./index-CIoy1qQK.js";import{i as H}from"./index-BQNCTEdX.js";import"./index-DkgahQ27.js";import"./index-n3iKJaD_.js";import"./index-C6LSuDqi.js";import"./empty-B_ITTikW.js";import"./virtual-list-8KMurCcU.js";import"./index-ZMGHT5nN.js";import{i as I}from"./index-BQkjKN4u.js";import{E as J}from"./upload-BGO06KGh.js";import"./progress-CCLXG-1J.js";import"./vuedraggable.umd-CNv-yK7O.js";const L=F({__name:"excel-export",setup($){const f=C([{key:1,username:"张小三",amount:18,province:"浙江",city:"杭州",zone:"西湖区",street:"西溪街道",address:"西溪花园30栋1单元"},{key:2,username:"李小四",amount:39,province:"江苏",city:"苏州",zone:"姑苏区",street:"丝绸路",address:"天墅之城9幢2单元"},{key:3,username:"王小五",amount:8,province:"江西",city:"南昌",zone:"青山湖区",street:"艾溪湖办事处",address:"中兴和园1幢3单元"},{key:4,username:"赵小六",amount:16,province:"福建",city:"泉州",zone:"丰泽区",street:"南洋街道",address:"南洋村6幢1单元"},{key:5,username:"孙小七",amount:12,province:"湖北",city:"武汉",zone:"武昌区",street:"武昌大道",address:"两湖花园16幢2单元"},{key:6,username:"周小八",amount:11,province:"安徽",city:"黄山",zone:"黄山区",street:"汤口镇",address:"温泉村21号"}]),w=C([{type:"selection",columnKey:"selection",width:56,align:"center"},{type:"index",columnKey:"index",width:56,align:"center"},{prop:"username",label:"用户名",align:"center",minWidth:110},{columnKey:"cityAddress",label:"地址",align:"center",children:[{prop:"province",label:"省",align:"center",minWidth:100},{prop:"city",label:"市",align:"center",minWidth:100},{prop:"zone",label:"区",align:"center",minWidth:120},{prop:"street",label:"街道",align:"center",minWidth:120},{prop:"address",label:"详细地址",align:"center",minWidth:160}]},{prop:"amount",label:"金额",align:"center",minWidth:80}]),b=C([]),W=()=>{const l=new E.Workbook,t=l.addWorksheet("Sheet1");t.addRow(["用户名","省","市","区","街道","详细地址","金额"]),f.value.forEach(e=>{t.addRow([e.username,e.province,e.city,e.zone,e.street,e.address,e.amount])}),[16,16,16,16,20,30,12].forEach((e,n)=>{t.getColumn(n+1).width=e}),t.eachRow({includeEmpty:!0},(e,n)=>{e.height=20,e.eachCell({includeEmpty:!0},s=>{s.border={top:{style:"thin"},left:{style:"thin"},bottom:{style:"thin"},right:{style:"thin"}},s.alignment={vertical:"middle",horizontal:"center"},s.font={size:12,bold:n===1}})}),l.xlsx.writeBuffer().then(e=>{M(e,"用户数据.xlsx")})},S=()=>{const l=new E.Workbook,t=l.addWorksheet("Sheet1");t.addRow(["用户名","地址",null,null,null,null,"金额"]),t.addRow([null,"省","市","区","街道","详细地址",null]),f.value.forEach(e=>{t.addRow([e.username,e.province,e.city,e.zone,e.street,e.address,e.amount])}),[16,16,16,16,20,30,12].forEach((e,n)=>{t.getColumn(n+1).width=e}),t.eachRow({includeEmpty:!0},(e,n)=>{e.height=20,e.eachCell({includeEmpty:!0},s=>{s.border={top:{style:"thin"},left:{style:"thin"},bottom:{style:"thin"},right:{style:"thin"}},s.alignment={vertical:"middle",horizontal:"center"},s.font={size:12,bold:n<3}})}),t.mergeCells(1,2,1,6),t.mergeCells(1,1,2,1),t.mergeCells(1,7,2,7),l.xlsx.writeBuffer().then(e=>{M(e,"用户数据.xlsx")})},c=()=>{if(b.value.length===0){g.error("请至少选择一条数据");return}const l=new E.Workbook,t=l.addWorksheet("Sheet1");t.addRow(["用户名","省","市","区","街道","详细地址","金额"]),b.value.forEach(e=>{t.addRow([e.username,e.province,e.city,e.zone,e.street,e.address,e.amount])}),[16,16,16,16,20,30,12].forEach((e,n)=>{t.getColumn(n+1).width=e}),t.eachRow({includeEmpty:!0},(e,n)=>{e.height=20,e.eachCell({includeEmpty:!0},s=>{s.border={top:{style:"thin"},left:{style:"thin"},bottom:{style:"thin"},right:{style:"thin"}},s.alignment={vertical:"middle",horizontal:"center"},s.font={size:12,bold:n===1}})}),l.xlsx.writeBuffer().then(e=>{M(e,"用户数据.xlsx")})};return(l,t)=>{const e=K,n=G,s=H,a=T;return h(),N(a,{header:"导出 Excel","body-style":{padding:"18px 20px"}},{default:i(()=>[u(s,{"row-key":"key",columns:w.value,datasource:f.value,"show-overflow-tooltip":!0,pagination:!1,selections:b.value,"onUpdate:selections":t[0]||(t[0]=o=>b.value=o),tools:["export","print","size","columns","maximized"],toolbar:{theme:"default"},border:!0},{toolbar:i(()=>[u(n,{size:12,wrap:""},{default:i(()=>[u(e,{type:"primary",class:"ele-btn-icon",onClick:W},{default:i(()=>[k(" 导出 ")]),_:1}),u(e,{type:"primary",class:"ele-btn-icon",onClick:S},{default:i(()=>[k(" 导出带表头合并 ")]),_:1}),u(e,{type:"primary",class:"ele-btn-icon",onClick:c},{default:i(()=>[k(" 导出选中 ")]),_:1})]),_:1})]),_:1},8,["columns","datasource","selections"])]),_:1})}}}),j={style:{overflow:"auto","margin-top":"12px"}},q=x("col",{width:"52"},null,-1),O=x("th",null,null,-1),P={style:{"text-align":"center"}},Q=["colspan","rowspan"],X={key:0},Y=["colspan"],Z=F({__name:"excel-import",setup($){const f=C(["A","B","C","D","E","F","G"]),w=C([]),b=c=>{if(!["application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"].includes(c.type))return g.error("只能选择 excel 文件"),!1;if(c.size/1024/1024>20)return g.error("大小不能超过 20MB"),!1;const l=g.loading({message:"加载中..",plain:!0}),t=new FileReader;return t.onload=e=>{var s;const n=new E.Workbook;n.xlsx.load((s=e.target)==null?void 0:s.result).then(()=>{const a=[],o=[];n.eachSheet(v=>{o.splice(0,o.length),v.eachRow({includeEmpty:!0},(d,y)=>{a.splice(0,a.length);const r={};d.eachCell({includeEmpty:!0},p=>{const m=p.address.slice(0,-String(y).length);a.push(m);const B=p.isMerged&&p.address!==p.master.address;r[m]={value:B?"":p.value,colspan:1,rowspan:1}}),o.push(r)})}),f.value=a,w.value=o,l.close()})},t.readAsArrayBuffer(c),!1},W=c=>{if(!["application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"].includes(c.type))return g.error("只能选择 excel 文件"),!1;if(c.size/1024/1024>20)return g.error("大小不能超过 20MB"),!1;const l=g.loading({message:"加载中..",plain:!0}),t=new FileReader;return t.onload=e=>{var s;const n=new E.Workbook;n.xlsx.load((s=e.target)==null?void 0:s.result).then(()=>{const a=[],o=[];n.eachSheet(v=>{o.splice(0,o.length),v.eachRow({includeEmpty:!0},(d,y)=>{a.splice(0,a.length);const r={};d.eachCell({includeEmpty:!0},p=>{const m=p.address.slice(0,-String(y).length);a.push(m),r[m]={value:p.value,colspan:1,rowspan:1}}),o.push(r)})}),f.value=a,w.value=o,l.close()})},t.readAsArrayBuffer(c),!1},S=c=>{if(!["application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"].includes(c.type))return g.error("只能选择 excel 文件"),!1;if(c.size/1024/1024>20)return g.error("大小不能超过 20MB"),!1;const l=g.loading({message:"加载中..",plain:!0}),t=new FileReader;return t.onload=e=>{var s;const n=new E.Workbook;n.xlsx.load((s=e.target)==null?void 0:s.result).then(()=>{const a=[],o=[];n.eachSheet(v=>{o.splice(0,o.length),v.eachRow({includeEmpty:!0},d=>{a.splice(0,a.length);const y={};d.eachCell({includeEmpty:!0},r=>{const p=r.address.slice(0,-String(r.row).length);a.push(p);const m=r.isMerged&&r.address!==r.master.address;y[p]={value:r.value,colspan:m?0:1,rowspan:m?0:1}}),o.push(y)}),v.eachRow({includeEmpty:!0},d=>{d.eachCell({includeEmpty:!0},y=>{const r=y.master;if(y.isMerged&&y.address!==r.address){const p=r.address.slice(0,-String(r.row).length),m=o[Number(r.row)-1][p],B=Math.abs(Number(y.row)-Number(r.row))+1;B>m.rowspan&&(m.rowspan=B);const V=Math.abs(Number(y.col)-Number(r.col))+1;V>m.colspan&&(m.colspan=V)}})})}),f.value=a,w.value=o,l.close()})},t.readAsArrayBuffer(c),!1};return(c,l)=>{const t=K,e=J,n=G,s=I,a=T;return h(),N(a,{header:"导入 Excel"},{default:i(()=>[u(n,null,{default:i(()=>[u(e,{action:"",accept:".xls,.xlsx","show-file-list":!1,"before-upload":b},{default:i(()=>[u(t,{type:"primary",class:"ele-btn-icon"},{default:i(()=>[k("导入")]),_:1})]),_:1}),u(e,{action:"",accept:".xls,.xlsx","show-file-list":!1,"before-upload":W},{default:i(()=>[u(t,{type:"primary",class:"ele-btn-icon"},{default:i(()=>[k(" 导入拆分合并 ")]),_:1})]),_:1}),u(e,{action:"",accept:".xls,.xlsx","show-file-list":!1,"before-upload":S},{default:i(()=>[u(t,{type:"primary",class:"ele-btn-icon"},{default:i(()=>[k(" 导入保持合并 ")]),_:1})]),_:1})]),_:1}),x("div",j,[u(s,{border:!0,style:{"min-width":"max-content","table-layout":"fixed"}},{default:i(()=>[x("colgroup",null,[q,(h(!0),_(z,null,R(f.value,o=>(h(),_("col",{key:o}))),128))]),x("thead",null,[x("tr",null,[O,(h(!0),_(z,null,R(f.value,o=>(h(),_("th",{key:o,style:{"text-align":"center"}},A(o),1))),128))])]),x("tbody",null,[(h(!0),_(z,null,R(w.value,(o,v)=>(h(),_("tr",{key:c.index},[x("td",P,A(v+1),1),(h(!0),_(z,null,R(f.value,d=>(h(),_(z,null,[o[d].colspan!==0&&o[d].rowspan!==0?(h(),_("td",{key:d,colspan:o[d].colspan,rowspan:o[d].rowspan,style:{"text-align":"center"}},A(o[d].value),9,Q)):D("",!0)],64))),256))]))),128)),w.value.length?D("",!0):(h(),_("tr",X,[x("td",{colspan:f.value.length+1,style:{"text-align":"center",background:"none"}}," 暂无数据 ",8,Y)]))])]),_:1})])]),_:1})}}}),he=F({name:"ExtensionExcel",__name:"index",setup($){return(f,w)=>{const b=U;return h(),N(b,null,{default:i(()=>[u(L),u(Z)]),_:1})}}});export{he as default};