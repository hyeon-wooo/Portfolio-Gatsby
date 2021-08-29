import React, { useEffect, useRef } from "react"
import Layout from "../../components/Layout"
import styles from "../../styles/project.module.css"
// import IntroduceBox from "../components/IntroduceBox"
import EmptyBox50 from "../../components/EmptyBox50"
import { graphql } from "gatsby"
import Star from "@hyeonwoo/shootingstar-html"

// const introData = require("../assets/data/introduce.json")

export default ({ data }) => {
  const ref_container = useRef(null)

  useEffect(() => {
    ref_container.current.innerHTML =
      data.markdownRemark.html + ref_container.current.innerHTML

    const wrapper = document.querySelector("#shootingstar")
    const s = new Star(wrapper)
  }, [])
  return (
    <Layout title="Project: shootingstar">
      <div ref={ref_container} className={styles.projectInnerContainer}>
        <div
          id="shootingstar"
          style={{
            width: "100%",
            height: "300px",
            backgroundColor: "#000",
            position: "relative",
          }}
        />
        <EmptyBox50 />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    markdownRemark(frontmatter: { title: { eq: "ShootingStar" } }) {
      html
      fileAbsolutePath
    }
  }
`
