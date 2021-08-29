import React from "react"
import Layout from "../components/Layout"
import styles from "../styles/profile.module.css"
import EmptyBox50 from "../components/EmptyBox50"
import TechBox from "../components/TechBox"
import CustomTableList from "../components/CustomTable/techTable"

const techObj = require("../assets/data/tech")
const { techData, goalTechData } = techObj
const { goalTechHead, goalTechBody } = goalTechData

export default () => {
  return (
    <Layout title="TECHNOLOGY">
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
