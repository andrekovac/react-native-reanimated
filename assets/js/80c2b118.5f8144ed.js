"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[4450],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3854:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return s}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i={},c=void 0,l={unversionedId:"nodes/color",id:"version-1.x.x/nodes/color",isDocsHomePage:!1,title:"color",description:"color",source:"@site/versioned_docs/version-1.x.x/nodes/color.md",sourceDirName:"nodes",slug:"/nodes/color",permalink:"/react-native-reanimated/docs/1.x.x/nodes/color",version:"1.x.x",frontMatter:{},sidebar:"version-1.x.x/docs",previous:{title:"call",permalink:"/react-native-reanimated/docs/1.x.x/nodes/call"},next:{title:"concat",permalink:"/react-native-reanimated/docs/1.x.x/nodes/concat"}},p=[{value:"<code>color</code>",id:"color",children:[]}],u={toc:p};function s(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"color"},(0,a.kt)("inlineCode",{parentName:"h2"},"color")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"color(red, green, blue, alpha);\n")),(0,a.kt)("p",null,"Creates a color node in RGBA format, where the first three input nodes should have ",(0,a.kt)("em",{parentName:"p"},"integer")," values in the range 0-255 (consider using ",(0,a.kt)("inlineCode",{parentName:"p"},"round")," node if needed) and correspond to color components Red, Green and Blue respectively. Last input node should have a value between 0 and 1 and represents alpha channel (value ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," means fully opaque and ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," completely transparent). Alpha parameter can be ommited, then ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," (fully opaque) is used as a default."),(0,a.kt)("p",null,"The returned node can be mapped to view properties that represents color (e.g. ",(0,a.kt)("a",{parentName:"p",href:"https://facebook.github.io/react-native/docs/view-style-props.html#backgroundcolor"},(0,a.kt)("inlineCode",{parentName:"a"},"backgroundColor")),")."),(0,a.kt)("h5",{id:"note-in-order-to-interpolate-color-output-values-use-interpolatecolors-instead"},"Note: In order to interpolate color output values, use ",(0,a.kt)("a",{parentName:"h5",href:"/react-native-reanimated/docs/1.x.x/nodes/interpolateColors"},(0,a.kt)("inlineCode",{parentName:"a"},"interpolateColors"))," instead."))}s.isMDXComponent=!0}}]);