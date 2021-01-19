import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from "../../styles/sidebarLogged.module.css"
import Options from "./profileOpt"

const SidebarContent = ({user, logout}) => {

  const [isVisible, setIsVisible] = useState(false)

  const handleClick = () => {
    setIsVisible(!isVisible)
  }

  return(
    <div className={styles.container}>
      <div className={styles.user}>
       <img className={styles.img} src={user.image} alt="img"/>
       <section className={styles.userCol}>
         <p className={styles.name}>{user.name}</p>
         <p className={styles.username}>{user.username}</p>
       </section>
       <button onClick={handleClick} className={styles.button}><Link className={styles.button}><i className="fas fa-angle-down"></i></Link></button>
      </div>
      {
        isVisible?
        <Options logout={logout}/>
        :
       null
      }

      <div className={styles.inf}>
      </div>
    </div>
  )
}

export default SidebarContent
