import React from 'react'
import styles from "../styles/navbar.module.css"
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className={styles.nav} >
      <h3 className={styles.title}>WriteYourTabs</h3>
      <form className={styles.formContainer}>
        <input className={styles.navInput} type="search" placeholder="Search"/>
        <button className={styles.boton} type="submit"><i className="fas fa-search"></i></button>
      </form>
      <section className={styles.navbarSection}>
        <button className={styles.b}><Link className={styles.c}>Home</Link></button>
        <button className={styles.ab}><Link className={styles.c}> MyTabs</Link></button>
        <button className={styles.b}><Link className={styles.c}>Create Tab</Link></button>
      </section>
    </div>
  )
}

export default Navbar
