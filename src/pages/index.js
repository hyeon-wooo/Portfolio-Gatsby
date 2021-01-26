import React, { useRef } from "react"
import { Link } from "gatsby"
import HomeStyle from "../styles/home.module.css"
import { iconX, iconMenu } from "../assets/images"

export default function Home() {
  const ref_sideMenu = useRef(null)
  const ref_btnMenu = useRef(null)

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
    <div className={HomeStyle.wrap}>
      <header className={HomeStyle.header}>
        <div className={HomeStyle.headerMenuContainer}>
          <div className={HomeStyle.headerMenuBox}>
            <Link to="/projectList" className={HomeStyle.headerMenu}>
              프로젝트
            </Link>
          </div>
          <div className={HomeStyle.headerMenuBox}>
            <Link to="/profile" className={HomeStyle.headerMenu}>
              프로필
            </Link>
          </div>
          <div className={HomeStyle.headerMenuBox}>
            <Link to="/introduce" className={HomeStyle.headerMenu}>
              자기소개서
            </Link>
          </div>
          <div className={HomeStyle.headerMenuBox}>
            <Link to="/tech" className={HomeStyle.headerMenu}>
              보유 기술 현황
            </Link>
          </div>
        </div>

        <img
          ref={ref_btnMenu}
          onClick={transferSide}
          src={iconMenu}
          className={HomeStyle.btnMenu}
        />
        <div ref={ref_sideMenu} className={HomeStyle.sideMenu}>
          <div className={HomeStyle.sideMenuTitleBox}>
            <p className={HomeStyle.sideMenuTitle}>Hyeonwoo</p>
            <img
              src={iconX}
              onClick={transferSide}
              className={HomeStyle.btnX}
            />
          </div>
          <div className={HomeStyle.sideMenus}>
            <div className={HomeStyle.headerMenuBox}>
              <Link to="/projectList" className={HomeStyle.headerMenu}>
                프로젝트
              </Link>
            </div>
            <div className={HomeStyle.headerMenuBox}>
              <Link to="/profile" className={HomeStyle.headerMenu}>
                프로필
              </Link>
            </div>
            <div className={HomeStyle.headerMenuBox}>
              <Link to="/introduce" className={HomeStyle.headerMenu}>
                자기소개서
              </Link>
            </div>
            <div className={HomeStyle.headerMenuBox}>
              <Link to="/tech" className={HomeStyle.headerMenu}>
                보유 기술 현황
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div className={HomeStyle.contentContainer}>
        {/* <img src={contentImg1} alt="" className={HomeStyle.contentImg} /> */}
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

          <Link to="/projectList" className={HomeStyle.btnToProjectList}>
            PROJECT LIST
          </Link>
        </div>
      </div>
    </div>
  )
}
