This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



--


1강


Pages의 index 파일에 넣은 것이 자동적으로 내 웹사이트의 홈(기본 루트)에서 보이고 있다.
Framework와 Library

Library : 개발자로서 내가 사용하는 것
내가 불러오고, 내가 사용해서 무언가를 한다
내가 원하는 대로 코드를 작성할 수 있고, 사용하고 싶을 때 사용할 수 있다

Framework : 내 코드를 불러온다
내 코드를 적절한 위치에 잘 적기만 하면 내 코드를 불러와서 모든 걸 동작하게 한다

# React의 경우
: Library

create-react-app으로 React 앱을 만들면 항상 index.tsx 파일에 아래 부분이 만들어져있고,

```js
ReactDOM.render(
  <React.StrictMode>
  </React.StrictMode>,
  document.getElementById("root")
)
```

항상 App Component로 시작하는데 App은 텅 비어있어서 내가 원하는대로 만들 수 있음.
Components 폴더를 만들거나, Routes 폴더를 만든다. 내가 코드를 짜고, 내가 언제 React를 부를지,
어떤 폴더 구조로 만들지 정하는 것.
이름조차 Component와 Routes라고 할 필요도 없다.

React에서 라우팅을 다루는 방법은(페이지에서 페이지로 넘어가는 방법) 다 나에게 달렸다.

이처럼 Library를 사용할 때는 내가 원할 때 언제든, 어떤 방법으로든 부르면 된다.

# Next의 경우
: Framework

특정한 규칙을 따라서 특정한 것을 해야한다. 이걸 따랐을 때 모든 게 정상적으로 작동한다.


---

2강

#  React와 Next의 가장 큰 차이점

React에서는 ReactDOM.render가 있어서 React 앱이 만들어졌을 때의 모든 것을 볼 수 있다
하지만 Next에는 ReactDOM.render가 없기 때문에 그 과정을 커스텀할 수 있는 곳이 없음.
우리가 할 수 있는 유일한 것은 pages 안에서 뭔가를 만드는 것 뿐임.

Next.js의 깊은 구석에서 ReactDOM.render 과정을 처리하지만 우리가 거기로 접근하지 못한다.
이것이 곧 추상화(Abstraction)를 시킨 것. 이것이 바로 Framework.

Framework는 코드를 어떤 곳에 넣으면 Framework가 그 코드를 부르는 형태.
어떤 설정이나 router를 설치하지 않아도 내가 입력한 hi를 볼 수 있음!

React.js의 component를 export하고 있는 파일을 pages 폴더 안에 두기만 하면 된다.
그럼 Next.js가 파일의 이름을 가져다가 url의 이름으로 쓴다.
(그래서 파일 이름과 url이 일치한다면, 그 파일에서 내보내는 컴포넌트와 이름이 일치하지 않아도 해당 페이지로 갈 수 있는 것!)

하지만 그 페이지에서 export하고 있는 component는 반드시 export default여야 한다!

## 유일하게 기억해야할 것

유저에게 보여주고 싶은 게 있다면 pages 폴더에서 export default function을 해야한다.
함수의 이름은 중요하지 않고, 중요한 것은 파일명과 함수가 default로 export 여야하는 것.


jsx를 쓰고 있다면 import react from "react" 할 필요가 없다.
다만 useState, useEffect 등의 react lifecycle method를 써야 할 경우에는 꼭 import를 해줘야 한다.


---


3강

# Next.js의 가장 좋은 기능

1. 앱에 있는 페이지들이 미리 랜더링된다.

이것들이 정적(static)으로 생성된다.

## create-react-app
client-side render를 하는 앱을 만든다
- client-side rendering

# React의 경우

### client-side render
- 유저가 보는 UI를 브라우저가 만든다
- 유저가 보는 HTML 소스코드 안에 들어있지 않는다

_브라우저가 자바스크립트를 가져오고_
_클라이언트 사이드의 자바스크립트가 모든 UI를 만든다_

브라우저가 react.js를 다운받고 코드를 다운받았을 때
그때 react는 다른 모든 것들을 랜더링하고
유저는 UI를 보게 된다

#### 유저가 UI를 보기까지의 순서

1. 브라우저가 HTML을 가져올 때 비어있는 div로 가져온다 (<div id="root"></div> 유저는 이것만 보임)
2. 그 후 브라우저가 모든 자바스크립트를 요청하고
3. 브라우저가 그 자바스크립트와 react.js를 실행시키고
4. 그럼 react는 다른 모든 것들을 랜더링하고
5. 그 후에 UI가 만들어져서 앱이 유저에게 보인다.

> 이 때 유저가 자바스크립트 비활성화 상태였다면?
"You nee to enable JavaScript to run this app."을 보게된다

네트워크 탭에서 로딩을 일부러 느리게 설정하고 새로고침을 하면 하얀 화면이 보인다.
브라우저가 자바스크립트 코드를 요청하고 있고, 브라우저는 자바스크립트 코드가 왔을 때만 UI를 만들 수 있다.
그래서 하얀 화면이 보이는 것.

