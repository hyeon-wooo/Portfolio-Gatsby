import React from "react"
import Layout from "../components/Layout"
import styles from "../styles/profile.module.css"
import CustomTable from "../components/CustomTable"
import { me } from "../assets/images"

import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail"
import { HiOutlineHome } from "@react-icons/all-files/hi/HiOutlineHome"
import { AiOutlineStar } from "@react-icons/all-files/ai/AiOutlineStar"

const profileData = require("../assets/data/profile.json")
const { eduHead, eduBody } = profileData.edu
const { actHead, actBody } = profileData.act
const { cirtHead, cirtBody } = profileData.cirtification

export default () => {
  return (
    <Layout title="PROFILE">
      <div className={styles.contentInnerContainer}>
        <div className={styles.profileBox}>
          <img src={me} alt="프로필 사진" className={styles.profileImg} />
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
            <div className={styles.infoInnerBox}>
              <AiOutlineStar color="#333" />
              <a href="https://github.com/bvv8808" className={styles.link}>
                https://github.com/bvv8808
              </a>
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
