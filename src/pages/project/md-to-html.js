import React, { useEffect, useRef } from "react"
import Layout from "../../components/Layout"
import styles from "../../styles/project.module.css"
// import IntroduceBox from "../components/IntroduceBox"
import EmptyBox50 from "../../components/EmptyBox50"
import { graphql } from "gatsby"

// const introData = require("../assets/data/introduce.json")

export default ({ data }) => {
  const ref_container = useRef(null)

  useEffect(() => {
    ref_container.current.innerHTML =
      data.markdownRemark.html + ref_container.current.innerHTML
  }, [])
  return (
    <Layout title="Project: Node-Markdown-To-HTML">
      <div ref={ref_container} className={styles.projectInnerContainer}>
        <EmptyBox50 />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    markdownRemark(frontmatter: { title: { eq: "Node-Markdown-To-HTML" } }) {
      html
      fileAbsolutePath
    }
  }
`
