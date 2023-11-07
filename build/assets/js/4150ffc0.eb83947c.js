"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[98405],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>v});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(a),m=r,v=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return a?n.createElement(v,o(o({ref:t},c),{},{components:a})):n.createElement(v,o({ref:t},c))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),r=a(67294),l=a(86010),o=a(12466),i=a(16550),u=a(91980),s=a(67392),c=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[u,s]=v({queryString:a,groupId:n}),[p,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),f=(()=>{const e=u??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),b(e)}),[s,b,l]),tabValues:l}}var f=a(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:a,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=s[a].value;n!==i&&(p(t),u(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",k.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function g(e){const t=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},r.createElement(h,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return r.createElement(g,(0,n.Z)({key:String(t)},e))}},13251:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>v,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),l=a(74866),o=a(85162);const i={sidebar_position:1},u="\u062a\u0646\u0638\u06cc\u0645\u0627\u200c\u062a\u200c SEA",s={unversionedId:"api/v4/callcenter_api/SimoTelWebHook/setting",id:"api/v4/callcenter_api/SimoTelWebHook/setting",title:"\u062a\u0646\u0638\u06cc\u0645\u0627\u200c\u062a\u200c SEA",description:"\u0648\u0631\u0698\u0646 \u0647\u0627\u06cc V1,V2,V3 \u0645\u0646\u0633\u0648\u062e \u0634\u062f\u0647 \u0627\u0633\u062a",source:"@site/docs/api/v4/2-callcenter_api/3-SimoTelWebHook/1-setting.md",sourceDirName:"api/v4/2-callcenter_api/3-SimoTelWebHook",slug:"/api/v4/callcenter_api/SimoTelWebHook/setting",permalink:"/docs/api/v4/callcenter_api/SimoTelWebHook/setting",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1}},c={},p=[{value:"Simotel Event API",id:"simotel-event-api",level:2},{value:"API Enabled",id:"api-enabled",level:3},{value:"API Version",id:"api-version",level:3},{value:"API Method",id:"api-method",level:3},{value:"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc \u0633\u0631\u0648\u06cc\u0633G4:",id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc-\u0633\u0631\u0648\u06cc\u0633g4",level:4},{value:"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc \u0633\u0631\u0648\u06cc\u0633Rest4:",id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc-\u0633\u0631\u0648\u06cc\u0633rest4",level:4},{value:"API Events",id:"api-events",level:3},{value:"API Address",id:"api-address",level:3},{value:"API Username",id:"api-username",level:3},{value:"API Password",id:"api-password",level:3}],d={toc:p},m="wrapper";function v(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u062a\u0646\u0638\u06cc\u0645\u0627\u062a-sea"},"\u062a\u0646\u0638\u06cc\u0645\u0627\u200c\u062a\u200c SEA"),(0,r.kt)("admonition",{title:"\u0647\u0634\u062f\u0627\u0631",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u0648\u0631\u0698\u0646 \u0647\u0627\u06cc V1,V2,V3 \u0645\u0646\u0633\u0648\u062e \u0634\u062f\u0647 \u0627\u0633\u062a")),(0,r.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0645\u0634\u0627\u0647\u062f\u0647 \u062a\u0646\u0638\u06cc\u0645\u0627\u062a \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u0628\u062e\u0634 SEA \u0628\u0647 ",(0,r.kt)("inlineCode",{parentName:"p"},"Maintenance > Settings > API Settings"),"  \u0645\u0631\u0627\u062c\u0639\u0647 \u0641\u0631\u0645\u0627\u06cc\u06cc\u062f\u060c\u062f\u0631 \u0642\u0633\u0645\u062a Simotel Event API \u0628\u062e\u0634\u200c\u0647\u0627\u06cc \u0645\u062a\u0641\u0627\u0648\u062a\u06cc \u0648\u062c\u0648\u062f\n\u062f\u0627\u0631\u062f \u06a9\u0647 \u062f\u0631 \u067e\u0627\u06cc\u06cc\u0646 \u0628\u0647 \u062a\u0634\u0631\u06cc\u062d \u0647\u0631\u06a9\u062f\u0627\u0645 \u0645\u06cc\u200c\u067e\u0631\u062f\u0627\u0632\u06cc\u0645"),(0,r.kt)("h2",{id:"simotel-event-api"},"Simotel Event API"),(0,r.kt)("h3",{id:"api-enabled"},"API Enabled"),(0,r.kt)("p",null," \u0645\u0634\u062e\u0635 \u0645\u06cc\u200c\u06a9\u0646\u062f \u0633\u0631\u0648\u06cc\u0633 SEA \u0641\u0639\u0627\u0644 \u0628\u0627\u0634\u062f \u06cc\u0627 \u062e\u06cc\u0631."),(0,r.kt)("h3",{id:"api-version"},"API Version"),(0,r.kt)("p",null,"\u0633\u06cc\u0645\u0648\u062a\u0644 \u062a\u0648\u0627\u0646\u0627\u06cc\u06cc \u0627\u0631\u0633\u0627\u0644 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0628\u0647 \u0633\u0645\u062a \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u062a\u062d\u062a \u0641\u0631\u0645\u062a\u200c\u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u0631\u0627 \u062f\u0627\u0631\u062f\u060c \u0628\u0637\u0648\u0631 \u06a9\u0644\u06cc \u062f\u0648\u0642\u0627\u0644\u0628 \u0627\u0635\u0644\u06cc \u0648\u062c\u0648\u062f \u062f\u0627\u0631\u062f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u0633\u0631\u0648\u06cc\u0633 \u0647\u0627\u06cc G (General): \u062f\u0631 \u0633\u0631\u0648\u06cc\u0633 \u0647\u0627\u06cc G \u062a\u0645\u0627\u0645 \u0631\u0648\u06cc\u062f\u0627\u062f \u0647\u0627 \u0645\u0646\u062d\u0635\u0631\u0627 \u0628\u0647 \u0622\u062f\u0631\u0633 \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u0627\u0631\u0633\u0627\u0644 \u0645\u06cc \u06af\u0631\u062f\u0646\u062f \u0648 \u0641\u0631\u0627\u0647\u0645 \u06a9\u0646\u0646\u062f\u0647\u060c \u0631\u0648\u06cc\u062f\u0627\u062f\u0647\u0627 \u0631\u0627 \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u067e\u0627\u0631\u0627\u0645\u062a\u0631 event_name \u062a\u0641\u06a9\u06cc\u06a9 \u0645\u06cc \u06a9\u0646\u062f.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u0633\u0631\u0648\u06cc\u0633 \u0647\u0627\u06cc Rest: \u062f\u0631 \u0633\u0631\u0648\u06cc\u0633 \u0647\u0627\u06cc Rest\u060c \u0646\u0627\u0645 \u0631\u0648\u06cc\u062f\u0627\u062f \u0628\u0647 \u0627\u0646\u062a\u0647\u0627\u06cc \u0622\u062f\u0631\u0633 \u0627\u0636\u0627\u0641\u0647 \u0634\u062f\u0647 \u0648 \u0633\u067e\u0633 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0628\u0647 \u0633\u0645\u062a \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u0627\u0631\u0633\u0627\u0644 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f."))),(0,r.kt)("p",null,"\u0646\u0645\u0648\u0646\u0647\u200c \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc rest"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"Call <WebService_address>/newstate\nCall <WebService_address>/cdr\n\n")),(0,r.kt)("h3",{id:"api-method"},"API Method"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Get: \u0633\u06cc\u0645\u0648\u062a\u0644 \u062f\u0627\u062f\u0647\u200c\u0647\u0627 \u0631\u0627 \u062f\u0631 \u0642\u0627\u0644\u0628 \u067e\u0627\u0631\u0627\u0645\u062a\u0631 \u0628\u0647 \u0633\u0645\u062a \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u0627\u0631\u0633\u0627\u0644 \u0645\u06cc\u200c\u06a9\u0646\u062f.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Post: \u0627\u0632 \u0648\u0631\u0698\u0646 \u06f4 (Rest4\u060c G4)\u060c \u062f\u0627\u062f\u0647\u200c\u0647\u0627 \u0628\u0627 \u0641\u0631\u0645\u062a json \u062f\u0631 \u0628\u062f\u0646\u0647 \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0642\u0631\u0627\u0631 \u06af\u0631\u0641\u062a\u0647 \u0648 \u0628\u0647 \u0633\u0645\u062a WebService \u0627\u0631\u0633\u0627\u0644 \u0645\u06cc \u06af\u0631\u062f\u062f. \u062f\u0631 \u0648\u0631\u0698\u0646 \u0647\u0627\u06cc \u06f2 \u0648 \u06f3 \u0647\u0645\u0627\u0646\u0646\u062f GET \u0628\u0647 \u0635\u0648\u0631\u062a \u067e\u0627\u0631\u0627\u0645\u062a\u0631 \u0627\u0631\u0633\u0627\u0644 \u0645\u06cc\u200c\u06af\u0631\u062f\u062f."))),(0,r.kt)("h4",{id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc-\u0633\u0631\u0648\u06cc\u0633g4"},"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc \u0633\u0631\u0648\u06cc\u0633G4:"),(0,r.kt)(l.Z,{defaultValue:"Post",values:[{label:"Get",value:"Get"},{label:"Post",value:"Post"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Get",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -u username:password --location --request GET \\\n'http://192.168.51.193/call/?event_name=NewState&exten=991&state=Unavailable' --data-raw ''\n"))),(0,r.kt)(o.Z,{value:"Post",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl -u username:password --location --request POST \'http://192.168.51.193/call/\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n"event_name": "NewState",\n"exten": "991",\n"state": "Unavailable"\n}\'\n')))),(0,r.kt)("h4",{id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc-\u0633\u0631\u0648\u06cc\u0633rest4"},"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc \u0633\u0631\u0648\u06cc\u0633Rest4:"),(0,r.kt)(l.Z,{defaultValue:"Post",values:[{label:"Get",value:"Get"},{label:"Post",value:"Post"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Get",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -u username:password --location -- \\\nrequest GET 'http://192.168.51.193/call/NewState?event_name=NewState&exten=991&state=Unavailable'\n"))),(0,r.kt)(o.Z,{value:"Post",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl -u username:password --location --request POST \'http://192.168.51.193/call/NewState\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n"event_name": "NewState",\n"exten": "991",\n"state": "Unavailable"\n}\'\n')))),(0,r.kt)("h3",{id:"api-events"},"API Events"),(0,r.kt)("p",null,"\u062f\u0631 \u0627\u06cc\u0646 \u0642\u0633\u0645\u062a \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0648 \u0631\u0648\u06cc\u062f\u0627\u062f\u0647\u0627\u06cc \u0633\u06cc\u0633\u062a\u0645 \u062f\u0633\u062a\u0647\u200c\u0628\u0646\u062f\u06cc \u0634\u062f\u0647\u200c\u0627\u0646\u062f \u0648 \u0628\u0633\u062a\u0647 \u0628\u0647 \u0646\u06cc\u0627\u0632\u060c \u0634\u0645\u0627 \u0645\u0634\u062e\u0635 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u062f \u0686\u0647 \u0627\u0637\u0644\u0627\u0639\u0627\u062a\u06cc \u0628\u0627\u06cc\u062f \u0628\u0647 \u0633\u0645\u062a WebService \u0627\u0631\u0633\u0627\u0644 \u0634\u0648\u062f\u060c \u0631\u0648\u06cc\u062f\u0627\u062f\u0647\u0627 \u0648 \u0627\u0637\u0644\u0627\u0639\u062a\n\u0622\u0646\u0647\u0627 \u0628\u0635\u0648\u0631\u062a \u062f\u0642\u06cc\u0642\u200c\u062a\u0631 \u062f\u0631 \u0628\u062e\u0634\u200c\u0647\u0627\u06cc \u0622\u06cc\u0646\u062f\u0647 \u0628\u0631\u0631\u0633\u06cc \u0645\u06cc\u200c\u0634\u0648\u0646\u062f."),(0,r.kt)("h3",{id:"api-address"},"API Address"),(0,r.kt)("p",null,"\u062f\u0631 \u0627\u06cc\u0646\u062c\u0627 \u0646\u06cc\u0632 \u0622\u062f\u0631\u0633 \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u0642\u0631\u0627\u0631 \u0645\u06cc\u200c\u06af\u06cc\u0631\u062f."),(0,r.kt)("h3",{id:"api-username"},"API Username"),(0,r.kt)("p",null,"\u062f\u0631 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 \u0627\u062d\u0631\u0627\u0632\u0647\u0648\u06cc\u062a\u06cc \u0627\u0632 \u0633\u0645\u062a \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u0627\u0646\u062c\u0627\u0645 \u0645\u06cc\u200c\u0634\u0648\u062f\u060c\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc \u0627\u06cc\u0646\u062c\u0627 \u0648\u0627\u0631\u062f \u0645\u06cc\u200c\u0634\u0648\u062f."),(0,r.kt)("h3",{id:"api-password"},"API Password"),(0,r.kt)("p",null,"\u062f\u0631 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 \u0627\u062d\u0631\u0627\u0632\u0647\u0648\u06cc\u062a\u06cc \u0627\u0632 \u0633\u0645\u062a \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u0627\u0646\u062c\u0627\u0645 \u0645\u06cc\u200c\u0634\u0648\u062f\u060c\u0631\u0645\u0632\u0639\u0628\u0648\u0631 \u0627\u06cc\u0646\u062c\u0627 \u0648\u0627\u0631\u062f \u0645\u06cc\u200c\u0634\u0648\u062f."),(0,r.kt)("admonition",{title:"\u0646\u06a9\u062a\u0647 ",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u062f\u0631 \u0628\u0631\u062e\u06cc \u0627\u0632 \u0631\u0648\u06cc\u062f\u0627\u062f\u200c\u0647\u0627\u06cc  SEA \u067e\u0627\u0631\u0627\u0645\u062a\u0631\u06cc \u0628\u0647 \u0646\u0627\u0645 ",(0,r.kt)("inlineCode",{parentName:"p"},"unique_id")," \u0648\u062c\u0648\u062f \u062f\u0627\u0631\u062f. \u0628\u0647 \u0627\u0632\u0627\u06cc \u0647\u0631 \u062a\u0645\u0627\u0633\u06cc \u06a9\u0647 \u062f\u0631 \u0633\u06cc\u0633\u062a\u0645 \u062a\u0648\u0644\u06cc\u062f \u0645\u06cc\u200c\u0634\u0648\u062f \u06cc\u06a9\n\u0634\u0646\u0627\u0633\u0647 \u06cc\u06a9\u062a\u0627 \u062a\u0648\u0644\u06cc\u062f \u0645\u06cc\u200c\u0634\u0648\u062f\u060c \u0628\u0646\u0627\u0628\u0631\u0627\u06cc\u0646 \u0634\u0645\u0627 \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 unique_id \u062a\u0645\u0627\u0633 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0631\u0648\u06cc\u062f\u0627\u062f\u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u06cc\u06a9 \u062a\u0645\u0627\u0633 \u0631\u0627 \u0634\u0646\u0627\u0633\u0627\u06cc\u06cc \u06a9\u0646\u06cc\u062f.")))}v.isMDXComponent=!0}}]);