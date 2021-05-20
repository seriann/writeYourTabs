import React from 'react'
import styles from "../styles/myTabs.module.css"
import { Link } from 'react-router-dom'
import TabComponent from './tabComponent'

const MyTabs = ({tabs}) => {
  return (
    <div className={styles.loggedContainer}>
      <div className={styles.title}>
        <p className={styles.p}>My tabs</p>
      </div>
      <div className={styles.listContainer}>
      {tabs.map((el)=> {
        return <Link
                key={el._id}
                to={`/tab?s=${el._id}`}
                className={styles.link}>
                 <TabComponent
                  title={el.title}
                  author={el.author}
                  date={el.createdAt}
                  views={el.views}
                  />
                </Link>
      })}
      </div>
    </div>
  )
}

export default MyTabs
