import{t as e}from"./react.UlBwNWom.js";import{t}from"./jsx-runtime.Chs7boQt.js";import{t as n}from"./profile.Is-NLXC0.js";var r=e(),i={high:{dprCap:2,antialias:!0,hqModel:!0,overlayBaseW:1800,overlayBaseH:1400,overlaySuperSampleMax:2.2,overlayMaxPx:4e3,singleOverlay:!1},mobile:{dprCap:1.5,antialias:!1,hqModel:!1,overlayBaseW:1024,overlayBaseH:820,overlaySuperSampleMax:1.5,overlayMaxPx:2048,singleOverlay:!1},low:{dprCap:1,antialias:!1,hqModel:!1,overlayBaseW:768,overlayBaseH:640,overlaySuperSampleMax:1,overlayMaxPx:1280,singleOverlay:!0}};function a(){try{let e=window.localStorage.getItem(`pf_q`);return e===`high`||e===`mobile`||e===`low`?e:null}catch{return null}}function o(){return(window.matchMedia?.(`(pointer: coarse)`).matches??!1)||navigator.maxTouchPoints>0}function s(){return o()?`mobile`:`high`}function c(){let e=a()??s();return{tier:e,...i[e]}}var l=Object.assign({"./md/en/junks.md":`# Junks — practice pieces

> A place for things I built while learning — small practice pieces and retired projects.

![Screenshot of the Junks index site](/images/products/junks.webp)

Index site: [https://s20024.github.io/Junks/](https://s20024.github.io/Junks/)

---

## Portfolio 2025

My 2025 portfolio.

\`React\` \`Three.js\`

- Site: [https://s20024.github.io/Junks/portfolio-2025/](https://s20024.github.io/Junks/portfolio-2025/)

---

## FigmaMake 001

Practice building a website with FigmaMake.

\`FigmaMake\`

- Site: [https://s20024.github.io/Junks/figmamake-001/](https://s20024.github.io/Junks/figmamake-001/)

---

## ThreeJourney Chapter1

Built right after finishing Chapter 1 of Three.js Journey.

\`Three.js\`

- Site: [https://s20024.github.io/Junks/three-journy-chapter1/](https://s20024.github.io/Junks/three-journy-chapter1/)

---

## Coding Introduction

A typing-style self-introduction page.

\`HTML\`

- Site: [https://s20024.github.io/Junks/coding-introduction/](https://s20024.github.io/Junks/coding-introduction/)

---

## Business Card

A 3D rendition of my (s20024) business card.

\`React\` \`Three.js\`

- Site: [https://s20024.github.io/Junks/business-card/](https://s20024.github.io/Junks/business-card/)

---

## Vue ElementPlus Apple

Practice with Vue3 and ElementPlus — a list of Apple devices (iPhone).

\`Vue3\` \`ElementPlus\`

- Site: [https://s20024.github.io/Junks/vue-element-apple/](https://s20024.github.io/Junks/vue-element-apple/)

---

## React Three City

Practice with React and Three.js — a low-poly city scene.

\`React\` \`Three.js\`

- Site: [https://s20024.github.io/Junks/react-three-city/](https://s20024.github.io/Junks/react-three-city/)

---

## Portfolio 2022

My portfolio as of 2022, collecting the pieces I built back then such as PokeShoot and MineSweeper.

\`React\`

- Site: [https://s20024.github.io/Junks/portfolio-2022/](https://s20024.github.io/Junks/portfolio-2022/)

---

## PiyoPiyoCS

A syntax cheat-sheet site for programming languages, built with friends (s20016, s20022) during school as our second-year project assignment.

\`React\`

- Site: [https://s20016.github.io/PiyoCS/](https://s20016.github.io/PiyoCS/)
`,"./md/en/mcp-server.md":`# ProfileBackend MCP Server

> An **MCP server** that lets AI assistants query my profile.

## Overview

An API server that exposes my basic info, education, work history, skills, strengths and weaknesses, personality, and works as **MCP tools**. Register the endpoint in an MCP-capable client (such as Claude) and the AI can fetch my profile directly to answer questions about me.

## Structure

- Built with **Laravel** and Laravel's MCP package
- Transport: **HTTP**
- **10 tools** in total. Representative ones:
    - \`get-profile-tool\` — fetch my profile
    - \`get-skills-tool\` — fetch my skill list
    - \`send-inquiry-tool\` — send an inquiry

## Infrastructure

Built **serverless on AWS** — no always-on servers. Requests go through **CloudFront** and **API Gateway** to **Lambda**, where PHP / Laravel runs on top of **Bref**. Data lives in **DynamoDB** and **S3**, with **CloudWatch** for monitoring.

![Infrastructure diagram](/images/products/mcp-server-architecture.svg)

## What was hard

Nothing blocked me badly, but this was **my first serious build of Laravel on Lambda with Bref**, which made it a good challenge.

One thing is still unresolved: **streaming responses don't work on Bref / Lambda** for the AI API. Streaming itself is implemented, but the response comes back all at once — I haven't been able to fix this yet.

## Usage

Register the following endpoint over HTTP in your MCP client:

\`\`\`
https://backend.s20024.com/mcp/profile
\`\`\`
`,"./md/en/plog.md":`# s20024's Plog

> My own blog for tech write-ups, daily life and personal notes. The name comes from Programming + Blog = **Plog**.

![Screenshot of s20024's Plog](/images/products/plog.webp)

## Overview

A place where I collect what I learn and note down day-to-day things. Rather than using an existing blog service, I built the writing place itself. It has been running for a bit over a year.

## Structure

- Static generation with **Astro** + **TypeScript**
- Articles are managed as **MDX** — the feel of plain Markdown, with components available where needed
- **React** is used only for the dynamic parts that Astro alone can't cover
    - e.g. an image lightbox, and an **AI chat feature**

## Infrastructure / CD

- Hosting: **GitHub Pages**
- CD via **GitHub Actions**: pushing to \`main\` triggers the build and publishes automatically

## What was hard

The initial design was generated by AI — but instead of using the generated code as-is, I **rewrote all of it into a form I could actually read and maintain**, which was the toughest part.

## What I care about

Even though the design started from AI output, **the color scheme decisions and the fine design adjustments are my own hands-on work**.

## Links

- Site: [https://plog.s20024.com](https://plog.s20024.com)
- Repository: [https://github.com/s20024/Plog](https://github.com/s20024/Plog)
`,"./md/en/portfolio.md":`# Portfolio — this site

> A portfolio that recreates my actual desk in 3D. The VS Code you're reading right now is one of its screens.

![Screenshot of the portfolio](/images/products/portfolio.webp)

## Overview

The desk at night is rendered in 3D, and each of the four screens on it (32", 24", iPad, iPhone) runs a real React app: the 32" shows the light version of this site, the 24" shows this VS Code, the iPad has photos and YouTube, and the iPhone holds my contact info. The keyboard keys sink one by one as typing happens.

For visitors on phones or slow connections there is also a text-first **light version** at \`/light\`, and the entrance lets you choose which one to view.

## Highlights

- Two experiences: 3D and light. The 3D bundle loads opt-in, only after you choose it
- Bilingual: Japanese / English
- Mobile-ready (texture compression cut GPU memory to ~1/5)

## Structure

\`TypeScript\` \`Astro\` \`React\` \`Three.js\`

- The 3D model is **made in Blender**, based on my real desk. Except for the mouse, I modeled the parts myself, with help from AI along the way
- The model goes through a KTX2 compression pipeline so the tab survives even on phones

## Infrastructure

- Hosting: **GitHub Pages**

## What was hard

- The toughest was **iOS Safari's memory limit**: 185 PNG textures expanded to RGBA8 on the GPU, filled VRAM, and crashed the tab. I built a conversion pipeline to KTX2 (BasisU) textures, cutting GPU memory to about 1/5
- Just as painful: **CSS3D screens drifting only on iOS**. WebKit drops perspective the moment a \`preserve-3d\` nesting gets its own compositing layer, so I rebuilt the CSS3D by folding perspective, camera and pose into a single \`matrix3d\` per panel

## What I care about

**It recreates my actual desk, as it really is, in 3D.**

![My real desk](/images/products/portfolio-desk-real.webp)

## Links

- Site: [https://portfolio.s20024.com](https://portfolio.s20024.com)
`,"./md/ja/junks.md":`# Junks — 習作置き場

> 勉強のために作ったものたちの置き場。小さな練習作や、不要になったプロジェクトです。

![Junks 一覧サイトのスクリーンショット](/images/products/junks.webp)

一覧サイト: [https://s20024.github.io/Junks/](https://s20024.github.io/Junks/)

---

## Portfolio 2025

2025年のポートフォリオ。

\`React\` \`Three.js\`

- サイト: [https://s20024.github.io/Junks/portfolio-2025/](https://s20024.github.io/Junks/portfolio-2025/)

---

## FigmaMake 001

FigmaMake を利用した Web サイトの作成練習。

\`FigmaMake\`

- サイト: [https://s20024.github.io/Junks/figmamake-001/](https://s20024.github.io/Junks/figmamake-001/)

---

## ThreeJourney Chapter1

Three.js Journey の Chapter1 を受講し終えての作成。

\`Three.js\`

- サイト: [https://s20024.github.io/Junks/three-journy-chapter1/](https://s20024.github.io/Junks/three-journy-chapter1/)

---

## Coding Introduction

タイピング風の自己紹介ページ。

\`HTML\`

- サイト: [https://s20024.github.io/Junks/coding-introduction/](https://s20024.github.io/Junks/coding-introduction/)

---

## Business Card

s20024 の名刺を 3D 表現したものになります。

\`React\` \`Three.js\`

- サイト: [https://s20024.github.io/Junks/business-card/](https://s20024.github.io/Junks/business-card/)

---

## Vue ElementPlus Apple

Vue3 と ElementPlus の練習。Apple 端末の一覧表示（iPhone）。

\`Vue3\` \`ElementPlus\`

- サイト: [https://s20024.github.io/Junks/vue-element-apple/](https://s20024.github.io/Junks/vue-element-apple/)

---

## React Three City

React と Three.js の練習。ローポリシティの表現の表示。

\`React\` \`Three.js\`

- サイト: [https://s20024.github.io/Junks/react-three-city/](https://s20024.github.io/Junks/react-three-city/)

---

## Portfolio 2022

2022年当時のポートフォリオ。PokeShoot や MineSweeper など、当時作った作品をまとめて紹介しています。

\`React\`

- サイト: [https://s20024.github.io/Junks/portfolio-2022/](https://s20024.github.io/Junks/portfolio-2022/)

---

## PiyoPiyoCS

学生時代に友人（s20016, s20022）と作成したプログラミング言語の文法チートシートサイト。2年生の制作課題として制作。

\`React\`

- サイト: [https://s20016.github.io/PiyoCS/](https://s20016.github.io/PiyoCS/)
`,"./md/ja/mcp-server.md":`# ProfileBackend MCP Server

> 自分のプロフィールを AI から引ける **MCP サーバー**。

## 概要

基本情報・学歴・職歴・スキル・強み・弱み・人柄・作成物などを **MCP ツール**として提供する API サーバーです。MCP 対応クライアント（Claude など）にエンドポイントを登録すると、AI が私のプロフィールを直接取得して質問に答えられるようになります。

## 構成

- **Laravel** + Laravel の MCP パッケージで実装
- トランスポートは **HTTP**
- 提供ツールは全 **10本**。代表的なもの:
    - \`get-profile-tool\` — プロフィールの取得
    - \`get-skills-tool\` — スキル一覧の取得
    - \`send-inquiry-tool\` — 問い合わせの送信

## インフラ

**AWS** 上に**サーバーレス構成**で構築しています。常駐サーバーは持たず、リクエストは **CloudFront** → **API Gateway** を通って **Lambda** へ届き、Lambda 上では **Bref** を使って PHP / Laravel を動かしています。データは **DynamoDB** と **S3**、監視は **CloudWatch** です。

![インフラ構成図](/images/products/mcp-server-architecture.svg)

## てこずった部分

大きく詰まった所はありませんでしたが、**Bref を用いた Lambda 上での Laravel 構築は今回が初めて**で、そこが挑戦でした。

また、AI の API 連携では **Bref / Lambda 上でストリーミング応答が行えない**という問題が残っています。ストリーミング自体は実装済みなのですが、レスポンスが一気に返ってきてしまう状態で、ここはまだ対応できていません。

## 使い方

MCP クライアントに次のエンドポイントを HTTP で登録してください:

\`\`\`
https://backend.s20024.com/mcp/profile
\`\`\`
`,"./md/ja/plog.md":`# s20024's Plog

> 技術・日常・個人メモを綴る自作ブログ。名前の由来は Programming + Blog = **Plog**。

![s20024's Plog のスクリーンショット](/images/products/plog.webp)

## 概要

学んだ技術のまとめや日々のメモを書き溜めているブログです。既製のブログサービスではなく、書く場所ごと自作して公開しています。運用は1年と少し。

## 構成

- ベースは **Astro** の静的生成 + **TypeScript**
- 記事は **MDX** で管理。Markdown の書き味のまま、コンポーネントを差し込める形にしています
- **React** は「Astro だけでは実現しづらい動的な部分」に限定して使用
    - 例: 画像の拡大表示（ライトボックス）、**AI とのチャット機能** など

## インフラ / CD

- ホスティング: **GitHub Pages**
- **GitHub Actions** で CD を構築。\`main\` ブランチへ push すると自動でビルドが走り、そのまま公開まで行われます

## てこずった部分

初期デザインは AI に作らせたのですが、生成されたコードをそのまま使わず、**自分が読める形へ全面的に書き直す**作業が一番大変でした。

## こだわり

デザインの土台は AI 製と言いつつ、**配色をどうするかの検討や、細かい部分のデザイン修正は自分の手**でかなり詰めています。

## リンク

- サイト: [https://plog.s20024.com](https://plog.s20024.com)
- リポジトリ: [https://github.com/s20024/Plog](https://github.com/s20024/Plog)
`,"./md/ja/portfolio.md":`# Portfolio — このサイト

> 「自分の作業デスク」を丸ごと 3D で再現したポートフォリオ。いま読んでいるこの VS Code も、その中の1画面です。

![ポートフォリオのスクリーンショット](/images/products/portfolio.webp)

## 概要

夜のデスクを 3D にして、机上の4画面（32インチ / 24インチ / iPad / iPhone）それぞれに本物の React アプリを映しています。32インチには軽量版サイト、24インチにはこの VS Code、iPad には写真と YouTube、iPhone には連絡先。キーボードはタイピングに合わせて1キーずつ沈みます。

スマホや回線に余裕がない人のために、テキスト主体の**軽量版** \`/light\` も用意し、入口でどちらを見るか選べるようにしています。

## 特徴

- 3D 版 / 軽量版の2本立て。3D は「見る」を選んだ瞬間にだけ読み込む opt-in 方式
- 日本語 / 英語の2言語対応
- スマホ対応（テクスチャ圧縮で GPU メモリを約 1/5 に）

## 構成

\`TypeScript\` \`Astro\` \`React\` \`Three.js\`

- 3D モデルは **Blender 製**。実物の自分のデスクを参考に、マウス以外のパーツは AI も活用しつつ自分でモデリングしています
- モデルは KTX2 圧縮のパイプラインを通し、スマホでもタブが落ちない容量に収めています

## インフラ

- ホスティング: **GitHub Pages**

## てこずった部分

- 一番大変だったのは **iOS Safari のメモリ制限**。PNG テクスチャ 185枚が GPU 上で RGBA8 に展開されて VRAM を圧迫し、タブごと落ちる状態でした。テクスチャを KTX2（BasisU）に圧縮する変換パイプラインを組み、GPU メモリを約 1/5 にして解決
- 同じくらい苦しんだのが **iOS だけ CSS3D の画面がズレる**問題。WebKit は \`preserve-3d\` の入れ子が合成レイヤ化した瞬間に遠近を落とすため、遠近・カメラ・姿勢を 1枚の \`matrix3d\` に畳む自前 CSS3D に作り替えて解決しました

## こだわり

**自分の実際のデスクを、そのまま 3D で再現している**ことです。

![実物のデスク](/images/products/portfolio-desk-real.webp)

## リンク

- サイト: [https://portfolio.s20024.com](https://portfolio.s20024.com)
`}),u={};for(let[e,t]of Object.entries(l)){let n=e.match(/\.\/md\/([^/]+)\/([^/]+\.md)$/);n&&((u[n[1]]??={})[n[2]]=t)}function d(e){let t=u.ja??{};return e===`ja`?t:{...t,...u[e]??{}}}function f(e){let t=n(e===`en`?`en`:`ja`),r=t.profile,i={};t.skillGroups.forEach(e=>{i[e.label]=e.items.map(e=>e.name)});let a=t.education[0]||{name:``,type:``,description:``};return{name:r.name,kana:r.nameKana,githubId:r.githubId,title:r.title,location:r.location,self:r.selfDescription,interests:r.interests,skills:i,learning:t.currentlyLearning,work:t.workHistory.map(e=>({role:e.role,type:e.type,period:e.period,desc:e.description,tech:e.technologies})),products:t.products.map(e=>({name:e.name,url:e.url||``,repo:e.repository||``,desc:e.description,tech:e.techStack})),education:{name:a.name,course:a.type||``,desc:a.description},links:t.links.map(e=>({label:e.label,sub:e.url.replace(/^https?:\/\//,``),href:e.url}))}}var p=e=>String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`),m=(e,t,n)=>Math.max(t,Math.min(n,e)),h=(e,t,n)=>`<span style="color:var(--t-`+e+`)`+(n?`; font-weight:700`:``)+`">`+t+`</span>`,g=(e,t,n=``)=>{let r=e.toLowerCase(),i=t.filter(e=>e.toLowerCase().startsWith(r));if(!i.length)return{text:null,candidates:null};if(i.length===1)return{text:i[0]+n,candidates:null};let a=i[0];for(let e of i)for(;!e.toLowerCase().startsWith(a.toLowerCase());)a=a.slice(0,-1);return{text:a.length>e.length?a:null,candidates:i}},_=t();function v({size:e=128,...t}){let n=(0,r.useId)().replace(/:/g,``),i=n+`mask`,a=n+`b`,o=n+`c`,s=n+`d`;return(0,_.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 128 128`,"aria-hidden":`true`,...t,children:[(0,_.jsx)(`mask`,{id:i,width:`128`,height:`128`,x:`0`,y:`0`,maskUnits:`userSpaceOnUse`,style:{maskType:`alpha`},children:(0,_.jsx)(`path`,{fill:`#fff`,fillRule:`evenodd`,clipRule:`evenodd`,d:`M90.767 127.126a7.968 7.968 0 0 0 6.35-.244l26.353-12.681a8 8 0 0 0 4.53-7.209V21.009a8 8 0 0 0-4.53-7.21L97.117 1.12a7.97 7.97 0 0 0-9.093 1.548l-50.45 46.026L15.6 32.013a5.328 5.328 0 0 0-6.807.302l-7.048 6.411a5.335 5.335 0 0 0-.006 7.888L20.796 64 1.74 81.387a5.336 5.336 0 0 0 .006 7.887l7.048 6.411a5.327 5.327 0 0 0 6.807.303l21.974-16.68 50.45 46.025a7.96 7.96 0 0 0 2.743 1.793Zm5.252-92.183L57.74 64l38.28 29.058V34.943Z`})}),(0,_.jsxs)(`g`,{mask:`url(#${i})`,children:[(0,_.jsx)(`path`,{fill:`#0065A9`,d:`M123.471 13.82 97.097 1.12A7.973 7.973 0 0 0 88 2.668L1.662 81.387a5.333 5.333 0 0 0 .006 7.887l7.052 6.411a5.333 5.333 0 0 0 6.811.303l103.971-78.875c3.488-2.646 8.498-.158 8.498 4.22v-.306a8.001 8.001 0 0 0-4.529-7.208Z`}),(0,_.jsx)(`g`,{filter:`url(#${a})`,children:(0,_.jsx)(`path`,{fill:`#007ACC`,d:`m123.471 114.181-26.374 12.698A7.973 7.973 0 0 1 88 125.333L1.662 46.613a5.333 5.333 0 0 1 .006-7.887l7.052-6.411a5.333 5.333 0 0 1 6.811-.303l103.971 78.874c3.488 2.647 8.498.159 8.498-4.219v.306a8.001 8.001 0 0 1-4.529 7.208Z`})}),(0,_.jsx)(`g`,{filter:`url(#${o})`,children:(0,_.jsx)(`path`,{fill:`#1F9CF0`,d:`M97.098 126.882A7.977 7.977 0 0 1 88 125.333c2.952 2.952 8 .861 8-3.314V5.98c0-4.175-5.048-6.266-8-3.313a7.977 7.977 0 0 1 9.098-1.549L123.467 13.8A8 8 0 0 1 128 21.01v85.982a8 8 0 0 1-4.533 7.21l-26.369 12.681Z`})}),(0,_.jsx)(`path`,{fill:`url(#${s})`,fillRule:`evenodd`,clipRule:`evenodd`,d:`M90.69 127.126a7.968 7.968 0 0 0 6.349-.244l26.353-12.681a8 8 0 0 0 4.53-7.21V21.009a8 8 0 0 0-4.53-7.21L97.039 1.12a7.97 7.97 0 0 0-9.093 1.548l-50.45 46.026-21.974-16.68a5.328 5.328 0 0 0-6.807.302l-7.048 6.411a5.336 5.336 0 0 0-.006 7.888L20.718 64 1.662 81.386a5.335 5.335 0 0 0 .006 7.888l7.048 6.411a5.328 5.328 0 0 0 6.807.303l21.975-16.681 50.45 46.026a7.959 7.959 0 0 0 2.742 1.793Zm5.252-92.184L57.662 64l38.28 29.057V34.943Z`,opacity:`0.25`,style:{mixBlendMode:`overlay`}})]}),(0,_.jsxs)(`defs`,{children:[(0,_.jsxs)(`filter`,{id:a,width:`144.744`,height:`113.408`,x:`-8.41115`,y:`22.5944`,colorInterpolationFilters:`sRGB`,filterUnits:`userSpaceOnUse`,children:[(0,_.jsx)(`feFlood`,{floodOpacity:`0`,result:`BackgroundImageFix`}),(0,_.jsx)(`feColorMatrix`,{in:`SourceAlpha`,result:`hardAlpha`,values:`0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0`}),(0,_.jsx)(`feOffset`,{}),(0,_.jsx)(`feGaussianBlur`,{stdDeviation:`4.16667`}),(0,_.jsx)(`feColorMatrix`,{values:`0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0`}),(0,_.jsx)(`feBlend`,{in2:`BackgroundImageFix`,mode:`overlay`,result:`effect1_dropShadow_1_36`}),(0,_.jsx)(`feBlend`,{in:`SourceGraphic`,in2:`effect1_dropShadow_1_36`,result:`shape`})]}),(0,_.jsxs)(`filter`,{id:o,width:`56.6667`,height:`144.007`,x:`79.6667`,y:`-8.0035`,colorInterpolationFilters:`sRGB`,filterUnits:`userSpaceOnUse`,children:[(0,_.jsx)(`feFlood`,{floodOpacity:`0`,result:`BackgroundImageFix`}),(0,_.jsx)(`feColorMatrix`,{in:`SourceAlpha`,result:`hardAlpha`,values:`0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0`}),(0,_.jsx)(`feOffset`,{}),(0,_.jsx)(`feGaussianBlur`,{stdDeviation:`4.16667`}),(0,_.jsx)(`feColorMatrix`,{values:`0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0`}),(0,_.jsx)(`feBlend`,{in2:`BackgroundImageFix`,mode:`overlay`,result:`effect1_dropShadow_1_36`}),(0,_.jsx)(`feBlend`,{in:`SourceGraphic`,in2:`effect1_dropShadow_1_36`,result:`shape`})]}),(0,_.jsxs)(`linearGradient`,{id:s,x1:`63.9222`,x2:`63.9222`,y1:`0.329902`,y2:`127.67`,gradientUnits:`userSpaceOnUse`,children:[(0,_.jsx)(`stop`,{stopColor:`#fff`}),(0,_.jsx)(`stop`,{offset:`1`,stopColor:`#fff`,stopOpacity:`0`})]})]})]})}var y={titlebar:`_titlebar_3o61e_5`,titlebar__left:`_titlebar__left_3o61e_16`,titlebar__logo:`_titlebar__logo_3o61e_23`,titlebar__menu:`_titlebar__menu_3o61e_29`,titlebar__spacer:`_titlebar__spacer_3o61e_43`,titlebar__controls:`_titlebar__controls_3o61e_47`,titlebar__caption:`_titlebar__caption_3o61e_55`,"titlebar__caption--close":`_titlebar__caption--close_3o61e_67`,titlebar__title:`_titlebar__title_3o61e_73`},b={ja:[`ファイル`,`編集`,`選択`,`表示`,`移動`,`実行`,`ターミナル`,`ヘルプ`],en:[`File`,`Edit`,`Selection`,`View`,`Go`,`Run`,`Terminal`,`Help`]};function x({locale:e=`ja`}){let t=(t,n)=>e===`en`?n:t,n=b[e]??b.ja;return(0,_.jsxs)(`div`,{className:y.titlebar,children:[(0,_.jsxs)(`div`,{className:y.titlebar__left,children:[(0,_.jsx)(`div`,{className:y.titlebar__logo,children:(0,_.jsx)(v,{size:18})}),n.map(e=>(0,_.jsx)(`div`,{className:y.titlebar__menu,children:e},e))]}),(0,_.jsx)(`div`,{className:y.titlebar__spacer}),(0,_.jsxs)(`div`,{className:y.titlebar__controls,children:[(0,_.jsx)(`div`,{className:y.titlebar__caption,"aria-label":t(`最小化`,`Minimize`),children:(0,_.jsx)(`svg`,{width:`10`,height:`10`,viewBox:`0 0 10 10`,children:(0,_.jsx)(`path`,{d:`M0 5H10`,stroke:`currentColor`,strokeWidth:`1`})})}),(0,_.jsx)(`div`,{className:y.titlebar__caption,"aria-label":t(`最大化`,`Maximize`),children:(0,_.jsx)(`svg`,{width:`10`,height:`10`,viewBox:`0 0 10 10`,children:(0,_.jsx)(`rect`,{x:`0.5`,y:`0.5`,width:`9`,height:`9`,fill:`none`,stroke:`currentColor`,strokeWidth:`1`})})}),(0,_.jsx)(`div`,{className:`${y.titlebar__caption} ${y[`titlebar__caption--close`]}`,"aria-label":t(`閉じる`,`Close`),children:(0,_.jsx)(`svg`,{width:`10`,height:`10`,viewBox:`0 0 10 10`,children:(0,_.jsx)(`path`,{d:`M0 0L10 10M10 0L0 10`,stroke:`currentColor`,strokeWidth:`1`})})})]}),(0,_.jsx)(`div`,{className:y.titlebar__title,children:`Portfolio — Visual Studio Code`})]})}function S(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var C=S();function w(e){C=e}var T={exec:()=>null};function E(e){let t=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),i=t[r];return i||(i=e(r),t[r]=i),i}}function D(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(O.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var ee=((e=``)=>{try{return!!RegExp(`(?<=1)(?<!1)`+e)}catch{return!1}})(),O={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:E(e=>RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:E(e=>RegExp(`^ {0,${e}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:E(e=>RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),headingBeginRegex:E(e=>RegExp(`^ {0,${e}}#`)),htmlBeginRegex:E(e=>RegExp(`^ {0,${e}}<(?:[a-z].*>|!--)`,`i`)),blockquoteBeginRegex:E(e=>RegExp(`^ {0,${e}}>`))},te=/^(?:[ \t]*(?:\n|$))+/,ne=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,re=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,k=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,A=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,j=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,ie=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,ae=D(ie).replace(/bull/g,j).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),oe=D(ie).replace(/bull/g,j).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),M=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,se=/^[^\n]+/,N=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,ce=D(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,N).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),le=D(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,j).getRegex(),P=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,ue=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,de=D(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,ue).replace(`tag`,P).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),fe=D(M).replace(`hr`,k).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,P).getRegex(),pe={blockquote:D(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,fe).getRegex(),code:ne,def:ce,fences:re,heading:A,hr:k,html:de,lheading:ae,list:le,newline:te,paragraph:fe,table:T,text:se},me=D(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,k).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,P).getRegex(),he={...pe,lheading:oe,table:me,paragraph:D(M).replace(`hr`,k).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,me).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,P).getRegex()},ge={...pe,html:D(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,ue).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:T,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:D(M).replace(`hr`,k).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,ae).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},_e=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,ve=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,ye=/^( {2,}|\\)\n(?!\s*$)/,be=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,F=/[\p{P}\p{S}]/u,I=/[\s\p{P}\p{S}]/u,xe=/[^\s\p{P}\p{S}]/u,Se=D(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,I).getRegex(),Ce=/(?!~)[\p{P}\p{S}]/u,we=/(?!~)[\s\p{P}\p{S}]/u,Te=/(?:[^\s\p{P}\p{S}]|~)/u,Ee=D(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,ee?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),De=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,Oe=D(De,`u`).replace(/punct/g,F).getRegex(),ke=D(De,`u`).replace(/punct/g,Ce).getRegex(),Ae=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,je=D(Ae,`gu`).replace(/notPunctSpace/g,xe).replace(/punctSpace/g,I).replace(/punct/g,F).getRegex(),Me=D(Ae,`gu`).replace(/notPunctSpace/g,Te).replace(/punctSpace/g,we).replace(/punct/g,Ce).getRegex(),Ne=D(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,xe).replace(/punctSpace/g,I).replace(/punct/g,F).getRegex(),Pe=D(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,F).getRegex(),Fe=D(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,xe).replace(/punctSpace/g,I).replace(/punct/g,F).getRegex(),Ie=D(/\\(punct)/,`gu`).replace(/punct/g,F).getRegex(),Le=D(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Re=D(ue).replace(`(?:-->|$)`,`-->`).getRegex(),ze=D(`^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,Re).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),L=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,Be=D(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace(`label`,L).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Ve=D(/^!?\[(label)\]\[(ref)\]/).replace(`label`,L).replace(`ref`,N).getRegex(),He=D(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,N).getRegex(),Ue=D(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,Ve).replace(`nolink`,He).getRegex(),We=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Ge={_backpedal:T,anyPunctuation:Ie,autolink:Le,blockSkip:Ee,br:ye,code:ve,del:T,delLDelim:T,delRDelim:T,emStrongLDelim:Oe,emStrongRDelimAst:je,emStrongRDelimUnd:Ne,escape:_e,link:Be,nolink:He,punctuation:Se,reflink:Ve,reflinkSearch:Ue,tag:ze,text:be,url:T},Ke={...Ge,link:D(/^!?\[(label)\]\((.*?)\)/).replace(`label`,L).getRegex(),reflink:D(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,L).getRegex()},qe={...Ge,emStrongRDelimAst:Me,emStrongLDelim:ke,delLDelim:Pe,delRDelim:Fe,url:D(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`protocol`,We).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:D(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace(`protocol`,We).getRegex()},Je={...qe,br:D(ye).replace(`{2,}`,`*`).getRegex(),text:D(qe.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},R={normal:pe,gfm:he,pedantic:ge},z={normal:Ge,gfm:qe,breaks:Je,pedantic:Ke},Ye={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},Xe=e=>Ye[e];function B(e,t){if(t){if(O.escapeTest.test(e))return e.replace(O.escapeReplace,Xe)}else if(O.escapeTestNoEncode.test(e))return e.replace(O.escapeReplaceNoEncode,Xe);return e}function Ze(e){try{e=encodeURI(e).replace(O.percentDecode,`%`)}catch{return null}return e}function Qe(e,t){let n=e.replace(O.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(O.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``);for(;r<n.length;r++)n[r]=n[r].trim().replace(O.slashPipe,`|`);return n}function V(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function $e(e){let t=e.split(`
`),n=t.length-1;for(;n>=0&&O.blankLine.test(t[n]);)n--;return t.length-n<=2?e:t.slice(0,n+1).join(`
`)}function et(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function tt(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function nt(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`);r.state.inLink=!0;let c={type:e[0].charAt(0)===`!`?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}function rt(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return r.length>=i.length?e.slice(i.length):e}).join(`
`)}var H=class{options;rules;lexer;constructor(e){this.options=e||C}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=this.options.pedantic?t[0]:$e(t[0]);return{type:`code`,raw:e,codeBlockStyle:`indented`,text:e.replace(this.rules.other.codeRemoveIndent,``)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=rt(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=V(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:V(t[0],`
`),depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:V(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=V(t[0],`
`).split(`
`),n=``,r=``,i=[];for(;e.length>0;){let t=!1,a=[],o;for(o=0;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))a.push(e[o]),t=!0;else if(!t)a.push(e[o]);else break;e=e.slice(o);let s=a.join(`
`),c=s.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,``);n=n?`${n}
${s}`:s,r=r?`${r}
${c}`:c;let l=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=l,e.length===0)break;let u=i.at(-1);if(u?.type===`code`)break;if(u?.type===`blockquote`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.blockquote(a);i[i.length-1]=o,n=n.substring(0,n.length-t.raw.length)+o.raw,r=r.substring(0,r.length-t.text.length)+o.text;break}else if(u?.type===`list`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.list(a);i[i.length-1]=o,n=n.substring(0,n.length-u.raw.length)+o.raw,r=r.substring(0,r.length-t.raw.length)+o.raw,e=a.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:`list`,raw:``,ordered:r,start:r?+n.slice(0,-1):``,loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:`[*+-]`);let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let n=!1,r=``,s=``;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let c=tt(t[2].split(`
`,1)[0],t[1].length),l=e.split(`
`,1)[0],u=!c.trim(),d=0;if(this.options.pedantic?(d=2,s=c.trimStart()):u?d=t[1].length+1:(d=c.search(this.rules.other.nonSpaceChar),d=d>4?1:d,s=c.slice(d),d+=t[1].length),u&&this.rules.other.blankLine.test(l)&&(r+=l+`
`,e=e.substring(l.length+1),n=!0),!n){let t=this.rules.other.nextBulletRegex(d),n=this.rules.other.hrRegex(d),i=this.rules.other.fencesBeginRegex(d),a=this.rules.other.headingBeginRegex(d),o=this.rules.other.htmlBeginRegex(d),f=this.rules.other.blockquoteBeginRegex(d);for(;e;){let p=e.split(`
`,1)[0],m;if(l=p,this.options.pedantic?(l=l.replace(this.rules.other.listReplaceNesting,`  `),m=l):m=l.replace(this.rules.other.tabCharGlobal,`    `),i.test(l)||a.test(l)||o.test(l)||f.test(l)||t.test(l)||n.test(l))break;if(m.search(this.rules.other.nonSpaceChar)>=d||!l.trim())s+=`
`+m.slice(d);else{if(u||c.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||i.test(c)||a.test(c)||n.test(c))break;s+=`
`+l}u=!l.trim(),r+=p+`
`,e=e.substring(p.length+1),c=m.slice(d)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(o=!0)),i.items.push({type:`list_item`,raw:r,task:!!this.options.gfm&&this.rules.other.listIsTask.test(s),loose:!1,text:s,tokens:[]}),i.raw+=r}let s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let e of i.items){this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]);let t=e.tokens[0];if(e.task&&(t?.type===`text`||t?.type===`paragraph`)){e.text=e.text.replace(this.rules.other.listReplaceTask,``),t.raw=t.raw.replace(this.rules.other.listReplaceTask,``),t.text=t.text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}let n=this.rules.other.listTaskCheckbox.exec(e.raw);if(n){let t={type:`checkbox`,raw:n[0]+` `,checked:n[0]!==`[ ]`};e.checked=t.checked,i.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=t.raw+e.tokens[0].raw,e.tokens[0].text=t.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(t)):e.tokens.unshift({type:`paragraph`,raw:t.raw,text:t.raw,tokens:[t]}):e.tokens.unshift(t)}}else e.task&&=!1;if(!i.loose){let t=e.tokens.filter(e=>e.type===`space`);i.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}}if(i.loose)for(let e of i.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return i}}html(e){let t=this.rules.block.html.exec(e);if(t){let e=$e(t[0]);return{type:`html`,block:!0,raw:e,pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:e}}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:V(t[0],`
`),href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=Qe(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:V(t[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(Qe(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:V(t[0],`
`),depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=V(e.slice(0,-1),`\\`);if((e.length-t.length)%2==0)return}else{let e=et(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let n=t[2],r=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):``;return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),nt(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,`$1`),title:r&&r.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `).toLowerCase()];if(!e){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return nt(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=0,c=r[0][0]===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+n);(r=c.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(a=[...i].length,r[3]||r[4]){o+=a;continue}else if((r[5]||r[6])&&n%3&&!((n+a)%3)){s+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o+s);let t=[...r[0]][0].length,c=e.slice(0,n+r.index+t+a);if(Math.min(n,a)%2){let e=c.slice(1,-1);return{type:`em`,raw:c,text:e,tokens:this.lexer.inlineTokens(e)}}let l=c.slice(2,-2);return{type:`strong`,raw:c,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:t[0],escaped:e}}}},U=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||C,this.options.tokenizer=this.options.tokenizer||new H,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:O,block:R.normal,inline:z.normal};this.options.pedantic?(t.block=R.pedantic,t.inline=z.pedantic):this.options.gfm&&(t.block=R.gfm,this.options.breaks?t.inline=z.breaks:t.inline=z.gfm),this.tokenizer.rules=t}static get rules(){return{block:R,inline:z}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(O.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(O.tabCharGlobal,`    `).replace(O.spaceLine,``));let r=1/0;for(;e;){if(e.length<r)r=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(n=>(i=n.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let n=t.at(-1);i.raw.length===1&&n!==void 0?n.raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.raw,this.inlineQueue.at(-1).src=n.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},t.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}let a=e;if(this.options.extensions?.startBlock){let t=1/0,n=e.slice(1),r;this.options.extensions.startBlock.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(a=e.substring(0,t+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){let r=t.at(-1);n&&r?.type===`paragraph`?(r.raw+=(r.raw.endsWith(`
`)?``:`
`)+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=r.text):t.push(i),n=a.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=e,r=null;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(n))!==null;)e.includes(r[0].slice(r[0].lastIndexOf(`[`)+1,-1))&&(n=n.slice(0,r.index)+`[`+`a`.repeat(r[0].length-2)+`]`+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(n))!==null;)n=n.slice(0,r.index)+`++`+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let i;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(n))!==null;)i=r[2]?r[2].length:0,n=n.slice(0,r.index+i)+`[`+`a`.repeat(r[0].length-i-2)+`]`+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let a=!1,o=``,s=1/0;for(;e;){if(e.length<s)s=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}a||(o=``),a=!1;let r;if(this.options.extensions?.inline?.some(n=>(r=n.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length);let n=t.at(-1);r.type===`text`&&n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),t.push(r);continue}let i=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(r=this.tokenizer.inlineText(i)){e=e.substring(r.raw.length),r.raw.slice(-1)!==`_`&&(o=r.raw.slice(-1)),a=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}infiniteLoopError(e){let t=`Infinite loop on byte: `+e;if(this.options.silent)console.error(t);else throw Error(t)}},it=class{options;parser;constructor(e){this.options=e||C}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(O.notSpaceStart)?.[0],i=e.replace(O.endingNewline,``)+`
`;return r?`<pre><code class="language-`+B(r)+`">`+(n?i:B(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:B(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return``}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,r=``;for(let t=0;t<e.items.length;t++){let n=e.items[t];r+=this.listitem(n)}let i=t?`ol`:`ul`,a=t&&n!==1?` start="`+n+`"`:``;return`<`+i+a+`>
`+r+`</`+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return`<input `+(e?`checked="" `:``)+`disabled="" type="checkbox"> `}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t=``,n=``;for(let t=0;t<e.header.length;t++)n+=this.tablecell(e.header[t]);t+=this.tablerow({text:n});let r=``;for(let t=0;t<e.rows.length;t++){let i=e.rows[t];n=``;for(let e=0;e<i.length;e++)n+=this.tablecell(i[e]);r+=this.tablerow({text:n})}return r&&=`<tbody>${r}</tbody>`,`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?`th`:`td`;return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${B(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let r=this.parser.parseInline(n),i=Ze(e);if(i===null)return r;e=i;let a=`<a href="`+e+`"`;return t&&(a+=` title="`+B(t)+`"`),a+=`>`+r+`</a>`,a}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=Ze(e);if(i===null)return B(n);e=i;let a=`<img src="${e}" alt="${B(n)}"`;return t&&(a+=` title="${B(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:B(e.text)}},at=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}checkbox({raw:e}){return e}},W=class e{options;renderer;textRenderer;constructor(e){this.options=e||C,this.options.renderer=this.options.renderer||new it,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new at}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},G=class{options;block;constructor(e){this.options=e||C}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?U.lex:U.lexInline}provideParser(e=this.block){return e?W.parse:W.parseInline}},K=new class{defaults=S();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=W;Renderer=it;TextRenderer=at;Lexer=U;Tokenizer=H;Hooks=G;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case`list`:{let e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);n=n.concat(this.walkTokens(i,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new it(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new H(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new G;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];G.passThroughHooks.has(n)?t[r]=e=>{if(this.defaults.async&&G.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:t[r]=(...e)=>{if(this.defaults.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return U.lex(e,t??this.defaults)}parser(e,t){return W.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer(e):e?U.lex:U.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser(e):e?W.parse:W.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer(e):e?U.lex:U.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser(e):e?W.parse:W.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+B(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function q(e,t){return K.parse(e,t)}q.options=q.setOptions=function(e){return K.setOptions(e),q.defaults=K.defaults,w(q.defaults),q},q.getDefaults=S,q.defaults=C,q.use=function(...e){return K.use(...e),q.defaults=K.defaults,w(q.defaults),q},q.walkTokens=function(e,t){return K.walkTokens(e,t)},q.parseInline=K.parseInline,q.Parser=W,q.parser=W.parse,q.Renderer=it,q.TextRenderer=at,q.Lexer=U,q.lexer=U.lex,q.Tokenizer=H,q.Hooks=G,q.parse=q,q.options,q.setOptions,q.use,q.walkTokens,q.parseInline,W.parse,U.lex,q.use({renderer:{link(e){let t=this.parser.parseInline(e.tokens);return`<a href="`+p(e.href)+`" target="_blank" rel="noopener">`+t+`</a>`}}});function ot(e){return q.parse(e,{async:!1})}function st(e){return e.split(`
`).map(e=>{if(/^#{1,6}\s/.test(e))return`<span style="color:#569cd6; font-weight:700;">`+p(e)+`</span>`;if(/^\s*>/.test(e))return`<span style="color:#6a9955;">`+p(e)+`</span>`;let t=p(e);return t=t.replace(/^(\s*)([-*])(\s)/,`$1<span style="color:#569cd6;">$2</span>$3`),t=t.replace(/`([^`]+)`/g,'<span style="color:#ce9178;">`$1`</span>'),t=t.replace(/\*\*([^*]+)\*\*/g,`<span style="color:#e6e6e6; font-weight:700;">**$1**</span>`),t=t.replace(/\[([^\]]+)\]\(([^)]+)\)/g,`<span style="color:#ce9178;">[$1]</span><span style="color:#569cd6;">($2)</span>`),t}).join(`
`)}function ct(e){let t=e.replace(/\n$/,``).split(`
`).length,n=``;for(let e=1;e<=t;e++)n+=e+(e<t?`
`:``);return`<div style="display:flex; min-width:max-content; font-family:'SF Mono','Menlo','Cascadia Code','Consolas','DejaVu Sans Mono',monospace; font-size:13.5px; line-height:1.62;"><div style="flex:none; text-align:right; padding:14px 16px 20px 14px; color:#858585; user-select:none; white-space:pre;">`+n+`</div><pre style="margin:0; padding:14px 28px 20px 0; color:#d4d4d4; white-space:pre;">`+st(e)+`</pre></div>`}function lt({size:e=16,color:t=`#519aba`,...n}){return(0,_.jsxs)(`svg`,{width:e,height:Math.round(e*128/208),viewBox:`0 0 208 128`,"aria-hidden":`true`,...n,children:[(0,_.jsx)(`rect`,{x:`5`,y:`5`,width:`198`,height:`118`,ry:`10`,fill:`none`,stroke:t,strokeWidth:`10`}),(0,_.jsx)(`path`,{fill:t,d:`M30 98V30h20l20 25 20-25h20v68H90V59L70 84 50 59v39zm125 0l-30-33h20V30h20v35h20z`})]})}var J={editor:`_editor_w6kqg_4`,editor__tabs:`_editor__tabs_w6kqg_13`,editor__tab:`_editor__tab_w6kqg_13`,"editor__tab--active":`_editor__tab--active_w6kqg_32`,editor__breadcrumb:`_editor__breadcrumb_w6kqg_39`,editor__split:`_editor__split_w6kqg_52`,editor__source:`_editor__source_w6kqg_59`,editor__sash:`_editor__sash_w6kqg_64`,"editor__sash-line":`_editor__sash-line_w6kqg_74`,"editor__sash-line--active":`_editor__sash-line--active_w6kqg_78`,"editor__preview-pane":`_editor__preview-pane_w6kqg_81`,editor__preview:`_editor__preview_w6kqg_81`},ut=e=>e.endsWith(`.md`)?(0,_.jsx)(lt,{size:17,style:{flex:`none`}}):(0,_.jsx)(`span`,{style:{color:`#3178c6`,fontWeight:700,fontSize:10.5,flex:`none`},children:`TS`});function dt({FILES:e,order:t,activeFile:n,onSelectFile:i}){let[a,o]=(0,r.useState)(.5),[s,c]=(0,r.useState)(!1),l=(0,r.useRef)(null),u=(0,r.useRef)(!1),d=e=>{u.current=!0,c(!0),e.currentTarget.setPointerCapture(e.pointerId),e.preventDefault()},f=e=>{if(!u.current||!l.current)return;let t=l.current.getBoundingClientRect();o(m((e.clientX-t.left)/t.width,.12,.85))},p=e=>{if(u.current){u.current=!1,c(!1);try{e.currentTarget.releasePointerCapture(e.pointerId)}catch{}}},h=e[n]||``,g=(0,r.useMemo)(()=>ct(h),[h]),v=(0,r.useMemo)(()=>ot(h),[h]);return(0,_.jsxs)(`div`,{className:J.editor,children:[(0,_.jsx)(`div`,{className:J.editor__tabs,children:t.map(e=>(0,_.jsxs)(`div`,{onClick:()=>i(e),className:e===n?`${J.editor__tab} ${J[`editor__tab--active`]}`:J.editor__tab,children:[ut(e),(0,_.jsx)(`span`,{children:e})]},e))}),(0,_.jsxs)(`div`,{className:J.editor__breadcrumb,children:[`portfolio \xA0›\xA0 `,n]}),(0,_.jsxs)(`div`,{ref:l,className:J.editor__split,children:[(0,_.jsx)(`div`,{className:J.editor__source,style:{flex:`0 0 `+a*100+`%`},dangerouslySetInnerHTML:{__html:g}}),(0,_.jsx)(`div`,{onPointerDown:d,onPointerMove:f,onPointerUp:p,onPointerCancel:p,className:J.editor__sash,children:(0,_.jsx)(`div`,{className:s?`${J[`editor__sash-line`]} ${J[`editor__sash-line--active`]}`:J[`editor__sash-line`]})}),(0,_.jsx)(`div`,{className:J[`editor__preview-pane`],children:(0,_.jsx)(`div`,{className:J.editor__preview,dangerouslySetInnerHTML:{__html:v}})})]})]})}var Y=h(`accent`,`⏺ `),ft=e=>`<span style="display:inline-block; background:rgba(255,255,255,0.07); border-radius:8px; padding:3px 12px; margin:2px 0; max-width:100%;">`+h(`accent`,`&gt; `)+h(`dim`,p(e))+`</span>`,pt=[`·`,`✢`,`✳`,`✶`,`✻`,`✽`],mt=120,ht=3,gt=e=>`<span style="display:inline-block; width:1.5ch; text-align:center; color:var(--t-accent)">`+e+`</span>`,_t=(e,t,n)=>{let r=e.tr(t,n),i=(pt.length-1)*2,a=e=>{let t=e%i,n=pt[t<pt.length?t:i-t],a=`.`.repeat(1+Math.floor(e/ht)%3);return gt(n)+` `+h(`dim`,r+a)},o=0,s=e.write(a(0)),c=setInterval(()=>e.replaceLine(s,a(++o)),mt);return{id:s,stop:()=>clearInterval(c)}},X=e=>_t(e,`考えています`,`Thinking`),vt=(e,t)=>{let n;if(e==null)n=``;else if(typeof e==`string`)n=e;else try{n=JSON.stringify(e)}catch{n=String(e)}return(n===`{}`||n===`[]`||n===`null`)&&(n=``),n=n.replace(/\s+/g,` `),n.length>t?n.slice(0,t-1)+`…`:n},yt=(e,t)=>Y+h(`fg`,p(e),!0)+h(`dim`,`(`+p(vt(t,48))+`)`),bt=(e,t)=>h(`dim`,`  ⎿  `)+h(`grey`,p(vt(t,96)||e.tr(`完了`,`done`))),xt=`https://backend.s20024.com/api/profile-chat`,St=`formal`,Ct=async e=>{let t=await fetch(xt,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({persona:St}),signal:e});if(!t.ok)throw Error(`createThread failed (`+t.status+`)`);return(await t.json()).thread_id},wt=e=>{let t=[],n=new Map;for(let r of e){if(typeof r!=`object`||!r||!(`role`in r))continue;let e=r;if(e.role===`user`&&typeof e.content==`string`&&e.content)t.push({role:`user`,content:e.content});else if(e.role===`assistant`){if(typeof e.content==`string`&&e.content&&t.push({role:`assistant`,content:e.content}),Array.isArray(e.tool_calls))for(let r of e.tool_calls){if(typeof r!=`object`||!r)continue;let e=r;t.push({role:`tool`,content:``,toolName:typeof e.name==`string`?e.name:`tool`,toolArguments:e.arguments}),typeof e.id==`string`&&n.set(e.id,t.length-1)}}else if(e.role===`tool_result`&&Array.isArray(e.tool_results))for(let r of e.tool_results){if(typeof r!=`object`||!r)continue;let e=r,i=typeof e.id==`string`?n.get(e.id):void 0;i===void 0?t.push({role:`tool`,content:``,toolName:typeof e.name==`string`?e.name:`tool`,toolResult:e.result}):t[i]={...t[i],toolResult:e.result}}}return t},Tt=(e,t)=>`<a href="`+e+`" target="_blank" rel="noopener" style="color:var(--t-cyan); text-decoration:underline; text-underline-offset:2px;">`+(t||e)+`</a>`,Et=e=>e.replace(/\[([^\]]+)\]\((https?:\/\/[^\s"<>)*]+)\)|(https?:\/\/[A-Za-z0-9\-._~:/?#@!$&'+,;=%]+)/g,(e,t,n,r)=>{if(n)return Tt(n,t);let i=r,a=i.match(/[.,!?;:]+$/)?.[0]??``;return Tt(a?i.slice(0,-a.length):i)+a}),Dt=e=>Et(e).replace(/`([^`]+)`/g,`<span style="background:rgba(127,127,127,0.18); border-radius:4px; padding:0 4px; color:var(--t-cyan);">$1</span>`).replace(/\*\*([^*]+)\*\*/g,`<span style="color:var(--t-fg); font-weight:700;">$1</span>`),Ot=e=>p(e).split(`
`).map(e=>{let t;return/^\s*[-*]\s+/.test(e)?h(`accent`,`•`)+` `+Dt(e.replace(/^\s*[-*]\s+/,``)):(t=e.match(/^\s*#{1,3}\s+(.*)$/))?`<span style="color:var(--t-accent); font-weight:700;">`+Dt(t[1])+`</span>`:(t=e.match(/^\s*(\d+)\.\s+(.*)$/))?h(`accent`,t[1]+`.`)+` `+Dt(t[2]):Dt(e)}).join(`
`),kt=`pf.chat.threads`,At=e=>e.updatedAt||e.createdAt||0,Z=()=>{if(typeof window>`u`)return[];try{let e=window.localStorage.getItem(kt);if(!e)return[];let t=JSON.parse(e);return Array.isArray(t)?t.filter(e=>typeof e==`object`&&!!e&&typeof e.id==`string`).sort((e,t)=>At(t)-At(e)):[]}catch{return[]}},jt=e=>{if(!(typeof window>`u`))try{window.localStorage.setItem(kt,JSON.stringify(e))}catch{}},Mt=e=>jt([e,...Z().filter(t=>t.id!==e.id)]),Nt=(e,t)=>jt(Z().map(n=>n.id===e?{...n,title:t}:n)),Pt=e=>jt(Z().map(t=>t.id===e?{...t,updatedAt:Date.now()}:t)),Ft=e=>jt(Z().filter(t=>t.id!==e)),It=(e,t)=>{let n=Math.floor((Date.now()-e)/6e4);if(!Number.isFinite(n)||n<1)return t(`たった今`,`just now`);if(n<60)return t(n+`分前`,n+`m ago`);let r=Math.floor(n/60);if(r<24)return t(r+`時間前`,r+`h ago`);let i=Math.floor(r/24);if(i<7)return t(i+`日前`,i+`d ago`);let a=new Date(e);return a.getFullYear()+`/`+(a.getMonth()+1)+`/`+a.getDate()},Lt=18,Rt=3e4,zt=e=>new Promise(t=>setTimeout(t,e));async function Bt(e,t,n,r){let i=X(e),a=null,o=()=>{a!==null&&clearTimeout(a),a=setTimeout(()=>r.abort(`timeout`),Rt)},s=()=>{if(i!==null){let{id:e,stop:t}=i;return t(),i=null,e}return e.write(``)},c=null,l=``,u=0,d=null,f=()=>{c!==null&&e.replaceLine(c,Y+Ot(l.slice(0,u))+h(`accent`,`▌`))},p=()=>{d===null&&(d=setInterval(()=>{c===null||u>=l.length||(u=Math.min(l.length,u+Math.max(1,Math.ceil((l.length-u)/24))),f())},Lt))},m=async()=>{if(c!==null){for(;u<l.length;)await zt(Lt);e.replaceLine(c,Y+Ot(l)),e.chatLog.push({role:`assistant`,content:l}),c=null,l=``,u=0}};try{o();let a=await fetch(xt+`/`+t,{method:`POST`,headers:{"Content-Type":`application/json`,Accept:`text/event-stream`},body:JSON.stringify({message:n}),signal:r.signal});if(!a.ok||!a.body)throw Error(`send failed (`+a.status+`)`);let u=a.body.getReader(),d=new TextDecoder,h=``;for(;;){let{value:n,done:r}=await u.read();if(o(),r)break;h+=d.decode(n,{stream:!0});let a;for(;(a=h.indexOf(`

`))>=0;){let n=h.slice(0,a);h=h.slice(a+2);let r=n.split(`
`).find(e=>e.startsWith(`data: `));if(!r)continue;let o;try{o=JSON.parse(r.slice(6))}catch{continue}switch(o.type){case`title`:typeof o.title==`string`&&o.title&&Nt(t,o.title);break;case`text_start`:await m(),c=s(),p(),f();break;case`text_delta`:typeof o.delta==`string`&&o.delta&&(c===null&&(c=s()),l+=o.delta,p());break;case`text_end`:await m(),i=X(e);break;case`tool_call`:{await m();let t=typeof o.tool_name==`string`?o.tool_name:typeof o.name==`string`?o.name:`tool`;e.replaceLine(s(),yt(t,o.arguments)),e.chatLog.push({role:`tool`,content:``,toolName:t,toolArguments:o.arguments}),i=X(e);break}case`tool_result`:{await m();let t=typeof o.tool_name==`string`?o.tool_name:typeof o.name==`string`?o.name:`tool`;e.replaceLine(s(),bt(e,o.result));for(let n=e.chatLog.length-1;n>=0;n--){let r=e.chatLog[n];if(r.role===`tool`&&r.toolName===t&&r.toolResult===void 0){r.toolResult=o.result;break}}i=X(e);break}}}}await m()}finally{a!==null&&clearTimeout(a),d!==null&&clearInterval(d),c!==null&&(l?(e.replaceLine(c,Y+Ot(l)),e.chatLog.push({role:`assistant`,content:l})):e.replaceLine(c,``)),i!==null&&(i.stop(),e.replaceLine(i.id,``))}}var Vt=(e,t)=>{t.role===`user`?e.write(ft(t.content)):t.role===`assistant`?e.write(Y+Ot(t.content)):(e.write(yt(t.toolName||`tool`,t.toolArguments)),t.toolResult!==void 0&&e.write(bt(e,t.toolResult)))},Ht=async(e,t)=>{e.setBusy(!0);let n=_t(e,`履歴を読み込んでいます`,`Loading the conversation`);try{let r=await fetch(xt+`/`+t.id);if(r.status===404){Ft(t.id),e.replaceLine(n.id,``),e.line(e.tr(`このチャットはサーバー側で期限切れになっていました（一覧から削除しました）。`,`This chat has expired on the server (removed from the list).`),`yellow`);return}if(!r.ok)throw Error(`load failed (`+r.status+`)`);let i=await r.json(),a=wt(i.messages??[]);typeof i.title==`string`&&i.title&&Nt(t.id,i.title),e.chatState.threadId=i.thread_id,e.chatLog.length=0,a.forEach(t=>e.chatLog.push(t));let o=typeof i.title==`string`&&i.title||t.title||e.tr(`無題のチャット`,`Untitled chat`);e.clearScreen(),e.blank(),e.write(h(`grey`,e.tr(`── 再開: `,`── Resumed: `))+h(`fg`,p(o),!0)+h(`grey`,` ──`)),e.blank(),a.forEach((t,n)=>{t.role===`user`&&n>0&&e.blank(),Vt(e,t)}),e.blank(),e.write(h(`dim`,e.tr(`続きからどうぞ。`,`Carry on from here.`))),e.blank()}catch{e.replaceLine(n.id,``),e.line(e.tr(`履歴の読み込みに失敗しました。時間をおいて試してください。`,`Failed to load the conversation. Please try again later.`),`red`)}finally{n.stop(),e.setBusy(!1),e.focus()}},Ut=(e,t,n,r)=>{let i=t.id===e.chatState.threadId,a=p(t.title||e.tr(`無題のチャット`,`Untitled chat`));return(r?h(`accent`,`&gt; `,!0):`  `)+h(`grey`,String(n+1).padStart(2,` `)+`. `)+h(r?`accent`:`fg`,a,r)+h(`grey`,`  `+It(At(t),e.tr))+(i?h(`accent`,e.tr(`  ← いまの会話`,`  ← current`)):``)},Wt=(e,t)=>{let n=Z();if(!n.length){e.line(e.tr(`過去のチャットがまだありません。`,`No past chats yet.`),`yellow`);return}let r=parseInt(t,10);if(t&&String(r)===t&&r>=1&&r<=n.length){Ht(e,n[r-1]);return}e.blank(),e.write(h(`yellow`,e.tr(`過去のチャット:`,`Past chats:`),!0));let i=n.map((t,n)=>e.write(Ut(e,t,n,n===0)));e.blank();let a=e.write(h(`dim`,e.tr(`↑↓ / jk: 選択 · Enter: 再開 · Esc: キャンセル`,`↑↓ / jk: move · Enter: resume · Esc: cancel`)));e.blank(),e.chatState.resumeSelect={threads:n,lineIds:i,hintId:a,index:0}};function Gt(e){let t=e.chatState.resumeSelect;t&&(e.chatState.resumeSelect=null,e.replaceLine(t.lineIds[t.index],Ut(e,t.threads[t.index],t.index,!1)),e.replaceLine(t.hintId,h(`grey`,e.tr(`（キャンセルしました）`,`(cancelled)`))))}function Kt(e,t,n){let r=e.chatState.resumeSelect;if(!r)return!1;let i=r.threads.length,a=t=>{let n=r.index;t!==n&&(r.index=t,e.replaceLine(r.lineIds[n],Ut(e,r.threads[n],n,!1)),e.replaceLine(r.lineIds[t],Ut(e,r.threads[t],t,!0)))};return t===`ArrowUp`||!n&&t===`k`?(a((r.index-1+i)%i),!0):t===`ArrowDown`||!n&&t===`j`?(a((r.index+1)%i),!0):!n&&/^[1-9]$/.test(t)&&Number(t)<=i?(a(Number(t)-1),!0):t===`Escape`||!n&&t===`q`?(Gt(e),!0):t===`Enter`&&!n?(e.chatState.resumeSelect=null,e.replaceLine(r.hintId,``),Ht(e,r.threads[r.index]),!0):!1}var qt={ja:[`経歴を教えて`,`得意な技術は？`,`どんな人柄？`,`制作したものは？`,`連絡先は？`],en:[`Tell me about your career`,`What are your main skills?`,`What are you like?`,`What have you built?`,`How can I contact you?`]},Jt=e=>qt[e]??qt.ja;function Yt(e){e.blank(),e.write(`<div style="border:1px solid var(--t-accent); border-radius:10px; padding:12px 16px; margin:2px 0; max-width:580px; line-height:1.75;">`+h(`accent`,`✻ `,!0)+h(`fg`,p(e.profile.name)+e.tr(` の自己紹介AI`,`'s self-intro AI`),!0)+`<br>`+h(`dim`,e.tr(`　経歴・スキル・好きなことなど、気軽に聞いてください。`,`　Ask me anything — career, skills, what I like.`))+`<br>`+h(`grey`,e.tr(`　/resume 過去のチャット · /clear 新規チャット · exit / Esc で戻る`,`　/resume past chats · /clear new chat · exit / Esc to leave`))+`</div>`),e.blank()}async function Xt(e,t){e.setBusy(!0);let n=new AbortController;e.chatState.abort=n;let r=X(e),i=!1,a=()=>{i||(i=!0,r.stop(),e.replaceLine(r.id,``))};try{await t(n,a)}catch{a(),n.signal.aborted&&n.signal.reason===`user`?e.line(e.tr(`応答を中断しました。`,`Response interrupted.`),`yellow`):e.line(e.tr(`サーバーに接続できませんでした。通信環境を確認して、もう一度お試しください。`,`Could not reach the server. Please check your connection and try again.`),`red`)}finally{a(),e.chatState.abort=null,e.blank(),e.setBusy(!1),e.focus()}}async function Zt(e,t){e.chatLog.push({role:`user`,content:t}),await Xt(e,async(n,r)=>{let i=e.chatState.threadId;i||(i=await Ct(n.signal),e.chatState.threadId=i,Mt({id:i,title:null,createdAt:Date.now()})),r(),await Bt(e,i,t,n),Pt(i)})}async function Qt(e,t){await Xt(e,async(n,r)=>{let i=await Ct(n.signal);r(),await Bt({...e,chatLog:[]},i,t,n)})}function $t(e,t){Gt(e),Zt(e,t)}var en=[`/resume`,`/clear`,`/help`,`/exit`];function tn(e){return/^\/\S*$/.test(e)?g(e,en,` `):{text:null,candidates:null}}var nn=e=>{let t=(e,t)=>h(`green`,e)+` `.repeat(Math.max(2,16-e.length))+h(`dim`,t);e.blank(),e.write(h(`yellow`,e.tr(`チャット内コマンド:`,`Chat commands:`),!0)),e.write(t(`/resume`,e.tr(`過去のチャット一覧から再開`,`Pick a past chat and resume it`))),e.write(t(`/clear`,e.tr(`新しいチャットを開始`,`Start a fresh chat`))),e.write(t(`/help`,e.tr(`このヘルプ`,`This help`))),e.write(t(`/exit`,e.tr(`チャットを終了 (exit / Esc でも可)`,`Leave chat (exit / Esc also works)`))),e.blank()},rn=e=>{e.clearScreen(),e.chatLog.length=0,e.chatState.threadId=null,e.chatState.resumeSelect=null,Yt(e)};function an(e,t){let n=t.trim().split(/\s+/),r=(n[0]||``).toLowerCase(),i=n.slice(1).join(` `);switch(Gt(e),r){case`exit`:case`quit`:case`q`:e.exitChat();break;case`help`:case`?`:nn(e);break;case`resume`:case`history`:Wt(e,i);break;case`clear`:case`cls`:case`new`:rn(e);break;case``:break;default:e.write(h(`fg`,`/`+p(r))+h(`red`,e.tr(`: そんなチャットコマンドはありません`,`: no such chat command`)))}}var on=e=>{let{write:t,blank:n,tr:r}=e,i=(e,t)=>h(`green`,p(e))+` `.repeat(Math.max(2,20-e.length))+h(`dim`,t);n(),t(h(`yellow`,r(`● コマンド一覧`,`● Commands`),!0)),t(i(`chat`,r(`AIチャットモードに入る`,`Enter AI chat mode`))),t(i(`ask <prompt>`,r(`AIにその場で1回だけ質問（例: ask 得意な技術は？）`,`Ask the AI a one-shot question`))),t(i(`whoami`,r(`プロフィールの概要`,`Profile overview`))),t(i(`ls`,r(`ファイル一覧`,`List the files`))),t(i(`code <file>`,r(`ファイルをエディタのタブで開く（例: code portfolio.md）`,`Open a file in the editor tab`))),t(i(`clear`,r(`画面をクリア`,`Clear the screen`))),t(i(`exit`,r(`画面のフォーカスを解除して机に戻る`,`Leave the screen focus (back to the desk)`))),n(),t(h(`grey`,r(`ヒント: `,`Tip: `))+h(`dim`,r(`AIと話すなら `,`to talk with the AI, run `))+h(`green`,`chat`)+h(`dim`,r(`。`,`.`))),n()},sn=e=>{let{profile:t,line:n,blank:r}=e;r(),n(t.name+` (`+t.kana+`)  @`+t.githubId,`green`),n(t.title+`  ·  `+t.location,`cyan`),r(),n(t.self,`dim`),r()},cn=e=>{e.write(e.mdFiles.map(e=>h(`fg`,p(e))).join(`  `))},ln=(e,t)=>{let n=t.trim(),r=e.mdFiles;if(!n){e.line(e.tr(`使い方: code <ファイル名>   例: code `+(r[0]||`portfolio.md`),`Usage: code <file>   e.g. code `+(r[0]||`portfolio.md`)),`dim`);return}let i=r.find(e=>e===n)??r.find(e=>e===n+`.md`);if(!i){e.write(h(`fg`,p(n))+h(`red`,e.tr(`: そのようなファイルはありません`,`: no such file`))),e.line(e.tr(`'ls' でファイル一覧を表示できます。`,`Try 'ls' to list the files.`),`dim`);return}e.openFile(i),e.line(e.tr(`エディタで `+i+` を開きました。`,`Opened `+i+` in the editor.`),`dim`)},un=400,dn=e=>{let t=new URL(window.location.href),n=t.searchParams.has(`debug`);n?t.searchParams.delete(`debug`):t.searchParams.set(`debug`,``),e.line(e.tr(n?`デバッグモードを終了して再読み込みします…`:`デバッグモードで再読み込みします…`,n?`Reloading without debug mode…`:`Reloading in debug mode…`),`yellow`),setTimeout(()=>{window.location.href=t.toString()},un)},fn=e=>{e.line(e.tr(`画面のフォーカスを解除します。`,`Leaving the screen focus.`),`dim`),window.dispatchEvent(new KeyboardEvent(`keydown`,{key:`Escape`}))},pn={help:on,h:on,"?":on,chat:(e=>e.enterChat()),ask:(e,t)=>{let n=t.trim();if(!n){e.line(e.tr(`使い方: ask <質問>   例: ask 得意な技術は？`,`Usage: ask <question>   e.g. ask What are your skills?`),`dim`);return}Qt(e,n)},whoami:sn,me:sn,ls:cn,code:ln,clear:e=>e.clearScreen(),cls:e=>e.clearScreen(),exit:fn,quit:fn,q:fn,debug:dn},mn=[`help`,`whoami`,`ls`,`code`,`clear`,`exit`,`debug`,`chat`,`ask`];function hn(e,t){if(/^\S*$/.test(t))return g(t,mn,` `);let n=t.match(/^(code\s+)(\S*)$/);if(n){let t=g(n[2],e.mdFiles);return{text:t.text===null?null:n[1]+t.text,candidates:t.candidates}}return{text:null,candidates:null}}var gn=mn.filter(e=>e!==`debug`),_n=(e,t)=>{let n=e.length,r=t.length,i=[];for(let e=0;e<=n;e++)i[e]=[e];for(let e=0;e<=r;e++)i[0][e]=e;for(let a=1;a<=n;a++)for(let n=1;n<=r;n++)i[a][n]=Math.min(i[a-1][n]+1,i[a][n-1]+1,i[a-1][n-1]+(e[a-1]===t[n-1]?0:1));return i[n][r]},vn=e=>{let t=e.length<=3?1:2,n=null,r=99;for(let t of gn){let i=_n(e,t);i<r&&(r=i,n=t)}return r<=t?n:null};function yn(e,t){let n=t.trim().split(/\s+/),r=n[0]||``,i=(n.shift()||``).toLowerCase(),a=n.join(` `);if(!i)return;let o=pn[i];if(o){o(e,a);return}e.write(h(`fg`,p(r))+h(`red`,`: command not found`));let s=vn(i);e.write((s?h(`dim`,e.tr(`もしかして `,`did you mean `))+h(`green`,`'`+s+`'`)+h(`dim`,` ?   ·   `):``)+h(`green`,`help`)+h(`dim`,e.tr(` でコマンド一覧を表示。`,` shows the command list.`)))}var Q={terminal:`_terminal_12ot6_4`,terminal__body:`_terminal__body_12ot6_16`,terminal__line:`_terminal__line_12ot6_29`,terminal__chips:`_terminal__chips_12ot6_35`,"terminal__chips-label":`_terminal__chips-label_12ot6_42`,terminal__chip:`_terminal__chip_12ot6_35`,"terminal__prompt-line":`_terminal__prompt-line_12ot6_57`,"terminal__prompt-line--chat":`_terminal__prompt-line--chat_12ot6_62`,"terminal__prompt-line--hidden":`_terminal__prompt-line--hidden_12ot6_71`,terminal__prompt:`_terminal__prompt_12ot6_57`,terminal__input:`_terminal__input_12ot6_79`},bn={user:`yuuto`,host:`portfolio`,sym:`$`},xn={bg:`#1e1e1e`,fg:`#cccccc`,dim:`#bdbdbd`,green:`#4ec9b0`,blue:`#569cd6`,yellow:`#dcdcaa`,red:`#f48771`,cyan:`#9cdcfe`,mag:`#c586c0`,orange:`#ce9178`,grey:`#808080`,accent:`#0a84ff`,border:`#3a3a3a`};function Sn({profile:e,locale:t,mdFiles:n,openFile:i}){let a=(0,r.useRef)(null),o=(0,r.useRef)(null),s=(0,r.useRef)(null),c=(0,r.useRef)(0),[l,u]=(0,r.useState)([]),[d,f]=(0,r.useState)(`shell`),m=(0,r.useRef)(`shell`),[g,v]=(0,r.useState)(!1),y=(0,r.useRef)(!1),b=(0,r.useRef)([]),x=(0,r.useRef)(-1),S=(0,r.useRef)([]),C=(0,r.useRef)({threadId:null,resumeSelect:null,abort:null}),w=(0,r.useRef)(null),T=(0,r.useRef)(!1),E=(e,n)=>t===`en`&&n!=null?n:e,D=(0,r.useCallback)(e=>{let t=c.current++;return u(n=>n.concat([{id:t,html:e}])),t},[]),ee=(0,r.useCallback)((e,t)=>{u(n=>n.map(n=>n.id===e?{id:e,html:t}:n))},[]),O=e=>D(e),te=(e,t)=>O(h(t||`dim`,p(e))),ne=()=>O(`&nbsp;`),re=e=>{y.current=e,v(e)},k=e=>{m.current=e,f(e)};(0,r.useEffect)(()=>{o.current&&(o.current.scrollTop=o.current.scrollHeight)},[l]);let A=(0,r.useCallback)(()=>{let e=s.current;if(!e)return;e.style.height=`auto`;let t=Math.round(parseFloat(getComputedStyle(e).lineHeight))||22,n=Math.min(Math.max(e.scrollHeight,t),184);e.style.height=n+`px`,e.style.overflowY=e.scrollHeight>184?`auto`:`hidden`,o.current&&(o.current.scrollTop=o.current.scrollHeight)},[]),j=()=>h(`green`,bn.user+`@`+bn.host)+h(`fg`,`:`)+h(`blue`,`~`)+h(`fg`,bn.sym+`&nbsp;`),ie=e=>O(m.current===`chat`?ft(e):j()+h(`fg`,p(e))),ae=()=>{if(m.current===`chat`){te(E(`すでにチャットモードです。exit または Esc で戻れます。`,`Already in chat mode. exit or Esc to leave.`),`yellow`);return}k(`chat`),x.current=-1,u(e=>(w.current=e,[])),S.current.length=0,C.current.threadId=null,C.current.resumeSelect=null,Yt(M),setTimeout(()=>s.current&&s.current.focus(),0)},oe=e=>{if(m.current!==`chat`){e||te(E(`チャットモードではありません。`,`Not in chat mode.`),`yellow`);return}Gt(M),k(`shell`),x.current=-1,u(w.current||[]),w.current=null,setTimeout(()=>s.current&&s.current.focus(),0)},M={profile:e,locale:t,tr:E,write:O,line:te,blank:ne,replaceLine:ee,clearScreen:()=>u([]),setBusy:re,focus:()=>{let e=s.current,t=a.current;e&&(t&&document.activeElement&&!t.contains(document.activeElement)||e.focus())},enterChat:ae,exitChat:oe,mdFiles:n||[],openFile:i||(()=>{}),chatLog:S.current,chatState:C.current},se=()=>m.current===`chat`?S.current.filter(e=>e.role===`user`).map(e=>e.content):b.current,N=e=>{let t=e.trim();if(!(m.current===`chat`&&!t)&&(ie(e),x.current=-1,t)){if(m.current===`chat`){if(t[0]===`/`){an(M,t.slice(1));return}if(/^(exit|quit|q)$/i.test(t)){oe();return}$t(M,t);return}b.current.push(t),yn(M,t)}},ce=e=>{let t=s.current;if(m.current===`chat`&&!y.current&&C.current.resumeSelect&&!e.nativeEvent.isComposing&&e.keyCode!==229&&Kt(M,e.key,t.value.trim()!==``)){e.preventDefault(),e.stopPropagation();return}if(e.key===`Tab`){if(e.shiftKey||(e.preventDefault(),y.current||e.nativeEvent.isComposing||e.keyCode===229)||C.current.resumeSelect)return;let n=t.value;if(n.indexOf(`
`)!==-1)return;let r=m.current===`chat`?tn(n):hn(M,n);r.text!==null&&(t.value=r.text,A()),r.candidates&&m.current!==`chat`&&(ie(n),O(h(`fg`,r.candidates.map(p).join(`  `))));return}if(e.key===`Escape`){if(e.nativeEvent.isComposing||e.keyCode===229){e.stopPropagation();return}if(y.current){e.preventDefault(),e.stopPropagation(),C.current.abort&&C.current.abort.abort(`user`);return}m.current===`chat`&&(e.preventDefault(),e.stopPropagation(),oe());return}if(y.current){m.current===`chat`?e.key===`Enter`&&!e.shiftKey&&!e.nativeEvent.isComposing&&e.keyCode!==229&&e.preventDefault():e.preventDefault();return}if(e.key===`Enter`&&!e.shiftKey&&!e.nativeEvent.isComposing&&e.keyCode!==229){e.preventDefault();let n=t.value;t.value=``,A(),N(n)}else if(e.key===`ArrowUp`&&t.value.slice(0,t.selectionStart).indexOf(`
`)===-1){e.preventDefault();let n=se();if(!n.length)return;(x.current===-1||x.current>n.length)&&(x.current=n.length),x.current=Math.max(0,x.current-1),t.value=n[x.current],A()}else if(e.key===`ArrowDown`&&t.value.slice(t.selectionStart).indexOf(`
`)===-1){if(e.preventDefault(),x.current===-1)return;let n=se();x.current++,x.current>=n.length?(x.current=-1,t.value=``):t.value=n[x.current],A()}};(0,r.useEffect)(()=>{T.current||(T.current=!0,O(h(`dim`,E(`コマンド一覧は `,`Command list: `))+h(`green`,`help`)+(h(`dim`,E(`、AIと話すなら `,` · to talk with the AI: `))+h(`green`,`chat`))+h(`dim`,E(`。`,`.`))),O(`&nbsp;`))},[]);let le={};Object.keys(xn).forEach(e=>{le[`--t-`+e]=xn[e]});let P=d===`chat`&&!g&&S.current.length===0;return(0,_.jsx)(`div`,{ref:a,className:Q.terminal,style:le,onMouseDown:e=>{e.target.tagName===`A`||typeof window<`u`&&window.getSelection().toString()||(e.preventDefault(),s.current&&s.current.focus())},children:(0,_.jsxs)(`div`,{ref:o,className:Q.terminal__body,children:[l.map(e=>(0,_.jsx)(`div`,{className:Q.terminal__line,dangerouslySetInnerHTML:{__html:e.html}},e.id)),P&&(0,_.jsxs)(`div`,{className:Q.terminal__chips,children:[(0,_.jsx)(`span`,{className:Q[`terminal__chips-label`],children:E(`試しに聞いてみる →`,`Try asking →`)}),Jt(t).map(e=>(0,_.jsx)(`span`,{onClick:()=>{!y.current&&m.current===`chat`&&N(e)},className:Q.terminal__chip,children:e},e))]}),(0,_.jsxs)(`div`,{className:[Q[`terminal__prompt-line`],d===`chat`&&Q[`terminal__prompt-line--chat`],g&&d!==`chat`&&Q[`terminal__prompt-line--hidden`]].filter(Boolean).join(` `),children:[(0,_.jsx)(`span`,{className:Q.terminal__prompt,dangerouslySetInnerHTML:{__html:d===`chat`?h(`accent`,`&gt;&nbsp;`):j()}}),(0,_.jsx)(`textarea`,{ref:s,rows:1,autoComplete:`off`,autoCapitalize:`off`,autoCorrect:`off`,spellCheck:!1,readOnly:g&&d!==`chat`,onChange:A,onKeyDown:ce,className:Q.terminal__input})]})]})})}var Cn={statusbar:`_statusbar_7n6pu_3`,statusbar__group:`_statusbar__group_7n6pu_15`};function wn(){return(0,_.jsxs)(`div`,{className:Cn.statusbar,children:[(0,_.jsx)(`div`,{className:Cn.statusbar__group}),(0,_.jsxs)(`div`,{className:Cn.statusbar__group,children:[(0,_.jsx)(`span`,{children:`Spaces: 2`}),(0,_.jsx)(`span`,{children:`UTF-8`}),(0,_.jsx)(`span`,{children:`Markdown`})]})]})}var $={vscode:`_vscode_1wjlz_5`,vscode__main:`_vscode__main_1wjlz_56`,panel:`_panel_1wjlz_65`,panel__resize:`_panel__resize_1wjlz_75`,"panel__resize-line":`_panel__resize-line_1wjlz_86`,"panel__resize-line--active":`_panel__resize-line--active_1wjlz_91`,panel__header:`_panel__header_1wjlz_94`,panel__title:`_panel__title_1wjlz_103`,panel__spacer:`_panel__spacer_1wjlz_114`},Tn=[`portfolio.md`,`plog.md`,`mcp-server.md`,`junks.md`];function En({locale:e=`ja`,className:t,style:n}){let i=(0,r.useMemo)(()=>f(e),[e]),a=(0,r.useMemo)(()=>d(e),[e]),s=(0,r.useMemo)(()=>Tn.filter(e=>e in a),[a]),[c,l]=(0,r.useState)(s[0]||`README.md`);(0,r.useEffect)(()=>{l(s[0]||`README.md`)},[s]);let u=(0,r.useMemo)(()=>o(),[]),[p,h]=(0,r.useState)(.39),[g,v]=(0,r.useState)(!1),y=(0,r.useRef)(null),b=(0,r.useRef)(!1),S=e=>{b.current=!0,v(!0),e.currentTarget.setPointerCapture(e.pointerId),e.preventDefault()},C=e=>{if(!b.current||!y.current)return;let t=y.current.getBoundingClientRect();h(m((t.bottom-e.clientY)/t.height,.12,.82))},w=e=>{if(b.current){b.current=!1,v(!1);try{e.currentTarget.releasePointerCapture(e.pointerId)}catch{}}};return(0,_.jsxs)(`div`,{className:[$.vscode,t].filter(Boolean).join(` `),style:n,children:[(0,_.jsx)(x,{locale:e}),(0,_.jsxs)(`div`,{ref:y,className:$.vscode__main,children:[(0,_.jsx)(dt,{FILES:a,order:s,activeFile:c,onSelectFile:l}),!u&&(0,_.jsxs)(`div`,{className:$.panel,style:{height:p*100+`%`},children:[(0,_.jsx)(`div`,{onPointerDown:S,onPointerMove:C,onPointerUp:w,onPointerCancel:w,className:$.panel__resize,children:(0,_.jsx)(`div`,{className:g?`${$[`panel__resize-line`]} ${$[`panel__resize-line--active`]}`:$[`panel__resize-line`]})}),(0,_.jsxs)(`div`,{className:$.panel__header,children:[(0,_.jsx)(`div`,{className:$.panel__title,children:e===`en`?`Terminal`:`ターミナル`}),(0,_.jsx)(`div`,{className:$.panel__spacer})]}),(0,_.jsx)(Sn,{profile:i,locale:e,mdFiles:s,openFile:l})]})]}),(0,_.jsx)(wn,{})]})}export{c as n,En as t};