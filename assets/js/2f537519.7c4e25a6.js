"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[185],{2842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>x,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>o});var l=n(4848),r=n(8453),s=n(1470),i=n(9365);const c={sidebar_position:1},d="User Add",a={id:"developers/api/SimotelAPI/v4/users/users_add",title:"User Add",description:"\u0627\u0632 \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f\u0646 \u062f\u0627\u062e\u0644\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/developers/1-api/2-SimotelAPI/v4/4-users/1-users_add.md",sourceDirName:"developers/1-api/2-SimotelAPI/v4/4-users",slug:"/developers/api/SimotelAPI/v4/users/users_add",permalink:"/docs/developers/api/SimotelAPI/v4/users/users_add",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"\u062a\u0645\u0627\u0633 \u062f\u0648\u0637\u0631\u0641\u0647",permalink:"/docs/developers/api/SimotelAPI/v4/call-originate"},next:{title:"User Search",permalink:"/docs/developers/api/SimotelAPI/v4/users/users_search"}},x={},o=[{value:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627",id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",level:2},{value:"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",level:2}];function u(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"user-add",children:"User Add"})}),"\n",(0,l.jsx)(t.p,{children:"\u0627\u0632 \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f\u0646 \u062f\u0627\u062e\u0644\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f."}),"\n",(0,l.jsx)(t.h2,{id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627"}),"\n",(0,l.jsx)("div",{class:"custom-table",children:(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u0646\u0645\u0648\u0646\u0647"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc \u0636\u0631\u0648\u0631\u06cc[**]/\u0645\u0646\u0637\u0642\u06cc[*]"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631 \u0647\u0627"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u0646\u0648\u0639 \u06a9\u0627\u0631\u0628\u0631"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"SIP/IAX2"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"SIP"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"user_type"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u0648\u0636\u0639\u06cc\u062a \u06a9\u0627\u0631\u0628\u0631"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"yes/no"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"yes"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"active"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"User2"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"**"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"name"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u0634\u0645\u0627\u0631\u0647 \u062f\u0627\u062e\u0644\u06cc"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"999"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"**"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"number"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"cid \u06a9\u0627\u0631\u0628\u0631"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"999"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"cid_number"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u0631\u0645\u0632\u0639\u0628\u0648\u0631"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"999"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"**"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"secret"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u0636\u0628\u0637 \u0645\u06a9\u0627\u0644\u0645\u0627\u062a \u0635\u0648\u062a\u06cc"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"yes/no"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"no"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"call_record"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"yes/no"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"no"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"push_notification"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u0644\u06cc\u0633\u062a IP\u0647\u0627\u06cc \u063a\u06cc\u0631 \u0645\u062c\u0627\u0632"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.0.0.0/0.0.0.0"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"deny"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u0644\u06cc\u0633\u062a IP\u0647\u0627\u06cc \u0645\u062c\u0627\u0632"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"0.0.0.0/0.0.0.0"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"permit"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u0627\u0633\u062a\u0627\u0646\u062f\u0627\u0631\u062f dtmf"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"rfc2833"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"dtmfmode"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"yes/no"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"no"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"canreinvite"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"yes/no"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"no"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"directmedia"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u06a9\u0627\u0646\u062a\u06a9\u0633\u062a \u06a9\u0627\u0631\u0628\u0631"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"main_routing"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"context"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"dynamic"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"host"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"user"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"type"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"yes/no/Force Report & Co-Media"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"no"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"nat"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"5060"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"port"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"yes/no"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"no"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"qualify"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"callgroup"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"pickupgroup"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"yes/no"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"no"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"callcounter"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"yes/no"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"no"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"faxdetect"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u062a\u0639\u062f\u0627\u062f \u062a\u0645\u0627\u0633 \u067e\u0634\u062a \u062e\u0637"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"call_limit"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"yes/no"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"no"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"trunk"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"yes/no"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"no"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"transfer"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"email"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"571"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"forward_policy->Busy"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"09158315762"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"forward_policy->No Answer"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"570"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"forward_policy->UnAvailable"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"2121"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"forward_policy->All"})]})]})]})}),"\n",(0,l.jsx)(t.h2,{id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",children:"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc"}),"\n","\n",(0,l.jsxs)(s.A,{defaultValue:"usageCode",values:[{label:"\u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647",value:"usageCode"},{label:"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc",value:"outputCode"}],children:[(0,l.jsx)(i.A,{value:"usageCode",children:(0,l.jsxs)(s.A,{defaultValue:"PHP",values:[{label:"PHP",value:"PHP"},{label:"JS",value:"JS"},{label:"Curl",value:"Curl"}],children:[(0,l.jsx)(i.A,{value:"PHP",children:(0,l.jsxs)(n,{children:[(0,l.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f PHP"}),(0,l.jsx)("br",{}),(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-php",children:'\n<?php\n$curl = curl_init();\n\ncurl_setopt_array($curl, array(\n  CURLOPT_URL => \'http://192.168.51.20/api/v4/pbx/users/add\',\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_ENCODING => \'\',\n  CURLOPT_MAXREDIRS => 10,\n  CURLOPT_TIMEOUT => 0,\n  CURLOPT_FOLLOWLOCATION => true,\n  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n  CURLOPT_CUSTOMREQUEST => \'POST\',\n  CURLOPT_POSTFIELDS =>\'{\n      "user_type":"SIP",\n      "active":"yes",\n      "name":"User2",\n      "number":"99998",\n      "cid_number":"999",\n      "secret":"999",\n      "call_record":"no",\n      "push_notification":"no",\n      "deny":"0.0.0.0/0.0.0.0",\n      "permit":"0.0.0.0/0.0.0.0",\n      "dtmfmode":"rfc2833",\n      "canreinvite":"no",\n      "directmedia":"no",\n      "context":"main_routing",\n      "host":"dynamic",\n      "type":"user",\n      "nat":"no",\n      "port":"5060",\n      "qualify":"no",\n      "callgroup":"1",\n      "pickupgroup":"1",\n      "callcounter":"no",\n      "faxdetect":"no",\n      "call_limit":"",\n      "trunk":"no",\n      "transfer":"no",\n      "email":"",\n      "forward_policy":{"Busy":"571","No Answer":"09158315762","UnAvailable":"570","All":"2121"},\n      "more_options":""\n  }\',\n  CURLOPT_HTTPHEADER => array(\n    \'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG\',\n    \'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==\',\n    \'Content-Type: application/json\'\n  ),\n));\n\n$response = curl_exec($curl);\nif (!curl_errno($curl)) {\n  $httpcode = curl_getinfo($curl, CURLINFO_HTTP_CODE);\n  echo \'response code:\'.$httpcode, \'<br/>\';\n}\ncurl_close($curl);\necho $response;\n?>\n\n'})})]})}),(0,l.jsx)(i.A,{value:"JS",children:(0,l.jsxs)(n,{children:[(0,l.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f JS"}),(0,l.jsx)("br",{}),(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-js",children:'\n<html>\n  <head>\n    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"><\/script>\n  </head>\n  <body>\n    <script>\n      var settings = {\n        "url": "http://192.168.51.20/api/v4/pbx/users/add",\n        "method": "POST",\n        "timeout": 0,\n        "headers": {\n          "X-APIKEY": "vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",\n          "Authorization": "Basic dGVzdDpBYTEyMzQ1Ng==",\n          "Content-Type": "application/json"\n        },\n        "data": JSON.stringify({\n          "user_type": "SIP",\n          "active": "yes",\n          "name": "User2",\n          "number": "999",\n          "cid_number": "999",\n          "secret": "999",\n          "call_record": "no",\n          "push_notification": "no",\n          "deny": "0.0.0.0/0.0.0.0",\n          "permit": "0.0.0.0/0.0.0.0",\n          "dtmfmode": "rfc2833",\n          "canreinvite": "no",\n          "directmedia": "no",\n          "context": "main_routing",\n          "host": "dynamic",\n          "type": "user",\n          "nat": "no",\n          "port": "5060",\n          "qualify": "no",\n          "callgroup": "1",\n          "pickupgroup": "1",\n          "callcounter": "no",\n          "faxdetect": "no",\n          "call_limit": "",\n          "trunk": "no",\n          "transfer": "no",\n          "email": "",\n          "forward_policy": {\n            "Busy": "571",\n            "No Answer": "09158315762",\n            "UnAvailable": "570",\n            "All": "2121"\n          },\n          "more_options": ""\n        })\n      };\n\n      $.ajax(settings).always(function (jqXHR) {\n        console.log("response code: " + jqXHR.status + " " + jqXHR.statusText);\n        console.log("response body: " + jqXHR.responseText);\n      });\n    <\/script>\n  </body>\n</html>\n\n'})})]})}),(0,l.jsx)(i.A,{value:"Curl",children:(0,l.jsxs)(n,{children:[(0,l.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f Curl"}),(0,l.jsx)("br",{}),(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:'\ncurl --location --request POST \'http://192.168.51.20/api/v4/pbx/users/add\' \\\n--header \'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG\' \\\n--header \'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n  "user_type":"SIP",\n  "active":"yes",\n  "name":"User2",\n  "number":"999",\n  "cid_number":"999",\n  "secret":"999",\n  "call_record":"no",\n  "push_notification":"no",\n  "deny":"0.0.0.0/0.0.0.0",\n  "permit":"0.0.0.0/0.0.0.0",\n  "dtmfmode":"rfc2833",\n  "canreinvite":"no",\n  "directmedia":"no",\n  "context":"main_routing",\n  "host":"dynamic",\n  "type":"user",\n  "nat":"no",\n  "port":"5060",\n  "qualify":"no",\n  "callgroup":"1",\n  "pickupgroup":"1",\n  "callcounter":"no",\n  "faxdetect":"no",\n  "call_limit":"",\n  "trunk":"no",\n  "transfer":"no",\n  "email":"",\n  "forward_policy":{"Busy":"571","No Answer":"09158315762","UnAvailable":"570","All":"2121"},\n  "more_options":""\n}\'\n\n'})})]})})]})}),(0,l.jsx)(i.A,{value:"outputCode",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell",children:'\n{\n  "status": "success",\n  "message": "User created successfully",\n  "user_id": "999"\n}\n\n'})})})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var l=n(8215);const r={tabItem:"tabItem_Ymn6"};var s=n(4848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,l.A)(r.tabItem,i),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>v});var l=n(6540),r=n(8215),s=n(3104),i=n(6347),c=n(205),d=n(7485),a=n(1682),x=n(679);function o(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??function(e){return o(e).map((e=>{let{props:{value:t,label:n,attributes:l,default:r}}=e;return{value:t,label:n,attributes:l,default:r}}))}(n);return function(e){const t=(0,a.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,d.aZ)(s),(0,l.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=u(e),[i,d]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=n.find((e=>e.default))??n[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:s}))),[a,o]=j({queryString:n,groupId:r}),[y,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,x.Dv)(n);return[r,(0,l.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),A=(()=>{const e=a??y;return h({value:e,tabValues:s})?e:null})();(0,c.A)((()=>{A&&d(A)}),[A]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);d(e),o(e),g(e)}),[o,g,s]),tabValues:s}}var g=n(2303);const A={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var p=n(4848);function m(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:a}=(0,s.a_)(),x=e=>{const t=e.currentTarget,n=d.indexOf(t),r=c[n].value;r!==l&&(a(t),i(r))},o=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return(0,p.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:c.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,p.jsx)("li",{role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,ref:e=>d.push(e),onKeyDown:o,onClick:x,...s,className:(0,r.A)("tabs__item",A.tabItem,s?.className,{"tabs__item--active":l===t}),children:n??t},t)}))})}function f(e){let{lazy:t,children:n,selectedValue:s}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,l.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,p.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function b(e){const t=y(e);return(0,p.jsxs)("div",{className:(0,r.A)("tabs-container",A.tabList),children:[(0,p.jsx)(m,{...t,...e}),(0,p.jsx)(f,{...t,...e})]})}function v(e){const t=(0,g.A)();return(0,p.jsx)(b,{...e,children:o(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var l=n(6540);const r={},s=l.createContext(r);function i(e){const t=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(s.Provider,{value:t},e.children)}}}]);