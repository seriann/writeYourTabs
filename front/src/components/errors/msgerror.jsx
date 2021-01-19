import React from 'react'
import { useSpring, animated } from 'react-spring'
import styles from "../../styles/errmsg.module.css"

export default () => {

  const props = useSpring({
     opacity: 1,
    from:{ opacity: 0}
  })

  return <animated.p style={props} className={styles.err}>Sorry, something went wrong</animated.p>
}
