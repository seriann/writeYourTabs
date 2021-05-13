import React from 'react'
import styles from "../styles/myTabs.module.css"
import TabComponent from './tabComponent'

const MyTabs = ({tabs}) => {
console.log('aver',tabs);
  return (
    <div className={styles.loggedContainer}>
      <div className={styles.title}>
        <p className={styles.p}>My tabs</p>
      </div>
      <div className={styles.listContainer}>
      {tabs.map((el)=> {
        return <TabComponent
                key={el._id}
                title={el.title}
                author={el.author}
                date={el.createdAt}
                views={el.views}
                />
      })}
      </div>
    </div>
  )
}

export default MyTabs
