import React from 'react'
import styles from "../styles/home.module.css"
import Navbar from '../containers/NavbarContainer'
import Sidebar from '../containers/SidebarContainer'

const Home = () => {
  return (
    <div>
     <Navbar />
      <div className={styles.container}>

        <Sidebar />
       <div className={styles.homeContainer}> home </div>
      </div>
    </div>
  )
}

export default Home
