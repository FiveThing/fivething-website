(this["webpackJsonpfivething-website"]=this["webpackJsonpfivething-website"]||[]).push([[0],{31:function(e,t,l){},62:function(e,t,l){},63:function(e,t,l){"use strict";l.r(t);var s=l(2),a=l(1),c=l.n(a),n=l(19),i=l.n(n),r=(l(31),l(13)),o=l(17),d=l(8),m=l(22),x=l(65),j=function(e){var t=e.menuOpen,l=e.setMenuOpen,c=Object(a.useState)(!1),n=Object(r.a)(c,2),i=n[0],d=n[1];return window.addEventListener("scroll",(function(){window.scrollY>=100?d(!0):d(!1)})),Object(s.jsx)("nav",{className:"w-full fixed top-0 z-50 ".concat(i?"bg-pallete-base":""),children:Object(s.jsxs)("div",{className:"flex items-center justify-between py-2 sm:py-10 mx-2 sm:mx-10 ",children:[Object(s.jsx)(o.b,{to:"/",children:Object(s.jsx)("h1",{className:"font-righteous text-4xl",children:"fivething"})}),Object(s.jsx)(x.a,{rounded:!0,toggled:t,toggle:l})]})})},C=l(7),b=l.n(C),h=l(14),u=l.p+"static/media/ContactusBG.b9c2b911.png",f=l(18),p=l(35),O=function(e){var t=e.name,l=e.placeholder,a=e.reg;return Object(s.jsx)("div",{className:"w-full",children:Object(s.jsxs)("label",{className:"flex flex-col",htmlFor:t,children:[Object(s.jsx)("p",{className:"text-sm sm:text-2xl",children:t}),Object(s.jsx)("input",{className:"w-full py-2 bg-transparent border-b-2 border-transparent  focus:outline-none focus:border-pallete-fb8",type:"text",name:t,ref:a,placeholder:l})]})})},g=l(36),v=l.n(g),L=function(){var e=Object(m.useToasts)().addToast,t=Object(p.a)({defaultValues:{Name:"",Subject:"",Email:"",Message:""}}),l=t.register,a=t.handleSubmit,c=function(){var t=Object(h.a)(b.a.mark((function t(l,s){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.preventDefault(),"user_X6iCgQFYU7W9bLR33ysHY","template_07lvynw","service_vr59kbj",t.prev=4,t.next=7,v.a.sendForm("service_vr59kbj","template_07lvynw",s.target,"user_X6iCgQFYU7W9bLR33ysHY");case 7:e("Email successfully sent",{appearance:"success",autoDismiss:!0}),s.target.reset(),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(4),e("Email failed to send",{appearance:"error",autoDismiss:!0});case 14:case"end":return t.stop()}}),t,null,[[4,11]])})));return function(e,l){return t.apply(this,arguments)}}(),n=function(){var t=Object(h.a)(b.a.mark((function t(l){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{l.Name&&e(l.Name.message,{appearance:"error",autoDismiss:!0}),l.Subject&&e(l.Subject.message,{appearance:"error",autoDismiss:!0}),l.Message&&e(l.Message.message,{appearance:"error",autoDismiss:!0}),(l.Email||"pattern"===l.Email.type)&&e("Invalid Email",{appearance:"error",autoDismiss:!0})}catch(s){console.log(s)}console.log(l);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(s.jsx)("div",{className:"h-screen container mx-auto flex flex-col items-center justify-center md:pt-0",children:Object(s.jsxs)("div",{className:"w-full flex flex-row md:px-5",children:[Object(s.jsxs)("div",{className:"flex-1 mx-auto my-auto px-5",children:[Object(s.jsx)("h1",{className:"font-righteous text-pallete-fb8 text-xl text-center mb-20 mx-10 md:text-3xl md:mx-20 lg:text-5xl",children:"We would love to hear your thoughts"}),Object(s.jsx)("form",{onSubmit:a(c,n),children:Object(s.jsxs)("div",{className:"m-2",children:[Object(s.jsxs)("div",{className:"flex flex-col md:flex-row",children:[Object(s.jsx)(O,{name:"Name",placeholder:"Your name",reg:l({required:"Enter a name"})}),Object(s.jsx)(O,{name:"Subject",placeholder:"Enter a subject",reg:l({required:"Enter a subject"})})]}),Object(s.jsx)(O,{name:"Email",placeholder:"Your email",reg:l({required:"Invalid email",pattern:/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/})}),Object(s.jsxs)("label",{htmlFor:"Message",children:[Object(s.jsx)("p",{className:"text-sm sm:text-2xl",children:"Message"}),Object(s.jsx)("textarea",{className:"w-full h-40 py-2 bg-transparent border-b-2 border-gray-400  focus:outline-none focus:border-pallete-fb8 resize-none",name:"Message",placeholder:"Your message",ref:l({required:"Enter a message"})})]}),Object(s.jsxs)("button",{className:"mt-3 text-md  md:text-2xl hover:text-pallete-fb8 cursor-pointer flex items-center",type:"submit",children:["Submit",Object(s.jsx)(f.a,{className:"ml-1.5 -mb-0.5"})]})]})})]}),Object(s.jsx)("div",{className:"flex-1 hidden lg:block",children:Object(s.jsx)("img",{src:u,alt:"contactusBG",className:"rounded-r-lg"})})]})})},w=l(23),N=function(e){var t=e.menuOpen,l=e.setMenuOpen,a=Object(w.c)(t,null,{from:{opacity:0,transform:"translate3d(100vw,0,0)"},enter:{zIndex:"40",opacity:1,transform:"translate3d(0,0,0)",position:"fixed",maxHeight:"100vh",top:0,bottom:0,right:0,left:0},leave:{opacity:0,transform:"translate3d(-100vw,0,0)"},config:w.b.gentle}),c=[{id:1,name:"HOME",path:"/"},{id:2,name:"CONTACT",path:"/contactus"},{id:3,name:"ABOUT",path:"/about"}],n=[{id:1,name:"FACEBOOK",path:""},{id:2,name:"GITHUB",path:"https://github.com/FiveThing"}];return Object(s.jsx)("div",{children:a.map((function(e){var t=e.item,a=e.key,i=e.props;return t&&Object(s.jsx)(w.a.div,{style:i,className:"h-full bg-pallete-base flex items-center",children:Object(s.jsxs)("div",{className:"container mx-auto flex justify-between",children:[Object(s.jsx)("div",{className:"mx-auto text-left",children:Object(s.jsx)("ul",{className:"cursor-pointer text-3xl md:text-5xl lg:text-7xl space-y-5 font-righteous",children:c.map((function(e){return Object(s.jsx)("li",{className:"hover:text-pallete-ff9",onClickCapture:function(){return l(!1)},children:Object(s.jsx)(o.b,{to:e.path,children:e.name})},e.id)}))})}),Object(s.jsx)("div",{className:"mx-auto text-right",children:Object(s.jsx)("ul",{className:"cursor-pointer space-y-3 text-sm md:text-lg lg:text-xl font-righteous",children:n.map((function(e){return Object(s.jsx)("li",{className:"hover:text-pallete-ff9",onClickCapture:function(){return l(!1)},children:Object(s.jsx)("a",{href:e.path,children:e.name})},e.id)}))})})]})},a)}))})},y=(l(61),l(37)),E=l.n(y),H=l(38);function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var l,s,a=function(e,t){if(null==e)return{};var l,s,a={},c=Object.keys(e);for(s=0;s<c.length;s++)l=c[s],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(s=0;s<c.length;s++)l=c[s],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var D=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M558.771 907.33C512.362 912.336 470.781 868.137 426.623 845.36C380.605 821.624 338.031 792.301 291.757 769.603C208 728.519 66.7773 773.003 41.6476 656.523C16.4115 539.55 190.998 506.831 209.774 389.597C226.813 283.203 104.419 178.498 134.29 78.0656C161.095 -12.0576 261.871 -3.85168 332.194 -22.0029C390.871 -37.1484 452.142 -0.476484 510.225 -18.9687C585.161 -42.8258 640.104 -153.6 717.553 -144.69C792.129 -136.11 876.324 -69.6433 904.046 26.3398C934.619 132.198 841.11 242.426 861.14 352.465C879.654 454.184 988.11 492.22 1007.32 593.727C1026.5 695.089 1030.63 847.741 963.532 893.495C877.412 952.222 775.503 814.903 678.097 818.233C631.611 819.821 605.044 902.338 558.771 907.33Z",fill:"#F9813A"});function F(e,t){var l=e.title,s=e.titleId,c=M(e,["title","titleId"]);return a.createElement("svg",V({width:786,height:954,viewBox:"0 0 786 954",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},c),l?a.createElement("title",{id:s},l):null,D)}var Z=a.forwardRef(F);l.p;function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s])}return e}).apply(this,arguments)}function A(e,t){if(null==e)return{};var l,s,a=function(e,t){if(null==e)return{};var l,s,a={},c=Object.keys(e);for(s=0;s<c.length;s++)l=c[s],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(s=0;s<c.length;s++)l=c[s],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var T=a.createElement("g",{clipPath:"url(#clip0)"},a.createElement("path",{d:"M435.922 191.941C476.535 191.941 509.458 159.018 509.458 118.405C509.458 77.7923 476.535 44.869 435.922 44.869C395.309 44.869 362.386 77.7923 362.386 118.405C362.386 159.018 395.309 191.941 435.922 191.941Z",fill:"#A0616A"}),a.createElement("path",{d:"M381.035 155.173C381.035 155.173 394.89 259.616 373.575 271.339C352.261 283.062 500.398 284.128 500.398 284.128C500.398 284.128 467.36 193.54 482.281 165.831L381.035 155.173Z",fill:"#A0616A"}),a.createElement("path",{d:"M608.57 284.656L596.25 340.756L570.2 459.446L569.42 465.946L560.43 541.196L554.45 591.186L550.44 624.766C526.06 637.296 508.39 645.946 508.39 645.946C508.39 645.946 506.87 638.326 504.42 628.576C487.31 633.706 455.65 642.216 428.82 643.916C438.59 654.806 443.08 665.036 436.99 672.586C418.61 695.346 342.73 647.666 316.19 629.886C315.572 634.143 315.338 638.447 315.49 642.746L295.18 627.126L297.19 591.186L300.58 530.376L304.84 454.116C303.497 450.851 302.371 447.5 301.47 444.086C295.25 421.966 287.7 377.796 281.91 340.756C277.25 310.946 273.75 285.756 273.01 280.396C272.91 279.696 272.86 279.336 272.86 279.336L385.29 229.656C393.28 248.186 430.59 253.756 430.59 253.756C461.5 251.626 485.73 235.326 485.73 235.326L608.57 284.656Z",fill:"#D0CDE1"}),a.createElement("path",{d:"M516.921 624.636C516.921 624.636 512.161 626.266 504.421 628.576C487.311 633.706 455.651 642.216 428.821 643.916C405.721 645.396 386.201 641.836 382.631 626.766C381.101 620.286 383.271 614.956 388.001 610.576C402.121 597.486 439.001 592.796 468.251 591.186C476.511 590.736 484.151 590.526 490.511 590.446C501.311 590.306 508.391 590.526 508.391 590.526L508.561 591.186L516.921 624.636Z",fill:"#A0616A"}),a.createElement("path",{d:"M374.746 48.8468L360.996 43.3423C360.996 43.3423 389.745 11.6915 429.744 14.4439L418.494 2.05865C418.494 2.05865 445.993 -8.95021 470.992 19.9482C484.133 35.1394 499.338 52.996 508.817 73.1112H523.541L517.396 86.643L538.905 100.175L516.828 97.7442C518.144 105.154 518.346 112.719 517.427 120.189C516.48 127.661 512.667 134.473 506.793 139.187C506.793 139.187 489.741 103.891 489.741 98.387V112.148C489.741 112.148 475.991 99.7631 475.991 91.5065L468.492 101.139L464.742 86.0019L418.494 101.139L425.994 88.7543L397.245 92.8826L408.495 77.7452C408.495 77.7452 375.996 95.6348 374.746 110.772C373.496 125.909 363.984 140.253 363.984 140.253C363.984 140.253 338.497 69.4885 374.746 48.8468Z",fill:"#2F2E41"}),a.createElement("path",{d:"M688.5 542.566C681.01 550.686 662.45 562.916 639.95 576.156C631.58 581.076 622.67 586.146 613.58 591.186C591.89 603.216 569.18 615.136 550.44 624.766C526.06 637.296 508.39 645.946 508.39 645.946C508.39 645.946 506.87 638.326 504.42 628.576C501.14 615.526 496.2 598.656 491.05 591.186C490.87 590.926 490.69 590.686 490.51 590.446C489.01 588.476 487.5 587.326 486.01 587.326L560.43 541.196L592.59 521.256L569.42 465.946L540.36 396.566L557.9 340.756L575.53 284.656H608.57C608.57 284.656 619.51 308.536 633.5 341.836C635.59 346.816 637.75 352.006 639.95 357.366C668.73 427.366 704.61 525.116 688.5 542.566Z",fill:"#D0CDE1"}),a.createElement("path",{d:"M436.991 672.586C418.611 695.346 342.731 647.666 316.191 629.886C310.411 626.016 306.971 623.566 306.971 623.566L331.251 591.186L338.941 580.936C338.941 580.936 345.821 584.586 355.991 590.526C356.361 590.746 356.731 590.966 357.111 591.186C365.881 596.336 376.891 603.066 388.001 610.576C403.331 620.946 418.831 632.776 428.821 643.916C438.591 654.806 443.081 665.036 436.991 672.586Z",fill:"#A0616A"}),a.createElement("path",{d:"M355.991 590.526C353.277 590.516 350.567 590.736 347.891 591.186C324.901 595.136 318.121 615.946 316.191 629.886C315.573 634.143 315.338 638.447 315.491 642.746L295.181 627.126L287.781 621.436C269.971 615.226 254.101 604.196 240.341 591.186C228.404 579.7 217.696 567.001 208.391 553.296C199.122 539.788 190.86 525.616 183.671 510.896C181.665 506.788 180.586 502.29 180.512 497.719C180.438 493.148 181.369 488.617 183.241 484.446L208.391 428.396L245.151 346.476C245.421 344.526 245.717 342.619 246.041 340.756C253.331 298.956 272.861 280.396 272.861 280.396H287.781L297.761 340.756L310.161 415.746L301.471 444.086L281.391 509.536L300.581 530.376L355.991 590.526Z",fill:"#D0CDE1"}),a.createElement("path",{d:"M372.877 415.806L385.632 430.687C390.371 429.783 395.319 428.721 400.416 427.529L396.753 415.806L405.71 426.256C459.708 412.976 526.637 387.155 526.637 387.155C526.637 387.155 454.38 392.453 400.429 380.666C376.558 375.451 351.998 387.284 342.203 409.669C336.509 422.679 337.403 433.952 357.597 433.952C364.42 433.835 371.224 433.195 377.949 432.037L372.877 415.806Z",fill:"#1687A7"}),a.createElement("path",{d:"M663.65 660.386V666.456C663.654 668.122 663.345 669.774 662.74 671.326C662.472 672.018 662.147 672.687 661.77 673.326C660.578 675.327 658.887 676.983 656.862 678.133C654.838 679.283 652.549 679.887 650.22 679.886H203.67C201.342 679.887 199.053 679.283 197.028 678.133C195.003 676.983 193.312 675.327 192.12 673.326C191.743 672.687 191.419 672.018 191.15 671.326C190.546 669.774 190.237 668.122 190.24 666.456V660.386C190.24 658.622 190.587 656.876 191.262 655.246C191.936 653.616 192.926 652.136 194.173 650.889C195.42 649.641 196.901 648.652 198.53 647.977C200.16 647.303 201.906 646.956 203.67 646.956H229.41V644.126C229.41 644.052 229.425 643.98 229.453 643.912C229.481 643.844 229.522 643.782 229.574 643.73C229.626 643.678 229.688 643.636 229.756 643.608C229.824 643.58 229.897 643.566 229.97 643.566H243.4C243.474 643.566 243.547 643.58 243.615 643.608C243.683 643.636 243.745 643.678 243.797 643.73C243.849 643.782 243.89 643.844 243.918 643.912C243.946 643.98 243.96 644.052 243.96 644.126V646.956H252.35V644.126C252.35 644.052 252.365 643.98 252.393 643.912C252.421 643.844 252.462 643.782 252.514 643.73C252.566 643.678 252.628 643.636 252.696 643.608C252.764 643.58 252.837 643.566 252.91 643.566H266.34C266.414 643.566 266.487 643.58 266.555 643.608C266.623 643.636 266.684 643.678 266.736 643.73C266.789 643.782 266.83 643.844 266.858 643.912C266.886 643.98 266.9 644.052 266.9 644.126V646.956H275.3V644.126C275.3 644.052 275.315 643.98 275.343 643.912C275.371 643.844 275.412 643.782 275.464 643.73C275.516 643.678 275.578 643.636 275.646 643.608C275.714 643.58 275.787 643.566 275.86 643.566H289.29C289.364 643.566 289.437 643.58 289.505 643.608C289.573 643.636 289.634 643.678 289.686 643.73C289.739 643.782 289.78 643.844 289.808 643.912C289.836 643.98 289.85 644.052 289.85 644.126V646.956H298.24V644.126C298.24 644.052 298.255 643.98 298.283 643.912C298.311 643.844 298.352 643.782 298.404 643.73C298.456 643.678 298.518 643.636 298.586 643.608C298.654 643.58 298.727 643.566 298.8 643.566H312.23C312.304 643.566 312.377 643.58 312.445 643.608C312.513 643.636 312.574 643.678 312.626 643.73C312.678 643.782 312.72 643.844 312.748 643.912C312.776 643.98 312.79 644.052 312.79 644.126V646.956H321.18V644.126C321.18 644.052 321.194 643.98 321.223 643.912C321.251 643.844 321.292 643.782 321.344 643.73C321.396 643.678 321.458 643.636 321.526 643.608C321.594 643.58 321.667 643.566 321.74 643.566H335.17C335.244 643.566 335.317 643.58 335.385 643.608C335.453 643.636 335.514 643.678 335.566 643.73C335.618 643.782 335.66 643.844 335.688 643.912C335.716 643.98 335.73 644.052 335.73 644.126V646.956H344.13V644.126C344.13 644.052 344.145 643.98 344.173 643.912C344.201 643.844 344.242 643.782 344.294 643.73C344.346 643.678 344.408 643.636 344.476 643.608C344.544 643.58 344.617 643.566 344.69 643.566H358.12C358.194 643.566 358.267 643.58 358.335 643.608C358.403 643.636 358.464 643.678 358.516 643.73C358.569 643.782 358.61 643.844 358.638 643.912C358.666 643.98 358.68 644.052 358.68 644.126V646.956H367.07V644.126C367.07 644.052 367.085 643.98 367.113 643.912C367.141 643.844 367.182 643.782 367.234 643.73C367.286 643.678 367.348 643.636 367.416 643.608C367.484 643.58 367.557 643.566 367.63 643.566H472.83C472.904 643.566 472.977 643.58 473.045 643.608C473.113 643.636 473.174 643.678 473.227 643.73C473.279 643.782 473.32 643.844 473.348 643.912C473.376 643.98 473.39 644.052 473.39 644.126V646.956H481.79V644.126C481.79 644.052 481.804 643.98 481.833 643.912C481.861 643.844 481.902 643.782 481.954 643.73C482.006 643.678 482.068 643.636 482.136 643.608C482.204 643.58 482.277 643.566 482.35 643.566H495.78C495.928 643.567 496.07 643.627 496.175 643.732C496.279 643.836 496.339 643.978 496.34 644.126V646.956H504.73V644.126C504.73 644.052 504.745 643.98 504.773 643.912C504.801 643.844 504.842 643.782 504.894 643.73C504.946 643.678 505.008 643.636 505.076 643.608C505.144 643.58 505.217 643.566 505.29 643.566H518.72C518.794 643.566 518.867 643.58 518.935 643.608C519.003 643.636 519.065 643.678 519.117 643.73C519.169 643.782 519.21 643.844 519.238 643.912C519.266 643.98 519.28 644.052 519.28 644.126V646.956H527.67V644.126C527.67 644.052 527.685 643.98 527.713 643.912C527.741 643.844 527.782 643.782 527.834 643.73C527.886 643.678 527.948 643.636 528.016 643.608C528.084 643.58 528.157 643.566 528.23 643.566H541.66C541.734 643.566 541.807 643.58 541.875 643.608C541.943 643.636 542.005 643.678 542.057 643.73C542.109 643.782 542.15 643.844 542.178 643.912C542.206 643.98 542.22 644.052 542.22 644.126V646.956H550.62V644.126C550.62 644.052 550.635 643.98 550.663 643.912C550.691 643.844 550.732 643.782 550.784 643.73C550.836 643.678 550.898 643.636 550.966 643.608C551.034 643.58 551.107 643.566 551.18 643.566H564.61C564.757 643.568 564.898 643.628 565.001 643.733C565.104 643.838 565.161 643.979 565.16 644.126V646.956H573.56V644.126C573.56 644.052 573.575 643.98 573.603 643.912C573.631 643.844 573.672 643.782 573.724 643.73C573.776 643.678 573.838 643.636 573.906 643.608C573.974 643.58 574.047 643.566 574.12 643.566H587.55C587.624 643.566 587.697 643.58 587.765 643.608C587.833 643.636 587.895 643.678 587.947 643.73C587.999 643.782 588.04 643.844 588.068 643.912C588.096 643.98 588.11 644.052 588.11 644.126V646.956H596.5V644.126C596.5 644.052 596.515 643.98 596.543 643.912C596.571 643.844 596.612 643.782 596.664 643.73C596.716 643.678 596.778 643.636 596.846 643.608C596.914 643.58 596.987 643.566 597.06 643.566H610.49C610.564 643.566 610.637 643.58 610.705 643.608C610.773 643.636 610.835 643.678 610.887 643.73C610.939 643.782 610.98 643.844 611.008 643.912C611.036 643.98 611.05 644.052 611.05 644.126V646.956H650.22C651.984 646.956 653.731 647.303 655.36 647.977C656.99 648.652 658.471 649.641 659.718 650.889C660.965 652.136 661.954 653.616 662.629 655.246C663.304 656.876 663.651 658.622 663.65 660.386Z",fill:"#3F3D56"}),a.createElement("path",{d:"M793.5 671.326H60.5V673.326H793.5V671.326Z",fill:"#3F3D56"}),a.createElement("path",{d:"M627.695 404.757H461.252V401.326H385.78V404.757H218.651C215.665 404.757 212.802 405.943 210.69 408.054C208.579 410.166 207.393 413.029 207.393 416.015V643.927C207.393 646.913 208.579 649.776 210.69 651.888C212.802 653.999 215.665 655.185 218.651 655.185H627.695C630.681 655.185 633.544 653.999 635.656 651.888C637.767 649.776 638.953 646.913 638.953 643.927V416.015C638.953 414.537 638.662 413.073 638.096 411.707C637.531 410.341 636.701 409.1 635.656 408.054C634.61 407.009 633.369 406.179 632.003 405.614C630.637 405.048 629.173 404.757 627.695 404.757Z",fill:"#3F3D56"}),a.createElement("path",{d:"M423.5 509.326C437.307 509.326 448.5 498.133 448.5 484.326C448.5 470.519 437.307 459.326 423.5 459.326C409.693 459.326 398.5 470.519 398.5 484.326C398.5 498.133 409.693 509.326 423.5 509.326Z",stroke:"#D0CDE1",strokeWidth:2,strokeMiterlimit:10}),a.createElement("path",{d:"M415.5 518.326C429.307 518.326 440.5 507.133 440.5 493.326C440.5 479.519 429.307 468.326 415.5 468.326C401.693 468.326 390.5 479.519 390.5 493.326C390.5 507.133 401.693 518.326 415.5 518.326Z",fill:"#D0CDE1"}),a.createElement("path",{d:"M108.446 661.223H80.4463V689.223H108.446V661.223Z",fill:"#D0CDE1"}),a.createElement("path",{d:"M91.4502 639.223V673.223H125.45V639.223H91.4502ZM123.97 671.743H92.9202V640.703H123.97V671.743Z",fill:"#3F3D56"}),a.createElement("path",{d:"M756.446 661.223H728.446V689.223H756.446V661.223Z",fill:"#D0CDE1"}),a.createElement("path",{d:"M739.45 639.223V673.223H773.45V639.223H739.45ZM771.97 671.743H740.92V640.703H771.97V671.743Z",fill:"#3F3D56"}),a.createElement("path",{d:"M94.5797 230.113C138.398 230.113 173.92 194.591 173.92 150.773C173.92 106.954 138.398 71.4324 94.5797 71.4324C50.7612 71.4324 15.2393 106.954 15.2393 150.773C15.2393 194.591 50.7612 230.113 94.5797 230.113Z",fill:"#FFB8B8"}),a.createElement("path",{d:"M122.229 56.49C115.045 55.5764 107.774 55.5764 100.59 56.49C84.586 58.5914 69.5203 65.2399 57.181 75.6466C44.8417 86.0533 35.7467 99.7814 30.9754 115.202C28.8053 122.229 27.5764 129.514 27.3208 136.864C27.2848 137.886 27.2607 138.92 27.2607 139.954C27.283 162.265 36.1559 183.655 51.932 199.431C67.7082 215.208 89.0989 224.08 111.41 224.103C113.201 224.103 114.992 224.043 116.759 223.934C120.907 223.674 125.03 223.103 129.093 222.227C148.495 218.055 165.798 207.161 177.947 191.468C190.095 175.776 196.308 156.295 195.487 136.467C194.665 116.638 186.863 97.7381 173.459 83.104C160.054 68.4699 141.909 59.0436 122.229 56.49H122.229ZM137.748 217.347H137.736C130.959 219.659 123.905 221.062 116.759 221.518C114.992 221.638 113.201 221.698 111.41 221.698C89.7377 221.672 68.961 213.051 53.6367 197.727C38.3123 182.402 29.6914 161.626 29.6649 139.954C29.6649 138.92 29.689 137.886 29.725 136.864C30.5514 115.744 39.5156 95.7617 54.7411 81.1009C69.9666 66.4401 90.273 58.2371 111.41 58.209C130.776 58.2101 149.513 65.0866 164.283 77.6132C179.052 90.1399 188.895 107.503 192.057 126.61C195.219 145.716 191.496 165.325 181.55 181.942C171.604 198.559 156.081 211.106 137.748 217.347H137.748Z",fill:"#3F3D56"}),a.createElement("path",{d:"M112.612 63.0175H110.208V79.8473H112.612V63.0175Z",fill:"#3F3D56"}),a.createElement("path",{d:"M57.8583 84.7016L56.1582 86.4017L68.0587 98.3021L69.7587 96.6021L57.8583 84.7016Z",fill:"#3F3D56"}),a.createElement("path",{d:"M34.4736 138.752V141.156H51.3034V138.752H34.4736Z",fill:"#3F3D56"}),a.createElement("path",{d:"M56.1573 193.506L57.8574 195.206L69.7579 183.305L68.0578 181.605L56.1573 193.506Z",fill:"#3F3D56"}),a.createElement("path",{d:"M153.062 96.602L154.762 98.3021L166.662 86.4017L164.962 84.7016L153.062 96.602Z",fill:"#3F3D56"}),a.createElement("path",{d:"M171.517 138.752V141.156H188.346V138.752H171.517Z",fill:"#3F3D56"}),a.createElement("path",{d:"M154.762 181.605L153.062 183.305L164.962 195.206L166.662 193.506L154.762 181.605Z",fill:"#3F3D56"}),a.createElement("path",{d:"M112.612 200.06H110.208V216.89H112.612V200.06Z",fill:"#3F3D56"}),a.createElement("path",{d:"M115.016 135.145C113.976 134.365 112.711 133.943 111.41 133.943C110.11 133.943 108.844 134.365 107.804 135.145C107.091 135.686 106.505 136.375 106.085 137.165C105.552 138.181 105.322 139.329 105.421 140.473C105.52 141.616 105.944 142.707 106.644 143.617C107.343 144.527 108.288 145.218 109.368 145.608C110.447 145.998 111.616 146.07 112.735 145.817C113.855 145.564 114.878 144.996 115.685 144.179C116.492 143.363 117.048 142.333 117.288 141.211C117.528 140.088 117.441 138.921 117.039 137.846C116.636 136.771 115.935 135.834 115.017 135.145H115.016ZM111.41 143.56C110.454 143.557 109.539 143.176 108.863 142.501C108.187 141.825 107.807 140.909 107.804 139.954C107.808 139.224 108.03 138.513 108.441 137.91C108.793 137.4 109.271 136.989 109.828 136.718C110.386 136.447 111.004 136.324 111.623 136.361C112.241 136.398 112.84 136.595 113.361 136.931C113.881 137.267 114.307 137.732 114.595 138.281C114.883 138.83 115.025 139.444 115.007 140.063C114.989 140.683 114.811 141.288 114.491 141.818C114.17 142.349 113.719 142.788 113.179 143.094C112.639 143.399 112.03 143.559 111.41 143.56V143.56Z",fill:"#3F3D56"}),a.createElement("path",{d:"M122.229 35.3686H100.591V57.0069H122.229V35.3686Z",fill:"#3F3D56"}),a.createElement("path",{d:"M111.41 38.975C127.344 38.975 140.261 34.4002 140.261 28.7569C140.261 23.1136 127.344 18.5388 111.41 18.5388C95.4757 18.5388 82.5586 23.1136 82.5586 28.7569C82.5586 34.4002 95.4757 38.975 111.41 38.975Z",fill:"#3F3D56"}),a.createElement("path",{d:"M115.016 94.2729H107.804V135.145H115.016V94.2729Z",fill:"#3F3D56"}),a.createElement("path",{d:"M226 220.44H0V222.844H226V220.44Z",fill:"#3F3D56"}),a.createElement("path",{d:"M150.594 599.754C151.527 631.704 132.859 643.413 109.431 644.097C108.887 644.113 108.345 644.123 107.806 644.126C106.719 644.135 105.643 644.117 104.578 644.072C83.3895 643.192 66.6177 631.945 65.75 602.232C64.852 571.482 103.019 531.529 105.882 528.574L105.888 528.571C105.996 528.458 106.052 528.402 106.052 528.402C106.052 528.402 149.661 567.807 150.594 599.754Z",fill:"#75CFB8"}),a.createElement("path",{d:"M107.744 639.255L122.626 617.124L107.775 641.636L107.806 644.126C106.719 644.135 105.643 644.117 104.578 644.072L105.316 612.06L105.296 611.813L105.323 611.766L105.394 608.741L89.0957 585.078L105.374 606.477L105.432 607.116L105.99 582.93L91.9127 558.397L106.03 578.681L105.882 528.574L105.883 528.407L105.887 528.571L106.822 568.062L119.651 552.021L106.864 571.464L107.144 593.098L118.95 571.984L107.187 596.279L107.343 608.308L124.512 578.897L107.395 612.505L107.744 639.255Z",fill:"#3F3D56"}),a.createElement("path",{d:"M798.594 599.754C799.527 631.704 780.859 643.413 757.431 644.097C756.887 644.113 756.345 644.123 755.806 644.126C754.719 644.135 753.643 644.117 752.578 644.072C731.39 643.192 714.618 631.945 713.75 602.232C712.852 571.482 751.019 531.529 753.882 528.574L753.888 528.571C753.996 528.458 754.052 528.402 754.052 528.402C754.052 528.402 797.661 567.807 798.594 599.754Z",fill:"#75CFB8"}),a.createElement("path",{d:"M755.744 639.255L770.626 617.124L755.775 641.636L755.806 644.126C754.719 644.135 753.643 644.117 752.578 644.072L753.316 612.06L753.296 611.813L753.323 611.766L753.394 608.741L737.096 585.078L753.374 606.477L753.432 607.116L753.99 582.93L739.913 558.397L754.03 578.681L753.882 528.574L753.883 528.407L753.888 528.571L754.822 568.062L767.651 552.021L754.864 571.464L755.144 593.098L766.95 571.984L755.187 596.279L755.343 608.308L772.512 578.897L755.395 612.505L755.744 639.255Z",fill:"#3F3D56"})),P=a.createElement("defs",null,a.createElement("clipPath",{id:"clip0"},a.createElement("rect",{width:798.627,height:689.223,fill:"white"})));function S(e,t){var l=e.title,s=e.titleId,c=A(e,["title","titleId"]);return a.createElement("svg",k({width:799,height:690,viewBox:"0 0 799 690",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},c),l?a.createElement("title",{id:s},l):null,T,P)}var B=a.forwardRef(S),I=(l.p,function(){return Object(s.jsxs)("div",{className:"h-screen container mx-auto flex relative items-center justify-center md:justify-start",children:[Object(s.jsxs)("div",{className:"mx-auto md:mx-28 space-y-3.5 z-50",children:[Object(s.jsx)("h1",{className:"font-righteous tracking-widest text-6xl sm:text-7xl md:text-9xl ",children:"HELLO,"}),Object(s.jsxs)("p",{className:"text-sm sm:text-2xl",children:["We are Student Developers from",Object(s.jsx)("br",{}),"Polytechnic University of the Philippines"]})]}),Object(s.jsx)(H.a,{className:"z-10 absolute bottom-20 right-0 left-0 m-auto text-4xl animate-bounce hover:text-blob-f98 transition ease-in-out cursor-pointer",onClick:function(){return window.fullpage_api.moveSectionDown()}}),Object(s.jsx)(Z,{className:"hidden lg:block absolute -right-48 top-0"}),Object(s.jsx)(B,{className:"hidden lg:block z-10 absolute -right-40"})]})}),z=l.p+"static/media/WebsiteMonitor.8cb1dcaf.png",W=l.p+"static/media/F.c4da0d77.png",R=function(){return Object(s.jsxs)("div",{className:"h-full container mx-auto py-10 md:py-20 flex flex-col items-center lg:flex-row lg:py-0",children:[Object(s.jsxs)("div",{className:"flex flex-2 flex-col mx-3 py-5 space-y-4 md:mx-10 md:py-10 lg:flex-1 lg:justify-center lg:mx-28 xl:mx-24 2xl:mx-16 ",children:[Object(s.jsx)("h1",{className:" font-righteous text-pallete-fb8 text-3xl tracking-widest md:text-5xl",children:"FIVETHING"}),Object(s.jsx)("p",{className:"leading-relaxed md:text-2xl",children:"Our very own start-up website portfolio that provides services for the clients desired web design and development"}),Object(s.jsxs)("button",{className:"flex flex-row items-center space-x-1 focus:outline-none hover:text-pallete-fb8 md:text-xl",children:[Object(s.jsx)("p",{children:"View Project"})," ",Object(s.jsx)(f.a,{})]})]}),Object(s.jsx)("div",{className:"relative flex-1 flex items-center justify-center",children:Object(s.jsx)("div",{className:"flex items-center justify-center h-4/5 w-4/5",children:Object(s.jsxs)("div",{className:"flex items-end justify-center",children:[Object(s.jsx)("img",{src:W,alt:"F",className:"h-full lg:h-auto"}),Object(s.jsx)("img",{src:z,alt:"Website Monitor",className:"absolute"})]})})})]})},U=l.p+"static/media/TalaarawanMonitor.b3b878e1.png",_=l.p+"static/media/T.5697508b.png",G=function(){return Object(s.jsxs)("div",{className:"h-full container mx-auto py-10 flex flex-col items-center lg:flex-row lg:py-0",children:[Object(s.jsxs)("div",{className:"flex flex-2 flex-col mx-3 py-5 space-y-4 md:mx-10 md:py-10 lg:flex-1 lg:justify-center lg:mx-28 xl:mx-24 2xl:mx-16 ",children:[Object(s.jsx)("h1",{className:" font-righteous text-pallete-fb8 text-3xl tracking-widest md:text-5xl",children:"TALAARAWAN"}),Object(s.jsx)("p",{className:"leading-relaxed md:text-2xl",children:"Our very own start-up website portfolio that provides services for the clients desired web design and development"}),Object(s.jsxs)("button",{className:"flex flex-row items-center space-x-1 focus:outline-none hover:text-pallete-fb8 md:text-xl",children:[Object(s.jsx)("p",{children:"View Project"})," ",Object(s.jsx)(f.a,{})]})]}),Object(s.jsx)("div",{className:"relative flex-1 flex items-center justify-center",children:Object(s.jsx)("div",{className:" flex items-center justify-center h-4/5 w-4/5",children:Object(s.jsxs)("div",{className:"flex items-end justify-center",children:[Object(s.jsx)("img",{src:_,alt:"F",className:"h-full lg:h-auto"}),Object(s.jsx)("img",{src:U,alt:"Website Monitor",className:"absolute"})]})})})]})},Y=l(9),q=function(){return Object(s.jsx)("div",{className:"h-full bg-pallete-fb8 flex items-center justify-center",children:Object(s.jsxs)("div",{className:"z-10 flex flex-col space-y-3 items-center mx-3 md:mx-10 lg:mx-20",children:[Object(s.jsx)("h1",{className:"text-3xl font-righteous tracking-widest text-center md:text-5xl lg:text-6xl",children:"Let's collaborate our minds!"}),Object(s.jsx)("p",{className:"text-center md:text-2xl md:px-10",children:"We are passionate team of designers and developers. Let's go fivething"}),Object(s.jsxs)("div",{className:"flex text-2xl md:text-4xl",children:[Object(s.jsx)(Y.a,{className:"mx-2"}),Object(s.jsx)(Y.b,{className:"mx-2"})]}),Object(s.jsx)(o.b,{to:"/contactus",children:Object(s.jsxs)("button",{className:"flex flex-row items-center space-x-1 md:text-2xl focus:outline-none",children:[Object(s.jsx)("p",{children:"Get in touch with us"})," ",Object(s.jsx)(f.a,{})]})})]})})},J=function(){return Object(s.jsx)("div",{className:"h-full",children:Object(s.jsx)("div",{className:"h-full container mx-auto flex items-center justify-center",children:Object(s.jsx)("h1",{className:"font-righteous text-center hover:text-pallete-fb8 mx-3 md:text-3xl md:mx-5 lg:text-5xl lg:mx-10",children:Object(s.jsx)(o.b,{to:"/about",children:"GET TO KNOW MORE ABOUT FIVETHING!"})})})})},X=(l(62),function(e){var t=e.isMenuOpen;return Object(a.useEffect)((function(){return t&&(window.fullpage_api.setAllowScrolling(!1),document.body.style.overflow="hidden"),function(){window.fullpage_api.setAllowScrolling(!1),document.body.style.overflow="unset"}}),[t]),Object(s.jsx)(E.a,{className:"z-0",scrollOverflow:!0,navigation:!0,navigationPosition:"left",navigationTooltips:["01","02","03","04","05","06"],showActiveTooltip:!0,responsiveWidth:"1024",render:function(e){e.state;var t=e.fullpageApi;return Object(s.jsxs)("div",{id:"fullpage-wrapper",children:[Object(s.jsx)("div",{className:"section",children:Object(s.jsx)(I,{})}),Object(s.jsx)("div",{className:"section",children:"Services"}),Object(s.jsx)("div",{className:"section",children:Object(s.jsx)(R,{})}),Object(s.jsx)("div",{className:"section",children:Object(s.jsx)(G,{})}),Object(s.jsx)("div",{className:"section",children:Object(s.jsx)(q,{})}),Object(s.jsx)("div",{className:"section",children:Object(s.jsx)(J,{})}),Object(s.jsx)("button",{className:"absolute bottom-5 right-5 md:bottom-10 md:right-10 p-3 flex items-center justify-center text-2xl focus:outline-none animate-bounce",onClick:function(){return t.moveTo(1,0)},children:Object(s.jsx)(f.b,{})})]})}})}),K=l.p+"static/media/AndreiPhoto.d15641c3.png",Q=l.p+"static/media/GlendellPhoto.fc231c90.png",$=l.p+"static/media/JinnielPhoto.9a3d7680.png",ee=l.p+"static/media/PatPhoto.2710d76f.png",te=l.p+"static/media/RavenPhoto.f0919b65.png",le=[{id:1,photo:Q,details:{name:"Glendell Bringino",role:"Full Stack Developer",links:[{id:1,socmed:"https://www.facebook.com/glendell03/",logo:Object(s.jsx)(Y.a,{})},{id:2,socmed:"https://github.com/glendell03",logo:Object(s.jsx)(Y.b,{})},{id:3,socmed:"https://www.linkedin.com/in/glendell03/",logo:Object(s.jsx)(Y.c,{})}]}},{id:2,photo:$,details:{name:"Jinniel Bautista",role:"Back End Developer",links:[{id:1,socmed:"https://www.facebook.com/jinniel.bautista",logo:Object(s.jsx)(Y.a,{})},{id:2,socmed:"https://github.com/jinnielqtqt",logo:Object(s.jsx)(Y.b,{})},{id:3,socmed:"linkedin.com/in/jinniel-bautista-8bb6a6207",logo:Object(s.jsx)(Y.c,{})}]}},{id:3,photo:te,details:{name:"Raven Lantin",role:"UI/UX Designer",links:[{id:1,socmed:"https://www.facebook.com/ravenlntn",logo:Object(s.jsx)(Y.a,{})},{id:2,socmed:"https://github.com/ravenlntn",logo:Object(s.jsx)(Y.b,{})},{id:3,socmed:"https://www.linkedin.com/in/ravenlntn/",logo:Object(s.jsx)(Y.c,{})}]}},{id:4,photo:ee,details:{name:"Patricia Candedeir",role:"UI/UX Designer",links:[{id:1,socmed:"https://www.facebook.com/pieneysee",logo:Object(s.jsx)(Y.a,{})},{id:2,socmed:"https://github.com/REESEE-Alt4",logo:Object(s.jsx)(Y.b,{})}]}},{id:5,photo:K,details:{name:"Andrei Zabala",role:"Back End Developer",links:[{id:1,socmed:"https://www.facebook.com/l03e1t3az",logo:Object(s.jsx)(Y.a,{})},{id:2,socmed:"https://github.com/Andreizabala",logo:Object(s.jsx)(Y.b,{})}]}}],se=function(){return Object(s.jsx)("div",{className:"h-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 xl:gap-10",children:le.map((function(e){return Object(s.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[Object(s.jsx)("div",{className:"h-40 md:h-50 lg:h-60 xl:h-80",children:Object(s.jsx)("img",{src:e.photo,alt:"TeamPhoto",className:"h-full"})}),Object(s.jsx)("h1",{className:"font-bold mt-3 xl:text-lg",children:e.details.name}),Object(s.jsx)("p",{className:"text-sm",children:e.details.role}),Object(s.jsx)("div",{className:"flex p-1 lg:text-lg",children:e.details.links.map((function(e){return Object(s.jsx)("a",{href:e.socmed,className:"m-2",children:e.logo})}))})]})}))})},ae=function(){return Object(s.jsx)("div",{className:"h-screen container mx-auto flex flex-col items-center md:justify-center",children:Object(s.jsxs)("div",{className:"mt-16 md:mt-0",children:[Object(s.jsx)("h1",{className:"font-righteous text-2xl text-center mx-8 py-10 md:text-4xl lg:text-5xl xl:text-6xl",children:"MEET THE CREWMATES"}),Object(s.jsx)(se,{})]})})};var ce=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),l=t[0],c=t[1];return Object(s.jsx)(o.a,{basename:"/fivething-website",children:Object(s.jsx)(m.ToastProvider,{children:Object(s.jsx)(d.c,{children:Object(s.jsx)(a.Fragment,{children:Object(s.jsxs)("div",{className:"App relative",children:[Object(s.jsx)(j,{menuOpen:l,setMenuOpen:c}),Object(s.jsx)(N,{menuOpen:l,setMenuOpen:c}),Object(s.jsx)(d.a,{path:"/",exact:!0,children:Object(s.jsx)(X,{isMenuOpen:l})}),Object(s.jsx)(d.a,{path:"/contactus",component:L}),Object(s.jsx)(d.a,{path:"/about",component:ae})]})})})})})},ne=function(e){e&&e instanceof Function&&l.e(3).then(l.bind(null,66)).then((function(t){var l=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,n=t.getTTFB;l(e),s(e),a(e),c(e),n(e)}))};i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(ce,{})}),document.getElementById("root")),ne()}},[[63,1,2]]]);
//# sourceMappingURL=main.cc539a50.chunk.js.map