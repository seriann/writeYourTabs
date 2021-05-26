import React from 'react'
import styles from '../styles/search.module.css'
import TabComponent from '../../myTabs/components/tabComponent'
import UserCard from './UserCard'
import { Link } from 'react-router-dom'
import Loader from '../../Loader/Loader'

const Search = ({isLoading,boolTabs,handleChange,results, params, searchFor}) => {
  return (
    <div className={styles.container}>
       <div className={styles.title}>
         <div><p className={styles.p}>{searchFor+"s"} that matches with: "{params}"</p></div>

            <form>
              <label className={styles.p} htmlFor="s">Search by: </label>
                <select onChange={handleChange} id="s">
                  <option value="title">Title</option>
                  <option value="author">Author</option>
                </select>
            </form>
            <div>
          </div>
       </div>
       <div className={isLoading? styles.listContainer2 : styles.listContainer}>

           {
             isLoading === true?
             <div className={styles.loaderContainer}>
               <Loader/>
             </div>
             :
             boolTabs === true?
             results.map((el)=>{
               return <Link
                       key={el._id}
                       to={`/tab?s=${el._id}`}
                       className={styles.link}>
                       <TabComponent
                        title={el.title}
                        createdBy={el.userId.username}
                        author={el.author}
                        date={el.createdAt}
                        views={el.views}
                       />
                       </Link>
             })
             :boolTabs === false?
             results.map((el)=>{
              console.log("pasa");
              return <div
                      key={el._id}
                      className={styles.usersContainer}>
                      <Link
                      to={`/home`}
                      className={styles.link}
                      >
                       <UserCard
                        image={el.image}
                        name={el.name}
                        username={el.username}
                       />
                      </Link></div>
                   })
                   :null
           }

       </div>
    </div>
  )
}
export default Search
