(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[3],{127:function(e,t,a){e.exports={ContactsParallax:"contacts_ContactsParallax__3yia5 skills_Parallax__3Y2oN",ContactsContainer:"contacts_ContactsContainer__2DUm0 index_container__1siTI"}},131:function(e,t,a){e.exports={Form:"form_Form__3AJRZ",InputWrap:"form_InputWrap__TczbS",Label:"form_Label__3v4Ea",Input:"form_Input__2jfGr",Textarea:"form_Textarea__1WSFu",FormButtons:"form_FormButtons__3MoRa",ErrorMsg:"form_ErrorMsg__1O9Jp"}},132:function(e,t,a){e.exports={Messengers:"messengers_Messengers__105Uv",MsgItem:"messengers_MsgItem__Argsj",Link:"messengers_Link__3KnOf",MsglLogo:"messengers_MsglLogo__M853w",MsgText:"messengers_MsgText__EjvOU"}},316:function(e,t,a){"use strict";a.r(t);var s=a(1),i=(a(0),a(60)),r=a(127),n=a.n(r),o=a.p+"static/media/view.7cb8a66a.jpg",c=a(4),l=a(314),d=a(25),u=a(131),p=a.n(u),m=function(e){var t=e.message;return Object(s.jsx)("div",{className:p.a.ErrorMsg,children:t})},h=function(){var e=Object(l.a)({initialValues:{name:"",email:"",phone:"",message:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Email is required",e.name?e.name.length>40&&(t.name="Name must be less than 30 characters"):t.name="The name is required",e.message.length>300&&(t.message="Please, not more than 300 characters"),e.phone?/^(\+|\d)[0-9]{7,16}$/i.test(e.phone)||(t.phone="Seems this is the wrong phone number."):t.phone="The phone number is required",t},onSubmit:function(t){alert(JSON.stringify(t)),e.resetForm()}});return Object(s.jsxs)("form",{onSubmit:e.handleSubmit,className:p.a.Form,children:[Object(s.jsxs)("div",{className:p.a.InputWrap,children:[Object(s.jsx)("label",{htmlFor:"name",className:p.a.Label,children:"Name"}),Object(s.jsx)("input",Object(c.a)(Object(c.a)({type:"text",placeholder:"type your name",className:p.a.Input},e.getFieldProps("name")),{},{onBlur:e.handleBlur})),e.errors.name&&e.touched.name?Object(s.jsx)(m,{message:e.errors.name}):null]}),Object(s.jsxs)("div",{className:p.a.InputWrap,children:[Object(s.jsx)("label",{htmlFor:"email",className:p.a.Label,children:"Email"}),Object(s.jsx)("input",Object(c.a)(Object(c.a)({type:"email",placeholder:"type your email"},e.getFieldProps("email")),{},{className:p.a.Input,onBlur:e.handleBlur})),e.errors.email&&e.touched.email?Object(s.jsx)(m,{message:e.errors.email}):null]}),Object(s.jsxs)("div",{className:p.a.InputWrap,children:[Object(s.jsx)("label",{htmlFor:"phone",className:p.a.Label,children:"Phone"}),Object(s.jsx)("input",Object(c.a)(Object(c.a)({type:"tel",placeholder:"type your phone"},e.getFieldProps("phone")),{},{className:p.a.Input,onBlur:e.handleBlur})),e.errors.phone&&e.touched.phone?Object(s.jsx)(m,{message:e.errors.phone}):null]}),Object(s.jsxs)("div",{className:p.a.InputWrap,children:[Object(s.jsx)("label",{htmlFor:"message",className:p.a.Label,children:"Message"}),Object(s.jsx)("textarea",Object(c.a)(Object(c.a)({placeholder:"type your message"},e.getFieldProps("message")),{},{className:p.a.Textarea,onBlur:e.handleBlur})),e.errors.message&&e.touched.message?Object(s.jsx)(m,{message:e.errors.message}):null]}),Object(s.jsxs)("div",{className:p.a.FormButtons,children:[Object(s.jsx)(d.a,{name:"Send",iconCode:"\ud83d\udcec",to:"/contacts",type:"submit",onClick:e.handleSubmit}),Object(s.jsx)(d.a,{name:"Clear",iconCode:"\ud83d\udeae",to:"/contacts",type:"clear",onClick:e.resetForm})]})]})},g=a(58),b=a(132),v=a.n(b),f=a(99),j=function(){var e=[{name:"phone",src:Object(f.getImageUrl)(0,"icons"),label:"+371 26273354"},{name:"skype",src:Object(f.getImageUrl)(1,"icons"),label:"Vlad P"},{name:"telegram",src:Object(f.getImageUrl)(2,"icons"),label:"@VladimirPl371"},{name:"whatsapp",src:Object(f.getImageUrl)(3,"icons"),label:"371 26273354"}].map((function(e){var t;switch(e.name){case"phone":t="tel:+37126273354";break;case"skype":t="skype:Vlad P";break;case"telegram":t="tg://resolve?domain=@VladimirPl371";break;case"watsaspp":t="https://wa.me/37126273354";break;default:t="tel:+37126273354"}return Object(s.jsx)("li",{className:v.a.MsgItem,children:Object(s.jsxs)("a",{href:t,className:v.a.Link,children:[Object(s.jsx)("img",{src:e.src,alt:e.label,className:v.a.MsglLogo}),Object(s.jsx)("div",{className:v.a.MsgText,children:e.label})]})},e.label)}));return Object(s.jsx)("ul",{className:v.a.Messengers,children:e})};t.default=function(){return Object(s.jsx)("section",{style:{background:"black"},children:Object(s.jsx)(i.Parallax,{bgImage:o,strength:300,className:n.a.ContactsParallax,children:Object(s.jsxs)("div",{className:n.a.ContactsContainer,children:[Object(s.jsx)(g.a,{label:"Call me",type:"small"}),Object(s.jsx)(h,{}),Object(s.jsx)(j,{})]})})})}},58:function(e,t,a){"use strict";var s=a(1),i=(a(0),a(61)),r=a.n(i);t.a=function(e){var t=e.label,a=e.type,i=a&&"small"===a&&r.a.TitleSmall;return Object(s.jsx)("h1",{className:r.a.Title+" "+i,children:t})}},61:function(e,t,a){e.exports={Title:"title_Title__1Dseg",TitleSmall:"title_TitleSmall__3Luk5"}},65:function(e,t,a){e.exports={WorksParallax:"works_WorksParallax__w71eZ skills_Parallax__3Y2oN",worksContainer:"works_worksContainer__2S_3_ index_container__1siTI",WorksList:"works_WorksList__2n_or"}},66:function(e,t,a){e.exports={worksItem:"worksItem_worksItem__1Lsbl",Image:"worksItem_Image__3vaJA",Description:"worksItem_Description__d1Ai4",More:"worksItem_More__20Wda",ItemOverlay:"worksItem_ItemOverlay__2g97m",Follow:"worksItem_Follow__2GzVX",Web:"worksItem_Web__2Gftm",Git:"worksItem_Git__3L7c-",ButtonsWorks:"worksItem_ButtonsWorks__2-lUv",active:"worksItem_active__1b9Jo"}},67:function(e,t,a){var s={"./a.jpg":68,"./b.jpg":69,"./c.jpg":70,"./d.jpg":71,"./e.jpg":72,"./f.jpg":73,"./l.jpg":74,"./nine.jpg":75,"./seven.jpg":76};function i(e){var t=r(e);return a(t)}function r(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}i.keys=function(){return Object.keys(s)},i.resolve=r,e.exports=i,i.id=67},68:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/a.f5e87b46.jpg"},69:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/b.00d8a6b9.jpg"},70:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/c.8d700d43.jpg"},71:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/d.ba3fee9a.jpg"},72:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/e.1e6d01b2.jpg"},73:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/f.0e94192d.jpg"},74:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/l.fe4da0c6.jpg"},75:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/nine.175feab6.jpg"},76:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/seven.d4db0e0b.jpg"},77:function(e,t,a){var s={"./css3.svg":78,"./git.svg":79,"./gulp.svg":80,"./html.svg":81,"./js.svg":82,"./react.svg":83,"./redux.svg":84,"./rest.svg":85,"./storybook.svg":86,"./ts.svg":87,"./ui.svg":88,"./webpack.svg":89};function i(e){var t=r(e);return a(t)}function r(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}i.keys=function(){return Object.keys(s)},i.resolve=r,e.exports=i,i.id=77},78:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/css3.03593a30.svg"},79:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/git.070c273d.svg"},80:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/gulp.cfb27e23.svg"},81:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/html.8e6f4441.svg"},82:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/js.51deab1a.svg"},83:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/react.a9f55469.svg"},84:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/redux.bf625bf5.svg"},85:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/rest.4826dec9.svg"},86:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/storybook.00b32ce9.svg"},87:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/ts.af3cdc6e.svg"},88:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/ui.f67c49f4.svg"},89:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/webpack.260ecda0.svg"},90:function(e,t,a){var s={"./phone.svg":91,"./skype.svg":92,"./telegram.svg":93,"./whatsapp.svg":94};function i(e){var t=r(e);return a(t)}function r(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}i.keys=function(){return Object.keys(s)},i.resolve=r,e.exports=i,i.id=90},91:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/phone.e9fb30c8.svg"},92:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/skype.795ecbc0.svg"},93:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/telegram.4d20f74e.svg"},94:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/whatsapp.73e0b962.svg"},99:function(e,t,a){"use strict";a.r(t),a.d(t,"getImageUrl",(function(){return b}));var s=a(1),i=a(0),r=a(60),n=a(12),o=a(17),c=a(58),l=a(65),d=a.n(l),u=a.p+"static/media/night4.3a3a434e.jpg",p=a(25),m=a(66),h=a.n(m),g=function(e){var t=e.src,a=e.webUrl,i=e.gitUrl,r=e.description,c=e.active,l=e.id,d=Object(n.b)(),u=r.slice(0,140),m=r.slice(140),g=c?m:" ... ",b=c?"Less":"More",v=c&&h.a.active,f=Object(s.jsx)("span",{className:h.a.More,onClick:function(){return t=l,"More"===(e=b)&&d(Object(o.d)(t,!0)),void("Less"===e&&d(Object(o.d)(t,!1)));var e,t},children:b});return Object(s.jsxs)("div",{className:h.a.worksItem,children:[Object(s.jsx)("img",{src:t,alt:"page preview",className:h.a.Image}),Object(s.jsxs)("div",{className:h.a.Description+" "+v,children:["".concat(u).concat(g),f]}),Object(s.jsxs)("div",{className:h.a.ItemOverlay,children:[Object(s.jsxs)("div",{className:h.a.ButtonsWorks,children:[Object(s.jsx)(p.a,{name:"url",to:a,iconCode:"\ud83d\udd17 ",type:"url"}),Object(s.jsx)(p.a,{name:"code",to:i,iconCode:"\ud83d\udcbb",type:"git"})]}),Object(s.jsxs)("div",{className:h.a.Follow,children:[Object(s.jsx)("h4",{className:h.a.Web,children:'Click "URL" to see the app'}),Object(s.jsx)("h5",{className:h.a.Git,children:'Click "CODE" to see github'}),Object(s.jsx)("h5",{className:h.a.Git,children:'Or "More" to see additional info'})]})]})]})};var b=function(e,t){var s,i;return"photos"===t&&(s=a(67)),"img"===t&&(s=a(77)),"icons"===t&&(s=a(90)),(i=s).keys().map(i)[e].default};t.default=function(){var e=[{id:1,src:b(0,"photos"),description:"Organizer. You can handle your tasks as you want. Add, delete tasks and task lists, change names, statuses, sort tasks and so on. The app is fully synchronized with back-and. Following technologies were used: React(hooks), Redux(Redux toolkit), Type script, Material UI, REST api, Thunks, Unit tests(other branch)",active:!1,webUrl:"https://VovanVovanic.github.io/organizer",gitUrl:"https://github.com/VovanVovanic/organizer"},{id:2,src:b(1,"photos"),description:"An app provides visual info about Star wars Universe. You can switch between ships, characters and planets, find out tne information and photo(if provided by server)of specific item. The App was created with React(hooks), Redux, REST api(Thunks), Typescript, Bootstrap",active:!1,webUrl:"https://VovanVovanic.github.io/starwars-database",gitUrl:"https://github.com/VovanVovanic/starwars-database"},{id:3,src:b(2,"photos"),description:"This is the social network. The app development still in progress, however it's already synchronized with server and provides loginization, registration, follow/unfollow users, adding messages. Live chat and some other features will be done at the nearest time. The app is build with React(hooks and class components), Redux, Typescript, Redux Thunks, Ant Design",active:!1,webUrl:"https://VovanVovanic.github.io/typeScriptReactSocialNet",gitUrl:"https://github.com/VovanVovanic/typeScriptReactSocialNet"},{id:4,src:b(3,"photos"),description:"A quiz app. You can add quizzes, answer questions, and see your progress. Synchronized with back end(Firebase). Created with React(class components) Redux, Thunks, SCSS",active:!1,webUrl:"https://VovanVovanic.github.io/react-quiz-list-learning",gitUrl:"https://github.com/VovanVovanic/react-quiz-list-learning"},{id:5,src:b(4,"photos"),description:"Another qiuz project. Still in progress. You can create, delete, change learning cards and cards pack, follow yours and other people progress. The app is creating with React(hooks), Redux, Thunks, Type script, Material UI, SCSS",active:!1,webUrl:"https://VovanVovanic.github.io/teamProject",gitUrl:"https://github.com/VovanVovanic/teamProject"},{id:6,src:b(5,"photos"),description:"TODO. Classic app for all developers \ud83d\ude0a Just a beginning of my react learning. Made only with React class components and Bootstrap",active:!1,webUrl:"https://VovanVovanic.github.io/todo",gitUrl:"https://github.com/VovanVovanic/todo"},{id:7,src:b(6,"photos"),description:"Just an example of landing page. Fake burger shop landing page with slider, accordions, smooth scroll. Created with HTML5, SCSS, Vanilla JS. Build with Gulp",active:!1,webUrl:"https://vovanvovanic.github.io/burgerLanding/dist/index.html",gitUrl:"https://github.com/VovanVovanic/burgerLanding"},{id:8,src:b(7,"photos"),description:"Another example of landing page. Fake pulsometer shop with small animation, slider, tabs, modals, smooth scroll. Made with HTML5, SCSS, Vanilla js, Font awesome. Build with Gulp",active:!1,webUrl:"https://vovanvovanic.github.io/pulseLanding/dist/index.html",gitUrl:"https://github.com/VovanVovanic/pulseLanding"},{id:9,src:b(8,"photos"),description:"And one more landing example. Fake diet food provider's shop. Has a modal, slider, daily kkal calculation, timer for the end of the offer. Made with Vanilla JS, HTML5, SCSS. Build with Gulp",active:!1,webUrl:"https://vovanvovanic.github.io/foodDietLandingPureJs/dist/index.html",gitUrl:"https://github.com/VovanVovanic/foodDietLandingPureJs"}],t=Object(n.b)();Object(i.useEffect)((function(){t(Object(o.c)(e))}),[]);var a=Object(n.c)((function(e){return e.works.works})).map((function(e){var t=e.src,a=e.webUrl,i=e.gitUrl,r=e.description,n=e.active,o=e.id;return Object(s.jsx)(g,{src:t,webUrl:a,gitUrl:i,id:o,description:r,active:n},t)}));return Object(s.jsx)("section",{style:{background:"black"},children:Object(s.jsx)(r.Parallax,{bgImage:u,strength:300,className:d.a.WorksParallax,children:Object(s.jsxs)("div",{className:d.a.worksContainer,children:[Object(s.jsx)(c.a,{label:"Thats what I can do for you",type:"small"}),Object(s.jsx)("div",{className:d.a.WorksList,children:a})]})})})}}}]);
//# sourceMappingURL=3.fdc4968e.chunk.js.map