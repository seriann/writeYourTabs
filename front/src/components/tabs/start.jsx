import React from 'react'
import styles from "../../styles/start.module.css"
import { createSvgText } from "../custom_functions/functions"

const Start = ({fretNum}) => {


  const clicked = (evt) =>{
    const { currentTarget: svg, pageX, pageY } = evt
    const coords = svg.getBoundingClientRect()
    const y_rounded = Math.round(`${pageY - coords.y}`)

    createSvgText(pageX, pageY, coords.x, coords.y,y_rounded, fretNum, svg)

  }

  return (
     <svg version="1.1"
      baseProfile="full"
      width="1000" height="5000"
      viewBox="0 0 1001 5001"
      onClick={clicked}
      xmlns="http://www.w3.org/2000/svg">
      <line x1="30" y1="15" x2="300" y2="15" stroke="grey" stroke-width="1"></line>
      <line x1="30" y1="30" x2="300" y2="30" stroke="grey" stroke-width="1"></line>
      <line x1="30" y1="45" x2="300" y2="45" stroke="grey" stroke-width="1"></line>
      <line x1="30" y1="60" x2="300" y2="60" stroke="grey" stroke-width="1"></line>
      <line x1="30" y1="75" x2="300" y2="75" stroke="grey" stroke-width="1"></line>
      <line x1="30" y1="90" x2="300" y2="90" stroke="grey" stroke-width="1"></line>

      <text x="30" y="20">e</text>
      <text x="30" y="35">B</text>
      <text x="30" y="50">G</text>
      <text x="30" y="65">D</text>
      <text x="30" y="80">A</text>
      <text x="30" y="95">E</text>

     </svg>

  )
}



export default Start



/*<div className={styles.string}></div><div className={styles.stringInline}></div>
<div className={styles.string}></div><div className={styles.stringInline}></div>
<div className={styles.string}></div><div className={styles.stringInline}></div>
<div className={styles.string}></div><div className={styles.stringInline}></div>
<div className={styles.string}></div><div className={styles.stringInline}></div>
<div className={styles.string}></div><div className={styles.stringInline}></div>*/
