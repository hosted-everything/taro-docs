"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[26769],{79874:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var a=n(93106);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,g=m["".concat(i,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[m]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},17238:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return u}});n(93106);var a=n(79874);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={title:"Taro.getAppBaseInfo()",sidebar_label:"getAppBaseInfo"},p=void 0,i={unversionedId:"apis/base/system/getAppBaseInfo",id:"version-4.x/apis/base/system/getAppBaseInfo",title:"Taro.getAppBaseInfo()",description:"\u83b7\u53d6\u5fae\u4fe1APP\u57fa\u7840\u4fe1\u606f",source:"@site/versioned_docs/version-4.x/apis/base/system/getAppBaseInfo.md",sourceDirName:"apis/base/system",slug:"/apis/base/system/getAppBaseInfo",permalink:"/mirror/taro-docs/en/docs/4.x/apis/base/system/getAppBaseInfo",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-4.x/apis/base/system/getAppBaseInfo.md",tags:[],version:"4.x",frontMatter:{title:"Taro.getAppBaseInfo()",sidebar_label:"getAppBaseInfo"},sidebar:"API",previous:{title:"getDeviceInfo",permalink:"/mirror/taro-docs/en/docs/4.x/apis/base/system/getDeviceInfo"},next:{title:"getAppAuthorizeSetting",permalink:"/mirror/taro-docs/en/docs/4.x/apis/base/system/getAppAuthorizeSetting"}},s={},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Result",id:"result",level:3},{value:"Theme",id:"theme",level:3},{value:"Host",id:"host",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2}],m={toc:u},c="wrapper";function d(e){var{components:t}=e,o=l(e,["components"]);return(0,a.kt)(c,r({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u83b7\u53d6\u5fae\u4fe1APP\u57fa\u7840\u4fe1\u606f"),(0,a.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,a.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(72369).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"H5",src:n(83190).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"React Native",src:n(519).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,a.kt)("img",{title:"Harmony",src:n(75e3).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"H5: \u4e0d\u652f\u6301 SDKVersion\u3001host\u3001version")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getAppBaseInfo.html"}),"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",r({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"() => Result\n")),(0,a.kt)("h2",r({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,a.kt)("h3",r({},{id:"result"}),"Result"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"SDKVersion"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5ba2\u6237\u7aef\u57fa\u7840\u5e93\u7248\u672c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"enableDebug"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u662f\u5426\u5df2\u6253\u5f00\u8c03\u8bd5\u3002\u53ef\u901a\u8fc7\u53f3\u4e0a\u89d2\u83dc\u5355\u6216 ",(0,a.kt)("a",r({parentName:"td"},{href:"/docs/apis/base/debug/setEnableDebug"}),"Taro.setEnableDebug")," \u6253\u5f00\u8c03\u8bd5\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"host"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Host")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5f53\u524d\u5c0f\u7a0b\u5e8f\u8fd0\u884c\u7684\u5bbf\u4e3b\u73af\u5883")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"language"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u662f"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5fae\u4fe1\u8bbe\u7f6e\u7684\u8bed\u8a00")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"version"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5fae\u4fe1\u7248\u672c\u53f7")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"theme"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"keyof Theme")),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),'\u7cfb\u7edf\u5f53\u524d\u4e3b\u9898\uff0c\u53d6\u503c\u4e3alight\u6216dark\uff0c\u5168\u5c40\u914d\u7f6e"darkmode":true\u65f6\u624d\u80fd\u83b7\u53d6\uff0c\u5426\u5219\u4e3a undefined \uff08\u4e0d\u652f\u6301\u5c0f\u6e38\u620f\uff09')))),(0,a.kt)("h3",r({},{id:"theme"}),"Theme"),(0,a.kt)("p",null,"\u7cfb\u7edf\u4e3b\u9898\u5408\u6cd5\u503c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"dark"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u6df1\u8272\u4e3b\u9898")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"light"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u6d45\u8272\u4e3b\u9898")))),(0,a.kt)("h3",r({},{id:"host"}),"Host"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"appId"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5bbf\u4e3b app \u5bf9\u5e94\u7684 appId")))),(0,a.kt)("h2",r({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"const appBaseInfo = Taro.getAppBaseInfo()\n\nconsole.log(appBaseInfo.SDKVersion)\nconsole.log(appBaseInfo.enableDebug)\nconsole.log(appBaseInfo.host)\nconsole.log(appBaseInfo.language)\nconsole.log(appBaseInfo.version)\nconsole.log(appBaseInfo.theme)\n")))}d.isMDXComponent=!0},83190:function(e,t,n){t.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},75e3:function(e,t,n){t.Z=n.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},519:function(e,t,n){t.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},72369:function(e,t,n){t.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);