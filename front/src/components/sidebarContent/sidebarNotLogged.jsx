import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import styles from "../../styles/sidebarNotLogged.module.css"
import { loggUser } from "../../redux/action-creators/login"
import API from "../../api/index"

const SidebarContent = () => {
const dispatch = useDispatch()
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

const handleChange = (e) => {
  const { name } = e.target
  switch (name) {
    case "email":
      setEmail(e.target.value)
      break;
    case "password":
      setPassword(e.target.value)
     break;
    default:
      return;
  }
}

const handleSubmit = (e) => {
  e.preventDefault()
  console.log("login attempt...");
  console.log("email:",email, "password:",password);
  API.post("/users/login",{
    email,
    password
  })
  .then(res => res.data)
  .then(data => {
    dispatch(loggUser(data))
    console.log("user loged",data);
  })
  .catch(err => console.log("upps..",err))
}

  return(
    <div className={styles.container}>
     <h3 className={styles.h}> Sign in </h3>
      <form onSubmit={handleSubmit} className={styles.containerForm}>
         <input onChange={handleChange} className={styles.input} value={email} type="text" placeholder="email" name="email" required></input>
         <input onChange={handleChange} className={styles.input} value={password} type="password" placeholder="password" name="password" required></input>
         <input className={styles.button} type="submit"></input>
      </form>
      <div className={styles.signUp}>
         <p>Don't have an account yet?</p>
         <Link to="#" className={styles.link}>Sign up here</Link>
      </div>
    </div>
  )
}
export default SidebarContent
