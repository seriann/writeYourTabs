import React from 'react'
import ContentNotLogged from "./sidebarContent/sidebarNotLogged"
import styles from "../styles/sidebar.module.css"

const Sidebar = ({ logged }) => {
  console.log("usuario logueado en sidebar",logged);
  return(
    <div className={styles.container}>
      <ContentNotLogged />
    </div>
  )
}

export default Sidebar
