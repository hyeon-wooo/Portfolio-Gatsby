import React, { useEffect, useState, useRef } from "react"
import styles from "../styles/projectList.module.css"
import { graphql, useStaticQuery } from "gatsby"
import ProjectBox from "../components/ProjectBox"
import FilterItem from "../components/FilterItem"

const ProjectListScreen = () => {
  const [filter, setFilter] = useState([])
  const [renderProjects, setRenderProjects] = useState([])
  const ref_selectedContainer = useRef(null)
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          projects {
            name
            tech
            description
            term
            link
          }
        }
      }
    }
  `)

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
    const selectedContainer = document.getElementById("selectedContainer")
    ref_selectedContainer.current.onmousedown = e => {
      isMousedown = true
    }
    ref_selectedContainer.current.onmouseup = () => {
      isMousedown = false
      prevX = 0
    }

    ref_selectedContainer.current.onmousemove = e => {
      if (isMousedown) {
        const delta = e.x - prevX
        selectedContainer.scrollLeft -= delta
        prevX = e.x
      }
    }
    setRenderProjects(data.site.siteMetadata.projects)
  }, [])

  useEffect(
    () => setRenderProjects(data.site.siteMetadata.projects.filter(filterFunc)),
    [filter]
  )

  return (
    <div className={styles.wrap}>
      <div className={styles.centerWrap}>
        <div className={styles.topTitleContainer}>
          <div className={styles.topTitleBox}>
            <h1 className={styles.topTitle}>Projects</h1>
          </div>
        </div>
        <div className={styles.contentContainer}>
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
                  <option>React</option>
                  <option>React-Native</option>
                  <option>Node.js</option>
                  <option>Gatsby</option>
                  <option>Python</option>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectListScreen
