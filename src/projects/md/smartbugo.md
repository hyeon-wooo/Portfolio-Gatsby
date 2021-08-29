---
title: "Smartbugo"
date: "2021-08-27"
---

# 스마트부고

_모바일 부조 서비스_

- 기술 스택: `React Native`, `Typescript`
- GitHub 저장소: [링크](https://github.com/bvv8808/RN-smartbugo)
- Google Play 등록 어플: [링크](https://play.google.com/store/apps/details?id=com.smartbugo)
- App Store 등록 어플: [링크](https://apps.apple.com/kr/app/%EC%8A%A4%EB%A7%88%ED%8A%B8%EB%B6%80%EA%B3%A0/id1573556681)

### 주요 기능

1. 부고장 생성
   - 장례식장, 고인, 상주, 발인 정보 입력하여 부고장 생성
2. 부고 검색
   - 상주명/장례식장명으로 부고장을 검색하여 부고 상세 정보 조회
3. 부고장
   - 해당 장례식장으로 바로 길안내를 시작할 수 있도록 내비게이션 어플 연결
   - 조문메시지 작성 및 조회
   - 부의금서비스를 신청한 상주들의 계좌정보 조회
   - 해당 빈소로 근조화환 주문
4. 부의금서비스
   - 자신이 상주인 한 부고에 대해 부의금을 받을 계좌를 등록하는 서비스
   - 조문객들이 상주에게 계좌를 따로 묻지 않아도 상주의 계좌를 문자로 받을 수 있음
5. 근조화환 주문
   - 어플을 통해 원하는 빈소로 다양한 근조화환을 바로 주문
6. 부고 내역
   - 자신이 조문한 부고 내역이나 상주 자신이 받은 부조 내역을 작성하고 조회할 수 있음
   - 상주 자신에게 주문된 근조화환들에 대해 일정 비율의 정산을 받는데, 실시간 정산 금액을 확인할 수 있음
7. 부고 공유
   - 원하는 부고장을 누구든지 다른 사람에게 공유하여 알릴 수 있음
   - 링크가 전송 되며, 클릭 시 어플이 깔려있다면 어플로 연결하고 그렇지 않다면 모바일웹으로 연결
8. 근조화환 상품 공유
   - 근조화환 상품 정보를 카카오톡이나 문자로 공유
   - 링크가 전송 되며, 클릭 시 어플이 깔려있다면 어플로 연결하고 그렇지 않다면 모바일웹으로 연결

### 사용 라이브러리

- `@apollo/client`: 효율적이고 편리한 GraphQL 통신 관련 hooks와 캐시 기능을 제공
- `@react-native-community/async-storage` : 영속 데이터 저장
- `@react-native-community/datetimepicker` : Date picker 컴포넌트 (Android)
- `react-native-date-picker`: Date picker 컴포넌트 (iOS)
- `iamport-react-native`: iamport PG결제 서비스 연동, 계좌 실명 인증
- `react-native-device-info`: 기기 고유 ID를 얻기 위해 사용
- `react-native-linear-gradient`: 그래디언트 뷰 컴포넌트
- `react-native-nmap`: 네이버 지도 컴포넌트
- `react-native-router-flux`: react-navigation을 편리하게 사용할 수 있도록 개량한 내비게이터
- `react-native-splash-screen`: 앱의 Native Splash Screen 제어
- `react-native-vector-icons`: 다양한 아이콘 제공
- `react-native-webview`: 웹뷰 컴포넌트
- `redux`: 전역 상태 관리

### 주요 진행 과정

0. 로그인 및 회원가입
   - 사용자는 일반회원과 장례지도사 회원으로 나뉘며, 장례지도사는 별도의 회원가입을 진행하고 일반회원은 회원가입 절차 없이 휴대폰 본인인증을 통해 바로 로그인한다
   - 본인인증은 NICE에 서비스를 신청해서 전달받은 모듈 및 페이지를 그누보드 웹서버(본인 관할 아님)에 장착하고, 전달받은 해당 페이지에 window.ReactNativeWebView.postMessage 코드를 추가한 상태에서 웹뷰를 띄워 진행
1. 부고장 생성
   - 장례식장 정보를 입력할 때 네이버 검색 API를 이용하여 장례식장의 좌표 및 주소까지 얻어와서 서버에 전달
   - Platform Specific Picker를 사용하여 임종일시 및 발인일시 입력
2. 부고 검색
   - 상주명/장례식장 등 searchKeyword를 인자로 넘겨 서버로부터 데이터 fetch
3. 부고장
   - 서버로부터 부고 상세 데이터를 받아와서 화면에 표시
   - 부고 정보 중 장례식장 좌표 데이터를 활용하여 네이버 지도 컴포넌트를 렌더링하고, 카카오내비와 티맵 어플리케이션으로 길안내 연결 (Linking.openURL(스키마://좌표))
4. 부의금 서비스
   - 사용자 자신이 속한 부고 목록을 받아와서 서비스를 신청할 부고 하나를 선택하게 함
   - 사용자가 입력한 계좌정보를 iamport API를 이용하여 계좌 실명 인증
   - 서비스 이용 요금 결제: KG이니시스 PG사와 계약하고 iamport에 연동하여 iamport-react-native 라이브러리에서 제공하는 모듈로 일반 카드결제 및 간편결제를 쉽게 적용
5. 근조화환
   - 카테고리별 상품 목록을 서버로부터 fetch
   - 결제 방식은 4 부의금 서비스와 동일
6. 부고 내역
   - 사용자가 작성한 부고 내역은 AsyncStorage에 영속적으로 저장
7. 부고 공유
   - 카카오톡 공유: custom bridge를 만들어 네이티브 상에서 kakaoSDK 연동. 카카오 링크 SDK를 활용하여 정해진 템플릿대로 부고 정보를 카카오톡으로 공유.
   - 문자 공유: 문자 앱을 열면서 body에 템플릿 및 링크를 입력.
8. 근조화환 상품 공유 (부고 공유와 동일)

### 시연 사진

<figcaption> [메인 화면] </figcaption>

![caption="메인 화면"](/projectImgs/smartbugo/main.png "메인 화면")

<figcaption> [로그인] </figcaption>

![](/projectImgs/smartbugo/smartbugo-login.png)

<figcaption> [부고장] </figcaption>

![](/projectImgs/smartbugo/smartbugo-obituary.png)

<figcaption> [장례식장 좌표로 자동 안내] </figcaption>

![](/projectImgs/smartbugo/smartbugo-navi.png)

<figcaption> [부고장 공유] </figcaption>

![](/projectImgs/smartbugo/smartbugo-sendbugo.png)

<figcaption> [근조화환 판매상품 목록 및 상품 공유] </figcaption>

![](/projectImgs/smartbugo/smartbugo-flower.png)

<figcaption> [근조화환 결제] </figcaption>

![](/projectImgs/smartbugo/smartbugo-payment.png)

<figcaption> [근조화환 결제 (간편결제)] </figcaption>

![](/projectImgs/smartbugo/smartbugo-payment2.png)
