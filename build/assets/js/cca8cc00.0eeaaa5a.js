"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[5858],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[m]="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81205:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={},l="Page",p={unversionedId:"simotel/callcenter-docs/dialplan/components/page",id:"simotel/callcenter-docs/dialplan/components/page",title:"Page",description:"\u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a page \u0639\u0628\u0627\u0631\u062a \u0627\u0633\u062a \u0627\u0632 \u0628\u0631\u0642\u0631\u0627\u0631\u06cc \u062a\u0645\u0627\u0633 \u0647\u0645\u0632\u0645\u0627\u0646 \u0628\u0627 \u06cc\u06a9 \u06cc\u0627 \u0686\u0646\u062f \u0645\u0642\u0635\u062f\u060c \u0628\u062f\u0648\u0646 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u062a\u0627\u06cc\u06cc\u062f \u0645\u0642\u0635\u062f. \u067e\u0633 \u0627\u0632 \u0628\u0631\u0642\u0631\u0627\u0631\u06cc \u062a\u0645\u0627\u0633\u060c \u062f\u0631 \u0645\u0642\u0635\u062f \u0628\u0644\u0646\u062f\u06af\u0648 \u0628\u0627\u0632 \u0645\u06cc\u200c\u0634\u0648\u062f \u0648 \u0635\u062f\u0627\u06cc \u062a\u0645\u0627\u0633\u200c\u06af\u06cc\u0631\u0646\u062f\u0647 \u0631\u0627 \u067e\u062e\u0634 \u0645\u06cc\u200c\u06a9\u0646\u062f. \u0627\u0632 \u062c\u0645\u0644\u0647 \u0645\u0648\u0627\u0631\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0622\u0646\u060c \u0627\u06cc\u062c\u0627\u062f \u06a9\u0646\u0641\u0631\u0627\u0646\u0633 \u0648 \u0627\u0637\u0644\u0627\u0639\u200c\u200c\u0631\u0633\u0627\u0646\u06cc \u0639\u0645\u0648\u0645\u06cc \u0627\u0633\u062a. \u0628\u0627 \u0642\u0637\u0639 \u062a\u0645\u0627\u0633 \u062a\u0648\u0633\u0637 \u062a\u0645\u0627\u0633\u200c\u06af\u06cc\u0631\u0646\u062f\u0647\u060c \u062a\u0645\u0627\u0633 \u062a\u0645\u0627\u0645\u06cc \u0627\u0641\u0631\u0627\u062f \u0642\u0637\u0639 \u0645\u06cc\u200c\u0634\u0648\u062f.",source:"@site/docs/simotel/3- callcenter-docs/6-dialplan/2-components/35-page.md",sourceDirName:"simotel/3- callcenter-docs/6-dialplan/2-components",slug:"/simotel/callcenter-docs/dialplan/components/page",permalink:"/docs/simotel/callcenter-docs/dialplan/components/page",draft:!1,tags:[],version:"current",sidebarPosition:35,frontMatter:{},sidebar:"Docs",previous:{title:"ChanSpy",permalink:"/docs/simotel/callcenter-docs/dialplan/components/chanspy"},next:{title:"\u0645\u062a\u063a\u06cc\u0631\u0647\u0627\u06cc \u0648\u06cc\u0631\u0627\u06cc\u0634\u06af\u0631",permalink:"/docs/simotel/callcenter-docs/dialplan/variables"}},i={},c=[{value:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a",id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627-\u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a",level:2}],s={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"page"},"Page"),(0,a.kt)("p",null,"\u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a page \u0639\u0628\u0627\u0631\u062a \u0627\u0633\u062a \u0627\u0632 \u0628\u0631\u0642\u0631\u0627\u0631\u06cc \u062a\u0645\u0627\u0633 \u0647\u0645\u0632\u0645\u0627\u0646 \u0628\u0627 \u06cc\u06a9 \u06cc\u0627 \u0686\u0646\u062f \u0645\u0642\u0635\u062f\u060c \u0628\u062f\u0648\u0646 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u062a\u0627\u06cc\u06cc\u062f \u0645\u0642\u0635\u062f. \u067e\u0633 \u0627\u0632 \u0628\u0631\u0642\u0631\u0627\u0631\u06cc \u062a\u0645\u0627\u0633\u060c \u062f\u0631 \u0645\u0642\u0635\u062f \u0628\u0644\u0646\u062f\u06af\u0648 \u0628\u0627\u0632 \u0645\u06cc\u200c\u0634\u0648\u062f \u0648 \u0635\u062f\u0627\u06cc \u062a\u0645\u0627\u0633\u200c\u06af\u06cc\u0631\u0646\u062f\u0647 \u0631\u0627 \u067e\u062e\u0634 \u0645\u06cc\u200c\u06a9\u0646\u062f. \u0627\u0632 \u062c\u0645\u0644\u0647 \u0645\u0648\u0627\u0631\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0622\u0646\u060c \u0627\u06cc\u062c\u0627\u062f \u06a9\u0646\u0641\u0631\u0627\u0646\u0633 \u0648 \u0627\u0637\u0644\u0627\u0639\u200c\u200c\u0631\u0633\u0627\u0646\u06cc \u0639\u0645\u0648\u0645\u06cc \u0627\u0633\u062a. \u0628\u0627 \u0642\u0637\u0639 \u062a\u0645\u0627\u0633 \u062a\u0648\u0633\u0637 \u062a\u0645\u0627\u0633\u200c\u06af\u06cc\u0631\u0646\u062f\u0647\u060c \u062a\u0645\u0627\u0633 \u062a\u0645\u0627\u0645\u06cc \u0627\u0641\u0631\u0627\u062f \u0642\u0637\u0639 \u0645\u06cc\u200c\u0634\u0648\u062f."),(0,a.kt)("h2",{id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627-\u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a"},"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Extension"),": \u0627\u0646\u062a\u062e\u0627\u0628 \u062f\u0627\u062e\u0644\u06cc \u0628\u0631\u0627\u06cc \u0627\u0639\u0645\u0627\u0644 paging \u0627\u0633\u062a. \u062f\u0631\u0635\u0648\u0631\u062a\u06cc\u200c\u200c\u06a9\u0647 \u0647\u06cc\u0686 \u062f\u0627\u062e\u0644\u06cc\u200c\u0627\u06cc \u0627\u0646\u062a\u062e\u0627\u0628 \u0646\u0634\u0648\u062f\u060c \u062a\u0645\u0627\u0633 \u0628\u0647 \u0633\u0645\u062a \u062f\u0627\u062e\u0644\u06cc \u0645\u0646\u0637\u0628\u0642 \u0628\u0627 \u0634\u0645\u0627\u0631\u0647 \u0648\u0627\u0631\u062f\u0634\u062f\u0647 \u0627\u0631\u0633\u0627\u0644 \u0645\u06cc\u200c\u200c\u06af\u0631\u062f\u062f.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Timeout (sec)"),": \u0645\u062f\u062a \u0632\u0645\u0627\u0646 \u0632\u0646\u06af \u062e\u0648\u0631\u062f\u0646 \u062f\u0627\u062e\u0644\u06cc (\u0628\u0631\u062d\u0633\u0628 \u062b\u0627\u0646\u06cc\u0647) \u0627\u0633\u062a.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Skip"),": \u0628\u0631\u0627\u06cc \u062a\u0639\u06cc\u06cc\u0646 \u062a\u0639\u062f\u0627\u062f \u0631\u0642\u0645\u200c\u200c\u0647\u0627\u06cc\u06cc \u0627\u0633\u062a \u06a9\u0647 \u0628\u0627\u06cc\u062f \u0627\u0632 \u0627\u0628\u062a\u062f\u0627\u06cc \u0634\u0645\u0627\u0631\u0647 \u0648\u0627\u0631\u062f\u0634\u062f\u0647 \u062d\u0630\u0641 \u06af\u0631\u062f\u062f. \u0633\u067e\u0633 \u0634\u0645\u0627\u0631\u0647 \u062c\u062f\u06cc\u062f \u0628\u0647\u200c\u200c\u0639\u0646\u0648\u0627\u0646 \u0634\u0645\u0627\u0631\u0647 \u0645\u0642\u0635\u062f \u062f\u0631\u0646\u0638\u0631 \u06af\u0631\u0641\u062a\u0647 \u0645\u06cc\u200c\u200c\u0634\u0648\u062f.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Prefix"),": \u0628\u0631\u0627\u06cc \u0627\u0641\u0632\u0648\u062f\u0646 \u0639\u062f\u062f \u062f\u0631\u062c\u200c\u0634\u062f\u0647 \u062f\u0631 \u0627\u06cc\u0646 \u06af\u0632\u06cc\u0646\u0647 \u0642\u0628\u0644 \u0627\u0632 \u0634\u0645\u0627\u0631\u0647 \u0648\u0627\u0631\u062f\u0634\u062f\u0647 \u0627\u0633\u062a. \u0633\u067e\u0633 \u0634\u0645\u0627\u0631\u0647 \u062c\u062f\u06cc\u062f \u0628\u0647\u200c\u200c\u0639\u0646\u0648\u0627\u0646 \u0634\u0645\u0627\u0631\u0647 \u0645\u0642\u0635\u062f \u062f\u0631\u0646\u0638\u0631 \u06af\u0631\u0641\u062a\u0647 \u0645\u06cc\u200c\u200c\u0634\u0648\u062f.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Options"),": \u0634\u0627\u0645\u0644 \u062a\u0646\u0638\u06cc\u0645\u0627\u062a \u0627\u0633\u062a."))))}u.isMDXComponent=!0}}]);