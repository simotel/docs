"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[36440],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var r=n(87462),a=n(67294),l=n(86010),i=n(12466),o=n(16550),c=n(91980),u=n(67392),s=n(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=d(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[c,u]=g({queryString:n,groupId:r}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,s.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),f=(()=>{const e=c??p;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,l]),tabValues:l}}var f=n(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:o,selectValue:c,tabValues:u}=e;const s=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=s.indexOf(t),r=u[n].value;r!==o&&(p(t),c(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>s.push(e),onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function h(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=b(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},a.createElement(v,(0,r.Z)({},e,t)),a.createElement(h,(0,r.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}},80677:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),l=n(74866),i=n(85162);const o={sidebar_position:2},c="\u062a\u0645\u0627\u0633 \u062f\u0648\u0637\u0631\u0641\u0647",u={unversionedId:"api/v4/callcenter_api/SimoTelAPI/call-originate",id:"api/v4/callcenter_api/SimoTelAPI/call-originate",title:"\u062a\u0645\u0627\u0633 \u062f\u0648\u0637\u0631\u0641\u0647",description:"\u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u062a\u0645\u0627\u0633 \u062f\u0648\u0637\u0631\u0641\u0647 (Number Masking) \u0627\u06cc\u062c\u0627\u062f \u0645\u06cc\u200c\u0634\u0648\u062f. \u062a\u0645\u0627\u0633 \u06af\u06cc\u0631\u0646\u062f\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f \u0647\u0645 \u062f\u0627\u062e\u0644\u06cc \u0628\u0627\u0634\u062f \u0648 \u0647\u0645 \u0634\u0645\u0627\u0631\u0647 \u0645\u062e\u0627\u0628\u0631\u0627\u062a\u06cc.\u0686\u0646\u0627\u0646\u06a9\u0647 \u062a\u0645\u0627\u0633 \u06af\u06cc\u0631\u0646\u062f\u0647 \u0634\u0645\u0627\u0631\u0647 \u0645\u062e\u0627\u0628\u0631\u0627\u062a\u06cc",source:"@site/docs/api/v4/2-callcenter_api/2-SimoTelAPI/4-call-originate.md",sourceDirName:"api/v4/2-callcenter_api/2-SimoTelAPI",slug:"/api/v4/callcenter_api/SimoTelAPI/call-originate",permalink:"/docs/api/v4/callcenter_api/SimoTelAPI/call-originate",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"\u0628\u0631\u0631\u0633\u06cc \u0627\u0631\u0633\u0627\u0644 \u0648 \u062f\u0631\u06cc\u0627\u0641\u062a \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0647\u0627",permalink:"/docs/api/v4/callcenter_api/SimoTelAPI/ping"},next:{title:"User Add",permalink:"/docs/api/v4/callcenter_api/SimoTelAPI/users/users_add"}},s={},p=[{value:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",level:3},{value:"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",level:2},{value:"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc \u062f\u0631\u062e\u0648\u0627\u0633\u062a",id:"\u0646\u0645\u0648\u0646\u0647-\u062e\u0631\u0648\u062c\u06cc-\u062f\u0631\u062e\u0648\u0627\u0633\u062a",level:2}],d={toc:p},m="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u062a\u0645\u0627\u0633-\u062f\u0648\u0637\u0631\u0641\u0647"},"\u062a\u0645\u0627\u0633 \u062f\u0648\u0637\u0631\u0641\u0647"),(0,a.kt)("p",null,"\u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u062a\u0645\u0627\u0633 \u062f\u0648\u0637\u0631\u0641\u0647 (Number Masking) \u0627\u06cc\u062c\u0627\u062f \u0645\u06cc\u200c\u0634\u0648\u062f. \u062a\u0645\u0627\u0633 \u06af\u06cc\u0631\u0646\u062f\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f \u0647\u0645 \u062f\u0627\u062e\u0644\u06cc \u0628\u0627\u0634\u062f \u0648 \u0647\u0645 \u0634\u0645\u0627\u0631\u0647 \u0645\u062e\u0627\u0628\u0631\u0627\u062a\u06cc.\u0686\u0646\u0627\u0646\u06a9\u0647 \u062a\u0645\u0627\u0633 \u06af\u06cc\u0631\u0646\u062f\u0647 \u0634\u0645\u0627\u0631\u0647 \u0645\u062e\u0627\u0628\u0631\u0627\u062a\u06cc\n\u0628\u0627\u0634\u062f\u060c \u0646\u0627\u0645 \u062a\u0631\u0627\u0646\u06a9 \u0646\u06cc\u0632 \u0628\u0627\u06cc\u062f \u0648\u0627\u0631\u062f \u0634\u0648\u062f. \u0645\u0642\u062f\u0627\u0631 time_out \u0627\u062e\u062a\u06cc\u0627\u0631\u06cc \u0627\u0633\u062a \u0648 \u062f\u0631 \u0635\u0648\u0631\u062a \u0639\u062f\u0645 \u062a\u062e\u0635\u06cc\u0635 \u0628\u0647 \u0635\u0648\u0631\u062a \u067e\u06cc\u0634\u200c\u0641\u0631\u0636 30 \u062b\u0627\u0646\u06cc\u0647 \u062f\u0631 \u0646\u0638\u0631 \u06af\u0631\u0641\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f."),(0,a.kt)("p",null,"\u062f\u0631 \u062e\u0631\u0648\u062c\u06cc \u067e\u0627\u0631\u0627\u0645\u062a\u0631\u06cc \u0628\u0647 \u0646\u0627\u0645 originated_call_id \u0628\u0631\u06af\u0631\u062f\u0627\u0646\u062f\u0647 \u0645\u06cc \u0634\u0648\u062f \u06a9\u0647 \u0645\u0639\u0631\u0641 \u062a\u0645\u0627\u0633 \u062f\u0648 \u0637\u0631\u0641\u0647 \u0627\u06cc\u062c\u0627\u062f \u0634\u062f\u0647 \u0627\u0633\u062a.\n\u0627\u06cc\u0646 \u067e\u0627\u0631\u0627\u0645\u062a\u0631 \u062f\u0631 \u06af\u0632\u0627\u0631\u0634\u0627\u062a \u0648 \u0633\u0631\u0648\u06cc\u0633 \u0647\u0627\u06cc CDR \u0648 event \u0647\u0627\u06cc \u0645\u0631\u062a\u0628\u0637 \u0628\u0627 \u062a\u0645\u0627\u0633 \u0647\u0645 \u0627\u0631\u0633\u0627\u0644 \u0645\u06cc \u06af\u0631\u062f\u062f."),(0,a.kt)("h3",{id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627"},"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u0646\u0645\u0648\u0646\u0647"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc \u0636\u0631\u0648\u0631\u06cc","[**]","/\u0645\u0646\u0637\u0642\u06cc","[*]"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"(\u0646\u0641\u0631 \u0627\u0648\u0644 \u062f\u0631 \u062a\u0645\u0627\u0633)\u062a\u0645\u0627\u0633 \u06af\u06cc\u0631\u0646\u062f\u0647"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"557"),(0,a.kt)("td",{parentName:"tr",align:"center"},"**"),(0,a.kt)("td",{parentName:"tr",align:"center"},"caller")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"(\u0646\u0641\u0631 \u062f\u0648\u0645 \u062f\u0631 \u062a\u0645\u0627\u0633)\u0634\u0645\u0627\u0631\u0647 \u0645\u062e\u0627\u0637\u0628"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"552"),(0,a.kt)("td",{parentName:"tr",align:"center"},"**"),(0,a.kt)("td",{parentName:"tr",align:"center"},"callee")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0645\u0633\u06cc\u0631 \u062a\u0645\u0627\u0633 \u0646\u0641\u0631 \u0627\u0648\u0644 \u0631\u0627 \u0645\u0634\u062e\u0635 \u0645\u06cc\u200c\u06a9\u0646\u062f(\u0628\u0647 \u0647\u0645\u0631\u0627\u0647 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a Outgoing_Route)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"main_routing"),(0,a.kt)("td",{parentName:"tr",align:"center"},"**"),(0,a.kt)("td",{parentName:"tr",align:"center"},"context")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"557"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"557"),(0,a.kt)("td",{parentName:"tr",align:"center"},"**"),(0,a.kt)("td",{parentName:"tr",align:"center"},"caller_id")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0645\u0633\u06cc\u0631 \u062a\u0645\u0627\u0633 \u0646\u0641\u0631 \u062f\u0648\u0645 \u0631\u0627 \u0645\u0634\u062e\u0635 \u0645\u06cc\u200c\u06a9\u0646\u062f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"},"trunk_name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0645\u062f\u062a \u0632\u0645\u0627\u0646 \u0627\u0646\u062a\u0638\u0627\u0631 \u0628\u0631\u0627\u06cc \u067e\u0627\u0633\u062e\u06af\u0648\u06cc\u06cc"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"30"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"timeout")))),(0,a.kt)("h2",{id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc"},"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc"),(0,a.kt)(l.Z,{defaultValue:"PHP",values:[{label:"PHP",value:"PHP"},{label:"JS",value:"JS"},{label:"Linux",value:"Linux"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"PHP",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<?php\n\n$curl = curl_init();\n\ncurl_setopt_array($curl, array(\n  CURLOPT_URL => \'http://192.168.51.20//api/v4/call/originate/act\',\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_ENCODING => \'\',\n  CURLOPT_MAXREDIRS => 10,\n  CURLOPT_TIMEOUT => 0,\n  CURLOPT_FOLLOWLOCATION => true,\n  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n  CURLOPT_CUSTOMREQUEST => \'POST\',\n  CURLOPT_POSTFIELDS =>\'{\n    "caller":"557",\n    "callee":"552",\n    "context":"main_routing",\n    "caller_id":"557",\n    "trunk_name":"cisco",\n    "timeout":"30"\n}\',\n  CURLOPT_HTTPHEADER => array(\n    \'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG\',\n    \'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==\',\n    \'Content-Type: application/json\'\n  ),\n));\n\n$response = curl_exec($curl);\n\n    if (!curl_errno($curl)) {\n    $httpcode = curl_getinfo($curl, CURLINFO_HTTP_CODE);\n    echo \'response code:\'.$httpcode, \'<br/>\';\n}\n\ncurl_close($curl);\necho $response;\n'))),(0,a.kt)(i.Z,{value:"JS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<html>\n        <head>\n            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"><\/script>\n        </head>\n    <body>\n        <script>\n            var settings = {\n              "url": "http://192.168.51.20//api/v4/call/originate/act",\n              "method": "POST",\n              "timeout": 0,\n              "headers": {\n                "X-APIKEY": "vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",\n                "Authorization": "Basic dGVzdDpBYTEyMzQ1Ng==",\n                "Content-Type": "application/json"\n              },\n              "data": JSON.stringify({\n                  "caller": "557",\n                  "callee": "552",\n                  "context": "main_routing",\n                  "caller_id": "557",\n                  "trunk_name": "cisco",\n                  "timeout": "30"\n                }),\n            };\n\n\n                $.ajax(settings).always(function (jqXHR) {\n                    console.log("response code: " + jqXHR.status + " " + jqXHR.statusText);\n                    console.log("response body: " + jqXHR.responseText);\n                });\n        <\/script>\n    </body>\n</html>\n'))),(0,a.kt)(i.Z,{value:"Linux",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl --location --request POST \'http://192.168.51.20//api/v4/call/originate/act\' \\\n--header \'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG\' \\\n--header \'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "caller":"557",\n    "callee":"552",\n    "context":"main_routing",\n    "caller_id":"557",\n    "trunk_name":"",\n    "timeout":"30"\n}\'\n')))),(0,a.kt)("h2",{id:"\u0646\u0645\u0648\u0646\u0647-\u062e\u0631\u0648\u062c\u06cc-\u062f\u0631\u062e\u0648\u0627\u0633\u062a"},"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc \u062f\u0631\u062e\u0648\u0627\u0633\u062a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'{\n    "success": 1,\n    "message": null,\n    "data": {\n        "originated_call_id": "orig.call.1683107010.780601"\n    }\n}\n')),(0,a.kt)("p",null," \u0628\u0647 \u062c\u0647\u062a \u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u06cc\u0634\u062a\u0631\u060c \u062f\u0631 \u0628\u062e\u0634 \u0645\u062b\u0627\u0644\u200c\u0647\u0627\u06cc \u06a9\u0627\u0631\u0628\u0631\u062f\u06cc \u0686\u0646\u062f \u0646\u0645\u0648\u0646\u0647 \u0627\u0632 ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/callcenter_api/Scenarios/call_originate"},"\u06a9\u0627\u0631\u0628\u0631\u062f\u0647\u0627\u06cc")," \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0645\u0648\u0631\u062f \u0628\u0631\u0631\u0633\u06cc \u0642\u0631\u0627\u0631 \u06af\u0631\u0641\u062a\u0647\u200c \u0627\u0633\u062a."))}g.isMDXComponent=!0}}]);