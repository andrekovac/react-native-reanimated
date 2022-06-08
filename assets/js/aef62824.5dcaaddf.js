"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[7738],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(f,r(r({ref:t},l),{},{components:n})):a.createElement(f,r({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5772:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7294),i="container_2oFM",o="gifs_3p7Y",r="rightArrow_2vVe",s="downArrow_3Hd5",c=n(6010),p=function(e){var t=e.before,n=e.after,p=(0,a.useState)(null),l=p[0],m=p[1];return(0,a.useEffect)((function(){function e(){var e=window.innerWidth;m(e)}return e(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),a.createElement("div",{className:(0,c.Z)(i)},a.createElement("img",{src:t,className:(0,c.Z)(o)}),l&&l>=650&&a.createElement("div",{className:(0,c.Z)(r)},"\u2192"),l&&l<650&&a.createElement("div",{className:(0,c.Z)(s)},"\u2193"),a.createElement("img",{src:n,className:(0,c.Z)(o)}))}},7819:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7294),i="container_1zvi",o="roundedStep_3opA",r="description_1txH",s="stepTitle_3RiT",c="code_QhLf",p="codeInactive_2fTW",l=n(6010),m=function(e){var t=e.children,n=e.title,m=(0,a.useState)(!1),u=m[0],d=m[1],f=(0,a.useRef)(),y=function(){var e=window.innerHeight,t=window.pageYOffset,n=f.current.offsetTop-e/3,a=f.current.offsetTop+f.current.scrollHeight+60-e/3;d(t>n&&t<a)};return(0,a.useEffect)((function(){return y(),window.addEventListener("scroll",y,{passive:!0}),function(){window.removeEventListener("scroll",y)}}),[]),a.createElement("div",{className:(0,l.Z)(i),ref:f},a.createElement("div",{className:(0,l.Z)(r)},a.createElement("div",{className:(0,l.Z)(o),style:u?{borderColor:"#001a72"}:{}},a.createElement("div",{className:(0,l.Z)(s)},n),t[0])),a.createElement("div",{className:(0,l.Z)(u?c:[c,p])},t[1]))}},8762:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return A},default:function(){return N},frontMatter:function(){return Z},metadata:function(){return P},toc:function(){return S}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=n(7819),s=n(5772),c={toc:[]};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"...\nfunction Participant({\n  name,\n  onRemove,\n}: {\n  name: string;\n  onRemove: () => void;\n}): React.ReactElement {\n  return (\n    <View\n      style={[styles.participantView]}>\n      <Text>{name}</Text>\n      <Button title=\"Remove\" color=\"red\" onPress={onRemove} />\n    </View>\n  );\n}\n\nexport default function AnimatedListExample(): React.ReactElement {\n  const [inputValue, setInputValue] = useState('');\n  const [participantList, setParticipantList] = useState<EventParticipant[]>(\n    []\n  );\n\n  const addParticipant = () => {\n    setParticipantList(\n      [{ name: inputValue, id: Date.now().toString() }].concat(participantList)\n    );\n    setInputValue('');\n  };\n\n  const removeParticipant = (id: string) => {\n    setParticipantList(\n      participantList.filter((participant) => participant.id !== id)\n    );\n  };\n\n  return (\n    <View\n      style={[styles.listView]}>\n      <ScrollView style={[{ width: '100%' }]}>\n        {participantList.map((participant) => (\n          <Participant\n            key={participant.id}\n            name={participant.name}\n            onRemove={() => removeParticipant(participant.id)}\n          />\n        ))}\n      </ScrollView>\n\n      <View\n        style={[ styles.bottomRow]}>\n        <View\n          style={[styles.textInput]}>\n          <Text>Add participant: </Text>\n          <TextInput\n            placeholder=\"Name\"\n            value={inputValue}\n            onChangeText={setInputValue}\n          />\n        </View>\n\n        <Button\n          title=\"Add\"\n          disabled={inputValue === ''}\n          onPress={addParticipant}\n        />\n      </View>\n    </View>\n  );\n}\n")))}p.isMDXComponent=!0;var l={toc:[]};function m(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"{4-8}","{4-8}":!0},"...\n<ScrollView style={[{ width: '100%' }]}>\n  {participantList.map((participant) => (\n    <Participant\n      key={participant.id}\n      name={participant.name}\n      onRemove={() => removeParticipant(participant.id)}\n    />\n  ))}\n</ScrollView>\n...\n")))}m.isMDXComponent=!0;var u={toc:[]};function d(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{10,14}","{10,14}":!0},'...\nfunction Participant({\n  name,\n  onRemove,\n}: {\n  name: string;\n  onRemove: () => void;\n}): React.ReactElement {\n  return (\n    <View\n      style={[styles.participantView]}>\n      <Text>{name}</Text>\n      <Button title="Remove" color="red" onPress={onRemove} />\n    </View>\n  );\n}\n...\n')))}d.isMDXComponent=!0;var f={toc:[]};function y(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{1,11,15}","{1,11,15}":!0},'import Animated from \'react-native-reanimated\';\n...\nfunction Participant({\n  name,\n  onRemove,\n}: {\n  name: string;\n  onRemove: () => void;\n}): React.ReactElement {\n  return (\n    <Animated.View\n      style={[styles.participantView]}>\n      <Text>{name}</Text>\n      <Button title="Remove" color="red" onPress={onRemove} />\n    </Animated.View>\n  );\n}\n...\n')))}y.isMDXComponent=!0;var v={toc:[]};function g(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{1,12}","{1,12}":!0},'import Animated, {LightSpeedInLeft} from \'react-native-reanimated\';\n...\nfunction Participant({\n  name,\n  onRemove,\n}: {\n  name: string;\n  onRemove: () => void;\n}): React.ReactElement {\n  return (\n    <Animated.View\n      entering={LightSpeedInLeft}\n      style={[styles.participantView]}>\n      <Text>{name}</Text>\n      <Button title="Remove" color="red" onPress={onRemove} />\n    </Animated.View>\n  );\n}\n...\n')))}g.isMDXComponent=!0;var w={toc:[]};function h(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{3,16}","{3,16}":!0},'import Animated, {\n  LightSpeedInLeft, \n  Layout\n} from \'react-native-reanimated\';\n...\nfunction Participant({\n  name,\n  onRemove,\n}: {\n  name: string;\n  onRemove: () => void;\n}): React.ReactElement {\n  return (\n    <Animated.View\n      entering={LightSpeedInLeft}\n      layout={Layout.springify()}\n      style={[styles.participantView]}>\n      <Text>{name}</Text>\n      <Button title="Remove" color="red" onPress={onRemove} />\n    </Animated.View>\n  );\n}\n...\n')))}h.isMDXComponent=!0;var k={toc:[]};function x(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{3,17}","{3,17}":!0},'import Animated, {\n  LightSpeedInLeft, \n  LightSpeedOutRight\n  Layout\n} from \'react-native-reanimated\';\n...\nfunction Participant({\n  name,\n  onRemove,\n}: {\n  name: string;\n  onRemove: () => void;\n}): React.ReactElement {\n  return (\n    <Animated.View\n      entering={LightSpeedInLeft}\n      exiting={LightSpeedOutRight}\n      layout={Layout.springify()}\n      style={[styles.participantView]}>\n      <Text>{name}</Text>\n      <Button title="Remove" color="red" onPress={onRemove} />\n    </Animated.View>\n  );\n}\n...\n')))}x.isMDXComponent=!0;var b=n(579),T=n(4643),L=n(878),R=n(9438),Z={id:"layoutAnimations",title:"How to easily animate your screens and components",sidebar_label:"Layout Animations",hide_table_of_contents:!0},A=void 0,P={unversionedId:"tutorials/LayoutAnimations/layoutAnimations",id:"tutorials/LayoutAnimations/layoutAnimations",isDocsHomePage:!1,title:"How to easily animate your screens and components",description:"This tutorial will help you make your screens and components more smooth by adding animations.",source:"@site/docs/tutorials/LayoutAnimations/animated_list.mdx",sourceDirName:"tutorials/LayoutAnimations",slug:"/tutorials/LayoutAnimations/layoutAnimations",permalink:"/react-native-reanimated/docs/next/tutorials/LayoutAnimations/layoutAnimations",version:"current",frontMatter:{id:"layoutAnimations",title:"How to easily animate your screens and components",sidebar_label:"Layout Animations",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Testing with Jest",permalink:"/react-native-reanimated/docs/next/guide/testing"},next:{title:"Community",permalink:"/react-native-reanimated/docs/next/community"}},S=[],V={toc:S};function N(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},V,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This tutorial will help you make your screens and components more smooth by adding animations.\nWe will use a new feature from the Reanimated library - Layout Animations which lets us animate:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"components appearance"),(0,o.kt)("li",{parentName:"ul"},"components disappearance"),(0,o.kt)("li",{parentName:"ul"},"layout changes")),(0,o.kt)("p",null,"using predefined animations. There are plenty of predefined animations you can use, however,\nif you need to create more customized animation, you can easily implemented your own."),(0,o.kt)("p",null,"To give you a better understanding of how to use those animations,\nwe are gonna prettify already existing screen - participant list, by adding layout animations to its components.\nHere you can see, change that we will get after going through this tutorial."),(0,o.kt)(s.Z,{before:b.Z,after:R.Z,mdxType:"BeforeAndAfter"}),(0,o.kt)(r.Z,{title:"Screen Introduction",mdxType:"TutorialStep"},(0,o.kt)("div",null,"Here we have already an existing Participant list component ( full code which you can easily copy and try for yourself you can find\xa0",(0,o.kt)("a",{href:"https://gist.github.com/jmysliv/87b15453aab173a63a4d22fcc5b1d603"},"here"),"\xa0). Let's focus on parts that we will animate, in this case - Participant component."),(0,o.kt)(p,{mdxType:"FullCode"})),(0,o.kt)(r.Z,{title:"Participant component",mdxType:"TutorialStep"},(0,o.kt)("div",null,"Participant component is responsible for displaying a list item, which we will be animating."),(0,o.kt)(m,{mdxType:"ParticipantComponent"})),(0,o.kt)(r.Z,{title:"Participant component internals",mdxType:"TutorialStep"},(0,o.kt)("div",null,"As you can see Participant component is wrapped in one View component, and that's the place where will be adding our animations. We can animate only components that are provided by reanimated ( e.g. Animated.View ), or components we changed using createAnimatedComponent."),(0,o.kt)(d,{mdxType:"ParticipantInternals"})),(0,o.kt)(r.Z,{title:"Step 1",mdxType:"TutorialStep"},(0,o.kt)("div",null,"Let's import Animated from reanimated and replace View with Animated.View, so we can add animations to our component."),(0,o.kt)(y,{mdxType:"Step1"})),(0,o.kt)(r.Z,{title:"Step 2",mdxType:"TutorialStep"},(0,o.kt)("div",null,"Now let's add an entering animation. We can choose entering animation from plenty of available\xa0",(0,o.kt)("a",{href:"https://docs.swmansion.com/react-native-reanimated/docs/api/LayoutAnimations/entryAnimations"},"predefined animation."),"\xa0We will go with LightSpeedInLeft effect."),(0,o.kt)(g,{mdxType:"Step2"})),(0,o.kt)(r.Z,{title:"Current result",mdxType:"TutorialStep"},(0,o.kt)("div",null,"Here you can see, the effect we have achieved by adding entering animation."),(0,o.kt)("img",{src:T.Z,style:{height:"500px",width:"auto",borderRadius:"5%"}})),(0,o.kt)(r.Z,{title:"Step 3",mdxType:"TutorialStep"},(0,o.kt)("div",null,"Now let's add layout transition."),(0,o.kt)(h,{mdxType:"Step3"})),(0,o.kt)(r.Z,{title:"Current result",mdxType:"TutorialStep"},(0,o.kt)("div",null,"Here you can see, the effect we have achieved by adding layout transition."),(0,o.kt)("img",{src:L.Z,style:{height:"500px",width:"auto",borderRadius:"5%"}})),(0,o.kt)(r.Z,{title:"Step 4",mdxType:"TutorialStep"},(0,o.kt)("div",null,"Now let's add an exiting animation. We can choose exiting animation from plenty of available\xa0",(0,o.kt)("a",{href:"https://docs.swmansion.com/react-native-reanimated/docs/api/LayoutAnimations/exitingAnimations"},"predefined animation."),"\xa0We will go with LightSpeedOutRight effect."),(0,o.kt)(x,{mdxType:"Step4"})),(0,o.kt)("h4",{id:"and-thats-all-you-can-see-that-adding-layout-animations-to-our-list-was-super-easy-and-the-user-experience-is-way-better-full-code-of-the-animated-list-you-can-find-here"},"And that's all! You can see that adding layout animations to our list was super easy and the user experience is way better. Full code of the animated list you can find ",(0,o.kt)("a",{parentName:"h4",href:"https://gist.github.com/jmysliv/0056d6cd3021883ea0f2c7f4af0526b2"},"here"),"."),(0,o.kt)("center",null,(0,o.kt)("img",{src:R.Z,height:"500px",style:{borderRadius:"5%"}})))}N.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})},9438:function(e,t,n){t.Z=n.p+"assets/images/after-e3e04aaf52902a396d6f5887bdc1bdb5.gif"},579:function(e,t,n){t.Z=n.p+"assets/images/before-ccd07f388857274c1860e64e5155bc9c.gif"},4643:function(e,t,n){t.Z=n.p+"assets/images/entering-2ec23ca10dce1dad1319cc6c5e195267.gif"},878:function(e,t,n){t.Z=n.p+"assets/images/layout-341920cb35d6f1c27bad9e20059bdaf6.gif"}}]);