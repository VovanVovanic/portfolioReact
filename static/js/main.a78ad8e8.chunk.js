(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{16:function(e,t,n){e.exports={Button:"button_Button__I6Dma",url:"button_url__3b1DW",git:"button_git__e-CxZ",submit:"button_submit__3ATo-",clear:"button_clear__2zbtq",activeBtn:"button_activeBtn__u_yVL"}},17:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"d",(function(){return r})),n.d(t,"c",(function(){return i}));var a="WATCH_DESCRIPTION",c="LOAD_WORKS",r=function(e,t){return{type:a,id:e,active:t}},i=function(e){return{type:c,works:e}}},20:function(e,t,n){e.exports={Main:"main_Main__G4nno",noScroll:"main_noScroll__2fiy0"}},24:function(e,t,n){e.exports={navList:"navBar_navList__3X56V",active:"navBar_active__2qNV3"}},25:function(e,t,n){"use strict";var a=n(1),c=(n(0),n(16)),r=n.n(c),i=n(11);t.a=function(e){var t=e.name,n=e.active,c=e.to,o=e.iconCode,s=e.type,u=e.onClick,l=[r.a.Button];s&&l.push(r.a[s]),n&&l.push(r.a.activeBtn);var b=s&&"clear"!==s&&"submit"!==s?Object(a.jsx)("a",{target:"_blank",href:c,"data-front":t,"data-back":o}):Object(a.jsx)(i.b,{to:c,"data-front":t,"data-back":o});return Object(a.jsx)("div",{className:l.join(" "),onClick:function(){u&&u()},children:b})}},27:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return s}));var a=n(3),c="FORM_ERROR",r="FORM_SENDING",i="FORM_SUCCESS",o={success:!1,error:!1,sending:!1},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return Object(a.a)(Object(a.a)({},e),{},{success:t.success});case c:return Object(a.a)(Object(a.a)({},e),{},{error:t.error});case r:return Object(a.a)(Object(a.a)({},e),{},{sending:t.sending});default:return e}}},38:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),r=n.n(c),i=n(15),o=n.n(i),s=(n(38),n(31)),u=n(20),l=n.n(u),b=n(4),j=n(9),d=n.n(j),O=n(13),v="NAVIGATE_TO",f=function(e){return{type:v,name:e}},h=n(25),m=n(24),_=n.n(m),x=function(e){var t=e.isOpen,n=e.onMenuClose,r=Object(O.c)((function(e){return e.nav.navLinks})),i=Object(O.b)(),o=Object(b.e)().pathname.slice(1),s=""!==o?o:"home";Object(c.useEffect)((function(){i(f(s))}),[]);var u=r.map((function(e){var t=e.name,c=e.active,r=e.to,o=e.iconCode;return Object(a.jsx)("li",{children:Object(a.jsx)(h.a,{name:t,active:c,to:r,iconCode:o,onClick:function(){return function(e){i(f(e)),n&&n()}(t)}})},t)})),l=t&&_.a.active;return Object(a.jsx)("ul",{className:_.a.navList+" "+l,children:u})},p=function(e){var t=e.isMenuOpen,n=e.onMenuHandler,c=t&&d.a.active;return Object(a.jsx)("header",{className:d.a.header,children:Object(a.jsxs)("div",{className:d.a.headerContainer,children:[Object(a.jsxs)("div",{className:d.a.headerContacts,children:[Object(a.jsx)("h4",{style:{textAlign:"left"},children:"Tel: +371 26273354"}),Object(a.jsx)("h4",{style:{textAlign:"left"},children:"Email: vladimirplotnikov371@gmail.com"})]}),Object(a.jsx)(x,{isOpen:t,onMenuClose:function(){n(!1)}}),Object(a.jsxs)("div",{className:d.a.Hamburger+" "+c,onClick:function(){n(!t)},children:[Object(a.jsx)("span",{className:d.a.HamburgerItem}),Object(a.jsx)("span",{className:d.a.HamburgerItem}),Object(a.jsx)("span",{className:d.a.HamburgerItem})]})]})})},g=r.a.lazy((function(){return Promise.all([n.e(7),n.e(3)]).then(n.bind(null,345))})),k=r.a.lazy((function(){return Promise.all([n.e(8),n.e(4)]).then(n.bind(null,346))})),C=r.a.lazy((function(){return n.e(6).then(n.bind(null,102))})),w=r.a.lazy((function(){return Promise.all([n.e(2),n.e(9)]).then(n.bind(null,347))}));var y=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],r=t[1],i=n&&l.a.noScroll;return Object(a.jsxs)("main",{className:l.a.Main+" "+i,children:[Object(a.jsx)(p,{isMenuOpen:n,onMenuHandler:function(e){r(e)}}),Object(a.jsxs)(c.Suspense,{fallback:Object(a.jsx)("div",{style:{background:"black",height:"100vh",width:"100vw"},children:"Loading..."}),children:[Object(a.jsx)(b.a,{path:"/",exact:!0,render:function(){return Object(a.jsx)(w,{})}}),Object(a.jsx)(b.a,{path:"/works",render:function(){return Object(a.jsx)(C,{})}}),Object(a.jsx)(b.a,{path:"/skills",render:function(){return Object(a.jsx)(k,{})}}),Object(a.jsx)(b.a,{path:"/contacts",render:function(){return Object(a.jsx)(g,{})}})]})]})},N=function(e){e&&e instanceof Function&&n.e(10).then(n.bind(null,344)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},I=n(12),S=n(27),M=n(3),L={navLinks:[{name:"home",active:!0,to:"/",iconCode:"\ud83c\udfe0"},{name:"skills",active:!1,to:"/skills",iconCode:"\ud83d\udcdd"},{name:"works",active:!1,to:"/works",iconCode:"\ud83d\udcbc"},{name:"contacts",active:!1,to:"/contacts",iconCode:"\u260e\ufe0f"}]},H=n(17),B={works:[]},E=n(30),T=Object(I.c)({nav:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(M.a)(Object(M.a)({},e),{},{navLinks:e.navLinks.map((function(e){return e.name===t.name?Object(M.a)(Object(M.a)({},e),{},{active:!0}):Object(M.a)(Object(M.a)({},e),{},{active:!1})}))});default:return e}},works:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H.b:return Object(M.a)(Object(M.a)({},e),{},{works:t.works});case H.a:return Object(M.a)(Object(M.a)({},e),{},{works:e.works.map((function(e){return e.id===t.id?Object(M.a)(Object(M.a)({},e),{},{active:t.active}):Object(M.a)(Object(M.a)({},e),{},{active:!1})}))});default:return e}},formSend:S.d}),R=Object(I.d)(T,Object(I.a)(E.a));window.store=R;var A=n(11);o.a.render(Object(a.jsx)(O.a,{store:R,children:Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(A.a,{children:Object(a.jsx)(y,{})})})}),document.getElementById("root")),N()},9:function(e,t,n){e.exports={headerContainer:"header_headerContainer__1NbQV index_container__1siTI",headerContacts:"header_headerContacts__3Oq7g",Hamburger:"header_Hamburger__1XVUK",HamburgerItem:"header_HamburgerItem__ExKqu",active:"header_active__3I0jj"}}},[[47,1,5]]]);
//# sourceMappingURL=main.a78ad8e8.chunk.js.map