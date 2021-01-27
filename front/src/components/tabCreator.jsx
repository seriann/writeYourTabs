import React, {useState} from 'react'
import styles from "../styles/tabCreator.module.css"
import { useSpring, animated } from 'react-spring'
import Tab from "./tabs/start"

const TabCreator = () => {
 const [fretNum, setFretNum] = useState(0)
 //const [input, setInput] = useState("")
 const props = useSpring({
      to: { opacity: 1, transform: 'translate3d(0%,0,0)' },
      from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    })

const handleChange = (e) => {
  setFretNum(e.target.value)
  console.log(fretNum);
}

  return (
     <animated.div style={props} className={styles.container}>
       <div className={styles.sheet}>
          <div className={styles.optionsContainer}>
            <section>
              <h4 className={styles.h4}>put the fret number to insert: </h4>
              <input className={styles.input} onChange={handleChange} value={fretNum}/>
            </section>
          </div>
         <Tab fretNum={fretNum} />
       </div>
     </animated.div>
  )
}

export default TabCreator
