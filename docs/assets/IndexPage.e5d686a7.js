import{_ as l,d as m,o as r,a as u,p as h,b as f,e as t,f as i,g as n,h as v,i as $}from"./index.5838da66.js";import{Q as c}from"./QIcon.2069a3b0.js";const C=e=>(h("data-v-03d5ffa6"),e=e(),f(),e),b=C(()=>t("div",{id:"logoTextCont"},[t("div",{style:{"text-decoration":"none","font-size":"8vh"}},"Arcanepad"),t("small",{style:{"font-size":"2.5vh"}},"Decyphering Ancient Technology")],-1)),w=[b],E=m({__name:"LogoComp",setup(e){function o(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen()}return(s,_)=>(r(),u("div",{id:"logo",onClick:_[0]||(_[0]=p=>o())},w))}});var I=l(E,[["__scopeId","data-v-03d5ffa6"]]);const k={},V={id:"menu"},P={href:"https://imvenx.github.io/arcanedocs/guide/get-started.html",target:"_blank"},S={href:"https://imvenx.github.io/arcanedocs/",target:"_blank"},T={href:"https://discord.com/invite/6Pr9JBCGXy",target:"_blank"},B={href:"https://twitter.com/arcanepad",target:"_blank"},L={href:"https://www.youtube.com/channel/UCSmE-GM8iXoJRjraQYYycww",target:"_blank"};function D(e,o){return r(),u("div",V,[t("a",P,[i(" Download"),n(c,{name:"launch"})]),t("a",S,[i("Develop "),n(c,{name:"launch"})]),t("a",T,[i("Discord "),n(c,{name:"launch"})]),t("a",B,[i("Twitter "),n(c,{name:"launch"})]),t("a",L,[i("Videos "),n(c,{name:"launch"})])])}var F=l(k,[["render",D],["__scopeId","data-v-51c7ec8c"]]);const y=e=>(h("data-v-5005ff8a"),e=e(),f(),e),M=y(()=>t("div",{id:"loadingCircle"},null,-1)),N=[M],Q=y(()=>t("div",{id:"playButton"},null,-1)),Y=[Q],z=y(()=>t("source",{src:"https://github.com/imvenx/arcanepad-landing-page-3/raw/main/src/assets/videos/landing-vid.mp4",type:"video/mp4"},null,-1)),A=m({__name:"VideoComp",setup(e){const o=v(),s=v(),_=v();let p=!1;$(()=>{var d,a;(d=o.value)==null||d.addEventListener("play",()=>p=!0),(a=o.value)==null||a.addEventListener("canplay",x=>{_.value.style.opacity="0",setTimeout(()=>{p||(s.value.style.opacity="1")},500)})});function g(){var d;(d=o.value)==null||d.play(),s.value.style.opacity="0",setTimeout(()=>s.value.style.display="none",1e3)}return(d,a)=>(r(),u("div",{id:"video",onClick:a[1]||(a[1]=x=>g())},[t("div",{ref_key:"loadingEl",ref:_,id:"loadingEl"},N,512),t("div",{onClick:a[0]||(a[0]=x=>g()),ref_key:"playEl",ref:s,id:"playEl"},Y,512),t("video",{ref_key:"videoEl",ref:o,autoplay:"",loop:"",muted:"",disablePictureInPicture:""},[z,i(" Your browser does not support the video tag. ")],512)]))}});var G=l(A,[["__scopeId","data-v-5005ff8a"]]);const J=e=>(h("data-v-3a25fb1e"),e=e(),f(),e),X={id:"cont"},j=J(()=>t("div",{id:"shadow"},null,-1)),q=m({__name:"IndexPage",setup(e){return(o,s)=>(r(),u("div",X,[n(I),n(G),n(F),j]))}});var H=l(q,[["__scopeId","data-v-3a25fb1e"]]);export{H as default};
