import React, { useEffect, useState } from "react"
import styles from "../styles/projectList.module.css"
import { graphql, useStaticQuery } from "gatsby"
import ProjectBox from "../components/ProjectBox"

const ProjectListScreen = () => {
  const [filter, setFilter] = useState([])
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

  useEffect(() => {
    const selectedContainer = document.getElementById("selectedContainer")
    selectedContainer.onmousedown = e => {
      isMousedown = true
    }
    selectedContainer.onmouseup = () => {
      isMousedown = false
      prevX = 0
    }

    selectedContainer.onmousemove = e => {
      if (isMousedown) {
        const delta = e.x - prevX
        selectedContainer.scrollLeft -= delta
        prevX = e.x
      }
    }
  }, [])

  useEffect(() => {
    //
    console.log(filter)
    if (filter.length) {
      const selectedContainer = document.getElementById("selectedContainer")
      console.log(selectedContainer)

      const lastValue = filter[filter.length - 1]
      let newBox = document.createElement("span")
      newBox.className = styles.selectedValue
      newBox.innerHTML = lastValue
      selectedContainer.appendChild(newBox)
      selectedContainer.scrollLeft = selectedContainer.scrollWidth
    }
  }, [filter])

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

  const { projects } = data.site.siteMetadata

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
                className={styles.selectedValueContainer}
              ></div>
            </div>
            {projects.filter(filterFunc).map((p, idx) => (
              <ProjectBox key={idx} project={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectListScreen
