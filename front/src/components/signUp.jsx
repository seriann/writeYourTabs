import React from 'react'
import styles from "../styles/signUp.module.css"
import InputFileUploader from "./buttons/inputFile"

const SignUp = ({handleChange, email, password, handleSubmit,username,photo,setPhoto}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.h}>Sign up</h3>
      <form onSubmit={handleSubmit} className={styles.containerForm}>
         <input
         onChange={handleChange}
         className={styles.input}
         value={email}
         type="text"
         placeholder="email"
         name="email" required></input>
         <input
         onChange={handleChange}
         className={styles.input}
         value={password}
         type="password"
         placeholder="password"
         name="password"
         required></input>
         <input
         onChange={handleChange}
         className={styles.input}
         value={username}
         type="text"
         placeholder="username"
         name="username" required></input>
         <InputFileUploader
         name="photo"
         text="Profile photo"
         onFileSelectError={({error})=> console.log(error)}
         onFileSelectSuccess={(file)=>console.log(file)}
         />
          <input className={styles.button} type="submit"></input>
      </form>
    </div>
  )
}

export default SignUp
