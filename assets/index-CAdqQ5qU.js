import{i as He}from"./index-B3KaCODP.js";import{W as Ze,bv as Te,bO as qe,bP as xe,by as Je,bz as pe,b0 as ke,bA as Ae,bB as Ne,bQ as Ge,d as W,bR as Ye,bS as Xe,bT as Qe,X as et,r as A,bU as tt,K as R,bF as nt,bV as at,a_ as fe,a4 as ve,o as E,c as K,e as M,B as L,Z as J,i as C,C as ee,f as S,bW as ot,F as V,Y as x,aj as Ce,bX as lt,G as le,H as Pe,g as G,h as T,k as Re,bY as me,A as oe,j as De,a6 as Ke,bK as st,a1 as it,bC as Ie,bH as rt,a2 as ut,a3 as ct,bZ as dt,y as Ee,P as pt,b_ as mt,ax as ft,ad as Be,w as F,O as B,a0 as q,n as Se,z as vt,b$ as gt,c0 as yt,c1 as ht,c2 as bt,c3 as wt,c4 as $e,c5 as Le,b as Mt,ar as kt,c6 as It,c7 as ze}from"./index-BiiIy8BH.js";import{E as St}from"./empty-B_ITTikW.js";import{i as _t}from"./index-n3iKJaD_.js";import{i as Ue}from"./index-CIoy1qQK.js";const At=Ze({valueKey:{type:String,default:"value"},modelValue:{type:[String,Number],default:""},debounce:{type:Number,default:300},placement:{type:Te(String),values:["top","top-start","top-end","bottom","bottom-start","bottom-end"],default:"bottom-start"},fetchSuggestions:{type:Te([Function,Array]),default:qe},popperClass:{type:String,default:""},triggerOnFocus:{type:Boolean,default:!0},selectWhenUnmatched:{type:Boolean,default:!1},hideLoading:{type:Boolean,default:!1},teleported:xe.teleported,highlightFirstItem:{type:Boolean,default:!1},fitInputWidth:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},name:String,...Je(["ariaLabel"])}),Ct={[pe]:t=>ke(t),[Ae]:t=>ke(t),[Ne]:t=>ke(t),focus:t=>t instanceof FocusEvent,blur:t=>t instanceof FocusEvent,clear:()=>!0,select:t=>Ge(t)},je="ElAutocomplete",Pt=W({name:je,inheritAttrs:!1}),Et=W({...Pt,props:At,emits:Ct,setup(t,{expose:b,emit:n}){const v=t,f=Ye(),u=Xe(),l=Qe(),r=et("autocomplete"),d=A(),g=A(),w=A(),o=A();let y=!1,s=!1;const p=A([]),c=A(-1),m=A(""),k=A(!1),I=A(!1),U=A(!1),O=tt(),H=R(()=>u.style),N=R(()=>(p.value.length>0||U.value)&&k.value),se=R(()=>!v.hideLoading&&U.value),D=R(()=>d.value?Array.from(d.value.$el.querySelectorAll("input")):[]),ge=()=>{N.value&&(m.value=`${d.value.$el.offsetWidth}px`)},ye=()=>{c.value=-1},X=nt(async e=>{if(I.value)return;const a=i=>{U.value=!1,!I.value&&(Ie(i)?(p.value=i,c.value=v.highlightFirstItem?0:-1):rt(je,"autocomplete suggestions must be an array"))};if(U.value=!0,Ie(v.fetchSuggestions))a(v.fetchSuggestions);else{const i=await v.fetchSuggestions(e,a);Ie(i)&&a(i)}},v.debounce),te=e=>{const a=!!e;if(n(Ae,e),n(pe,e),I.value=!1,k.value||(k.value=a),!v.triggerOnFocus&&!e){I.value=!0,p.value=[];return}X(e)},z=e=>{var a;l.value||(((a=e.target)==null?void 0:a.tagName)!=="INPUT"||D.value.includes(document.activeElement))&&(k.value=!0)},j=e=>{n(Ne,e)},ie=e=>{s?s=!1:(k.value=!0,n("focus",e),v.triggerOnFocus&&!y&&X(String(v.modelValue)))},re=e=>{setTimeout(()=>{var a;if((a=w.value)!=null&&a.isFocusInsideContent()){s=!0;return}k.value&&Z(),n("blur",e)})},he=()=>{k.value=!1,n(pe,""),n("clear")},Q=async()=>{N.value&&c.value>=0&&c.value<p.value.length?ne(p.value[c.value]):v.selectWhenUnmatched&&(n("select",{value:v.modelValue}),p.value=[],c.value=-1)},ue=e=>{N.value&&(e.preventDefault(),e.stopPropagation(),Z())},Z=()=>{k.value=!1},ce=()=>{var e;(e=d.value)==null||e.focus()},be=()=>{var e;(e=d.value)==null||e.blur()},ne=async e=>{n(Ae,e[v.valueKey]),n(pe,e[v.valueKey]),n("select",e),p.value=[],c.value=-1},ae=e=>{if(!N.value||U.value)return;if(e<0){c.value=-1;return}e>=p.value.length&&(e=p.value.length-1);const a=g.value.querySelector(`.${r.be("suggestion","wrap")}`),_=a.querySelectorAll(`.${r.be("suggestion","list")} li`)[e],h=a.scrollTop,{offsetTop:P,scrollHeight:$}=_;P+$>h+a.clientHeight&&(a.scrollTop+=$),P<h&&(a.scrollTop-=$),c.value=e,d.value.ref.setAttribute("aria-activedescendant",`${O.value}-item-${c.value}`)},de=at(o,()=>{N.value&&Z()});return fe(()=>{de==null||de()}),ve(()=>{d.value.ref.setAttribute("role","textbox"),d.value.ref.setAttribute("aria-autocomplete","list"),d.value.ref.setAttribute("aria-controls","id"),d.value.ref.setAttribute("aria-activedescendant",`${O.value}-item-${c.value}`),y=d.value.ref.hasAttribute("readonly")}),b({highlightedIndex:c,activated:k,loading:U,inputRef:d,popperRef:w,suggestions:p,handleSelect:ne,handleKeyEnter:Q,focus:ce,blur:be,close:Z,highlight:ae}),(e,a)=>(E(),K(C(st),{ref_key:"popperRef",ref:w,visible:C(N),placement:e.placement,"fallback-placements":["bottom-start","top-start"],"popper-class":[C(r).e("popper"),e.popperClass],teleported:e.teleported,"gpu-acceleration":!1,pure:"","manual-mode":"",effect:"light",trigger:"click",transition:`${C(r).namespace.value}-zoom-in-top`,persistent:"",role:"listbox",onBeforeShow:ge,onHide:ye},{content:M(()=>[L("div",{ref_key:"regionRef",ref:g,class:J([C(r).b("suggestion"),C(r).is("loading",C(se))]),style:ee({[e.fitInputWidth?"width":"minWidth"]:m.value,outline:"none"}),role:"region"},[S(C(ot),{id:C(O),tag:"ul","wrap-class":C(r).be("suggestion","wrap"),"view-class":C(r).be("suggestion","list"),role:"listbox"},{default:M(()=>[C(se)?(E(),V("li",{key:0},[x(e.$slots,"loading",{},()=>[S(C(Ce),{class:J(C(r).is("loading"))},{default:M(()=>[S(C(lt))]),_:1},8,["class"])])])):(E(!0),V(le,{key:1},Pe(p.value,(i,_)=>(E(),V("li",{id:`${C(O)}-item-${_}`,key:_,class:J({highlighted:c.value===_}),role:"option","aria-selected":c.value===_,onClick:h=>ne(i)},[x(e.$slots,"default",{item:i},()=>[G(T(i[e.valueKey]),1)])],10,["id","aria-selected","onClick"]))),128))]),_:3},8,["id","wrap-class","view-class"])],6)]),default:M(()=>[L("div",{ref_key:"listboxRef",ref:o,class:J([C(r).b(),e.$attrs.class]),style:ee(C(H)),role:"combobox","aria-haspopup":"listbox","aria-expanded":C(N),"aria-owns":C(O)},[S(C(Re),me({ref_key:"inputRef",ref:d},C(f),{clearable:e.clearable,disabled:C(l),name:e.name,"model-value":e.modelValue,"aria-label":e.ariaLabel,onInput:te,onChange:j,onFocus:ie,onBlur:re,onClear:he,onKeydown:[oe(De(i=>ae(c.value-1),["prevent"]),["up"]),oe(De(i=>ae(c.value+1),["prevent"]),["down"]),oe(Q,["enter"]),oe(Z,["tab"]),oe(ue,["esc"])],onMousedown:z}),Ke({_:2},[e.$slots.prepend?{name:"prepend",fn:M(()=>[x(e.$slots,"prepend")])}:void 0,e.$slots.append?{name:"append",fn:M(()=>[x(e.$slots,"append")])}:void 0,e.$slots.prefix?{name:"prefix",fn:M(()=>[x(e.$slots,"prefix")])}:void 0,e.$slots.suffix?{name:"suffix",fn:M(()=>[x(e.$slots,"suffix")])}:void 0]),1040,["clearable","disabled","name","model-value","aria-label","onKeydown"])],14,["aria-expanded","aria-owns"])]),_:3},8,["visible","placement","popper-class","teleported","transition"]))}});var $t=it(Et,[["__file","autocomplete.vue"]]);const Lt=ut($t);var Fe={exports:{}};(function(t,b){(function(n,v){t.exports=v()})(dt,function(){function n(o){var y=[];return o.AMapUI&&y.push(v(o.AMapUI)),o.Loca&&y.push(f(o.Loca)),Promise.all(y)}function v(o){return new Promise(function(y,s){var p=[];if(o.plugins)for(var c=0;c<o.plugins.length;c+=1)l.AMapUI.plugins.indexOf(o.plugins[c])==-1&&p.push(o.plugins[c]);if(r.AMapUI===u.failed)s("前次请求 AMapUI 失败");else if(r.AMapUI===u.notload){r.AMapUI=u.loading,l.AMapUI.version=o.version||l.AMapUI.version,c=l.AMapUI.version;var m=document.body||document.head,k=document.createElement("script");k.type="text/javascript",k.src="https://webapi.amap.com/ui/"+c+"/main.js",k.onerror=function(I){r.AMapUI=u.failed,s("请求 AMapUI 失败")},k.onload=function(){if(r.AMapUI=u.loaded,p.length)window.AMapUI.loadUI(p,function(){for(var I=0,U=p.length;I<U;I++){var O=p[I].split("/").slice(-1)[0];window.AMapUI[O]=arguments[I]}for(y();d.AMapUI.length;)d.AMapUI.splice(0,1)[0]()});else for(y();d.AMapUI.length;)d.AMapUI.splice(0,1)[0]()},m.appendChild(k)}else r.AMapUI===u.loaded?o.version&&o.version!==l.AMapUI.version?s("不允许多个版本 AMapUI 混用"):p.length?window.AMapUI.loadUI(p,function(){for(var I=0,U=p.length;I<U;I++){var O=p[I].split("/").slice(-1)[0];window.AMapUI[O]=arguments[I]}y()}):y():o.version&&o.version!==l.AMapUI.version?s("不允许多个版本 AMapUI 混用"):d.AMapUI.push(function(I){I?s(I):p.length?window.AMapUI.loadUI(p,function(){for(var U=0,O=p.length;U<O;U++){var H=p[U].split("/").slice(-1)[0];window.AMapUI[H]=arguments[U]}y()}):y()})})}function f(o){return new Promise(function(y,s){if(r.Loca===u.failed)s("前次请求 Loca 失败");else if(r.Loca===u.notload){r.Loca=u.loading,l.Loca.version=o.version||l.Loca.version;var p=l.Loca.version,c=l.AMap.version.startsWith("2"),m=p.startsWith("2");if(c&&!m||!c&&m)s("JSAPI 与 Loca 版本不对应！！");else{c=l.key,m=document.body||document.head;var k=document.createElement("script");k.type="text/javascript",k.src="https://webapi.amap.com/loca?v="+p+"&key="+c,k.onerror=function(I){r.Loca=u.failed,s("请求 AMapUI 失败")},k.onload=function(){for(r.Loca=u.loaded,y();d.Loca.length;)d.Loca.splice(0,1)[0]()},m.appendChild(k)}}else r.Loca===u.loaded?o.version&&o.version!==l.Loca.version?s("不允许多个版本 Loca 混用"):y():o.version&&o.version!==l.Loca.version?s("不允许多个版本 Loca 混用"):d.Loca.push(function(I){I?s(I):s()})})}if(!window)throw Error("AMap JSAPI can only be used in Browser.");var u;(function(o){o.notload="notload",o.loading="loading",o.loaded="loaded",o.failed="failed"})(u||(u={}));var l={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},r={AMap:u.notload,AMapUI:u.notload,Loca:u.notload},d={AMap:[],AMapUI:[],Loca:[]},g=[],w=function(o){typeof o=="function"&&(r.AMap===u.loaded?o(window.AMap):g.push(o))};return{load:function(o){return new Promise(function(y,s){if(r.AMap==u.failed)s("");else if(r.AMap==u.notload){var p=o.key,c=o.version,m=o.plugins;p?(window.AMap&&location.host!=="lbs.amap.com"&&s("禁止多种API加载方式混用"),l.key=p,l.AMap.version=c||l.AMap.version,l.AMap.plugins=m||l.AMap.plugins,r.AMap=u.loading,c=document.body||document.head,window.___onAPILoaded=function(I){if(delete window.___onAPILoaded,I)r.AMap=u.failed,s(I);else for(r.AMap=u.loaded,n(o).then(function(){y(window.AMap)}).catch(s);g.length;)g.splice(0,1)[0]()},m=document.createElement("script"),m.type="text/javascript",m.src="https://webapi.amap.com/maps?callback=___onAPILoaded&v="+l.AMap.version+"&key="+p+"&plugin="+l.AMap.plugins.join(","),m.onerror=function(I){r.AMap=u.failed,s(I)},c.appendChild(m)):s("请填写key")}else if(r.AMap==u.loaded)if(o.key&&o.key!==l.key)s("多个不一致的 key");else if(o.version&&o.version!==l.AMap.version)s("不允许多个版本 JSAPI 混用");else{if(p=[],o.plugins)for(c=0;c<o.plugins.length;c+=1)l.AMap.plugins.indexOf(o.plugins[c])==-1&&p.push(o.plugins[c]);p.length?window.AMap.plugin(p,function(){n(o).then(function(){y(window.AMap)}).catch(s)}):n(o).then(function(){y(window.AMap)}).catch(s)}else if(o.key&&o.key!==l.key)s("多个不一致的 key");else if(o.version&&o.version!==l.AMap.version)s("不允许多个版本 JSAPI 混用");else{var k=[];if(o.plugins)for(c=0;c<o.plugins.length;c+=1)l.AMap.plugins.indexOf(o.plugins[c])==-1&&k.push(o.plugins[c]);w(function(){k.length?window.AMap.plugin(k,function(){n(o).then(function(){y(window.AMap)}).catch(s)}):n(o).then(function(){y(window.AMap)}).catch(s)})}})},reset:function(){delete window.AMap,delete window.AMapUI,delete window.Loca,l={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},r={AMap:u.notload,AMapUI:u.notload,Loca:u.notload},d={AMap:[],AMapUI:[],Loca:[]}}}})})(Fe);var Ut=Fe.exports;const Oe=ct(Ut),Ve={height:{type:String,default:"460px"},center:Array,zoom:{type:Number,default:11},selectedZoom:{type:Number,default:17},poiLimit:{type:Number,default:30},poiType:{type:String,default:""},poiKeywords:{type:String,default:""},poiRadius:{type:Number,default:1e3},returnRegions:Boolean,required:{type:Boolean,default:!0},message:String,suggestionCity:{type:String,default:"全国"},searchPlaceholder:String,markerSrc:{type:String,default:"https://3gimg.qq.com/lightmap/components/locationPicker2/image/marker.png"},mapKey:String,mapVersion:{type:String,default:"2.0"},mapStyle:String,darkMode:Boolean,okText:String,emptyProps:Object,searchStyle:Object,mode:{type:String,default:"poi"},filterable:{type:Boolean,default:!0},clickMessage:String,selected:Object,sideStyle:Object},Ot={...Ve,modelValue:Boolean,modalProps:Object,responsive:{type:Boolean,default:null},locale:Object,keywordMode:Boolean,headerStyle:Object},Vt={done:t=>!0,mapDone:t=>!0,open:()=>!0,closed:()=>!0,"update:modelValue":t=>!0},Tt=Object.keys(Ve),_e="ele-map-view-body-icon",Dt=W({name:"MapView",components:{ElAutocomplete:Lt,ElInput:Re,ElButton:Ee,ElIcon:Ce,ElEmpty:St,EleLoading:_t,PlusOutlined:pt,EnvironmentOutlined:mt,CheckCircleOutlined:ft,SearchOutlined:Be},props:Ve,emits:{mapDone:t=>!0,select:t=>!0,done:t=>!0},setup(t,{emit:b}){const n={},v=A(null),f=A(null),u=A(null),l=A(!0),r=A(!1),d=A(!1),g=A([]),w=A([]),o=A([_e]),y=A(""),s=A(null),p=R(()=>t.required&&!s.value),c=R(()=>t.mode==="keyword"),m=R(()=>t.mode==="poi"),k=()=>{if(t.selected!=null){const{lng:e,lat:a}=t.selected;if(a!=null&&e!=null)return t.selected}},I=(e,a)=>a.lat===e.lat&&a.lng===e.lng&&a.name===e.name&&a.address===e.address,U=(e,a)=>{const i=a.findIndex(h=>I(e,h));if(i==-1)return[e,...a];const _=[...a];return _[i]=e,_},O=e=>e==null||typeof e!="object"||e.province==null&&e.city==null&&e.district==null&&e.citycode==null,H=e=>{const a=e.name||"",_=(Array.isArray(e.address)?e.address[0]:e.address)||"",{lat:h,lng:P}=e.location,$=O(e.city)?void 0:e.city,we=[a,_,h,P].join(",");return{...e,name:a,address:_,lat:h,lng:P,city:$,key:we}},N=()=>{const e=u.value;e&&(e.scrollTop=0)},se=()=>{const e=u.value;if(e){const a=e.querySelector(".ele-map-view-item.is-active");a&&(typeof a.scrollIntoViewIfNeeded=="function"?a.scrollIntoViewIfNeeded(!0):a.scrollIntoView({behavior:"smooth",block:"center"}))}},D=(e,a)=>{s.value!==e&&(s.value=e,a&&b("select",s.value))},ge=e=>new Promise((a,i)=>{if(!n.autoCompleteIns){i(new Error("AutoComplete instance is null"));return}n.autoCompleteIns.search(e,(_,h)=>{if(_==="error"){const $=_+" "+(h?JSON.stringify(h):"");i(new Error($));return}if(!(h!=null&&h.tips)){a([]);return}const P=h.tips.filter($=>!!$.location);a(P.map($=>H($)))})}),ye=(e,a)=>new Promise((i,_)=>{if(!n.placeSearchIns){_(new Error("PlaceSearch instance is null"));return}n.placeSearchIns.searchNearBy(t.poiKeywords,[e,a],t.poiRadius,(h,P)=>{var $;if(h==="complete"&&(($=P==null?void 0:P.poiList)!=null&&$.pois)){const We=P.poiList.pois.filter(Me=>!!Me.location);i(We.map(Me=>H(Me)));return}if(h==="no_data"){i([]);return}const we=h+" "+(P?JSON.stringify(P):"");_(new Error(we))})}),Y=(e,a)=>{l.value=!0,r.value=!0,ye(e,a).then(i=>{if(r.value=!1,l.value=!1,!n.selectedSuggestion){g.value=i,D(null,!0),N();return}g.value=U(n.selectedSuggestion,i),D(n.selectedSuggestion,!0),n.selectedSuggestion=null,Se(()=>{})}).catch(i=>{console.error(i),r.value=!1,l.value=!1;const _=n.selectedSuggestion;g.value=_?[_]:[],D(_||null,!0)})},X=()=>{o.value=[_e],Se(()=>{setTimeout(()=>{o.value=[_e,"ele-map-view-anim-bounce"]},0)})},te=()=>{n.centerMarker&&n.mapIns&&n.mapIns.remove(n.centerMarker)},z=(e,a)=>{if(!n.centerMarker){console.error("centerMarker is null");return}if(!n.mapIns){console.error("map instance is null");return}te(),e!=null&&a!=null&&(n.centerMarker.setPosition([e,a]),n.mapIns.add(n.centerMarker))},j=(e,a,i)=>{n.mapIns&&e!=null&&a!=null&&(i==null?n.mapIns.setCenter([e,a]):n.mapIns.setZoomAndCenter(i,[e,a]))},ie=e=>new Promise((a,i)=>{if(!n.mapIns){i(new Error("map instance is null"));return}const _=n.mapIns.getCenter();if(!e){a(_||{});return}n.mapIns.getCity(h=>{a({..._||{},city:h})})}),re=e=>{n.mapIns&&(typeof e=="boolean"?e?n.mapIns.setMapStyle("amap://styles/dark"):n.mapIns.setMapStyle("amap://styles/normal"):e&&n.mapIns.setMapStyle(e))},he=()=>{n.mapIns&&n.mapIns.destroy(),n.centerMarker=null,n.placeSearchIns=null,n.autoCompleteIns=null,n.mapIns=null},Q=()=>{he(),n.lastSuggestion="",n.selectedSuggestion=null,n.isItemClickMove=!1,g.value=[],w.value=[],y.value="",D(null)},ue=()=>{!t.mapKey||n.mapIns||Oe.load({key:t.mapKey,version:t.mapVersion,plugins:["AMap.PlaceSearch","AMap.AutoComplete"]}).then(e=>{Q(),n.centerMarker=new e.Marker({icon:new e.Icon({image:t.markerSrc,size:new e.Size(26,36.5),imageSize:new e.Size(26,36.5)}),offset:new e.Pixel(-13,-36.5)}),n.autoCompleteIns=new e.AutoComplete({city:t.suggestionCity}),n.placeSearchIns=new e.PlaceSearch({type:t.poiType,pageSize:t.poiLimit,pageIndex:1});const a=k(),i=a?[a.lng,a.lat]:void 0,_=t.darkMode?"amap://styles/dark":void 0;n.mapIns=new e.Map(v.value,{zoom:a==null?t.zoom:t.selectedZoom,center:i||t.center,resizeEnable:!0,mapStyle:t.mapStyle||_}),n.mapIns.on("complete",()=>{const h=k();if(h!=null&&(D(h),!m.value)){const{lng:P,lat:$}=h;z(P,$)}if(m.value||c.value){n.selectedSuggestion=h;const{lng:P,lat:$}=n.mapIns.getCenter();Y(P,$);return}l.value=!1}),n.mapIns.on("moveend",()=>{if(n.isItemClickMove||!m.value){n.isItemClickMove=!1;return}X();const{lng:h,lat:P}=n.mapIns.getCenter();Y(h,P)}),n.mapIns.on("click",h=>{if(m.value||c.value)return;if(h.lnglat==null||typeof h.lnglat!="object"){console.error(h);return}const{lng:P,lat:$}=h.lnglat;D(H({location:{lat:$,lng:P}}),!0),j(P,$,t.selectedZoom),z(P,$)}),b("mapDone",n.mapIns)}).catch(e=>{console.error(e)})},Z=()=>n.mapIns,ce=()=>{const e=k();if(n.mapIns==null||e==null)return;D(e);const{lng:a,lat:i}=e;n.isItemClickMove=!0,j(a,i,t.selectedZoom),m.value||z(a,i),(c.value||m.value)&&!g.value.includes(e)&&(g.value=U(e,g.value)),Se(()=>{se()})},be=(e,a)=>{if(!e||n.lastSuggestion===e){a&&a(w.value);return}n.lastSuggestion=e,c.value&&(r.value=!0),ge(e).then(i=>{if(c.value){g.value=i,r.value=!1,D(null,!0),te(),N();return}w.value=i,a&&a(w.value)}).catch(i=>{console.error(i),r.value=!1,a&&a(w.value)})},ne=e=>{if(f.value&&f.value.blur(),!e)return;const{lng:a,lat:i}=e;if(!(a==null||i==null)){if(!m.value){z(a,i),j(a,i,t.selectedZoom),D(e,!0);return}l.value=!0,n.selectedSuggestion=e,n.isItemClickMove=!0,j(a,i,t.selectedZoom),X(),Y(a,i)}},ae=e=>{n.isItemClickMove=!0,D(e,!0);const{lng:a,lat:i}=e;if(j(a,i,t.selectedZoom),m.value){X();return}z(a,i)},de=()=>{if(!s.value){d.value=!0,ie(t.returnRegions).then(e=>{d.value=!1,b("done",e)}).catch(e=>{console.error(e),d.value=!1,b("done",{})});return}if(!t.returnRegions||!O(s.value.city)){b("done",s.value);return}d.value=!0,n.isItemClickMove=!0,j(s.value.lng,s.value.lat),ie(!0).then(({city:e})=>{d.value=!1,b("done",{...s.value||{},city:e})}).catch(e=>{console.error(e),d.value=!1,b("done",s.value||{})})};return F(()=>t.selected,()=>{ce()}),F(()=>t.darkMode,e=>{t.mapStyle||re(e)}),F(()=>t.mapStyle,e=>{e&&re(e)}),F(()=>t.mode,e=>{if(y.value="",w.value=[],n.selectedSuggestion=null,n.lastSuggestion="",te(),e!=="poi"&&s.value){const{lng:a,lat:i}=s.value.location;z(a,i)}if(!g.value.length&&(e==="poi"||e==="keyword"))if(s.value){const{lng:a,lat:i}=s.value.location;Y(a,i)}else{const{lng:a,lat:i}=n.mapIns.getCenter();Y(a,i)}}),F(()=>t.mapKey,()=>{Q(),ue()}),ve(()=>{ue()}),fe(()=>{Q()}),{SearchOutlined:Be,mapRef:v,autocompleteRef:f,listRef:u,loading:l,poiLoading:r,confirmLoading:d,data:g,suggestionData:w,centerIconClass:o,keywords:y,current:s,confirmDisabled:p,keywordMode:c,poiMode:m,getMapIns:Z,showInitSelected:ce,handleSearch:be,handleSearchSelect:ne,handleItemClick:ae,handleConfirm:de}}}),Bt=(t,b)=>{const n=t.__vccOpts||t;for(const[v,f]of b)n[v]=f;return n},Nt={class:"ele-map-view-body"},Rt={ref:"mapRef",style:{height:"100%"}},Kt=["src"],zt={class:"ele-map-suggest-item"},jt={class:"ele-map-suggest-title"},Ft={class:"ele-map-suggest-text"},Wt={key:0,class:"ele-map-view-message"},Ht={ref:"listRef",class:"ele-map-view-list"},Zt=["onClick"],qt={class:"ele-map-view-item-body"},xt={class:"ele-map-view-item-title"},Jt={key:0,class:"ele-map-view-item-text"},Gt={key:0,class:"ele-map-view-empty"},Yt={class:"ele-map-view-extra"},Xt={key:0,class:"ele-map-view-message"};function Qt(t,b,n,v,f,u){const l=B("PlusOutlined"),r=B("ElIcon"),d=B("SearchOutlined"),g=B("ElAutocomplete"),w=B("ElButton"),o=B("ElInput"),y=B("EnvironmentOutlined"),s=B("CheckCircleOutlined"),p=B("ElEmpty"),c=B("EleLoading");return E(),K(c,{loading:t.loading,class:J(["ele-map-view",{"is-poi-mode":t.poiMode}]),style:ee({height:t.height})},{default:M(()=>[L("div",Nt,[L("div",Rt,null,512),t.poiMode?(E(),V(le,{key:0},[S(r,{class:"ele-map-view-icon-plus"},{default:M(()=>[S(l)]),_:1}),L("img",{src:t.markerSrc,class:J(t.centerIconClass)},null,10,Kt)],64)):q("",!0),t.filterable&&!t.keywordMode?(E(),V("div",{key:1,class:"ele-map-view-search",style:ee(t.searchStyle)},[S(g,{ref:"autocompleteRef",valueKey:"name",clearable:!0,modelValue:t.keywords,"onUpdate:modelValue":b[0]||(b[0]=m=>t.keywords=m),placeholder:t.searchPlaceholder,popperClass:"ele-map-suggest-popper",fetchSuggestions:t.handleSearch,onSelect:t.handleSearchSelect},{prefix:M(()=>[S(r,{class:"el-input__icon"},{default:M(()=>[S(d)]),_:1})]),default:M(({item:m})=>[L("div",zt,[L("div",jt,T(m.name),1),L("div",Ft,T(m.district),1)])]),_:1},8,["modelValue","placeholder","fetchSuggestions","onSelect"])],4)):q("",!0),!t.poiMode&&!t.keywordMode?(E(),V(le,{key:2},[t.confirmDisabled&&t.clickMessage?(E(),V("div",Wt,T(t.clickMessage),1)):(E(),K(w,{key:1,type:"primary",loading:t.confirmLoading,disabled:t.confirmDisabled,class:"ele-map-view-btn-ok",onClick:t.handleConfirm},{default:M(()=>[G(T(t.okText),1)]),_:1},8,["loading","disabled","onClick"]))],64)):q("",!0)]),t.keywordMode||t.poiMode?(E(),K(c,{key:0,loading:t.poiLoading,style:ee(t.sideStyle),class:"ele-map-view-side"},{default:M(()=>[t.keywordMode?(E(),V("div",{key:0,class:"ele-map-view-search",style:ee(t.searchStyle)},[S(o,{clearable:!0,modelValue:t.keywords,"onUpdate:modelValue":b[1]||(b[1]=m=>t.keywords=m),prefixIcon:t.SearchOutlined,placeholder:t.searchPlaceholder,validateEvent:!1,onChange:t.handleSearch},null,8,["modelValue","prefixIcon","placeholder","onChange"])],4)):q("",!0),L("div",Ht,[(E(!0),V(le,null,Pe(t.data,m=>(E(),V("div",{key:m.key,class:J(["ele-map-view-item",{"is-active":m===t.current}]),onClick:k=>t.handleItemClick(m)},[S(r,{class:"ele-map-view-item-icon"},{default:M(()=>[S(y)]),_:1}),L("div",qt,[L("div",xt,T(m.name),1),m.address?(E(),V("div",Jt,T(m.address),1)):q("",!0)]),S(r,{class:"ele-map-view-item-radio"},{default:M(()=>[S(s)]),_:1})],10,Zt))),128)),!t.data||!t.data.length?(E(),V("div",Gt,[S(p,me({imageSize:80},t.emptyProps||{}),null,16)])):q("",!0)],512),L("div",Yt,[t.confirmDisabled&&t.message?(E(),V("div",Xt,T(t.message),1)):(E(),K(w,{key:1,type:"primary",loading:t.confirmLoading,disabled:t.confirmDisabled,class:"ele-map-view-btn-ok",onClick:t.handleConfirm},{default:M(()=>[G(T(t.okText),1)]),_:1},8,["loading","disabled","onClick"]))])]),_:1},8,["loading","style"])):q("",!0)]),_:1},8,["loading","class","style"])}const en=Bt(Dt,[["render",Qt]]),tn=W({name:"EleMapPicker",components:{EleModal:vt,MapView:en},props:Ot,emits:Vt,setup(t,{emit:b}){const{lang:n,globalConfig:v}=gt("map",t),f=yt(t),u=A(null),l=R(()=>t.mapKey||v.mapKey),r=R(()=>ht(t,Tt)),d=o=>{b("update:modelValue",o)},g=o=>{b("mapDone",o)},w=o=>{b("done",o)};return F(()=>t.modelValue,o=>{o&&u.value&&u.value.showInitSelected()}),{lang:n,isResponsive:f,mapRef:u,aMapKey:l,mapProps:r,updateModelValue:d,handleMapDone:g,handleDone:w}}}),nn=(t,b)=>{const n=t.__vccOpts||t;for(const[v,f]of b)n[v]=f;return n};function an(t,b,n,v,f,u){const l=B("MapView"),r=B("EleModal");return E(),K(r,me({width:"740px",title:t.lang.title},t.modalProps||{},{modelValue:t.modelValue,class:["ele-map-picker",{"is-responsive":t.isResponsive}],"onUpdate:modelValue":t.updateModelValue}),Ke({default:M(()=>[S(l,me(t.mapProps,{ref:"mapRef",message:t.lang.message,clickMessage:t.lang.clickMessage,searchPlaceholder:t.lang.placeholder,okText:t.lang.ok,mapKey:t.aMapKey,mode:t.keywordMode?"keyword":t.mode,onMapDone:t.handleMapDone,onDone:t.handleDone}),null,16,["message","clickMessage","searchPlaceholder","okText","mapKey","mode","onMapDone","onDone"])]),_:2},[Pe(Object.keys(t.$slots).filter(d=>d!=="default"),d=>({name:d,fn:M(g=>[x(t.$slots,d,bt(wt(g||{})))])}))]),1040,["title","modelValue","class","onUpdate:modelValue"])}const on=nn(tn,[["render",an]]),ln={style:{"margin-top":"12px"}},sn={style:{"margin-top":"12px"}},rn={style:{"margin-top":"12px"}},un=W({__name:"demo-picker",setup(t){const b=$e(),{darkMode:n}=Le(b),v=A(!1),f=A("lnglat"),u=A(),l=Mt({location:"",address:"",lngAndLat:""}),r=()=>{v.value=!0},d=g=>{var w,o,y;console.log(JSON.parse(JSON.stringify(g))),l.location=`${(w=g.city)==null?void 0:w.province}/${(o=g.city)==null?void 0:o.city}/${(y=g.city)==null?void 0:y.district}`,l.address=`${g.name} ${g.address}`,l.lngAndLat=`${g.lng},${g.lat}`,v.value=!1,u.value=g};return(g,w)=>{const o=Ce,y=Ee,s=It,p=Ue,c=on;return E(),V(le,null,[S(p,{header:"地图位置选择"},{default:M(()=>[L("div",null,[S(s,{modelValue:f.value,"onUpdate:modelValue":w[0]||(w[0]=m=>f.value=m),items:[{title:"点击地图模式",command:"lnglat"},{title:"关键字检索模式",command:"keyword"},{title:"POI检索模式",command:"poi"}],trigger:"click",style:{"margin-right":"12px"}},{default:M(({selected:m})=>[S(y,{class:"ele-btn-icon",style:{width:"134px"}},{default:M(()=>[L("span",null,T(m.title),1),S(o,{size:12,style:{margin:"0 -4px 0 2px"}},{default:M(()=>[S(C(kt))]),_:1})]),_:2},1024)]),_:1},8,["modelValue"]),S(y,{type:"primary",class:"ele-btn-icon",onClick:r},{default:M(()=>[G(" 打开位置选择 ")]),_:1})]),L("div",ln,"经 纬 度 : "+T(l.lngAndLat),1),L("div",sn,"选中位置: "+T(l.location),1),L("div",rn,"详细地址: "+T(l.address),1)]),_:1}),S(c,{modelValue:v.value,"onUpdate:modelValue":w[1]||(w[1]=m=>v.value=m),"return-regions":!0,selected:u.value,"dark-mode":C(n),mode:f.value,height:"100%","modal-props":{bodyStyle:{height:"460px",minHeight:"100%",maxHeight:"100%"},maxable:!0,resizable:!0,resizeIconStyle:{zIndex:200},minWidth:372,minHeight:280},"side-style":{maxWidth:"448px"},onDone:d},null,8,["modelValue","selected","dark-mode","mode"])],64)}}}),cn=W({__name:"demo-map",setup(t){const b=$e(),{darkMode:n}=Le(b),v=A(null);let f;const u=()=>{Oe.load({key:ze,version:"2.0",plugins:["AMap.InfoWindow","AMap.Marker"]}).then(l=>{const r={zoom:13,center:[114.346084,30.516215],mapStyle:n.value?"amap://styles/dark":void 0};f=new l.Map(v.value,r);const d=new l.InfoWindow({content:`
            <div style="color: #333;">
              <div style="padding: 5px;font-size: 16px;">武汉易云智科技有限公司</div>
              <div style="padding: 0 5px;">地址: 湖北省武汉市洪山区雄楚大道222号</div>
              <div style="padding: 0 5px;">电话: 020-123456789</div>
            </div>
            <a
              style="padding: 8px 0 0 5px;text-decoration: none;display: inline-block;color: #1677ff;"
              href="//uri.amap.com/marker?position=114.346084,30.511215&name=武汉易云智科技有限公司"
              target="_blank">到这里去→
            </a>
          `});d.open(f,[114.346084,30.511215]);const g=new l.Icon({size:new l.Size(25,34),image:"//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-red.png",imageSize:new l.Size(25,34)}),w=new l.Marker({icon:g,position:[114.346084,30.511215],offset:new l.Pixel(-12,-28)});w.setMap(f),w.on("click",()=>{d.open(f)})}).catch(l=>{console.error(l)})};return ve(()=>{u()}),fe(()=>{f&&(f.destroy(),f=null)}),F(n,l=>{f&&(l?f.setMapStyle("amap://styles/dark"):f.setMapStyle("amap://styles/normal"))}),(l,r)=>{const d=Ue;return E(),K(d,{header:"官网底部地图"},{default:M(()=>[L("div",{ref_key:"locationMapRef",ref:v,style:{height:"360px","max-width":"800px"}},null,512)]),_:1})}}}),dn=W({__name:"demo-track",setup(t){const b=$e(),{darkMode:n}=Le(b),v=A(null);let f,u;const l=[[116.478935,39.997761],[116.478939,39.997825],[116.478912,39.998549],[116.478912,39.998549],[116.478998,39.998555],[116.478998,39.998555],[116.479282,39.99856],[116.479658,39.998528],[116.480151,39.998453],[116.480784,39.998302],[116.480784,39.998302],[116.481149,39.998184],[116.481573,39.997997],[116.481863,39.997846],[116.482072,39.997718],[116.482362,39.997718],[116.483633,39.998935],[116.48367,39.998968],[116.484648,39.999861]],r=()=>{Oe.load({key:ze,version:"2.0",plugins:["AMap.MoveAnimation","AMap.Marker","AMap.Polyline"]}).then(o=>{const y={zoom:17,center:[116.478935,39.997761],mapStyle:n.value?"amap://styles/dark":void 0};f=new o.Map(v.value,y),u=new o.Marker({map:f,position:[116.478935,39.997761],icon:"https://a.amap.com/jsapi_demos/static/demo-center-v2/car.png",offset:new o.Pixel(-13,-26)}),new o.Polyline({map:f,path:l,showDir:!0,strokeColor:"#2288FF",strokeOpacity:1,strokeWeight:6});const s=new o.Polyline({map:f,showDir:!0,strokeColor:"#44BB55",strokeOpacity:1,strokeWeight:6});u.on("moving",p=>{s.setPath(p.passedPath)}),f.setFitView()}).catch(o=>{console.error(o)})},d=()=>{u&&(u.stopMove(),u.moveAlong(l,{duration:200,autoRotation:!0}))},g=()=>{u&&u.pauseMove()},w=()=>{u&&u.resumeMove()};return ve(()=>{r()}),fe(()=>{f&&(f.destroy(),f=null)}),F(n,()=>{f&&(n.value?f.setMapStyle("amap://styles/dark"):f.setMapStyle("amap://styles/normal"))}),(o,y)=>{const s=Ee,p=Ue;return E(),K(p,{header:"轨迹展示及轨迹回放"},{default:M(()=>[L("div",{ref_key:"trackMapRef",ref:v,style:{height:"360px","max-width":"800px","margin-bottom":"16px"}},null,512),L("div",null,[S(s,{type:"primary",class:"ele-btn-icon",onClick:d},{default:M(()=>[G(" 开始移动 ")]),_:1}),S(s,{type:"primary",class:"ele-btn-icon",onClick:g},{default:M(()=>[G(" 暂停移动 ")]),_:1}),S(s,{type:"primary",class:"ele-btn-icon",onClick:w},{default:M(()=>[G(" 继续移动 ")]),_:1})])]),_:1})}}}),yn=W({name:"ExtensionMap",__name:"index",setup(t){return(b,n)=>{const v=He;return E(),K(v,null,{default:M(()=>[S(un),S(cn),S(dn)]),_:1})}}});export{yn as default};