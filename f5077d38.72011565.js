(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{263:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(9),i=(n(0),n(269)),o={id:"getting_started",title:"Getting started",sidebar_label:"Getting started"},c={id:"version-1.x.x/getting_started",title:"Getting started",description:"Before you get started you should definitely familiarize yourself with the original Animated API. It will do you well to be comfortable with how animations are generally done in Animated. (Fun Fact: Reanimated is also backwards compatible with the Animated API. \ud83d\ude4c)",source:"@site/versioned_docs/version-1.x.x/getting_started.md",permalink:"/react-native-reanimated/docs/1.x.x/getting_started",editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/master/docs/versioned_docs/version-1.x.x/getting_started.md",version:"1.x.x",sidebar_label:"Getting started",sidebar:"version-1.x.x/docs",previous:{title:"About React Native Reanimated",permalink:"/react-native-reanimated/docs/1.x.x/about"},next:{title:"Declarative Animation API",permalink:"/react-native-reanimated/docs/1.x.x/declarative"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Testing",id:"testing",children:[]}],d={rightToc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Before you get started you should definitely familiarize yourself with the original ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://facebook.github.io/react-native/docs/animated.html"}),"Animated API"),". It will do you well to be comfortable with how animations are generally done in ",Object(i.b)("inlineCode",{parentName:"p"},"Animated"),". (Fun Fact: Reanimated is also backwards compatible with the ",Object(i.b)("inlineCode",{parentName:"p"},"Animated API"),". \ud83d\ude4c)"),Object(i.b)("p",null,"Refer to the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-reanimated/docs/1.x.x/about#motivation"}),"Motivation")," section to understand why this library exists"),Object(i.b)("p",null,"NOTE: Throughout this document when we refer to classes or methods prefixed with ",Object(i.b)("inlineCode",{parentName:"p"},"Animated")," we are referring to them being imported from ",Object(i.b)("inlineCode",{parentName:"p"},"react-native-reanimated")," package instead of plain ",Object(i.b)("inlineCode",{parentName:"p"},"react-native"),", unless otherwise stated."),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"I. First install the library from npm repository using ",Object(i.b)("inlineCode",{parentName:"p"},"yarn"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"  yarn add react-native-reanimated\n")),Object(i.b)("p",null,"II. For iOS, go to ",Object(i.b)("inlineCode",{parentName:"p"},"ios")," folder and run ",Object(i.b)("inlineCode",{parentName:"p"},"pod install"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"  cd ios\n  pod install\n")),Object(i.b)("p",null,'III. When you want to use "reanimated" in your project import it from the ',Object(i.b)("inlineCode",{parentName:"p"},"react-native-reanimated")," package:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import Animated from 'react-native-reanimated';\n")),Object(i.b)("p",null,"Similarly when you need ",Object(i.b)("inlineCode",{parentName:"p"},"Easing")," import it from the ",Object(i.b)("inlineCode",{parentName:"p"},"react-native-reanimated")," package instead of ",Object(i.b)("inlineCode",{parentName:"p"},"react-native"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import Animated, { Easing } from 'react-native-reanimated';\n")),Object(i.b)("h2",{id:"testing"},"Testing"),Object(i.b)("p",null,"In order to use ",Object(i.b)("inlineCode",{parentName:"p"},"react-native-reanimated")," with Jest, you need to add the following mock implementation at the top of your test:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"jest.mock('react-native-reanimated', () =>\n  require('react-native-reanimated/mock')\n);\n")))}s.isMDXComponent=!0},269:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),s=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,u=p["".concat(o,".").concat(m)]||p[m]||b[m]||i;return n?r.a.createElement(u,c(c({ref:t},d),{},{components:n})):r.a.createElement(u,c({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var d=2;d<i;d++)o[d]=n[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);