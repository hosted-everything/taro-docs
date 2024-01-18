"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[73637],{79874:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return k}});var r=n(93106);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,u=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),s=p(n),d=a,k=s["".concat(u,".").concat(d)]||s[d]||m[d]||i;return n?r.createElement(k,o(o({ref:e},c),{},{components:n})):r.createElement(k,o({ref:e},c))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l[s]="string"==typeof t?t:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43775:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const o={title:"Taro.createAnimation(option)",sidebar_label:"createAnimation"},l=void 0,u={unversionedId:"apis/ui/animation/createAnimation",id:"version-4.x/apis/ui/animation/createAnimation",title:"Taro.createAnimation(option)",description:"Create an animation instance animation. Describe the animation by calling the instance. Use the method of exporting the animation instance to export the animation data and pass it to the animation property of the component.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-4.x/apis/ui/animation/createAnimation.md",sourceDirName:"apis/ui/animation",slug:"/apis/ui/animation/createAnimation",permalink:"/mirror/taro-docs/en/docs/4.x/apis/ui/animation/createAnimation",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-4.x/apis/ui/animation/createAnimation.md",tags:[],version:"4.x",frontMatter:{title:"Taro.createAnimation(option)",sidebar_label:"createAnimation"},sidebar:"API",previous:{title:"ScrollViewContext",permalink:"/mirror/taro-docs/en/docs/4.x/apis/ui/scroll/ScrollViewContext"},next:{title:"Animation",permalink:"/mirror/taro-docs/en/docs/4.x/apis/ui/animation/"}},p={},c=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Option",id:"option",level:3},{value:"timingFunction",id:"timingfunction",level:3},{value:"Sample Code",id:"sample-code",level:2},{value:"API Support",id:"api-support",level:2}],s={toc:c},m="wrapper";function d(t){var{components:e}=t,n=i(t,["components"]);return(0,r.kt)(m,a({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Create an ",(0,r.kt)("inlineCode",{parentName:"p"},"animation")," instance animation. Describe the ",(0,r.kt)("inlineCode",{parentName:"p"},"animation")," by calling the instance. Use the method of exporting the ",(0,r.kt)("inlineCode",{parentName:"p"},"animation")," instance to export the ",(0,r.kt)("inlineCode",{parentName:"p"},"animation")," data and pass it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"animation")," property of the component."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/ui/animation/wx.createAnimation.html"}),"Reference"))),(0,r.kt)("h2",a({},{id:"type"}),"Type"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Animation\n")),(0,r.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,r.kt)("h3",a({},{id:"option"}),"Option"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",{style:{textAlign:"center"}},"Required"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"delay"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Animation delay time (in ms)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"duration"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Animation duration (in ms)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"timingFunction"),(0,r.kt)("td",null,(0,r.kt)("code",null,'"linear" | "ease" | "ease-in" | "ease-in-out" | "ease-out" | "step-start" | "step-end"')),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Animation effect")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"transformOrigin"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null)))),(0,r.kt)("h3",a({},{id:"timingfunction"}),"timingFunction"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"linear"),(0,r.kt)("td",null,"The animation keeps the same speed from start to end")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ease"),(0,r.kt)("td",null,"The animation starts slow, then speeds up, and then slows down before ending.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ease-in"),(0,r.kt)("td",null,"The animation starts at low speed")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ease-in-out"),(0,r.kt)("td",null,"The animation starts and ends at low speed")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ease-out"),(0,r.kt)("td",null,"The animation ends at low speed")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"step-start"),(0,r.kt)("td",null,"The first frame of the animation jumps to the end state until the animation ends")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"step-end"),(0,r.kt)("td",null,"The animation remains the start state until the final frame jumps to the end state")))),(0,r.kt)("h2",a({},{id:"sample-code"}),"Sample Code"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),'var animation = Taro.createAnimation({\n  transformOrigin: "50% 50%",\n  duration: 1000,\n  timingFunction: "ease",\n  delay: 0\n})\n')),(0,r.kt)("h2",a({},{id:"api-support"}),"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.createAnimation"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}))))))}d.isMDXComponent=!0}}]);