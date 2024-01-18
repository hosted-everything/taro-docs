"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[60296],{79874:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(93106);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(r),u=a,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},79411:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s}});r(93106);var n=r(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={title:"Taro.interceptorify(promiseifyApi)",sidebar_label:"interceptorify"},p=void 0,l={unversionedId:"apis/taro.extend/interceptorify",id:"version-4.x/apis/taro.extend/interceptorify",title:"Taro.interceptorify(promiseifyApi)",description:"\u5305\u88f9 promiseify api \u7684\u6d0b\u8471\u5708\u6a21\u578b",source:"@site/versioned_docs/version-4.x/apis/taro.extend/interceptorify.md",sourceDirName:"apis/taro.extend",slug:"/apis/taro.extend/interceptorify",permalink:"/mirror/taro-docs/docs/4.x/apis/taro.extend/interceptorify",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-4.x/apis/taro.extend/interceptorify.md",tags:[],version:"4.x",frontMatter:{title:"Taro.interceptorify(promiseifyApi)",sidebar_label:"interceptorify"},sidebar:"API",previous:{title:"getTabBar",permalink:"/mirror/taro-docs/docs/4.x/apis/taro.extend/getTabBar"},next:{title:"App",permalink:"/mirror/taro-docs/docs/4.x/apis/framework/App"}},c={},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"promiseifyApi",id:"promiseifyapi",level:3},{value:"InterceptorifyChain",id:"interceptorifychain",level:3},{value:"InterceptorifyInterceptor",id:"interceptorifyinterceptor",level:3},{value:"Interceptorify",id:"interceptorify",level:3},{value:"request",id:"request",level:4},{value:"addInterceptor",id:"addinterceptor",level:4},{value:"cleanInterceptors",id:"cleaninterceptors",level:4},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"\u793a\u4f8b 1",id:"\u793a\u4f8b-1",level:3},{value:"\u793a\u4f8b 2",id:"\u793a\u4f8b-2",level:3}],d={toc:s},m="wrapper";function u(e){var{components:t}=e,o=i(e,["components"]);return(0,n.kt)(m,a({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5305\u88f9 promiseify api \u7684\u6d0b\u8471\u5708\u6a21\u578b"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:r(72369).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f",src:r(55899).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",src:r(68525).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"\u6296\u97f3\u5c0f\u7a0b\u5e8f",src:r(58939).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"QQ \u5c0f\u7a0b\u5e8f",src:r(30174).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f",src:r(92207).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:r(83190).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:r(519).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"\u5feb\u5e94\u7528",src:r(22685).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony",src:r(75e3).Z,className:"icon_platform",width:"25px"})),(0,n.kt)("h2",a({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"<T, R>(promiseifyApi: promiseifyApi<T, R>) => Interceptorify<T, R>\n")),(0,n.kt)("h2",a({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,n.kt)("h3",a({},{id:"promiseifyapi"}),"promiseifyApi"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(requestParams: T) => Promise<R>\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"requestParams"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"T"))))),(0,n.kt)("h3",a({},{id:"interceptorifychain"}),"InterceptorifyChain"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"requestParams"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"T"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"proceed"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"promiseifyApi<T, R>"))))),(0,n.kt)("h3",a({},{id:"interceptorifyinterceptor"}),"InterceptorifyInterceptor"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(chain: InterceptorifyChain<T, R>) => Promise<R>\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"chain"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"InterceptorifyChain<T, R>"))))),(0,n.kt)("h3",a({},{id:"interceptorify"}),"Interceptorify"),(0,n.kt)("h4",a({},{id:"request"}),"request"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(requestParams: T) => Promise<R>\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"requestParams"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"T"))))),(0,n.kt)("h4",a({},{id:"addinterceptor"}),"addInterceptor"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(interceptor: InterceptorifyInterceptor<T, R>) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"interceptor"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"InterceptorifyInterceptor<T, R>"))))),(0,n.kt)("h4",a({},{id:"cleaninterceptors"}),"cleanInterceptors"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"() => void\n")),(0,n.kt)("h2",a({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("h3",a({},{id:"\u793a\u4f8b-1"}),"\u793a\u4f8b 1"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"// \u521b\u5efa\u5b9e\u4f8b\nconst modalInterceptorify = interceptorify(taro.showModal)\n// \u6dfb\u52a0\u62e6\u622a\u5668\nmodalInterceptorify.addInterceptor(async function (chain) {\n  const res = await chain.proceed({\n    ...chain.requestParams,\n    title: 'interceptor1'\n  })\n  return res\n})\nmodalInterceptorify.addInterceptor(async function (chain) {\n  const res = await chain.proceed({\n    ...chain.requestParams,\n    content: 'interceptor2'\n  })\n  return res\n})\n// \u4f7f\u7528\nmodalInterceptorify.request({})\n")),(0,n.kt)("h3",a({},{id:"\u793a\u4f8b-2"}),"\u793a\u4f8b 2"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"// \u521b\u5efa\u5b9e\u4f8b\nconst fetchDataInterceptorify = interceptorify(taro.request)\n// \u6dfb\u52a0\u62e6\u622a\u5668\nfetchDataInterceptorify.addInterceptor(async function (chain) {\n  taro.showLoading({\n    title: 'Loading...'\n  })\n  const res = await chain.proceed(chain.requestParams)\n  taro.hideLoading()\n  return res\n})\nfetchDataInterceptorify.addInterceptor(async function (chain) {\n  const params = chain.requestParams\n  const res = await chain.proceed({\n    url: 'http://httpbin.org' + params.url,\n  })\n  return res.data\n})\n// \u4f7f\u7528\nfetchDataInterceptorify.request({\n  url: '/ip'\n}).then((res) => {\n  // log my ip\n  console.log(res.origin)\n})\n")))}u.isMDXComponent=!0},68525:function(e,t,r){t.Z=r.p+"assets/images/alipay-ee5545de747ce1ad6e17faec10358975.png"},83190:function(e,t,r){t.Z=r.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},75e3:function(e,t,r){t.Z=r.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},92207:function(e,t,r){t.Z=r.p+"assets/images/jd-03cf3bd618bc6274dd94e14928e325c3.png"},30174:function(e,t,r){t.Z=r.p+"assets/images/qq-3f77e6fbb490848ab8aa8183e9399110.png"},22685:function(e,t,r){t.Z=r.p+"assets/images/quickapp-9d223aa6970cfc9a18ddf09a125a3c09.png"},519:function(e,t,r){t.Z=r.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},55899:function(e,t,r){t.Z=r.p+"assets/images/swan-566f56d360909d0457073b67b8f48958.png"},58939:function(e,t,r){t.Z=r.p+"assets/images/tt-f4ec120e570f924e7ef763dcaf7fc69d.png"},72369:function(e,t,r){t.Z=r.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);