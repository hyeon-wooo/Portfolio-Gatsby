import React from "react"
import styles from "./customTable.module.css"

export default ({ dHead, dBody, title }) => {
  return (
    <div className={styles.section_part}>
      <div className={styles.area_title}>
        <h3 className={styles.section_title}>{title}</h3>
      </div>

      <div className={styles.part_table}>
        <table className={styles.sectionTable} cellSpacing="0" cellPadding="0">
          <thead>
            <tr>
              {dHead.map((h, idx) => (
                <th key={idx} scope="col">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dBody.map((b, idx) => {
              return (
                <tr key={idx}>
                  {b.map((d, idx) => (
                    <td key={idx} className={styles.lineup_center}>
                      {d}
                    </td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
