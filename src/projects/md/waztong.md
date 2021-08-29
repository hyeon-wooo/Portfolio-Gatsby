---
title: "Waztong"
date: "2021-08-27"
---

# Waztong

_다양한 외국어 학습 어플리케이션_

- 기술 스택: `React Native`, `Typescript`, `Recoil`, `Apollo Client`
- Github 저장소: [링크](https://github.com/bvv8808/RN-waztong)

### 주요 기능

1. 원어민과 대화 하는 상황을 비디오를 이용하여 학습
2. 커뮤니티
3. 인앱결제 스토어

### 사용 라이브러리

- `@apollo/client`: 효율적이고 편리한 GraphQL 통신 관련 hooks와 캐시 기능을 제공
- `gql-query-builder`: 효율적인 GraphQL 쿼리 작성 및 관리를 위한 쿼리 빌더
- `@react-native-community/async-storage` : 영속 데이터 저장
- `@react-native-community/datetimepicker` : Date picker 컴포넌트 (Android)
- `react-native-date-picker`: Date picker 컴포넌트 (iOS)
- `@hyeonwoo/react-native-video-controls-subtitle`: 비디오 컴포넌트에 커스텀 자막을 렌더링하는 컨트롤을 연결한 라이브러리
- `@react-native-google-signin/google-signin`: 구글 로그인
- `react-native-seoul/kakao-login`: 카카오 로그인
- `@invertase/react-native-apple-authentication`: 애플 로그인 기능을 지원하는 라이브러리
- `@react-native-firebase/auth`: Firebase를 연동한 소셜로그인
- `@react-native-firebase/app`, `@react-native-firebase/admob` : Firebase와 구글 Admob을 연동하여 앱에 광고를 노출시키는 라이브러리
- `@react-native-voice/voice`: 마이크 녹음 및 STT 기능을 지원하는 라이브러리
- `react-native-actions-sheet`: 액션시트 컴포넌트
- `react-native-fbsdk-next`: 페이스북 로그인, 메신저 공유 기능
- `react-native-iap`: 인앱결제
- `react-native-image-crop-picker`: 앨범이나 카메라로부터 지정된 크기로 잘라낸 이미지를 가져오는 라이브러리
- `react-native-linear-gradient`: 그래디언트 뷰 컴포넌트
- `react-native-orientation-locker`: 스크린 orientation 제어
- `@react-navigation/native`, `@react-navigation/bottom-tabs`, `@react-navigation/stack`: 내비게이션
- `react-native-swiper`: Swiper 컴포넌트
- `react-native-shimmer`: Shimmer 컴포넌트
- `react-native-video`: 비디오 및 오디오 출력
- `recoil`: 전역 상태 관리

### 주요 진행 과정

1. 원어민과 대화 하는 상황을 비디오를 이용하여 학습
   - 한 학습 챕터에 대해 여러 비디오가 존재(맨처음 원어민이 말을 거는 비디오, 사용자가 말하기를 기다리는 비디오, 사용자가 정확한/부정확한 표현을 말했을 때의 비디오)하며, 미리 다음 비디오를 로딩해 두고 상황 흐름에 따라 표시할 비디오 채널을 전환
   - 디바이스의 STT 시스템을 이용하여 사용자가 말한 표현을 텍스트로 전환 후 정답 여부 판단
2. 커뮤니티
   - FlatList를 이용한 무한 스크롤 구현
3. 인앱결제 스토어
   - react-native-iap를 이용하여 소모품 상품 및 정기구독 상품 세팅

### 시연 사진

<figcaption> [메인 화면] </figcaption>

![caption="메인 화면"](/projectImgs/waztong/main.png "메인 화면")

<figcaption> [인트로 화면] </figcaption>

![](/projectImgs/waztong/intro.png)

<figcaption> [학습 챕터 목록] </figcaption>

![](/projectImgs/waztong/speak-list.png)

<figcaption> [학습 입장 전] </figcaption>

![](/projectImgs/waztong/speak-gateway.png)

<figcaption> [학습 중] </figcaption>

![](/projectImgs/waztong/speak.png)

<figcaption> [학습 중 일시정지] </figcaption>

![](/projectImgs/waztong/speak-paused.png)

<figcaption> [커뮤니티 포스트 목록] </figcaption>

![](/projectImgs/waztong/community.png)

<figcaption> [커뮤니티 포스트 작성] </figcaption>

![](/projectImgs/waztong/community-write.png)

<figcaption> [메뉴] </figcaption>

![](/projectImgs/waztong/menu.png)
