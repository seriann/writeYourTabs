import React from 'react'
import styles from "../styles/myTabs.module.css"
import { Link } from 'react-router-dom'
import TabComponent from './tabComponent'
import Pagination from '../../pagination/container/paginationContainer'

const MyTabs = ({tabs,pages,page}) => {
  return (
    <div className={styles.loggedContainer}>
      <div className={styles.title}>
        <p className={styles.p}>My tabs</p>
      </div>
      <div className={styles.listContainer}>
      {tabs && tabs.map((el)=> {
        return <div
               className={styles.compContainer}
               key={el._id}
               ><Link
                to={`/tab?s=${el._id}`}
                className={styles.link}>
                 <TabComponent
                  title={el.title}
                  author={el.author}
                  date={el.createdAt}
                  views={el.views}
                  />
                </Link></div>
      })}
       <div className={styles.paginationContainer}>
         <Pagination
         obj={{tabs,pages}}
         page={pages}
         redirect={`/mytabs`}
         noParams={true}
         />
       </div>
      </div>
    </div>
  )
}

export default MyTabs
