import React from "react"
import { Link } from "gatsby"
import HomeStyle from "../styles/home.module.css"
import { contentImg1 } from "../assets/images"

export default function Home() {
  return (
    <div className={HomeStyle.wrap}>
      <header className={HomeStyle.header}>
        <div className={HomeStyle.headerMenuContainer}>
          <div className={HomeStyle.headerMenuBox}>
            <Link to="/projectList" className={HomeStyle.headerMenu}>
              프로젝트
            </Link>
          </div>
          <div className={HomeStyle.headerMenuBox}>
            <Link to="/" className={HomeStyle.headerMenu}>
              프로필
            </Link>
          </div>
          <div className={HomeStyle.headerMenuBox}>
            <Link to="/" className={HomeStyle.headerMenu}>
              자기소개서
            </Link>
          </div>
          <div className={HomeStyle.headerMenuBox}>
            <Link to="/" className={HomeStyle.headerMenu}>
              보유 기술 현황
            </Link>
          </div>
        </div>
        <h1 className={HomeStyle.headerTitle}>Hello to KIM HYEON WOO</h1>
      </header>
      <div className={HomeStyle.contentContainer}>
        <img src={contentImg1} alt="" className={HomeStyle.contentImg} />
        <div className={HomeStyle.contentDescription}>
          <h3 className={HomeStyle.introTitle}>방문을 환영합니다</h3>
          <p className={HomeStyle.introDescription}>
            이 사이트는 개발자 김현우의 포트폴리오를 소개하기 위한 사이트이며
            Gatsby Framework로 제작되었습니다.
          </p>
          <p className={HomeStyle.introDescription}>
            페이지 상단 메뉴를 통해 필요한 정보를 열람하실수 있으며, 김현우
            개발자의 더 많은 프로젝트가 궁금하시다면 아래의 버튼을 통해
            프로젝트를 확인해 주시길 바랍니다.
          </p>
          {/* <div className="linkContainer"> */}
          <Link to="/projectList" className={HomeStyle.btnToProjectList}>
            PROJECT LIST
          </Link>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}
