import React from 'react'
import styles from "../styles/myTabs.module.css"
import { useSpring, animated } from 'react-spring'

const MyTabs = () => {

  const props = useSpring({
      to: { opacity: 1, transform: 'translate3d(0%,0,0)' },
      from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    })

  return (
    <div className={styles.loggedContainer}>
      <div className={styles.title}>
        <p className={styles.p}>My tabs</p>
      </div>
      <div className={styles.listContainer}>
      </div>
    </div>
  )
}

export default MyTabs