브라우저가 react.js 코드를 불러오고 있는 동안에 유저는 아무것도 볼 수 없다가,
react 코드가 왔을 때야 비로소 UI를 그린다니? 네트워크가 빠르지 않은 유저들은 진짜 별로일 거야.

로딩 중이라는 걸 보여주는 게 좋은데 그냥 하얀 화면만 보여준다니 이렇게 안좋을 수가......


# Next의 경우

### server-side render

next.js로 만든 웹사이트의 소스코드에는 react처럼 텅 빈 HTML이 아닌, 실제 HTML이 있다.
그래서 유저가 완전 느린 연결을 하고 있거나, JS가 완전히 비활성화 되어있어도 유저는 적어도 HTML은 볼 수 있다.

#### 유저가 UI를 보기까지의 순서


> 유저의 입장
- React의 경우
  - 유저는 **텅 빈 화면**을 보며 UI를 기다리고 api가 데이터를 가져오는 것을 기다린다
- Next의 경우
  - 유저는 **UI를 보며** api가 데이터를 가져오는 것만 기다린다



next.js는 앱 초기 상태를 활용해서 미리 랜더링을 한다.

이게 바로 `pre-rendering`.
next.js는 초기 상태로 `pre-rendering`을 한다.
그럼 그동안 유저는 초기 상태로 pre-rendering된 HTML을 보고 있다가,
react.js가 클라이언트로 전송이 되면 연결이 되어서 react.js 앱이 된다!

=> 이것을 hydration (react.js를 프론트엔드 안에서 실행한다)


Next.js는 react.js를 백엔드에서 동작 시켜서 이 페이지를 미리 만든다.
이게 component들을 render시킨다.
랜더링이 끝나면 그건 HTML이 되고
next.js는 그 HTML을 페이지 소스코드에 넣는다.

_그래서 유저가 자바스크립트와 react가 로딩되지 않았어도 콘텐츠를(UI를) 볼 수 있는 것!_




--- 4강

a태그로 넣고 다른 페이지로 이동하면 모든 페이지가 새로고침된다.
= 느림. 클라이언트 사이드 네비게이션이 없다는 의미.

NextJs에서 사용해야만 하는 Link 컴포넌트가 있다.
Link로 이동하면 훨씬 빨라짐

(a 태그와 Link 태그 이동 속도 비교 영상 있음)

Link 태그는,
NextJS 어플리케이션의 클라이언트 사이드 네비게이션을 제공해준다.

이 개념은 ReactJS와 동일.






--- #1.6 Custom App

NextJS는 _app.js를 먼저 확인하고
_app.js에 넣어둔 청사진을 기반으로 해서 index.js의 내용물을 랜더링

그래서 _app.js는?

- 어떻게 페이지가 있어야하는지
- 어떤 컴포넌트가 어떤 페이지에 있어야 하는지

프레임워크는 내 코드를 불러온다.
따라서 NextJS는 _app.js를 불러올 것이다.

NextJS는 _app.js를 불러오고, 그 안에있는 App 함수를 두가지 Prop과 함께 부른다.





NextJS가 About 페이지를 랜더링하길 원한다면?
NextJS는 내 about.js 파일로 가서,
그 컴포넌트를 가져다가 _app.js의 props 중 하나인 Component의 위치에 넣는다.
그리고 거기서 뭘 리턴하든지 그 컴포넌트와 함께 추가로 작성한 것을 리턴해준다.





NextJS가 About 페이지를 렌더링하려고 할 때,
해당 페이지 명과 일치하는 파일 명 안에서 export default 되는 컴포넌트를 가져다가
_app.js 파일 내에 있는 App 함수에 Component 프롭으로 전달한다.


Next로 앱을 만들 때는 global css파일을 import 할 수 없다

```Global CSS cannot be imported from files other than your Custom <App>.```

그래서 내 페이지, 컴포넌트 내에 css를 임포트하려면 반드시 module이여야만 한다.

단 커스텀 App 컴포넌트가 있는 _app 파일 내부의 App 컴포넌트에서는 모든 Global Styles를 import할 수 있다






---


#1.7 다시 정리해보기

### create-react-app

모든 것이 클라이언트 사이드 랜더링(CSR)
로딩 중에는 백지 화면이 보인다.
페이지의 초기 상태는 <div id="App"></div>로 텅 비어있음.
브라우저가 ReactJS 코드를 다운받고 모든 걸 앞에다 그려줘야만 하기 때문에.

### create-next-app

유저가 그 페이지로 가기도 전에 페이지들이 미리 만들어진다.
유저가 NextJS에 의해 만들어진 페이지에 갈 때,
컴포넌트의 초기 상태는 HTML로 자동적으로 렌더링된 상태가 된다.

그래서 페이지의 초기상태는 클래스명 등을 포함한 모든 HTML이 있다.

> `Rehydration`?
- NextJS가 백엔드상에서 ReactJS를 돌리고 있고,
- NextJS가 페이지를 `pre-generate(사전생성)`하고,
- 그건 HTML페이지가 된다.

그래서 유저는 HTML 화면을 보게 된다. (리엑트처럼 백지화면이나 로딩 스테이지를 보지 않음)

