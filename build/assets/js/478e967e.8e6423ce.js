"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[57595],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},20331:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},l="System Logs",i={unversionedId:"simotel/callcenter-docs/maintenance/system_logs",id:"simotel/callcenter-docs/maintenance/system_logs",title:"System Logs",description:"\u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0627\u06cc\u0646 \u0628\u062e\u0634 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646 \u062a\u0645\u0627\u0645\u06cc \u0644\u0627\u06af\u200c\u0647\u0627\u06cc \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u0633\u0631\u0648\u06cc\u0633\u200c\u0647\u0627\u06cc \u0645\u0631\u06a9\u0632\u062a\u0645\u0627\u0633 \u0631\u0627 \u0628\u0635\u0648\u0631\u062a \u0622\u0646\u0644\u0627\u06cc\u0646 \u0645\u0634\u0627\u0647\u062f\u0647 \u06a9\u0631\u062f \u0648 \u062f\u06cc\u06af\u0631 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u0627\u062a\u0635\u0627\u0644 \u0628\u0647 shell \u0644\u06cc\u0646\u0648\u06a9\u0633 \u0646\u0645\u06cc\u200c\u0628\u0627\u0634\u062f\u060c\u062f\u0631 \u0627\u06cc\u0646 \u0628\u062e\u0634 \u0627\u0645\u06a9\u0627\u0646 \u0630\u062e\u06cc\u0631\u0647 \u0644\u0627\u06af\u200c\u0647\u0627 \u0648 \u0627\u0631\u0627\u0626\u0647 \u062f\u0631 \u0642\u0627\u0644\u0628 \u06cc\u06a9 \u0641\u0627\u06cc\u0644 \u0646\u06cc\u0632 \u0641\u0631\u0627\u0647\u0645 \u0634\u062f\u0647 \u0627\u0633\u062a.\u067e\u0633 \u0627\u0632 \u0645\u0634\u062e\u0635 \u06a9\u0631\u062f\u0646 \u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627 \u0628\u0627 \u06a9\u0644\u06cc\u06a9 \u0628\u0631 \u0631\u0648\u06cc \u062f\u06a9\u0645\u0647 Start \u0633\u06cc\u0633\u062a\u0645 \u0634\u0631\u0648\u0639 \u0628\u0647 \u0646\u0645\u0627\u06cc\u0634 \u0644\u0627\u06af\u200c\u0647\u0627 \u0645\u06cc\u200c\u06a9\u0646\u062f.",source:"@site/docs/simotel/3- callcenter-docs/8-maintenance/10-system_logs.md",sourceDirName:"simotel/3- callcenter-docs/8-maintenance",slug:"/simotel/callcenter-docs/maintenance/system_logs",permalink:"/docs/simotel/callcenter-docs/maintenance/system_logs",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"Docs",previous:{title:"API Logs",permalink:"/docs/simotel/callcenter-docs/maintenance/api_logs"},next:{title:"Backup",permalink:"/docs/simotel/callcenter-docs/control-panel/backup"}},c={},s=[{value:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc SimoTel Logs",id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc-simotel-logs",level:2}],p={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"system-logs"},"System Logs"),(0,a.kt)("p",null,"\u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0627\u06cc\u0646 \u0628\u062e\u0634 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646 \u062a\u0645\u0627\u0645\u06cc \u0644\u0627\u06af\u200c\u0647\u0627\u06cc \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u0633\u0631\u0648\u06cc\u0633\u200c\u0647\u0627\u06cc \u0645\u0631\u06a9\u0632\u062a\u0645\u0627\u0633 \u0631\u0627 \u0628\u0635\u0648\u0631\u062a \u0622\u0646\u0644\u0627\u06cc\u0646 \u0645\u0634\u0627\u0647\u062f\u0647 \u06a9\u0631\u062f \u0648 \u062f\u06cc\u06af\u0631 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u0627\u062a\u0635\u0627\u0644 \u0628\u0647 shell \u0644\u06cc\u0646\u0648\u06a9\u0633 \u0646\u0645\u06cc\u200c\u0628\u0627\u0634\u062f\u060c\u062f\u0631 \u0627\u06cc\u0646 \u0628\u062e\u0634 \u0627\u0645\u06a9\u0627\u0646 \u0630\u062e\u06cc\u0631\u0647 \u0644\u0627\u06af\u200c\u0647\u0627 \u0648 \u0627\u0631\u0627\u0626\u0647 \u062f\u0631 \u0642\u0627\u0644\u0628 \u06cc\u06a9 \u0641\u0627\u06cc\u0644 \u0646\u06cc\u0632 \u0641\u0631\u0627\u0647\u0645 \u0634\u062f\u0647 \u0627\u0633\u062a.\u067e\u0633 \u0627\u0632 \u0645\u0634\u062e\u0635 \u06a9\u0631\u062f\u0646 \u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627 \u0628\u0627 \u06a9\u0644\u06cc\u06a9 \u0628\u0631 \u0631\u0648\u06cc \u062f\u06a9\u0645\u0647 ",(0,a.kt)("strong",{parentName:"p"},"Start")," \u0633\u06cc\u0633\u062a\u0645 \u0634\u0631\u0648\u0639 \u0628\u0647 \u0646\u0645\u0627\u06cc\u0634 \u0644\u0627\u06af\u200c\u0647\u0627 \u0645\u06cc\u200c\u06a9\u0646\u062f."),(0,a.kt)("h2",{id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc-simotel-logs"},"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc SimoTel Logs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Channel"),": \u062f\u0631 \u0627\u06cc\u0646 \u0628\u062e\u0634 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f \u0633\u0631\u0648\u06cc\u0633 \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u062e\u0648\u062f \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Grep"),": \u062f\u0631 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u0627\u0646\u062c\u0627\u0645 \u062c\u0633\u062a\u062c\u0648 \u0648 \u067e\u06cc\u062f\u0627 \u06a9\u0631\u062f\u0646 \u06a9\u0644\u06cc\u062f \u0648\u0627\u0698\u0647 \u062e\u0627\u0635\u06cc \u062f\u0631 \u0644\u0627\u06af\u200c\u0647\u0627 \u062f\u0627\u0631\u06cc\u062f\u060c \u06a9\u0644\u06cc\u062f\u0648\u0627\u0698\u0647 \u062e\u0648\u062f \u0631\u0627 \u062f\u0631 \u0627\u06cc\u0646 \u0642\u0633\u0645\u062a \u0642\u0631\u0627\u0631 \u062f\u0647\u06cc\u062f.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Level"),": \u0633\u0637\u062d \u0646\u0645\u0627\u06cc\u0634 \u06af\u0632\u0627\u0631\u0634\u0627\u062a \u062f\u0631 \u0627\u06cc\u0646 \u0642\u0633\u0645\u062a \u0645\u0634\u062e\u0635 \u0645\u06cc\u200c\u0634\u0648\u062f\u060c \u0627\u0632 ALL \u0628\u0647 \u0633\u0645\u062a NOTSET \u0645\u0642\u062f\u0627\u0631 \u0644\u0627\u06af\u200c\u0647\u0627\u06cc \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u0634\u062f \u06a9\u0645 \u0645\u06cc\u200c\u0634\u0648\u062f.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Start"),": \u0627\u06cc\u0646 \u062f\u06a9\u0645\u0647 \u0648\u0638\u06cc\u0641\u0647 \u0634\u0631\u0648\u0639 \u0644\u0627\u06af\u200c\u06af\u06cc\u0631\u06cc \u0631\u0627 \u0628\u0631\u0639\u0647\u062f\u0647 \u062f\u0627\u0631\u062f.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Clear"),": \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0627\u06cc\u0646 \u062f\u06a9\u0645\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646 \u0635\u0641\u062d\u0647 \u06a9\u0646\u0633\u0648\u0644 \u0631\u0627 \u067e\u0627\u06a9 \u06a9\u0631\u062f \u0648 \u0644\u0627\u06af\u200c\u0647\u0627 \u0627\u0632 \u0627\u0628\u062a\u062f\u0627 \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u0634\u0648\u0646\u062f.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Save"),": \u0628\u0631\u0627\u06cc \u0630\u062e\u06cc\u0631\u0647 \u06af\u0632\u0627\u0631\u0634\u0627\u062a \u0644\u0627\u06af \u0627\u0632 \u0627\u06cc\u0646 \u0628\u062e\u0634 \u0627\u0633\u062a\u0641\u0627\u062f \u0645\u06cc\u200c\u0634\u0648\u062f.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Archive"),": \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0630\u062e\u06cc\u0631\u0647 \u0634\u062f\u0647 \u0644\u0627\u06af\u200c\u0647\u0627 \u0628\u0647 \u062a\u0641\u06a9\u06cc\u06a9 \u0633\u0631\u0648\u06cc\u0633\u200c\u0647\u0627 \u062f\u0631 \u0627\u06cc\u0646 \u0642\u0633\u0645\u062a \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f."))))}u.isMDXComponent=!0}}]);