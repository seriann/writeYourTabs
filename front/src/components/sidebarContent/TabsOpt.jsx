import React from 'react'
import styles from "../../styles/tabsOpt.module.css"

const TabsOpt = ({ inputRef, handleChange, fretNum, goBack, addNewLine,handleSave }) => {
  return(
    <div className={styles.inf}>
     <section className={styles.infRow}>
       <h4 className={styles.h4}>fret number: </h4>
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
     <button
     onClick={addNewLine}
     className={styles.otherButton}
     >Add line</button>
     <button onClick={handleSave} className={styles.otherButton}>save tab</button>
    </div>
  )
}

export default TabsOpt
