(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"8k0H":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("9YXZ"),l=a.n(r),c=a("Wbzz"),s=[{path:"/",name:"Accueil"},{path:"/news",name:"Articles"},{path:"/interclub",name:"Interclub"},{path:"/inscription",name:"Inscription"},{path:"/informations",name:"Infos"}],i=a("33Fu"),m=[{icon:o.a.createElement(i.a,null),url:"https://www.facebook.com/Badminton-Club-Chênois-2248006205415750/?_rdc=1&_rdr"}],u=a("ATp1"),d=a.n(u),f=function(){return o.a.createElement("footer",{className:" footer has-text-centered has-background-dark"},o.a.createElement("div",{className:"columns is-mobile"},o.a.createElement("div",{className:"column has-text-left container"},o.a.createElement("ul",{className:l.a.liste},s.map((function(e,t){return o.a.createElement("li",{key:t,className:l.a.footerLinks},o.a.createElement(c.Link,{activeStyle:{color:"#35B0F6"},to:e.path},e.name))})))),o.a.createElement("div",{className:"column container is-hidden-mobile"},o.a.createElement("img",{className:l.a.logo,src:d.a,alt:"bc-chenois-logo"})),o.a.createElement("div",{className:"column has-text-right"},m.map((function(e,t){return o.a.createElement("a",{className:l.a.socialIcons,key:t,href:e.url,target:"_blank",rel:"noopener noreferrer"},e.icon)})),o.a.createElement("br",null),o.a.createElement("span",{className:l.a.contact},"Contact"),o.a.createElement("br",null),o.a.createElement("span",{className:l.a.infoContact},"bcchenois@gmail.com"),o.a.createElement("br",null),o.a.createElement("span",{className:l.a.infoContact},"Badminton Club Chênois Case postale 135 1226 Thônex"))),o.a.createElement("span",{className:l.a.infoContact},"© 2019 BCC - Réalisé par Jonathan Vouilloz"))},h=a("uEY5"),p=a.n(h),E=function(){var e=Object(n.useState)(!1),t=e[0],a=e[1];return o.a.createElement("nav",{className:"has-background-dark"},o.a.createElement("div",{className:p.a.navCenter},o.a.createElement("div",{className:p.a.navHeader},o.a.createElement(c.Link,{fade:!0,to:"./"},o.a.createElement("img",{className:p.a.logoFix,src:d.a,alt:"bc-chenois-logo"})),o.a.createElement("button",{type:"button",className:p.a.logoBtn,onClick:function(){a((function(e){return!e}))}},o.a.createElement(i.b,{className:p.a.logoIcon}))),o.a.createElement("div",null," ",o.a.createElement("ul",{className:t?p.a.navLinks+" "+p.a.showNav:""+p.a.navLinks},s.map((function(e,t){return o.a.createElement("li",{key:t},o.a.createElement(c.Link,{className:p.a.underline,activeStyle:{color:"#35B0F6"},fade:!0,to:e.path},e.name))})))),o.a.createElement("div",{className:p.a.navSocialLinks},m.map((function(e,t){return o.a.createElement("a",{key:t,href:e.url,target:"_blank",rel:"noopener noreferrer"},e.icon)})))))};a("EgAo"),t.a=function(e){var t=e.children;return o.a.createElement("div",{className:"bodyPage"},o.a.createElement(E,null),o.a.createElement("main",{className:"mainColor"},t),o.a.createElement(f,null))}},"9YXZ":function(e,t,a){e.exports={footerLinks:"footer-module--footerLinks--3JDDK",logo:"footer-module--logo--3V8aA",infoContact:"footer-module--infoContact--vK8gi",contact:"footer-module--contact--1fbzF",liste:"footer-module--liste--1tT4o",socialIcons:"footer-module--socialIcons--1YK_f"}},ATp1:function(e,t,a){e.exports=a.p+"static/logo-a56a486f0a5225d5b1b020df62d45f27.png"},EgAo:function(e,t,a){},Lnxd:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("q1tI"),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},r=n.createContext&&n.createContext(o),l=function(){return(l=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var o in t=arguments[a])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&(a[n[o]]=e[n[o]])}return a};function s(e){return function(t){return n.createElement(i,l({attr:l({},e.attr)},t),function e(t){return t&&t.map((function(t,a){return n.createElement(t.tag,l({key:a},t.attr),e(t.child))}))}(e.child))}}function i(e){var t=function(t){var a,o=e.size||t.size||"1em";t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className);var r=e.attr,s=e.title,i=c(e,["attr","title"]);return n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,i,{className:a,style:l({color:e.color||t.color},t.style,e.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==r?n.createElement(r.Consumer,null,(function(e){return t(e)})):t(o)}},dDFO:function(e,t,a){e.exports={buttonText:"_404-module--buttonText--3f9Qq"}},uEY5:function(e,t,a){e.exports={navHeader:"header-module--nav-header--2fNXG",logoBtn:"header-module--logo-btn--1_8Tp",logoIcon:"header-module--logo-icon--1aYNt",logoFix:"header-module--logoFix--1oEaF",navLinks:"header-module--nav-links--1nGC_",showNav:"header-module--show-nav--3MtPX",navSocialLinks:"header-module--nav-social-links--3wTJz",navCenter:"header-module--nav-center--2xx0D"}},w2l6:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),r=a("8k0H"),l=a("6d1X"),c=a("Wbzz"),s=a("9eSz"),i=a.n(s),m=a("dDFO"),u=a.n(m),d=function(){var e=Object(c.useStaticQuery)("2211256271");return o.a.createElement("section",{class:"hero is-fullheight has-background-primary"},o.a.createElement("div",{class:"hero-body columns is-fluid"},o.a.createElement("div",{class:"container column has-text-right"},o.a.createElement("h1",{class:"title is-size-1"},"Salut ! Moi c'est Dora !            "),o.a.createElement(i.a,{className:"is-hidden-tablet is-hidden-desktop",fluid:e.bgHero.childImageSharp.fluid}),o.a.createElement("h2",{class:"subtitle"},"Je vois que tu t'es perdu comme moi.",o.a.createElement("br",null)," Tu peux cliquer sur le bouton juste en dessous pour retrouver ton chemin !"),o.a.createElement(c.Link,{to:"/"},o.a.createElement("button",{className:"button is-dark is-large is-uppercase is-vcentered"},o.a.createElement("span",{className:u.a.buttonText},"Retrouver mon chemin")))),o.a.createElement("div",{className:"column is-hidden-mobile"},o.a.createElement(i.a,{fluid:e.bgHero.childImageSharp.fluid}))))};t.default=function(){return o.a.createElement(r.a,null,o.a.createElement(l.a,{titleD:"404"}),o.a.createElement(d,null))}}}]);
//# sourceMappingURL=component---src-pages-404-js-c4e8343b0015920a0dc1.js.map