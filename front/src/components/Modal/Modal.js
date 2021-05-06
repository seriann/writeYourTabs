import React, { useRef } from 'react'
import styles from '../../styles/modal.module.css'
import API from '../../api/index'

const Modal = ({setModal,submitRef,handleSave,handleSubmit}) => {


 const handleClose = () => {
   setModal(false)
 }


  return (
    <div className={styles.container}>
      <div className={styles.modalBody}>
       <button className={styles.button} onClick={handleClose}><i className="fas fa-times"></i></button>
         <div className={styles.title}>
           <p className={styles.p}>Select your best option</p>
         </div>
          <hr />
         <div className={styles.options}>
           <section className={styles.section}>
             <label className={styles.label}>download it on your computer</label>
             <button
              onClick={()=>handleSave(false)}
              className={styles.optButton}>Download</button>
           </section>
           <section className={styles.section}>
             <label className={styles.label}>Download and upload it to the server</label>
             <button className={styles.optButton}>Download & upload</button>
           </section>
           <section className={styles.section}>
             <label className={styles.label}>just upload it to the server</label>
             <button
              onClick={handleSubmit}
              ref={submitRef}
              className={styles.optButton}>Upload</button>
           </section>
         </div>
         <hr />
       </div>
    </div>
  )
}

export default Modal
