"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[19129],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),l=n(74866),i=n(85162);const o={},u="Trunk Edit",c={unversionedId:"autodialer_api/trunk_manager/trunk_manager_edit",id:"version-3.0.0/autodialer_api/trunk_manager/trunk_manager_edit",title:"Trunk Edit",description:"\u0627\u0632 \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u0648\u06cc\u0631\u0627\u06cc\u0634 \u062a\u0631\u0627\u0646\u06a9 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.",source:"@site/api_versioned_docs/version-3.0.0/2-autodialer_api/6-trunk_manager/2-trunk_manager_edit.md",sourceDirName:"2-autodialer_api/6-trunk_manager",slug:"/autodialer_api/trunk_manager/trunk_manager_edit",permalink:"/api/api_versioned_docs/version-3.0.0/autodialer_api/trunk_manager/trunk_manager_edit",draft:!1,tags:[],version:"3.0.0",sidebarPosition:2,frontMatter:{},sidebar:"version-3.0.0/docs",previous:{title:"Trunk Search",permalink:"/api/api_versioned_docs/version-3.0.0/autodialer_api/trunk_manager/trunk_manager_search"},next:{title:"Report Search",permalink:"/api/api_versioned_docs/version-3.0.0/autodialer_api/report/report_search"}},s={},p=[{value:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627",id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",level:2},{value:"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc \u062f\u0631\u062e\u0648\u0627\u0633\u062a",id:"\u0646\u0645\u0648\u0646\u0647-\u062e\u0631\u0648\u062c\u06cc-\u062f\u0631\u062e\u0648\u0627\u0633\u062a",level:2},{value:"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",level:2}],d={toc:p},m="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"trunk-edit"},"Trunk Edit"),(0,r.kt)("p",null,"\u0627\u0632 \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u0648\u06cc\u0631\u0627\u06cc\u0634 \u062a\u0631\u0627\u0646\u06a9 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f."),(0,r.kt)("h2",{id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627"},"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u0646\u0645\u0648\u0646\u0647"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc \u0636\u0631\u0648\u0631\u06cc","[**]","/\u0645\u0646\u0637\u0642\u06cc","[*]"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u0634\u0646\u0627\u0633\u0647 \u06cc\u06a9\u062a\u0627\u06cc \u0645\u062f\u06cc\u0631\u06cc\u062a \u06a9\u0646\u0646\u062f\u0647 \u062a\u0631\u0627\u0646\u06a9 \u06a9\u0647 \u0627\u0632 ",(0,r.kt)("a",{parentName:"td",href:"/docs/api/autodialer_api/trunk_manager/trunk_manager_search"},"\u062c\u0633\u062a\u062c\u0648")," \u0628\u062f\u0633\u062a \u0645\u06cc\u200c\u0622\u06cc\u062f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"5ec65107ce4f6d12c43e250f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"**"),(0,r.kt)("td",{parentName:"tr",align:"center"},"_id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u0646\u0627\u0645 \u0645\u062f\u06cc\u0631\u06cc\u062a\u200c\u06a9\u0646\u0646\u062f\u0647 \u062a\u0631\u0627\u0646\u06a9"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"autodialer"),(0,r.kt)("td",{parentName:"tr",align:"center"},"*"),(0,r.kt)("td",{parentName:"tr",align:"center"},"title")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u0648\u0636\u0639\u06cc\u062a \u0645\u062f\u06cc\u0631\u062a\u200c\u06a9\u0646\u0646\u062f\u0647 \u062a\u0631\u0627\u0646\u06a9"),(0,r.kt)("td",{parentName:"tr",align:"center"},"active/inactive"),(0,r.kt)("td",{parentName:"tr",align:"center"},"active"),(0,r.kt)("td",{parentName:"tr",align:"center"},"*"),(0,r.kt)("td",{parentName:"tr",align:"center"},"status")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u062a\u0639\u062f\u0627\u062f \u062f\u0627\u062f\u0647\u200c\u0627\u06cc \u06a9\u0647 \u0628\u0627 \u0647\u0631 \u0628\u0627\u0631 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc \u0627\u0632 \u067e\u0627\u06cc\u06af\u0627\u0647 \u062f\u0627\u062f\u0647 \u0628\u0627\u0632\u06cc\u0627\u0628\u06cc \u0634\u0648\u062f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"100"),(0,r.kt)("td",{parentName:"tr",align:"center"},"*"),(0,r.kt)("td",{parentName:"tr",align:"center"},"wait_cache_length")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u062d\u062f\u0627\u06a9\u062b\u0631 \u0638\u0631\u0641\u06cc\u062a \u0645\u062f\u06cc\u0631\u062a\u200c\u06a9\u0646\u0646\u062f\u0647 \u062a\u0631\u0627\u0646\u06a9"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"50"),(0,r.kt)("td",{parentName:"tr",align:"center"},"*"),(0,r.kt)("td",{parentName:"tr",align:"center"},"capacity")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u0628\u0627\u0632\u0647 \u0632\u0645\u0627\u0646\u06cc \u0628\u06cc\u0646 \u062a\u0645\u0627\u0633\u200c\u0647\u0627(\u0628\u0631\u062d\u0633\u0628 \u062b\u0627\u0646\u06cc\u0647)"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"*"),(0,r.kt)("td",{parentName:"tr",align:"center"},"dial_interval")))),(0,r.kt)("h2",{id:"\u0646\u0645\u0648\u0646\u0647-\u062e\u0631\u0648\u062c\u06cc-\u062f\u0631\u062e\u0648\u0627\u0633\u062a"},"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc \u062f\u0631\u062e\u0648\u0627\u0633\u062a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'{\n    "success": 1,\n    "message": "Requested operation is done successfully",\n    "data": ""\n}\n')),(0,r.kt)("h2",{id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc"},"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc"),(0,r.kt)(l.Z,{defaultValue:"PHP",values:[{label:"PHP",value:"PHP"},{label:"JS",value:"JS"},{label:"Linux",value:"Linux"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"PHP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<?php\n\n$curl = curl_init();\n\ncurl_setopt_array($curl, array(\n  CURLOPT_URL => \'http://192.168.51.20//api/v3/autodialer/trunks\',\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_ENCODING => \'\',\n  CURLOPT_MAXREDIRS => 10,\n  CURLOPT_TIMEOUT => 0,\n  CURLOPT_FOLLOWLOCATION => true,\n  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n  CURLOPT_CUSTOMREQUEST => \'PUT\',\n  CURLOPT_POSTFIELDS =>\'{\n    "_id":"5ec63107ce4f6d12c43e250f",\n    "title":"autodialer1",\n    "status":"active",\n    "wait_cache_length":"100",\n    "capacity":"50",\n    "dial_interval":"1"\n}\',\n  CURLOPT_HTTPHEADER => array(\n    \'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG\',\n    \'Authorization: Basic c2FkcjpTYWRyQDEyMw==\',\n    \'Content-Type: application/json\'\n  ),\n));\n\n$response = curl_exec($curl);\n\ncurl_close($curl);\necho $response;\n'))),(0,r.kt)(i.Z,{value:"JS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<html>\n    <head>\n        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"><\/script>\n    </head>\n    <body>\n        <script>\n            var settings = {\n              "url": "http://192.168.51.20//api/v3/autodialer/trunks",\n              "method": "PUT",\n              "timeout": 0,\n              "headers": {\n                "X-APIKEY": "9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG",\n                "Authorization": "Basic c2FkcjpTYWRyQDEyMw==",\n                "Content-Type": "application/json"\n              },\n              "data": JSON.stringify({\n                "_id": "5ec63107ce4f6d12c43e250f",\n                "title": "autodialer1",\n                "status": "active",\n                "wait_cache_length": "100",\n                "capacity": "50",\n                "dial_interval": "1"\n              }),\n            };\n\n            $.ajax(settings).done(function (response) {\n              console.log(response);\n            });\n        <\/script>\n    </body>\n</html>\n'))),(0,r.kt)(i.Z,{value:"Linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl --location --request PUT \'http://192.168.51.20//api/v3/autodialer/trunks\' \\\n--header \'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG\' \\\n--header \'Authorization: Basic c2FkcjpTYWRyQDEyMw==\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "_id":"5ec63107ce4f6d12c43e250f",\n    "title":"autodialer1",\n    "status":"active",\n    "wait_cache_length":"100",\n    "capacity":"50",\n    "dial_interval":"1"\n}\'\n')))))}f.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>_});var a=n(87462),r=n(67294),l=n(86010),i=n(12466),o=n(16550),u=n(91980),c=n(67392),s=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,c]=f({queryString:n,groupId:a}),[p,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,s.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),g=(()=>{const e=u??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),k(e)}),[c,k,l]),tabValues:l}}var g=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:o,selectValue:u,tabValues:c}=e;const s=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=s.indexOf(t),a=c[n].value;a!==o&&(p(t),u(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>s.push(e),onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function h(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=k(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",b.tabList)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(h,(0,a.Z)({},e,t)))}function _(e){const t=(0,g.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}}}]);