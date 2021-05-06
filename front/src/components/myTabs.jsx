import React from 'react'
import styles from "../styles/myTabs.module.css"
import { useSpring, animated } from 'react-spring'

const MyTabs = () => {

  const props = useSpring({
      to: { opacity: 1, transform: 'translate3d(0%,0,0)' },
      from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    })

  return (
    <div>
      MyTABS
    </div>
  )
}

export default MyTabs
