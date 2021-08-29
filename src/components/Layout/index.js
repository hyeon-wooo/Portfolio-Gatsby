import React from "react"
import styles from "./layout.module.css"

export default ({ children, title }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.centerWrap}>
        <div className={styles.topTitleContainer}>
          {/* <div className={styles.topTitleBox}> */}
          <h1 className={styles.topTitle}>{title}</h1>
          {/* </div> */}
        </div>
        <div className={styles.contentContainer}>{children}</div>
      </div>
    </div>
  )
}
