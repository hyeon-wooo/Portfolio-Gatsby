import React from "react"
import styles from "./customTable.module.css"

export default ({ dHead, dBody, title }) => {
  return (
    <div className={styles.section_part}>
      <div className={styles.area_title}>
        <h2 className={styles.section_title}>{title}</h2>
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
                  <td className={styles.lineup_center}>{b[0]}</td>
                  <td className={styles.lineup_center}>
                    {b[1].map((d, idx) => (
                      <li key={idx} className={styles.tableLi}>
                        {d}
                      </li>
                    ))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
