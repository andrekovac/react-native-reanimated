"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[1766],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(r),h=n,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return r?a.createElement(m,o(o({ref:t},c),{},{components:r})):a.createElement(m,o({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:n,o[1]=u;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9506:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o={id:"useSharedValue",title:"useSharedValue",sidebar_label:"useSharedValue"},u=void 0,s={unversionedId:"api/hooks/useSharedValue",id:"version-2.5.x/api/hooks/useSharedValue",isDocsHomePage:!1,title:"useSharedValue",description:"Use this hook to create a reference to a JavaScript value that can be shared with worklets.",source:"@site/versioned_docs/version-2.5.x/api/hooks/useSharedValue.md",sourceDirName:"api/hooks",slug:"/api/hooks/useSharedValue",permalink:"/react-native-reanimated/docs/api/hooks/useSharedValue",version:"2.5.x",frontMatter:{id:"useSharedValue",title:"useSharedValue",sidebar_label:"useSharedValue"},sidebar:"version-2.5.x/docs",previous:{title:"Troubleshooting",permalink:"/react-native-reanimated/docs/fundamentals/troubleshooting"},next:{title:"useAnimatedStyle",permalink:"/react-native-reanimated/docs/api/hooks/useAnimatedStyle"}},l=[{value:"Arguments",id:"arguments",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Example",id:"example",children:[]}],c={toc:l};function d(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Use this hook to create a reference to a JavaScript value that can be shared with worklets."),(0,i.kt)("p",null,"Shared Values serve a similar purpose to React Native's ",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/animatedvalue"},(0,i.kt)("inlineCode",{parentName:"a"},"Animated.Value"),"s"),".\nThey can carry data, provide a way to react to changes, and also drive animations.\nIf you aren't familiar with the concept of Shared Values in Reanimated v2, please check ",(0,i.kt)("a",{parentName:"p",href:"../../fundamentals/shared-values"},"Shared Values guide")," first."),(0,i.kt)("p",null,"When shared value reference is created using this hook, it can be accessed and modified by worklets.\nShared Values can also be modified from the React Native thread directly, in which case the update is going to be asynchronous."),(0,i.kt)("p",null,"Shared Values are just javascript objects, so you can pass them to children components or define your own hooks that create them."),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"initialvalue-numberstringboolobjectarrayfunction"},(0,i.kt)("inlineCode",{parentName:"h4"},"initialValue")," ","[number|string|bool|Object|Array|Function]"),(0,i.kt)("p",null,"The first argument takes the initial value, which could be any of the primitive JavaScript types, and assigns it as the initial value of the created Shared Value.\nThe value then can be read from the Shared Value reference using ",(0,i.kt)("inlineCode",{parentName:"p"},".value")," attribute."),(0,i.kt)("h3",{id:"returns"},"Returns"),(0,i.kt)("p",null,"The hook returns a reference to shared value initialized with the provided data.\nThe reference is an object with ",(0,i.kt)("inlineCode",{parentName:"p"},".value")," property, that can be accessed and modified from worklets, but also updated directly from the main JS thread."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"In the below example we render a button, which triggers random updates of a shared value directly from the React Native JS thread."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"{5}","{5}":!0},"import { Button } from 'react-native';\nimport { useSharedValue } from 'react-native-reanimated';\n\nfunction App() {\n  const width = useSharedValue(50);\n\n  return (\n    <View>\n      <SomeComponent width={width} />\n      <Button onPress={() => (width.value = Math.random() * 300)} />\n    </View>\n  );\n}\n")))}d.isMDXComponent=!0}}]);