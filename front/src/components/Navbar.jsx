import React from 'react'
import styles from "../styles/navbar.module.css"
import { Link } from 'react-router-dom'
import ButtonTab from "./buttons/buttonsTab"

const Navbar = () => {
  return (
    <div className={styles.nav} >
      <h3 className={styles.title}>WriteYourTabs</h3>
      <form className={styles.formContainer}>
        <input className={styles.navInput} type="search" placeholder="Search"/>
        <button className={styles.boton} type="submit"><i className="fas fa-search"></i></button>
      </form>
      <section className={styles.navbarSection}>
        <ButtonTab />
      </section>
    </div>
  )
}

export default Navbar
