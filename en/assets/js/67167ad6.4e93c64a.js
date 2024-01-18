"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[67203],{79874:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return k}});var r=t(93106);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=d(t),s=a,k=m["".concat(l,".").concat(s)]||m[s]||u[s]||o;return t?r.createElement(k,i(i({ref:n},c),{},{components:t})):r.createElement(k,i({ref:n},c))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=s;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var d=2;d<o;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},6803:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});t(93106);var r=t(79874);function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const i={title:"\u6a21\u5f0f\u548c\u73af\u5883\u53d8\u91cf"},p=void 0,l={unversionedId:"env-mode-config",id:"version-3.x/env-mode-config",title:"\u6a21\u5f0f\u548c\u73af\u5883\u53d8\u91cf",description:"Taro v3.5.10 \u5f00\u59cb\u652f\u6301\uff0c\u4e4b\u524d\u7684\u7248\u672c\u53ef\u53c2\u8003 taro-plugin-environment",source:"@site/versioned_docs/version-3.x/env-mode-config.md",sourceDirName:".",slug:"/env-mode-config",permalink:"/mirror/taro-docs/en/docs/env-mode-config",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/env-mode-config.md",tags:[],version:"3.x",frontMatter:{title:"\u6a21\u5f0f\u548c\u73af\u5883\u53d8\u91cf"},sidebar:"docs",previous:{title:"CLI Command",permalink:"/mirror/taro-docs/en/docs/cli"},next:{title:"Compile Configuration",permalink:"/mirror/taro-docs/en/docs/config"}},d={},c=[{value:"\u9ed8\u8ba4\u884c\u4e3a",id:"\u9ed8\u8ba4\u884c\u4e3a",level:2},{value:"\u81ea\u5b9a\u4e49\u6a21\u5f0f",id:"\u81ea\u5b9a\u4e49\u6a21\u5f0f",level:2},{value:"\u53ea\u5728\u672c\u5730\u6709\u6548\u7684\u53d8\u91cf",id:"\u53ea\u5728\u672c\u5730\u6709\u6548\u7684\u53d8\u91cf",level:2},{value:"\u81ea\u5b9a\u4e49\u73af\u5883\u53d8\u91cf\u524d\u7f00",id:"\u81ea\u5b9a\u4e49\u73af\u5883\u53d8\u91cf\u524d\u7f00",level:2},{value:"\u7279\u6b8a\u73af\u5883\u53d8\u91cf <code>TARO_APP_ID</code>",id:"\u7279\u6b8a\u73af\u5883\u53d8\u91cf-taro_app_id",level:2}],m={toc:c},u="wrapper";function s(e){var{components:n}=e,i=o(e,["components"]);return(0,r.kt)(u,a({},m,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("admonition",a({},{type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"Taro v3.5.10 \u5f00\u59cb\u652f\u6301\uff0c\u4e4b\u524d\u7684\u7248\u672c\u53ef\u53c2\u8003 ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/bigmeow/taro-plugin-environment"}),"taro-plugin-environment"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"\u6a21\u5f0f")," \u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Taro cli")," \u4e2d\uff0c\u662f\u7528\u4e8e\u7ed9\u73af\u5883\u53d8\u91cf\u5206\u7ec4\u5e76\u52a0\u8f7d\u5176\u5206\u7ec4\u4e0b\u7684\u73af\u5883\u53d8\u91cf\uff0c\u5b83\u662f\u4e00\u7ec4\u73af\u5883\u53d8\u91cf\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),"\u3002\n\u5b83\u53c2\u8003\u4e86 ",(0,r.kt)("a",a({parentName:"p"},{href:"https://cli.vuejs.org/zh/guide/mode-and-env.html"}),"vue-cli \u4e2d\u7684\u6a21\u5f0f\u548c\u73af\u5883\u53d8\u91cf\u52a0\u8f7d\u65b9\u5f0f")," , \u6240\u4ee5\u82e5\u4f60\u4e4b\u524d\u4f7f\u7528\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"vue-cli"),"\uff0c\u53ef\u4ee5\u66f4\u5feb\u638c\u63e1\u7528\u6cd5\u3002"),(0,r.kt)("h2",a({},{id:"\u9ed8\u8ba4\u884c\u4e3a"}),"\u9ed8\u8ba4\u884c\u4e3a"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b, ",(0,r.kt)("inlineCode",{parentName:"p"},"\u6a21\u5f0f")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Taro cli")," \u6709 2 \u4e2a\u6a21\u5f0f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"development")," \u6a21\u5f0f\u7528\u4e8e\u5f00\u53d1\u65f6 ",(0,r.kt)("inlineCode",{parentName:"li"},"taro build --type weapp --watch"),"\uff0c\u5b83\u7b49\u4ef7\u4e8e ",(0,r.kt)("inlineCode",{parentName:"li"},"taro build --type weapp --watch --mode development")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"production")," \u6a21\u5f0f\u7528\u4e8e\u751f\u4ea7\u65f6 ",(0,r.kt)("inlineCode",{parentName:"li"},"taro build --type weapp"),"\uff0c \u5b83\u7b49\u4ef7\u4e8e ",(0,r.kt)("inlineCode",{parentName:"li"},"taro build --type weapp --mode production"))),(0,r.kt)("p",null,"\u53ef\u4ee5\u53d1\u73b0\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b ",(0,r.kt)("inlineCode",{parentName:"p"},"\u6a21\u5f0f")," \u7684\u503c\uff0c\u53d6\u51b3\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," \u7684\u503c\uff08\u4f46\u662f\u53cd\u8fc7\u6765\u8bf4\u6a21\u5f0f\u7684\u503c\u65e0\u6cd5\u6539\u53d8 ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," \u7684\u503c\uff09\u3002"),(0,r.kt)("p",null,"\u5047\u8bbe\u4f60\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"\u5f00\u53d1"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"\u751f\u4ea7"),"2 \u4e2a\u73af\u5883\uff0c\u4f60\u53ef\u4ee5\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u65b0\u5efa\u4e24\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"env"),"\u73af\u5883\u6587\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),".env.development     # \u5728 development \u6a21\u5f0f\u65f6\u88ab\u8f7d\u5165\n.env.production      # \u5728 production \u6a21\u5f0f\u65f6\u88ab\u8f7d\u5165\n")),(0,r.kt)("p",null,"\u73af\u5883\u6587\u4ef6\u53ea\u5305\u542b\u73af\u5883\u53d8\u91cf\u7684\u201c\u952e=\u503c\u201d\u5bf9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'TARO_APP_API="https://api.tarojs.com"\n')),(0,r.kt)("admonition",a({},{title:"\u9650\u5236",type:"warning"}),(0,r.kt)("p",{parentName:"admonition"},"\u8bf7\u6ce8\u610f\uff0c\u53ea\u6709\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"TARO_APP_")," \u5f00\u5934\u7684\u53d8\u91cf\u5c06\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack.DefinePlugin")," \u9759\u6001\u5730\u5d4c\u5165\u5230\u5ba2\u6237\u7aef\u4fa7\u7684\u4ee3\u7801\u4e2d\u3002\u8fd9\u662f\u4e3a\u4e86\u907f\u514d\u548c\u7cfb\u7edf\u5185\u7f6e\u73af\u5883\u53d8\u91cf\u51b2\u7a81\u3002")),(0,r.kt)("p",null,"\u88ab\u8f7d\u5165\u7684\u73af\u5883\u53d8\u91cf\u6211\u4eec\u53ef\u4ee5\u5728\u6240\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"taro")," \u63d2\u4ef6\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"config/index.ts"),"\u914d\u7f6e\u6587\u4ef6 \u4ee5\u53ca ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," \u76ee\u5f55\u4e0b\u9762\u7684\u9879\u76ee\u6587\u4ef6\u4e2d\u4f7f\u7528, \u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"// src/service/request.ts\nconst request = axios.create({\n  baseURL: process.env.TARO_APP_API\n};\nexport default request\n")),(0,r.kt)("p",null,"\u5728\u6784\u5efa\u8fc7\u7a0b\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"process.env.TARO_APP_API")," \u5c06\u4f1a\u88ab\u76f8\u5e94\u7684\u503c\u6240\u53d6\u4ee3\u3002\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},'TARO_APP_API="https://api.tarojs.com"'),' \u7684\u60c5\u51b5\u4e0b\uff0c\u5b83\u4f1a\u88ab\u66ff\u6362\u4e3a "',(0,r.kt)("a",a({parentName:"p"},{href:"https://api.tarojs.com%22"}),'https://api.tarojs.com"')),(0,r.kt)("h2",a({},{id:"\u81ea\u5b9a\u4e49\u6a21\u5f0f"}),"\u81ea\u5b9a\u4e49\u6a21\u5f0f"),(0,r.kt)("p",null,"\u82e5\u9ed8\u8ba4\u7684\u6a21\u5f0f\u6ee1\u8db3\u4e0d\u4e86\u9700\u6c42\uff0c\u4f60\u53ef\u4ee5\u5728\u547d\u4ee4\u4e0a\u4f7f\u7528\u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"--mode \u6a21\u5f0f\u540d")," \u7684\u65b9\u5f0f\u6765\u6307\u5b9a\u6a21\u5f0f\u540d\uff0c\u4ee5\u52a0\u8f7d\u67d0\u4e00\u7ec4\u73af\u5883\u53d8\u91cf\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"taro build --type weapp --mode uat\n")),(0,r.kt)("p",null,"\u4ee5\u4e0a\u547d\u4ee4\u8868\u793a\u5728\u6784\u5efa\u65f6\u4f1a\u52a0\u8f7d ",(0,r.kt)("inlineCode",{parentName:"p"},".env.uat")," \u6587\u4ef6\u4e2d\u7684\u73af\u5883\u53d8\u91cf."),(0,r.kt)("p",null,"mode \u5177\u4f53\u8f7d\u5165\u89c4\u5219\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-sh"}),".env                # \u5728\u6240\u6709\u7684\u73af\u5883\u4e2d\u88ab\u8f7d\u5165\n.env.local          # \u5728\u6240\u6709\u7684\u73af\u5883\u4e2d\u88ab\u8f7d\u5165\uff0c\u4f46\u4f1a\u88ab git \u5ffd\u7565\n.env.[mode]         # \u53ea\u5728\u6307\u5b9a\u7684\u6a21\u5f0f\u4e2d\u88ab\u8f7d\u5165\n.env.[mode].local   # \u53ea\u5728\u6307\u5b9a\u7684\u6a21\u5f0f\u4e2d\u88ab\u8f7d\u5165\uff0c\u4f46\u4f1a\u88ab git \u5ffd\u7565\n")),(0,r.kt)("admonition",a({},{title:"\u73af\u5883\u6587\u4ef6\u52a0\u8f7d\u4f18\u5148\u7ea7",type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"\u4e3a\u4e00\u4e2a\u7279\u5b9a\u6a21\u5f0f\u51c6\u5907\u7684\u73af\u5883\u6587\u4ef6 (\u4f8b\u5982 .env.production) \u5c06\u4f1a\u6bd4\u4e00\u822c\u7684\u73af\u5883\u6587\u4ef6 (\u4f8b\u5982 .env) \u62e5\u6709\u66f4\u9ad8\u7684\u4f18\u5148\u7ea7\u3002"),(0,r.kt)("p",{parentName:"admonition"},".env \u73af\u5883\u6587\u4ef6\u662f\u901a\u8fc7\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"taro")," \u547d\u4ee4\u8f7d\u5165\u7684\uff0c\u56e0\u6b64\u73af\u5883\u6587\u4ef6\u53d1\u751f\u53d8\u5316\uff0c\u4f60\u9700\u8981\u91cd\u542f\u670d\u52a1\u3002")),(0,r.kt)("h2",a({},{id:"\u53ea\u5728\u672c\u5730\u6709\u6548\u7684\u53d8\u91cf"}),"\u53ea\u5728\u672c\u5730\u6709\u6548\u7684\u53d8\u91cf"),(0,r.kt)("p",null,"\u6709\u7684\u65f6\u5019\u4f60\u53ef\u80fd\u6709\u4e00\u4e9b\u4e0d\u5e94\u8be5\u63d0\u4ea4\u5230\u4ee3\u7801\u4ed3\u5e93\u4e2d\u7684\u53d8\u91cf\uff0c\u5c24\u5176\u662f\u5f53\u4f60\u7684\u9879\u76ee\u6258\u7ba1\u5728\u516c\u5171\u4ed3\u5e93\u65f6\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\u4f60\u5e94\u8be5\u4f7f\u7528\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},".env.local")," \u6587\u4ef6\u53d6\u800c\u4ee3\u4e4b\u3002\u672c\u5730\u73af\u5883\u6587\u4ef6\u9ed8\u8ba4\u4f1a\u88ab\u5ffd\u7565\uff0c\u4e14\u51fa\u73b0\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},".gitignore")," \u4e2d\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".local")," \u4e5f\u53ef\u4ee5\u52a0\u5728\u6307\u5b9a\u6a21\u5f0f\u7684\u73af\u5883\u6587\u4ef6\u4e0a\uff0c\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},".env.development.local")," \u5c06\u4f1a\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"development")," \u6a21\u5f0f\u4e0b\u88ab\u8f7d\u5165\uff0c\u4e14\u88ab ",(0,r.kt)("inlineCode",{parentName:"p"},"git")," \u5ffd\u7565\u3002"),(0,r.kt)("h2",a({},{id:"\u81ea\u5b9a\u4e49\u73af\u5883\u53d8\u91cf\u524d\u7f00"}),"\u81ea\u5b9a\u4e49\u73af\u5883\u53d8\u91cf\u524d\u7f00"),(0,r.kt)("p",null,"\u524d\u9762\u63d0\u5230\uff0c\u9ed8\u8ba4\u53ea\u52a0\u8f7d ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," \u6587\u4ef6\u4e2d\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"TARO_APP_")," \u524d\u7f00\u5f00\u5934\u7684\u73af\u5883\u53d8\u91cf\uff0c\u4f60\u53ef\u80fd\u60f3\u6539\u6210\u81ea\u5df1\u516c\u53f8\u7684\u82f1\u6587\u540d\u79f0\u4f5c\u4e3a\u524d\u7f00\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"@tarojs/cli")," \u63d0\u4f9b\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"--env-prefix")," \u53c2\u6570\u6765\u5b9e\u73b0\u8fd9\u4e00\u9700\u6c42\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-sh"}),"taro build --type weapp --mode development --env-prefix JD_APP_\n")),(0,r.kt)("p",null,"\u6b64\u65f6 ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," \u6587\u4ef6\u4e2d\u80fd\u88ab\u52a0\u8f7d\u7684\u73af\u5883\u53d8\u91cf\u53ea\u80fd\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"JD_APP_")," \u524d\u7f00\u5f00\u5934\u7684\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'TARO_APP_API="https://api.tarojs.com"    # \u4e0d\u6ee1\u8db3\u524d\u7f00\uff0c\u4e0d\u52a0\u8f7d\n\nJD_APP_TEST="foo"                        # \u6ee1\u8db3\u524d\u7f00\uff0c\u52a0\u8f7d\n')),(0,r.kt)("p",null,"\u4f46\u662f\uff0c\u6709\u4e2a\u7279\u6b8a\u7684\u73af\u5883\u53d8\u91cf\u4e0d\u53d7\u81ea\u5b9a\u4e49\u524d\u7f00\u914d\u7f6e\u7684\u5f71\u54cd\uff0c\u59cb\u7ec8\u4f1a\u88ab\u52a0\u8f7d\uff0c\u90a3\u5c31\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"TARO_APP_ID"),"\u3002"),(0,r.kt)("h2",a({},{id:"\u7279\u6b8a\u73af\u5883\u53d8\u91cf-taro_app_id"}),"\u7279\u6b8a\u73af\u5883\u53d8\u91cf ",(0,r.kt)("inlineCode",{parentName:"h2"},"TARO_APP_ID")),(0,r.kt)("admonition",a({},{type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"Taro v3.6.9 \u5f00\u59cb\u652f\u6301")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TARO_APP_ID")," \u662f\u4e13\u95e8\u9488\u5bf9\u5c0f\u7a0b\u5e8f\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"appid")," \u8bbe\u8ba1\u7684\uff0c\u5728\u6784\u5efa\u8f93\u51fa ",(0,r.kt)("inlineCode",{parentName:"p"},"dist/project.config.json")," \u6587\u4ef6\u524d\uff0c \u4f1a\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"dist/project.config.json")," \u6587\u4ef6\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"appid")," \u5b57\u6bb5\uff0c\u4fee\u6539\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"TARO_APP_ID")," \u7684\u503c\u3002 \u5728\u4e0d\u540c\u73af\u5883\u914d\u7f6e\u4e0d\u540c\u7684\u5c0f\u7a0b\u5e8f ",(0,r.kt)("inlineCode",{parentName:"p"},"appid")," \u65f6\uff0c\u5b83\u7279\u522b\u6709\u7528\uff0c\u8fd8\u80fd\u514d\u53bb\u5f00\u53d1\u8005\u5728\u5f00\u53d1\u8005\u5de5\u5177\u4e0a\u624b\u52a8\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"appid")," \u7684\u9ebb\u70e6\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u514d\u53bb\u5f00\u53d1\u8005\u5de5\u5177\u4fee\u6539appid",src:t(69644).Z,width:"738",height:"752"})))}s.isMDXComponent=!0},69644:function(e,n,t){n.Z=t.p+"assets/images/update-appid-f1abd134caca6faf76339d524191744f.png"}}]);