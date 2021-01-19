import React from 'react'
import styles from "../styles/home.module.css"
import { useSpring, animated } from 'react-spring'

const Home = () => {

  const props = useSpring({
    to: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
  })

  return (
    <animated.div style={props} className={styles.container}>
     HOME
    </animated.div>
  )
}

export default Home
