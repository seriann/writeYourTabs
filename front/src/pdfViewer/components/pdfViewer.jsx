import React from 'react'
import styles from '../styles/index.module.css'
import Viewer from '@phuocng/react-pdf-viewer'
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';

const Pdf = ({tab}) => {

  return <div className={styles.container}>
          <Viewer fileUrl={`${tab.pdf}`}/>
         </div>
}

export default Pdf
