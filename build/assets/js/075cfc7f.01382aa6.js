"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[6879],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>N});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),m=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=m(t.components);return r.createElement(o.Provider,{value:e},t.children)},u="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),u=m(a),c=n,N=u["".concat(o,".").concat(c)]||u[c]||k[c]||l;return a?r.createElement(N,i(i({ref:e},s),{},{components:a})):r.createElement(N,i({ref:e},s))}));function N(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[u]="string"==typeof t?t:n,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},35693:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const l={},i="\u0645\u0642\u062f\u0645\u0647",p={unversionedId:"simotel/callcenter-docs/dashboard/intro",id:"simotel/callcenter-docs/dashboard/intro",title:"\u0645\u0642\u062f\u0645\u0647",description:"\u062f\u0631 \u0627\u06cc\u0646 \u0642\u0633\u0645\u062a \u06af\u0632\u0627\u0631\u0634\u0627\u062a\u06cc \u0627\u0632 \u0639\u0645\u0644\u06a9\u0631\u062f \u0628\u062e\u0634\u200c\u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u0633\u06cc\u0633\u062a\u0645 \u0628\u0635\u0648\u0631\u062a \u0632\u0646\u062f\u0647 \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f\u060c\u0627\u06cc\u0646 \u0628\u062e\u0634 \u0634\u0627\u062e\u0635\u200c\u0647\u0627\u06cc \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u0645\u0627\u0646\u06cc\u062a\u0648\u0631\u06cc\u0646\u06af \u0645\u0631\u06a9\u0632\u062a\u0645\u0627\u0633 \u0631\u0627 \u0628\u0647 \u0634\u06a9\u0644 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u062f\u0631 \u0627\u062e\u062a\u06cc\u0627\u0631 \u0645\u062f\u06cc\u0631 \u0633\u06cc\u0633\u062a\u0645 \u0642\u0631\u0627\u0631 \u0645\u06cc\u200c\u062f\u0647\u062f \u0648 \u0645\u062f\u06cc\u0631 \u0633\u06cc\u0633\u062a\u0645 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627\u06cc \u062f\u0644\u062e\u0648\u0627\u0647 \u062e\u0648\u062f \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u0648 \u0635\u0641\u062d\u0647\u200c\u0627\u06cc \u0634\u062e\u0635\u06cc\u200c\u0633\u0627\u0632\u06cc \u0634\u062f\u0647 \u0631\u0627 \u0637\u0631\u0627\u062d\u06cc \u06a9\u0646\u062f.",source:"@site/docs/simotel/3- callcenter-docs/1-dashboard/1-intro.md",sourceDirName:"simotel/3- callcenter-docs/1-dashboard",slug:"/simotel/callcenter-docs/dashboard/intro",permalink:"/docs/simotel/callcenter-docs/dashboard/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"Docs",previous:{title:"\u0633\u0646\u0627\u0631\u06cc\u0648\u06cc\u200c\u062a\u0645\u0627\u0633",permalink:"/docs/simotel/system-intro/dialplanintro"},next:{title:"\u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627\u06cc \u0628\u0644\u0627\u062f\u0631\u0646\u06af",permalink:"/docs/simotel/callcenter-docs/dashboard/realtime_components"}},o={},m=[{value:"\u0627\u062c\u0632\u0627\u06cc \u0645\u0627\u0646\u06cc\u062a\u0648\u0631\u06cc\u0646\u06af",id:"\u0627\u062c\u0632\u0627\u06cc-\u0645\u0627\u0646\u06cc\u062a\u0648\u0631\u06cc\u0646\u06af",level:2},{value:"\u0639\u0645\u0644\u06cc\u0627\u062a\u200c\u0647\u0627 \u062f\u0631 \u0628\u062e\u0634 \u0645\u0627\u0646\u06cc\u062a\u0648\u0631\u06cc\u0646\u06af",id:"\u0639\u0645\u0644\u06cc\u0627\u062a\u0647\u0627-\u062f\u0631-\u0628\u062e\u0634-\u0645\u0627\u0646\u06cc\u062a\u0648\u0631\u06cc\u0646\u06af",level:2},{value:"\u062f\u0633\u062a\u0647\u200c\u0628\u0646\u062f\u06cc \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627",id:"\u062f\u0633\u062a\u0647\u0628\u0646\u062f\u06cc-\u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u0647\u0627",level:2},{value:"\u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627\u06cc \u0628\u0644\u0627\u062f\u0631\u0646\u06af",id:"\u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u0647\u0627\u06cc-\u0628\u0644\u0627\u062f\u0631\u0646\u06af",level:3},{value:"\u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627\u06cc \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u0635\u0641",id:"\u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u0647\u0627\u06cc-\u0645\u0631\u0628\u0648\u0637-\u0628\u0647-\u0635\u0641",level:3},{value:"\u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627\u06cc \u0639\u0645\u0648\u0645\u06cc",id:"\u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u0647\u0627\u06cc-\u0639\u0645\u0648\u0645\u06cc",level:3},{value:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc \u0645\u0634\u062a\u0631\u06a9",id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc-\u0645\u0634\u062a\u0631\u06a9",level:2}],s={toc:m},u="wrapper";function k(t){let{components:e,...l}=t;return(0,n.kt)(u,(0,r.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u0645\u0642\u062f\u0645\u0647"},"\u0645\u0642\u062f\u0645\u0647"),(0,n.kt)("p",null,"\u062f\u0631 \u0627\u06cc\u0646 \u0642\u0633\u0645\u062a \u06af\u0632\u0627\u0631\u0634\u0627\u062a\u06cc \u0627\u0632 \u0639\u0645\u0644\u06a9\u0631\u062f \u0628\u062e\u0634\u200c\u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u0633\u06cc\u0633\u062a\u0645 \u0628\u0635\u0648\u0631\u062a \u0632\u0646\u062f\u0647 \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f\u060c\u0627\u06cc\u0646 \u0628\u062e\u0634 \u0634\u0627\u062e\u0635\u200c\u0647\u0627\u06cc \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u0645\u0627\u0646\u06cc\u062a\u0648\u0631\u06cc\u0646\u06af \u0645\u0631\u06a9\u0632\u062a\u0645\u0627\u0633 \u0631\u0627 \u0628\u0647 \u0634\u06a9\u0644 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u062f\u0631 \u0627\u062e\u062a\u06cc\u0627\u0631 \u0645\u062f\u06cc\u0631 \u0633\u06cc\u0633\u062a\u0645 \u0642\u0631\u0627\u0631 \u0645\u06cc\u200c\u062f\u0647\u062f \u0648 \u0645\u062f\u06cc\u0631 \u0633\u06cc\u0633\u062a\u0645 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627\u06cc \u062f\u0644\u062e\u0648\u0627\u0647 \u062e\u0648\u062f \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u0648 \u0635\u0641\u062d\u0647\u200c\u0627\u06cc \u0634\u062e\u0635\u06cc\u200c\u0633\u0627\u0632\u06cc \u0634\u062f\u0647 \u0631\u0627 \u0637\u0631\u0627\u062d\u06cc \u06a9\u0646\u062f."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"dashboard",src:a(31535).Z,width:"1350",height:"627"})),(0,n.kt)("h2",{id:"\u0627\u062c\u0632\u0627\u06cc-\u0645\u0627\u0646\u06cc\u062a\u0648\u0631\u06cc\u0646\u06af"},"\u0627\u062c\u0632\u0627\u06cc \u0645\u0627\u0646\u06cc\u062a\u0648\u0631\u06cc\u0646\u06af"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u062c\u0639\u0628\u0647 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u200c\u0647\u0627"),": \u0645\u062d\u0644\u06cc \u06a9\u0647 \u062a\u0645\u0627\u0645\u06cc \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627\u06cc \u0645\u0648\u062c\u0648\u062f \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f(\u0628\u0627 \u06a9\u0644\u06cc\u06a9 \u0628\u0631 \u0631\u0648\u06cc \u2795 \u062f\u0631 \u0628\u0627\u0644\u0627 \u0633\u0645\u062a \u0631\u0627\u0633\u062a \u062c\u0639\u0628\u0647 \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a"),": \u0647\u0631 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0645\u0633\u0626\u0648\u0644 \u0646\u0645\u0627\u06cc\u0634 \u0634\u0627\u062e\u0635 \u0648 \u06af\u0632\u0627\u0631\u0634\u06cc \u062e\u0627\u0635\u06cc \u0645\u06cc\u200c\u0628\u0627\u0634\u062f.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u067e\u0644\u0627\u062a \u0637\u0631\u0627\u062d\u06cc"),": \u0635\u0641\u062d\u0647 \u0633\u0641\u06cc\u062f \u0632\u0645\u06cc\u0646\u0647 \u0645\u0627\u0646\u06cc\u062a\u0648\u0631\u06cc\u0646\u06af \u0627\u0633\u062a.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u0635\u0641\u062d\u0647\u200c\u200c\u0628\u0646\u062f\u06cc"),": \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u06a9\u0644\u06cc\u062f \u2795 \u062f\u0631 \u0628\u0627\u0644\u0627 \u0633\u0645\u062a\u200c\u0686\u067e \u0645\u06cc\u200c\u062a\u0648\u0627\u0646 \u0635\u0641\u062d\u0627\u062a \u0645\u062e\u062a\u0644\u0641\u06cc \u0628\u0647 \u062c\u0647\u062a \u062f\u0633\u062a\u0647\u200c\u0628\u0646\u062f\u06cc \u0648 \u0627\u06cc\u062c\u0627\u062f \u06af\u0632\u0627\u0631\u0634\u0627\u062a  \u0645\u062e\u062a\u0644\u0641 \u0627\u06cc\u062c\u0627\u062f \u06a9\u0631\u062f.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u06a9\u0644\u06cc\u062f \u0630\u062e\u06cc\u0631\u0647"),": \u0647\u0631\u06af\u0648\u0646\u0647 \u062a\u063a\u06cc\u06cc\u0631 \u062f\u0631 \u0645\u062d\u06cc\u0637 \u0648\u06cc\u0631\u0627\u06cc\u0634\u06af\u0631 \u0645\u0627\u0646\u06cc\u062a\u0648\u0631\u06cc\u0646\u06af\u060c \u0645\u062d\u0644\u06cc \u0627\u0633\u062a \u0648 \u0641\u0642\u0637 \u0628\u0627 \u0632\u062f\u0646 \u06a9\u0644\u06cc\u062f \u0630\u062e\u06cc\u0631\u0647 \u062f\u0631 \u0633\u06cc\u0633\u062a\u0645\u060c \u0630\u062e\u06cc\u0631\u0647 \u0648 \u0627\u062c\u0631\u0627 \u0645\u06cc\u200c\u06af\u0631\u062f\u062f.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u06a9\u0644\u06cc\u062f \u0631\u0627\u0647\u0646\u0645\u0627"),": \u0627\u0628\u0632\u0627\u0631\u06cc \u0628\u0631\u0627\u06cc \u0631\u0627\u0647\u0646\u0645\u0627\u06cc\u06cc \u0627\u062c\u0632\u0627\u06cc \u0645\u0627\u0646\u06cc\u062a\u0648\u0631\u06cc\u0646\u06af \u0627\u0633\u062a."))),(0,n.kt)("h2",{id:"\u0639\u0645\u0644\u06cc\u0627\u062a\u0647\u0627-\u062f\u0631-\u0628\u062e\u0634-\u0645\u0627\u0646\u06cc\u062a\u0648\u0631\u06cc\u0646\u06af"},"\u0639\u0645\u0644\u06cc\u0627\u062a\u200c\u0647\u0627 \u062f\u0631 \u0628\u062e\u0634 \u0645\u0627\u0646\u06cc\u062a\u0648\u0631\u06cc\u0646\u06af"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u06a9\u0634\u06cc\u062f\u0646 \u0648 \u0631\u0647\u0627\u06a9\u0631\u062f\u0646"),": \u0628\u0631\u0627\u06cc \u0627\u0636\u0627\u0641\u0647\u200c\u200c\u06a9\u0631\u062f\u0646 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0628\u0647 \u067e\u0644\u0627\u062a\u060c \u0646\u062e\u0633\u062a \u0622\u0646 \u0631\u0627 \u0627\u0632 \u062c\u0639\u0628\u0647 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627 \u0628\u0627 \u0645\u0627\u0648\u0633 \u0628\u06af\u06cc\u0631\u06cc\u062f \u0648 \u0628\u0647 \u0631\u0648\u06cc \u067e\u0644\u0627\u062a \u0645\u0646\u062a\u0642\u0644 \u0648 \u0631\u0647\u0627 \u0646\u0645\u0627\u06cc\u06cc\u062f.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u062d\u0630\u0641 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a"),": \u0628\u0631\u0631\u0648\u06cc \u06af\u0632\u06cc\u0646\u0647 Action \u06a9\u0647 \u062f\u0631 \u0646\u0648\u0627\u0631 \u0628\u0627\u0644\u0627\u06cc\u06cc \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0628\u0627 \u0633\u0647\u200c\u0646\u0642\u0637\u0647 \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u0634\u062f\u0647 \u06a9\u0644\u06cc\u06a9 \u06a9\u0631\u062f\u0647 \u0648 \u0628\u0627 \u0646\u0645\u0627\u06cc\u0634 Remove \u0628\u0631\u0631\u0648\u06cc \u0622\u0646 \u06a9\u0644\u06cc\u06a9 \u06a9\u0646\u06cc\u062f.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u062a\u063a\u06cc\u06cc\u0631 \u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a"),": \u0628\u0631\u0631\u0648\u06cc \u06af\u0632\u06cc\u0646\u0647 Action \u06a9\u0647 \u062f\u0631 \u0646\u0648\u0627\u0631 \u0628\u0627\u0644\u0627\u06cc\u06cc \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0628\u0627 \u0633\u0647\u200c\u0646\u0642\u0637\u0647 \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u0634\u062f\u0647 \u06a9\u0644\u06cc\u06a9 \u06a9\u0631\u062f\u0647 \u0648 \u0628\u0627 \u0646\u0645\u0627\u06cc\u0634 Edit \u0628\u0631\u0631\u0648\u06cc \u0622\u0646 \u06a9\u0644\u06cc\u06a9 \u06a9\u0646\u06cc\u062f.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u062c\u0627\u0628\u062c\u0627\u200c\u200c\u06a9\u0631\u062f\u0646 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a"),": \u06a9\u0644\u06cc\u062f \u0645\u0627\u0648\u0633 \u0631\u0627 \u0631\u0648\u06cc \u0627\u0633\u0645 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a (\u0646\u0648\u0627\u0631 \u0628\u0627\u0644\u0627) \u0641\u0634\u0631\u062f\u0647 \u0646\u06af\u0647 \u062f\u0627\u0631\u06cc\u062f \u0648 \u0622\u0646 \u0631\u0627 \u062c\u0627\u0628\u062c\u0627 \u06a9\u0646\u06cc\u062f.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u0627\u0641\u0632\u0648\u062f\u0646 \u0635\u0641\u062d\u0647 \u062c\u062f\u06cc\u062f"),": \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u06a9\u0644\u06cc\u062f \u2795 \u062f\u0631 \u0628\u0627\u0644\u0627 \u0633\u0645\u062a\u200c\u0686\u067e \u0645\u06cc\u200c\u062a\u0648\u0627\u0646 \u0635\u0641\u062d\u0627\u062a \u0645\u062e\u062a\u0644\u0641\u06cc \u0627\u06cc\u062c\u0627\u062f \u06a9\u0631\u062f.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u062d\u0630\u0641 \u0635\u0641\u062d\u0647"),": \u0628\u0627 \u06a9\u0644\u06cc\u06a9 \u0628\u0631\u0631\u0648\u06cc \u062f\u06a9\u0645\u0647 \u0636\u0631\u0628\u062f\u0631 \u062f\u0631 \u06af\u0648\u0634\u0647 \u0633\u0645\u062a \u0686\u067e \u0647\u0631 Tab \u0645\u06cc\u200c\u062a\u0648\u0627\u0646 \u0635\u0641\u062d\u0647 \u0631\u0627 \u062d\u0630\u0641 \u06a9\u0631\u062f.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u062a\u063a\u06cc\u06cc\u0631 \u0627\u0646\u062f\u0627\u0632\u0647 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a"),": \u0628\u0627 \u06a9\u0644\u06cc\u06a9 \u0628\u0631\u0631\u0648\u06cc \u0633\u0647 \u200c\u062e\u0637 \u200c\u0645\u0648\u0631\u0628 \u062f\u0631 \u06af\u0648\u0634\u0647 \u067e\u0627\u06cc\u06cc\u0646 \u0633\u0645\u062a \u0686\u067e \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0645\u06cc\u200c\u062a\u0648\u0627\u0646 \u0627\u0646\u062f\u0627\u0632\u0647 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0631\u0627 \u062a\u063a\u06cc\u06cc\u0631 \u062f\u0627\u062f.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u0630\u062e\u06cc\u0631\u0647 \u062a\u063a\u06cc\u06cc\u0631\u0627\u062a \u0635\u0641\u062d\u0647"),": \u062f\u0631 \u0642\u0633\u0645\u062a \u0628\u0627\u0644\u0627 \u0633\u0645\u062a \u0686\u067e \u0628\u0631\u0631\u0648\u06cc \u06af\u0632\u06cc\u0646\u0647 Save \u06a9\u0644\u06cc\u06a9 \u0646\u0645\u0627\u06cc\u06cc\u062f."))),(0,n.kt)("admonition",{title:"\u0627\u0637\u0644\u0627\u0639\u0627\u062a",type:"info"},(0,n.kt)("p",{parentName:"admonition"}," \u062f\u0631  \u062f\u0627\u0634\u0628\u0648\u0631\u062f \u0627\u0645\u06a9\u0627\u0646 \u062a\u062d\u0644\u06cc\u0644 \u062f\u0627\u062f\u0647\u200c\u0647\u0627 \u062d\u062f\u0627\u06a9\u062b\u0631 \u062a\u0627 \u06f2\u06f4 \u0633\u0627\u0639\u062a \u06af\u0630\u0634\u062a\u0647 \u0648\u062c\u0648\u062f \u062f\u0627\u0631\u062f \u0648 \u062f\u0631\u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0631\u0648\u0632\u0647\u0627\u06cc \u06af\u0630\u0634\u062a\u0647 \u0645\u06cc\u200c\u0628\u0627\u0634\u062f \u0628\u0627\u06cc\u062f \u0627\u0632 \u0628\u062e\u0634 \u06af\u0632\u0627\u0631\u0634\u200c\u0647\u0627\u06cc \u06a9\u0627\u0631\u0628\u0631\u06cc \u0627\u0642\u062f\u0627\u0645 \u06a9\u0631\u062f.")),(0,n.kt)("h2",{id:"\u062f\u0633\u062a\u0647\u0628\u0646\u062f\u06cc-\u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u0647\u0627"},"\u062f\u0633\u062a\u0647\u200c\u0628\u0646\u062f\u06cc \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627"),(0,n.kt)("p",null," ",(0,n.kt)("strong",{parentName:"p"},"\u0628\u0637\u0648\u0631 \u06a9\u0644 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627\u06cc \u062f\u0627\u0634\u0628\u0648\u0631\u062f \u0628\u0647 \u0633\u0647 \u0628\u062e\u0634 \u0627\u0635\u0644\u06cc \u062a\u0642\u0633\u06cc\u0645 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f")),(0,n.kt)("h3",{id:"\u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u0647\u0627\u06cc-\u0628\u0644\u0627\u062f\u0631\u0646\u06af"},"\u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627\u06cc \u0628\u0644\u0627\u062f\u0631\u0646\u06af"),(0,n.kt)("p",null,"\u0628\u0647 \u062f\u0633\u062a\u0647\u200c\u0627\u06cc \u0627\u0632 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627 \u06a9\u0647 \u062e\u0631\u0648\u062c\u06cc \u0622\u0646\u0647\u0627 \u062f\u0631 \u0644\u062d\u0638\u0647 \u0648 \u0628\u0627 \u062a\u0623\u062e\u06cc\u0631 \u0628\u0633\u06cc\u0627\u0631 \u06a9\u0645 \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f \u0628\u0644\u0627\u062f\u0631\u0646\u06af \u06af\u0641\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f\u060c \u0627\u06cc\u0646 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627 \u0634\u0627\u0645\u0644"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Trunk Status"),": \u0646\u0645\u0627\u06cc\u0634 \u0648\u0636\u0639\u06cc\u062a \u062a\u0631\u0627\u0646\u06a9\u200c\u0647\u0627 \u0631\u0627 \u0628\u0631\u0639\u0647\u062f\u0647 \u062f\u0627\u0631\u062f."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Server Stats"),": \u0627\u0631\u0627\u0626\u0647 \u06af\u0632\u0627\u0631\u0634\u06cc \u0627\u0632 \u0645\u0635\u0631\u0641 \u0645\u0646\u0627\u0628\u0639 \u0633\u0631\u0648\u0631(CPU \u060c RAM)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Exten Status"),": \u06af\u0632\u0627\u0631\u0634\u06cc \u0627\u0632 \u0648\u0636\u0639\u06cc\u062a \u062f\u0627\u062e\u0644\u06cc\u200c\u0647\u0627\u06cc \u0645\u0631\u06a9\u0632\u062a\u0645\u0627\u0633."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Agent Status"),": \u06af\u0632\u0627\u0631\u0634\u06cc \u0627\u0632 \u0648\u0636\u0639\u06cc\u062a \u0627\u067e\u0631\u0627\u062a\u0648\u0631\u200c\u0647\u0627\u06cc \u0645\u0631\u06a9\u0632\u062a\u0645\u0627\u0633.")),(0,n.kt)("h3",{id:"\u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u0647\u0627\u06cc-\u0645\u0631\u0628\u0648\u0637-\u0628\u0647-\u0635\u0641"},"\u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627\u06cc \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u0635\u0641"),(0,n.kt)("p",null,"\u0628\u0647 \u062f\u0633\u062a\u0647\u200c\u0627\u06cc \u0627\u0632 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u06a9\u0647 \u0628\u0637\u0648\u0631 \u062e\u0627\u0635 \u0628\u0647 \u062a\u062d\u0644\u06cc\u0644 \u0648 \u0628\u0631\u0631\u0633\u06cc \u06af\u0632\u0627\u0631\u0634\u0627\u062a \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u0635\u0641 \u0645\u06cc\u200c\u067e\u0631\u062f\u0627\u0632\u0646\u062f \u06af\u0648\u06cc\u0646\u062f\u060c \u0627\u06cc\u0646 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627 \u0634\u0627\u0645\u0644"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Avg. Handling Time"),": \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0632\u0645\u0627\u0646 \u0645\u06a9\u0627\u0644\u0645\u0647 \u062f\u0631 \u0635\u0641(\u0628\u0631\u200c\u062d\u0633\u0628 \u062b\u0627\u0646\u06cc\u0647)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Avg. Speed Answer"),": \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0632\u0645\u0627\u0646 \u067e\u0627\u0633\u062e\u06af\u0648\u06cc\u06cc \u0628\u0647 \u062a\u0645\u0627\u0633 \u062f\u0631 \u0635\u0641(\u0628\u0631\u062d\u0633\u0628 \u062b\u0627\u0646\u06cc\u0647)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Queue Call Rates"),": \u0627\u0631\u0627\u0626\u0647 \u06af\u0632\u0627\u0631\u0634\u06cc \u0627\u0632 \u0648\u0636\u0639\u06cc\u062a \u062a\u0645\u0627\u0633\u200c\u0647\u0627 \u0628\u0631\u0627\u0633\u0627\u0633 \u0634\u0627\u062e\u0635\u200c\u0647\u0627\u06cc \u0635\u0641 \u062f\u0631 \u0645\u0631\u06a9\u0632\u062a\u0645\u0627\u0633(\u0628\u0631 \u062d\u0633\u0628 \u062f\u0631\u0635\u062f)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Queue Statistics"),": \u0627\u0631\u0627\u0626\u0647 \u06af\u0632\u0627\u0631\u0634\u06cc \u0627\u0632 \u0648\u0636\u0639\u06cc\u062a \u062a\u0645\u0627\u0633\u200c\u0647\u0627 \u062f\u0631 \u0635\u0641(\u0628\u0631\u0627\u0633\u0627\u0633 \u062a\u0639\u062f\u0627\u062f)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Service Level"),": \u06cc\u06a9\u06cc \u0627\u0632 \u0634\u0627\u062e\u0636 \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u0635\u0641 \u0645\u06cc\u200c\u0628\u0627\u0634\u062f \u06a9\u0647 \u062f\u0631 \u0622\u06cc\u0646\u062f\u0647 \u0628\u0637\u0648\u0631 \u062f\u0642\u06cc\u0642\u200c\u062a\u0631 \u0628\u0631\u0631\u0633\u06cc \u0645\u06cc\u200c\u0634\u0648\u062f(\u0628\u0631\u062d\u0633\u0628 \u062f\u0631\u0635\u062f).")),(0,n.kt)("h3",{id:"\u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u0647\u0627\u06cc-\u0639\u0645\u0648\u0645\u06cc"},"\u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627\u06cc \u0639\u0645\u0648\u0645\u06cc"),(0,n.kt)("p",null,"\u0628\u0631\u062e\u06cc \u0627\u0632 \u0627\u06cc\u0646 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627 \u0627\u0645\u06a9\u0627\u0646 \u0627\u0631\u0627\u0626\u0647 \u06af\u0632\u0627\u0631\u0634 \u0628\u0631\u0631\u0648\u06cc \u0635\u0641 \u0648 \u062f\u0627\u062e\u0644\u06cc \u0631\u0627 \u062f\u0627\u0631\u0646\u062f \u0648 \u0645\u062d\u062f\u0648\u062f \u0628\u0647 \u06cc\u06a9\u06cc \u0646\u0645\u06cc\u200c\u0628\u0627\u0634\u0646\u062f\u060c\u062f\u06cc\u06af\u0631 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627 \u0646\u06cc\u0632 \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u06af\u0632\u0627\u0631\u0634\u0627\u062a \u06a9\u0644\u06cc \u0627\u0632 \u0645\u0631\u06a9\u0632\u062a\u0645\u0627\u0633 \u0645\u06cc\u200c\u0628\u0627\u0634\u0646\u062f \u0648 \u062f\u0631 \u0647\u06cc\u062c\u06a9\u062f\u0627\u0645 \u0627\u0632 \u062f\u0648 \u062f\u0633\u062a\u0647 \u0628\u0627\u0644\u0627 \u0642\u0631\u0627\u0631 \u0646\u0645\u06cc\u200c\u06af\u06cc\u0631\u0646\u062f.\u0627\u06cc\u0646 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627 \u0634\u0627\u0645\u0644"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Net Promoter Score"),": \u0627\u0631\u0627\u0626\u0647 \u06af\u0632\u0627\u0631\u0634\u06cc \u0627\u0632 \u0634\u0627\u062e\u0635 \u062e\u0627\u0644\u0635 \u062a\u0631\u0648\u06cc\u062c \u06a9\u0646\u0646\u062f\u06af\u0627\u0646(\u0628\u0631\u062d\u0633\u0628 \u062f\u0631\u0635\u062f)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Customer Satisfaction"),": \u0646\u0645\u0627\u06cc\u0634 \u06af\u0632\u0627\u0631\u0634\u06cc \u0627\u0632 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0631\u0636\u0627\u06cc\u062a \u0645\u0634\u062a\u0631\u06cc \u062f\u0631 \u0646\u0638\u0631\u0633\u0646\u062c\u06cc\u200c\u0647\u0627\u06cc \u0635\u0648\u0631\u062a \u06af\u0631\u0641\u062a\u0647(\u0628\u0631\u062d\u0633\u0628 \u0646\u0645\u0631\u0647)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Surveys"),": \u0627\u06cc\u0646 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0639\u0645\u0644\u06a9\u0631\u062f\u06cc \u0645\u0634\u0627\u0628\u0647 \u0628\u0627 Customer Satisfaction \u062f\u0627\u0631\u062f."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"HDD (Audio)"),": \u06af\u0632\u0627\u0631\u0634\u06cc \u0627\u0632 \u062d\u0627\u0641\u0638\u0647 \u0645\u0635\u0631\u0641\u200c\u0634\u062f\u0647 \u062a\u0648\u0633\u0637 \u0641\u0627\u06cc\u0644\u200c\u0647\u0627\u06cc \u0635\u0648\u062a\u06cc."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"HDD (All)"),": \u06af\u0632\u0627\u0631\u0634\u06cc \u0627\u0632 \u0648\u0636\u0639\u06cc\u062a \u062d\u0627\u0641\u0638\u0647 \u0633\u0631\u0648\u0631."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Call Duration"),": \u0627\u0631\u0627\u0626\u0647 \u06af\u0632\u0627\u0631\u0634\u06cc \u06a9\u0644\u06cc \u0627\u0632 \u0645\u062f\u062a \u0632\u0645\u0627\u0646 \u0645\u06a9\u0627\u0644\u0645\u0647 \u0648 \u0627\u0646\u062a\u0638\u0627\u0631(\u0628\u0631\u062d\u0633\u0628 \u062b\u0627\u0646\u06cc\u0647)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Call Status"),": \u0627\u0631\u0627\u0626\u0647 \u06af\u0632\u0627\u0631\u0634\u06cc \u06a9\u0644\u06cc \u0627\u0632 \u0648\u0636\u0639\u06cc\u062a \u062a\u0645\u0627\u0633\u200c\u0647\u0627(\u067e\u0627\u0633\u062e\u200c\u062f\u0627\u062f\u0647\u200c\u0634\u062f\u0647\u060c \u067e\u0627\u0633\u062e\u200c\u062f\u0627\u062f\u0647\u200c\u0646\u0634\u062f\u0647\u060c\u0645\u0634\u063a\u0648\u0644\u060c\u0645\u0633\u062f\u0648\u062f\u0634\u062f\u0647) \u062f\u0631 \u0645\u0631\u06a9\u0632\u062a\u0645\u0627\u0633."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Call Direction"),": \u0627\u0631\u0627\u0626\u0647 \u06af\u0632\u0627\u0634\u06cc \u0627\u0632 \u0646\u0648\u0639 \u062a\u0645\u0627\u0633\u200c\u0647\u0627(\u0648\u0631\u0648\u062f\u06cc\u060c\u062e\u0631\u0648\u062c\u06cc) \u062f\u0631 \u0645\u0631\u06a9\u0632\u062a\u0645\u0627\u0633."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"SPIT"),": \u0646\u0645\u0627\u06cc\u0634 \u062a\u0645\u0627\u0633\u200c\u0647\u0627\u06cc \u0628\u0647\u0645\u0646\u06cc \u062f\u0631 \u0645\u0631\u06a9\u0632\u062a\u0645\u0627\u0633.")),(0,n.kt)("h2",{id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc-\u0645\u0634\u062a\u0631\u06a9"},"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc \u0645\u0634\u062a\u0631\u06a9"),(0,n.kt)("p",null,"\u062f\u0631 \u0628\u062e\u0634 \u0648\u06cc\u0631\u0627\u06cc\u0634 \u062a\u0645\u0627\u0645\u06cc \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627\u06cc \u0645\u0627\u0646\u06cc\u062a\u0648\u0631\u06cc\u0646\u06af \u067e\u0627\u0631\u0645\u062a\u0631\u200c\u0647\u0627\u06cc\u06cc \u0645\u0634\u062a\u0631\u06a9 \u0648\u062c\u0648\u062f \u062f\u0627\u0631\u0646\u062f \u06a9\u0647 \u0628\u0647 \u0628\u0631\u0631\u0633\u06cc \u0622\u0646\u0647\u0627 \u0645\u06cc\u200c\u067e\u0631\u062f\u0627\u0632\u06cc\u0645"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Title"),": \u0627\u06cc\u0646 \u067e\u0627\u0631\u0627\u0645\u062a\u0631 \u0646\u0627\u0645 \u0646\u0645\u0627\u06cc\u0634\u06cc \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u062f\u0631 \u0635\u0641\u062d\u0647 \u0631\u0627 \u0645\u0634\u062e\u0635 \u0645\u06cc\u200c\u06a9\u0646\u062f.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"View as"),": \u062f\u0631 \u0628\u062e\u0634 \u0645\u0627\u0646\u06cc\u062a\u0648\u0631\u06cc\u0646\u06af \u062d\u0627\u0644\u0627\u062a \u0645\u062e\u062a\u0644\u0641\u06cc \u0628\u0631\u0627\u06cc \u0646\u0645\u0627\u06cc\u0634 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u200c\u0647\u0627 \u0648\u062c\u0648\u062f \u062f\u0627\u0631\u062f \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0627\u06cc\u0646 \u067e\u0627\u0631\u0627\u0645\u062a\u0631 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646 \u0628\u06cc\u0646 \u062d\u0627\u0644\u062a\u200c\u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u0646\u0645\u0627\u06cc\u0634 \u0633\u0648\u06cc\u06cc\u062c \u06a9\u0631\u062f\u060c\u0627\u06cc\u0646 \u062d\u0627\u0644\u0627\u062a \u0634\u0627\u0645\u0644"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Pie Chart"),": \u0646\u0645\u0627\u06cc\u0634 \u0646\u0645\u0648\u062f\u0627\u0631 \u062f\u0627\u06cc\u0631\u0647\u200c\u0627\u06cc."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Bar Chart"),": \u0646\u0645\u0627\u06cc\u0634 \u0646\u0645\u0648\u062f\u0627\u0631 \u0645\u06cc\u0644\u0647\u200c\u0627\u06cc."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Line Chart"),": \u0646\u0645\u0627\u06cc\u0634 \u0646\u0645\u0648\u062f\u0627\u0631 \u062e\u0637\u06cc."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Table"),": \u0646\u0645\u0627\u06cc\u0634 \u0628\u0635\u0648\u0631\u062a \u062c\u062f\u0648\u0644\u06cc."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Number"),": \u0646\u0645\u0627\u06cc\u0634 \u0628\u0635\u0648\u0631\u062a \u0639\u062f\u062f\u06cc."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Column"),": \u0646\u0645\u0627\u06cc\u0634 \u0633\u062a\u0648\u0646\u06cc."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Row"),": \u0646\u0645\u0627\u06cc\u0634 \u0631\u062f\u06cc\u0641\u06cc."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Grid"),": \u0646\u0645\u0627\u06cc\u0634 \u062a\u0648\u0631\u06cc."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Items"),": \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0627\u06cc\u0646 \u067e\u0627\u0631\u0645\u062a\u0631 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646 \u0645\u0634\u062e\u0635 \u06a9\u0631\u062f \u062f\u0642\u06cc\u0642\u0627 \u06a9\u062f\u0627\u0645 \u0634\u0627\u062e\u0635 \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u06af\u0632\u0627\u0631\u0634 \u062f\u0631 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u0634\u0648\u062f."))))}k.isMDXComponent=!0},31535:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/dashboard-c17c8b7e2b8ea878bc4d1750e82bc418.JPG"}}]);