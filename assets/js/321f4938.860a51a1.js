"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[5155],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(n),p=r,m=h["".concat(s,".").concat(p)]||h[p]||d[p]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4211:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i={id:"worklets",title:"Worklets",sidebar_label:"Worklets"},l=void 0,s={unversionedId:"worklets",id:"version-2.2.x/worklets",isDocsHomePage:!1,title:"Worklets",description:"The ultimate goal of worklets was for them to define small pieces of JavaScript code that we run when updating view properties or reacting to events on the UI thread. A natural construct in JavaScript for such a purpose was a simple method. With Reanimated 2 we spawn a secondary JS context on the UI thread that then is able to run JavaScript functions. The only thing that is needed is for that function to have \u201cworklet\u201d directive at the top:",source:"@site/versioned_docs/version-2.2.x/worklets.md",sourceDirName:".",slug:"/worklets",permalink:"/react-native-reanimated/docs/2.2.x/worklets",version:"2.2.x",frontMatter:{id:"worklets",title:"Worklets",sidebar_label:"Worklets"},sidebar:"version-2.2.x/docs",previous:{title:"Installation",permalink:"/react-native-reanimated/docs/2.2.x/installation"},next:{title:"Shared Values",permalink:"/react-native-reanimated/docs/2.2.x/shared-values"}},c=[{value:"Using hooks",id:"using-hooks",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ultimate goal of worklets was for them to define small pieces of JavaScript code that we run when updating view properties or reacting to events on the UI thread. A natural construct in JavaScript for such a purpose was a simple method. With Reanimated 2 we spawn a secondary JS context on the UI thread that then is able to run JavaScript functions. The only thing that is needed is for that function to have \u201cworklet\u201d directive at the top:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function someWorklet(greeting) {\n  'worklet';\n  console.log(\"Hey I'm running on the UI thread\");\n}\n")),(0,a.kt)("p",null,"Functions are a great construct for our needs because you can communicate with the code they run by passing arguments. Each worklet function can be run either on the main React Native thread if you just call that function in your code, or you can execute it on the UI thread using ",(0,a.kt)("inlineCode",{parentName:"p"},"runOnUI"),". Note that UI execution is asynchronous from the caller\u2019s perspective. When you pass arguments, they will be copied to the UI JS context."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function someWorklet(greeting) {\n  'worklet';\n  console.log(greeting, 'From the UI thread');\n}\n\nfunction onPress() {\n  runOnUI(someWorklet)('Howdy');\n}\n")),(0,a.kt)("p",null,"In addition to arguments, functions also capture the context where they are defined. So when you have a variable that is defined outside of the worklet scope but is used inside a worklet, it will also be copied along with the arguments and you\u2019d be able to use it (we refer to it as capturing given params):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const width = 135.5;\n\nfunction otherWorklet() {\n  'worklet';\n  console.log('Captured width is', width);\n}\n")),(0,a.kt)("p",null,"Worklets can capture (or take as arguments) from other worklets, in which case when called, they will execute synchronously on the UI thread:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function returningWorklet() {\n  'worklet';\n  return \"I'm back\";\n}\n\nfunction someWorklet() {\n  'worklet';\n  let what = returningWorklet();\n  console.log('On the UI thread, other worklet says', what);\n}\n")),(0,a.kt)("p",null,"And hey \u2013 this works for regular methods too. In fact, console.log is not defined in the UI JS context, but is a reference to a method that the React Native JS context provides. So when we used ",(0,a.kt)("inlineCode",{parentName:"p"},"console.log")," in the previous examples it was actually executed on the React Native thread."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function callback(text) {\n  console.log('Running on the RN thread', text);\n}\n\nfunction someWorklet() {\n  'worklet';\n  console.log(\"I'm on UI but can call methods from the RN thread\");\n  runOnJS(callback)('can pass arguments too');\n}\n")),(0,a.kt)("h2",{id:"using-hooks"},"Using hooks"),(0,a.kt)("p",null,"In practice, when writing animations and interactions with Reanimated, you will rarely need to create worklets using ",(0,a.kt)("inlineCode",{parentName:"p"},"'worklet'")," directive (just take a look at ",(0,a.kt)("inlineCode",{parentName:"p"},"Example/")," folder to see we don't have that many occurences of the directive).\nWhat you will be using most of the time instead, are worklets that can be constructed by one of the hooks from Reanimated API, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"useDerivedValue"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"useAnimatedGestureHandler"),", etc.\nWhen using one of the hooks listed in the Reanimated API Reference, we automatically detect that the provided method is a worklet and do not require the directive to be specified.\nThe method provided to the hook will be turned into a worklet and executed on the UI thread automatically."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const style = useAnimatedStyle(() => {\n  console.log("Running on the UI thread");\n  return {\n    opacity: 0.5\n  };\n});\n')))}d.isMDXComponent=!0}}]);