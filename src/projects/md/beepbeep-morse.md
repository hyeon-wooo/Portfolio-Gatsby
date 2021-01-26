---
title: "BeepBeep-Morse"
date: "2021-01-26"
---

# BeepBeep-Morse

_입력한 텍스트를 모스 부호로 변환하여 출력하는 윈도우 프로그램_

- 기술 스택: `Python`
- GitHub 저장소: [링크](https://github.com/bvv8808/BeepBeep-Morse)

### 주요 기능

1. 영문 텍스트 입력 시 각 철자를 모스 부호로 변환하여 소리 출력

### 사용 라이브러리

- `PyQT5`: 파이썬으로 데스크탑 앱을 쉽게 만들게 해주는 라이브러리

### 주요 진행 과정

- UI 구축
- 각 철자와 2진수 형태의 모스 부호를 매핑
- Convert 버튼 클릭 시 각 철자를 모스 부호(2진수)로 변환하여 0이면 짧게, 1이면 길게 시스템 사운드를 출력한 후 모스 부호 텍스트를 화면에 출력

### 버전 이력

- v1.0.0

### 향후 예정 연구

-

### 시연 사진

<figcaption> [메인 화면] </figcaption>

![caption="메인 화면"](/projectImgs/beepbeep-morse/beepbeep-morse-main.png "메인 화면")

<figcaption> [시연] </figcaption>

![](/projectImgs/beepbeep-morse/beepbeep-morse-play.gif)
