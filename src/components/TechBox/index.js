import React from "react"
import styles from "./techBox.module.css"

export default ({ techTitle, techDetails }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.techTitleContainer}>
        <h3 className={styles.techTitle}>{techTitle}</h3>
      </div>
      <div className={styles.techDetailContainer}>
        {techDetails.map((d, idx) => (
          <li className={styles.techLi} key={idx}>
            {d}
          </li>
        ))}
      </div>
    </div>
  )
}
