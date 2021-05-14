import React from 'react'
import MyTabs from "../components/myTabs"
import LoginFirst from '../../errors/LoginFirst'
import styles from '../styles/myTabs.module.css'
import { useSelector } from "react-redux";
import { useSpring, animated } from 'react-spring'

const MyTabsContainer = () => {
  const logged = useSelector((state) => {
    return state.login.loggedUser
  })
  const myTabs= useSelector((state)=> {
    return state.tabs.myTabs
  })
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
      <MyTabs tabs={myTabs}/>
    }

   </animated.div>
 )
}

export default MyTabsContainer
