import React from 'react'
import styles from "../../styles/start.module.css"

const Start = ({viewBox,author,title,counter, clicked,svgContainerRef}) => {

  return (
    <div
     id="svgContainer"
     ref={svgContainerRef}
     className={styles.container}
    >
    <h2 className={styles.title}>{title} - {author}</h2>

     <svg version="1.1"
      baseProfile="full"
      width="90%" height="auto"
      id="svg"
      viewBox={viewBox}
      preserveAspectRatio="xMinYMin meet"
      onClick={clicked}
      xmlns="http://www.w3.org/2000/svg">
      <line x1="30" y1="15" x2="300" y2="15" className="string" stroke="grey" strokeWidth="1"></line>
      <line x1="30" y1="30" x2="300" y2="30" className="string" stroke="grey" strokeWidth="1"></line>
      <line x1="30" y1="45" x2="300" y2="45" className="string" stroke="grey" strokeWidth="1"></line>
      <line x1="30" y1="60" x2="300" y2="60" className="string" stroke="grey" strokeWidth="1"></line>
      <line x1="30" y1="75" x2="300" y2="75" className="string" stroke="grey" strokeWidth="1"></line>
      <line x1="30" y1="90" x2="300" y2="90" className="string" stroke="grey" strokeWidth="1"></line>

      <text x="15" y="13">1</text>

      <text x="30" y="20">e</text>
      <text x="30" y="35">B</text>
      <text x="30" y="50">G</text>
      <text x="30" y="65">D</text>
      <text x="30" y="80">A</text>
      <text x="30" y="95">E</text>

     {counter > 3 &&

      <svg id="svg2">
      <text x="15" y="113">2</text>
       <line x1="30" y1="115" x2="300" y2="115" className="string2" stroke="grey" strokeWidth="1"></line>
       <line x1="30" y1="130" x2="300" y2="130" className="string2" stroke="grey" strokeWidth="1"></line>
       <line x1="30" y1="145" x2="300" y2="145" className="string2" stroke="grey" strokeWidth="1"></line>
       <line x1="30" y1="160" x2="300" y2="160" className="string2" stroke="grey" strokeWidth="1"></line>
       <line x1="30" y1="175" x2="300" y2="175" className="string2" stroke="grey" strokeWidth="1"></line>
       <line x1="30" y1="190" x2="300" y2="190" className="string2" stroke="grey" strokeWidth="1"></line>
       </svg>

     }
     {
     counter > 6 &&

       <svg id="svg3">
       <text x="15" y="213">3</text>
        <line x1="30" y1="215" x2="300" y2="215" className="string3" stroke="grey" strokeWidth="1"></line>
        <line x1="30" y1="230" x2="300" y2="230" className="string3" stroke="grey" strokeWidth="1"></line>
        <line x1="30" y1="245" x2="300" y2="245" className="string3" stroke="grey" strokeWidth="1"></line>
        <line x1="30" y1="260" x2="300" y2="260" className="string3" stroke="grey" strokeWidth="1"></line>
        <line x1="30" y1="275" x2="300" y2="275" className="string3" stroke="grey" strokeWidth="1"></line>
        <line x1="30" y1="290" x2="300" y2="290" className="string3" stroke="grey" strokeWidth="1"></line>
        </svg>

        }
        {
        counter > 9 &&

          <svg id="svg4">
          <text x="15" y="313">4</text>
           <line x1="30" y1="315" x2="300" y2="315" className="string4" stroke="grey" strokeWidth="1"></line>
           <line x1="30" y1="330" x2="300" y2="330" className="string4" stroke="grey" strokeWidth="1"></line>
           <line x1="30" y1="345" x2="300" y2="345" className="string4" stroke="grey" strokeWidth="1"></line>
           <line x1="30" y1="360" x2="300" y2="360" className="string4" stroke="grey" strokeWidth="1"></line>
           <line x1="30" y1="375" x2="300" y2="375" className="string4" stroke="grey" strokeWidth="1"></line>
           <line x1="30" y1="390" x2="300" y2="390" className="string4" stroke="grey" strokeWidth="1"></line>
           </svg>

           }
        {
        counter > 12 &&

         <svg id="svg5" >
         <text x="15" y="413">5</text>
          <line x1="30" y1="415" x2="300" y2="415" className="string5" stroke="grey" strokeWidth="1"></line>
          <line x1="30" y1="430" x2="300" y2="430" className="string5" stroke="grey" strokeWidth="1"></line>
          <line x1="30" y1="445" x2="300" y2="445" className="string5" stroke="grey" strokeWidth="1"></line>
          <line x1="30" y1="460" x2="300" y2="460" className="string5" stroke="grey" strokeWidth="1"></line>
          <line x1="30" y1="475" x2="300" y2="475" className="string5" stroke="grey" strokeWidth="1"></line>
          <line x1="30" y1="490" x2="300" y2="490" className="string5" stroke="grey" strokeWidth="1"></line>
          </svg>

          }
         {
         counter > 15 &&

          <svg id="svg6">
          <text x="15" y="513">6</text>
           <line x1="30" y1="515" x2="300" y2="515" className="string6" stroke="grey" strokeWidth="1"></line>
           <line x1="30" y1="530" x2="300" y2="530" className="string6" stroke="grey" strokeWidth="1"></line>
           <line x1="30" y1="545" x2="300" y2="545" className="string6" stroke="grey" strokeWidth="1"></line>
           <line x1="30" y1="560" x2="300" y2="560" className="string6" stroke="grey" strokeWidth="1"></line>
           <line x1="30" y1="575" x2="300" y2="575" className="string6" stroke="grey" strokeWidth="1"></line>
           <line x1="30" y1="590" x2="300" y2="590" className="string6" stroke="grey" strokeWidth="1"></line>
           </svg>

           }
           {
           counter > 18 &&

            <svg id="svg7">
            <text x="15" y="613">7</text>
             <line x1="30" y1="615" x2="300" y2="615" className="string7" stroke="grey" strokeWidth="1"></line>
             <line x1="30" y1="630" x2="300" y2="630" className="string7" stroke="grey" strokeWidth="1"></line>
             <line x1="30" y1="645" x2="300" y2="645" className="string7" stroke="grey" strokeWidth="1"></line>
             <line x1="30" y1="660" x2="300" y2="660" className="string7" stroke="grey" strokeWidth="1"></line>
             <line x1="30" y1="675" x2="300" y2="675" className="string7" stroke="grey" strokeWidth="1"></line>
             <line x1="30" y1="690" x2="300" y2="690" className="string7" stroke="grey" strokeWidth="1"></line>
             </svg>

             }
             {
             counter > 21 &&

              <svg id="svg8">
              <text x="15" y="713">8</text>
               <line x1="30" y1="715" x2="300" y2="715" className="string8" stroke="grey" strokeWidth="1"></line>
               <line x1="30" y1="730" x2="300" y2="730" className="string8" stroke="grey" strokeWidth="1"></line>
               <line x1="30" y1="745" x2="300" y2="745" className="string8" stroke="grey" strokeWidth="1"></line>
               <line x1="30" y1="760" x2="300" y2="760" className="string8" stroke="grey" strokeWidth="1"></line>
               <line x1="30" y1="775" x2="300" y2="775" className="string8" stroke="grey" strokeWidth="1"></line>
               <line x1="30" y1="790" x2="300" y2="790" className="string8" stroke="grey" strokeWidth="1"></line>
               </svg>

               }
             </svg>
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
