"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[27559],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66617:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={},l="Smart API",p={unversionedId:"api/callcenter_api/Scenarios/smart_api",id:"api/callcenter_api/Scenarios/smart_api",title:"Smart API",description:"\u067e\u06cc\u0634\u0646\u0647\u0627\u062f \u0645\u06cc\u200c\u0634\u0648\u062f \u0642\u0628\u0644 \u0627\u0632 \u0645\u0637\u0627\u0644\u0639\u0647 \u0627\u06cc\u0646 \u0645\u0637\u0644\u0628\u060c\u0627\u0628\u062a\u062f\u0627 \u0627\u06cc\u0646\u062c\u0627 \u0631\u0627 \u0628\u0631\u0631\u0633\u06cc \u0641\u0631\u0645\u0627\u06cc\u06cc\u062f.",source:"@site/docs/api/1-callcenter_api/5-Scenarios/1-smart_api.md",sourceDirName:"api/1-callcenter_api/5-Scenarios",slug:"/api/callcenter_api/Scenarios/smart_api",permalink:"/docs/api/callcenter_api/Scenarios/smart_api",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"docs",previous:{title:"Smart API",permalink:"/docs/api/callcenter_api/APIComponents/smart_api"},next:{title:"Exten API",permalink:"/docs/api/callcenter_api/Scenarios/exten_api"}},i={},c=[],s={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"smart-api"},"Smart API"),(0,a.kt)("admonition",{title:"\u062a\u0648\u0635\u06cc\u0647",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u067e\u06cc\u0634\u0646\u0647\u0627\u062f \u0645\u06cc\u200c\u0634\u0648\u062f \u0642\u0628\u0644 \u0627\u0632 \u0645\u0637\u0627\u0644\u0639\u0647 \u0627\u06cc\u0646 \u0645\u0637\u0644\u0628\u060c\u0627\u0628\u062a\u062f\u0627 ",(0,a.kt)("a",{parentName:"p",href:"../APIComponents/smart_api"},"\u0627\u06cc\u0646\u062c\u0627")," \u0631\u0627 \u0628\u0631\u0631\u0633\u06cc \u0641\u0631\u0645\u0627\u06cc\u06cc\u062f.")),(0,a.kt)("p",null,"\u0633\u0646\u0627\u0631\u064a\u0648: \u0641\u0631\u0636 \u0643\u0646\u064a\u062f \u0643\u0647 \u0642\u0631\u0627\u0631 \u0627\u0633\u062a \u0639\u062f\u062f\u06cc \u0627\u0632 \u0643\u0627\u0631\u0628\u0631 \u062f\u0631\u064a\u0627\u0641\u062a \u0646\u0645\u0627\u064a\u064a\u062f. \u0648 \u0642\u0635\u062f \u062f\u0627\u0631\u06cc\u062f \u062f\u0631\u0635\u0648\u0631\u062a\u06cc \u200c\u200c\u0643\u0647 \u0639\u062f\u062f \u0648\u0627\u0631\u062f \u0634\u062f\u0647 \u06f1 \u0628\u0627\u0634\u062f\u060c \u062a\u0645\u0627\u0633 \u0631\u0627 \u0628\u0647 \u0645\u0633\u064a\u0631 A \u0648 \u062f\u0631\u0635\u0648\u0631\u062a\u06cc \u200c\u200c\u0643\u0647 \u06f2 \u0628\u0627\u0634\u062f\u060c\n\u0628\u0647 \u0645\u0633\u064a\u0631 B \u0647\u062f\u0627\u064a\u062a \u0643\u0646\u064a\u062f."),(0,a.kt)("p",null,"\u0628\u0631\u0627\u06cc \u067e\u06cc\u0627\u062f\u0647\u200c\u200c\u0633\u0627\u0632\u06cc \u0633\u0646\u0627\u0631\u06cc\u0648\u06cc \u0628\u0627\u0644\u0627 \u0628\u0647 \u062f\u0648 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a SmartApi \u0646\u06cc\u0627\u0632 \u062f\u0627\u0631\u06cc\u062f. \u0646\u0627\u0645 \u0627\u0648\u0644\u06cc \u0631\u0627 s1 \u0648 \u062f\u0648\u0645\u06cc \u0631\u0627 s2 \u0628\u06af\u0630\u0627\u0631\u06cc\u062f. \u062f\u0631 \u0642\u0633\u0645\u062a api address \u0627\u0632 \u0647\u0631 \u062f\u0648 \u0643\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u060c\n\u0622\u062f\u0631\u0633 \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u0631\u0627 \u0648\u0627\u0631\u062f \u0646\u0645\u0627\u064a\u064a\u062f. \u062f\u0631 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0627\u0648\u0644 \u06cc\u06a9 \u0645\u0633\u06cc\u0631 \u0627\u06cc\u062c\u0627\u062f \u06a9\u0646\u06cc\u062f \u0648 \u0634\u0646\u0627\u0633\u0647 \u0622\u0646 (case) \u0631\u0627 \u0639\u0628\u0627\u0631\u062a go-s2 \u062a\u0639\u0631\u06cc\u0641 \u0648 \u062e\u0631\u0648\u062c\u06cc \u0622\u0646 \u0631\u0627 \u0628\u0647 \u0643\u0627\u0645\u067e\u0648\u0646\u0646\u062a s2 \u0645\u062a\u0635\u0644\n\u06a9\u0646\u06cc\u062f. \u062f\u0631 \u0643\u0627\u0645\u067e\u0648\u0646\u0646\u062a s2 \u0646\u064a\u0632 \u062f\u0648 \u0645\u0633\u064a\u0631 \u0628\u0627 \u0634\u0646\u0627\u0633\u0647\u200c\u200c\u0647\u0627\u06cc go-a \u0648 go-b \u0628\u06af\u0630\u0627\u0631\u064a\u062f \u0648 \u0622\u0646\u200c\u0647\u0627 \u0631\u0627 \u0628\u0647 \u0645\u0633\u064a\u0631\u0647\u0627\u06cc A(\u0635\u0641 \u0641\u0631\u0648\u0634) \u0648 B(\u0635\u0641 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc) \u0643\u0647 \u062f\u0631 \u0635\u0648\u0631\u062a \u0633\u0646\u0627\u0631\u064a\u0648 \u0630\u0643\u0631 \u0634\u062f\u0647\u200c\u0627\u0646\u062f \u0645\u062a\u0635\u0644 \u0646\u0645\u0627\u064a\u064a\u062f."),(0,a.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0645\u0634\u0627\u0647\u062f\u0647 \u0633\u0646\u0627\u0631\u06cc\u0648 \u0628\u0631\u0631\u0648\u06cc \u0639\u06a9\u0633 \u06a9\u0644\u06cc\u06a9 \u06a9\u0646\u06cc\u062f."),(0,a.kt)("a",{href:"https://dialplan.mysup.ir/live/plan/fdckb8z6kula9q4o3jyug872z3otnhgmdco6w0gzawg7cte78a",target:"_blank"},(0,a.kt)("img",{src:"https://dialplan.mysup.ir/live/thumb/fdckb8z6kula9q4o3jyug872z3otnhgmdco6w0gzawg7cte78a/plan.png"})),(0,a.kt)("p",null,"\u0627\u0643\u0646\u0648\u0646 \u0641\u0631\u0636 \u0643\u0646\u064a\u062f \u062a\u0645\u0627\u0633\u06cc \u0648\u0627\u0631\u062f \u0643\u0627\u0645\u067e\u0648\u0646\u0646\u062a s1 \u0634\u062f\u0647 \u0627\u0633\u062a.\u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u0628\u0627 \u0645\u0642\u0627\u062f\u064a\u0631 \u0632\u064a\u0631 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc \u0645\u06cc\u200c\u0634\u0648\u062f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'{\n  "src": "09155441",\n  "dst": "789",\n  "app_name": "s1",\n  "data": ""\n}\n')),(0,a.kt)("p",null,"\u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u062f\u0631 \u062c\u0648\u0627\u0628 \u062e\u0648\u0627\u0633\u062a\u0627\u0631 \u0627\u062c\u0631\u0627\u06cc \u062a\u0648\u0627\u0628\u0639 \u0632\u06cc\u0631 \u0648 \u062f\u0631\u06cc\u0627\u0641\u062a \u062f\u0627\u062f\u0647 \u0627\u0632 \u06a9\u0627\u0631\u0628\u0631\u200c \u0645\u06cc\u200c\u0634\u0648\u062f."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'{\n  "ok": "1",\n  "commands": "PlayAnnouncement(\'welcome-file\');GetData(\'enter-data-file\', 10, 1);Exit(\'go-s2\')"\n}\n')),(0,a.kt)("p",null,"\u0628\u0627 \u0627\u062c\u0631\u0627\u06cc \u062f\u0633\u062a\u0648\u0631\u0627\u062a \u0641\u0648\u0642\u060c \u0646\u062e\u0633\u062a \u0641\u0627\u064a\u0644 \u0635\u0648\u062a\u06cc \u062e\u0648\u0634\u200c\u0622\u0645\u062f\u06af\u0648\u064a\u06cc \u067e\u062e\u0634 \u0645\u06cc\u200c\u0634\u0648\u062f\u060c \u0633\u067e\u0633 \u0627\u0632 \u0643\u0627\u0631\u0628\u0631 \u062e\u0648\u0627\u0633\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f \u0643\u0647 \u0639\u062f\u062f\u06cc \u0631\u0627 \u0648\u0627\u0631\u062f \u0643\u0646\u062f \u0648 \u067e\u0633 \u0627\u0632 \u0622\u0646 \u062a\u0645\u0627\u0633 \u0627\u0632 \u0645\u0633\u064a\u0631 go-s2\n\u0628\u0647 \u0633\u0645\u062a \u0643\u0627\u0645\u067e\u0648\u0646\u0646\u062a s2 \u0645\u0646\u062a\u0642\u0644 \u0645\u06cc\u200c\u06af\u0631\u062f\u062f."),(0,a.kt)("p",null,"\u062f\u0631 \u0643\u0627\u0645\u067e\u0648\u0646\u0646\u062a s2\u060c \u062f\u0631\u062e\u0648\u0627\u0633\u062a\u06cc \u0645\u0634\u0627\u0628\u0647 s2 \u0628\u0647 \u0633\u0645\u062a \u0633\u0631\u0648\u0631 \u0641\u0631\u0633\u062a\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f\u060c \u0627\u0645\u0627 \u0628\u0627 \u062f\u0648 \u062a\u0641\u0627\u0648\u062a \u0627\u0635\u0644\u06cc: \u0627\u0648\u0644 \u0646\u0627\u0645 \u0643\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0639\u0648\u0636 \u0645\u06cc\u200c\u0634\u0648\u062f \u062a\u0627 \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u062a\u0641\u0627\u0648\u062a \u0645\u0646\u0628\u0639 \u062f\u0631\u062e\u0648\u0627\u0633\u062a\u200c\u062f\u0647\u0646\u062f\u0647\n\u0631\u0627 \u0645\u062a\u0648\u062c\u0647 \u0634\u0648\u062f \u0648 \u062f\u0648\u0645\u060c \u062f\u0627\u062f\u0647 data \u062d\u0627\u0648\u06cc \u0647\u0645\u0627\u0646 \u0645\u0642\u062f\u0627\u0631\u06cc \u0627\u0633\u062a \u0643\u0647 \u0643\u0627\u0631\u0628\u0631 \u062f\u0631 \u0645\u0631\u062d\u0644\u0647 \u0642\u0628\u0644 \u0648\u0627\u0631\u062f \u0643\u0631\u062f\u0647 \u0627\u0633\u062a."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'{\n  "src": "09155441",\n  "dst": "789",\n  "app_name": "s2",\n  "data": "2"\n}\n')),(0,a.kt)("p",null,"\u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u0643\u0647 \u0639\u062f\u062f \u0648\u0627\u0631\u062f\u0634\u062f\u0647 \u0643\u0627\u0631\u0628\u0631 \u0631\u0627 \u062f\u0631 \u062c\u0648\u0627\u0628 \u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u0631\u062f\u0647\u060c \u0645\u0633\u064a\u0631 \u0645\u0646\u0627\u0633\u0628 \u0628\u0631\u0627\u06cc \u062e\u0631\u0648\u062c \u0648\u06cc \u0631\u0627 \u0645\u0634\u062e\u0635 \u0645\u064a\u200c\u0643\u0646\u062f."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'{\n  "ok": "1",\n  "commands": "Exit(\'go-b\');"\n}\n')))}m.isMDXComponent=!0}}]);