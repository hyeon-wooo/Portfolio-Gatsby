import React, { useEffect, useState, useRef } from "react"
import styles from "../styles/projectList.module.css"
// import { graphql, useStaticQuery } from "gatsby"
import ProjectBox from "../components/ProjectBox"
import FilterItem from "../components/FilterItem"
import Layout from "../components/Layout"
import EmptyBox50 from "../components/EmptyBox50"

const ProjectListScreen = () => {
  const projects = require("../assets/data/projects.json")

  const [filter, setFilter] = useState([])
  const [renderProjects, setRenderProjects] = useState(projects)
  const ref_selectedContainer = useRef(null)
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         projects {
  //           name
  //           tech
  //           description
  //           term
  //           link
  //         }
  //       }
  //     }
  //   }
  // `)

  let isMousedown = false
  let prevX = 0

  const updateFilter = value => {
    if (value !== "기술 스택 필터" && !filter.includes(value)) {
      setFilter([...filter, value])
    }
  }

  const filterFunc = project => {
    for (let i = 0; i < filter.length; i++) {
      if (!project.tech.includes(filter[i])) return false
    }
    return true
  }

  useEffect(() => {
    ref_selectedContainer.current.onmousedown = () => {
      isMousedown = true
    }
    ref_selectedContainer.current.onmouseup = () => {
      isMousedown = false
      prevX = 0
    }

    ref_selectedContainer.current.onmousemove = e => {
      if (isMousedown) {
        const delta = e.x - prevX
        ref_selectedContainer.current.scrollLeft -= delta
        prevX = e.x
      }
    }
  }, [])

  useEffect(() => setRenderProjects(projects.filter(filterFunc)), [filter])

  return (
    <Layout title="PROJECTS">
      <div className={styles.contentInnerContainer}>
        <div className={styles.searchContainer}>
          <div className={styles.searchSelectContainer}>
            <h3>총 {renderProjects.length}건</h3>
            <select
              className={styles.searchSelect}
              onChange={e => updateFilter(e.target.value)}
            >
              <option defaultValue>기술 스택 필터</option>
              <option>Javascript</option>
              <option>Typescript</option>
              <option>React</option>
              <option>React-Native</option>
              <option>Node.js</option>
              <option>Gatsby</option>
              <option>Python</option>
              <option>Redux</option>
            </select>
          </div>
          <div
            id="selectedContainer"
            ref={ref_selectedContainer}
            className={styles.selectedValueContainer}
          >
            {filter.map((f, idx) => {
              return (
                <FilterItem
                  value={f}
                  key={idx}
                  removeFilterItem={removedValue =>
                    setFilter(filter.filter(v => v !== removedValue))
                  }
                />
              )
            })}
          </div>
        </div>
        {renderProjects.map((p, idx) => (
          <ProjectBox key={idx} project={p} />
        ))}
        <EmptyBox50 />
      </div>
    </Layout>
  )
}

export default ProjectListScreen
