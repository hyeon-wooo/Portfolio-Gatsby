import React from "react"
import styles from "./introduceBox.module.css"

export default ({ title, content }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.techTitleContainer}>
        <h3 className={styles.techTitle}>{title}</h3>
      </div>
      <div className={styles.techDetailContainer}>{content}</div>
    </div>
  )
}
