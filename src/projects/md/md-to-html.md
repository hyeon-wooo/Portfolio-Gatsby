---
title: "Node-Markdown-To-HTML"
date: "2021-01-26"
---

# Node-Markdown-To-HTML

_로컬 컴퓨터의 .md 파일을 HTML 문자열로 변환해주는 라이브러리_

- 기술 스택: `Typescript`
- GitHub 저장소: [링크](https://github.com/bvv8808/Node-Markdown-To-HTML)
- NPM 저장소: [링크](https://www.npmjs.com/package/austin-markdown-to-html)

### 주요 기능

1. .md 파일의 경로를 입력하면 HTML 문자열로 변환
2. 설정 파일을 통해 HTML 태그에 사용자 지정 스타일 적용

### 사용 라이브러리

-

### 주요 진행 과정

- Generator를 이용해 .md 파일을 한 줄씩 읽어서 분석
- 라인을 분석하여 태그를 추출하고, 태그에 맞는 스타일 삽입
- 변환된 라인들을 모아서 Return

### 버전 이력

- v1.0.0

### 향후 예정 연구

- 다양한 Markdown 문법 적용

### 시연 사진

<figcaption> [변환 전 (.md 파일)]] </figcaption>

![caption="메인 화면"](/projectImgs/md-to-html/md-to-html-main.png "메인 화면")

<figcaption> [변환 후 (html)] </figcaption>

![](/projectImgs/md-to-html/md-to-html-converted.png)
