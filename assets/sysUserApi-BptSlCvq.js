import{s as t,cQ as n}from"./index-BiiIy8BH.js";async function c(s){const e=await t.Post("admin/GetAdminData",s);return e.code===0?e.data:Promise.reject(new Error(e.message))}async function i(s){const e=await t.Post("admin/GetAdminData",s);return e.code===0&&e.data?e.data:Promise.reject(new Error(e.message))}async function m(s){const e=await t.Post("/admin/Adduser",s);return e.code===0?e.message:Promise.reject(new Error(e.message))}async function d(s){const e=await t.Post("/admin/UpdateAdmin",s);return e.code===0?e.message:Promise.reject(new Error(e.message))}async function u(s,e,a){const r=await t.Post("/admin/SetState",{id:s,state:e,account:a},{meta:{postType:n.FORM}});return r.code===0?r.message:Promise.reject(new Error(r.message))}async function w(s,e,a="123456"){const r=await t.Post("/sysUser/updatePwd",{id:s,username:e,password:a});return r.code===0?r.message:Promise.reject(new Error(r.message))}async function P(s,e,a){const r=await t.Get("/system/user/existence",{params:{field:s,value:e,id:a}});return r.code===0?r.message:Promise.reject(new Error(r.message))}export{m as a,u as b,P as c,w as d,i as l,c as p,d as u};