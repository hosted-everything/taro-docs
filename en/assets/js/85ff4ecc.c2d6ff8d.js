"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[50887],{79874:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(93106);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),m=a,d=p["".concat(s,".").concat(m)]||p[m]||f[m]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},55939:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});r(93106);var n=r(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={title:"Taro.useLaunch(callback)",sidebar_label:"useLaunch"},c=void 0,s={unversionedId:"apis/taro.hooks/useLaunch",id:"version-4.x/apis/taro.hooks/useLaunch",title:"Taro.useLaunch(callback)",description:"\u5c0f\u7a0b\u5e8f\u521d\u59cb\u5316\u5b8c\u6210\u65f6\u7684\u56de\u8c03\u3002",source:"@site/versioned_docs/version-4.x/apis/taro.hooks/useLaunch.md",sourceDirName:"apis/taro.hooks",slug:"/apis/taro.hooks/useLaunch",permalink:"/mirror/taro-docs/en/docs/4.x/apis/taro.hooks/useLaunch",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-4.x/apis/taro.hooks/useLaunch.md",tags:[],version:"4.x",frontMatter:{title:"Taro.useLaunch(callback)",sidebar_label:"useLaunch"},sidebar:"API",previous:{title:"useSaveExitState",permalink:"/mirror/taro-docs/en/docs/4.x/apis/taro.hooks/useSaveExitState"},next:{title:"useError",permalink:"/mirror/taro-docs/en/docs/4.x/apis/taro.hooks/useError"}},l={},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2}],p={toc:u},f="wrapper";function m(e){var{components:t}=e,i=o(e,["components"]);return(0,n.kt)(f,a({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5c0f\u7a0b\u5e8f\u521d\u59cb\u5316\u5b8c\u6210\u65f6\u7684\u56de\u8c03\u3002"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:r(72369).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:r(83190).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:r(519).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony",src:r(75e3).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,n.kt)("h2",a({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(callback: (options: getLaunchOptionsSync.LaunchOptions) => void) => void\n")),(0,n.kt)("h2",a({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"callback"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"(options: getLaunchOptionsSync.LaunchOptions) => void"))))))}m.isMDXComponent=!0},83190:function(e,t,r){t.Z=r.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},75e3:function(e,t,r){t.Z=r.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},519:function(e,t,r){t.Z=r.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},72369:function(e,t,r){t.Z=r.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);