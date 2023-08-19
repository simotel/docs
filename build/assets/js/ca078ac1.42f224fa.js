"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[35520],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),u=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||l;return a?n.createElement(f,i(i({ref:t},s),{},{components:a})):n.createElement(f,i({ref:t},s))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),l=a(86010),i=a(12466),o=a(16550),c=a(91980),u=a(67392),s=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,c._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[c,u]=f({queryString:a,groupId:n}),[p,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,s.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),k=(()=>{const e=c??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,l]),tabValues:l}}var k=a(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:o,selectValue:c,tabValues:u}=e;const s=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=s.indexOf(t),n=u[a].value;n!==o&&(p(t),c(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=s.indexOf(e.currentTarget)+1;t=s[a]??s[0];break}case"ArrowLeft":{const a=s.indexOf(e.currentTarget)-1;t=s[a]??s[s.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>s.push(e),onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function h(e){const t=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return r.createElement(h,(0,n.Z)({key:String(t)},e))}},11148:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),l=a(74866),i=a(85162);const o={},c="Fax Add",u={unversionedId:"api/v4/callcenter_api/SimoTelAPI/fax/fax_add",id:"api/v4/callcenter_api/SimoTelAPI/fax/fax_add",title:"Fax Add",description:"\u0627\u0632 \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u0627\u0641\u0632\u0648\u062f\u0646 \u0641\u06a9\u0633 \u0627\u0631\u0633\u0627\u0644\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.",source:"@site/docs/api/v4/1-callcenter_api/3-SimoTelAPI/11-fax/2-fax_add.md",sourceDirName:"api/v4/1-callcenter_api/3-SimoTelAPI/11-fax",slug:"/api/v4/callcenter_api/SimoTelAPI/fax/fax_add",permalink:"/docs/api/v4/callcenter_api/SimoTelAPI/fax/fax_add",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"docs",previous:{title:"Fax Upload",permalink:"/docs/api/v4/callcenter_api/SimoTelAPI/fax/fax_upload"},next:{title:"Fax Search",permalink:"/docs/api/v4/callcenter_api/SimoTelAPI/fax/fax_search"}},s={},p=[{value:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627",id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",level:2},{value:"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",level:2},{value:"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc \u062f\u0631\u062e\u0648\u0627\u0633\u062a",id:"\u0646\u0645\u0648\u0646\u0647-\u062e\u0631\u0648\u062c\u06cc-\u062f\u0631\u062e\u0648\u0627\u0633\u062a",level:2}],d={toc:p},m="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fax-add"},"Fax Add"),(0,r.kt)("p",null,"\u0627\u0632 \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u0627\u0641\u0632\u0648\u062f\u0646 \u0641\u06a9\u0633 \u0627\u0631\u0633\u0627\u0644\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f."),(0,r.kt)("admonition",{title:"\u0646\u06a9\u062a\u0647",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},'\u0628\u0631\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u0641\u06a9\u0633 \u0628\u0647 \u0635\u0648\u0631\u062a \u0641\u0627\u06cc\u0644 \u0641\u06cc\u0644\u062f "file" \u0628\u0627\u06cc\u062f \u0645\u0642\u062f\u0627\u0631 \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u062f \u0648 \u0641\u06cc\u0644\u062f "text" \u0627\u0632 JSON \u0648\u0631\u0648\u062f\u06cc \u062d\u0630\u0641 \u0634\u0648\u062f. ')),(0,r.kt)("h2",{id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627"},"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u0646\u0645\u0648\u0646\u0647"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc \u0636\u0631\u0648\u0631\u06cc","[**]","/\u0645\u0646\u0637\u0642\u06cc","[*]"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u067e\u0627\u0631\u0627\u0645\u062a\u0631 \u0647\u0627"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u0634\u0646\u0627\u0633\u0647 \u06cc\u06a9\u062a\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u06a9\u0646\u0646\u062f\u0647"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"username1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"*"),(0,r.kt)("td",{parentName:"tr",align:"center"},"sender_id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u0634\u0645\u0627\u0631\u0647 \u0645\u0642\u0635\u062f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"112233"),(0,r.kt)("td",{parentName:"tr",align:"center"},"*"),(0,r.kt)("td",{parentName:"tr",align:"center"},"to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u062f\u0627\u062e\u0644\u06cc \u0645\u0642\u0635\u062f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"558"),(0,r.kt)("td",{parentName:"tr",align:"center"},"*"),(0,r.kt)("td",{parentName:"tr",align:"center"},"ext")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u062a\u0631\u0627\u0646\u06a9 \u062e\u0631\u0648\u062c\u06cc"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"trunk_name1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"*"),(0,r.kt)("td",{parentName:"tr",align:"center"},"trunk_name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u0646\u0627\u0645 \u0641\u0627\u06cc\u0644 \u0622\u067e\u0644\u0648\u062f \u0634\u062f\u0647 \u06a9\u0647 \u062f\u0631 \u062c\u0648\u0627\u0628 ",(0,r.kt)("a",{parentName:"td",href:"/docs/api/callcenter_api/SimoTelAPI/fax/fax_upload"},"fax upload")," \u0628\u0631\u06af\u0631\u062f\u0627\u0646\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f(\u062f\u0631 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 \u0641\u06cc\u0644\u062f file \u0645\u0642\u062f\u0627\u0631 \u062f\u0627\u0631\u062f \u0641\u06cc\u0644\u062f text \u062d\u0630\u0641 \u0634\u0648\u062f)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"file-20200624051520-61681-fax-test"),(0,r.kt)("td",{parentName:"tr",align:"center"},"*"),(0,r.kt)("td",{parentName:"tr",align:"center"},"file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u0628\u0631\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u0641\u0627\u06cc\u0644 \u0645\u062a\u0646\u06cc"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"this is sample"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"just for test"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"description")))),(0,r.kt)("h2",{id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc"},"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc"),(0,r.kt)(l.Z,{className:"unique-tabs",defaultValue:"PHP",values:[{label:"PHP",value:"PHP"},{label:"Linux",value:"Linux"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"PHP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<?php\n\n$curl = curl_init();\n\ncurl_setopt_array($curl, array(\n  CURLOPT_URL => \'http://192.168.51.20//api/v4/pbx/faxes/add\',\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_ENCODING => \'\',\n  CURLOPT_MAXREDIRS => 10,\n  CURLOPT_TIMEOUT => 0,\n  CURLOPT_FOLLOWLOCATION => true,\n  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n  CURLOPT_CUSTOMREQUEST => \'POST\',\n  CURLOPT_POSTFIELDS =>\'{\n    "sender_id":"username1",\n    "to":"112233",\n    "ext":"558",\n    "trunk_name":"Cisco",\n    "file":"file-20200624051520-61681-fax-test",\n    "description":"Just for test"\n}\',\n  CURLOPT_HTTPHEADER => array(\n    \'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG\',\n    \'Authorization: Basic c2FkcjpTYWRyQDEyMw==\',\n    \'Content-Type: application/json\'\n  ),\n));\n\n$response = curl_exec($curl);\n\ncurl_close($curl);\necho $response;\n'))),(0,r.kt)(i.Z,{value:"Linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl --location --request POST \'http://192.168.51.20//api/v4/pbx/faxes/add\' \\\n--header \'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG\' \\\n--header \'Authorization: Basic c2FkcjpTYWRyQDEyMw==\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "sender_id":"username1",\n    "to":"112233",\n    "ext":"558",\n    "trunk_name":"Cisco",\n    "file":"file-20200624051520-61681-fax-test",\n    "description":"Just for test"\n}\'\n')))),(0,r.kt)("h2",{id:"\u0646\u0645\u0648\u0646\u0647-\u062e\u0631\u0648\u062c\u06cc-\u062f\u0631\u062e\u0648\u0627\u0633\u062a"},"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc \u062f\u0631\u062e\u0648\u0627\u0633\u062a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'{\n    "success": 1,\n    "message": "Requested operation is done successfully",\n    "data": {\n        "_id": "64b800977ec8cb8899ee28a2"\n    }\n}\n')))}f.isMDXComponent=!0}}]);