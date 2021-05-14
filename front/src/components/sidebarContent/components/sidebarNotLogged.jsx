import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styles from "../styles/sidebarNotLogged.module.css"
import { loggUser } from "../../../redux/action-creators/login"
import { fetchTabs } from "../../../redux/action-creators/tabs"
import SignUp from "../container/signUpContainer"
import ErrorMsg from "../../errors/msgerror"
import API from "../../../api/index"
import { useSpring, animated } from 'react-spring'

const SidebarContent = () => {
const dispatch = useDispatch()
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [isLoading, setIsLoading] = useState(false)
const [errorMsg, setErrorMsg] = useState("")
const [errorBool, setErrorBool] = useState(false)
const [signup, setSignup] = useState(false)
const myTabs= useSelector((state)=> {
  return state.tabs.myTabs
})

const props = useSpring({
    to: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    from: { opacity: 0, transform: 'translate3d(-100%,0,0)' },
  })

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
const goBack = () => {
  setSignup(false)
}
const handleSubmit = (e) => {
  e.preventDefault()
  setIsLoading(true)
  API.post("/users/login",{
    email,
    password
  })
  .then(res => res.data)
  .then(data => {
    dispatch(loggUser(data))
    dispatch(fetchTabs(data._id))
    console.log("aver las tab", myTabs);
  })
  .catch(err =>{
     console.log("upps..",err)
     setIsLoading(false)
     setErrorBool(true)
     setTimeout(()=> setErrorBool(false),3000)
   })
}

  return(
    <div className={styles.container}>
    {
      signup?
      <div>
        <button className={styles.back} onClick={goBack}>
        <i  className="far fa-arrow-alt-circle-left"></i>
        </button>
          <SignUp goBack={goBack} />
      </div>
      :
      <animated.div style={props}>
      <h3 className={styles.h}> Sign in </h3>
       <form onSubmit={handleSubmit} className={styles.containerForm}>
          <input onChange={handleChange} className={styles.input} value={email} type="text" placeholder="email" name="email" required></input>
          <input onChange={handleChange} className={styles.input} value={password} type="password" placeholder="password" name="password" required></input>
          <div className={isLoading?styles.loader: null}></div>
          {errorBool?<ErrorMsg text="Sorry, something went wrong" />:null}
          <input className={styles.button} type="submit"></input>
       </form>
       <div className={styles.signUp}>
          <p>Don't have an account yet?</p>
          <Link onClick={() => setSignup(true)} to="#" className={styles.link}>Sign up here</Link>

       </div>
       </animated.div>
    }

    </div>
  )
}
export default SidebarContent
