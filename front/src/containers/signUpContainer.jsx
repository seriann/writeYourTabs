import React, { useState } from 'react'
import SignUp from "../components/signUp"

const SignUpContainer = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [photo, setPhoto] = useState("")

  const handleChange = (e) => {
    const { name } = e.target
    switch (name) {
      case "email":
        setEmail(e.target.value)
        break;
      case "password":
        setPassword(e.target.value)
       break;
       case "username":
         setUsername(e.target.value)
        break;
      default:
        return;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    API.post("/users",{
      email,
      password
    })
    .then(res => res.data)
    .then(data => {
      console.log("registred");
    })
    .catch(err =>console.log("upps..",err))
  }


  return(
    <SignUp username={username} photo={photo} handleSubmit={handleSubmit} handleChange={handleChange} email={email} password={password}/>
  )
}

export default SignUpContainer
