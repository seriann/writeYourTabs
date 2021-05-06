import React from 'react'
import MyTabs from "../components/myTabs"
import LoginFirst from '../components/errors/LoginFirst'
import styles from '../styles/myTabs.module.css'
import { useSpring, animated } from 'react-spring'

const MyTabsContainer = ({logged}) => {
  const props = useSpring({
      to: { opacity: 1, transform: 'translate3d(0%,0,0)' },
      from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    })

  return (
   <animated.div style={props} className={styles.container}>
    {
      JSON.stringify(logged) == "{}"?
      <LoginFirst />
      :
      <MyTabs />
    }

   </animated.div>
 )
}

export default MyTabsContainer
