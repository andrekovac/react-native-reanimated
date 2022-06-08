"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[6599],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,h=m["".concat(p,".").concat(c)]||m[c]||d[c]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5896:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o={id:"interpolate",title:"Interpolate",sidebar_label:"Interpolate"},l=void 0,p={unversionedId:"api/miscellaneous/interpolate",id:"version-2.5.x/api/miscellaneous/interpolate",isDocsHomePage:!1,title:"Interpolate",description:"Sometimes you need to map value from one range to another. This is where you should use interpolate functions which approximates values between points in the output range and lets you map value inside the input range to corresponded approximation in the output range. It also supports few types of Extrapolation to enable mapping outside the range.",source:"@site/versioned_docs/version-2.5.x/api/miscellaneous/interpolate.md",sourceDirName:"api/miscellaneous",slug:"/api/miscellaneous/interpolate",permalink:"/react-native-reanimated/docs/api/miscellaneous/interpolate",version:"2.5.x",frontMatter:{id:"interpolate",title:"Interpolate",sidebar_label:"Interpolate"},sidebar:"version-2.5.x/docs",previous:{title:"runOnUI",permalink:"/react-native-reanimated/docs/api/miscellaneous/runOnUI"},next:{title:"getRelativeCoords",permalink:"/react-native-reanimated/docs/api/miscellaneous/getRelativeCoords"}},s=[{value:"Arguments",id:"arguments",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Example",id:"example",children:[]}],u={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Sometimes you need to map value from one range to another. This is where you should use ",(0,i.kt)("inlineCode",{parentName:"p"},"interpolate")," functions which approximates values between points in the output range and lets you map value inside the input range to corresponded approximation in the output range. It also supports few types of Extrapolation to enable mapping outside the range."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Be aware that ",(0,i.kt)("inlineCode",{parentName:"p"},"interpolate")," was renamed in reanimated v2 to ",(0,i.kt)("inlineCode",{parentName:"p"},"interpolateNode")," and should not be confused with ",(0,i.kt)("inlineCode",{parentName:"p"},"interpolate")," from the new API. When using interpolate imported directly from react-native-reanimated v1, in v2 you should use interpolateNode instead. If you were using a class member method AnimatedValue.interpolate, no change is necessary."))),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"value-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"value")," ","[Float]"),(0,i.kt)("p",null,"Value from within input range that should be map into value from output range."),(0,i.kt)("h4",{id:"input-range-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"input range")," [Float[]]"),(0,i.kt)("p",null,"An array of Floats that contains points that indicate the range of the input value. Values in the input range should be increasing."),(0,i.kt)("h4",{id:"output-range-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"output range")," [Float[]]"),(0,i.kt)("p",null,"An array of Floats that contains points that indicate the range of the output value. It should have at least the same number of points as the input range."),(0,i.kt)("h4",{id:"extrapolation-type-object--string"},(0,i.kt)("inlineCode",{parentName:"h4"},"extrapolation type")," ","[Object | String]"),(0,i.kt)("p",null,"Can be either object or string. If the object is passed it should specify extrapolation explicit for the right and left sides. If extrapolation for the side is not provided, it defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"Extrapolation.EXTEND"),". Example extrapolation type object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const extrapolation = {\n    extrapolateLeft: Extrapolation.CLAMP,\n    extrapolateRight: Extrapolation.IDENTITY\n}\n")),(0,i.kt)("p",null,"If the string is provided, the provided extrapolation type is applied to both sides."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Available extrapolation types:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Extrapolation.CLAMP")," - clamps value to the edge of the output range."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Extrapolation.IDENTITY")," - returns value that is being interpolate"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Extrapolation.EXTEND")," - approximates value even outside the range")),(0,i.kt)("p",{parentName:"div"},"Available extrapolation string values:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"clamp")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"identity")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"extend"))))),(0,i.kt)("h3",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"interpolate")," returns the value after interpolation from within the output range."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { View, StyleSheet, Dimensions } from 'react-native';\nimport Animated, {\n  useSharedValue,\n  useAnimatedScrollHandler,\n  useAnimatedStyle,\n  interpolate,\n} from 'react-native-reanimated';\n\nexport const HEADER_IMAGE_HEIGHT = Dimensions.get('window').width / 3;\n\nexport default function Test() {\n  const scrollY = useSharedValue(0);\n  const scrollHandler = useAnimatedScrollHandler({\n    onScroll: (e) => {\n      scrollY.value = e.contentOffset.y;\n    },\n  });\n  const animatedStyles = useAnimatedStyle(() => {\n    const scale = interpolate(scrollY.value, [-100, 0], [2, 1], { extrapolateRight: Extrapolation.CLAMP });\n\n    return {\n      transform: [{ scale: scale }],\n    };\n  });\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center' }}>\n      <Animated.View\n        style={[\n          {\n            position: 'absolute',\n            top: 20,\n            left: 0,\n            width: 20,\n            height: 20,\n            backgroundColor: 'blue',\n          },\n          animatedStyles,\n        ]}\n      />\n\n      <Animated.ScrollView\n        scrollEventThrottle={1}\n        style={StyleSheet.absoluteFill}\n        onScroll={scrollHandler}></Animated.ScrollView>\n    </View>\n  );\n}\n")))}d.isMDXComponent=!0}}]);