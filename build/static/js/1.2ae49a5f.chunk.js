(this["webpackJsonpclearsight-frontend"]=this["webpackJsonpclearsight-frontend"]||[]).push([[1],{110:function(e,t,c){},111:function(e,t,c){},112:function(e,t,c){},113:function(e,t,c){},114:function(e,t,c){},115:function(e,t,c){},116:function(e,t,c){},117:function(e,t,c){},118:function(e,t,c){},47:function(e,t,c){"use strict";c.d(t,"a",(function(){return r})),c.d(t,"e",(function(){return b})),c.d(t,"g",(function(){return h})),c.d(t,"c",(function(){return f})),c.d(t,"j",(function(){return y})),c.d(t,"k",(function(){return T})),c.d(t,"l",(function(){return _})),c.d(t,"b",(function(){return A})),c.d(t,"f",(function(){return D})),c.d(t,"h",(function(){return Z})),c.d(t,"d",(function(){return z})),c.d(t,"n",(function(){return m})),c.d(t,"i",(function(){return P})),c.d(t,"m",(function(){return $}));var s=c(0),a=(c(69),c(4)),i=function(e){var t=e.color,c=void 0===t?"#000":t,s=e.direction,i=void 0===s?"down":s;return Object(a.jsx)("svg",{className:"arrow-direction-".concat(i),height:"30px",width:"30px",version:"1.1",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",children:Object(a.jsx)("polygon",{fill:c,points:"352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 "})})},n=c(52),r=(c(70),function(){var e=Object(s.useState)(0),t=Object(n.a)(e,2),c=t[0],r=t[1],l=["scrollTop",!!c&&"scroll-shadow"],o=function(e){window.pageYOffset<400&&r(window.scrollY)};return Object(s.useEffect)((function(){return window.addEventListener("scroll",o),function(){window.removeEventListener("scroll",o)}}),[]),Object(a.jsx)("div",{className:l.join(" "),onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:Object(a.jsx)(i,{direction:"up"})})}),l=c.p+"static/media/logo-footer.65560128.png",o=c(163),d=c(71),j=function(e){var t=e.color;return Object(a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1600",height:"199",children:[Object(a.jsx)("defs",{children:Object(a.jsx)("linearGradient",{id:"a",x1:"50%",x2:"50%",y1:"-10.959%",y2:"100%",children:Object(a.jsx)("stop",{stopColor:t,offset:"0%"})})}),Object(a.jsx)("path",{fill:"url(#a)",fillRule:"evenodd",d:"M.005 121C311 121 409.898-.25 811 0c400 0 500 121 789 121v77H0s.005-48 .005-77z",transform:"matrix(-1 0 0 1 1600 0)"})]})},m=(c(73),function(e){var t=e.colorFirstWave,c=e.colorSecoundWave,s=e.direction,i=encodeURIComponent(Object(d.renderToStaticMarkup)(Object(a.jsx)(j,{color:t}))),n=encodeURIComponent(Object(d.renderToStaticMarkup)(Object(a.jsx)(j,{color:c})));return Object(a.jsxs)("div",{className:"container--ocean",style:{transform:"rotate(".concat(s,"deg)")},children:[t&&Object(a.jsx)("div",{className:"wave",style:{backgroundImage:'url("data:image/svg+xml;utf8,'.concat(i,'")')}}),c&&Object(a.jsx)("div",{className:"wave",style:{backgroundImage:'url("data:image/svg+xml;utf8,'.concat(n,'")')}})]})}),b=(c(74),function(){var e=Object(o.a)("home").t;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(m,{colorFirstWave:"#051047",direction:"0"}),Object(a.jsxs)("div",{className:"container--footer",children:[Object(a.jsxs)("div",{className:"row row--footer",children:[Object(a.jsxs)("div",{className:"col-12 col-md-6 col-xl-4 col--footer",children:[Object(a.jsx)("img",{src:l,alt:"clearsight-logo",className:"footer-logo"}),Object(a.jsx)("p",{className:"footer--description",children:e("footer-description")}),Object(a.jsxs)("div",{className:"container-social-media",children:[Object(a.jsx)("a",{href:"https://www.facebook.com/clearsight.finance",target:"_blank",rel:"noreferrer",className:"fa fa-facebook round"}),Object(a.jsx)("a",{className:"fa fa-twitter round"}),Object(a.jsx)("a",{href:"https://t.me/clearsightfinance",target:"_blank",className:"fa fa-telegram round"})]})]}),Object(a.jsxs)("div",{className:"col-6 col-md-6 col-xl-2 footer--menu",children:[Object(a.jsx)("h1",{className:"foooter--menu--title",children:e("link-title")}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"/home",children:e("home")})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"/wallet",children:e("wallet")})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"/platform",children:e("platform")})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"/debit-card",children:e("debitcard")})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"/information",children:e("information")})})]})]}),Object(a.jsxs)("div",{className:"col-6 col-md-6 col-xl-2 footer--menu",children:[Object(a.jsx)("h1",{className:"foooter--menu--title",children:e("footer-menu-title-inf")}),Object(a.jsx)("ul",{children:Object(a.jsxs)("li",{children:[Object(a.jsx)("i",{className:"fa fa-file-text-o","aria-hidden":"true"}),Object(a.jsx)("a",{href:"https://drive.google.com/file/d/1IA27S3gRBxBktVMCak-AApbhMGiAJm2s/view?usp=sharing",target:"_blank",rel:"noreferrer",children:e("whitepaper")})]})})]}),Object(a.jsxs)("div",{className:"col-12 col-md-6 col-xl-4 footer--menu",children:[Object(a.jsx)("h1",{className:"foooter--menu--title",children:e("footer-menu-title-cont")}),Object(a.jsx)("ul",{children:Object(a.jsxs)("li",{children:[Object(a.jsx)("i",{className:"fa fa-envelope-o","aria-hidden":"true"}),Object(a.jsx)("a",{href:"mailto: admin@clearsight.finance",children:e("mail")})]})})]})]}),Object(a.jsxs)("div",{className:"row row--footer row--footer--terms",children:[Object(a.jsx)("div",{className:"col-md-12 col-lg-6 col--footer--copy-right",children:Object(a.jsx)("p",{className:"copy-right",children:e("copy-right")})}),Object(a.jsx)("div",{className:"col-md-12 col-lg-6 col--footer--terms-cond",children:Object(a.jsx)("p",{className:"terms-cond",children:Object(a.jsx)("a",{href:"https://www.iubenda.com/terms-and-conditions/49402867",target:"_blank",rel:"noreferrer",children:e("terms-conditions")})})})]})]})]})}),h=(c(81),function(e){var t=e.img,c=e.children,s=e.component,i=["col-md-12","col-lg-6","jumbotrom-header",!0===e.sideComponent&&"left-side"];return Object(a.jsxs)("div",{className:"jumbotrom-component row",children:[Object(a.jsxs)("div",{className:i.join(" "),children:[t&&Object(a.jsx)("img",{className:"jumbotrom-image",src:t,alt:"jumbotrom"}),s&&s]}),Object(a.jsx)("div",{className:"col-md-12 col-lg-6 platform-body",children:c})]})}),x=c.p+"static/media/iStock-1008450996.52375834.svg",O=c.p+"static/media/card-img-2.6e1bf215.svg",u=c.p+"static/media/iStock-1084096262.8836ac9c.svg",f=(c(82),function(){var e=Object(o.a)("platform").t;return Object(a.jsxs)("div",{className:"row container--card",children:[Object(a.jsxs)("div",{className:"col-sm-12 col-md-6 col-xl-4 card--content",children:[Object(a.jsx)("div",{className:"card--header",children:Object(a.jsx)("img",{className:"card--image",src:x,alt:"first_image"})}),Object(a.jsxs)("div",{className:"card--body",children:[Object(a.jsx)("h1",{className:"card--title",children:e("card-platform-title-first")}),Object(a.jsx)("p",{className:"card--text",children:e("card-platform-description-first")})]})]}),Object(a.jsxs)("div",{className:"col-sm-12 col-md-6 col-xl-4 card--content",children:[Object(a.jsx)("div",{className:"card--header",children:Object(a.jsx)("img",{className:"card--image",src:O,alt:"second_image"})}),Object(a.jsxs)("div",{className:"card--body",children:[Object(a.jsx)("h1",{className:"card--title",children:e("card-platform-title-second")}),Object(a.jsx)("p",{className:"card--text",children:e("card-platform-description-second")})]})]}),Object(a.jsxs)("div",{className:"col-sm-12 col-md-6 col-xl-4 card--content",children:[Object(a.jsx)("div",{className:"card--header",children:Object(a.jsx)("img",{className:"card--image",src:u,alt:"third_image"})}),Object(a.jsxs)("div",{className:"card--body",children:[Object(a.jsx)("h1",{className:"card--title",children:e("card-platform-title-third")}),Object(a.jsx)("p",{className:"card--text",children:e("card-platform-description-third")})]})]})]})}),g=c(32),p=c(83),v=function(e){localStorage.setItem("language",e.toLowerCase())},N=(c(84),function(){var e=Object(s.useState)("GB"),t=Object(n.a)(e,2),c=t[0],i=t[1],r=Object(o.a)().i18n;Object(s.useEffect)((function(){null===localStorage.getItem("language")&&(console.log(c),v(c));var e=(localStorage.getItem("language")||"GB").toLocaleUpperCase();e&&(r.changeLanguage(e),i(e))}),[r]);return Object(a.jsx)("div",{className:"select-language-component",children:Object(a.jsx)(p.a,{countries:["GB","DE","IT","RU","FR","ES"],customLabels:{GB:"EN",FR:"FR",DE:"DE",IT:"IT",ES:"ES",RU:"RU",CN:"CN",AE:"AE"},selected:c,showSelectedLabel:!0,onSelect:function(e){return function(e){i(e),r.changeLanguage(e),v(e)}(e)}})})}),w=c.p+"static/media/close.772489f2.svg",y=(c(85),function(){var e=Object(o.a)("home").t,t=Object(s.useState)(!1),c=Object(n.a)(t,2),i=c[0],r=c[1],d=Object(s.useState)(!1),j=Object(n.a)(d,2),m=j[0],b=j[1],h=["collapse","navbar-collapse","navbar-collapse-custom",i&&"show"],x=["clearsight-menu-right"],O=function(){if(document.getElementById("public-contianer").style.overflow="hidden",window.innerWidth<=1199){if(!i)return r(!i),document.body.style.overflowY="hidden";document.getElementById("navbarSupportedContent").style.overflowY="hidden",document.body.style.overflowY="scroll",r(!i)}r(!1)};return Object(a.jsx)("section",{className:["container--custom--navbar"].join(" "),id:"container_scroll_y",children:Object(a.jsxs)("nav",{className:["navbar","navbar-expand-xl"].join(" "),id:"scroll_y",children:[Object(a.jsx)("div",{className:"mr-auto",children:Object(a.jsx)("a",{href:"/",className:"navbar-brand clearsight-logo",children:Object(a.jsx)("img",{src:l,className:"logo-mobile",alt:"clearsight"})})}),Object(a.jsx)("button",{className:"navbar-toggler border-0",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":i,"aria-label":"Toggle navigation",onClick:O,children:Object(a.jsxs)("span",{className:["hamburger-icon"].join(" "),title:"Menu",children:[Object(a.jsx)("span",{className:"line line-1"}),Object(a.jsx)("span",{className:"line line-2"}),Object(a.jsx)("span",{className:"line line-3"})]})}),Object(a.jsxs)("div",{className:h.join(" "),id:"navbarSupportedContent",children:[Object(a.jsx)("div",{className:"navbar-toggler-container",children:i&&Object(a.jsx)("img",{className:"navbar-close-button",src:w,alt:"close",onClick:O})}),Object(a.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(a.jsx)("li",{className:x.join(" "),onClick:O,children:Object(a.jsx)(g.a,{to:"/",children:Object(a.jsx)("span",{className:"/"===window.location.pathname?"active":"no-active",children:e("home")})})}),Object(a.jsx)("li",{className:x.join(" "),onClick:O,children:Object(a.jsx)(g.a,{to:"/wallet",children:Object(a.jsx)("span",{className:"/wallet"===window.location.pathname?"active":"no-active",children:e("wallet")})})}),Object(a.jsx)("li",{className:x.join(" "),onClick:O,children:Object(a.jsx)(g.a,{to:"/platform",children:Object(a.jsx)("span",{className:"/platform"===window.location.pathname?"active":"no-active",children:e("platform")})})}),Object(a.jsx)("li",{className:x.join(" "),onClick:O,children:Object(a.jsx)(g.a,{to:"debit-card",children:Object(a.jsx)("span",{className:"/debit-card"===window.location.pathname?"active":"no-active",children:e("debitcard")})})}),Object(a.jsx)("li",{className:x.join(" "),onClick:O,children:Object(a.jsx)(g.a,{to:"/information",children:Object(a.jsx)("span",{className:"/information"===window.location.pathname?"active":"no-active",children:e("information")})})})]}),Object(a.jsx)(N,{}),m&&Object(a.jsx)("div",{className:"nav-overlay",onClick:function(){return b(!1)}})]})]})})}),k=c(86),S=c(159),I=c(160),C=(c(60),function(e){var t,c=e.status,s=e.message,i=e.onValidated,n=Object(o.a)("home").t;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"input-global",children:[Object(a.jsx)("input",{ref:function(e){return t=e},type:"email",placeholder:n("newslater-input"),className:"input-newslatter"}),Object(a.jsx)("button",{className:"btn-newslatter",onClick:function(){return t&&t.value.indexOf("@")>-1&&i({EMAIL:t.value})},children:n("newslater-btn")})]}),Object(a.jsxs)("div",{className:"message-handling",children:["sending"===c&&Object(a.jsx)("div",{style:{color:"blue"},children:"sending..."}),"error"===c&&Object(a.jsx)("div",{style:{color:"red"},dangerouslySetInnerHTML:{__html:s}}),"success"===c&&Object(a.jsx)("div",{style:{color:"green"},dangerouslySetInnerHTML:{__html:s}})]})]})}),T=function(){var e=Object(o.a)("home").t,t=Object(S.a)();return Object(k.a)(t),Object(a.jsxs)("div",{className:"contianer-newslatter",children:[Object(a.jsxs)("div",{className:"newslatter-header",children:[Object(a.jsx)("h3",{className:"title",children:e("newslater-title")}),Object(a.jsx)("h1",{className:"description",children:e("newslater-description")}),Object(a.jsx)("p",{className:"text",children:e("newslater-text")})]}),Object(a.jsx)("div",{className:"newslatter-body",children:Object(a.jsx)(I.a,{url:"https://finance.us6.list-manage.com/subscribe/post?u=98b41a295edb23c0f4a7609f9&amp;id=1a704a895e",render:function(e){var t=e.subscribe,c=e.status,s=e.message;return Object(a.jsx)("div",{children:Object(a.jsx)(C,{status:c,message:s,onValidated:function(e){return t(e)}})})}})})]})},L=c(10),M=c(61),E=c.n(M),_=(c(110),function(e){var t=e.data,c=Object(o.a)("home").t;return Object(a.jsx)("div",{children:t&&Object(a.jsx)("div",{className:"slider",children:Object(a.jsx)(E.a,Object(L.a)(Object(L.a)({},{dots:!0,infinite:!1,speed:300,slidesToShow:5,slidesToScroll:1,initialSlide:0,responsive:[{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:500,settings:{centerMode:!0,centerPadding:"60px",slidesToShow:1,slidesToScroll:1}}]}),{},{children:(t||[]).map((function(e,t){return Object(a.jsx)("div",{className:"flip-card",children:Object(a.jsxs)("div",{className:"flip-card-inner",children:[Object(a.jsx)("div",{className:"flip-card-front",children:Object(a.jsx)("img",{className:"slider-img",src:e.img,alt:"partner-img"})}),Object(a.jsx)("div",{className:"flip-card-back",children:Object(a.jsx)("a",{className:"beacme-partner-btn",href:e.href,target:"_blank",children:Object(a.jsx)("button",{className:"button-megatron-orange",children:c("slider-card-btn")})})})]})},t)}))}))})})}),W=c.p+"static/media/card-with-bg-green.09fa70b7.svg",R=c.p+"static/media/card-with-bg-wallet.b52cdc10.svg",F=c.p+"static/media/card-with-bg-purple.19c704e1.svg",A=(c(111),function(){return Object(a.jsxs)("div",{className:"row container-card-background",children:[Object(a.jsxs)("div",{className:"col-sm-12 col-md-6 col-xl-4 card--container",children:[Object(a.jsx)("img",{src:W,alt:"first-card"}),Object(a.jsxs)("div",{className:"card--content",children:[Object(a.jsx)("p",{className:"card--name",children:"Mark Wood Journal"}),Object(a.jsx)("h4",{className:"card--text",children:"It is a long established fact that a reader will be distracted."})]})]}),Object(a.jsxs)("div",{className:"col-sm-12 col-md-6 col-xl-4 card--container",children:[Object(a.jsx)("img",{src:R,alt:"second-card"}),Object(a.jsxs)("div",{className:"card--content",children:[Object(a.jsx)("p",{className:"card--name",children:"Mark Wood Journal"}),Object(a.jsx)("h4",{className:"card--text",children:"It is a long established fact that a reader will be distracted."})]})]}),Object(a.jsxs)("div",{className:"col-sm-12 col-md-6 col-xl-4 card--container",children:[Object(a.jsx)("img",{src:F,alt:"third-card"}),Object(a.jsxs)("div",{className:"card--content",children:[Object(a.jsx)("p",{className:"card--name",children:"Mark Wood Journal"}),Object(a.jsx)("h4",{className:"card--text",children:"It is a long established fact that a reader will be distracted."})]})]})]})}),B=c.p+"static/media/hr.fd0428a2.svg",G=c.p+"static/media/credit-card-get-started.dfea0d98.svg",J=c.p+"static/media/application-download.5a66c5dc.svg",V=c.p+"static/media/arrow-icon.4a2de3ea.svg",U=c.p+"static/media/arrow-icon-down.c6a12172.svg",H=c.p+"static/media/icon-left-down.390d7ed6.svg",Y=c.p+"static/media/icon-right-down.79582220.svg",D=(c(112),function(e){var t=e.firstCard,c=void 0===t?[]:t,s=e.secondCard,i=void 0===s?[]:s,n=e.thirdCard,r=void 0===n?[]:n,l=e.icon,d=e.id,j=Object(o.a)("wallet").t;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(m,{colorFirstWave:"#f5f9ff",direction:"0"}),Object(a.jsxs)("div",{className:"get-started",id:d,children:[Object(a.jsxs)("div",{className:"gs-section",id:"get-started",children:[Object(a.jsx)("h1",{className:"gs-section-title",children:"CLEARSIGHT"}),Object(a.jsx)("p",{className:"gs-section-description",children:j("gs-section-description")})]}),Object(a.jsxs)("div",{className:"row get-started-contianer",children:[Object(a.jsxs)("div",{className:"col-sm-12 col-md-6 col-xl-3 card-gs",children:[Object(a.jsxs)("div",{className:"card-gs-header",children:[Object(a.jsx)("img",{src:J,className:"icon",alt:"first-icon"}),Object(a.jsx)("h1",{className:"card-badge",children:"01"})]}),(c||[]).map((function(e,t){return Object(a.jsxs)("div",{className:"card-gs-body",children:[Object(a.jsx)("h1",{className:"title",children:e.title}),Object(a.jsx)("p",{className:"description",children:e.description})]},t)}))]}),Object(a.jsxs)("div",{className:"col-xl-1 first-arrow ",children:[Object(a.jsx)("img",{src:V,alt:"icon-arrow",className:"arrow-up"}),Object(a.jsx)("img",{src:Y,alt:"arrow-right",className:"arrow-right"})]}),Object(a.jsxs)("div",{className:"col-sm-12 col-md-6 col-xl-3 card-gs",children:[Object(a.jsxs)("div",{className:"card-gs-header",children:[Object(a.jsx)("img",{src:G,className:"icon",alt:"second-icon"}),Object(a.jsx)("h1",{className:"card-badge",children:"02"})]}),i.map((function(e,t){return Object(a.jsxs)("div",{className:"card-gs-body",children:[Object(a.jsx)("h1",{className:"title",children:e.title}),Object(a.jsx)("p",{className:"description",children:e.description})]},t)}))]}),Object(a.jsxs)("div",{className:"col-xl-1 second-arrow",children:[Object(a.jsx)("img",{src:U,alt:"",className:"arrow-down"}),Object(a.jsx)("img",{src:H,alt:"",className:"arrow-left"})]}),Object(a.jsxs)("div",{className:"col-sm-12 col-md-6 col-xl-3 card-gs",children:[Object(a.jsxs)("div",{className:"card-gs-header",children:[l?Object(a.jsx)("img",{src:l,className:"icon",alt:"third-icon"}):Object(a.jsx)("img",{src:B,className:"icon",alt:"third-icon"}),Object(a.jsx)("h1",{className:"card-badge",children:"03"})]}),(r||[]).map((function(e,t){return Object(a.jsxs)("div",{className:"card-gs-body",children:[Object(a.jsx)("h1",{className:"title",children:e.title}),Object(a.jsx)("p",{className:"description",children:e.description})]},t)}))]})]})]}),Object(a.jsx)(m,{colorFirstWave:"#f5f9ff",direction:"180"})]})}),X=c.p+"static/media/list-item-icon.a897e815.svg",Z=(c(113),function(e){var t=e.data;return Object(a.jsx)("div",{className:"container-list-item",children:(t||[]).map((function(e,t){return Object(a.jsxs)("div",{className:"list-item",children:[Object(a.jsx)("img",{src:X,className:"icon-list-item",alt:"icon"}),Object(a.jsxs)("span",{className:"list-item-title",children:[" ",e.title," "]})]},t)}))})}),z=(c(114),function(e){var t=e.title,c=e.description,r=e.number,l=Object(s.useState)(""),o=Object(n.a)(l,2),d=o[0],j=o[1];return Object(a.jsxs)("div",{className:"container--collapse",children:[Object(a.jsxs)("h1",{className:"collapse--title",onClick:function(){j(""===d?"active":"")},children:[Object(a.jsx)("span",{className:"collapse--number",children:r})," ",t,Object(a.jsx)(i,{direction:"active"===d?"up":"down"})]}),Object(a.jsx)("p",{className:"collapse--description accordion ".concat(d),children:c})]})}),P=(c(58),function(e){var t=e.data,c=e.img;return Object(a.jsx)("div",{className:"container-tab-body",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-sm-12 col-md-6",children:Object(a.jsx)("img",{className:"image-tab-body",src:c,alt:"tab-icon"})}),Object(a.jsx)("div",{className:"col-sm-12 col-md-6 container-tab-body",children:Object(a.jsx)("div",{className:"row",children:t.map((function(e,t){return Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("p",{className:"option-text-body",children:e.job})},t)}))})})]})})}),q=c.p+"static/media/testimonials-icon.4bf2e837.svg",K=(c(116),function(e){var t=e.name,c=e.profession,s=e.text,i=e.img;return Object(a.jsxs)("div",{className:"container-testimonials",children:[Object(a.jsx)("img",{src:q,alt:"testimonail"}),Object(a.jsx)("p",{className:"testimonials-text",children:s}),Object(a.jsxs)("div",{className:"testimonials-person",children:[Object(a.jsx)("img",{src:i,alt:"testimonail"}),Object(a.jsx)("h2",{className:"person-name",children:t}),Object(a.jsx)("h5",{className:"person-profession",children:c})]})]})}),Q=c.p+"static/media/testimonialImg.f6578203.svg",$=(c(117),function(){var e=[{name:"Victoria Wade",profession:"Manager",text:"It is a established that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",img:Q},{name:"Victoria Wade",profession:"Manager",text:"It is a established that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",img:Q},{name:"Victoria Wade",profession:"Manager",text:"It is a established that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",img:Q},{name:"Victoria Wade",profession:"Manager",text:"It is a established that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",img:Q},{name:"Victoria Wade",profession:"Manager",text:"It is a established that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",img:Q}];return Object(a.jsx)("div",{className:"slider-testimonials",children:Object(a.jsx)(E.a,Object(L.a)(Object(L.a)({},{dots:!0,infinite:!1,speed:300,slidesToShow:3,slidesToScroll:3,responsive:[{breakpoint:1100,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:755,settings:{slidesToShow:1,slidesToScroll:1}}]}),{},{children:(e||[]).map((function(e,t){return Object(a.jsx)(K,{name:e.name,profession:e.profession,text:e.text,img:e.img},t)}))}))})});c(19)},51:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));var s=c(50),a=(c(67),c(68),c(47)),i=(c(118),c(4)),n=function(e){var t=e.children;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(s.a,{children:[Object(i.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-SC3JZRM40X"}),Object(i.jsx)("script",{dangerouslySetInnerHTML:{__html:"\n              window.dataLayer = window.dataLayer || [];\n              function gtag(){dataLayer.push(arguments);}\n              gtag('js', new Date());\n              gtag('config', 'G-SC3JZRM40X');\n              "}})]}),"AE"===localStorage.getItem("language")?Object(i.jsxs)("div",{id:"public-contianer",dir:"rtl",children:[Object(i.jsx)(a.j,{}),t,Object(i.jsx)(a.a,{})]}):Object(i.jsxs)("div",{id:"public-contianer",children:[Object(i.jsx)(a.j,{}),t,Object(i.jsx)(a.a,{})]})]})}},58:function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));c(0);var s=c.p+"static/media/arrow-platform-icon.edc9d3a1.svg",a=(c(115),c(4)),i=function(e){var t=e.listOfJobs;return Object(a.jsxs)("div",{className:" row item-conatiner",children:[Object(a.jsx)("div",{className:"col-md-3 item-list-top",children:t.slice(0,7).map((function(e,t){return Object(a.jsxs)("p",{className:"title-items",children:[Object(a.jsx)("img",{className:"list-img",src:s,alt:"proffesion"})," ",e.job]},t)}))}),Object(a.jsx)("div",{className:"col-md-3  item-list",children:t.slice(7,14).map((function(e,t){return Object(a.jsxs)("p",{className:"title-items",children:[Object(a.jsx)("img",{className:"list-img",src:s,alt:"proffesion"})," ",e.job]},t)}))}),Object(a.jsx)("div",{className:"col-md-3  item-list",children:t.slice(14,21).map((function(e,t){return Object(a.jsxs)("p",{className:"title-items",children:[Object(a.jsx)("img",{className:"list-img",src:s,alt:"proffesion"})," ",e.job]},t)}))}),Object(a.jsx)("div",{className:"col-md-3  item-list-bottom",children:t.slice(21,28).map((function(e,t){return Object(a.jsxs)("p",{className:"title-items",children:[Object(a.jsx)("img",{className:"list-img",src:s,alt:"proffesion"})," ",e.job]},t)}))})]})}},60:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){}}]);
//# sourceMappingURL=1.2ae49a5f.chunk.js.map