import React from "react"
import Layout from "../components/Layout"
import styles from "../styles/profile.module.css"
import IntroduceBox from "../components/IntroduceBox"
import EmptyBox50 from "../components/EmptyBox50"

const introData = require("../assets/data/introduce.json")

export default () => {
  return (
    <Layout title="INTRODUCE">
      <div className={styles.contentInnerContainer}>
        {introData.map((d, idx) => (
          <IntroduceBox key={idx} title={d.title} content={d.content} />
        ))}
        <EmptyBox50 />
      </div>
    </Layout>
  )
}
