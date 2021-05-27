import React from 'react'
import styles from '../styles/search.module.css'

export default ({msg}) => {
  return <div className={styles.errContainer}><p className={styles.p2}>{msg}</p></div>
}
