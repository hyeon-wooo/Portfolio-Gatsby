---
title: "ExportedTalk-BE"
date: "2021-01-25"
---

# ExportedTalk - Back End

_내보낸 카카오톡 대화 내용을 브라우저로 조회하기 위한 프론트엔드 서버에 데이터를 제공하는 백엔드 서버_

- 기술 스택: `Node.js (Express)`, `Javascript`
- GitHub 저장소: [링크](https://github.com/bvv8808/ExportedTalk-BE)

### 주요 기능

1. 이미지 제공 (Base64)
2. 비디오, 오디오 스트리밍
3. 대화 내용(텍스트) 제공

### 사용 라이브러리

- `dotenv`: 내부 .env파일 연동

### 주요 진행 과정

- Javascript Generator를 사용해 텍스트 파일을 한 줄씩 읽어서 분석
- fs모듈을 활용해 파일 내용이나 디렉터리 항목을 조회하고, 비디오 데이터와 오디오 데이터 스트리밍

### 버전 이력

- v1.0.0

### 향후 예정 연구

-

### 시연 사진

-
