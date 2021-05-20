import React from 'react'
import styles from '../styles/myTabs.module.css'

const TabComponent = ({title, author, date, views, createdBy}) => {
  return (
    <div className={styles.tabComponentContainer}>
      <section className={styles.tabSectionA}>
        <p className={styles.tabP}>{author} - {title}</p>
      </section>
      {createdBy !== undefined &&
      <section className={styles.tabSectionC}>
        <p className={styles.tabP} >created by: {createdBy}</p>
      </section>
      }
      <section className={styles.tabSectionB}>
        <p className={styles.tabP} >{date} <i className="far fa-calendar-alt"></i></p>
      </section>
      <section className={styles.tabSectionD}>
        <p className={styles.tabP} >{views} views</p>
      </section>
    </div>
       )
}

export default TabComponent
