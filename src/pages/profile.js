import React from "react"
import Layout from "../components/Layout"
import styles from "../styles/profile.module.css"
import CustomTable from "../components/CustomTable"
import { profile } from "../assets/images"

import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail"
import { HiOutlineHome } from "@react-icons/all-files/hi/HiOutlineHome"
import { AiOutlineStar } from "@react-icons/all-files/ai/AiOutlineStar"

const eduHead = ["재학기간", "구분", "학교명(소재지)", "전공", "학점"]

const eduBody = [
  [
    "2015.03 ~ 현재",
    "재학중",
    "성결대학교(경기)",
    "미디어소프트웨어",
    "3.75 / 4.5",
  ],
  ["2012.03 ~ 2015.02", "졸업", "신한고등학교", "이과계열", "-"],
]

const actHead = ["활동명", "내용", "기간", "구분"]
const actBody = [
  [
    "학과 학생회",
    "	기획부 일원으로 학생회 행사 기획과 회의록 관리",
    "2015.03 ~ 2015.11",
    "교내활동",
  ],
  [
    "학과 학생회",
    "학술부 일원으로 교내 행사 사진 촬영 및 개제",
    "2015.12 ~ 2016.07",
    "교내활동",
  ],
  [
    "학과 과대표",
    "학과 과대표로서 수업 관련 공지 전달 및 학생회 행사 동참",
    "2019.03 ~ 2019.11",
    "교내활동",
  ],
  [
    "학과 부학회장",
    "학과 부학회장으로서 학과 학생회 운영",
    "2019.12 ~ 2020.11",
    "교내활동",
  ],
]

const cirtHead = ["자격명", "취득일", "발행처"]
const cirtBody = [
  ["COS (Scratch) 1급", "2018.08", "YBM IT"],
  ["한국사능력검정 2급", "2018.11", "국사편찬위원회"],
  ["COS Pro(Python) 1급", "2019.02", "YBM IT"],
  ["COS Pro(Java) 1급", "2019.08", "YBM IT"],
  ["리눅스마스터 2급", "2019.10", "한국정보통신인력개발센터"],
  ["운전면허 1종 보통", "2016.01", "경찰청(운전면허시험관리단)"],
]

export default () => {
  return (
    <Layout title="Profile">
      <div className={styles.contentInnerContainer}>
        <div className={styles.profileBox}>
          <img src={profile} alt="프로필 사진" className={styles.profileImg} />
          <div className={styles.infoContainer}>
            <div className={styles.infoInnerBox}>
              <h3>김현우</h3>
              <p>1997.01 | 남</p>
            </div>
            <div className={styles.infoInnerBox}>
              <AiOutlineMail color="#333" />
              <p>hyeonwoo.v24@gmail.com</p>
            </div>
            <div className={styles.infoInnerBox}>
              <HiOutlineHome color="#333" />
              <p>경기도 평택시</p>
            </div>
            <div className={styles.infoInnerBox}>
              <AiOutlineStar color="#333" />
              <p>육군 병장 만기제대 | 2016.10 - 2018.07</p>
            </div>
          </div>
        </div>
        <CustomTable dHead={eduHead} dBody={eduBody} title="학력" />
        <CustomTable dHead={actHead} dBody={actBody} title="대외활동" />
        <CustomTable dHead={cirtHead} dBody={cirtBody} title="자격증" />
        <div style={{ height: "20px" }}></div>
      </div>
    </Layout>
  )
}
