import React from 'react'
import styles from "../../styles/tabsOpt.module.css"

const TabsOpt = ({ inputRef, handleChange, fretNum, goBack, addNewLine,handleSave }) => {
  return(
    <div className={styles.inf}>
     <section className={styles.infRow}>
       <h4 className={styles.h4}>put the fret number to insert:  </h4>
       <input
       ref={inputRef}
       onChange={handleChange}
       name="fret"
       value={fretNum}
       className={styles.infInput}
       />
     </section>
     <button
     onClick={goBack}
     className={styles.otherButton}
     >Undo (ctrl + z)</button>
     <button className={styles.otherButton}>Add short line</button>
     <button
     onClick={addNewLine}
     className={styles.otherButton}
     >Add normal line</button>
     <button className={styles.otherButton}>Add long line</button>
     <button className={styles.otherButton}>Add larger line</button>
     <button onClick={handleSave} className={styles.otherButton}>save tab</button>
    </div>
  )
}

export default TabsOpt
