"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[92962],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),k=a,d=u["".concat(p,".").concat(k)]||u[k]||m[k]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},37258:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:2},i="Extention API",l={unversionedId:"api/v4/callcenter_api/SimoTelWebHook/ComponentsApi/exten_api",id:"api/v4/callcenter_api/SimoTelWebHook/ComponentsApi/exten_api",title:"Extention API",description:"\u0627\u0632 \u0627\u06cc\u0646 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0628\u0631\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u062a\u0645\u0627\u0633 \u0628\u0647 \u0633\u0645\u062a \u06cc\u06a9 \u062f\u0627\u062e\u0644\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647\u200c \u0645\u06cc\u200c\u0634\u0648\u062f.\u0639\u0645\u0644\u06a9\u0631\u062f \u0622\u0646 \u0645\u0634\u0627\u0628\u0647 Extension \u0627\u0633\u062a\u060c \u0628\u0627 \u0627\u06cc\u0646 \u062a\u0641\u0627\u0648\u062a \u06a9\u0647 \u0627\u0632 \u0637\u0631\u06cc\u0642 \u0648\u0628\u200c\u200c\u0633\u0631\u0648\u06cc\u0633\u060c \u0634\u0645\u0627\u0631\u0647 \u062f\u0627\u062e\u0644\u06cc",source:"@site/docs/api/v4/2-callcenter_api/3-SimoTelWebHook/3-ComponentsApi/2-exten_api.md",sourceDirName:"api/v4/2-callcenter_api/3-SimoTelWebHook/3-ComponentsApi",slug:"/api/v4/callcenter_api/SimoTelWebHook/ComponentsApi/exten_api",permalink:"/docs/api/v4/callcenter_api/SimoTelWebHook/ComponentsApi/exten_api",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2}},p={},c=[{value:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a",id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627-\u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a",level:2},{value:"\u062e\u0631\u0648\u062c\u06cc\u200c\u0647\u0627\u06cc \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a",id:"\u062e\u0631\u0648\u062c\u06cc\u0647\u0627\u06cc-\u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a",level:2},{value:"\u0642\u0627\u0644\u0628 \u0648\u0628\u200c\u200c\u0633\u0631\u0648\u06cc\u0633",id:"\u0642\u0627\u0644\u0628-\u0648\u0628\u0633\u0631\u0648\u06cc\u0633",level:2}],s={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"extention-api"},"Extention API"),(0,a.kt)("p",null,"\u0627\u0632 \u0627\u06cc\u0646 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0628\u0631\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u062a\u0645\u0627\u0633 \u0628\u0647 \u0633\u0645\u062a \u06cc\u06a9 \u062f\u0627\u062e\u0644\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647\u200c \u0645\u06cc\u200c\u0634\u0648\u062f.\u0639\u0645\u0644\u06a9\u0631\u062f \u0622\u0646 \u0645\u0634\u0627\u0628\u0647 Extension \u0627\u0633\u062a\u060c \u0628\u0627 \u0627\u06cc\u0646 \u062a\u0641\u0627\u0648\u062a \u06a9\u0647 \u0627\u0632 \u0637\u0631\u06cc\u0642 \u0648\u0628\u200c\u200c\u0633\u0631\u0648\u06cc\u0633\u060c \u0634\u0645\u0627\u0631\u0647 \u062f\u0627\u062e\u0644\u06cc\n\u0645\u0642\u0635\u062f \u0631\u0627 \u062f\u0631\u06cc\u0627\u0641\u062a \u0648 \u0641\u0642\u0637 \u062a\u0645\u0627\u0633 \u0631\u0627 \u0628\u0631\u0627\u06cc \u0622\u0646 \u062f\u0627\u062e\u0644\u06cc \u0627\u0631\u0633\u0627\u0644 \u0645\u06cc\u200c\u0646\u0645\u0627\u06cc\u062f."),(0,a.kt)("h2",{id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627-\u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a"},"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"API Address"),": \u0622\u062f\u0631\u0633 \u0648\u0628\u200c\u200c\u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u0627\u0637\u0644\u0627\u0639 \u0627\u0632 \u0634\u0645\u0627\u0631\u0647 \u062f\u0627\u062e\u0644\u06cc \u0645\u0642\u0635\u062f."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Timeout (sec)"),": \u0645\u062f\u062a \u0632\u0645\u0627\u0646 \u0632\u0646\u06af \u062e\u0648\u0631\u062f\u0646 \u062f\u0627\u062e\u0644\u06cc (\u0628\u0631\u062d\u0633\u0628 \u062b\u0627\u0646\u06cc\u0647)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Options"),": \u062a\u0646\u0638\u064a\u0645\u0627\u062a \u062a\u0645\u0627\u0633.")),(0,a.kt)("h2",{id:"\u062e\u0631\u0648\u062c\u06cc\u0647\u0627\u06cc-\u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a"},"\u062e\u0631\u0648\u062c\u06cc\u200c\u0647\u0627\u06cc \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"S (Success)"),": \u062f\u0631\u0635\u0648\u0631\u062a\u06cc\u200c\u200c\u06a9\u0647 \u062a\u0645\u0627\u0633 \u0645\u0648\u0641\u0642 \u0628\u0627\u0634\u062f\u060c \u06cc\u0639\u0646\u06cc \u062f\u0627\u062e\u0644\u06cc \u0628\u0647 \u062a\u0645\u0627\u0633 \u067e\u0627\u0633\u062e \u062f\u0627\u062f\u0647 \u0628\u0627\u0634\u062f."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"B (Busy)"),": \u062f\u0631 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 \u062f\u0627\u062e\u0644\u06cc \u0645\u0634\u063a\u0648\u0644 \u0628\u0627\u0634\u062f."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"F (Fail)"),": \u062f\u0631\u0635\u0648\u0631\u062a\u06cc\u200c\u200c\u06a9\u0647 \u062a\u0645\u0627\u0633 \u0628\u0647 \u0647\u0631 \u062f\u0644\u06cc\u0644\u06cc \u0646\u0627\u0645\u0648\u0641\u0642 \u0628\u0627\u0634\u062f.")),(0,a.kt)("h2",{id:"\u0642\u0627\u0644\u0628-\u0648\u0628\u0633\u0631\u0648\u06cc\u0633"},"\u0642\u0627\u0644\u0628 \u0648\u0628\u200c\u200c\u0633\u0631\u0648\u06cc\u0633"),(0,a.kt)("p",null,"\u0628\u0627\u200c\u062a\u0648\u062c\u0647 \u0628\u0647 \u0645\u0642\u0627\u062f\u06cc\u0631 \u0645\u0646\u0648\u06cc \u062a\u0646\u0638\u06cc\u0645\u0627\u062a \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 ",(0,a.kt)("inlineCode",{parentName:"p"},"API Method & API Version"),"\u060c \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0622\u062f\u0631\u0633 \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u0631\u0627 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc \u06a9\u0631\u062f\u0647 \u0648 \u062f\u0627\u062f\u0647\u200c\u0647\u0627\u06cc \u0632\u06cc\u0631 \u0631\u0627 (\u0628\u0627 \u0646\u0627\u0645\u200c\u0647\u0627\u06cc \u0630\u06a9\u0631 \u0634\u062f\u0647) \u0647\u0645\u0631\u0627\u0647 \u0628\u0627 \u0622\u0646 \u0627\u0631\u0633\u0627\u0644 \u0645\u06cc\u200c\u0646\u0645\u0627\u06cc\u062f."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"src"),": \u0634\u0645\u0627\u0631\u0647 \u062a\u0645\u0627\u0633\u200c\u200c\u06af\u06cc\u0631\u0646\u062f\u0647 (Caller \u06cc\u0627 CID)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"dst"),": \u0634\u0645\u0627\u0631\u0647 \u0648\u0627\u0631\u062f\u0634\u062f\u0647 (Callee \u06cc\u0627 DID \u06cc\u0627 Exten)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"data"),": \u062f\u0627\u062f\u0647\u200c\u200c\u0627\u06cc \u06a9\u0647 \u062a\u0645\u0627\u0633\u200c\u200c\u06af\u06cc\u0631\u0646\u062f\u0647 \u062f\u0631 \u0645\u0633\u06cc\u0631 \u062a\u0645\u0627\u0633 \u0648\u0627\u0631\u062f \u06a9\u0631\u062f\u0647 \u0627\u0633\u062a (\u0645\u062b\u0644\u0627\u064b \u062f\u0627\u062f\u0647\u200c\u200c\u0627\u06cc \u06a9\u0647 \u062f\u0631 IVR \u0648\u0627\u0631\u062f \u06a9\u0631\u062f\u0647 \u0627\u0633\u062a)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"unique_id"),": \u0634\u0646\u0627\u0633\u0647 \u06cc\u06a9\u062a\u0627\u06cc \u062a\u0645\u0627\u0633."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"app_name"),": \u0646\u0627\u0645 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u062c\u0627\u0631\u06cc.")),(0,a.kt)("p",null,"\u0648 \u062f\u0631 \u062c\u0648\u0627\u0628\u060c \u062e\u0631\u0648\u062c\u06cc \u0632\u06cc\u0631 \u0631\u0627 \u0628\u0647\u200c\u0635\u0648\u0631\u062a json \u062f\u0631\u06cc\u0627\u0641\u062a\u200c \u0645\u06cc\u200c\u06a9\u0646\u062f."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'{\n  "ok": "1",\n  "extension": "120"\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0648 \u062f\u0631\u0646\u0647\u0627\u064a\u062a \u062a\u0645\u0627\u0633 \u0631\u0627 \u0628\u0647 \u0633\u0645\u062a \u062f\u0627\u062e\u0644\u06cc \u0648\u0627\u0631\u062f\u0634\u062f\u0647 (\u062f\u0631 \u0627\u064a\u0646\u062c\u0627 120) \u0627\u0631\u0633\u0627\u0644 \u0645\u06cc\u200c\u0643\u0646\u062f.")))}m.isMDXComponent=!0}}]);