import React, {useState} from 'react'
import styles from "../styles/tabCreator.module.css"
import { useSpring, animated } from 'react-spring'
import Tab from "./tabs/start"

const TabCreator = () => {
 const [fretNum, setFretNum] = useState(0)

  const props = useSpring({
      to: { opacity: 1, transform: 'translate3d(0%,0,0)' },
      from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    })

  return (
     <animated.div style={props} className={styles.container}>
       <div className={styles.sheet}>
         <Tab fretNum={fretNum} />
       </div>
     </animated.div>
  )
}

export default TabCreator
