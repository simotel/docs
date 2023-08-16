"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[67095],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=i(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(f,u(u({ref:t},c),{},{components:n})):r.createElement(f,u({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,u=new Array(l);u[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,u[1]=o;for(var i=2;i<l;i++)u[i]=n[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(67294),a=n(86010);const l={tabItem:"tabItem_Ymn6"};function u(e){let{children:t,hidden:n,className:u}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,u),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(87462),a=n(67294),l=n(86010),u=n(12466),o=n(16550),s=n(91980),i=n(67392),c=n(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=d(e),[u,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[s,i]=f({queryString:n,groupId:r}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),h=(()=>{const e=s??p;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:u,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),i(e),b(e)}),[i,b,l]),tabValues:l}}var h=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,u.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=i[n].value;r!==o&&(p(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:u}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},u,{className:(0,l.Z)("tabs__item",v.tabItem,u?.className,{"tabs__item--active":o===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function T(e){const t=b(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",v.tabList)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(g,(0,r.Z)({},e,t)))}function k(e){const t=(0,h.Z)();return a.createElement(T,(0,r.Z)({key:String(t)},e))}},18821:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),l=n(74866),u=n(85162);const o={},s="Queue Delete",i={unversionedId:"api/callcenter_api/SimoTelAPI/queues/queues_remove",id:"version-6.2.0/api/callcenter_api/SimoTelAPI/queues/queues_remove",title:"Queue Delete",description:"\u0627\u0632 \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u062d\u0630\u0641 \u0635\u0641 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.",source:"@site/versioned_docs/version-6.2.0/api/1-callcenter_api/3-SimoTelAPI/5-queues/4-queues_remove.md",sourceDirName:"api/1-callcenter_api/3-SimoTelAPI/5-queues",slug:"/api/callcenter_api/SimoTelAPI/queues/queues_remove",permalink:"/docs/6.2.0/api/callcenter_api/SimoTelAPI/queues/queues_remove",draft:!1,tags:[],version:"6.2.0",sidebarPosition:4,frontMatter:{}},c={},p=[{value:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627",id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",level:2},{value:"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc \u062f\u0631\u062e\u0648\u0627\u0633\u062a",id:"\u0646\u0645\u0648\u0646\u0647-\u062e\u0631\u0648\u062c\u06cc-\u062f\u0631\u062e\u0648\u0627\u0633\u062a",level:2},{value:"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",level:2}],d={toc:p},m="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"queue-delete"},"Queue Delete"),(0,a.kt)("p",null,"\u0627\u0632 \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u062d\u0630\u0641 \u0635\u0641 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f."),(0,a.kt)("h2",{id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627"},"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u0646\u0645\u0648\u0646\u0647"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc \u0636\u0631\u0648\u0631\u06cc","[**]","/\u0645\u0646\u0637\u0642\u06cc","[*]"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0634\u0646\u0627\u0633\u0647 \u06cc\u06a9\u062a\u0627\u06cc \u0635\u0641 \u06a9\u0647 \u0627\u0632 ",(0,a.kt)("a",{parentName:"td",href:"/docs/api/callcenter_api/SimoTelAPI/queues/queues_search"},"\u062c\u0633\u062a\u062c\u0648")," \u0628\u062f\u0633\u062a \u0645\u06cc\u200c\u0622\u06cc\u062f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"603c8d9ffc909f2e766d40d3"),(0,a.kt)("td",{parentName:"tr",align:"center"},"**"),(0,a.kt)("td",{parentName:"tr",align:"center"},"id_")))),(0,a.kt)("h2",{id:"\u0646\u0645\u0648\u0646\u0647-\u062e\u0631\u0648\u062c\u06cc-\u062f\u0631\u062e\u0648\u0627\u0633\u062a"},"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc \u062f\u0631\u062e\u0648\u0627\u0633\u062a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'{\n    "success": 1,\n    "message": "Requested operation is done successfully",\n    "data": ""\n}\n')),(0,a.kt)("h2",{id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc"},"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc"),(0,a.kt)(l.Z,{className:"unique-tabs",defaultValue:"PHP",values:[{label:"PHP",value:"PHP"},{label:"JS",value:"JS"},{label:"Linux",value:"Linux"}],mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"PHP",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<?php\n$curl = curl_init();\n\ncurl_setopt_array($curl, array(\n  CURLOPT_URL => 'http://192.168.51.20/api/v3/pbx/queues',\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_ENCODING => '',\n  CURLOPT_MAXREDIRS => 10,\n  CURLOPT_TIMEOUT => 0,\n  CURLOPT_FOLLOWLOCATION => true,\n  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n  CURLOPT_CUSTOMREQUEST => 'DELETE',\n  CURLOPT_POSTFIELDS =>'{\"_id\":\"603c8d9ffc909f2e766d40d3\"}',\n  CURLOPT_HTTPHEADER => array(\n    'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG',\n    'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==',\n    'Content-Type: application/json'\n  ),\n));\n\n$response = curl_exec($curl);\n\nif (!curl_errno($curl)) {\n    $httpcode = curl_getinfo($curl, CURLINFO_HTTP_CODE);\n    echo 'response code:'.$httpcode, '<br/>';\n}\n\ncurl_close($curl);\necho $response;\n"))),(0,a.kt)(u.Z,{value:"JS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<html>\n        <head>\n            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"><\/script>\n        </head>\n    <body>\n        <script>\n            var settings = {\n              "url": "http://192.168.51.20/api/v3/pbx/queues",\n              "method": "DELETE",\n              "timeout": 0,\n              "headers": {\n                "X-APIKEY": "vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",\n                "Authorization": "Basic dGVzdDpBYTEyMzQ1Ng==",\n                "Content-Type": "application/json"\n              },\n              "data": JSON.stringify(\n              {\n                "_id":"603c8d9ffc909f2e766d40d3"\n              }),\n            };\n\n\n                $.ajax(settings).always(function (jqXHR) {\n                    console.log("response code: " + jqXHR.status + " " + jqXHR.statusText);\n                    console.log("response body: " + jqXHR.responseText);\n                });\n        <\/script>\n    </body>\n</html>\n'))),(0,a.kt)(u.Z,{value:"Linux",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl --location --request DELETE 'http://192.168.51.20/api/v3/pbx/queues' \\\n--header 'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG' \\\n--header 'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\"_id\":\"603c8d9ffc909f2e766d40d3\"}'\n")))))}f.isMDXComponent=!0}}]);