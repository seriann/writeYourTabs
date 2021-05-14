import React from 'react'
import styles from "../styles/signUp.module.css"
import InputFileUploader from "../../buttons/inputFile"
import ErrMsg from "../../errors/msgerror"
import { useSpring, animated } from 'react-spring'

const SignUp = ({isLoading,handleChange,email,password,handleFile,handleImgError,handleSubmit,username,image,errMsg,name,errBool}) => {
  const props = useSpring({
      to: { opacity: 1, transform: 'translate3d(0%,0,0)' },
      from: { opacity: 0, transform: 'translate3d(-100%,0,0)' },
    })

  return (
    <animated.div style={props} className={styles.container}>
      <h3 className={styles.h}>Sign up</h3>
      <form onSubmit={handleSubmit} className={styles.containerForm} encType="multipart/form-data">
        <label className={styles.label}> email must be unique </label>
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

         <label className={styles.label}> username must be unique </label>
         <input
         onChange={handleChange}
         className={styles.input}
         value={username}
         type="text"
         placeholder="username"
         name="username" required>
         </input>

         <input
         onChange={handleChange}
         className={styles.input}
         value={name}
         type="text"
         placeholder="name"
         name="name" required></input>

         <InputFileUploader
         text="Profile photo"
         onFileSelectError={handleImgError}
         onFileSelectSuccess={handleFile}
         />

        <p className={styles.p}>{image.name}</p>
        <div className={isLoading?styles.loader: null}></div>
        {
          errBool && <ErrMsg text={errMsg} />
        }
          <input className={styles.button} type="submit"></input>
      </form>
    </animated.div>
  )
}

export default SignUp
