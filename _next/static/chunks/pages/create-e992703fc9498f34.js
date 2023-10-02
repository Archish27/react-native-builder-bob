(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[417],{2599:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/create",function(){return a(8774)}])},8774:function(e,t,a){"use strict";a.r(t),a.d(t,{__toc:function(){return c},default:function(){return p}});var r=a(4246),n=a(9304),i=a(2917),s=a(6282);a(6288);var l=a(1441),o={src:"/react-native-builder-bob//_next/static/media/create-react-native-library.91c6b751.gif",height:738,width:1e3,blurWidth:0,blurHeight:0};let c=[{depth:2,value:"Features",id:"features"},{depth:2,value:"Usage",id:"usage"},{depth:2,value:"Local library",id:"local-library"}];function d(e){let t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",ul:"ul",li:"li",a:"a",pre:"pre",span:"span",img:"img"},(0,l.a)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{children:"Scaffold a React Native library"}),"\n",(0,r.jsxs)(t.p,{children:["If you want to create your own React Native library, scaffolding the project can be a daunting task. ",(0,r.jsx)(t.code,{children:"create-react-native-library"})," can scaffold a new project for you with all the necessary tools configured."]}),"\n",(0,r.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Minimal boilerplate for libraries on which you can build upon"}),"\n",(0,r.jsx)(t.li,{children:"Example React Native app to test your library code"}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://www.typescriptlang.org/",children:"TypeScript"})," to ensure type-safe code and better DX"]}),"\n",(0,r.jsxs)(t.li,{children:["Support for ",(0,r.jsx)(t.a,{href:"https://reactnative.dev/docs/next/the-new-architecture/pillars-turbomodules",children:"Turbo Modules"})," & ",(0,r.jsx)(t.a,{href:"https://reactnative.dev/docs/next/the-new-architecture/pillars-fabric-components",children:"Fabric"})]}),"\n",(0,r.jsxs)(t.li,{children:["Support for ",(0,r.jsx)(t.a,{href:"https://kotlinlang.org/",children:"Kotlin"})," on Android & ",(0,r.jsx)(t.a,{href:"https://developer.apple.com/swift/",children:"Swift"})," on iOS"]}),"\n",(0,r.jsx)(t.li,{children:"Support for C++ to write cross-platform native code"}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://expo.io/",children:"Expo"})," for libraries without native code and web support"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://eslint.org/",children:"ESLint"}),", ",(0,r.jsx)(t.a,{href:"https://prettier.io/",children:"Prettier"}),", ",(0,r.jsx)(t.a,{href:"https://www.typescriptlang.org/",children:"TypeScript"}),", ",(0,r.jsx)(t.a,{href:"https://github.com/evilmartians/lefthook",children:"Lefthook"})," and ",(0,r.jsx)(t.a,{href:"https://github.com/release-it/release-it",children:"Release It"})," pre-configured"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"./build",children:(0,r.jsx)(t.code,{children:"react-native-builder-bob"})})," pre-configured to compile your files"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/features/actions",children:"GitHub Actions"})," pre-configured to run tests and lint on the CI"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.p,{children:"To create new project, run the following:"}),"\n",(0,r.jsx)(t.pre,{"data-language":"sh","data-theme":"default",children:(0,r.jsx)(t.code,{"data-language":"sh","data-theme":"default",children:(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"npx"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"create-react-native-library@latest"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"awesome-library"})]})})}),"\n",(0,r.jsxs)(t.p,{children:["This will ask you a few questions about your project and generate a new project in a folder named ",(0,r.jsx)(t.code,{children:"awesome-library"}),"."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Demo",src:o})}),"\n",(0,r.jsxs)(t.p,{children:["After the project is created, you can find the development workflow in the generated ",(0,r.jsx)(t.code,{children:"CONTRIBUTING.md"})," file."]}),"\n",(0,r.jsx)(t.h2,{id:"local-library",children:"Local library"}),"\n",(0,r.jsxs)(t.p,{children:["While the default templates are for libraries that are published to npm, you can also create a local library that is not published, but used locally in your app. The local library is created outside of the ",(0,r.jsx)(t.code,{children:"android"})," and ",(0,r.jsx)(t.code,{children:"ios"})," folders and makes use of autolinking to integrate with your app. It also doesn't include a separate example app and additional dependencies that are configured in the default templates. This is an alternative approach to the setup mentioned in ",(0,r.jsx)(t.a,{href:"https://reactnative.dev",children:"React Native docs"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["If you run ",(0,r.jsx)(t.code,{children:"create-react-native-library"})," in an existing project containing a ",(0,r.jsx)(t.code,{children:"package.json"}),", it'll be automatically detected and you'll be asked if you want to create a local library. You can also pass the ",(0,r.jsx)(t.code,{children:"--local"})," flag to the command to explicitly create a local library:"]}),"\n",(0,r.jsx)(t.pre,{"data-language":"sh","data-theme":"default",children:(0,r.jsx)(t.code,{"data-language":"sh","data-theme":"default",children:(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"npx"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"create-react-native-library@latest"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"awesome-library"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"--local"})]})})}),"\n",(0,r.jsx)(t.p,{children:"The advantages of this approach are:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["It's easier to upgrade React Native as you don't need to worry about custom code in ",(0,r.jsx)(t.code,{children:"android"})," and ",(0,r.jsx)(t.code,{children:"ios"})," folders."]}),"\n",(0,r.jsxs)(t.li,{children:["It can be used with ",(0,r.jsx)(t.a,{href:"https://expo.io/",children:"Expo"})," managed projects with custom development client."]}),"\n",(0,r.jsx)(t.li,{children:"It's easier to copy the library to other projects or publish later if needed."}),"\n",(0,r.jsx)(t.li,{children:"The boilerplate for the library doesn't need to be written from scratch."}),"\n",(0,r.jsx)(t.li,{children:"It can be used with monorepos where the additional tooling in the default templates may not be needed."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["By default, the generated library is automatically linked to the project using ",(0,r.jsx)(t.code,{children:"link:"})," protocol when using ",(0,r.jsx)(t.a,{href:"https://yarnpkg.com/",children:"Yarn"})," and ",(0,r.jsx)(t.code,{children:"file:"})," when using ",(0,r.jsx)(t.a,{href:"https://docs.npmjs.com/cli",children:"npm"}),":"]}),"\n",(0,r.jsx)(t.pre,{"data-language":"json","data-theme":"default",children:(0,r.jsxs)(t.code,{"data-language":"json","data-theme":"default",children:[(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"dependencies"'}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:": {"})]}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:'"react-native-awesome-library"'}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"link:./modules/awesome-library"'})]}),"\n",(0,r.jsx)(t.span,{className:"line",children:(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,r.jsxs)(t.p,{children:["This creates a symlink to the library under ",(0,r.jsx)(t.code,{children:"node_modules"})," which makes autolinking work. But if you're using a monorepo or have non-standard setup, you'll need to manually set up the package to be linked to your app based on your project setup."]})]})}let h={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,l.a)(),e.components);return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/create.md",route:"/create",pageMap:[{kind:"Meta",data:{index:"Introduction",create:"Scaffold a library",build:"Build a library",faq:"FAQ"}},{kind:"MdxPage",name:"build",route:"/build"},{kind:"MdxPage",name:"create",route:"/create"},{kind:"MdxPage",name:"faq",route:"/faq"},{kind:"MdxPage",name:"index",route:"/"}],flexsearch:{codeblocks:!0},title:"Scaffold a React Native library",headings:c},pageNextRoute:"/create",nextraLayout:i.ZP,themeConfig:s.Z};var p=(0,n.j)(h)},6282:function(e,t,a){"use strict";var r=a(4246);a(7378),t.Z={primaryHue:30,logo:(0,r.jsx)("span",{style:{fontSize:"32px"},children:"\uD83D\uDC77‍♂️"}),project:{link:"https://github.com/callstack/react-native-builder-bob"},docsRepositoryBase:"https://github.com/callstack/react-native-builder-bob/tree/main/docs",footer:{text:(0,r.jsxs)("span",{children:["Copyright \xa9 ",new Date().getFullYear()," ",(0,r.jsx)("a",{href:"https://www.callstack.com/",target:"_blank",rel:"noreferrer",children:"Callstack Open Source"}),"."]})},useNextSeoProps:()=>({titleTemplate:"%s – Bob"})}}},function(e){e.O(0,[774,571,888,179],function(){return e(e.s=2599)}),_N_E=e.O()}]);