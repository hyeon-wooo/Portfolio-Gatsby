import React from "react"
import styles from "./projectBox.module.css"
import {
  react,
  javascript,
  node,
  gatsby,
  typescript,
  python,
} from "../../assets/images"
import { Link } from "gatsby"

const techImgSrc = {
  React: react,
  "React-Native": react,
  Javascript: javascript,
  "Node.js": node,
  Gatsby: gatsby,
  Typescript: typescript,
  Python: python,
}

export default ({ project }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.imgContainer}>
        <img
          className={styles.projectImg}
          src={`/projectImgs/${project.link}/${project.link}-main.png`}
          onLoad={e => {
            const loadedImg = e.target
            const aspect = loadedImg.width / loadedImg.height
            loadedImg.className +=
              aspect >= 1.3 ? " projectImg-horizontal" : " projectImg-vertical"
          }}
        />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.infoSection1}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <ul>
            <li>기간: {project.term}</li>
          </ul>
        </div>

        <div className={styles.techContainer}>
          {project.tech.map((t, idx) => (
            <img
              key={idx}
              className={styles.imgTech}
              src={techImgSrc[t]}
              alt={t}
              title={t}
            />
          ))}
        </div>
      </div>
      <div className={styles.btnContainer}>
        <Link to={`/project/${project.link}`} className={styles.btnDetail}>
          Detail
        </Link>
      </div>
    </div>
  )
}
