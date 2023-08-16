"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[12582],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,g=p["".concat(o,".").concat(m)]||p[m]||s[m]||i;return n?a.createElement(g,l(l({ref:t},d),{},{components:n})):a.createElement(g,l({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[p]="string"==typeof e?e:r,l[1]=c;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(87462),r=n(67294),i=n(86010),l=n(12466),c=n(16550),o=n(91980),u=n(67392),d=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function s(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,c.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=s(e),[l,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[o,u]=g({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),b=(()=>{const e=o??p;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{b&&c(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var b=n(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function N(e){let{className:t,block:n,selectedValue:c,selectValue:o,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),s=e=>{const t=e.currentTarget,n=d.indexOf(t),a=u[n].value;a!==c&&(p(t),o(a))},m=e=>{let t=null;switch(e.key){case"Enter":s(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:c===t?0:-1,"aria-selected":c===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:s},l,{className:(0,i.Z)("tabs__item",k.tabItem,l?.className,{"tabs__item--active":c===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",k.tabList)},r.createElement(N,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function h(e){const t=(0,b.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},66485:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>g,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),i=n(74866),l=n(85162);const c={},o="Campaign Add",u={unversionedId:"api/autodialer_api/campaign/campaign_add",id:"version-6.2.0/api/autodialer_api/campaign/campaign_add",title:"Campaign Add",description:"\u0627\u0632 \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u0627\u0641\u0632\u0648\u062f\u0646 \u06a9\u0645\u067e\u06cc\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.",source:"@site/versioned_docs/version-6.2.0/api/2-autodialer_api/4-campaign/1-campaign_add.md",sourceDirName:"api/2-autodialer_api/4-campaign",slug:"/api/autodialer_api/campaign/campaign_add",permalink:"/docs/6.2.0/api/autodialer_api/campaign/campaign_add",draft:!1,tags:[],version:"6.2.0",sidebarPosition:1,frontMatter:{},sidebar:"version-6.2.0/docs",previous:{title:"Group Delete",permalink:"/docs/6.2.0/api/autodialer_api/group/group_delete"},next:{title:"Campaign Search",permalink:"/docs/6.2.0/api/autodialer_api/campaign/campaign_search"}},d={},p=[{value:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627",id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",level:2},{value:"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc \u062f\u0631\u062e\u0648\u0627\u0633\u062a",id:"\u0646\u0645\u0648\u0646\u0647-\u062e\u0631\u0648\u062c\u06cc-\u062f\u0631\u062e\u0648\u0627\u0633\u062a",level:2},{value:"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",level:2}],s={toc:p},m="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"campaign-add"},"Campaign Add"),(0,r.kt)("p",null,"\u0627\u0632 \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u0627\u0641\u0632\u0648\u062f\u0646 \u06a9\u0645\u067e\u06cc\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f."),(0,r.kt)("h2",{id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627"},"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u0646\u0645\u0648\u0646\u0647"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc \u0636\u0631\u0648\u0631\u06cc","[**]","/\u0645\u0646\u0637\u0642\u06cc","[*]"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u0646\u0627\u0645 \u06a9\u0645\u067e\u06cc\u0646"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"test"),(0,r.kt)("td",{parentName:"tr",align:"center"},"**"),(0,r.kt)("td",{parentName:"tr",align:"center"},"name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u0634\u0646\u0627\u0633\u0647\u200c\u06cc\u06a9\u062a\u0627 \u062a\u0631\u0627\u0646\u06a9 \u06a9\u0647 \u0627\u0632 \u062c\u0633\u062a\u062c\u0648 \u0628\u062f\u0633\u062a \u0645\u06cc\u200c\u0622\u06cc\u062f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"5f6c5b56c92de0068f32e592"),(0,r.kt)("td",{parentName:"tr",align:"center"},"**"),(0,r.kt)("td",{parentName:"tr",align:"center"},"trunk_manager_id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u0645\u0642\u062f\u0627\u0631 context \u062f\u0631 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a autodialer route"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"auto"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"interface_context")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u0645\u0642\u062f\u0627\u0631 text \u062f\u0631 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a autodialer route"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"text1"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"interface_text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u0634\u0645\u0627\u0631\u0647 \u0645\u062e\u0627\u0637\u0628\u06cc\u0646"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"09212396500"),(0,r.kt)("td",{parentName:"tr",align:"center"},"*"),(0,r.kt)("td",{parentName:"tr",align:"center"},"numbers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u0634\u0646\u0627\u0633\u0647\u200c\u06cc\u06a9\u062a\u0627 \u06af\u0631\u0648\u0647 \u06a9\u0647 \u0627\u0632 \u062c\u0633\u062a\u062c\u0648 \u0628\u062f\u0633\u062a \u0645\u06cc\u200c\u0622\u06cc\u062f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},'"5e96c8c2c92de0468920657e" "5e96d40cc92de025690d0a61"'),(0,r.kt)("td",{parentName:"tr",align:"center"},"*"),(0,r.kt)("td",{parentName:"tr",align:"center"},"groups")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u0641\u0627\u0635\u0644\u0647 \u0632\u0645\u0627\u0646\u06cc \u0628\u06cc\u0646 \u0647\u0631 \u062a\u0644\u0627\u0634"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"600"),(0,r.kt)("td",{parentName:"tr",align:"center"},"*"),(0,r.kt)("td",{parentName:"tr",align:"center"},"try_interval")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u062a\u0639\u062f\u0627\u062f \u062a\u06a9\u0631\u0627\u0631"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"*"),(0,r.kt)("td",{parentName:"tr",align:"center"},"try")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u0632\u0645\u0627\u0646 \u0634\u0631\u0648\u0639 \u06a9\u0645\u067e\u06cc\u0646"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2021-02-19 15:17"),(0,r.kt)("td",{parentName:"tr",align:"center"},"*"),(0,r.kt)("td",{parentName:"tr",align:"center"},"start")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u0632\u0645\u0627\u0646 \u067e\u0627\u06cc\u0627\u0646 \u06a9\u0645\u067e\u06cc\u0646"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2021-02-23 15:17"),(0,r.kt)("td",{parentName:"tr",align:"center"},"*"),(0,r.kt)("td",{parentName:"tr",align:"center"},"end")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u0634\u0646\u0627\u0633\u0647\u200c\u06cc\u06a9\u062a\u0627 \u0641\u0627\u06cc\u0644\u200c\u0635\u0648\u062a\u06cc \u06a9\u0647 \u0627\u0632 \u062c\u0633\u062a\u062c\u0648 \u0628\u062f\u0633\u062a \u0645\u06cc\u200c\u0622\u06cc\u062f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"5e5b629ec92de075df7af457"),(0,r.kt)("td",{parentName:"tr",align:"center"},"*"),(0,r.kt)("td",{parentName:"tr",align:"center"},"announcement")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"description")))),(0,r.kt)("h2",{id:"\u0646\u0645\u0648\u0646\u0647-\u062e\u0631\u0648\u062c\u06cc-\u062f\u0631\u062e\u0648\u0627\u0633\u062a"},"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc \u062f\u0631\u062e\u0648\u0627\u0633\u062a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'{\n    "success": 1,\n    "message": "Requested operation is done successfully",\n    "data": {\n        "name": "test",\n        "trunk_manager_id": {\n            "$oid": "5f6c5b56c92de0068f32e592"\n        },\n        "interface_context": "auto",\n        "interface_text": "text1",\n        "numbers": [\n            "09212396500"\n        ],\n        "groups": [\n            "5e96c8c2c92de0468920657e",\n            "5e96d40cc92de025690d0a61"\n        ],\n        "try_interval": "600",\n        "try": "1",\n        "start": {\n            "$date": {\n                "$numberLong": "1613735220000"\n            }\n        },\n        "end": {\n            "$date": {\n                "$numberLong": "1614080820000"\n            }\n        },\n        "announcement": "5e5b629ec92de075df7af457",\n        "description": "",\n        "count": 1,\n        "repeat": 1,\n        "date": "1399-12-18 14:01:49",\n        "status": "waiting",\n        "isoStart": {\n            "$date": {\n                "$numberLong": "1613735220000"\n            }\n        },\n        "isoEnd": {\n            "$date": {\n                "$numberLong": "1614080820000"\n            }\n        }\n    }\n}\n')),(0,r.kt)("h2",{id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc"},"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc"),(0,r.kt)(i.Z,{defaultValue:"PHP",values:[{label:"PHP",value:"PHP"},{label:"JS",value:"JS"},{label:"Linux",value:"Linux"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"PHP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<?php\n\n$curl = curl_init();\n\ncurl_setopt_array($curl, array(\n  CURLOPT_URL => "http://192.168.51.21//api/v3/autodialer/campaigns",\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_ENCODING => "",\n  CURLOPT_MAXREDIRS => 10,\n  CURLOPT_TIMEOUT => 0,\n  CURLOPT_FOLLOWLOCATION => true,\n  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n  CURLOPT_CUSTOMREQUEST => "POST",\n  CURLOPT_POSTFIELDS =>"{\\r\\n    \\"name\\":\\"test\\",\\r\\n    \\"trunk_manager_id\\":\\"5f6c5b56c92de0068f32e592\\",\\r\\n    \\"interface_context\\":\\"auto\\",\\r\\n    \\"interface_text\\":\\"text1\\",\\r\\n    \\"numbers\\":[\\"09212396500\\"],\\r\\n    \\"groups\\":[\\"5e96c8c2c92de0468920657e\\",\\"5e96d40cc92de025690d0a61\\"],\\r\\n    \\"try_interval\\":\\"600\\",\\r\\n    \\"try\\":\\"1\\",\\r\\n    \\"start\\":\\"2021-02-19 15:17\\",\\r\\n    \\"end\\":\\"2021-02-23 15:17\\",\\r\\n    \\"announcement\\":\\"5e5b629ec92de075df7af457\\",\\r\\n    \\"description\\":\\"\\",\\r\\n    \\"count\\":3\\r\\n}",\n  CURLOPT_HTTPHEADER => array(\n    "X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",\n    "Authorization: Basic dGVzdDpBYTEyMzQ1Ng==",\n    "Content-Type: application/json"\n  ),\n));\n\n$response = curl_exec($curl);\n\n    if (!curl_errno($curl)) {\n    $httpcode = curl_getinfo($curl, CURLINFO_HTTP_CODE);\n    echo \'response code:\'.$httpcode, \'<br/>\';\n}\n\ncurl_close($curl);\necho $response;\n'))),(0,r.kt)(l.Z,{value:"JS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<html>\n        <head>\n        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"><\/script>\n        </head>\n    <body>\n        <script>\n            var settings = {\n              "url": "http://192.168.51.21//api/v3/autodialer/campaigns",\n              "method": "POST",\n              "timeout": 0,\n              "headers": {\n                "X-APIKEY": "vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",\n                "Authorization": "Basic dGVzdDpBYTEyMzQ1Ng==",\n                "Content-Type": "application/json"\n              },\n              "data": JSON.stringify({\n                  "name": "test",\n                  "trunk_manager_id": "5f6c5b56c92de0068f32e592",\n                  "interface_context": "auto",\n                  "interface_text": "text1",\n                  "numbers": [\n                    "09212396500"\n                  ],\n                  "groups": [\n                    "5e96c8c2c92de0468920657e",\n                    "5e96d40cc92de025690d0a61"\n                  ],\n                  "try_interval": "600",\n                  "try": "1",\n                  "start": "2021-02-19 15:17",\n                  "end": "2021-02-23 15:17",\n                  "announcement": "5e5b629ec92de075df7af457",\n                  "description": "",\n                  "count": 3\n                }),\n            };\n\n\n                $.ajax(settings).always(function (jqXHR) {\n                    console.log("response code: " + jqXHR.status + " " + jqXHR.statusText);\n                    console.log("response body: " + jqXHR.responseText);\n                });\n        <\/script>\n    </body>\n</html>\n'))),(0,r.kt)(l.Z,{value:"Linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl --location --request POST \'http://192.168.51.21//api/v3/autodialer/campaigns\' \\\n--header \'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG\' \\\n--header \'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "name":"test",\n    "trunk_manager_id":"5f6c5b56c92de0068f32e592",\n    "interface_context":"auto",\n    "interface_text":"text1",\n    "numbers":["09212396500"],\n    "groups":["5e96c8c2c92de0468920657e","5e96d40cc92de025690d0a61"],\n    "try_interval":"600",\n    "try":"1",\n    "start":"2021-02-19 15:17",\n    "end":"2021-02-23 15:17",\n    "announcement":"5e5b629ec92de075df7af457",\n    "description":"",\n    "count":3\n}\'\n')))))}g.isMDXComponent=!0}}]);