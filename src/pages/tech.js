import React from "react"
import Layout from "../components/Layout"
import styles from "../styles/profile.module.css"
import EmptyBox50 from "../components/EmptyBox50"
import TechBox from "../components/TechBox"
import CustomTableList from "../components/CustomTable/techTable"

const techData = [
  {
    title: "HTML5, CSS3",
    details: ["media query, flex box를 이용한 반응형 웹 제작 가능"],
  },
  {
    title: "Javascript, Typescript",
    details: [
      '"주력 언어"',
      "코어 객체 메서드 사용 숙달",
      "실행 컨텍스트, 스코프, 프로토타입 등 동작 원리 숙지",
      "ES6+ 문법 및 비동기 처리 숙달",
    ],
  },
  {
    title: "React",
    details: [
      "함수형 컴포넌트 및 Hooks 사용 가능",
      "컴포넌트 생애 주기 숙지",
      "Ajax 활용 가능",
    ],
  },
  {
    title: "React Native",
    details: [
      "자율적으로 필요한 라이브러리 검색 및 적용 가능",
      "Navigation 사용 숙달",
      "Ajax 활용 가능",
      "Google Play에 어플 런칭 경험 (운영X)",
    ],
  },
  {
    title: "Vue.js",
    details: [
      "간단한 컴포넌트 작성, 기초적인 데이터 바인딩 및 라우팅이 가능한 수준",
    ],
  },
  {
    title: "Gatsby.js",
    details: [
      "React와 Graphql을 기반으로 하는 Gatsby.js를 이용하여 정적사이트 생성 가능",
      "본 사이트가 Gatsby로 제작한 사이트입니다",
    ],
  },
  {
    title: "Redux",
    details: [
      "전역 State 생성 및 Action 적용",
      "React 컴포넌트에서 전역 State 변화에 대응하여 re-rendering 가능",
    ],
  },
  {
    title: "Node.js",
    details: [
      "Express 프레임워크를 이용하여 서버 구축 가능",
      "MariaDB, MongoDB 연동 가능",
      "Json Web Token을 이용한 사용자 인증",
    ],
  },
  {
    title: "Git & GitHub",
    details: [
      "Stage 관리, 커밋 생성 및 체크아웃",
      "원격 저장소에 Push, Pull",
      "Branch 생성, 전환 및 병합",
    ],
  },
  {
    title: "Unity 3D",
    details: [
      "서버를 두어 연동하는 수준은 아님",
      "카메라 제어 및 모델의 중력 질량 운동 등을 적용하며 자유로운 스크립트 작성과 Scene 전환이 가능한 수준",
    ],
  },
  {
    title: "MariaDB, MySQL",
    details: ["데이터 CRUD, 서브쿼리, JOIN, 외래키 추가 등 기본적인 수준"],
  },
  {
    title: "MongoDB",
    details: ["데이터 CRUD가 가능한 기초적인 수준"],
  },
]

const goalTechHead = ["기술명", "목표 수준"]
const goalTechBody = [
  ["Graphql", ["CRUD", "다양한 프레임워크에서 연동"]],
  ["CI / CD", ["배포 자동화 숙달"]],
]

export default () => {
  return (
    <Layout title="Technology">
      <div className={styles.contentInnerContainer}>
        <EmptyBox50 />
        <h2>보유 기술</h2>
        {techData.map((t, idx) => (
          <TechBox key={idx} techTitle={t.title} techDetails={t.details} />
        ))}

        <CustomTableList
          dHead={goalTechHead}
          dBody={goalTechBody}
          title="학습 예정 기술"
        />
        <EmptyBox50 />
      </div>
    </Layout>
  )
}
