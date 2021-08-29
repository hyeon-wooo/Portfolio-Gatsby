---
title: "ShootingStar"
date: "2021-08-27"
---

# shootingstar-html

_별똥별이 내리는 HTML 엘리먼트_

- 기술 스택: `Javascript`
- Github 저장소: [링크](https://github.com/bvv8808/shootingstar-html)
- npm 저장소: [링크](https://www.npmjs.com/package/@hyeonwoo/shootingstar-html)

### 주요 기능

1. 내리는 별똥별의 속도나 빈도, 색깔 등을 조절하는 옵션 제공
2. 밤하늘처럼 별들이 반짝이는 효과와 별 갯수, 색깔 등을 조정하는 옵션 제공
3. 별도의 웹페이지를 통해 여러 옵션들을 다양하게 조작해보고 적당한 옵션이 적용된 코드를 복사할 수 있는 헬퍼 제공

### 사용 라이브러리

-

### 주요 진행 과정

- setInterval이 아닌 setTimeout 속에 setTimeout을 넣는 방식으로 Random Interval 효과 제공
- 지정된 옵션에 따라 달라지는 애니메이션 함수를 만들고, 지정된 시간마다 별똥별DOM을 만들어 애니메이션 수행 후 제거
- 옵션의 Getter/Setter를 만들고, 각 Setter는 유효성 검사 후 통과 시 옵션에 반영

### 버전 이력

- v1.2.3

### 향후 예정 연구

-

### 시연 사진

<figcaption> [헬퍼] </figcaption>

![](/projectImgs/shootingstar-html/helper.png)
