"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[71644],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>g});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),d=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=d(t.components);return r.createElement(c.Provider,{value:e},t.children)},o="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},N=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),o=d(n),N=a,g=o["".concat(c,".").concat(N)]||o[N]||k[N]||i;return n?r.createElement(g,l(l({ref:e},m),{},{components:n})):r.createElement(g,l({ref:e},m))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=N;var p={};for(var c in e)hasOwnProperty.call(e,c)&&(p[c]=e[c]);p.originalType=t,p[o]="string"==typeof t?t:a,l[1]=p;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}N.displayName="MDXCreateElement"},96308:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const i={},l="CDR",p={unversionedId:"api/callcenter_api/SimoTelEventAPI/events/cdr",id:"api/callcenter_api/SimoTelEventAPI/events/cdr",title:"CDR",description:"\u067e\u0633 \u0627\u0632 \u0627\u062a\u0645\u0627\u0645 \u06cc\u06a9 \u062a\u0645\u0627\u0633 \u062f\u0631 \u0633\u06cc\u0645\u0648\u062a\u0644\u060c \u0631\u0648\u06cc\u062f\u0627\u062f CDR(call detail recored) \u0627\u06cc\u062c\u0627\u062f \u0648 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u062a\u0645\u0627\u0633 \u0647\u0645\u0631\u0627\u0647 \u0622\u0646 \u0627\u0631\u0633\u0627\u0644\u200c \u0645\u06cc\u200c\u06af\u0631\u062f\u062f.",source:"@site/docs/api/1-callcenter_api/2-SimoTelEventAPI/2-events/13-cdr.md",sourceDirName:"api/1-callcenter_api/2-SimoTelEventAPI/2-events",slug:"/api/callcenter_api/SimoTelEventAPI/events/cdr",permalink:"/docs/api/callcenter_api/SimoTelEventAPI/events/cdr",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{},sidebar:"docs",previous:{title:"Survey",permalink:"/docs/api/callcenter_api/SimoTelEventAPI/events/survey"},next:{title:"TrunkNewState",permalink:"/docs/api/callcenter_api/SimoTelEventAPI/events/TrunkNewState"}},c={},d=[{value:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc \u0631\u0648\u06cc\u062f\u0627\u062f",id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc-\u0631\u0648\u06cc\u062f\u0627\u062f",level:2},{value:"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc \u0631\u0648\u06cc\u062f\u0627\u062f CDR",id:"\u0646\u0645\u0648\u0646\u0647-\u062e\u0631\u0648\u062c\u06cc-\u0631\u0648\u06cc\u062f\u0627\u062f-cdr",level:2}],m={toc:d},o="wrapper";function k(t){let{components:e,...n}=t;return(0,a.kt)(o,(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cdr"},"CDR"),(0,a.kt)("p",null,"\u067e\u0633 \u0627\u0632 \u0627\u062a\u0645\u0627\u0645 \u06cc\u06a9 \u062a\u0645\u0627\u0633 \u062f\u0631 \u0633\u06cc\u0645\u0648\u062a\u0644\u060c \u0631\u0648\u06cc\u062f\u0627\u062f CDR(call detail recored) \u0627\u06cc\u062c\u0627\u062f \u0648 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u062a\u0645\u0627\u0633 \u0647\u0645\u0631\u0627\u0647 \u0622\u0646 \u0627\u0631\u0633\u0627\u0644\u200c \u0645\u06cc\u200c\u06af\u0631\u062f\u062f."),(0,a.kt)("h2",{id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc-\u0631\u0648\u06cc\u062f\u0627\u062f"},"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc \u0631\u0648\u06cc\u062f\u0627\u062f"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u062f\u0627\u062f\u0647\u200c\u0647\u0627\u06cc \u062a\u0639\u0631\u06cc\u0641\u200c\u0634\u062f\u0647"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u062f\u0627\u062f\u0647\u200c\u0647\u0627\u06cc \u0646\u0645\u0648\u0646\u0647"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0646\u0627\u0645 \u0631\u0648\u06cc\u062f\u0627\u062f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"CDR"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"event_name"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u062a\u0627\u0631\u06cc\u062e \u0634\u0631\u0648\u0639 \u0645\u06a9\u0627\u0644\u0645\u0647"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"11:55:33.208640 2017-11-12"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"start_time"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u062a\u0627\u0631\u06cc\u062e \u067e\u0627\u06cc\u0627\u0646 \u0645\u06a9\u0627\u0644\u0645\u0647"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"11:55:51.208640 2017-11-12"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"end_time"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0634\u0645\u0627\u0631\u0647 \u0645\u0628\u062f\u0627\u0621"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"09991101756"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"src"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0634\u0645\u0627\u0631\u0647 \u0645\u0642\u0635\u062f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"553"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"dst"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0646\u0648\u0639 \u062a\u0645\u0627\u0633"),(0,a.kt)("td",{parentName:"tr",align:"center"},"incoming- outgoing- local-feature- no defined"),(0,a.kt)("td",{parentName:"tr",align:"center"},"incoming"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"type"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0648\u0636\u0639\u06cc\u062a \u062a\u0645\u0627\u0633"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Answered- No Answered- Busy"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Answered"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"disposition"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0645\u062f\u062a \u06a9\u0644 \u062a\u0645\u0627\u0633"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"18"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"duration"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0645\u062f\u062a \u0632\u0645\u0627\u0646 \u0627\u0646\u062a\u0638\u0627\u0631 \u0628\u0647 \u067e\u0627\u0633\u062e"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"5"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"billsec"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0645\u062f\u062a \u0627\u0646\u062a\u0638\u0627\u0631 \u062a\u0645\u0627\u0633"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"15"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"wait"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0646\u0627\u0645 \u0641\u0627\u06cc\u0644\u200c\u0635\u0648\u062a\u06cc \u062a\u0645\u0627\u0633 \u0645\u0648\u0641\u0642"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"0999911_2017111201756.553.151048mp3.7732.164444"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"record"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0634\u0645\u0627\u0631\u0647 \u0627\u0645\u062a\u06cc\u0627\u0632 \u062f\u0627\u062f\u0647\u200c\u0634\u062f\u0647 \u062f\u0631 \u0637\u0648\u0644 \u062a\u0645\u0627\u0633(\u062f\u0631 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 \u0646\u0638\u0631\u200c\u0633\u0646\u062c\u06cc \u0627\u0646\u062c\u0627\u0645 \u0634\u062f\u0647 \u0628\u0627\u0634\u062f)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"10"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"poll_point"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0646\u0627\u0645 \u0646\u0638\u0631\u0633\u0646\u062c\u06cc \u0627\u0646\u062c\u0627\u0645\u200c\u0634\u062f\u0647 \u062f\u0631 \u0637\u0648\u0644 \u062a\u0645\u0627\u0633 (\u062f\u0631\u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 \u0646\u0638\u0631\u0633\u0646\u062c\u06cc \u0627\u0646\u062c\u0627\u0645\u200c\u0634\u062f\u0647 \u0628\u0627\u0634\u062f)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"mypoll"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"poll_lable"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0646\u0627\u0645 \u062f\u0631\u06af\u0627\u0647\u200c\u0648\u0631\u0648\u062f\u06cc \u0628\u0647 \u0633\u06cc\u0645\u0648\u062a\u0644"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"2191305588"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"entry_point"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0646\u0627\u0645 \u062f\u0631\u06af\u0627\u0647\u200c\u062e\u0631\u0648\u062c\u06cc \u0628\u0647 \u0633\u06cc\u0645\u0648\u062a\u0644"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"2191305936"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"outgoing_point"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0634\u0646\u0627\u0633\u0647 \u06cc\u06a9\u062a\u0627\u06cc \u062a\u0645\u0627\u0633 \u06a9\u0647 \u062a\u0648\u0633\u0637 \u0645\u0631\u06a9\u0632 \u062a\u0645\u0627\u0633 \u062a\u0648\u0644\u06cc\u062f \u0645\u06cc\u200c\u06af\u0631\u062f\u062f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1510564538.919"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"cuid"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0634\u0646\u0627\u0633\u0647 \u062a\u0645\u0627\u0633 \u062f\u0648 \u0637\u0631\u0641\u0647  (\u062f\u0631 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 \u062a\u0645\u0627\u0633 \u062f\u0648 \u0637\u0631\u0641\u0647 \u0628\u0627\u0634\u062f \u0627\u06cc\u0646 \u0641\u06cc\u0644\u062f \u0645\u0642\u062f\u0627\u0631 \u062f\u0627\u0631\u062f)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"orig.call.1683107010.780601"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"originated_call_id"))))),(0,a.kt)("h2",{id:"\u0646\u0645\u0648\u0646\u0647-\u062e\u0631\u0648\u062c\u06cc-\u0631\u0648\u06cc\u062f\u0627\u062f-cdr"},"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc \u0631\u0648\u06cc\u062f\u0627\u062f CDR"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'{\n  "event_name": "Cdr",\n  "starttime": "2021-01-16 06:30:37.471398",\n  "endtime": "2021-01-16 06:30:37.471398",\n  "src": "991",\n  "dst": "993",\n  "type": "local",\n  "disposition": "ANSWERED",\n  "billsec": 9,\n  "wait": 11,\n  "record": "20210116_1610778618.378.mp3",\n  "unique_id": "1610778618.378"\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'{\n  "event_name": "Cdr",\n  "starttime": "2021-01-16 07:17:00.508368",\n  "endtime": "2021-01-16 07:17:01.508368",\n  "src": "992",\n  "dst": "66",\n  "type": "local",\n  "disposition": "NO ANSWER",\n  "duration": 1,\n  "wait": 1,\n  "unique_id": "1610781419.387"\n}\n')))}k.isMDXComponent=!0}}]);