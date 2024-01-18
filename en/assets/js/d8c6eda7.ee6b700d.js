"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[94204],{79874:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91264:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(93106),a=n(4706),o={tabItem:"tabItem_FBI3"};function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function i({children:e,hidden:t,className:n}){return r.createElement("div",l({role:"tabpanel",className:(0,a.Z)(o.tabItem,n)},{hidden:t}),e)}},8602:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(93106),a=n(4706),o=n(29369),l=n(27907),i=n(3111),u=n(65009),p=n(42615);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){return function(e){var t,n;return null!==(n=null===(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==n?n:[]}(e).map((({props:{value:e,label:t,attributes:n,default:r}})=>({value:e,label:t,attributes:n,default:r})))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:s(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m({value:e,tabValues:t}){return t.some((t=>t.value===e))}function f({queryString:e=!1,groupId:t}){const n=(0,l.k6)(),a=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),o=(0,i._X)(a),u=(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){c(e,t,n[t])}))}return e}({},n.location,{search:t.toString()}))}),[a,n]);return[o,u]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[l,i]=(0,r.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var n;const r=null!==(n=t.find((e=>e.default)))&&void 0!==n?n:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,c]=f({queryString:n,groupId:a}),[s,h]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,a]=(0,p.Nk)(t);return[n,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:a}),g=(()=>{const e=null!=u?u:s;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var g=n(81600),b={tabList:"tabList_qAna",tabItem:"tabItem_ulzt"};function k(){return k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},k.apply(this,arguments)}function y({className:e,block:t,selectedValue:n,selectValue:l,tabValues:i}){const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),c=e=>{const t=e.currentTarget,r=u.indexOf(t),a=i[r].value;a!==n&&(p(t),l(a))},s=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;var n;t=null!==(n=u[r])&&void 0!==n?n:u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;var r;t=null!==(r=u[n])&&void 0!==r?r:u[u.length-1];break}}null==t||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},e)},i.map((({value:e,label:t,attributes:o})=>r.createElement("li",k({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>u.push(e),onKeyDown:s,onClick:c},o,{className:(0,a.Z)("tabs__item",b.tabItem,null==o?void 0:o.className,{"tabs__item--active":n===e})}),null!=t?t:e))))}function v({lazy:e,children:t,selectedValue:n}){const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=h(e);return r.createElement("div",{className:(0,a.Z)("tabs-container",b.tabList)},r.createElement(y,k({},e,t)),r.createElement(v,k({},e,t)))}function w(e){const t=(0,g.Z)();return r.createElement(N,k({key:String(t)},e))}},38639:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});n(93106);var r=n(79874),a=n(8602),o=n(91264);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const u={title:"Entry Component"},p=void 0,c={unversionedId:"react-entry",id:"version-4.x/react-entry",title:"Entry Component",description:"Every Taro application needs an entry component to register the application. The default entry file is app.js in the src directory.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-4.x/react-entry.mdx",sourceDirName:".",slug:"/react-entry",permalink:"/mirror/taro-docs/en/docs/4.x/react-entry",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-4.x/react-entry.mdx",tags:[],version:"4.x",frontMatter:{title:"Entry Component"},sidebar:"docs",previous:{title:"Overview",permalink:"/mirror/taro-docs/en/docs/4.x/react-overall"},next:{title:"Page Components",permalink:"/mirror/taro-docs/en/docs/4.x/react-page"}},s={},d=[{value:"Example Code",id:"example-code",level:2},{value:"Entry Component Configuration",id:"entry-component-configuration",level:2},{value:"Life cycle methods",id:"life-cycle-methods",level:2},{value:"onLaunch (options)",id:"onlaunch-options",level:3},{value:"Parameters",id:"parameters",level:4},{value:"options",id:"options",level:5},{value:"options.referrerInfo",id:"optionsreferrerinfo",level:5},{value:"componentDidShow (options)",id:"componentdidshow-options",level:3},{value:"componentDidHide ()",id:"componentdidhide-",level:3},{value:"onPageNotFound (Object)",id:"onpagenotfound-object",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Object",id:"object",level:5}],m={toc:d},f="wrapper";function h(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(f,l({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Every Taro application needs an entry component to register the application. The default entry file is ",(0,r.kt)("inlineCode",{parentName:"p"},"app.js")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," directory."),(0,r.kt)("p",null,"In the entry component we can set the global state or access the lifecycle of the mini program entry instance."),(0,r.kt)("h2",l({},{id:"example-code"}),"Example Code"),(0,r.kt)(a.Z,{defaultValue:"class",values:[{label:"Class Component",value:"class"},{label:"Functional Component",value:"functional"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"class",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-jsx",metastring:'title="app.js"',title:'"app.js"'}),"import React, { Component } from 'react'\n\n// If we use the Redux\nimport { Provider } from 'react-redux'\nimport configStore from './store'\n\n// Global Style\nimport './app.css'\n\nconst store = configStore()\n\nclass App extends Component {\n  // All React component methods can be used\n  componentDidMount () {}\n\n  // onLaunch\n  onLaunch () {}\n\n  //  onShow\n  componentDidShow () {}\n\n  //  onHide\n  componentDidHide () {}\n\n  render () {\n    // Nothing will be rendered in the entry component, but we can do something like state management here\n    return (\n      <Provider store={store}>\n        /* this.props.children is the page that will be rendered */\n        {this.props.children}\n      </Provider>\n    )\n  }\n}\n\nexport default App\n"))),(0,r.kt)(o.Z,{value:"functional",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-jsx",metastring:'title="app.js"',title:'"app.js"'}),"import React, { useEffect } from 'react'\n\n// The additional hooks added to Taro should be brought in from '@tarojs/taro'\nimport { useDidShow, useDidHide } from '@tarojs/taro'\n\n// Global Style\nimport { Provider } from 'react-redux'\nimport configStore from './store'\n\n// Global Style\nimport './app.css'\n\nconst store = configStore()\n\nfunction App (props) {\n  // All React Hooks can be used\n  useEffect(() => {})\n\n  // onShow\n  useDidShow(() => {})\n\n  //  onHide\n  useDidHide(() => {})\n\n  return (\n    // Nothing will be rendered in the entry component, but we can do something like state management here\n    <Provider store={store}>\n      {/* props.children is the page that will be rendered */}\n      {props.children}\n    </Provider>\n  )\n}\n\nexport default App\n")))),(0,r.kt)("h2",l({},{id:"entry-component-configuration"}),"Entry Component Configuration"),(0,r.kt)("p",null,"Please refer to the ",(0,r.kt)("a",l({parentName:"p"},{href:"./app-config"}),"global configuration")),(0,r.kt)("h2",l({},{id:"life-cycle-methods"}),"Life cycle methods"),(0,r.kt)("p",null,"In addition to supporting React's lifecycle methods, the portal component additionally supports the following lifecycles according to the mini program's standards."),(0,r.kt)("h3",l({},{id:"onlaunch-options"}),"onLaunch (options)"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"onLaunch")," of the corresponding app in the mini program environment.")),(0,r.kt)("p",null,"rogram initialization parameters can be accessed during this lifecycle by accessing the ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," parameter or by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"getCurrentInstance().router"),"."),(0,r.kt)("h4",l({},{id:"parameters"}),"Parameters"),(0,r.kt)("h5",l({},{id:"options"}),"options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",l({parentName:"tr"},{align:null}),"Proerty"),(0,r.kt)("th",l({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",l({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"path"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"Path for launch mini-program")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"scene"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"Scene values for launch mini-program")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"query"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"Parameters for launch mini-program")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"shareTicket"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"shareTicket\uff0cSee Get More Forwarding Information")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"referrerInfo"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"Source information. Source information. Returned when accessing an mini-program from another mini-program, public number or app. Otherwise returns {}")))),(0,r.kt)("h5",l({},{id:"optionsreferrerinfo"}),"options.referrerInfo"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",l({parentName:"tr"},{align:null}),"Proerty"),(0,r.kt)("th",l({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",l({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"appId"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"Source mini-program, or public number (in WeChat)\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"extraData"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"The data passed from the source mini-program is supported by WeChat and Baidu smart-program at scene=1037 or 1038")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"sourceServiceId"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"Source plugin, visible when in plugin run mode")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"}," The options parameter may vary from field to field in different mini-program"),(0,r.kt)("p",{parentName:"blockquote"},"Scene values , there are differences in WeChat Mini-program and Baidu Smart-program, please refer to them respectively  ",(0,r.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/scene.html"}),"Wechat Mini-program")," \u548c ",(0,r.kt)("a",l({parentName:"p"},{href:"https://smartprogram.baidu.com/docs/data/scene/"}),"Baidu Smart-program Documents"))),(0,r.kt)("h3",l({},{id:"componentdidshow-options"}),"componentDidShow (options)"),(0,r.kt)("p",null,"Triggered when the program is started, or foregrounded."),(0,r.kt)("p",null,"As with the ",(0,r.kt)("inlineCode",{parentName:"p"},"onLaunch")," lifecycle, program initialization parameters can be accessed during this lifecycle by accessing the ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," parameter or calling ",(0,r.kt)("inlineCode",{parentName:"p"},"getCurrentInstance().router"),"."),(0,r.kt)("p",null,"The parameters are basically the same as those obtained in ",(0,r.kt)("inlineCode",{parentName:"p"},"onLaunch"),", but with two additional parameters in ",(0,r.kt)("strong",{parentName:"p"},"Baidu Smart-program")," as follows."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",l({parentName:"tr"},{align:null}),"Proerty"),(0,r.kt)("th",l({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",l({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"entryType"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"Source identifier, take the value of user/ schema /sys :",(0,r.kt)("br",null),"user\uff1aIndicates before and after passing home",(0,r.kt)("br",null),"Switching or unlocking the screen, etc. to bring up.",(0,r.kt)("br",null),"schema\uff1aIndicates a protocol call-up;",(0,r.kt)("br",null),"sys\uff1aOther")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"appURL"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"The call-up protocol at the time of the presentation, which exists only if the value of entryType is schema")))),(0,r.kt)("h3",l({},{id:"componentdidhide-"}),"componentDidHide ()"),(0,r.kt)("p",null,"Triggered when the program switches to the background."),(0,r.kt)("h3",l({},{id:"onpagenotfound-object"}),"onPageNotFound (Object)"),(0,r.kt)("p",null,"Triggered when the page to be opened by the program does not exist."),(0,r.kt)("h4",l({},{id:"parameters-1"}),"Parameters"),(0,r.kt)("h5",l({},{id:"object"}),"Object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",l({parentName:"tr"},{align:null}),"Proerty"),(0,r.kt)("th",l({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",l({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"path"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"Path to non-existent page")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"query"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"Open the query parameter of a non-existent page")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"isEntryPage"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"boolean"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"Whether it is the first page of this launch")))))}h.isMDXComponent=!0}}]);