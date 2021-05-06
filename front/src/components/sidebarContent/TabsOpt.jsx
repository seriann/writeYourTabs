import React,{useRef} from 'react'
import styles from "../../styles/tabsOpt.module.css"

const TabsOpt = ({modal,setModal,author,title,text,genre,pdf,firstString,secondString,thirdString,fourthString,fifthString,sixthString, inputRef, handleChange, fretNum, goBack, addNewLine,handleSave }) => {
const submitRef = useRef()

const handleModal = () => {
  setModal(true)
}


  return(
   <div className={styles.inf}>
    <div className={styles.infCol}>
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
        <div className={styles.infCol}>
          <button
          onClick={goBack}
          className={styles.otherButton}
          >Undo (ctrl + z)</button>
          <button
          onClick={addNewLine}
          className={styles.otherButton}
          >Add line</button>
          <button
          onClick={handleModal}
          className={styles.otherButton}>save tab</button>
        </div>

      </div>
      <div className={styles.infCol2}>
        <h4 className={styles.h4}>tuning: </h4>
        <section className={styles.inpSection}>
          <input onChange={handleChange} value={firstString} name="firstString" className={styles.inputTg} />
          <input onChange={handleChange} value={secondString} name="secondString" className={styles.inputTg} />
          <input onChange={handleChange} value={thirdString} name="thirdString" className={styles.inputTg} />
          <input onChange={handleChange} value={fourthString} name="fourthString" className={styles.inputTg} />
          <input onChange={handleChange} value={fifthString} name="fifthString" className={styles.inputTg} />
          <input onChange={handleChange} value={sixthString} name="sixthString" className={styles.inputTg} />
        </section>
      </div>
    </div>
  )
}

export default TabsOpt
