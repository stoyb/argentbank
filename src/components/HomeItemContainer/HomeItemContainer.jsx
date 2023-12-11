import React from 'react'
import styles from './HomeItemContainer.module.css'

const HomeItemContainer = ({logo, legend, title, text}) => {
  return (
    <div className={styles.homeItemContent}>
          <img src={logo} alt={legend} className={styles.homeItemIcon} />
          <h3 className={styles.homeItemTitle}>{title}</h3>
          <p className={styles.homeItemText}>{text}</p>
    </div>
  )
}

export default HomeItemContainer