"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[22781],{79874:function(e,t,a){a.d(t,{Zo:function(){return k},kt:function(){return m}});var r=a(93106);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),i=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},k=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,k=d(e,["components","mdxType","originalType","parentName"]),c=i(a),s=n,m=c["".concat(p,".").concat(s)]||c[s]||u[s]||l;return a?r.createElement(m,o(o({ref:t},k),{},{components:a})):r.createElement(m,o({ref:t},k))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=s;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d[c]="string"==typeof e?e:n,o[1]=d;for(var i=2;i<l;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},42995:function(e,t,a){a.r(t),a.d(t,{assets:function(){return i},contentTitle:function(){return d},default:function(){return s},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return k}});a(93106);var r=a(79874);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const o={title:"RewardedVideoAd",sidebar_label:"RewardedVideoAd"},d=void 0,p={unversionedId:"apis/ad/RewardedVideoAd",id:"version-4.x/apis/ad/RewardedVideoAd",title:"RewardedVideoAd",description:"Rewarded video ad component. This is a native component at a higher layer than normal components. A rewarded video ad is a singleton (a global singleton in Mini Games, and an intra-page singleton in Mini Programs where singleton objects cannot be used across pages), which is hidden by default, and you must call RewardedVideoAd.show() to display them.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-4.x/apis/ad/RewardedVideoAd.md",sourceDirName:"apis/ad",slug:"/apis/ad/RewardedVideoAd",permalink:"/mirror/taro-docs/en/docs/4.x/apis/ad/RewardedVideoAd",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-4.x/apis/ad/RewardedVideoAd.md",tags:[],version:"4.x",frontMatter:{title:"RewardedVideoAd",sidebar_label:"RewardedVideoAd"},sidebar:"API",previous:{title:"InterstitialAd",permalink:"/mirror/taro-docs/en/docs/4.x/apis/ad/InterstitialAd"},next:{title:"Snapshot",permalink:"/mirror/taro-docs/en/docs/4.x/apis/skyline/Snapshot"}},i={},k=[{value:"Methods",id:"methods",level:2},{value:"load",id:"load",level:3},{value:"API Support",id:"api-support",level:4},{value:"show",id:"show",level:3},{value:"API Support",id:"api-support-1",level:4},{value:"destroy",id:"destroy",level:3},{value:"API Support",id:"api-support-2",level:4},{value:"offClose",id:"offclose",level:3},{value:"API Support",id:"api-support-3",level:4},{value:"offError",id:"offerror",level:3},{value:"API Support",id:"api-support-4",level:4},{value:"offLoad",id:"offload",level:3},{value:"API Support",id:"api-support-5",level:4},{value:"onClose",id:"onclose",level:3},{value:"API Support",id:"api-support-6",level:4},{value:"onError",id:"onerror",level:3},{value:"API Support",id:"api-support-7",level:4},{value:"onLoad",id:"onload",level:3},{value:"API Support",id:"api-support-8",level:4},{value:"Parameters",id:"parameters",level:2},{value:"OnErrorCallbackResult",id:"onerrorcallbackresult",level:3},{value:"OnCloseCallbackResult",id:"onclosecallbackresult",level:3},{value:"OffCloseCallback",id:"offclosecallback",level:3},{value:"OffErrorCallback",id:"offerrorcallback",level:3},{value:"OffLoadCallback",id:"offloadcallback",level:3},{value:"OnCloseCallback",id:"onclosecallback",level:3},{value:"OnErrorCallback",id:"onerrorcallback",level:3},{value:"OnLoadCallback",id:"onloadcallback",level:3},{value:"API Support",id:"api-support-9",level:2}],c={toc:k},u="wrapper";function s(e){var{components:t}=e,a=l(e,["components"]);return(0,r.kt)(u,n({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Rewarded video ad component. This is a native component at a higher layer than normal components. A rewarded video ad is a singleton (a global singleton in Mini Games, and an intra-page singleton in Mini Programs where singleton objects cannot be used across pages), which is hidden by default, and you must call ",(0,r.kt)("inlineCode",{parentName:"p"},"RewardedVideoAd.show()")," to display them."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/ad/RewardedVideoAd.html"}),"Reference"))),(0,r.kt)("h2",n({},{id:"methods"}),"Methods"),(0,r.kt)("h3",n({},{id:"load"}),"load"),(0,r.kt)("p",null,"Loads a rewarded video ad."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/ad/RewardedVideoAd.load.html"}),"Reference"))),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"() => Promise<any>\n")),(0,r.kt)("h4",n({},{id:"api-support"}),"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"RewardedVideoAd.load"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}))))),(0,r.kt)("h3",n({},{id:"show"}),"show"),(0,r.kt)("p",null,"Displays rewarded video ads. These ads are pushed from the bottom of the screen."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/ad/RewardedVideoAd.show.html"}),"Reference"))),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"() => Promise<any>\n")),(0,r.kt)("h4",n({},{id:"api-support-1"}),"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"RewardedVideoAd.show"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}))))),(0,r.kt)("h3",n({},{id:"destroy"}),"destroy"),(0,r.kt)("p",null,"Destory rewarded video ads."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/ad/RewardedVideoAd.destroy.html"}),"Reference"))),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"() => void\n")),(0,r.kt)("h4",n({},{id:"api-support-2"}),"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"RewardedVideoAd.destroy"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}))))),(0,r.kt)("h3",n({},{id:"offclose"}),"offClose"),(0,r.kt)("p",null,"Un-listens on the event of tapping the ",(0,r.kt)("inlineCode",{parentName:"p"},"Close Ad")," button."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/ad/RewardedVideoAd.offClose.html"}),"Reference"))),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"(callback: OffCloseCallback) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"callback"),(0,r.kt)("td",null,(0,r.kt)("code",null,"OffCloseCallback"))))),(0,r.kt)("h4",n({},{id:"api-support-3"}),"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"RewardedVideoAd.offClose"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}))))),(0,r.kt)("h3",n({},{id:"offerror"}),"offError"),(0,r.kt)("p",null,"Un-listens on the rewarded video error event."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/ad/RewardedVideoAd.offError.html"}),"Reference"))),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"(callback: OffErrorCallback) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"callback"),(0,r.kt)("td",null,(0,r.kt)("code",null,"OffErrorCallback"))))),(0,r.kt)("h4",n({},{id:"api-support-4"}),"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"RewardedVideoAd.offError"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}))))),(0,r.kt)("h3",n({},{id:"offload"}),"offLoad"),(0,r.kt)("p",null,"Un-listens on the rewarded video ad loading event."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/ad/RewardedVideoAd.offLoad.html"}),"Reference"))),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"(callback: OffLoadCallback) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"callback"),(0,r.kt)("td",null,(0,r.kt)("code",null,"OffLoadCallback"))))),(0,r.kt)("h4",n({},{id:"api-support-5"}),"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"RewardedVideoAd.offLoad"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}))))),(0,r.kt)("h3",n({},{id:"onclose"}),"onClose"),(0,r.kt)("p",null,"Listens on the event of tapping the ",(0,r.kt)("inlineCode",{parentName:"p"},"Close Ad")," button."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/ad/RewardedVideoAd.onClose.html"}),"Reference"))),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"(callback: OnCloseCallback) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"callback"),(0,r.kt)("td",null,(0,r.kt)("code",null,"OnCloseCallback"))))),(0,r.kt)("h4",n({},{id:"api-support-6"}),"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"RewardedVideoAd.onClose"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}))))),(0,r.kt)("h3",n({},{id:"onerror"}),"onError"),(0,r.kt)("p",null,"Listens on the rewarded video error event."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/ad/RewardedVideoAd.onError.html"}),"Reference"))),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"(callback: OnErrorCallback) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"callback"),(0,r.kt)("td",null,(0,r.kt)("code",null,"OnErrorCallback"))))),(0,r.kt)("h4",n({},{id:"api-support-7"}),"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"RewardedVideoAd.onError"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}))))),(0,r.kt)("h3",n({},{id:"onload"}),"onLoad"),(0,r.kt)("p",null,"Listens on the rewarded video ad loading event."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/ad/RewardedVideoAd.onLoad.html"}),"Reference"))),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"(callback: OnLoadCallback) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"callback"),(0,r.kt)("td",null,(0,r.kt)("code",null,"OnLoadCallback"))))),(0,r.kt)("h4",n({},{id:"api-support-8"}),"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"RewardedVideoAd.onLoad"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}))))),(0,r.kt)("h2",n({},{id:"parameters"}),"Parameters"),(0,r.kt)("h3",n({},{id:"onerrorcallbackresult"}),"OnErrorCallbackResult"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"errCode"),(0,r.kt)("td",null,(0,r.kt)("code",null,"1000 | 1001 | 1002 | 1003 | 1004 | 1005 | 1006 | 1007 | 1008")),(0,r.kt)("td",null,"Error code",(0,r.kt)("br",null),(0,r.kt)("a",{href:"../../apis/General#aderrcode"},"Reference"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"errMsg"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"Error message")))),(0,r.kt)("h3",n({},{id:"onclosecallbackresult"}),"OnCloseCallbackResult"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"isEnded"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",null,"Indicates whether the video is closed when the user watches it to the end")))),(0,r.kt)("h3",n({},{id:"offclosecallback"}),"OffCloseCallback"),(0,r.kt)("p",null,"The callback function for the event of tapping the ",(0,r.kt)("inlineCode",{parentName:"p"},"Close Ad")," button."),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"(res: CallbackResult) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"res"),(0,r.kt)("td",null,(0,r.kt)("code",null,"CallbackResult"))))),(0,r.kt)("h3",n({},{id:"offerrorcallback"}),"OffErrorCallback"),(0,r.kt)("p",null,"The callback function for the rewarded video ad error event."),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"(res: CallbackResult) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"res"),(0,r.kt)("td",null,(0,r.kt)("code",null,"CallbackResult"))))),(0,r.kt)("h3",n({},{id:"offloadcallback"}),"OffLoadCallback"),(0,r.kt)("p",null,"The callback function for the rewarded video ad loading event."),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"(res: CallbackResult) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"res"),(0,r.kt)("td",null,(0,r.kt)("code",null,"CallbackResult"))))),(0,r.kt)("h3",n({},{id:"onclosecallback"}),"OnCloseCallback"),(0,r.kt)("p",null,"The callback function for the event of tapping the ",(0,r.kt)("inlineCode",{parentName:"p"},"Close Ad")," button."),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"(result: OnCloseCallbackResult) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"result"),(0,r.kt)("td",null,(0,r.kt)("code",null,"OnCloseCallbackResult"))))),(0,r.kt)("h3",n({},{id:"onerrorcallback"}),"OnErrorCallback"),(0,r.kt)("p",null,"The callback function for the rewarded video ad error event."),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"(result: OnErrorCallbackResult) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"result"),(0,r.kt)("td",null,(0,r.kt)("code",null,"OnErrorCallbackResult"))))),(0,r.kt)("h3",n({},{id:"onloadcallback"}),"OnLoadCallback"),(0,r.kt)("p",null,"The callback function for the rewarded video ad loading event."),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"(res: CallbackResult) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"res"),(0,r.kt)("td",null,(0,r.kt)("code",null,"CallbackResult"))))),(0,r.kt)("h2",n({},{id:"api-support-9"}),"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",n({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"RewardedVideoAd.load"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"RewardedVideoAd.show"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"RewardedVideoAd.destroy"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"RewardedVideoAd.offClose"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"RewardedVideoAd.offError"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"RewardedVideoAd.offLoad"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"RewardedVideoAd.onClose"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"RewardedVideoAd.onError"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"RewardedVideoAd.onLoad"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",n({parentName:"tr"},{align:"center"})),(0,r.kt)("td",n({parentName:"tr"},{align:"center"}))))))}s.isMDXComponent=!0}}]);