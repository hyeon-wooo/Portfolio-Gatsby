import React, { useRef } from "react"
import styles from "./filterItem.module.css"

export default ({ value, removeFilterItem }) => {
  const ref_wrap = useRef(null)

  const click = () => {
    // const parent = ref_wrap.current.parentNode
    // parent.removeChild(ref_wrap.current)
    removeFilterItem(value)
  }
  const mOver = () => {
    const xBox = ref_wrap.current.children.item(0)
    if (xBox) {
      xBox.style.opacity = 1
      ref_wrap.current.style.color = "#7574b0"
    }
  }
  const mLeave = () => {
    const xBox = ref_wrap.current.children.item(0)
    if (xBox) {
      xBox.style.opacity = 0
      ref_wrap.current.style.color = "#fbfbfb"
    }
  }

  return (
    <span
      className={styles.wrap}
      ref={ref_wrap}
      onClick={click}
      onMouseOver={mOver}
      onMouseLeave={mLeave}
    >
      {value}
      <span className={styles.xBox}>X</span>
    </span>
  )
}
