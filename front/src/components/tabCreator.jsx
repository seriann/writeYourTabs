import React, {useState, useEffect, useRef} from 'react'
import styles from "../styles/tabCreator.module.css"
import { useSpring, animated } from 'react-spring'
import Tab from "./tabs/start"
import Line from "./tabs/extraLine"
import { createSvgText, uniqid, createSeparationLine } from "./custom_functions/functions"

const TabCreator = () => {
 const [fretNum, setFretNum] = useState(0)
 const [linesCounter, setLinesCounter] = useState(1)
 const [idHistory, setIdHistory] = useState([])
 const [className, setClassName] = useState("")
 const props = useSpring({
      to: { opacity: 1, transform: 'translate3d(0%,0,0)' },
      from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    })
 const inputRef = useRef()
    document.onkeydown = function (e){
     e = e || window.event;
     if ((e.which == 90 || e.keyCode == 90) && e.ctrlKey) {
         goBack()
     }
}

const goBack = () => {
  if(idHistory.length > 0){
    const toRemove = document.getElementById(idHistory[idHistory.length-1])
    toRemove.remove()
    setIdHistory(idHistory.filter(el => el !== toRemove.id))
  }
}

const handleChange = (e) => {
  setFretNum(e.target.value)
  console.log(fretNum);
}

const clicked = (evt) =>{  //dibuja el numero/simbolo del input con las coordenadas del mouse
  const { currentTarget: svg, pageX, pageY } = evt
  const coords = svg.getBoundingClientRect()
  const y_rounded = Math.round(`${pageY - coords.y}`)
  const id = uniqid()

  const prueba = createSvgText(pageX, pageY, coords.x, coords.y,y_rounded, fretNum, svg, id)
   if(prueba != undefined) {
     setIdHistory([...idHistory, prueba])
     inputRef.current.focus()
   }

}

                            //agrega nueva linea con espacio normal (todavia no hay otro tamaño)
const addNewLine = () => {  //a mejorar
  const svg = document.getElementById('svg')
  const strings = document.getElementsByClassName('string')
/*const stringWidth = strings[0].x2.animVal.value
  const firstString = strings[0].y1.animVal.value
  const sixthString = strings[5].y1.animVal.value*/
  const strings1Inf = new Array(strings[0].x2.animVal.value,strings[0].y1.animVal.value, strings[5].y1.animVal.value) // equivalente a las variables de arriba (para ahorrar espacio)
  const arr = []
  if(linesCounter < 3){
 const separationLine = document.createElementNS('http://www.w3.org/2000/svg', 'line')
       separationLine.setAttribute('x1',strings1Inf[0])
       separationLine.setAttribute('x2',strings1Inf[0])
       separationLine.setAttribute('y1',strings1Inf[1])
       separationLine.setAttribute('y2',strings1Inf[2])
       separationLine.setAttribute('stroke','grey')
       separationLine.setAttribute('stroke-width',"2")
 svg.appendChild(separationLine);

 arr.map.call(document.getElementsByClassName('string'),(el)=> el.setAttribute('x2',`${strings1Inf[0] + 270}`))

} else if (linesCounter > 3 && linesCounter < 6) {
  let svg2 = document.getElementById('svg2')
  let strings2 = document.getElementsByClassName('string2')
  let strings2Inf = new Array(strings2[0].x2.animVal.value,strings2[0].y1.animVal.value, strings2[5].y1.animVal.value)
   createSeparationLine(strings2Inf[0],strings2Inf[1],strings2Inf[2],svg2)

  arr.map.call(document.getElementsByClassName('string2'),(el)=> el.setAttribute('x2',`${strings2Inf[0] + 270}`))
} else if (linesCounter > 6 && linesCounter < 9){
  let svg3 = document.getElementById('svg3')
  let strings3 = document.getElementsByClassName('string3')
  let strings3Inf = new Array(strings3[0].x2.animVal.value,strings3[0].y1.animVal.value, strings3[5].y1.animVal.value)
  createSeparationLine(strings3Inf[0],strings3Inf[1],strings3Inf[2],svg3)
  arr.map.call(document.getElementsByClassName('string3'),(el)=> el.setAttribute('x2',`${strings3Inf[0] + 270}`))
} else if (linesCounter > 9 && linesCounter < 12){
  let svg4 = document.getElementById('svg4')
  let strings4 = document.getElementsByClassName('string4')
  let strings4Inf = new Array(strings4[0].x2.animVal.value,strings4[0].y1.animVal.value, strings4[5].y1.animVal.value)
  createSeparationLine(strings4Inf[0],strings4Inf[1],strings4Inf[2],svg4)
  arr.map.call(document.getElementsByClassName('string4'),(el)=> el.setAttribute('x2',`${strings4Inf[0] + 270}`))
}else if (linesCounter > 12 && linesCounter < 15){
  let svg5 = document.getElementById('svg5')
  let strings5 = document.getElementsByClassName('string5')
  let strings5Inf = new Array(strings5[0].x2.animVal.value,strings5[0].y1.animVal.value, strings5[5].y1.animVal.value)
  createSeparationLine(strings5Inf[0],strings5Inf[1],strings5Inf[2],svg5)
  arr.map.call(document.getElementsByClassName('string5'),(el)=> el.setAttribute('x2',`${strings5Inf[0] + 270}`))
}else if(linesCounter > 15 && linesCounter < 18){
  let svg6 = document.getElementById('svg6')
  let string6 = document.getElementsByClassName('string6')
  let strings6Inf = new Array(string6[0].x2.animVal.value,string6[0].y1.animVal.value, string6[5].y1.animVal.value)
  createSeparationLine(strings6Inf[0],strings6Inf[1],strings6Inf[2],svg6)
  arr.map.call(document.getElementsByClassName('string6'),(el)=> el.setAttribute('x2',`${strings6Inf[0] + 270}`))
}
console.log(linesCounter);
setLinesCounter(linesCounter+1)

}
  return (
     <animated.div style={props} className={styles.container}>
       <div className={styles.sheet}>
          <div className={styles.optionsContainer}>
            <section>
              <h4 className={styles.h4}>put the fret number to insert: </h4>
              <input
              ref= {inputRef}
              className={styles.input}
              onChange={handleChange}
              value={fretNum}
              />
            </section>
            <button onClick={goBack}>Undo</button>(ctrl + z)
            <button onClick={addNewLine}>Add new line</button>
          </div>
            <Tab
            clicked={clicked}
            counter={linesCounter}
            />
       </div>
     </animated.div>
  )
}

export default TabCreator
