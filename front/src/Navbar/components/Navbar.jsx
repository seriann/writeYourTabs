import React from 'react'
import styles from "../styles/navbar.module.css"
import { Link } from 'react-router-dom'
import ButtonTab from "../../buttons/buttonsTab"

const Navbar = ({handleSubmit,handleChange,input}) => {
  return (
    <div className={styles.nav} >
      <h3 className={styles.title}>WriteYourTabs</h3>
      <form
       onSubmit={handleSubmit}
       className={styles.formContainer}>
        <input
         value={input}
         onChange={handleChange}
         className={styles.navInput}
         type="search"
         placeholder="Search @users, tabs..."/>
        <button className={styles.boton} type="submit"><i className="fas fa-search"></i></button>
      </form>
      <section className={styles.navbarSection}>
        <ButtonTab />
      </section>
    </div>
  )
}

export default Navbar
