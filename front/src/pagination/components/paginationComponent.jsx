import React from 'react'
import styles from '../styles/pagination.module.css'

export default ({currentPage,handleNext,handlePrevious,renderPageNumbers,handleClick,maxPageLimit,pages}) => {
  return <ul className={styles.container}>
           <li className={styles.li}><i className="fas fa-angle-double-left"></i></li>
           <li
           className={styles.li}
           onClick={handlePrevious}
           disabled={currentPage == pages[0] ? true : false}
           >
             <i className="fas fa-angle-left"></i>
           </li>
            {renderPageNumbers}

           <li
           onClick={handleNext}
           className={styles.li}
           disabled={currentPage == pages[pages.length - 1] ? true : false}
           >
             <i className="fas fa-angle-right"></i>
           </li>
           <li className={styles.li}><i className="fas fa-angle-double-right"></i></li>
         </ul>
}
