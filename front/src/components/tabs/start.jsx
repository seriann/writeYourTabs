import React from 'react'
import styles from "../../styles/start.module.css"

const Start = ({counter, clicked,svgContainerRef}) => {

  return (
    <div
     id="svgContainer"
     ref={svgContainerRef}
     className={styles.container}
    >
     <svg version="1.1"
      baseProfile="full"
      width="90%" height="150"
      id="svg"
      viewBox="0 0 830 150"
      preserveAspectRatio="xMinYMin meet" class="svg-content"
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
     {counter > 3 &&
      <svg version="1.1"
       baseProfile="full"
       id="svg2"
       width="90%" height="150"
       onClick={clicked}
       xmlns="http://www.w3.org/2000/svg">
       <line x1="30" y1="15" x2="300" y2="15" className="string2" stroke="grey" strokeWidth="1"></line>
       <line x1="30" y1="30" x2="300" y2="30" className="string2" stroke="grey" strokeWidth="1"></line>
       <line x1="30" y1="45" x2="300" y2="45" className="string2" stroke="grey" strokeWidth="1"></line>
       <line x1="30" y1="60" x2="300" y2="60" className="string2" stroke="grey" strokeWidth="1"></line>
       <line x1="30" y1="75" x2="300" y2="75" className="string2" stroke="grey" strokeWidth="1"></line>
       <line x1="30" y1="90" x2="300" y2="90" className="string2" stroke="grey" strokeWidth="1"></line>
       </svg>
     }
     {
     counter > 6 &&
       <svg version="1.1"
        baseProfile="full"
        id="svg3"
        width="90%" height="150"
        onClick={clicked}
        xmlns="http://www.w3.org/2000/svg">
        <line x1="30" y1="15" x2="300" y2="15" className="string3" stroke="grey" strokeWidth="1"></line>
        <line x1="30" y1="30" x2="300" y2="30" className="string3" stroke="grey" strokeWidth="1"></line>
        <line x1="30" y1="45" x2="300" y2="45" className="string3" stroke="grey" strokeWidth="1"></line>
        <line x1="30" y1="60" x2="300" y2="60" className="string3" stroke="grey" strokeWidth="1"></line>
        <line x1="30" y1="75" x2="300" y2="75" className="string3" stroke="grey" strokeWidth="1"></line>
        <line x1="30" y1="90" x2="300" y2="90" className="string3" stroke="grey" strokeWidth="1"></line>
        </svg>
        }
        {
        counter > 9 &&
          <svg version="1.1"
           baseProfile="full"
           id="svg4"
           width="90%" height="150"
           onClick={clicked}
           xmlns="http://www.w3.org/2000/svg">
           <line x1="30" y1="15" x2="300" y2="15" className="string4" stroke="grey" strokeWidth="1"></line>
           <line x1="30" y1="30" x2="300" y2="30" className="string4" stroke="grey" strokeWidth="1"></line>
           <line x1="30" y1="45" x2="300" y2="45" className="string4" stroke="grey" strokeWidth="1"></line>
           <line x1="30" y1="60" x2="300" y2="60" className="string4" stroke="grey" strokeWidth="1"></line>
           <line x1="30" y1="75" x2="300" y2="75" className="string4" stroke="grey" strokeWidth="1"></line>
           <line x1="30" y1="90" x2="300" y2="90" className="string4" stroke="grey" strokeWidth="1"></line>
           </svg>
           }
        {
        counter > 12 &&
         <svg version="1.1"
          baseProfile="full"
          id="svg5"
          width="90%" height="150"
          onClick={clicked}
          xmlns="http://www.w3.org/2000/svg">
          <line x1="30" y1="15" x2="300" y2="15" className="string5" stroke="grey" strokeWidth="1"></line>
          <line x1="30" y1="30" x2="300" y2="30" className="string5" stroke="grey" strokeWidth="1"></line>
          <line x1="30" y1="45" x2="300" y2="45" className="string5" stroke="grey" strokeWidth="1"></line>
          <line x1="30" y1="60" x2="300" y2="60" className="string5" stroke="grey" strokeWidth="1"></line>
          <line x1="30" y1="75" x2="300" y2="75" className="string5" stroke="grey" strokeWidth="1"></line>
          <line x1="30" y1="90" x2="300" y2="90" className="string5" stroke="grey" strokeWidth="1"></line>
          </svg>
          }
         {
         counter > 15 &&
          <svg version="1.1"
           baseProfile="full"
           id="svg6"
           width="90%" height="150"
           onClick={clicked}
           xmlns="http://www.w3.org/2000/svg">
           <line x1="30" y1="15" x2="300" y2="15" className="string6" stroke="grey" strokeWidth="1"></line>
           <line x1="30" y1="30" x2="300" y2="30" className="string6" stroke="grey" strokeWidth="1"></line>
           <line x1="30" y1="45" x2="300" y2="45" className="string6" stroke="grey" strokeWidth="1"></line>
           <line x1="30" y1="60" x2="300" y2="60" className="string6" stroke="grey" strokeWidth="1"></line>
           <line x1="30" y1="75" x2="300" y2="75" className="string6" stroke="grey" strokeWidth="1"></line>
           <line x1="30" y1="90" x2="300" y2="90" className="string6" stroke="grey" strokeWidth="1"></line>
           </svg>
           }
    </div>
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
