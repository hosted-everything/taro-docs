"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[39089],{79874:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return k}});var n=r(93106);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=c(r),u=a,k=s["".concat(i,".").concat(u)]||s[u]||d[u]||o;return r?n.createElement(k,l(l({ref:t},m),{},{components:r})):n.createElement(k,l({ref:t},m))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[s]="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},76868:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return m}});r(93106);var n=r(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={title:"PerformanceObserver",sidebar_label:"PerformanceObserver"},p=void 0,i={unversionedId:"apis/base/performance/PerformanceObserver",id:"version-4.x/apis/base/performance/PerformanceObserver",title:"PerformanceObserver",description:"PerformanceObserver \u5bf9\u8c61\uff0c\u7528\u4e8e\u76d1\u542c\u6027\u80fd\u76f8\u5173\u4e8b\u4ef6",source:"@site/versioned_docs/version-4.x/apis/base/performance/PerformanceObserver.md",sourceDirName:"apis/base/performance",slug:"/apis/base/performance/PerformanceObserver",permalink:"/mirror/taro-docs/docs/4.x/apis/base/performance/PerformanceObserver",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-4.x/apis/base/performance/PerformanceObserver.md",tags:[],version:"4.x",frontMatter:{title:"PerformanceObserver",sidebar_label:"PerformanceObserver"},sidebar:"API",previous:{title:"PerformanceEntry",permalink:"/mirror/taro-docs/docs/4.x/apis/base/performance/PerformanceEntry"},next:{title:"getUserCryptoManager",permalink:"/mirror/taro-docs/docs/4.x/apis/base/crypto/getUserCryptoManager"}},c={},m=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"disconnect",id:"disconnect",level:3},{value:"observe",id:"observe",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"observe",id:"observe-1",level:3},{value:"Option",id:"option",level:4},{value:"EntryType",id:"entrytype",level:4},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],s={toc:m},d="wrapper";function u(e){var{components:t}=e,l=o(e,["components"]);return(0,n.kt)(d,a({},s,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"PerformanceObserver \u5bf9\u8c61\uff0c\u7528\u4e8e\u76d1\u542c\u6027\u80fd\u76f8\u5173\u4e8b\u4ef6"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:r(72369).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:r(83190).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:r(519).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony",src:r(75e3).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/PerformanceObserver.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("h2",a({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"supportedEntryTypes"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"PerformanceEntry[]")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u83b7\u53d6\u5f53\u524d\u652f\u6301\u7684\u6240\u6709\u6027\u80fd\u6307\u6807\u7c7b\u578b")))),(0,n.kt)("h3",a({},{id:"disconnect"}),"disconnect"),(0,n.kt)("p",null,"\u505c\u6b62\u76d1\u542c"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:r(72369).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:r(83190).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:r(519).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony",src:r(75e3).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/PerformanceObserver.disconnect.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"() => void\n")),(0,n.kt)("h3",a({},{id:"observe"}),"observe"),(0,n.kt)("p",null,"\u5f00\u59cb\u76d1\u542c"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:r(72369).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:r(83190).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:r(519).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony",src:r(75e3).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/PerformanceObserver.observe.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"option"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Option"))))),(0,n.kt)("h2",a({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,n.kt)("h3",a({},{id:"observe-1"}),"observe"),(0,n.kt)("h4",a({},{id:"option"}),"Option"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"type"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"keyof EntryType")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u6307\u6807\u7c7b\u578b\u3002\u4e0d\u80fd\u548c entryTypes \u540c\u65f6\u4f7f\u7528")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"entryTypes"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"(keyof EntryType)[]")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u6307\u6807\u7c7b\u578b\u5217\u8868\u3002\u4e0d\u80fd\u548c type \u540c\u65f6\u4f7f\u7528\u3002")))),(0,n.kt)("h4",a({},{id:"entrytype"}),"EntryType"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"navigation"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u8def\u7531")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"render"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u6e32\u67d3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"script"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u811a\u672c")))),(0,n.kt)("h2",a({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"Harmony"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"PerformanceObserver"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"PerformanceObserver.disconnect"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"PerformanceObserver.observe"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))))))}u.isMDXComponent=!0},83190:function(e,t,r){t.Z=r.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},75e3:function(e,t,r){t.Z=r.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},519:function(e,t,r){t.Z=r.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},72369:function(e,t,r){t.Z=r.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);