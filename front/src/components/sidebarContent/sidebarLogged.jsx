import React from 'react'
import styles from "../../styles/sidebarLogged.module.css"
import { Link } from 'react-router-dom'

const SidebarContent = ({user}) => {
  console.log("info",user);
  return(
    <div className={styles.container}>
      <div className={styles.user}>
       <img className={styles.img} src={user.image} alt="img"/>
       <section className={styles.userCol}>
         <p className={styles.name}>{user.name}</p>
         <p className={styles.username}>{user.username}</p>
       </section>
       <button className={styles.button}><Link className={styles.button}><i className="fas fa-angle-down"></i></Link></button>
      </div>

      <div className={styles.inf}>
      </div>
    </div>
  )
}

export default SidebarContent
