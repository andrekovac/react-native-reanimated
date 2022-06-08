"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[7596],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(n),d=i,g=s["".concat(u,".").concat(d)]||s[d]||c[d]||r;return n?a.createElement(g,l(l({ref:t},m),{},{components:n})):a.createElement(g,l({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9957:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),l={id:"withTiming",title:"withTiming",sidebar_label:"withTiming"},o=void 0,u={unversionedId:"api/animations/withTiming",id:"api/animations/withTiming",isDocsHomePage:!1,title:"withTiming",description:"Starts a time based animation.",source:"@site/docs/api/animations/withTiming.md",sourceDirName:"api/animations",slug:"/api/animations/withTiming",permalink:"/react-native-reanimated/docs/next/api/animations/withTiming",version:"current",frontMatter:{id:"withTiming",title:"withTiming",sidebar_label:"withTiming"},sidebar:"docs",previous:{title:"useEvent",permalink:"/react-native-reanimated/docs/next/api/hooks/useEvent"},next:{title:"withSpring",permalink:"/react-native-reanimated/docs/next/api/animations/withSpring"}},p=[{value:"Arguments",id:"arguments",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Example",id:"example",children:[]}],m={toc:p};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Starts a time based animation."),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"tovalue-number--string"},(0,r.kt)("inlineCode",{parentName:"h4"},"toValue")," ","[number | string]"),(0,r.kt)("p",null,"The target value at which the animation should conclude.\nIt can be specified as a color value by providing string like: ",(0,r.kt)("inlineCode",{parentName:"p"},"rgba(255, 105, 180, 0)"),"."),(0,r.kt)("p",null,"Currently supported formats are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"rgb(r, g, b)"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"rgba(r, g, b, a)"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"hsl(h, s, l)"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"hsla(h, s, l, a)"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"#rgb"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"#rgba"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"#rrggbb"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"#rrggbbaa"'))),(0,r.kt)("h4",{id:"options-object"},(0,r.kt)("inlineCode",{parentName:"h4"},"options")," ","[object]"),(0,r.kt)("p",null,"Object containing animation configuration.\nAllowed parameters are listed below:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Options"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"duration"),(0,r.kt)("td",{parentName:"tr",align:null},"300"),(0,r.kt)("td",{parentName:"tr",align:null},"How long the animation should last")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"easing"),(0,r.kt)("td",{parentName:"tr",align:null},"in-out quad easing"),(0,r.kt)("td",{parentName:"tr",align:null},"Worklet that drives the easing curve for the animation")))),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"easing")," parameter we recommend using one of the pre-configured worklets defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"Easing")," module."),(0,r.kt)("h4",{id:"callback-functionoptional"},(0,r.kt)("inlineCode",{parentName:"h4"},"callback")," ","[function]","(","optional",")"),(0,r.kt)("p",null,"The provided function will be called when the animation is complete.\nIn case the animation is cancelled, the callback will receive ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," as the argument, otherwise it will receive ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h3",{id:"returns"},"Returns"),(0,r.kt)("p",null,"This method returns an animation object. It can be either assigned directly to a Shared Value or can be used as a value for a style object returned from ",(0,r.kt)("a",{parentName:"p",href:"../hooks/useAnimatedStyle"},(0,r.kt)("inlineCode",{parentName:"a"},"useAnimatedStyle")),"."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Button } from 'react-native';\nimport Animated, {\n  useSharedValue,\n  useAnimatedStyle,\n  withTiming,\n  Easing,\n} from 'react-native-reanimated';\n\nfunction App() {\n  const width = useSharedValue(50);\n\n  const style = useAnimatedStyle(() => {\n    return {\n      width: withTiming(width.value, {\n        duration: 500,\n        easing: Easing.bezier(0.25, 0.1, 0.25, 1),\n      }),\n    };\n  });\n\n  return (\n    <View>\n      <Animated.View style={[styles.box, style]} />\n      <Button onPress={() => (width.value = Math.random() * 300)} title=\"Hey\" />\n    </View>\n  );\n}\n")))}c.isMDXComponent=!0}}]);