import React, {useState, useEffect} from 'react'
import styles from "../styles/tabCreator.module.css"
import { useSpring, animated } from 'react-spring'
import Tab from "./tabs/start"
import Line from "./tabs/extraLine"
import { createSvgText } from "./custom_functions/functions"
import { uniqid } from "./custom_functions/functions"

const TabCreator = () => {
 const [fretNum, setFretNum] = useState(0)
 const [linesCounter, setLinesCounter] = useState(1)
 const [id, setId] = useState("")
 const props = useSpring({
      to: { opacity: 1, transform: 'translate3d(0%,0,0)' },
      from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    })

const handleChange = (e) => {
  setFretNum(e.target.value)
  console.log(fretNum);
}

const clicked = (evt) =>{
  const { currentTarget: svg, pageX, pageY } = evt
  const coords = svg.getBoundingClientRect()
  const y_rounded = Math.round(`${pageY - coords.y}`)

  createSvgText(pageX, pageY, coords.x, coords.y,y_rounded, fretNum, svg)

}

const addNewLine = () => {
  const svg = document.getElementById('svg')
  const strings = document.getElementsByClassName('string')
  const stringWidth = strings[0].x2.animVal.value
  const firstString = strings[0].y1.animVal.value
  const sixthString = strings[5].y1.animVal.value

  if(linesCounter < 3){
 const separationLine = document.createElementNS('http://www.w3.org/2000/svg', 'line')
       separationLine.setAttribute('x1',stringWidth)
       separationLine.setAttribute('x2',stringWidth)
       separationLine.setAttribute('y1',firstString)
       separationLine.setAttribute('y2',sixthString)
       separationLine.setAttribute('stroke','grey')
       separationLine.setAttribute('stroke-width',"2")
 svg.appendChild(separationLine);

 [].map.call(document.getElementsByClassName('string'),(el)=> el.setAttribute('x2',`${stringWidth + 270}`))
  setLinesCounter(linesCounter+1)

} else {
  setId(uniqid())
 const newSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
       newSvg.setAttribute('version', "1.1")
       newSvg.setAttribute('width', "90%")
       newSvg.setAttribute('height', "100")
       newSvg.setAttribute('viewBox', `0 ${-sixthString -15} 100 100`)
       newSvg.setAttribute('id', `${id}`)
       newSvg.setAttribute('style', 'fill: red;')
svg.appendChild(newSvg);

}

}
  return (
     <animated.div style={props} className={styles.container}>
       <div className={styles.sheet}>
          <div className={styles.optionsContainer}>
            <section>
              <h4 className={styles.h4}>put the fret number to insert: </h4>
              <input className={styles.input} onChange={handleChange} value={fretNum}/>
            </section>
            <button onClick={addNewLine}>Add new line</button>
          </div>
            <Tab id={id} clicked={clicked} />
       </div>
     </animated.div>
  )
}

export default TabCreator
