---
title: "Kooltong"
date: "2021-08-27"
---

# Kooltong

_한국어 강의 및 한국 문화 소개 어플리케이션_

- 기술 스택: `React Native`, `Typescript`, `Recoil`, `Apollo Client`
- GitHub 저장소: [링크](https://github.com/bvv8808/RN-kooltong)
- Google Play 등록 어플: [링크](https://https://play.google.com/store/apps/details?id=com.kooltong)
- App Store 등록 어플: [링크](https://apps.apple.com/kr/app/kooltong/id1572404373)

### 주요 기능

1. 한국어 강의 영상 제공
2. 강의 챕터마다 단어나 표현을 학습
3. 한국 문화를 소개하는 영상 컨텐츠 제공
4. 커뮤니티
5. 인앱결제 스토어

### 사용 라이브러리

- `@apollo/client`: 효율적이고 편리한 GraphQL 통신 관련 hooks와 캐시 기능을 제공
- `@react-native-community/async-storage` : 영속 데이터 저장
- `@react-native-community/datetimepicker` : Date picker 컴포넌트 (Android)
- `react-native-date-picker`: Date picker 컴포넌트 (iOS)
- `@hyeonwoo/react-native-video-controls-subtitle`: 비디오 컴포넌트에 커스텀 자막을 렌더링하는 컨트롤을 연결한 라이브러리
- `@react-native-google-signin/google-signin`: 구글 로그인
- `react-native-seoul/kakao-login`: 카카오 로그인
- `@invertase/react-native-apple-authentication`: 애플 로그인 기능을 지원하는 라이브러리
- `@react-native-firebase/auth`: Firebase를 연동한 소셜로그인
- `@react-native-firebase/messaging`: FCM
- `@react-native-firebase/app`, `@react-native-firebase/admob` : Firebase와 구글 Admob을 연동하여 앱에 광고를 노출시키는 라이브러리
- `react-native-actions-sheet`: 액션시트 컴포넌트
- `react-native-fbsdk-next`: 페이스북 로그인, 메신저 공유 기능
- `react-native-iap`: 인앱결제
- `react-native-image-crop-picker`: 앨범이나 카메라로부터 지정된 크기로 잘라낸 이미지를 가져오는 라이브러리
- `react-native-linear-gradient`: 그래디언트 뷰 컴포넌트
- `react-native-orientation-locker`: 스크린 orientation 제어
- `react-native-router-flux`: react-navigation을 편리하게 사용할 수 있도록 개량한 내비게이터
- `react-native-swiper`: Swiper 컴포넌트
- `react-native-switch`: Switch 컴포넌트
- `react-native-video`: 비디오 및 오디오 출력
- `redux`: 전역 상태 관리
- `recoil`: 전역 상태 관리

### 주요 진행 과정

1. 한국어 강의 영상 제공
   - 서버로부터 url을 받아와 비디오 컴포넌트로 렌더링
   - 네이티브의 비디오 컨트롤을 사용하지 않고 직접 제작한 커스텀 컨트롤(@hyeonwoo/react-native-video-controls-subtitle)을 제공
   - .vtt 자막 파일을 서버로부터 받아와 전처리 후 커스텀 컨트롤에 넘겨서 자막 출력
   - 커스텀 컨트롤과 react-native-orientation-locker 라이브러리, redux를 이용해 Fullscreen 제어
2. 한국 문화를 소개하는 영상 컨텐츠 제공
   - 서버로부터 데이터를 받아와 화면에 렌더링. 1 한국어 강의와 마찬가지로 커스텀 컨트롤을 통해 자막을 출력하고 Fullscreen 제어
3. 커뮤니티
   - FlatList를 이용한 무한 스크롤 구현
4. 인앱결제 스토어
   - react-native-iap를 이용하여 소모품 상품 및 정기구독 상품 세팅

### 시연 사진

<figcaption> [메인 화면] </figcaption>

![caption="메인 화면"](/projectImgs/kooltong/main.png "메인 화면")

<figcaption> [인트로 화면] </figcaption>

![](/projectImgs/kooltong/intro.png)

<figcaption> [단어 학습] </figcaption>

![](/projectImgs/kooltong/study.png)

<figcaption> [한국어 강의 시청] </figcaption>

![](/projectImgs/kooltong/lecture.png)

<figcaption> [한국어 표현 시험] </figcaption>

![](/projectImgs/kooltong/exam.png)

<figcaption> [영상 컨텐츠 목록] </figcaption>

![](/projectImgs/kooltong/videolist.png)

<figcaption> [영상 컨텐츠 상세] </figcaption>

![](/projectImgs/kooltong/video.png)

<figcaption> [커뮤니티 포스트 목록] </figcaption>

![](/projectImgs/kooltong/community.png)

<figcaption> [커뮤니티 포스트 상세] </figcaption>

![](/projectImgs/kooltong/community2.png)

<figcaption> [커뮤니티 포스트 댓글 작성 화면] </figcaption>

![](/projectImgs/kooltong/comment.png)

<figcaption> [인앱결제 상품 스토어] </figcaption>

![](/projectImgs/kooltong/store.png)

<figcaption> [마이페이지] </figcaption>

![](/projectImgs/kooltong/myinfo.png)
