import React from 'react'
import styles from "../../styles/start.module.css"

const Start = ({clicked, id}) => {
  return (
     <svg version="1.1"
      baseProfile="full"
      width="90%" height="600"

      id="svg"
      onClick={clicked}
      xmlns="http://www.w3.org/2000/svg">
      <line x1="30" y1="15" x2="300" y2="15" className="string" stroke="grey" strokeWidth="1"></line>
      <line x1="30" y1="30" x2="300" y2="30" className="string" stroke="grey" strokeWidth="1"></line>
      <line x1="30" y1="45" x2="300" y2="45" className="string" stroke="grey" strokeWidth="1"></line>
      <line x1="30" y1="60" x2="300" y2="60" className="string" stroke="grey" strokeWidth="1"></line>
      <line x1="30" y1="75" x2="300" y2="75" className="string" stroke="grey" strokeWidth="1"></line>
      <line x1="30" y1="90" x2="300" y2="90" className="string" stroke="grey" strokeWidth="1"></line>

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

//<line x1="300" y1="15" x2="300" y2="90" stroke="grey" strokeWidth="2"></line> agregar

/*<div className={styles.string}></div><div className={styles.stringInline}></div>
<div className={styles.string}></div><div className={styles.stringInline}></div>
<div className={styles.string}></div><div className={styles.stringInline}></div>
<div className={styles.string}></div><div className={styles.stringInline}></div>
<div className={styles.string}></div><div className={styles.stringInline}></div>
<div className={styles.string}></div><div className={styles.stringInline}></div>*/
