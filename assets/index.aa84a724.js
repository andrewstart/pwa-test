import{r as e,v as t,n,d as o,u as r,o as s,c as a,a as i,b as l,e as u,R as d,F as c,f as p,g as f,h as v,i as m,j as g}from"./vendor.40e4d6d6.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();function h(o={}){const{immediate:r=!0,onNeedRefresh:s,onOfflineReady:a,onRegistered:i,onRegisterError:l}=o,u=e(!1),d=e(!1);return{updateServiceWorker:function(e={}){const{immediate:o=!1,onNeedRefresh:r,onOfflineReady:s,onRegistered:a,onRegisterError:i}=e;let l,u;if("serviceWorker"in navigator){l=new t("/pwa-test/sw.js",{scope:"/pwa-test/"}),l.addEventListener("activated",(e=>{e.isUpdate||null==s||s()}));{const e=()=>{null==r||r()};l.addEventListener("waiting",e),l.addEventListener("externalwaiting",e)}l.register({immediate:o}).then((e=>{u=e,null==a||a(e)})).catch((e=>{null==i||i(e)}))}return async(e=!0)=>{e&&(null==l||l.addEventListener("controlling",(e=>{e.isUpdate&&window.location.reload()}))),u&&u.waiting&&await n(u.waiting,{type:"SKIP_WAITING"})}}({immediate:r,onNeedRefresh(){u.value=!0,null==s||s()},onOfflineReady(){d.value=!0,null==a||a()},onRegistered:i,onRegisterError:l}),offlineReady:d,needRefresh:u}}const y={key:0,class:"pwa-toast",role:"alert"},k={class:"message"},R={key:0},b={key:1};var w=o({setup(e){const{offlineReady:t,needRefresh:n,updateServiceWorker:o}=h(),u=async()=>{t.value=!1,n.value=!1};return(e,d)=>r(t)||r(n)?(s(),a("div",y,[i("div",k,[r(t)?(s(),a("span",R," App ready to work offline ")):(s(),a("span",b," New content available, click on reload button to update. "))]),r(n)?(s(),a("button",{key:0,onClick:d[0]||(d[0]=e=>r(o)())}," Reload ")):l("",!0),i("button",{onClick:u}," Close ")])):l("",!0)}});const C=i("img",{alt:"Vue logo",src:"/pwa-test/assets/logo.03d6d6da.png"},null,-1);var S=o({setup:e=>(e,t)=>(s(),a(c,null,[u(w),C,u(r(d))],64))}),I=o({props:{msg:String},data:()=>({}),render(){const e=this.msg;return u("div",null,[u("h1",null,[e]),u("button",{type:"button",onClick:()=>this.$router.push("/second")},[p("Go to counter page")]),u("p",null,[p("Saved counter value: "),this.$store.state.count])])}});I.__scopeId="data-v-4a23be64";var E=o({render(){return u("span",null,[u("button",{onClick:()=>this.$router.back()},[p("<")])])}});E.__scopeId="data-v-54056e84";var L=o({data:()=>({count:0}),methods:{onSave(){this.$store.commit("saveCount",this.count)}},render(){return u("div",null,[u("header",null,[u(E,null,null)]),u("h1",null,[p("Secondary Page")]),u("p",null,[u("button",{onClick:()=>this.count++},[p("Click me!")])]),u("p",null,[p("Button has been clicked "),this.count,p(" times.")]),u("p",null,[u("button",{onClick:this.onSave},[p("Save Count")])])])}});L.__scopeId="data-v-acedd936";const N=[{path:"/",component:I},{path:"/second",component:L}],_=f({history:v(),routes:N}),O=m({state:()=>({count:parseInt(localStorage.getItem("savedCount")||"")||0}),mutations:{saveCount(e,t){e.count=t,localStorage.setItem("savedCount",t.toString())}}});g(S).use(O).use(_).mount("#app");
