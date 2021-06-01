import React from 'react'
import styles from '../styles/pagination.module.css'

export default ({renderPageNumbers,handleClick,maxPageLimit,page}) => {
  return <ul className={styles.container}>
           <li className={styles.li}><i className="fas fa-angle-double-left"></i></li>
           <li className={styles.li}><i className="fas fa-angle-left"></i></li>
            {renderPageNumbers}
            
           <li className={styles.li}><i className="fas fa-angle-right"></i></li>
           <li className={styles.li}><i className="fas fa-angle-double-right"></i></li>
         </ul>
}