하지만 유저가 모든 자바스크립트를 다운로드하면 ReactJS가 다시 주도권을 가져와서
모든게 일반적인 ReactJS처럼 동작한다.

그때부터 useState 같은 평범한 ReactJS의 모든 것을 사용할 수 있다.

중요한 포인트!
NextJS가 페이지를 사전생성
그 후에 ReactJS가 프론트엔드에 나타나면 ReactJS가 주도권을 가진다


### CSS를 Next에 추가하는 방법
1. module 파일을 만드는 방법
컴포넌트 파일 안에서 import 할 수 있음

2. style 태그에 jsx prop을 넣는 방법
React 태그가 아닌 일반 HTML 태그.
global prop을 추가하면 해당 스타일을 모든 component에 적용시킬 수 있다
하지만 _NextJS를 쓸 때에는 반드시 하나의 큰 어플리케이션이 아닌, 각각의 나눠진 페이지를 생각해야한다._
그래서 About 페이지의 style jsx global로 적용해도, Home페이지일 때는 전혀 다른 페이지이기 때문에 당연하게도 global스타일이 적용되지 않는다.



그럼 글로벌 스타일을 복붙하지 않고 어떻게 적용할 수 있을까?
Custom App Component

NextJS가 랜더링할 때마다 Custom App Component를 사용함.
그래서 특정 페이지를 랜더링할 때마다
_app.js 내의 App 함수를 호출하고 Component prop 자리에 그 컴포넌트를 넣음.


이 _app.js 파일을 만들 필요는 없음.
NextJS가 내 페이지를 랜더링하기 위한 템플릿을 설정하길 원할 때 만드는 파일.

단 커스텀을 위해서는 반드시 _app.js라는 파일 안에 코드를 넣어야함.







---

#2.0

Layout을 만들어서 그걸로 _app을 감싸는 방법을 많이 사용한다.

Layout은 children prop을 가지고 있기 떄문에 헤더도, 푸터도 적용 가능.


_app.js에는 google analytics, 검색엔진 관련, 스크립트 분석 등등 global로 import 해야할 많은 것들이 있음!
그래서 _app.js가 너무 커지기를 바라지 않기 떄문에 이 방법을 사용한다.



nextJS에서는 Head와 같은 흔하게 쓰이는 패키지들을 제공한다.
create-react-app이었다면 앱의 head를 관리하기 위해서 react-helmet 등을 다운받아야함.
= 프로젝트와는 별개인 새로운 컴포넌트, 코드, 오류 등이 생길 수 있다

하지만 nextJS를 사용하면 모든 것이 next의 우산 아래에 있음!

더 많은 prop을 넣어서 head component를 개인화할 수 있다.
Meta description이나 작성자 등과 같은 정보들을 별개로 관리할 수 있다.










### Next에 mui 설치하기
<!-- 강의에는 없는 추가적인 사항 -->
> https://kyounghwan01.github.io/blog/React/next/mui/#app-tsx 를 참조했습니다

nextjs는 서버사이드랜더링을 하기 때문에 react에서 mui를 사용하는 것 처럼 손쉽게 반영 되지 않는다.



1. node 버전을 요구하는대로 맞춰준다
참조 > https://velog.io/@zlemzlem5656/node-version-%EB%B3%80%EA%B2%BD%ED%95%98%EA%B8%B0

2. 필요한 dependancy를 설치한다

```yarn add @emotion/react @emotion/styled @mui/icons-material @mui/material @mui/styles```

3. _document.tsx 파일 설정

ssr 지원을 위해 _dococument.tsx에 mui에 대한 사전 작업을 한다.
서버에서 받아온 HTML/CSS과 클라이언트가 렌더링한 HTML/CSS가 다르면 nextJS가 warning을 띄우기 때문.
그래서 서버단에서 mui를 지원하게 구현함으로서 서버와 클라이언트간의 간극을 맞춘다.

```js
import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@mui/styles";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <body>
          <Head></Head>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  const materialSheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => materialSheets.collect(<App {...props} />)
    });

  const initialProps = await Document.getInitialProps(ctx);
  return {
    ...initialProps,
    styles: <>{initialProps.styles}</>
  };
};
```

4. _app.tsx에 CssBaseline을 추가

nextjs에서 mui를 사용하는데 필수적으로 사용하는 것은 아니지만 웹을 정상적으로 구현하기 위해서 꼭 필요한 CssBaseline를 추가한다.
프로젝트를 처음 실행하면 브라우저마다 각기 다른 기본 css가 설정되어있다.
정상적인 구현을 위해 모든 브라우저가 일관적으로 보이도록 해야한다. 그래서 css를 전역에서 normalize 하기 위해 <CssBaseline />를 사용하는 것. <CssBaseline />는 앱의 최상단에 넣어주면 normalize 해준다. 마치 `reset.css`와 같은 역할

```jsx
import { CssBaseline } from "@mui/material";
import { AppProps } from "next/app";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <CssBaseline />
      <Component {...pageProps}></Component>
    </Layout>
  );
}

```