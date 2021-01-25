---
title: "Mat"
date: "2021-01-22"
---

# Mat (Make And Toss)

_모바일 명함 관리 어플 (안드로이드 전용)_

- 기술 스택: `React Native`, `Typescript`
- GitHub 저장소: [링크](https://github.com/bvv8808/Mat2)
- Google Play 등록 어플: [링크](https://https://play.google.com/store/apps/details?id=com.navipractice)

### 주요 기능

1. 간단한 절차를 통해 자신만의 모바일 명함 제작
2. 명함첩 기능 (명함 검색, 그룹 지정 및 관리, 명함 정렬 기준 변경)
3. PIN 번호를 이용한 명함 공유
4. 사용자 정의 '명함 템플릿' 제작 및 거래

### 사용 라이브러리

- `@react-native-firebase/app`, `@react-native-firebase/admob` : Firebase와 구글 Admob을 연동하여 앱에 광고를 노출시키는 라이브러리
- `@react-navigation/stack` : 스택형 네비게이션을 위한 라이브러리
- `react-native-sqlite-storage` : SQLite 연동 및 데이터 관리를 위한 라이브러리
- `react-native-barcode-builder` : 기프티콘(Dummy) 교환 서비스에서 기프티콘 정보를 담은 바코드 생성
- `react-native-color-picker` : 명함 템플릿 제작 시 폰트나 배경의 색 지정
- `react-native-draggable` : 명함 템플릿 제작 시 각 명함정보를 드래그하여 명함에 배치하기 위해 사용
- `react-native-dropdown-picker` : 명함 템플릿 제작 시 텍스트의 폰트 종류를 선택하기 위한 Dropdown 컴포넌트 사용
- `react-native-image-picker` : 갤러리에서 이미지를 불러오기 위한 라이브러리
- `react-native-keyboard-aware-scroll-view` : 모바일의 키보드가 올라왔을 때, 화면이 위로 밀리지 않도록 해주는 컴포넌트
- `react-native-permissions` : 모바일OS로부터 접근 권한을 얻기 위한 라이브러리
- `react-native-swiper` : Swiper 컴포넌트
- `react-native-vector-icons` : 다양한 아이콘들을 불러올 수 있는 라이브러리

### 주요 진행 과정

- 명함 데이터 및 사용자 데이터 관리를 위해 별도의 서버 구축
- FlexBox를 적극 활용하여 UI 구현
- SQLite에 영단어 데이터와 설정 데이터를 위한 테이블 생성 및 연동

### 버전 이력

- v1.0.0

### 향후 예정 연구

-

### 시연 사진

<figcaption> [메인 화면] </figcaption>

![caption="메인 화면"](/projectImgs/mat/mat-main.png "메인 화면")

<figcaption> [명함 교환(PIN 번호 발급)] </figcaption>

![](/projectImgs/mat/mat-trade1.png)

<figcaption> [명함 교환(PIN 번호 입력)] </figcaption>

![](/projectImgs/mat/mat-trade2.png)

<figcaption> [명함첩 화면] </figcaption>

![](/projectImgs/mat/mat-wallet.png)

<figcaption> [명함템플릿 제작 화면(일부)] </figcaption>

![](/projectImgs/mat/mat-template.png)

<figcaption> [더보기 화면] </figcaption>

![](/projectImgs/mat/mat-more.png)
