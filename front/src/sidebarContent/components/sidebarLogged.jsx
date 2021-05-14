import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from "../styles/sidebarLogged.module.css"
import Options from "./profileOpt"
import { useSpring, animated } from 'react-spring'

const SidebarContent = ({user, logout}) => {

  const location = useLocation()
  const [isVisible, setIsVisible] = useState(false)
  const props = useSpring({
      to: { opacity: 1, transform: 'translate3d(0%,0,0)' },
      from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    })
  const handleClick = () => {
    setIsVisible(!isVisible)
  }

  return(
    <animated.div style={props} className={styles.container}>
      <div className={styles.user}>
       <img className={styles.img} src={user.image} alt="img"/>
       <section className={styles.userCol}>
         <p className={styles.name}>{user.name}</p>
         <p className={styles.username}>{user.username}</p>
       </section>
       <button onClick={handleClick} className={isVisible? styles.buttonActive:styles.button}><Link className={styles.button}><i className="fas fa-angle-down"></i></Link></button>
      </div>
      {
        isVisible &&
        <Options logout={logout}/>
      }



    </animated.div>
  )
}

export default SidebarContent
