(this["webpackJsonpfivething-website"]=this["webpackJsonpfivething-website"]||[]).push([[0],{31:function(e,t,s){},62:function(e,t,s){},63:function(e,t,s){},64:function(e,t,s){"use strict";s.r(t);var c=s(2),l=s(1),n=s.n(l),a=s(20),i=s.n(a),r=(s(31),s(11)),o=s(18),d=s(8),x=s(23),m=s(66),j=function(e){var t=e.menuOpen,s=e.setMenuOpen,n=Object(l.useState)(!1),a=Object(r.a)(n,2),i=a[0],d=a[1];return window.addEventListener("scroll",(function(){window.scrollY>=100?d(!0):d(!1)})),Object(c.jsx)("nav",{className:"w-full fixed top-0 z-50 ".concat(i?"bg-pallete-base":""),children:Object(c.jsxs)("div",{className:"flex items-center justify-between py-2 sm:py-5 mx-2 sm:mx-10 lg:py-10",children:[Object(c.jsx)(o.b,{to:"/",children:Object(c.jsx)("h1",{className:"font-righteous text-4xl",children:"fivething"})}),Object(c.jsx)(m.a,{rounded:!0,toggled:t,toggle:s})]})})},b=s(7),u=s.n(b),h=s(14),f=s.p+"static/media/ContactusBG.b9c2b911.png",p=s(19),O=s(35),g=function(e){var t=e.name,s=e.placeholder,l=e.reg;return Object(c.jsx)("div",{className:"w-full",children:Object(c.jsxs)("label",{className:"flex flex-col",htmlFor:t,children:[Object(c.jsx)("p",{className:"text-sm sm:text-2xl",children:t}),Object(c.jsx)("input",{className:"w-full py-2 bg-transparent border-b-2 border-transparent  focus:outline-none focus:border-pallete-fb8",type:"text",name:t,ref:l,placeholder:s})]})})},v=s(36),N=s.n(v),w=function(){var e=Object(x.useToasts)().addToast,t=Object(O.a)({defaultValues:{Name:"",Subject:"",Email:"",Message:""}}),s=t.register,l=t.handleSubmit,n=function(){var t=Object(h.a)(u.a.mark((function t(s,c){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),"user_X6iCgQFYU7W9bLR33ysHY","template_07lvynw","service_vr59kbj",t.prev=4,t.next=7,N.a.sendForm("service_vr59kbj","template_07lvynw",c.target,"user_X6iCgQFYU7W9bLR33ysHY");case 7:e("Email successfully sent",{appearance:"success",autoDismiss:!0}),c.target.reset(),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(4),e("Email failed to send",{appearance:"error",autoDismiss:!0});case 14:case"end":return t.stop()}}),t,null,[[4,11]])})));return function(e,s){return t.apply(this,arguments)}}(),a=function(){var t=Object(h.a)(u.a.mark((function t(s){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{s.Name&&e(s.Name.message,{appearance:"error",autoDismiss:!0}),s.Subject&&e(s.Subject.message,{appearance:"error",autoDismiss:!0}),s.Message&&e(s.Message.message,{appearance:"error",autoDismiss:!0}),(s.Email||"pattern"===s.Email.type)&&e("Invalid Email",{appearance:"error",autoDismiss:!0})}catch(c){console.log(c)}console.log(s);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(c.jsx)("div",{className:"h-screen container mx-auto flex flex-col items-center justify-center md:pt-0",children:Object(c.jsxs)("div",{className:"w-full flex flex-row sm:pt-80 md:pt-0 md:px-5",children:[Object(c.jsxs)("div",{className:"flex-1 mx-auto my-auto px-5",children:[Object(c.jsx)("h1",{className:"font-righteous text-pallete-fb8 text-xl text-center mb-10 mx-10 md:text-3xl md:mx-20 lg:text-5xl",children:"We would love to hear your thoughts"}),Object(c.jsx)("form",{onSubmit:l(n,a),children:Object(c.jsxs)("div",{className:"m-2",children:[Object(c.jsxs)("div",{className:"flex flex-col md:flex-row",children:[Object(c.jsx)(g,{name:"Name",placeholder:"Your name",reg:s({required:"Enter a name"})}),Object(c.jsx)(g,{name:"Subject",placeholder:"Enter a subject",reg:s({required:"Enter a subject"})})]}),Object(c.jsx)(g,{name:"Email",placeholder:"Your email",reg:s({required:"Invalid email",pattern:/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/})}),Object(c.jsxs)("label",{htmlFor:"Message",children:[Object(c.jsx)("p",{className:"text-sm sm:text-2xl",children:"Message"}),Object(c.jsx)("textarea",{className:"w-full h-40 py-2 bg-transparent border-b-2 border-gray-400  focus:outline-none focus:border-pallete-fb8 resize-none",name:"Message",placeholder:"Your message",ref:s({required:"Enter a message"})})]}),Object(c.jsxs)("button",{className:"mt-3 text-md  md:text-2xl hover:text-pallete-fb8 cursor-pointer flex items-center",type:"submit",children:["Submit",Object(c.jsx)(p.a,{className:"ml-1.5 -mb-0.5"})]})]})})]}),Object(c.jsx)("div",{className:"flex-1 hidden lg:block",children:Object(c.jsx)("img",{src:f,alt:"contactusBG",className:"rounded-r-lg"})})]})})},y=s(15),k=function(e){var t=e.menuOpen,s=e.setMenuOpen,l=Object(y.d)(t,null,{from:{opacity:0,transform:"translate3d(100vw,0,0)"},enter:{zIndex:"40",opacity:1,transform:"translate3d(0,0,0)",position:"fixed",maxHeight:"100vh",top:0,bottom:0,right:0,left:0},leave:{opacity:0,transform:"translate3d(-100vw,0,0)"},config:y.b.gentle}),n=[{id:1,name:"HOME",path:"/"},{id:2,name:"CONTACT",path:"/contactus"},{id:3,name:"ABOUT",path:"/about"}],a=[{id:1,name:"FACEBOOK",path:"https://www.facebook.com/fivethingph/"},{id:2,name:"GITHUB",path:"https://github.com/FiveThing"}];return Object(c.jsx)("div",{children:l.map((function(e){var t=e.item,l=e.key,i=e.props;return t&&Object(c.jsx)(y.a.div,{style:i,className:"h-full bg-pallete-base flex items-center",children:Object(c.jsxs)("div",{className:"container mx-auto flex justify-between",children:[Object(c.jsx)("div",{className:"mx-auto text-left",children:Object(c.jsx)("ul",{className:"cursor-pointer text-3xl md:text-5xl lg:text-7xl space-y-5 font-righteous",children:n.map((function(e){return Object(c.jsx)("li",{className:"hover:text-pallete-ff9",onClickCapture:function(){return s(!1)},children:Object(c.jsx)(o.b,{to:e.path,children:e.name})},e.id)}))})}),Object(c.jsx)("div",{className:"mx-auto text-right",children:Object(c.jsx)("ul",{className:"cursor-pointer space-y-3 text-sm md:text-lg lg:text-xl font-righteous",children:a.map((function(e){return Object(c.jsx)("li",{className:"hover:text-pallete-ff9",onClickCapture:function(){return s(!1)},children:Object(c.jsx)("a",{href:e.path,children:e.name})},e.id)}))})})]})},l)}))})},E=(s(61),s(37)),T=s.n(E),M=(s(62),s(38)),S=function(e,t){return[e-window.innerWidth/2,t-window.innerHeight/2]},A=function(e,t){return"translate3d(".concat(e/30,"px,").concat(t/30,"px,0)")},F=function(e,t){return"translate3d(".concat(e/8+35,"px,").concat(t/8-230,"px,0)")},C=function(){var e=Object(y.c)((function(){return{xy:[0,0],config:{mass:10,tension:550,friction:140}}})),t=Object(r.a)(e,2),s=t[0],l=t[1];return Object(c.jsxs)("div",{className:"hello relative h-full w-full flex items-center justify-center",onMouseMove:function(e){var t=e.clientX,s=e.clientY;return l({xy:S(t,s)})},children:[Object(c.jsxs)("div",{className:" z-10 h-full space-y-3.5 absolute flex flex-col text-center items-center justify-center",children:[Object(c.jsx)("h1",{className:"font-righteous tracking-widest text-5xl md:text-7xl lg:text-8xl",children:"HELLO,"}),Object(c.jsxs)("p",{className:"text-sm sm:text-2xl",children:["We are Student Developers from",Object(c.jsx)("br",{}),"Polytechnic University of the Philippines"]}),Object(c.jsx)(M.a,{className:"z-10 absolute bottom-20 right-0 left-0 m-auto text-4xl animate-bounce hover:text-blob-f98 transition ease-in-out cursor-pointer",onClick:function(){return window.fullpage_api.moveSectionDown()}})]}),Object(c.jsx)(y.a.div,{className:"card1 hidden lg:block",style:{transform:s.xy.interpolate(A)}}),Object(c.jsx)(y.a.div,{className:"card2 hidden lg:block",style:{transform:s.xy.interpolate(F)}}),Object(c.jsx)(y.a.div,{className:"card3 hidden lg:block"}),Object(c.jsx)(y.a.div,{className:"card4 hidden lg:block"}),Object(c.jsx)(y.a.div,{className:"card5 hidden lg:block"}),Object(c.jsx)(y.a.div,{className:"card6 hidden lg:block"})]})},P=s.p+"static/media/WebsiteMonitor.8cb1dcaf.png",D=s.p+"static/media/F.c4da0d77.png",W=function(){return Object(c.jsxs)("div",{className:"h-full container mx-auto py-10 md:py-20 flex flex-col items-center lg:flex-row lg:py-0",children:[Object(c.jsxs)("div",{className:"flex flex-2 flex-col mx-3 py-5 space-y-4 md:mx-10 md:py-10 lg:flex-1 lg:justify-center lg:mx-28 xl:mx-24 2xl:mx-16 ",children:[Object(c.jsx)("h1",{className:" font-righteous text-pallete-fb8 text-3xl tracking-widest md:text-5xl",children:"FIVETHING"}),Object(c.jsx)("p",{className:"leading-relaxed md:text-2xl",children:"Our very own start-up website portfolio that provides services for the clients desired web design and development"}),Object(c.jsxs)("button",{className:"flex flex-row items-center space-x-1 focus:outline-none hover:text-pallete-fb8 md:text-xl",children:[Object(c.jsx)("p",{children:"View Project"})," ",Object(c.jsx)(p.a,{})]})]}),Object(c.jsx)("div",{className:"relative flex-1 flex items-center justify-center",children:Object(c.jsx)("div",{className:"flex items-center justify-center h-4/5 w-4/5",children:Object(c.jsxs)("div",{className:"flex items-end justify-center",children:[Object(c.jsx)("img",{src:D,alt:"F",className:"h-full lg:h-auto"}),Object(c.jsx)("img",{src:P,alt:"Website Monitor",className:"absolute"})]})})})]})},z=s.p+"static/media/TalaarawanMonitor.b3b878e1.png",B=s.p+"static/media/T.5697508b.png",I=function(){return Object(c.jsxs)("div",{className:"h-full container mx-auto py-10 flex flex-col items-center lg:flex-row lg:py-0",children:[Object(c.jsxs)("div",{className:"flex flex-2 flex-col mx-3 py-5 space-y-4 md:mx-10 md:py-10 lg:flex-1 lg:justify-center lg:mx-28 xl:mx-24 2xl:mx-16 ",children:[Object(c.jsx)("h1",{className:" font-righteous text-pallete-fb8 text-3xl tracking-widest md:text-5xl",children:"TALAARAWAN"}),Object(c.jsx)("p",{className:"leading-relaxed md:text-2xl",children:"Our very own start-up website portfolio that provides services for the clients desired web design and development"}),Object(c.jsxs)("button",{className:"flex flex-row items-center space-x-1 focus:outline-none hover:text-pallete-fb8 md:text-xl",children:[Object(c.jsx)("p",{children:"View Project"})," ",Object(c.jsx)(p.a,{})]})]}),Object(c.jsx)("div",{className:"relative flex-1 flex items-center justify-center",children:Object(c.jsx)("div",{className:" flex items-center justify-center h-4/5 w-4/5",children:Object(c.jsxs)("div",{className:"flex items-end justify-center",children:[Object(c.jsx)("img",{src:B,alt:"F",className:"h-full lg:h-auto"}),Object(c.jsx)("img",{src:z,alt:"Website Monitor",className:"absolute"})]})})})]})},L=s(9),H=function(){return Object(c.jsx)("div",{className:"h-full bg-pallete-fb8 flex items-center justify-center",children:Object(c.jsxs)("div",{className:"z-10 flex flex-col space-y-3 items-center mx-3 md:mx-10 lg:mx-20",children:[Object(c.jsx)("h1",{className:"text-3xl font-righteous tracking-widest text-center md:text-5xl lg:text-6xl",children:"Let's collaborate our minds!"}),Object(c.jsx)("p",{className:"text-center md:text-2xl md:px-10",children:"We are passionate team of designers and developers. Let's go fivething"}),Object(c.jsxs)("div",{className:"flex text-2xl md:text-4xl",children:[Object(c.jsx)("a",{href:"https://www.facebook.com/fivethingph/",children:Object(c.jsx)(L.a,{className:"mx-2"})}),Object(c.jsx)("a",{href:"https://github.com/FiveThing",children:Object(c.jsx)(L.b,{className:"mx-2"})})]}),Object(c.jsx)(o.b,{to:"/contactus",children:Object(c.jsxs)("button",{className:"flex flex-row items-center space-x-1 md:text-2xl focus:outline-none",children:[Object(c.jsx)("p",{children:"Get in touch with us"})," ",Object(c.jsx)(p.a,{})]})})]})})},U=function(){return Object(c.jsx)("div",{className:"h-full",children:Object(c.jsx)("div",{className:"h-full container mx-auto flex items-center justify-center",children:Object(c.jsx)("h1",{className:"font-righteous text-center hover:text-pallete-fb8 mx-3 md:text-3xl md:mx-5 lg:text-5xl lg:mx-10",children:Object(c.jsx)(o.b,{to:"/about",children:"GET TO KNOW MORE ABOUT FIVETHING!"})})})})},_=(s(63),function(e){var t=e.isMenuOpen;return Object(l.useEffect)((function(){return t&&(window.fullpage_api.setAllowScrolling(!1),document.body.style.overflow="hidden"),function(){window.fullpage_api.setAllowScrolling(!0),document.body.style.overflow="unset"}}),[t]),Object(c.jsx)(T.a,{className:"z-0",scrollingSpeed:1e3,keyboardScrolling:!0,scrollOverflow:!0,navigation:!0,navigationPosition:"left",navigationTooltips:["01","02","03","04","05","06"],showActiveTooltip:!0,responsiveWidth:"1024",render:function(e){e.state;var t=e.fullpageApi;return Object(c.jsxs)("div",{id:"fullpage-wrapper",children:[Object(c.jsx)("div",{className:"section",children:Object(c.jsx)(C,{})}),Object(c.jsx)("div",{className:"section",children:"Services"}),Object(c.jsx)("div",{className:"section",children:Object(c.jsx)(W,{})}),Object(c.jsx)("div",{className:"section",children:Object(c.jsx)(I,{})}),Object(c.jsx)("div",{className:"section",children:Object(c.jsx)(H,{})}),Object(c.jsx)("div",{className:"section",children:Object(c.jsx)(U,{})}),Object(c.jsx)("button",{className:"absolute bottom-5 right-5 md:bottom-10 md:right-10 p-3 flex items-center justify-center text-2xl focus:outline-none animate-bounce",onClick:function(){return t.moveTo(1,0)},children:Object(c.jsx)(p.b,{})})]})}})}),G=s.p+"static/media/AndreiPhoto.d15641c3.png",Y=s.p+"static/media/GlendellPhoto.fc231c90.png",R=s.p+"static/media/JinnielPhoto.9a3d7680.png",q=s.p+"static/media/PatPhoto.2710d76f.png",V=s.p+"static/media/RavenPhoto.f0919b65.png",X=[{id:1,photo:Y,details:{name:"Glendell Bringino",role:"Full Stack Developer",links:[{id:1,socmed:"https://www.facebook.com/glendell03/",logo:Object(c.jsx)(L.a,{})},{id:2,socmed:"https://github.com/glendell03",logo:Object(c.jsx)(L.b,{})},{id:3,socmed:"https://www.linkedin.com/in/glendell03/",logo:Object(c.jsx)(L.c,{})}]}},{id:2,photo:R,details:{name:"Jinniel Bautista",role:"Back End Developer",links:[{id:1,socmed:"https://www.facebook.com/jinniel.bautista",logo:Object(c.jsx)(L.a,{})},{id:2,socmed:"https://github.com/jinnielqtqt",logo:Object(c.jsx)(L.b,{})},{id:3,socmed:"linkedin.com/in/jinniel-bautista-8bb6a6207",logo:Object(c.jsx)(L.c,{})}]}},{id:3,photo:V,details:{name:"Raven Lantin",role:"UI/UX Designer",links:[{id:1,socmed:"https://www.facebook.com/ravenlntn",logo:Object(c.jsx)(L.a,{})},{id:2,socmed:"https://github.com/ravenlntn",logo:Object(c.jsx)(L.b,{})},{id:3,socmed:"https://www.linkedin.com/in/ravenlntn/",logo:Object(c.jsx)(L.c,{})}]}},{id:4,photo:q,details:{name:"Patricia Candedeir",role:"UI/UX Designer",links:[{id:1,socmed:"https://www.facebook.com/pieneysee",logo:Object(c.jsx)(L.a,{})},{id:2,socmed:"https://github.com/REESEE-Alt4",logo:Object(c.jsx)(L.b,{})}]}},{id:5,photo:G,details:{name:"Andrei Zabala",role:"Back End Developer",links:[{id:1,socmed:"https://www.facebook.com/l03e1t3az",logo:Object(c.jsx)(L.a,{})},{id:2,socmed:"https://github.com/Andreizabala",logo:Object(c.jsx)(L.b,{})}]}}],J=function(){return Object(c.jsx)("div",{className:"h-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 xl:gap-10",children:X.map((function(e){return Object(c.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[Object(c.jsx)("div",{className:"h-40 md:h-50 lg:h-60 xl:h-80",children:Object(c.jsx)("img",{src:e.photo,alt:"TeamPhoto",className:"h-full"})}),Object(c.jsx)("h1",{className:"font-bold mt-3 xl:text-lg",children:e.details.name}),Object(c.jsx)("p",{className:"text-sm",children:e.details.role}),Object(c.jsx)("div",{className:"flex p-1 lg:text-lg",children:e.details.links.map((function(e){return Object(c.jsx)("a",{href:e.socmed,className:"m-2",children:e.logo})}))})]})}))})},K=function(){return Object(c.jsx)("div",{className:"h-screen container mx-auto flex flex-col items-center md:justify-center",children:Object(c.jsxs)("div",{className:"mt-16 md:mt-96 lg:mt-56 xl:mt-0",children:[Object(c.jsx)("h1",{className:"font-righteous text-2xl text-center mx-8 py-10 md:text-4xl lg:text-5xl xl:text-6xl",children:"MEET THE CREWMATES"}),Object(c.jsx)(J,{})]})})};var Q=function(){var e=Object(l.useState)(!1),t=Object(r.a)(e,2),s=t[0],n=t[1];return Object(c.jsx)(o.a,{children:Object(c.jsx)(x.ToastProvider,{children:Object(c.jsx)(d.c,{children:Object(c.jsx)(l.Fragment,{children:Object(c.jsxs)("div",{className:"App relative",children:[Object(c.jsx)(j,{menuOpen:s,setMenuOpen:n}),Object(c.jsx)(k,{menuOpen:s,setMenuOpen:n}),Object(c.jsx)(d.a,{path:"/",exact:!0,children:Object(c.jsx)(_,{isMenuOpen:s})}),Object(c.jsx)(d.a,{path:"/contactus",component:w}),Object(c.jsx)(d.a,{path:"/about",component:K})]})})})})})},Z=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,67)).then((function(t){var s=t.getCLS,c=t.getFID,l=t.getFCP,n=t.getLCP,a=t.getTTFB;s(e),c(e),l(e),n(e),a(e)}))};i.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(Q,{})}),document.getElementById("root")),Z()}},[[64,1,2]]]);
//# sourceMappingURL=main.2a266ade.chunk.js.map