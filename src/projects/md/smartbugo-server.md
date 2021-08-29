---
title: "Smartbugo-Server"
date: "2021-08-27"
---

# 스마트부고(서버)

_스마트부고 앱을 위한 GraphQL API와 모바일웹을 제공하는 Express 서버_

- 기술 스택: `Typescript`, `Node.js`, `Express.js`, `GraphQL`, `pug`, `MySQL`
- GitHub 저장소: [링크](https://github.com/bvv8808/smartbugo-server--public)

### 주요 기능

1. 그누보드 웹서버의 MySQL DB와 연동하여 데이터 저장 및 앱에 데이터 제공

### 사용 라이브러리

- `axios`: 비동기 통신
- `express-graphql`: Express 환경에서 GraphQL 통신 기능을 가능하게 해주는 미들웨어 라이브러리
- `dotenv`: 민감한 정보를 하드코딩 하지 않고 시스템 내부에 숨김 파일로 저장하여 Node.js 환경에서 불러오도록 해주는 라이브러리

### 주요 진행 과정

- GQL 통신을 위한 타입 인터페이스들과 쿼리 인터페이스들을 정의한 스키마 파일 분리
- GQL 통신에 필요한 쿼리 리졸버를 두고, 리졸버는 다시 query resolver, mutation resolver 두 파일로 분리
- 모바일웹을 위한 페이지들은 pug로 작성하고, 페이지를 제공하거나 모바일웹에서 필요한 서버 통신들은 별도의 라우터로 분리하여 제공

### 시연 사진

-
