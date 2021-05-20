import React from 'react'
import styles from '../styles/search.module.css'
import TabComponent from '../../myTabs/components/tabComponent'
import { Link } from 'react-router-dom'

const Search = ({handleChange,results, params, searchFor}) => {
  return (
    <div className={styles.container}>
       <div className={styles.title}>
         <div><p className={styles.p}>{searchFor+"s"} that matches with: "{params}"</p></div>
         <div>
            <form>
              <label className={styles.p} htmlFor="s">Search by: </label>
                <select onChange={handleChange} id="s">
                  <option value="title">Title</option>
                  <option value="author">Author</option>
                </select>
            </form>
          </div>
       </div>
       <div className={styles.listContainer}>
           {results.map((el)=>{
               return <Link
                       key={el._id}
                       to={`/tab?s=${el._id}`}
                       className={styles.link}>
                       <TabComponent
                        key={el._id}
                        title={el.title}
                        createdBy={el.userId.username}
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
export default Search
