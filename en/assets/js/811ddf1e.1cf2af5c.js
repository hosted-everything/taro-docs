"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[52665],{79874:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(93106);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),l=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(a.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,d=u["".concat(a,".").concat(f)]||u[f]||m[f]||i;return n?r.createElement(d,s(s({ref:t},p),{},{components:n})):r.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=f;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[u]="string"==typeof e?e:o,s[1]=c;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},30462:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return a},toc:function(){return p}});n(93106);var r=n(79874);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={title:"ListView",sidebar_label:"ListView"},c=void 0,a={unversionedId:"components/skyline/list-view",id:"version-4.x/components/skyline/list-view",title:"ListView",description:"\u5217\u8868\u5e03\u5c40\u5bb9\u5668\uff0c\u4ec5\u652f\u6301\u4f5c\u4e3a scroll-view \u81ea\u5b9a\u4e49\u6a21\u5f0f\u4e0b\u7684\u76f4\u63a5\u5b50\u8282\u70b9\u6216 sticky-section \u7ec4\u4ef6\u76f4\u63a5\u5b50\u8282\u70b9\u3002\u4ec5 Skyline \u652f\u6301\u3002",source:"@site/versioned_docs/version-4.x/components/skyline/list-view.md",sourceDirName:"components/skyline",slug:"/components/skyline/list-view",permalink:"/mirror/taro-docs/en/docs/4.x/components/skyline/list-view",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-4.x/components/skyline/list-view.md",tags:[],version:"4.x",frontMatter:{title:"ListView",sidebar_label:"ListView"},sidebar:"components",previous:{title:"GridView",permalink:"/mirror/taro-docs/en/docs/4.x/components/skyline/grid-view"},next:{title:"ShareElement",permalink:"/mirror/taro-docs/en/docs/4.x/components/skyline/share-element"}},l={},p=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"ListViewProps",id:"listviewprops",level:2}],u={toc:p},m="wrapper";function f(e){var{components:t}=e,s=i(e,["components"]);return(0,r.kt)(m,o({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5217\u8868\u5e03\u5c40\u5bb9\u5668\uff0c\u4ec5\u652f\u6301\u4f5c\u4e3a scroll-view \u81ea\u5b9a\u4e49\u6a21\u5f0f\u4e0b\u7684\u76f4\u63a5\u5b50\u8282\u70b9\u6216 sticky-section \u7ec4\u4ef6\u76f4\u63a5\u5b50\u8282\u70b9\u3002\u4ec5 Skyline \u652f\u6301\u3002"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(72369).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:n(83190).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:n(519).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"Harmony",src:n(75e3).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/list-view.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",o({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"ComponentType<ListViewProps>\n")),(0,r.kt)("h2",o({},{id:"listviewprops"}),"ListViewProps"))}f.isMDXComponent=!0},83190:function(e,t,n){t.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},75e3:function(e,t,n){t.Z=n.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},519:function(e,t,n){t.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},72369:function(e,t,n){t.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);