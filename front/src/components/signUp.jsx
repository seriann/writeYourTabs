import React from 'react'
import styles from "../styles/signUp.module.css"
import InputFileUploader from "./buttons/inputFile"
import ErrMsg from "./errors/msgerror"

const SignUp = ({handleChange,email,password,handleFile,handleImgError,handleSubmit,username,image,errMsg,name,errBool}) => {

  return (
    <div className={styles.container}>
      <h3 className={styles.h}>Sign up</h3>
      <form onSubmit={handleSubmit} className={styles.containerForm} encType="multipart/form-data">
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
         value={name}
         type="text"
         placeholder="name"
         name="name" required></input>

         <input
         onChange={handleChange}
         className={styles.input}
         value={username}
         type="text"
         placeholder="username"
         name="username" required></input>
         <InputFileUploader
         text="Profile photo"
         onFileSelectError={handleImgError}
         onFileSelectSuccess={handleFile}
         />
         {
           errBool && <ErrMsg text={errMsg} />
         }
        <p className={styles.p}>{image.name}</p>
          <input className={styles.button} type="submit"></input>
      </form>
    </div>
  )
}

export default SignUp
