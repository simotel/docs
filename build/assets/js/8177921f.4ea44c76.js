"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[6192],{8013:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=r(4848),l=r(8453),a=r(1470),s=r(9365);const i={},o="Voicemail Search",c={id:"developers/api/SimotelAPI/v4/voicemail/voicemail_search",title:"Voicemail Search",description:"\u0627\u0632 \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u062c\u0633\u062a\u062c\u0648 \u062f\u0631 \u0628\u06cc\u0646 \u0635\u0646\u062f\u0648\u0642\u200c\u0647\u0627\u06cc \u0635\u0648\u062a\u06cc \u0645\u0648\u062c\u0648\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.",source:"@site/i18n/fa/docusaurus-plugin-content-docs/current/developers/1-api/2-SimotelAPI/v4/9-voicemail/2-voicemail_search.md",sourceDirName:"developers/1-api/2-SimotelAPI/v4/9-voicemail",slug:"/developers/api/SimotelAPI/v4/voicemail/voicemail_search",permalink:"/docs/developers/api/SimotelAPI/v4/voicemail/voicemail_search",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"docs",previous:{title:"Voicemail Add",permalink:"/docs/developers/api/SimotelAPI/v4/voicemail/voicemail_add"},next:{title:"Voicemail Edit",permalink:"/docs/developers/api/SimotelAPI/v4/voicemail/voicemail_edit"}},u={},d=[{value:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627",id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",level:2},{value:"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components},{Details:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"voicemail-search",children:"Voicemail Search"})}),"\n",(0,n.jsx)(t.p,{children:"\u0627\u0632 \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u062c\u0633\u062a\u062c\u0648 \u062f\u0631 \u0628\u06cc\u0646 \u0635\u0646\u062f\u0648\u0642\u200c\u0647\u0627\u06cc \u0635\u0648\u062a\u06cc \u0645\u0648\u062c\u0648\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f."}),"\n",(0,n.jsx)(t.h2,{id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627"}),"\n",(0,n.jsx)("div",{class:"custom-table",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u0646\u0645\u0648\u0646\u0647"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc \u0636\u0631\u0648\u0631\u06cc[**]/\u0645\u0646\u0637\u0642\u06cc[*]"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u06cc\u0627\u0641\u062a\u0646 \u0645\u0648\u0627\u0631\u062f \u0645\u0634\u0627\u0628\u0647"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"true/false"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"true"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"**"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"alike"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u0646\u0627\u0645 \u0635\u0646\u062f\u0648\u0642 \u0635\u0648\u062a\u06cc"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"conditions->name"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u0634\u0645\u0627\u0631\u0647 \u0635\u0646\u062f\u0648\u0642 \u0635\u0648\u062a\u06cc"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"conditions->number"})]})]})]})}),"\n",(0,n.jsx)(t.h2,{id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",children:"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc"}),"\n","\n",(0,n.jsxs)(a.A,{defaultValue:"usageCode",values:[{label:"\u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647",value:"usageCode"},{label:"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc",value:"outputCode"}],children:[(0,n.jsx)(s.A,{value:"usageCode",children:(0,n.jsxs)(a.A,{defaultValue:"PHP",values:[{label:"PHP",value:"PHP"},{label:"JS",value:"JS"},{label:"Curl",value:"Curl"}],children:[(0,n.jsx)(s.A,{value:"PHP",children:(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f PHP"}),(0,n.jsx)("br",{}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-php",children:"\t<?php\r\n\r\n\t$curl = curl_init();\r\n\r\n\tcurl_setopt_array($curl, array(\r\n\tCURLOPT_URL => 'http://192.168.51.21/api/v4/voicemails/voicemails/search',\r\n\tCURLOPT_RETURNTRANSFER => true,\r\n\tCURLOPT_ENCODING => '',\r\n\tCURLOPT_MAXREDIRS => 10,\r\n\tCURLOPT_TIMEOUT => 0,\r\n\tCURLOPT_FOLLOWLOCATION => true,\r\n\tCURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\r\n\tCURLOPT_CUSTOMREQUEST => 'POST',\r\n\tCURLOPT_POSTFIELDS =>'{\r\n\t\t\"alike\":\"true\",\r\n\t\t\"conditions\":{\r\n\t\t\t\"name\":\"test voicemail\",\r\n\t\t\t\"number\":\"\"\r\n\t\t}\r\n\t}',\r\n\tCURLOPT_HTTPHEADER => array(\r\n\t\t'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG',\r\n\t\t'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==',\r\n\t\t'Content-Type: application/json'\r\n\t),\r\n\t));\r\n\r\n\t$response = curl_exec($curl);\r\n\r\n\t\tif (!curl_errno($curl)) {\r\n\t\t$httpcode = curl_getinfo($curl, CURLINFO_HTTP_CODE);\r\n\t\techo 'response code:'.$httpcode, '<br/>';\r\n\t}\r\n\r\n\tcurl_close($curl);\r\n\techo $response;\r\n?>\n"})})]})}),(0,n.jsx)(s.A,{value:"JS",children:(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f JS"}),(0,n.jsx)("br",{}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'\t<html>\r\n\t\t<head>\r\n\t\t\t<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"><\/script>\r\n\t\t</head>\r\n\t\t<body>\r\n\t\t\t<script>\r\n\t\t\t\tvar settings = {\r\n\t\t\t\t"url": "http://192.168.51.21/api/v4/voicemails/voicemails/search",\r\n\t\t\t\t"method": "POST",\r\n\t\t\t\t"timeout": 0,\r\n\t\t\t\t"headers": {\r\n\t\t\t\t\t"X-APIKEY": "vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",\r\n\t\t\t\t\t"Authorization": "Basic dGVzdDpBYTEyMzQ1Ng==",\r\n\t\t\t\t\t"Content-Type": "application/json"\r\n\t\t\t\t},\r\n\t\t\t\t"data": JSON.stringify({\r\n\t\t\t\t\t"alike": "true",\r\n\t\t\t\t\t"conditions": {\r\n\t\t\t\t\t\t"name": "test voicemail",\r\n\t\t\t\t\t\t"number": ""\r\n\t\t\t\t\t}\r\n\t\t\t\t\t}),\r\n\t\t\t\t};\r\n\r\n\t\t\t\t\t$.ajax(settings).always(function (jqXHR) {\r\n\t\t\t\t\t\tconsole.log("response code: " + jqXHR.status + " " + jqXHR.statusText);\r\n\t\t\t\t\t\tconsole.log("response body: " + jqXHR.responseText);\r\n\t\t\t\t\t});\r\n\t\t\t<\/script>\r\n\t\t</body>\r\n\t</html>\n'})})]})}),(0,n.jsx)(s.A,{value:"Curl",children:(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f Curl"}),(0,n.jsx)("br",{}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'\tcurl --location --request POST \'http://192.168.51.21/api/v4/voicemails/voicemails/search\' \\\r\n\t--header \'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG\' \\\r\n\t--header \'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==\' \\\r\n\t--header \'Content-Type: application/json\' \\\r\n\t--data-raw \'{\r\n\t\t"alike":"true",\r\n\t\t"conditions":{\r\n\t\t\t"name":"test voicemail",\r\n\t\t\t"number":""\r\n\t\t}\r\n\t}\'\n'})})]})})]})}),(0,n.jsx)(s.A,{value:"outputCode",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:'{\r\n    "success": 1,\r\n    "message": "",\r\n    "data": [\r\n        {\r\n            "_id": "64b7f79011294d248a477216",\r\n            "name": "test voicemail",\r\n            "number": "999999",\r\n            "password": "999999",\r\n            "email": "",\r\n            "required_password": "no",\r\n            "allow_change_password": "no",\r\n            "send_email": "no",\r\n            "attach_file_email": "no",\r\n            "play_busy": "no",\r\n            "play_unavailable": "no",\r\n            "play_welcome": "no",\r\n            "Play_CID": "no",\r\n            "Play_Envelope": "no",\r\n            "Delete_Voicemail": "no",\r\n            "more_options": "",\r\n            "date": "1402-04-28 19:17:44"\r\n        }\r\n    ]\r\n}\n'})})})]})]})}function p(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},9365:(e,t,r)=>{r.d(t,{A:()=>s});r(6540);var n=r(8215);const l={tabItem:"tabItem_Ymn6"};var a=r(4848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(l.tabItem,s),hidden:r,children:t})}},1470:(e,t,r)=>{r.d(t,{A:()=>A});var n=r(6540),l=r(8215),a=r(3104),s=r(6347),i=r(205),o=r(7485),c=r(1682),u=r(679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:l}}=e;return{value:t,label:r,attributes:n,default:l}}))}(r);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const l=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(l.location.search);t.set(a,e),l.replace({...l.location,search:t.toString()})}),[a,l])]}function v(e){const{defaultValue:t,queryString:r=!1,groupId:l}=e,a=h(e),[s,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,d]=m({queryString:r,groupId:l}),[v,x]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,a]=(0,u.Dv)(r);return[l,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:l}),b=(()=>{const e=c??v;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{b&&o(b)}),[b]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),x(e)}),[d,x,a]),tabValues:a}}var x=r(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=r(4848);function f(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,r=o.indexOf(t),l=i[r].value;l!==n&&(c(t),s(l))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>o.push(e),onKeyDown:d,onClick:u,...a,className:(0,l.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=v(e);return(0,j.jsxs)("div",{className:(0,l.A)("tabs-container",b.tabList),children:[(0,j.jsx)(f,{...t,...e}),(0,j.jsx)(g,{...t,...e})]})}function A(e){const t=(0,x.A)();return(0,j.jsx)(y,{...e,children:d(e.children)},String(t))}},8453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>i});var n=r(6540);const l={},a=n.createContext(l);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);