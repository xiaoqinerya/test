import{bf as P,a_ as B,d as E,c$ as R,aY as V,r as T,K as j,w as k,a4 as _,O as N,o as m,c as U,B as s,F as h,C as f,Y as p,a0 as b,f as A,e as F,Z as M,T as q,n as x}from"./index-BiiIy8BH.js";const g="ele-printer-container",$="ele-printer-iframe",y="ele-printing";let v=0;function D(e,t){return e==null?t:Object.assign({},e,t)}function S(){const e=document.getElementById(g);if(e)return e;const t=document.createElement("div");return t.id=g,document.body.appendChild(t),t}function O(e){const t=["@page {"];if(e.margin!=null&&e.margin!==""){const i=typeof e.margin=="number"?e.margin+"px":e.margin;t.push(`margin: ${i};`)}return e.direction!=null&&e.direction!==""&&t.push(`size: ${e.direction};`),e.orientation!=null&&e.orientation!==""&&t.push(`page-orientation: ${e.orientation};`),t.push("}"),t.join(" ")}function L(){const e=document.getElementById($);if(e){e.parentNode&&e.parentNode.removeChild(e);const t=e.getAttribute("src");if(t)try{window.URL.revokeObjectURL(t)}catch(i){console.error(i)}}}function C(){L();const e=document.createElement("iframe");return e.id=$,e.style.width="66px",e.style.height="66px",e.style.position="fixed",e.style.left="-666px",e.style.top="-666px",document.body.appendChild(e),e.focus(),e}function I(e,t){var i;const n=C(),r=n.contentWindow;if(!r)return;r.focus();const o=n.contentDocument||r.document;if(!o)return;const a=S();Array.from(a.querySelectorAll('input[type="text"], input[type="number"]')).forEach(w=>{w.setAttribute("value",w.value)}),o.open();const d=e.options?`JSON.parse('${JSON.stringify(e.options)}')`:"",l=`
  <style type="text/css" media="print">
    ${O(e)}
  </style>
  <script>
    const $html = document.querySelector('html');
    if($html && $html.classList && $html.classList.add) {
      $html.classList.add('${y}');
    }
    window.onload = function() {
      if(${e.title==null?0:1}) {
        document.title = '${e.title}';
      }
      window.print(${d});
      window.parent.postMessage('elePrintDone_${t}', '*');
    };
  <\/script>
  `,u=(((i=document.querySelector("html"))==null?void 0:i.outerHTML)||"").replace(/<script/g,'<textarea style="display:none;" ').replace(/<\/script>/g,"</textarea>").replace(/<\/html>/,l+"</html>");return o.write("<!DOCTYPE html>"+u),o.close(),r}function H(e){v++;const t=v,[i]=P(500),n=(o,a)=>{if(a==="_iframe"){I(o,t);return}const d=document.querySelector("html");if(!d){e&&e();return}d.classList.add(y);const l=document.createElement("style");l.setAttribute("type","text/css"),l.setAttribute("media","print"),l.innerHTML=O(o),document.body.appendChild(l);const c=document.title;o.title!=null&&o.title!==""&&(document.title=o.title),window.print(o.options),i(()=>{d.classList.remove(y),document.body.removeChild(l),o.title!=null&&(document.title=c),e&&e()})},r=o=>{o.data===`elePrintDone_${t}`&&i(()=>{L(),e&&e()})};return B(()=>{window.removeEventListener("message",r)}),window.addEventListener("message",r),n}function Q(e){const t=C();t.onload=()=>{const n=t.getAttribute("src");if(n){t.focus();try{t.contentWindow&&t.contentWindow.print(e.options),e.done&&e.done(),window.URL.revokeObjectURL(n);return}catch(r){console.error(r)}!e.arraybuffer&&e.url?(window.URL.revokeObjectURL(n),window.open(e.url)):window.open(n),e.done&&e.done()}};const i=n=>{const r=new window.Blob([n],{type:"application/pdf"});if(window.navigator&&window.navigator.msSaveOrOpenBlob){window.navigator.msSaveOrOpenBlob(r,"print.pdf"),e.done&&e.done();return}t.setAttribute("src",window.URL.createObjectURL(r))};if(e.arraybuffer){i(e.arraybuffer);return}if(e.url){const n=new window.XMLHttpRequest;n.open("GET",e.url,!0),n.responseType="arraybuffer",n.onload=()=>{if([200,201].indexOf(n.status)!==-1){i(n.response);return}e.error&&e.error(n.status,n.statusText)},n.send()}}const W={modelValue:Boolean,headerStyle:Object,bodyStyle:Object,footerStyle:Object,title:String,margin:[String,Number],direction:String,orientation:String,target:String,static:Boolean,options:Object},z={"update:modelValue":e=>!0,done:()=>!0},Y=E({name:"ElePrinter",components:{ReceiverView:R},props:W,emits:z,setup(e,{emit:t}){const i=H(()=>{r.value=!1,l(!1),d()}),n=V(S()),r=T(!1),o=j(()=>e.static),a=c=>{r.value||(r.value=!0,x(()=>{const u={title:e.title,margin:e.margin,direction:e.direction,orientation:e.orientation,options:D(e.options,c)};i(u,e.target)}))},d=()=>{t("done")},l=c=>{t("update:modelValue",c)};return k(()=>e.modelValue,c=>{c&&a()}),_(()=>{e.modelValue&&a()}),{container:n,visible:r,isStatic:o,print:a}}}),J=(e,t)=>{const i=e.__vccOpts||e;for(const[n,r]of t)i[n]=r;return i},G={key:0},K={key:1};function X(e,t,i,n,r,o){const a=N("ReceiverView");return m(),U(q,{to:e.container,disabled:e.isStatic&&!e.visible},[s("table",{class:M(["ele-printer",{"is-open":e.visible},{"is-static":e.isStatic}])},[e.$slots.header?(m(),h("thead",G,[s("tr",null,[s("td",null,[s("div",{class:"ele-printer-header",style:f(e.headerStyle)},[p(e.$slots,"header")],4)])])])):b("",!0),s("tbody",null,[s("tr",null,[s("td",null,[A(a,{class:"ele-printer-body",style:f(e.bodyStyle)},{default:F(()=>[p(e.$slots,"default")]),_:3},8,["style"])])])]),e.$slots.footer?(m(),h("tfoot",K,[s("tr",null,[s("td",null,[s("div",{class:"ele-printer-footer",style:f(e.footerStyle)},[p(e.$slots,"footer")],4)])])])):b("",!0)],2)],8,["to","disabled"])}const ee=J(Y,[["render",X]]);export{ee as i,Q as p};