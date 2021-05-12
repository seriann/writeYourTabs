import React, { useRef } from 'react'
import Loader from '../Loader'
import styles from '../../styles/modal.module.css'


const Modal = ({loader,isLoading,setModal,submitRef,handleSave,handleSubmit}) => {


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
              onClick={()=>handleSubmit(false,null,1)}
              className={styles.optButton}>Download</button>
              {isLoading === true && loader === 1?
                <Loader/> : null
              }
           </section>
           <section className={styles.section}>
             <label className={styles.label}>Download and upload it to the server</label>
             <button
             onClick={()=>handleSubmit(null,true,2)}
             className={styles.optButton}>Download & upload</button>
             {isLoading === true && loader === 2?
               <Loader/> : null
             }
           </section>
           <section className={styles.section}>
             <label className={styles.label}>just upload it to the server</label>
             <button
              onClick={()=>handleSubmit(true,null,3)}
              ref={submitRef}
              className={styles.optButton}>Upload</button>
              {isLoading === true && loader === 3?
                <Loader/> : null
              }
           </section>
         </div>
         <hr />
       </div>
    </div>
  )
}

export default Modal
