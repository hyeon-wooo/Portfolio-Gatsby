import React, { useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import HomeStyle from "../styles/home.module.css"
import {
  iconX,
  iconMenu,
  intro1,
  intro2,
  intro3,
  arrowDown,
} from "../assets/images"

export default function Home() {
  const ref_sideMenu = useRef(null)
  const ref_btnMenu = useRef(null)
  const refMainMenu = useRef(null)

  const [mainMenuOfffset, setMenuOffset] = useState()

  useEffect(() => {
    console.log("@@", mainMenuOfffset)
  }, [mainMenuOfffset])

  useEffect(() => {
    setMenuOffset(refMainMenu.current.offsetTop)
  }, [])

  const transferSide = () => {
    if (ref_sideMenu.current.style.display === "block") {
      ref_sideMenu.current.style.display = "none"
      ref_btnMenu.current.style.display = "block"
    } else {
      ref_sideMenu.current.style.display = "block"
      ref_btnMenu.current.style.display = "none"
    }
  }
  return (
    <>
      <div className={HomeStyle.mainContentWrapper}>
        <div style={{ flex: 1 }} />
        <div
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <h1 className={HomeStyle.introTitle}>개발자 김현우의 포트폴리오</h1>
          <p className={HomeStyle.introDescription}>
            저는 주니어 프론트엔드 개발자 김현우입니다.
          </p>
          <p className={HomeStyle.introDescription}>
            더 쉽고 자유로운 프로그래밍을 위한 써드파티 라이브러리 제작에 관심이
            많습니다.
          </p>
        </div>
        <div
          style={{
            flex: 1,
            justifyContent: "center",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <img
            src={arrowDown}
            className={HomeStyle.imgArrow}
            onClick={() => {
              console.log("@@2", mainMenuOfffset)
              window.scrollTo({ top: mainMenuOfffset, behavior: "smooth" })
            }}
          />
        </div>
      </div>
      <div
        className={HomeStyle.mainMenuWrapper}
        id="mainMenu"
        ref={refMainMenu}
      >
        {/* <div className={HomeStyle.bgImgWrapper}></div> */}

        <div className={HomeStyle.mainMenuContainer}>
          <Link to="/projectList" className={HomeStyle.mainMenu}>
            <div className={HomeStyle.mainMenuBox}>
              <h3>PROJECT</h3>
              <div className={HomeStyle.borderBox} />
              <h2>프로젝트</h2>
            </div>
          </Link>
          <Link to="/profile" className={HomeStyle.mainMenu}>
            <div className={HomeStyle.mainMenuBox}>
              <h3>PROFILE</h3>
              <div className={HomeStyle.borderBox} />
              <h2>프로필</h2>
            </div>
          </Link>
          <Link to="/introduce" className={HomeStyle.mainMenu}>
            <div className={HomeStyle.mainMenuBox}>
              <h3>INTRODUCE</h3>
              <div className={HomeStyle.borderBox} />
              <h2>자기소개서</h2>
            </div>
          </Link>
          <Link to="/tech" className={HomeStyle.mainMenu}>
            <div className={HomeStyle.mainMenuBox}>
              <h3>TECH</h3>
              <div className={HomeStyle.borderBox} />
              <h2>보유 기술 현황</h2>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
