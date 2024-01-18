"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[6063],{79874:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return d}});var n=r(93106);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var l=n.createContext({}),c=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},u=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,i=t.originalType,l=t.parentName,u=a(t,["components","mdxType","originalType","parentName"]),p=c(r),f=o,d=p["".concat(l,".").concat(f)]||p[f]||m[f]||i;return r?n.createElement(d,s(s({ref:e},u),{},{components:r})):n.createElement(d,s({ref:e},u))}));function d(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=r.length,s=new Array(i);s[0]=f;var a={};for(var l in e)hasOwnProperty.call(e,l)&&(a[l]=e[l]);a.originalType=t,a[p]="string"==typeof t?t:o,s[1]=a;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4708:function(t,e,r){r.r(e),r.d(e,{assets:function(){return c},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});r(93106);var n=r(79874);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o.apply(this,arguments)}function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}const s={title:"\u8f85\u52a9\u7c7b API"},a=void 0,l={unversionedId:"test-utils/other",id:"version-4.x/test-utils/other",title:"\u8f85\u52a9\u7c7b API",description:"html",source:"@site/versioned_docs/version-4.x/test-utils/other.md",sourceDirName:"test-utils",slug:"/test-utils/other",permalink:"/mirror/taro-docs/en/docs/4.x/test-utils/other",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-4.x/test-utils/other.md",tags:[],version:"4.x",frontMatter:{title:"\u8f85\u52a9\u7c7b API"},sidebar:"docs",previous:{title:"\u751f\u547d\u5468\u671f API",permalink:"/mirror/taro-docs/en/docs/4.x/test-utils/life-cycle"},next:{title:"\u7b2c\u4e09\u65b9\u5de5\u5177",permalink:"/mirror/taro-docs/en/docs/4.x/external-libraries"}},c={},u=[{value:"html",id:"html",level:2},{value:"act",id:"act",level:2}],p={toc:u},m="wrapper";function f(t){var{components:e}=t,r=i(t,["components"]);return(0,n.kt)(m,o({},p,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",o({},{id:"html"}),"html"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"function html(): string\n")),(0,n.kt)("p",null,"\u5c06\u9875\u9762\u8868\u73b0\u7684\u6587\u6863\u5185\u5bb9\u8fdb\u884c\u683c\u5f0f\u5316\u8f93\u51fa\uff0c\u901a\u5e38\u7528\u4f5c\u5feb\u7167\u5bf9\u6bd4\u3001\u8c03\u8bd5"),(0,n.kt)("p",null,"\u7528\u6cd5\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-js"}),"import testUtils from '@tarojs/test-utils-react' // react\n// import testUtils from '@tarojs/test-utils-vue3' // vue3\ndescribe('\u6d4b\u8bd5mount', () => {\n  test('View', async () => {\n    const testUtils = new TestUtils()\n    await testUtils.mount(View)\n    const htmlString = testUtils.html() // \u8f93\u51fa\u6587\u6863\u5b57\u7b26\u4e32\u5185\u5bb9\n    expect(htmlString).toMatchSnapshot() // \u53ef\u4ee5\u7528\u4e8e\u5feb\u7167\u5bf9\u6bd4\n  })\n})\n")),(0,n.kt)("h2",o({},{id:"act"}),"act"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"async function act(): Promise\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"React"),"\u540c",(0,n.kt)("inlineCode",{parentName:"p"},"react-dom/test-utils"),"\u63d0\u4f9b\u7684",(0,n.kt)("inlineCode",{parentName:"p"},"act"),"\uff0c",(0,n.kt)("strong",{parentName:"p"},"Vue"),"\u5219\u4f7f\u7528\u7684\u662f",(0,n.kt)("inlineCode",{parentName:"p"},"await nextTick"),"\u56de\u8c03\u8fdb\u884c\u5c01\u88c5"),(0,n.kt)("p",null,"\u7528\u6cd5\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-js"}),"import testUtils from '@tarojs/test-utils-react' // react\n// import testUtils from '@tarojs/test-utils-vue3' // vue3\ndescribe('Testing', () => {\n  test('test', async () => {\n    const testUtils = new TestUtils()\n    await testUtils.mount(View)\n    // \u7b49\u5f85\u56de\u8c03\u6267\u884c\u5b8c\u6210\uff0c\u5e76\u4e14\u66f4\u65b0\u7ed3\u675f\n    await testUtils.act(() => {\n      testUtils.fireEvent.click(testUtils.queries.querySelector('.btn'))\n    })\n  })\n})\n")))}f.isMDXComponent=!0}}]);