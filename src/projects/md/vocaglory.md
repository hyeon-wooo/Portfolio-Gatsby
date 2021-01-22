---
title: "VocaGlory"
date: "2021-01-14"
---

# VocaGlory2

_안드로이드 전용 영단어 어플_

- 기술 스택: `React Native`, `Typescript`
- GitHub 저장소: [링크](https://github.com/bvv8808/VocaGlory2)
- Google Play 등록 어플: [링크](https://play.google.com/store/apps/details?id=com.vocaglory2)

### 주요 기능

1. Axios를 통해 Firebase Database에서 영단어 데이터 Fetch
2. 오프라인(인터넷X) 학습을 위해 영단어 데이터 SQLite에 저장 및 삭제 기능
3. 단어장에 추가한 영단어들을 어원 또는 추가일자에 따라 조회
4. 단어장의 단어들을 어원 또는 추가일자별로 시험
5. 다음 항목 설정 가능
   - 단어 시험 시, 단어 순서를 무작위로 출제
   - 단어장에 추가된 단어는 '단어 공부'동안 보이지 않음
   - 기기에 캐싱된 영단어 데이터 비우기

### 사용 라이브러리

- `@react-native-firebase/app`, `@react-native-firebase/admob` : Firebase와 구글 Admob을 연동하여 앱에 광고를 노출시키는 라이브러리
- `@react-navigation/stack` : 스택형 네비게이션을 위한 라이브러리
- `react-native-sqlite-storage` : SQLite 연동 및 데이터 관리를 위한 라이브러리
- `react-native-simple-toast` : iOS에서 토스트 알림을 띄우기 위해 사용

### 주요 진행 과정

- Firebase DB에 영단어 데이터 생성
- FlexBox를 적극 활용하여 UI 구현
- SQLite에 영단어 데이터와 설정 데이터를 위한 테이블 생성 및 연동

### 버전 이력

- v1.0.0 : 2019년도에 Java로 구현한 프로토타입 어플리케이션. 앱서명 파일 분실로 Google Play에서 내리고 v2.0.0을 새로 등록.
- v2.0.0 : React Native로 재구현하면서 UI 대규모 개편 및 캐싱 기능 추가

### 향후 예정 연구

-

### 시연 사진

<figcaption> [메인 화면] </figcaption>

![caption="메인 화면"](/projectImgs/vocaglory/vocaglory-main.png "메인 화면")

<figcaption> [단어 공부 목록] </figcaption>

![](/projectImgs/vocaglory/vocaglory-studyhome.png)

<figcaption> [단어 공부] </figcaption>

![](/projectImgs/vocaglory/vocaglory-study.png)

<figcaption> [단어장] </figcaption>

![](/projectImgs/vocaglory/vocaglory-dict.png)

<figcaption> [설정 화면] </figcaption>

![](/projectImgs/vocaglory/vocaglory-setting.png)
