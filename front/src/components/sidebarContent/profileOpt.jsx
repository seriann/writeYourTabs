import React from 'react'
import { useSpring, animated } from 'react-spring'
import styles from "../../styles/profileOpt.module.css"

const Options = ({logout}) => {

const props = useSpring({
   opacity: 1,
  from:{ opacity: 0}
})

  return(
    <animated.div style={props} className={styles.container}>
      <p className={styles.p}><i class="fas fa-cog"></i> Options</p>
      <p onClick={logout} className={styles.p}><i class="fas fa-sign-out-alt"></i> Logout</p>
    </animated.div>
  )
}

export default Options
